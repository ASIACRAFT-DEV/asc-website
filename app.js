// =====================================================================
//  Shared site behaviour: discord links, copy buttons, reveal-on-scroll,
//  and landing-page rendering (feature cards + mod grid).
// =====================================================================

const GRAD = {
  solar: 'var(--g-solar)', ember: 'var(--g-ember)', amber: 'var(--g-amber)',
  violet: 'var(--g-violet)', azure: 'var(--g-azure)', emerald: 'var(--g-emerald)',
  crimson: 'var(--g-crimson)',
};
const GLOW = {
  solar: 'rgba(255,160,40,.4)', ember: 'rgba(255,94,43,.4)', amber: 'rgba(255,200,97,.35)',
  violet: 'rgba(176,107,255,.4)', azure: 'rgba(91,155,255,.4)', emerald: 'rgba(54,224,160,.4)',
  crimson: 'rgba(255,77,77,.4)',
};

// --- Sticky offset ---
// The filter bars on commands.html / patchnotes.html sit directly under the
// sticky nav. Measuring beats a hardcoded number: the nav wraps to two rows on
// narrow screens, and a stale offset leaves a gap or hides the search field.
(function syncNavHeight() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const set = () => document.documentElement.style.setProperty('--nav-h', nav.offsetHeight + 'px');
  set();
  if ('ResizeObserver' in window) new ResizeObserver(set).observe(nav);
  else window.addEventListener('resize', set);
})();

// --- Discord links ---
document.querySelectorAll('.js-discord').forEach((a) => {
  a.setAttribute('href', SERVER.discord);
  a.setAttribute('target', '_blank');
  a.setAttribute('rel', 'noopener');
});

// --- Mobile nav: inject a hamburger toggle that opens the link list ---
(function wireMobileNav() {
  const inner = document.querySelector('.nav-inner');
  const links = inner && inner.querySelector('.nav-links');
  if (!inner || !links) return;
  const btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.setAttribute('aria-label', 'Toggle menu');
  btn.setAttribute('aria-expanded', 'false');
  btn.innerHTML = '<span></span><span></span><span></span>';
  inner.appendChild(btn);
  btn.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    btn.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  // close the menu after tapping any link
  links.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      links.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    })
  );
})();

// --- Copy-to-clipboard (any element with data-copy) ---
function wireCopyButtons() {
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    if (btn.dataset.wired) return;
    btn.dataset.wired = '1';
    btn.addEventListener('click', async () => {
      const text = btn.getAttribute('data-copy');
      try {
        await navigator.clipboard.writeText(text);
      } catch {
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta); ta.select();
        document.execCommand('copy'); document.body.removeChild(ta);
      }
      const original = btn.textContent;
      btn.textContent = 'Copied!'; btn.classList.add('copied');
      setTimeout(() => { btn.textContent = original; btn.classList.remove('copied'); }, 1400);
    });
  });
}
wireCopyButtons();

// --- Reveal on scroll ---
function wireReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) { els.forEach((e) => e.classList.add('in')); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  els.forEach((e) => io.observe(e));
}

// --- Landing page: feature cards ---
const grid = document.getElementById('feature-grid');
if (grid && typeof FEATURES !== 'undefined') {
  grid.innerHTML = FEATURE_ORDER.map((id) => {
    const f = FEATURES[id];
    if (!f) return '';
    const badge = f.soon
      ? '<span class="fc-badge soon">Coming Soon</span>'
      : (f.featured ? '<span class="fc-badge">Featured</span>' : '');
    return `<a class="feature-card reveal" href="feature.html?f=${id}">
      ${badge}
      <div class="fc-cat">${f.category}</div>
      <h3>${f.short || f.name}</h3>
      <p>${f.blurb}</p>
      <div class="fc-foot">
        <span class="fc-tag">${f.tag}</span>
        <span class="fc-arrow">Learn more →</span>
      </div>
    </a>`;
  }).join('');
}

