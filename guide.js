// Renders the beginner guide from GUIDE in data.js
(function () {
  const root = document.getElementById('guide-root');
  if (!root || typeof GUIDE === 'undefined') return;

  root.innerHTML = GUIDE.map((s, i) => `
    <div class="step reveal" style="--accent-grad:var(--g-solar)">
      <div class="step-num">${i + 1}</div>
      <div>
        <h3>${s.title}</h3>
        <p>${s.body}</p>
        ${s.cmds && s.cmds.length
          ? `<div class="guide-cmds">${s.cmds.map((c) => `<code>${escapeHtml(c)}</code>`).join('')}</div>`
          : ''}
      </div>
    </div>`).join('');

  function escapeHtml(s) {
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }
})();
