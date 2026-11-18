// Renders the vote page: one tab per game mode. Sites and rewards live in
// data.js (VOTE_SITES / VOTE_REWARDS and RUNEBLOCK.voteSites), not here.
(function () {
  const root = document.getElementById('vote-root');
  if (!root || typeof VOTE_SITES === 'undefined') return;

  const card = (s, i) => {
    const inner = `
      <span class="vote-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="vote-meta">
        <span class="vote-name">${s.name}</span>
        ${s.blurb ? `<span class="vote-blurb">${s.blurb}</span>` : ''}
      </span>`;
    // A site with no link yet shows as "Soon" instead of a dead or wrong link.
    return s.url
      ? `<a class="vote-card reveal" href="${s.url}" target="_blank" rel="noopener"
           style="transition-delay:${i * 60}ms">${inner}<span class="vote-go">Vote →</span></a>`
      : `<div class="vote-card vote-card-soon reveal" style="transition-delay:${i * 60}ms">${inner}<span class="vote-go">Soon</span></div>`;
  };

  const chip = (ip) => `
    <div class="ip-chip vote-ip">
      <span class="ip-label">IP</span>
      <code>${ip}</code>
      <button class="copy-btn" data-copy="${ip}" aria-label="Copy server IP">Copy</button>
    </div>`;

  let rewards = '';
  if (typeof VOTE_REWARDS !== 'undefined') {
    const per = VOTE_REWARDS.perVote.map((r) => `<li>${r}</li>`).join('');
    const streaks = VOTE_REWARDS.streaks
      .map((s) => `<li><b>Day ${s.day} streak</b> — ${s.reward}</li>`)
      .join('');
    rewards = `
      <div class="vote-rewards reveal">
        <h2 class="faq-cat">What you get</h2>
        <p class="vote-rewards-sub">Every vote, on every site:</p>
        <ul class="vote-reward-list">${per}</ul>
        <p class="vote-rewards-sub">Keep a daily streak for bonus keys:</p>
        <ul class="vote-reward-list">${streaks}</ul>
        <p class="vote-note">Vote on all sites each day to stack rewards. Use <code>/vote</code> in-game to see your streak and claim queued rewards.</p>
      </div>`;
  }

  const rb = typeof RUNEBLOCK !== 'undefined' ? RUNEBLOCK : null;
  const modes = [
    {
      id: 'cobbleasia',
      label: 'Cobble Asia',
      html: `${chip(SERVER.ip)}<div class="vote-list">${VOTE_SITES.map(card).join('')}</div>${rewards}`,
    },
  ];
  if (rb) {
    modes.push({
      id: 'runeblock',
      label: 'RuneBlock',
      html: `${chip(rb.ip)}
        <p class="vote-soon-note">RuneBlock's vote pages are being set up on these lists. Links and rewards will appear here as soon as they are ready.</p>
        <div class="vote-list">${rb.voteSites.map(card).join('')}</div>`,
    });
  }

  root.innerHTML = `
    <div class="mode-tabs" role="tablist" aria-label="Choose a server">
      ${modes.map((m) => `<button class="mode-tab" role="tab" id="tab-${m.id}" aria-controls="panel-${m.id}" data-mode="${m.id}">${m.label}</button>`).join('')}
    </div>
    ${modes.map((m) => `<div class="mode-panel" role="tabpanel" id="panel-${m.id}" aria-labelledby="tab-${m.id}">${m.html}</div>`).join('')}`;

  const select = (id) => {
    const active = modes.some((m) => m.id === id) ? id : modes[0].id;
    modes.forEach((m) => {
      const on = m.id === active;
      const tab = document.getElementById(`tab-${m.id}`);
      tab.setAttribute('aria-selected', on ? 'true' : 'false');
      tab.classList.toggle('active', on);
      document.getElementById(`panel-${m.id}`).hidden = !on;
    });
    // Cards in a panel that was hidden never crossed the scroll observer.
    document.querySelectorAll(`#panel-${active} .reveal`).forEach((e) => e.classList.add('in'));
  };

  root.querySelectorAll('.mode-tab').forEach((tab) =>
    tab.addEventListener('click', () => {
      select(tab.dataset.mode);
      history.replaceState(null, '', `#${tab.dataset.mode}`);
    })
  );
  window.addEventListener('hashchange', () => select(location.hash.slice(1)));
  select(location.hash.slice(1));
})();
