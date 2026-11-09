// =====================================================================
//  Static build for search engines and link previews.
//
//      node scripts/build-static.mjs [outDir]     (default: _site)
//
//  The pages render their content with JavaScript from data.js, so the
//  HTML a crawler downloads is mostly empty. This script copies the site
//  into outDir and, in that copy:
//    1. runs each page's own scripts in jsdom and saves the rendered
//       markup back into the HTML (the scripts still run in the browser
//       and re-render the same thing, so nothing changes for players);
//    2. writes one real page per feature: features/<id>.html
//       (feature.html?f=<id> now forwards there);
//    3. adds canonical, Open Graph and Twitter tags to every page;
//    4. writes sitemap.xml.
//  The repo itself is never modified. deploy.yml runs this and publishes
//  outDir. Preview locally with:  npx serve _site
// =====================================================================
import { cpSync, existsSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { JSDOM, VirtualConsole } from 'jsdom';

const SITE = 'https://www.cobbleasia.net';
const OG_IMAGE = { path: 'assets/og-image.jpg', width: 1200, height: 630 };
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, process.argv[2] || '_site');

// Pages that are redirects or templates, not content.
const SKIP_PAGES = new Set(['faq.html', 'feature.html']);
// Repo files that are not part of the site.
const NOT_SITE = new Set(['.git', '.github', '.gitignore', 'scripts', 'node_modules', 'README.md', '_site']);

// ---------------------------------------------------------------- copy
if (OUT === ROOT) throw new Error('outDir must not be the repo root');
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
for (const name of readdirSync(ROOT)) {
  if (NOT_SITE.has(name) || resolve(ROOT, name) === OUT) continue;
  cpSync(join(ROOT, name), join(OUT, name), { recursive: true });
}

// ---------------------------------------------------------------- data
const data = {};
vm.createContext(data);
vm.runInContext(
  readFileSync(join(OUT, 'data.js'), 'utf8') + '\n;this.FEATURES = FEATURES; this.FEATURE_ORDER = FEATURE_ORDER;',
  data,
  { filename: 'data.js' }
);
const { FEATURES, FEATURE_ORDER } = data;

