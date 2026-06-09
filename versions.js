// Renders the "live mod versions" list on the Commands page from
// versions.json (auto-generated from the asc-* repos by the
// "Sync mod versions" GitHub Action). Silently removes itself if the
// file is missing, so the page never shows a broken section.
(function () {
  const root = document.getElementById('mods-root');
  if (!root) return;

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fmt = (iso) => {
    const d = new Date(iso);
    return isNaN(d) ? '' : `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
  };

  fetch('versions.json', { cache: 'no-cache' })
    .then((r) => (r.ok ? r.json() : null))
    .then((data) => {
      if (!data || !Array.isArray(data.mods) || !data.mods.length) {
        root.remove();
        return;
      }
      root.innerHTML = `
        <section class="cmd-group">
          <h2 class="cmd-group-title">All mods — live versions</h2>
          <div class="mods-grid">
            ${data.mods
              .map(
                (m) => `<div class="mod-ver">
                  <span class="mod-ver-name">${m.name}</span>
                  <span class="mod-ver-num">v${m.version}</span>
                </div>`
              )
              .join('')}
          </div>
          <p class="mods-synced">Auto-synced from GitHub${data.generatedAt ? ` · updated ${fmt(data.generatedAt)}` : ''} · ${data.mods.length} mods</p>
        </section>`;
    })
    .catch(() => root.remove());
})();
