// Renders the command reference from COMMANDS in data.js, with a live filter.
// 100+ rows across 9 groups is more than anyone scrolls — the filter is the
// primary way in, so it renders first and owns the URL (?q=) for shareable links.
(function () {
  const root = document.getElementById('cmd-root');
  if (!root || typeof COMMANDS === 'undefined') return;

  const TOTAL = COMMANDS.reduce((n, g) => n + g.items.length, 0);

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Highlight the matched run inside already-escaped text. Descriptions carry
  // trusted inline markup (<code>, <strong>) from data.js, so we only ever mark
  // up the plain-text command cell and leave descriptions as authored.
  function mark(escaped, needle) {
    if (!needle) return escaped;
    const i = escaped.toLowerCase().indexOf(needle.toLowerCase());
    if (i < 0) return escaped;
    return escaped.slice(0, i) + '<mark>' + escaped.slice(i, i + needle.length) + '</mark>' + escaped.slice(i + needle.length);
  }

  const filterBar = `
    <div class="filter-bar">
      <div class="filter-field">
        <span class="filter-icon" aria-hidden="true">⌕</span>
        <input id="cmd-search" type="search" class="filter-input" autocomplete="off" spellcheck="false"
               placeholder="Search ${TOTAL} commands — try &quot;home&quot;, &quot;shop&quot; or &quot;legend&quot;"
               aria-label="Search commands" />
        <button type="button" id="cmd-clear" class="filter-clear" aria-label="Clear search" hidden>×</button>
      </div>
      <div class="filter-chips" id="cmd-chips"></div>
      <p class="filter-count" id="cmd-count" role="status" aria-live="polite"></p>
    </div>`;

  root.innerHTML = filterBar + '<div id="cmd-list"></div>';

  const list = document.getElementById('cmd-list');
  const input = document.getElementById('cmd-search');
  const clearBtn = document.getElementById('cmd-clear');
  const countEl = document.getElementById('cmd-count');
  const chipWrap = document.getElementById('cmd-chips');

  let query = '';
  let group = null; // null = every group

  chipWrap.innerHTML =
    `<button type="button" class="chip is-on" data-group="">All</button>` +
    COMMANDS.map((g) => `<button type="button" class="chip" data-group="${escapeHtml(g.group)}">${escapeHtml(g.group)}</button>`).join('');

  function matches(item, q) {
    if (!q) return true;
    // Strip tags so a search for "legend" still hits a <code>-wrapped word.
    const desc = item.desc.replace(/<[^>]*>/g, '');
    return (item.cmd + ' ' + desc).toLowerCase().includes(q);
  }

  function render() {
    const q = query.trim().toLowerCase();
    let shown = 0;

    const html = COMMANDS.map((g) => {
      if (group && g.group !== group) return '';
      const hits = g.items.filter((c) => matches(c, q));
      if (!hits.length) return '';
      shown += hits.length;
      return `
        <section class="cmd-group">
          <h2 class="cmd-group-title">${escapeHtml(g.group)}</h2>
          <div class="cmd-table">
            ${hits.map((c) => `<div class="cmd-row"><code>${mark(escapeHtml(c.cmd), q)}</code><span>${c.desc}</span></div>`).join('')}
          </div>
        </section>`;
    }).join('');

    list.innerHTML = html || `
      <div class="filter-empty">
        <p><strong>No commands match “${escapeHtml(query.trim())}”.</strong></p>
        <p>Try a shorter word — or add <code>help</code> after any ASC command in-game for its full list.</p>
      </div>`;

    countEl.textContent = q || group
      ? `${shown} of ${TOTAL} commands`
      : `${TOTAL} commands across ${COMMANDS.length} categories`;
    clearBtn.hidden = !query;
  }

  function setQuery(v, push) {
    query = v;
    if (input.value !== v) input.value = v;
    render();
    if (push) {
      const url = new URL(location.href);
      if (v) url.searchParams.set('q', v); else url.searchParams.delete('q');
      history.replaceState(null, '', url);
    }
  }

  input.addEventListener('input', () => setQuery(input.value, true));
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') setQuery('', true);
  });
  clearBtn.addEventListener('click', () => { setQuery('', true); input.focus(); });

  chipWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    group = btn.dataset.group || null;
    chipWrap.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-on', c === btn));
    render();
  });

  // "/" focuses search, the way every reference site does it.
  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      input.focus();
    }
  });

  setQuery(new URL(location.href).searchParams.get('q') || '', false);
})();