// --- Landing page: server news ---
const newsGrid = document.getElementById('news-grid');
if (newsGrid && typeof NEWS !== 'undefined') {
  newsGrid.innerHTML = NEWS.map(
    (n) => `<a class="news-card" href="${n.link}">
      <span class="news-tag">${n.tag}</span>
      <h3>${n.title}</h3>
      <p>${n.body}</p>
      <span class="news-more">Read more →</span>
    </a>`
  ).join('');
}

// --- Landing page: patch notes preview (latest 3) ---
const patchPreview = document.getElementById('patch-preview');
if (patchPreview && typeof PATCHNOTES !== 'undefined') {
  const LABEL = { new: 'New', improved: 'Improved', fixed: 'Fixed' };
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fmt = (iso) => {
    const [y, m, d] = (iso || '').split('-').map(Number);
    return y ? `${months[(m || 1) - 1]} ${d}, ${y}` : iso || '';
  };
  patchPreview.innerHTML = PATCHNOTES.slice(0, 3)
    .map(
      (p) => `<a class="patch-card" href="patchnotes.html">
        <div class="patch-head">
          <span class="patch-tag">${p.tag}</span>
          <span class="patch-date">${fmt(p.date)}</span>
        </div>
        <h3 class="patch-title">${p.title}</h3>
        <ul class="patch-changes">
          ${p.changes
            .map(
              (c) => `<li class="patch-change">
                <span class="chg chg-${c.type}">${LABEL[c.type] || c.type}</span>
                <span class="chg-text">${c.text}</span>
              </li>`
            )
            .join('')}
        </ul>
      </a>`
    )
    .join('');
}

// --- Live server status ---
// Queried from two independent status APIs. The server is treated as ONLINE if EITHER
// provider reports it online — a single provider being down, rate-limited, adblock-
// blocked (api.mcsrvstat.us is on some block lists), or serving a STALE cached "offline"
// no longer wins over a healthy reading from the other (mcsrvstat.us falsely reported
// offline while the server was full — 2026-07-11). Each call is timeout-bounded so the
// label can't get stuck on "checking status…".
const countEl = document.getElementById('player-count');
const statusWrap = countEl && countEl.closest('.hub-status');
if (countEl) {
  const setOnline = (on, max) => {
    countEl.textContent = `${on}${max ? ' / ' + max : ''} players online`;
    if (statusWrap) { statusWrap.classList.add('online'); statusWrap.classList.remove('offline'); }
  };
  const setOffline = (text) => {
    countEl.textContent = text;
    if (statusWrap) { statusWrap.classList.add('offline'); statusWrap.classList.remove('online'); }
  };

  // Fetch with a hard timeout; resolves to parsed JSON or null on any failure.
  const fetchJson = (url) => {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 6000);
    return fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .finally(() => clearTimeout(t));
  };

  // Each provider returns { online, on, max } or null if it couldn't tell us.
  const providers = [
    () => fetchJson('https://api.mcsrvstat.us/3/' + SERVER.ip).then((d) =>
      d ? { online: !!d.online, on: (d.players && d.players.online) || 0, max: (d.players && d.players.max) || 0 } : null),
    () => fetchJson('https://api.mcstatus.io/v2/status/java/' + SERVER.ip).then((d) =>
      d ? { online: !!d.online, on: (d.players && d.players.online) || 0, max: (d.players && d.players.max) || 0 } : null),
  ];

  (async () => {
    // Query BOTH providers; ONLINE wins if ANY says online (use the higher player
    // count). Only "Server offline" when every provider answered and all said offline;
    // only "Status unavailable" when none answered at all.
    const results = await Promise.all(providers.map((p) => p().catch(() => null)));
    const answered = results.filter((r) => r);
    const onlineRes = answered.filter((r) => r.online);
    if (onlineRes.length) {
      const best = onlineRes.reduce((a, b) => (b.on > a.on ? b : a));
      setOnline(best.on, best.max);
    } else if (answered.length) {
      setOffline('Server offline');
    } else {
      setOffline('Status unavailable');
    }
  })();
}

// reveal needs to run after dynamic content is injected
wireReveal();
