// Renders the third-party mod credits from CREDITS in data.js
(function () {
  const root = document.getElementById('credits-root');
  if (!root || typeof CREDITS === 'undefined') return;

  root.innerHTML = CREDITS.map((g) => `
    <section class="cmd-group reveal">
      <h2 class="cmd-group-title">${g.group}</h2>
      <div class="credit-list">
        ${g.items.map((it) => {
          const inner = `
            <span class="credit-name">${it.name}</span>
            <span class="credit-by">${it.by ? 'by ' + it.by : ''}</span>
            <span class="credit-ver">${it.ver ? 'v' + it.ver : ''}</span>
            ${it.url ? '<span class="credit-link">↗</span>' : '<span></span>'}`;
          return it.url
            ? `<a class="credit-row" href="${it.url}" target="_blank" rel="noopener">${inner}</a>`
            : `<div class="credit-row">${inner}</div>`;
        }).join('')}
      </div>
    </section>`).join('');
})();
