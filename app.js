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
    const badge = f.featured ? '<span class="fc-badge">Featured</span>' : '';
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

// --- Live server status (mcsrvstat.us) ---
const countEl = document.getElementById('player-count');
const statusWrap = countEl && countEl.closest('.hub-status');
if (countEl) {
  fetch('https://api.mcsrvstat.us/3/' + SERVER.ip)
    .then((r) => r.json())
    .then((d) => {
      if (d && d.online) {
        const on = (d.players && d.players.online) || 0;
        const max = (d.players && d.players.max) || 0;
        countEl.textContent = `${on}${max ? ' / ' + max : ''} players online`;
        if (statusWrap) statusWrap.classList.add('online');
      } else {
        countEl.textContent = 'Server offline';
        if (statusWrap) statusWrap.classList.add('offline');
      }
    })
    .catch(() => {
      countEl.textContent = 'Status unavailable';
      if (statusWrap) statusWrap.classList.add('offline');
    });
}

// reveal needs to run after dynamic content is injected
wireReveal();