// ---------------------------------------------------------------- helpers
const isRelative = (u) => !!u && !/^([a-z][a-z0-9+.-]*:|\/\/|\/|#)/i.test(u);
const localPath = (src) => src.split(/[?#]/)[0];
const plainText = (html) => {
  const d = new JSDOM('').window.document.createElement('div');
  d.innerHTML = html || '';
  return d.textContent.replace(/\s+/g, ' ').trim();
};
const clip = (s, n = 160) => {
  if (s.length <= n) return s;
  const cut = s.slice(0, n - 1);
  return cut.slice(0, cut.lastIndexOf(' ')).replace(/[,;:—–-]+$/, '') + '…';
};

// Run a page's scripts in jsdom and return the rendered DOM.
async function render(file, { url, before } = {}) {
  const html = readFileSync(join(OUT, file), 'utf8');
  const errors = [];
  const virtualConsole = new VirtualConsole();
  virtualConsole.on('jsdomError', (e) => errors.push(e));
  const dom = new JSDOM(html, { url: url || `${SITE}/${file}`, runScripts: 'outside-only', virtualConsole });
  const w = dom.window;

  // Local files (versions.json) resolve from disk; anything remote (the live
  // server-status APIs) never answers, so "checking status…" stays as authored.
  w.fetch = (input) => {
    const u = new URL(String(input), w.location.href);
    if (u.origin === SITE) {
      const p = join(OUT, decodeURIComponent(u.pathname));
      if (existsSync(p)) {
        const body = readFileSync(p, 'utf8');
        return Promise.resolve({ ok: true, status: 200, json: async () => JSON.parse(body), text: async () => body });
      }
      return Promise.resolve({ ok: false, status: 404, json: async () => null, text: async () => '' });
    }
    return new Promise(() => {});
  };

  if (before) before(w.document);

  const ctx = dom.getInternalVMContext();
  for (const s of w.document.querySelectorAll('script[src]')) {
    const src = s.getAttribute('src');
    if (!isRelative(src)) continue;
    const code = readFileSync(join(OUT, localPath(src)), 'utf8');
    vm.runInContext(code, ctx, { filename: localPath(src) });
  }
  await new Promise((r) => setTimeout(r, 50)); // let versions.json resolve
  if (errors.length) throw new Error(`${file}: ${errors.map((e) => e.message).join('; ')}`);

  // Undo what only makes sense once, in a live browser (app.js runs again there).
  const doc = w.document;
  doc.querySelectorAll('.nav-toggle').forEach((e) => e.remove());
  doc.querySelectorAll('[data-wired]').forEach((e) => e.removeAttribute('data-wired'));
  doc.querySelectorAll('.reveal.in').forEach((e) => e.classList.remove('in'));
  doc.documentElement.style.removeProperty('--nav-h');
  if (!doc.documentElement.getAttribute('style')) doc.documentElement.removeAttribute('style');

  // Old-style feature links → the real pages.
  doc.querySelectorAll('a[href*="feature.html?f="]').forEach((a) => {
    const m = a.getAttribute('href').match(/^feature\.html\?f=([\w-]+)(#.*)?$/);
    if (m && FEATURES[m[1]]) a.setAttribute('href', `features/${m[1]}.html${m[2] || ''}`);
  });
  return dom;
}

// Canonical + Open Graph + Twitter tags. Existing tags are left alone.
function addHeadTags(doc, path) {
  const head = doc.head;
  const url = path === 'index.html' ? `${SITE}/` : `${SITE}/${path}`;
  const title = doc.title;
  const desc = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
  const add = (tag, attrs) => {
    const sel = Object.entries(attrs).filter(([k]) => k !== 'content' && k !== 'href')
      .map(([k, v]) => `[${k}="${v}"]`).join('');
    if (head.querySelector(tag + sel)) return;
    const el = doc.createElement(tag);
    for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
    head.appendChild(el);
  };
  add('link', { rel: 'canonical', href: url });
  add('meta', { property: 'og:site_name', content: 'Cobble Asia' });
  add('meta', { property: 'og:type', content: 'website' });
  add('meta', { property: 'og:title', content: title });
  add('meta', { property: 'og:description', content: desc });
  add('meta', { property: 'og:url', content: url });
  add('meta', { property: 'og:image', content: `${SITE}/${OG_IMAGE.path}` });
  add('meta', { property: 'og:image:width', content: String(OG_IMAGE.width) });
  add('meta', { property: 'og:image:height', content: String(OG_IMAGE.height) });
  add('meta', { name: 'twitter:card', content: 'summary_large_image' });
  add('meta', { name: 'twitter:title', content: title });
  add('meta', { name: 'twitter:description', content: desc });
  add('meta', { name: 'twitter:image', content: `${SITE}/${OG_IMAGE.path}` });
}

const write = (path, dom) => {
  mkdirSync(dirname(join(OUT, path)), { recursive: true });
  writeFileSync(join(OUT, path), dom.serialize() + '\n');
  dom.window.close();
};

// ---------------------------------------------------------------- pages
const sitemap = [];
const pages = readdirSync(OUT).filter((f) => f.endsWith('.html') && !SKIP_PAGES.has(f)).sort();
for (const file of pages) {
  const dom = await render(file);
  addHeadTags(dom.window.document, file);
  write(file, dom);
  sitemap.push(file === 'index.html' ? '' : file);
}

// ---------------------------------------------------------------- features
for (const id of Object.keys(FEATURES)) {
  const f = FEATURES[id];
  const path = `features/${id}.html`;
  const dom = await render('feature.html', {
    url: `${SITE}/${path}`,
    before: (doc) => { doc.body.dataset.feature = id; },
  });
  const doc = dom.window.document;
  doc.body.removeAttribute('data-feature');

  // The content is now static; feature.js would only re-render it.
  doc.querySelector('script[src^="feature.js"]')?.remove();
  doc.querySelector('meta[name="robots"]')?.remove();

  doc.title = `${f.short || f.name} — Cobble Asia Cobblemon Server`;
  let desc = plainText(f.blurb);
  if (desc.length < 110 && f.intro) desc = `${desc} ${plainText(f.intro)}`;
  doc.querySelector('meta[name="description"]').setAttribute('content', clip(desc));

  // One level down: relative URLs need ../
  for (const [sel, attr] of [['[href]', 'href'], ['[src]', 'src']]) {
    doc.querySelectorAll(sel).forEach((el) => {
      const v = el.getAttribute(attr);
      if (isRelative(v)) el.setAttribute(attr, '../' + v);
    });
  }
  addHeadTags(doc, path);
  write(path, dom);
  if (FEATURE_ORDER.includes(id)) sitemap.push(path);
}

// ---------------------------------------------------------------- sitemap
writeFileSync(
  join(OUT, 'sitemap.xml'),
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    sitemap.map((p) => `  <url><loc>${SITE}/${p}</loc></url>`).join('\n') +
    '\n</urlset>\n'
);

console.log(`Built ${OUT}: ${pages.length} pages pre-rendered, ${Object.keys(FEATURES).length} feature pages, ${sitemap.length} sitemap URLs`);
