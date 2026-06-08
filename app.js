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

// --- Copy-to-clipboard ---
function wireCopyButtons() {
  document.querySelectorAll('.copy-btn').forEach((btn) => {
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
    return `<a class="feature-card reveal" href="feature.html?f=${id}" style="--accent-grad:${GRAD[f.accent] || GRAD.solar}">
      ${badge}
      <div class="fc-top">
        <div class="fc-icon">${f.emoji}</div>
        <div>
          <div class="fc-cat">${f.category}</div>
          <h3>${f.short || f.name}</h3>
        </div>
      </div>
      <p>${f.blurb}</p>
      <div class="fc-foot">
        <span class="fc-tag">${f.tag}</span>
        <span class="fc-arrow">Learn more →</span>
      </div>
    </a>`;
  }).join('');
}

// --- Landing page: mod list ---
const modList = document.getElementById('mod-list');
if (modList && typeof MODS !== 'undefined') {
  modList.innerHTML = MODS.map(
    (m) => `<div class="mod-pill"><div class="mp-name">${m.name}</div><div class="mp-cmd">${m.cmd}</div></div>`
  ).join('');
}

// reveal needs to run after dynamic content is injected
wireReveal();
