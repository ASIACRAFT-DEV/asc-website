// Renders the command reference from COMMANDS in data.js
(function () {
  const root = document.getElementById('cmd-root');
  if (!root || typeof COMMANDS === 'undefined') return;

  root.innerHTML = COMMANDS.map((g) => `
    <section class="cmd-group reveal">
      <h2 class="cmd-group-title">${g.group}</h2>
      <div class="cmd-table">
        ${g.items.map((c) => `<div class="cmd-row"><code>${escapeHtml(c.cmd)}</code><span>${c.desc}</span></div>`).join('')}
      </div>
    </section>`).join('');

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();
