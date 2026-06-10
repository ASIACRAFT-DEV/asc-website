// Renders the FAQ from FAQ in data.js as category sections of accordions.
(function () {
  const root = document.getElementById('faq-root');
  if (!root || typeof FAQ === 'undefined') return;

  root.innerHTML = FAQ.map((group) => `
    <section class="faq-group reveal">
      <h2 class="faq-cat">${group.cat}</h2>
      <div class="faq-list">
        ${group.items.map((it) => `
          <details class="faq-item">
            <summary>
              <span class="faq-q">${it.q}</span>
              <span class="faq-ic" aria-hidden="true">+</span>
            </summary>
            <div class="faq-a">${it.a}</div>
          </details>`).join('')}
      </div>
    </section>`).join('');

  // Discord links inside answers are wired by app.js (.js-discord).
})();
