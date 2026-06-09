// Renders the full patch-notes timeline from PATCHNOTES in data.js
(function () {
  const root = document.getElementById('patch-root');
  if (!root || typeof PATCHNOTES === 'undefined') return;

  const LABEL = { new: 'New', improved: 'Improved', fixed: 'Fixed' };

  function fmtDate(iso) {
    // iso is YYYY-MM-DD — render without timezone surprises
    const [y, m, d] = (iso || '').split('-').map(Number);
    if (!y) return iso || '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[(m || 1) - 1]} ${d}, ${y}`;
  }

  root.innerHTML = PATCHNOTES.map((p) => `
    <article class="patch reveal">
      <div class="patch-head">
        <span class="patch-tag">${p.tag}</span>
        <span class="patch-date">${fmtDate(p.date)}</span>
      </div>
      <h2 class="patch-title">${p.title}</h2>
      <ul class="patch-changes">
        ${p.changes.map((c) => `
          <li class="patch-change">
            <span class="chg chg-${c.type}">${LABEL[c.type] || c.type}</span>
            <span class="chg-text">${c.text}</span>
          </li>`).join('')}
      </ul>
    </article>`).join('');
})();
