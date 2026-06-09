// Renders the staff team from TEAM in data.js
(function () {
  const root = document.getElementById('team-root');
  if (!root || typeof TEAM === 'undefined') return;

  function initials(name) {
    return (name || '?').trim().split(/\s+/).map((w) => w[0]).join('').slice(0, 2).toUpperCase();
  }

  root.innerHTML = TEAM.map((g) => `
    <section class="cmd-group reveal">
      <h2 class="cmd-group-title">${g.group}</h2>
      <div class="team-grid">
        ${g.members.map((m) => {
          let avatar;
          if (m.avatar) {
            avatar = `<img class="team-avatar" src="${m.avatar}" alt="${m.name}" loading="lazy" />`;
          } else if (m.mc) {
            avatar = `<img class="team-avatar" src="https://mc-heads.net/avatar/${encodeURIComponent(m.mc)}/96" alt="${m.name}" loading="lazy" />`;
          } else {
            avatar = `<div class="team-avatar team-avatar-initials">${initials(m.name)}</div>`;
          }
          const socials = (m.socials && m.socials.length)
            ? `<div class="team-socials">${m.socials.map((s) =>
                `<a href="${s.url}" target="_blank" rel="noopener">${s.label}</a>`).join('')}</div>`
            : '';
          return `<div class="team-card${m.motto ? ' has-motto' : ''}">
            ${avatar}
            <div class="team-name">${m.name}</div>
            <div class="team-role">${m.role || ''}</div>
            ${m.handle ? `<div class="team-handle">@${m.handle}</div>` : ''}
            ${m.motto ? `<p class="team-motto">“${m.motto}”</p>` : ''}
            ${socials}
          </div>`;
        }).join('')}
      </div>
    </section>`).join('');
})();
