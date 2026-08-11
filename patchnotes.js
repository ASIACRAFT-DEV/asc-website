// Renders the patch-notes timeline from PATCHNOTES in data.js.
// There are 120+ entries now, so the page pages them in rather than dumping the
// whole history into the DOM — plus a search and type filter over every change.
(function () {
  const root = document.getElementById('patch-root');
  if (!root || typeof PATCHNOTES === 'undefined') return;

  const LABEL = { new: 'New', improved: 'Improved', fixed: 'Fixed' };
  const PAGE = 12;

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  function fmtDate(iso) {
    // iso is YYYY-MM-DD — render without timezone surprises
    const [y, m, d] = (iso || '').split('-').map(Number);
    if (!y) return iso || '';
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    return `${months[(m || 1) - 1]} ${d}, ${y}`;
  }

  const TOTAL = PATCHNOTES.length;

  root.innerHTML = `
    <div class="filter-bar">
      <div class="filter-field">
        <span class="filter-icon" aria-hidden="true">⌕</span>
        <input id="pn-search" type="search" class="filter-input" autocomplete="off" spellcheck="false"
               placeholder="Search ${TOTAL} updates — try &quot;breeding&quot;, &quot;crash&quot; or &quot;/shop&quot;"
               aria-label="Search patch notes" />
        <button type="button" id="pn-clear" class="filter-clear" aria-label="Clear search" hidden>×</button>
      </div>
      <div class="filter-chips" id="pn-chips">
        <button type="button" class="chip is-on" data-type="">Everything</button>
        <button type="button" class="chip" data-type="new">New</button>
        <button type="button" class="chip" data-type="improved">Improved</button>
        <button type="button" class="chip" data-type="fixed">Fixed</button>
      </div>
      <p class="filter-count" id="pn-count" role="status" aria-live="polite"></p>
    </div>
    <div id="pn-list"></div>
    <div class="filter-more"><button type="button" class="btn btn-ghost" id="pn-more">Show older updates</button></div>`;

  const list = document.getElementById('pn-list');
  const input = document.getElementById('pn-search');
  const clearBtn = document.getElementById('pn-clear');
  const countEl = document.getElementById('pn-count');
  const chipWrap = document.getElementById('pn-chips');
  const moreBtn = document.getElementById('pn-more');
  const moreWrap = moreBtn.parentElement;

  let query = '';
  let type = null;
  let limit = PAGE;

  const plain = (s) => s.replace(/<[^>]*>/g, '').toLowerCase();

  // An entry survives if it has at least one change passing both filters —
  // and we render only those changes, so a search never shows you a hit
  // buried in fourteen unrelated bullets.
  function filtered() {
    const q = query.trim().toLowerCase();
    return PATCHNOTES.map((p) => {
      // The type chip is a hard filter — it decides which changes can appear at
      // all. The search then narrows within those, EXCEPT when the entry's own
      // title or tag matches, which keeps all of its surviving changes: someone
      // searching "Season 2" wants that update, not its one bullet saying it.
      const ofType = type ? p.changes.filter((c) => c.type === type) : p.changes;
      if (!ofType.length) return null;
      if (!q) return { ...p, changes: ofType };
      if (p.title.toLowerCase().includes(q) || p.tag.toLowerCase().includes(q)) {
        return { ...p, changes: ofType };
      }
      const hits = ofType.filter((c) => plain(c.text).includes(q));
      return hits.length ? { ...p, changes: hits } : null;
    }).filter(Boolean);
  }

  function render() {
    const hits = filtered();
    const page = hits.slice(0, limit);

    list.innerHTML = page.length ? page.map((p) => `
      <article class="patch">
        <div class="patch-head">
          <span class="patch-tag">${escapeHtml(p.tag)}</span>
          <span class="patch-date">${fmtDate(p.date)}</span>
        </div>
        <h2 class="patch-title">${escapeHtml(p.title)}</h2>
        <ul class="patch-changes">
          ${p.changes.map((c) => `
            <li class="patch-change">
              <span class="chg chg-${c.type}">${LABEL[c.type] || c.type}</span>
              <span class="chg-text">${c.text}</span>
            </li>`).join('')}
        </ul>
      </article>`).join('') : `
      <div class="filter-empty">
        <p><strong>Nothing matches “${escapeHtml(query.trim())}”.</strong></p>
        <p>Try a single word — the notes are written the way players talk, not in version numbers.</p>
      </div>`;

    const changeCount = hits.reduce((n, p) => n + p.changes.length, 0);
    countEl.textContent = query.trim() || type
      ? `${hits.length} update${hits.length === 1 ? '' : 's'} · ${changeCount} matching change${changeCount === 1 ? '' : 's'}`
      : `${TOTAL} updates, newest first`;

    const hidden = hits.length - page.length;
    moreWrap.hidden = hidden <= 0;
    moreBtn.textContent = `Show ${Math.min(hidden, PAGE)} more (${hidden} older)`;
    clearBtn.hidden = !query;
  }

  function setQuery(v, push) {
    query = v;
    limit = PAGE;
    if (input.value !== v) input.value = v;
    render();
    if (push) {
      const url = new URL(location.href);
      if (v) url.searchParams.set('q', v); else url.searchParams.delete('q');
      history.replaceState(null, '', url);
    }
  }

  input.addEventListener('input', () => setQuery(input.value, true));
  input.addEventListener('keydown', (e) => { if (e.key === 'Escape') setQuery('', true); });
  clearBtn.addEventListener('click', () => { setQuery('', true); input.focus(); });

  chipWrap.addEventListener('click', (e) => {
    const btn = e.target.closest('.chip');
    if (!btn) return;
    type = btn.dataset.type || null;
    limit = PAGE;
    chipWrap.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-on', c === btn));
    render();
  });

  moreBtn.addEventListener('click', () => { limit += PAGE; render(); });

  document.addEventListener('keydown', (e) => {
    if (e.key === '/' && document.activeElement !== input && !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      input.focus();
    }
  });

  setQuery(new URL(location.href).searchParams.get('q') || '', false);
})();
