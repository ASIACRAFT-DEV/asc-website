// =====================================================================
//  feature.html renderer — reads ?f=<id> and builds the detail page.
// =====================================================================

(function () {
  const params = new URLSearchParams(location.search);
  const id = params.get('f');
  const root = document.getElementById('fp-root');
  const f = (typeof FEATURES !== 'undefined') && FEATURES[id];

  if (!f) {
    root.innerHTML = `<section class="fp-hero"><div class="fp-hero-inner">
      <a class="back-link" href="index.html">← Back to all features</a>
      <h1 class="fp-title">Feature not found</h1>
      <p class="fp-blurb">That feature doesn't exist. Head back and pick one from the list.</p>
    </div></section>`;
    return;
  }

  document.title = `${f.short || f.name} — Cobble Asia`;

  const grad = {
    solar: 'var(--g-solar)', ember: 'var(--g-ember)', amber: 'var(--g-amber)',
    violet: 'var(--g-violet)', azure: 'var(--g-azure)', emerald: 'var(--g-emerald)',
    crimson: 'var(--g-crimson)',
  }[f.accent] || 'var(--g-solar)';
  const glow = {
    solar: 'rgba(255,160,40,.4)', ember: 'rgba(255,94,43,.4)', amber: 'rgba(255,200,97,.35)',
    violet: 'rgba(176,107,255,.4)', azure: 'rgba(91,155,255,.4)', emerald: 'rgba(54,224,160,.4)',
    crimson: 'rgba(255,77,77,.4)',
  }[f.accent] || 'rgba(255,160,40,.4)';

  const steps = (f.how || []).map((s, i) => `
    <div class="step reveal" style="--accent-grad:${grad}">
      <div class="step-num">${i + 1}</div>
      <div><h3>${s.title}</h3><p>${s.body}</p></div>
    </div>`).join('');

  const cmds = (f.commands || []).map((c) => `
    <div class="cmd-row"><code>${c.cmd}</code><span>${c.desc}</span></div>`).join('');

  const notes = (f.notes || []).map((n) => `
    <div class="note"><span class="note-ic">◆</span><span>${n}</span></div>`).join('');

  // "more features" strip — everything except the current one
  const more = FEATURE_ORDER.filter((x) => x !== id).map((x) => {
    const o = FEATURES[x];
    return `<a class="more-feat" href="feature.html?f=${x}">${o.short || o.name}</a>`;
  }).join('');

  root.innerHTML = `
    <section class="fp-hero" style="--fp-glow:${glow}">
      <div class="fp-hero-glow"></div>
      <div class="fp-hero-inner">
        <a class="back-link" href="index.html#features">← Back to all features</a>
        <span class="fp-cat">${f.category}</span>
        <h1 class="fp-title">${f.name}</h1>
        <p class="fp-blurb">${f.blurb}</p>
      </div>
    </section>

    <div class="fp-body">
      ${f.intro ? `<p class="fp-intro reveal">${f.intro}</p>` : ''}

      <div class="fp-section-label reveal">How it works</div>
      <div class="steps">${steps}</div>

      ${cmds ? `<div class="fp-section-label reveal">Commands</div><div class="cmd-table reveal">${cmds}</div>` : ''}

      ${f.gallery ? `<div class="fp-section-label reveal">Fusion showcase</div>
      <div class="fusion-gallery reveal">${f.gallery.map((src) => `<div class="fusion-tile"><img loading="lazy" src="${src}" alt="Pokémon fusion design" /></div>`).join('')}</div>
      ${f.credit ? `<p class="fusion-credit">${f.credit.text} — <a href="${f.credit.url}" target="_blank" rel="noopener">view on Modrinth</a></p>` : ''}` : ''}

      ${notes ? `<div class="fp-section-label reveal">Good to know</div><div class="notes reveal">${notes}</div>` : ''}

      <div class="fp-cta reveal">
        <p>Jump in and try it yourself.</p>
        <div class="ip-chip ip-chip-lg">
          <span class="ip-label">IP</span>
          <code>${SERVER.ip}</code>
          <button class="copy-btn" data-copy="${SERVER.ip}" aria-label="Copy server IP">Copy</button>
        </div>
      </div>

      <div class="fp-section-label reveal" style="margin-top:60px;">Explore more</div>
      <div class="more-feats reveal">${more}</div>
    </div>`;
})();
