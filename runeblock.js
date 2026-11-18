// Renders the RuneBlock page from the RUNEBLOCK object in data.js.
(function () {
  if (typeof RUNEBLOCK === 'undefined') return;
  const byId = (id) => document.getElementById(id);

  byId('rb-mc').textContent = RUNEBLOCK.mc;
  byId('rb-ip').textContent = RUNEBLOCK.ip;
  byId('rb-copy').setAttribute('data-copy', RUNEBLOCK.ip);
  byId('rb-client').setAttribute('href', RUNEBLOCK.client);

  byId('rb-stats').innerHTML = RUNEBLOCK.stats
    .map((s) => `<div class="rb-stat"><b>${s.value}</b><span>${s.label}</span></div>`)
    .join('');

  byId('rb-classes').innerHTML = RUNEBLOCK.classes
    .map((c) => `
      <article class="rb-class reveal">
        <h3>${c.name}</h3>
        <p class="rb-class-role">${c.role}</p>
        <ul>${c.subclasses.map((s) => `<li>${s}</li>`).join('')}</ul>
      </article>`)
    .join('');

  byId('rb-features').innerHTML = RUNEBLOCK.features
    .map((f) => `
      <article class="rb-feature reveal">
        <span class="rb-feature-tag">${f.tag}</span>
        <h3>${f.name}</h3>
        <p>${f.body}</p>
      </article>`)
    .join('');

  byId('rb-steps').innerHTML = RUNEBLOCK.steps
    .map((s, i) => `
      <li class="rb-step reveal">
        <span class="rb-step-num">${i + 1}</span>
        <div><h3>${s.title}</h3><p>${s.body}</p></div>
      </li>`)
    .join('');

  // Live status: online if either provider says so, same rule as the home page.
  const label = byId('rb-player-count');
  const wrap = label.closest('.hub-status');
  const ask = (url) => {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    return fetch(url, { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null)
      .finally(() => clearTimeout(timer));
  };
  Promise.all([
    ask('https://api.mcsrvstat.us/3/' + RUNEBLOCK.ip),
    ask('https://api.mcstatus.io/v2/status/java/' + RUNEBLOCK.ip),
  ]).then((results) => {
    const answered = results.filter(Boolean);
    const online = answered.filter((r) => r.online);
    if (online.length) {
      const on = Math.max(...online.map((r) => (r.players && r.players.online) || 0));
      const max = Math.max(...online.map((r) => (r.players && r.players.max) || 0));
      label.textContent = `${on}${max ? ' / ' + max : ''} players online`;
      wrap.classList.add('online');
    } else {
      label.textContent = answered.length ? 'Server offline' : 'Status unavailable';
      wrap.classList.add('offline');
    }
  });
})();
