// Renders the vote-site cards and reward panel from VOTE_SITES /
// VOTE_REWARDS in data.js. Add a site by editing data.js, not here.
(function () {
  const root = document.getElementById('vote-root');
  if (!root || typeof VOTE_SITES === 'undefined') return;

  const sites = VOTE_SITES.map((s, i) => `
    <a class="vote-card reveal" href="${s.url}" target="_blank" rel="noopener"
       style="transition-delay:${i * 60}ms">
      <span class="vote-num">${String(i + 1).padStart(2, '0')}</span>
      <span class="vote-meta">
        <span class="vote-name">${s.name}</span>
        ${s.blurb ? `<span class="vote-blurb">${s.blurb}</span>` : ''}
      </span>
      <span class="vote-go">Vote →</span>
    </a>`).join('');

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

  root.innerHTML = `
    <div class="vote-list">${sites}</div>
    ${rewards}`;
})();
