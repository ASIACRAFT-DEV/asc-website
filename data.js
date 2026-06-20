// =====================================================================
//  Cobble Asia — feature data
//  Edit this file to add/change features. index.html renders the cards,
//  feature.html renders the full "how it works" page from ?f=<id>.
// =====================================================================

const SERVER = {
  ip: 'play.cobbleasia.net',
  discord: 'https://discord.gg/qB3ExYsUAH',
  mc: '1.21.1',
  cobblemon: '1.7.3',
};

// accent keys map to CSS gradients defined in styles.css (--g-solar etc.)
const FEATURES = {
  solforge: {
    name: 'SolForge — Season of the First Sun',
    short: 'SolForge Season',
    accent: 'solar',
    tag: '/gear',
    category: 'Seasonal',
    featured: true,
    blurb:
      'The first seasonal gear set. Forge molten sun-powered tools and armor, level them with Solar Shards, and chase the Radiant State.',
    intro:
      'SolForge is our flagship seasonal content drop — a full set of solar-themed weapons, tools and armor, each with its own passive that scales as you upgrade it. Everything ties into one loop: play the game, earn Solar Shards, forge and level your gear, and build toward the server-wide Radiant State.',
    how: [
      {
        title: 'Collect the set',
        body:
          'SolForge has 15 pieces — five weapons (sword, bow, crossbow, trident, shield), five tools (pickaxe, axe, hoe, shovel, fishing rod), a full armor set (helmet, chestplate, leggings, boots), and the Wings of Dawn cosmetic. Each piece is a custom-modelled item with infinite durability. Get them from the SolForge Chest gacha crate or by forging.',
      },
      {
        title: 'Earn Solar Shards',
        body:
          'Solar Shards are the season currency. The SolForge tools drop them as you play — mine ore with the Starforge Breaker, chop logs with Emberroot, farm with Bloom of Helios, or fight with the Sunflare Sword. The more of the set you wear, the faster they pile up.',
      },
      {
        title: 'Upgrade with /gear',
        body:
          'Spend Solar Shards to level each piece from I to IV. Every level makes that piece’s passive stronger — bigger proc chances, larger AoE, better drops. Level V is exclusive: it only comes from the SolForge Chest grand prize.',
      },
      {
        title: 'Wear the full set',
        body:
          'A complete set unlocks Speed, Haste, Fire Resistance and Night Vision, plus per-piece passives: Dawnseer (helmet) and Heart of Helios (chest) grant Solar Blessings on activities, Aegis of Dawn (shield) ignites attackers, Sunwalker (boots) biases nearby spawns toward your type and rolls perfect IVs, Radiant Flow (leggings) heals and cleanses your Pokémon mid-battle.',
      },
      {
        title: 'Chase the Radiant State',
        body:
          'Mining, farming, raids, hunts and battles fill your Solar Resonance meter. Hit the threshold and you enter the Radiant State for 15 minutes — boosted luck, a shiny-rate bonus, better drops, and a chance for wild Pokémon near you to spawn as Radiant variants with high IVs and a golden name.',
      },
    ],
    commands: [
      { cmd: '/gear', desc: 'Open the SolForge catalog — see every piece, its passive, and how to get it' },
      { cmd: '/gear upgrade', desc: 'Spend Solar Shards to level the piece in your hand (I → IV)' },
    ],
    notes: [
      'Every SolForge piece has infinite durability — forge it once, keep it forever.',
      'Level V is grand-prize only, pulled from the SolForge Chest.',
      'A Level V piece can be pushed to Level VI (Overmax) at the Archaeologist, using Seasonal Essence forged from fishing-caught Sunken Relics — never from crates.',
      'Designed by community admin Indigo as the server’s first full season.',
    ],
  },

  crates: {
    name: 'Gacha Crates & Banners',
    short: 'Crates & Banners',
    accent: 'solar',
    tag: '/crates · /summon',
    category: 'Collecting',
    featured: true,
    blurb:
      'Genshin-style pity, rotating legendary trio banners, and shiny pulls you can’t catch in the wild.',
    intro:
      'Our crate system is a full gacha: featured banners with pity counters, a shuffled daily rotation so no set is ever predictable, and previews of what’s coming next — all in a spinning chest GUI.',
    how: [
      {
        title: 'Rotating trio banners',
        body:
          'Instead of one legendary, each banner features a whole themed group — Creation Trio, Weather Trio, Treasures of Ruin, Ultra Beasts, and 30+ more. A 5-star win awards a random member of the active group. Banners rotate daily from a shuffled deck, and no group repeats until every group has had its turn.',
      },
      {
        title: 'Pity that carries',
        body:
          'Every banner shares one pity counter. Lose a 50/50 and the next 5-star is guaranteed to be featured — exactly like the gachas you know. Your pity is tracked per banner and never silently resets.',
      },
      {
        title: 'See what’s coming',
        body:
          'The banner-select GUI shows upcoming rotations as locked tiles with a live “Unlocks in Xd Yh” countdown, so you can plan your pulls — but you can’t pull ahead of schedule.',
      },
      {
        title: 'Single or ten-pull',
        body:
          'Pull one at a time or run a 10-pull with its own animation. Featured banners run at fixed pricing; the SolForge Chest is its own key-only crate with custom gear as the grand prize.',
      },
    ],
    commands: [
      { cmd: '/crates', desc: 'Open the crate hub' },
      { cmd: '/summon', desc: 'Open the banner-select GUI and pull' },
    ],
    notes: [
      'Lost 50/50s pay out from the full standard pool — a Genshin-style consolation, never nothing.',
      'Banner rotation is seeded with secure randomness — the upcoming order genuinely can’t be predicted.',
    ],
  },

  battletower: {
    name: 'Battle Tower',
    short: 'Battle Tower',
    accent: 'ember',
    tag: '/bt',
    category: 'Battling',
    featured: true,
    blurb:
      'Climb tiered floors of hand-built OU, Uber and AG NPC teams. Singles and doubles, rolling 30-day seasons, and ♛ Conqueror crowns for the first to clear each tier.',
    intro:
      'The Battle Tower is our endgame PvE battling ladder. Each tier fields fully-authored competitive teams — real abilities, natures, EVs, items and movesets — across both singles and doubles formats. It runs on rolling 30-day seasons, so the leaderboards reset and everyone re-climbs for the crowns.',
    how: [
      {
        title: 'Pick your tier and format',
        body:
          'Choose a competitive tier (OU through Anything-Goes) and a format. Singles and doubles each have their own per-tier team pools, so a doubles run never feels like singles with two mons.',
      },
      {
        title: 'Battle authored teams',
        body:
          'Every NPC team is built like a real competitive squad — correct items, spreads and four-move sets, legal for its tier. Higher tiers field Ubers, restricted legendaries and proper AG cheese.',
      },
      {
        title: 'Earn tower tokens',
        body:
          'Win battles to earn tokens. Tokens are the tower currency and also feed into other systems — passives, the forge, and more.',
      },
      {
        title: 'Spend in the tower shop',
        body:
          'Redeem tokens for exclusive rewards including Fusion Splicers — items that let you fuse Pokémon into custom forms.',
      },
      {
        title: 'Survive Endless Decay',
        body:
          'On towers with Endless Decay enabled, once you climb past the checkpoint floor your whole party is level-synced down while the enemy teams stay at Lv.100 — so the high floors demand sharper play instead of becoming free farm. Fall up there and you reset to the checkpoint and pick up a 24-hour cooldown.',
      },
      {
        title: 'Climb a fresh season',
        body:
          'The tower runs on rolling 30-day seasons. When a season rolls over every floor and first-clear leaderboard wipes and everyone re-climbs from Floor 1 — but your tokens and lifetime stats are kept. Check the time left with /bt season.',
      },
      {
        title: 'Race for Conqueror crowns',
        body:
          'The first player to clear Floor 50 of each tier — Uber, OU, UU, RU, NU, Little Cup and Anything Goes — earns that tier’s ♛ Conqueror crown, a MYTHIC prestige title. Win one and it’s yours forever; only the “reigning champ” pointer moves when someone else first-clears the next season.',
      },
    ],
    commands: [
      { cmd: '/bt', desc: 'Open the Battle Tower hub — pick tier, format, and battle' },
      { cmd: '/bt season', desc: 'Show the current season number and time until reset' },
    ],
    notes: [
      'Doubles uses a dedicated per-tier team pool, refreshed when admins add new sets.',
      'Tower tokens are spent across multiple systems, not just the tower shop.',
      'A Challenge Voucher — dropped by raids, dungeons and Area Zero — skips the 24-hour high-floor cooldown.',
      'Seasons wipe the climb every 30 days but keep your tokens and lifetime stats; Conqueror crowns are kept forever.',
    ],
  },

  areazero: {
    name: 'Area Zero',
    short: 'Area Zero',
    accent: 'violet',
    tag: '/az · /skill',
    category: 'Battling',
    featured: true,
    blurb:
      'A paradox-energy combat zone with roaming bosses, a KDA leaderboard, bounties, KOTH, and its own skill system.',
    intro:
      'Area Zero is a dedicated combat layer with its own rules. Drop in for paradox-powered PvP and PvE, climb the KDA leaderboard, hunt bounties, and unleash gauge-charged skills you won’t find anywhere else on the server.',
    how: [
      {
        title: 'Enter the zone',
        body:
          'Warp into Area Zero (Trainer rank gated, with a confirmation step). Inside, an active spawner keeps paradox Pokémon flowing and the zone alive.',
      },
      {
        title: 'Charge your paradox gauge',
        body:
          'Fighting builds a paradox gauge. Spend it on /skill abilities — bursts, buffs and zone-control powers unique to Area Zero.',
      },
      {
        title: 'Climb the KDA leaderboard',
        body:
          'Kills, deaths and assists are tracked. Top the leaderboard, collect bounties on other players, and fight for King of the Hill control points.',
      },
      {
        title: 'Hunt the bosses',
        body:
          'Roaming paradox bosses rotate through the zone on a schedule (Blue/Red, Alpha/Paradox). Only the top damage-dealer can catch one — everyone else is racing to out-DPS the room.',
      },
    ],
    commands: [
      { cmd: '/az', desc: 'Area Zero info, leaderboard and status' },
      { cmd: '/skill', desc: 'Spend your paradox gauge on combat skills' },
    ],
    notes: [
      'Area Zero is paradox-energy only — regular legendaries are kept out by design.',
      'Boss rewards go to the top damage-dealer, so bring your best DPS.',
    ],
  },

  gyms: {
    name: 'Gyms & Elite Four',
    short: 'Gyms & Elite Four',
    accent: 'ember',
    tag: '/gym · /pvp ladder',
    category: 'Battling',
    featured: true,
    blurb:
      'Beat custom gym leaders for badges, then claim a seat on the Elite Four ladder and bank every challenger’s entry fee.',
    intro:
      'Two connected challenges. Work through eight custom gym leaders for badges and rewards, then take on the ASC Elite Four — a four-seat PvP ladder where holding a seat earns you passive income from everyone who challenges it.',
    how: [
      {
        title: 'Earn your badges',
        body:
          'Eight gyms, each on a type theme, laid out in a staircase GUI from gym 1 to gym 8. Beating a leader pays coins and Rare Candies, with a one-time first-clear bonus of Battle Tower tokens for each new badge.',
      },
      {
        title: 'Challenge the Elite Four',
        body:
          'The ladder has four seats per format (singles and doubles), E1 (apex) down to E4 (entry). Pay a coin fee to challenge a seat — and that fee goes straight to whoever currently holds it.',
      },
      {
        title: 'Take a seat, defend it',
        body:
          'Beat the holder and you claim their seat. Empty seats are held by giga-OP authored NPC teams. While you hold a seat you earn daily passive income via mail — the higher the seat, the bigger the payout.',
      },
      {
        title: 'Hold or decay',
        body:
          'Seats persist across restarts, but if you go offline too long, dodge a challenge, or fail your daily activity quota (stay online or fight enough ladder battles), your seat decays back to an NPC. Lose a challenge and you’re on a 12-hour cooldown before you can challenge that format again.',
      },
    ],
    commands: [
      { cmd: '/gym', desc: 'Open the gym staircase and challenge leaders' },
      { cmd: '/pvp ladder', desc: 'View the Elite Four, fees, and challenge a seat' },
      { cmd: '/ladder info', desc: 'Check fees, your seat, and cooldowns' },
    ],
    notes: [
      'Fusions are banned on the Elite Four ladder — including Starlight aspect-based fusions.',
      'Challenge fees are escrowed and released to the holder when the battle ends.',
    ],
  },

  raids: {
    name: 'Raid Bosses',
    short: 'Raid Bosses',
    accent: 'ember',
    tag: '/raid',
    category: 'Battling',
    blurb:
      'Server-wide raid encounters with rarity-scaled stats, shared HP pools, shield phases and type-weakness mechanics.',
    intro:
      'Raid Bosses are big co-op fights. A boss spawns with a shared HP pool that every participant chips away at together, scaling in difficulty across six rarity tiers from Common to Mythic.',
    how: [
      {
        title: 'Boss spawns',
        body:
          'Raid bosses appear with rarity-scaled stats (Common → Uncommon → Rare → Epic → Legendary → Mythic). Higher rarity means tougher stats and better rewards.',
      },
      {
        title: 'Whittle the shared HP',
        body:
          'Everyone fighting the boss damages one shared HP pool. It’s a race and a team effort at once — more trainers means faster kills but more competition for top contributor.',
      },
      {
        title: 'Break the shields',
        body:
          'Bosses run shield phases with their own type-weakness mechanics, separate from normal type matchups. Hit the right types to break shields fast.',
      },
      {
        title: 'Claim rewards',
        body:
          'Qualifying participants are rewarded when the boss goes down. Raids also feed seasonal systems like SolForge resonance and blessings.',
      },
    ],
    commands: [
      { cmd: '/raid', desc: 'Raid boss info and status' },
    ],
    notes: [
      'STAB, multi-hit moves and regen all matter — the combat model is deeper than a normal wild fight.',
    ],
  },

  dungeons: {
    name: 'Seasonal Dungeons',
    short: 'Dungeons',
    accent: 'amber',
    tag: '/dungeon · /party',
    category: 'Battling',
    blurb:
      'Rank-scaled daily keys, puzzles, parkour, skill-check trainer battles, party runs with shared lives and a Shard shop. Clear dungeons for relics, fragments and prestige.',
    intro:
      'Dungeons are instanced challenge runs with objectives, optional side-quests, and a layered reward economy. Entry is gated by keys you earn daily based on your rank — and you can take them on solo or as a party. Beyond combat, runs now chain puzzles, parkour and trainer skill-checks, all tracked on a live dungeon sidebar.',
    how: [
      {
        title: 'Get your daily keys',
        body:
          'Each new day, your Dungeon Keys top up to an allowance based on your donator rank — up to five at the top tier.',
      },
      {
        title: 'Run solo or as a party',
        body:
          'Form a party (up to six) and start a run together with a shared pool of lives — die and you’re out, so the team has to play smart. Lives scale with rank, and a Heart Crystal can restore them mid-run.',
      },
      {
        title: 'Clear objectives',
        body:
          'Every dungeon has mandatory objectives to clear it, plus optional side-quests (reach, collect, defeat) that aren’t required but boost your rewards when completed.',
      },
      {
        title: 'Solve puzzles & run the gauntlet',
        body:
          'Dungeons mix in more than fighting: block-sequence puzzles you activate in the right order, parkour courses where a fall sends you back to your last checkpoint (not the start), and skill-check trainer battles against full authored teams — built for paradox squads. Lose a trainer fight and you’re healed and returned to your checkpoint to try again.',
      },
      {
        title: 'Track it on the sidebar',
        body:
          'A live dungeon sidebar — like Area Zero’s — shows your current objective, side-quest progress, every party member’s HP and remaining lives, and the boss HP bar during chamber fights, so the whole team always knows where the run stands.',
      },
      {
        title: 'Earn relic rewards',
        body:
          'Clearing pays coins and tokens scaled by difficulty, Pokédex reward tokens scaled by how many side-quests you finished, and always a SolForge Crate Key — with a chance at a random SolForge gear piece.',
      },
      {
        title: 'Spend your Shards',
        body:
          'Clearing dungeons earns Shards — spend them in the Shard Shop (/dungeon shop) on premium goods like SolForge gear, cores, crate keys and Rare Candy.',
      },
      {
        title: 'Build toward the season',
        body:
          'Dungeons layer on top of a fragment economy — collect fragments and craft keys, working toward prestige titles through the seasonal system.',
      },
    ],
    commands: [
      { cmd: '/dungeon', desc: 'Open the dungeon hub and enter runs (also /ascdun)' },
      { cmd: '/dungeon shop', desc: 'Spend Shards in the Shard Shop' },
      { cmd: '/party', desc: 'Form a party for shared-lives dungeon runs' },
    ],
    notes: [
      'Higher ranks get more daily keys — up to five at the top tier.',
      'Side-quests are optional but directly scale your reward quality.',
      'A single dungeon can chain reach → puzzle → parkour → trainer battle → boss as objectives or side-quests.',
    ],
  },

  safari: {
    name: 'Safari Zones',
    short: 'Safari',
    accent: 'emerald',
    tag: '/safari',
    category: 'Collecting',
    featured: true,
    blurb:
      'The Umera reserve: 26 themed regions, region-locked spawns, roaming Megas and Totems, Tera & Dynamax raids, swarms and expeditions.',
    intro:
      'The Safari is a whole second world — Umera, a 26-region reserve where each area has its own curated spawn pool. Buy a timed pass, explore, and hunt encounters you can’t find anywhere else: roaming Mega evolutions, Totem Pokémon, native raids and rotating swarms.',
    how: [
      {
        title: 'Buy a pass and enter',
        body:
          'Safari access runs on timed passes — Explorer (1 hour), Adventurer (2 hours) and Expedition (4 hours), bought with coins. Open /safari for the hub: pass status, the raid board, and a region guide.',
      },
      {
        title: 'Explore 26 regions',
        body:
          'Each region (Molten Caves, Volcanic Hellscape, Savannah and more) has its own rarity-tiered spawn pool that replaces most natural spawns. The region guide gives attraction hints — no exact coordinates, you have to explore.',
      },
      {
        title: 'Hunt Megas, Totems and Alphas',
        body:
          'Roaming Mega evolutions and Primals wander the map already mega-formed — battle and beat them for a guaranteed Mega Stone or orb. Alpha and Totem variants roll on natural spawns with bigger models; defeating a Totem can drop a random Z-Crystal.',
      },
      {
        title: 'Raids, swarms and expeditions',
        body:
          'Native Tera and Dynamax raids spawn with star tiers, slot limits and type-effectiveness shields — solo or team them. Swarms flood a region with a featured species on rotation, and timed expeditions reward you for completing catch objectives.',
      },
    ],
    commands: [
      { cmd: '/safari', desc: 'Open the Safari hub — passes, raid board, region guide' },
      { cmd: '/safari expedition', desc: 'Track your active safari expedition objectives' },
    ],
    notes: [
      'Roaming Megas and Totems must be battled or caught — you can’t sword-kill them for the drop.',
      'Raid bosses are owner-locked and catchable at a reduced rate when you join the fight.',
    ],
  },

  warzone: {
    name: 'Warzone PvP',
    short: 'Warzone',
    accent: 'crimson',
    tag: '/pvp',
    category: 'Battling',
    featured: true,
    blurb:
      'Tag-to-force-battle arena. Hit another trainer inside the zone and a ranked battle starts instantly — winner can steal a Pokémon.',
    intro:
      'Warzone is high-stakes open PvP. Step into the zone and you’ve consented to fight: melee-hit any other trainer and a ranked battle force-starts — no accept, no decline, no dodging. The format rotates daily, so the meta is never stale. Win to earn Warzone Points and, if you dare, steal one of the loser’s Pokémon.',
    how: [
      {
        title: 'Check today’s format',
        body:
          'The Warzone format rotates every day at midnight (SGT). The tier cycles NatDex OU → NatDex Ubers → Anything Goes, and the battle style alternates Singles ↔ Doubles — so you might play OU Singles one day and Ubers Doubles the next. A server message announces each day’s format, or check /pvp.',
      },
      {
        title: 'Gear up and enter',
        body:
          'Every format requires a team of level 100, fully evolved Pokémon with no duplicates (Ubers days allow legendaries; Anything Goes drops all bans). There’s an enter button in the /pvp hub that validates your team against today’s format before warping you in. Entering the zone is consent to be tagged.',
      },
      {
        title: 'Tag to fight',
        body:
          'Hit another trainer with a melee swing and the battle starts immediately — the hit damage is cancelled and a ranked match begins in today’s style. No team preview, no escape. You get 60 seconds of entry protection when you first arrive.',
      },
      {
        title: 'Win for Warzone Points',
        body:
          'Wins pay +25 Warzone Points, losses cost −3. WP is its own currency — balances can even go negative, so throwing matches doesn’t pay. Both players get a few minutes of tag-immunity after a fight.',
      },
      {
        title: 'Steal and spend',
        body:
          'The winner takes one random Pokémon from the loser’s party. Spend your WP in the Warzone shop on Pokédex tokens, Paradox & Legendary Cores, master balls and more.',
      },
    ],
    commands: [
      { cmd: '/pvp', desc: 'Open the PvP hub — enter the Warzone, check WP' },
      { cmd: '/pvp shop', desc: 'Spend Warzone Points on rewards' },
      { cmd: '/pvp points', desc: 'Check your Warzone Points balance' },
    ],
    notes: [
      'Steal is real — losing a battle can cost you a Pokémon. Don’t bring what you can’t lose.',
      'Anti-win-trade protections cap rewarded wins against the same opponent.',
    ],
  },

  clans: {
    name: 'Clans',
    short: 'Clans',
    accent: 'azure',
    tag: '/clans · /c',
    category: 'Social',
    blurb:
      'Form a clan, climb the combined-balance leaderboard, stack passive bonuses and rep your tag in chat and TAB.',
    intro:
      'Clans give you a crew, a shared bank, and a competitive identity. Pool resources, buy clan-wide passive bonuses, and push up the combined-balance leaderboard together.',
    how: [
      {
        title: 'Found or join a clan',
        body:
          'Start your own clan or join an existing one. Members get roles (Leader, Vice-Leader, Officer, member) and a clan tag that shows in chat and the TAB list.',
      },
      {
        title: 'Claim land & fly',
        body:
          'Buy claimblocks from the clan shop and claim chunks with /clans claim to protect your clan’s land. Enable /clans fly so members get flight inside clan-claimed territory, paid from the shared bank.',
      },
      {
        title: 'Share a bank',
        body:
          'Clans have a shared bank. Leaders and Vices can spend it — including on clan-wide passive upgrades that benefit every member.',
      },
      {
        title: 'Stack clan passives',
        body:
          'On top of your personal permanent passives, clan passive tiers stack additively — so an active clan makes everyone’s shiny rate, catch rate and more better.',
      },
      {
        title: 'Climb the leaderboard',
        body:
          'Clans are ranked on a combined-balance board. Build wealth as a group and rep your tag at the top.',
      },
    ],
    commands: [
      { cmd: '/clans', desc: 'Open the clan hub' },
      { cmd: '/c', desc: 'Quick clan command + clan chat' },
      { cmd: '/clans claim', desc: 'Claim the chunk you’re standing in for your clan' },
      { cmd: '/clans fly', desc: 'Toggle flight inside clan-claimed land' },
    ],
    notes: [
      'Clan passive buys are Leader/Vice only and spend the clan bank.',
    ],
  },

  jobs: {
    name: 'Jobs & Economy',
    short: 'Jobs & Economy',
    accent: 'amber',
    tag: '/jobs · /chestshop',
    category: 'Economy',
    blurb:
      'Earn coins from mining, fishing, catching and more. Spend across chest shops, the GTS, gacha banners and the forge.',
    intro:
      'The economy ties everything together. Take on jobs to earn coins from the activities you already do, then spend that wealth across every other system on the server.',
    how: [
      {
        title: 'Pick up jobs',
        body:
          'Join jobs that pay you for activities — mining, fishing, catching Pokémon and more. The more you play your role, the more you earn.',
      },
      {
        title: 'Trade with other players',
        body:
          'Set up chest shops to sell to other trainers, or use the GTS to trade Pokémon globally.',
      },
      {
        title: 'Spend everywhere',
        body:
          'Coins fuel the gacha banners, the forge upgrade ladder, gym and dungeon entry, Safari passes and more. There’s always something to save toward.',
      },
      {
        title: 'Earn passive income',
        body:
          'Hold an Elite Four seat or vote for the server to stack up recurring rewards on top of your job income.',
      },
    ],
    commands: [
      { cmd: '/jobs', desc: 'Browse and join jobs' },
      { cmd: '/chestshop', desc: 'Open the chest shop system' },
      { cmd: '/gts', desc: 'Global Trade System' },
    ],
    notes: [
      'Donator ranks get a deposit boost on earned coins.',
    ],
  },

  progression: {
    name: 'Battle Pass, Ranks & Passives',
    short: 'Progression',
    accent: 'violet',
    tag: '/bp · /ranks',
    category: 'Progression',
    blurb:
      'Seasonal Battle Pass tracks, an 8-tier rank progression with badges, and permanent passive upgrades you keep forever.',
    intro:
      'Three progression systems that reward the time you put in: a seasonal Battle Pass with reward tracks, an eight-tier rank ladder with cosmetic glyph badges, and permanent passives that make your account stronger for good.',
    how: [
      {
        title: 'Climb the Battle Pass',
        body:
          'Complete quests to level a seasonal Battle Pass and unlock reward tracks. Each season resets with fresh rewards to chase.',
      },
      {
        title: 'Rank up',
        body:
          'An 8-tier rank progression tracks your overall account, with cosmetic badge glyphs that show next to your name. Ranks also gate access to certain features and perks.',
      },
      {
        title: 'Buy permanent passives',
        body:
          'Spend coins and Battle Tower tokens on permanent passive stats — shiny rate, hidden ability rate, catch rate, EXP, egg hatch speed, night vision. These never expire.',
      },
      {
        title: 'Raise your caps with gems',
        body:
          'Personal and clan passive tiers stack, capped at three by default. Spend gems to raise the cap up to five per stat for serious account power.',
      },
    ],
    commands: [
      { cmd: '/bp', desc: 'Open the Battle Pass' },
      { cmd: '/ranks', desc: 'View rank progression and perks' },
      { cmd: '/passive', desc: 'Buy and manage permanent passives' },
    ],
    notes: [
      'Passives stack personal + clan tiers additively — being in an active clan compounds your account.',
    ],
  },

  hunts: {
    name: 'Poké Hunts',
    short: 'Poké Hunts',
    accent: 'emerald',
    tag: '/hunt · /ghunt',
    category: 'Collecting',
    featured: true,
    blurb:
      'Tiered catch-objective bounties. Personal hunts you accept and turn in, plus server-wide global hunts where the first catch wins.',
    intro:
      'Hunts turn catching into a reward loop. Personal hunts (/hunt) give you a private set of tiered bounties to accept and claim at your own pace; global hunts (/ghunt) are a server-wide race where the first trainer to catch the target takes the whole prize. Both are some of the best coin income on the server.',
    how: [
      {
        title: 'Open /hunt and pick a tier',
        body:
          'Personal hunts come in five tiers — Easy, Medium, Hard, Insane and Master. Each shows its target species and requirements before you accept: things like gender, size, the Poké Ball used, IV thresholds, or being fully evolved. Harder tiers stack more requirements and longer timers.',
      },
      {
        title: 'Catch the target, turn it in',
        body:
          'Catch a Pokémon that matches every requirement and the hunt flips to “ready to claim” — you even get an instant IV boost on the catch. Head back to the /hunt GUI and hit turn-in to collect coins, ASC EXP and a bonus roll (tokens, vote keys, bottle caps, master balls and more).',
      },
      {
        title: 'Reroll or cancel',
        body:
          'Don’t like a target? Spend tokens to reroll an available hunt for a new species, or cancel an active one. Available hunts also refresh on a daily reset, so there’s always something fresh to chase.',
      },
      {
        title: 'Race the global hunts',
        body:
          'Open /ghunt for the server-wide board — 11 shared slots from Easy up to Legendary. Everyone hunts the same targets, and the first trainer to catch one claims the entire reward (up to 1,000,000 coins on the Legendary slot). Slots show who won and rotate on a server timer.',
      },
    ],
    commands: [
      { cmd: '/hunt', desc: 'Open your personal hunt board (also /hunts, /pokehunt)' },
      { cmd: '/ghunt', desc: 'Open the server-wide global hunt board' },
    ],
    notes: [
      'Personal hunts pay 75k–750k coins by tier — one of the strongest steady income sources.',
      'Global hunts are first-come, first-served: if someone else catches it first, the slot is gone until rotation.',
      'A swarm badge on a hunt tile means the target is currently swarming in the Safari.',
    ],
  },

  bingo: {
    name: 'Catch Bingo',
    short: 'Catch Bingo',
    accent: 'violet',
    tag: '/bingo',
    category: 'Collecting',
    blurb:
      'A 4×4 catch card. Fill rows for coins, complete the whole card fast for big payouts and Origin Keys.',
    intro:
      'Bingo is a catch-’em challenge on a timer. Roll a card of sixteen species, then catch them to mark squares — complete lines for coins and race to fill the whole card before the clock runs out for the top rewards.',
    how: [
      {
        title: 'Roll a card',
        body:
          'Open /bingo to start a 4×4 card — sixteen random species pulled from the huntable pool. You have six hours before the card expires.',
      },
      {
        title: 'Catch to mark squares',
        body:
          'Catch any species shown on your card and that square fills automatically. No need to manually match — the card tracks your catches as they happen.',
      },
      {
        title: 'Complete rows for coins',
        body:
          'Fill all four squares in a row to complete a line. Each completed row is worth coins — claim them with the claim button in the /bingo GUI.',
      },
      {
        title: 'Race the full card',
        body:
          'Mark all sixteen squares to complete the card and get a server-wide shout-out. The faster you finish, the bigger the bonus — completing under an hour pays the most, plus Origin Keys for the crate system.',
      },
    ],
    commands: [
      { cmd: '/bingo', desc: 'Start or open your bingo card' },
    ],
    notes: [
      'Full-card rewards are time-tiered: finish under 1h, 3h, or 6h for descending payouts + Origin Keys.',
      'Rewards are collected from the claim button — don’t forget to cash out before the card expires.',
    ],
  },

  casino: {
    name: 'Casino',
    short: 'Casino',
    accent: 'crimson',
    tag: '/casino',
    category: 'Economy',
    blurb:
      'Gamble your coins on Coinflip, Dice and Blackjack — fair odds, no house edge, winner takes all.',
    intro:
      'Feeling lucky? The Casino lets you wager coins across three games. Challenge other players to a Coinflip, bet high-or-low on Dice, or play Blackjack against the dealer. The games are tuned to fair odds — risk your coins for the thrill, not against a stacked house.',
    how: [
      {
        title: 'Open the casino',
        body:
          'Use /casino for the casino hub, or jump straight into a game with its command. All games bet in coins. There may be a shared cooldown between plays, and gambling can be limited to a casino zone.',
      },
      {
        title: 'Coinflip — player vs player',
        body:
          'Challenge another trainer with /coinflip <amount> <player> (or /cf). They accept, the coin flips, winner takes the whole pot. Straight 50/50, no cut.',
      },
      {
        title: 'Dice — high or low',
        body:
          'Bet against the house with /dice <high|low> <amount>. A d100 rolls: low is 1–50, high is 51–100. Guess right and your stake pays out at 2×.',
      },
      {
        title: 'Blackjack — beat the dealer',
        body:
          'Play classic blackjack with /bj <bet>. Hit, stand or double down to get closer to 21 than the dealer without busting. Blackjack pays fair and the dealer follows standard rules.',
      },
    ],
    commands: [
      { cmd: '/casino', desc: 'Open the casino hub' },
      { cmd: '/coinflip <amount> <player>', desc: 'Challenge a player to a coinflip (alias /cf)' },
      { cmd: '/dice <high|low> <amount>', desc: 'Bet high or low on a d100 roll' },
      { cmd: '/bj <bet>', desc: 'Play blackjack against the dealer (hit / stand / double)' },
    ],
    notes: [
      'Games are tuned to fair, no-house-edge odds — but you can still lose your bet. Gamble responsibly.',
      'A shared cooldown may apply across all casino games.',
    ],
  },

  fusions: {
    name: 'Pokémon Fusions',
    short: 'Fusions',
    accent: 'violet',
    tag: '/bt shop',
    category: 'Collecting',
    featured: true,
    blurb:
      'Fuse two Pokémon into brand-new designs with Fusion Splicers — earned in the Battle Tower.',
    intro:
      'Cobble Asia supports custom Pokémon fusions: combine two species into a single new design with its own look. Splicers are an endgame reward, so a fused Pokémon is a real flex on your team.',
    how: [
      {
        title: 'Earn a Fusion Splicer',
        body:
          'Splicers are redeemed in the Battle Tower shop with tower tokens. Climb the tower, bank tokens, and trade them in for the splicer you want.',
      },
      {
        title: 'Fuse your Pokémon',
        body:
          'Apply the splicer to fuse its two species into a new fused form — a distinct model and design, not just a recolor.',
      },
      {
        title: 'Show it off',
        body:
          'Fused designs are some of the rarest-looking Pokémon on the server. Note that some competitive ladders (like the Elite Four) restrict fusions, so they shine most as collection and showcase pieces.',
      },
    ],
    commands: [
      { cmd: '/bt', desc: 'Battle Tower — earn tokens, then redeem Fusion Splicers in the shop' },
    ],
    notes: [
      'Fusions are aspect-based forms on the base species — caught and stored like any other Pokémon.',
      'Some PvP formats ban fusions for balance; check each ladder’s rules.',
    ],
    gallery: [
      'assets/fusions/fusion-01.webp', 'assets/fusions/fusion-02.webp', 'assets/fusions/fusion-03.gif',
      'assets/fusions/fusion-04.gif', 'assets/fusions/fusion-05.gif', 'assets/fusions/fusion-06.gif',
      'assets/fusions/fusion-07.webp', 'assets/fusions/fusion-08.gif', 'assets/fusions/fusion-09.gif',
      'assets/fusions/fusion-10.webp', 'assets/fusions/fusion-11.gif', 'assets/fusions/fusion-12.gif',
      'assets/fusions/fusion-13.webp', 'assets/fusions/fusion-14.gif', 'assets/fusions/fusion-15.gif',
      'assets/fusions/fusion-16.gif', 'assets/fusions/fusion-17.webp', 'assets/fusions/fusion-18.webp',
    ],
    credit: {
      text: 'Fusion designs are from the Starlight Fusion datapack',
      url: 'https://modrinth.com/datapack/starlightfusion',
    },
  },
};

// Display order + grouping on the landing page
const FEATURE_ORDER = [
  'solforge', 'crates', 'fusions', 'battletower', 'areazero', 'gyms', 'raids',
  'dungeons', 'safari', 'hunts', 'bingo', 'warzone', 'clans',
  'jobs', 'casino', 'progression',
];

// Full mod toolbox (landing page mod grid)
const MODS = [
  { name: 'Area Zero', cmd: '/az · /skill' },
  { name: 'Battle Pass', cmd: '/bp' },
  { name: 'Battle Tower', cmd: '/bt' },
  { name: 'Catch Combos', cmd: '/combo' },
  { name: 'Chest Shop', cmd: '/chestshop' },
  { name: 'Claim Blocks', cmd: '/ascclaim' },
  { name: 'Clans', cmd: '/clans · /c' },
  { name: 'Crates & Banners', cmd: '/crates · /summon' },
  { name: 'Dungeons', cmd: '/dungeon' },
  { name: 'Essentials', cmd: '/ess' },
  { name: 'Forge & SolForge', cmd: '/gear' },
  { name: 'GTS', cmd: '/gts' },
  { name: 'Gyms', cmd: '/gym' },
  { name: 'Jobs', cmd: '/jobs' },
  { name: 'Leaderboard', cmd: '/lb' },
  { name: 'Legend Spawns', cmd: '/legend' },
  { name: 'Levels', cmd: '/lvl' },
  { name: 'Mail', cmd: '/mail' },
  { name: 'NPCs', cmd: '/npc' },
  { name: 'Pokeditor', cmd: '/pokeditor' },
  { name: 'PokeWiki', cmd: '/pwiki' },
  { name: 'PvP & Warzone', cmd: '/pvp' },
  { name: 'Raid Boss', cmd: '/raid' },
  { name: 'Ranks', cmd: '/ranks' },
  { name: 'Safari', cmd: '/safari' },
  { name: 'Training Grounds', cmd: '/tg' },
  { name: 'Voting', cmd: '/vote' },
  { name: 'World Tweaks', cmd: '/worldtweaks' },
];

// =====================================================================
//  FULL COMMAND REFERENCE (commands.html). Grouped by category.
//  Every mod also has its own in-game `<command> help` subcommand.
// =====================================================================
const COMMANDS = [
  {
    group: 'Getting Started',
    items: [
      { cmd: '/register <password>', desc: 'Register your account on first join (offline-mode auth)' },
      { cmd: '/login <password>', desc: 'Log in when you join' },
      { cmd: '/spawn', desc: 'Teleport to server spawn' },
      { cmd: '/sethome <name>', desc: 'Set a home you can teleport back to' },
      { cmd: '/home [name]', desc: 'Teleport to one of your homes' },
      { cmd: '/rtp', desc: 'Random-teleport into the wild to explore & catch' },
      { cmd: '/warp <name>', desc: 'Travel to a named server warp' },
      { cmd: '/tpa <player>', desc: 'Request to teleport to another player' },
      { cmd: '/back', desc: 'Return to your previous location' },
      { cmd: '/kits', desc: 'Claim your starter kit and any kits you have access to' },
      { cmd: '/daily', desc: 'Claim your daily reward' },
    ],
  },
  {
    group: 'Pokémon & Catching',
    items: [
      { cmd: '/hunt', desc: 'Personal Poké Hunt board (also /hunts, /pokehunt)' },
      { cmd: '/ghunt', desc: 'Server-wide global hunt board' },
      { cmd: '/bingo', desc: 'Start or open your catch-bingo card' },
      { cmd: '/combo', desc: 'Catch-combo tracker for shiny chaining' },
      { cmd: '/safari', desc: 'Enter the Umera Safari reserve' },
      { cmd: '/pwiki <species>', desc: 'Look up a Pokémon’s spawn & info' },
      { cmd: '/pokeditor', desc: 'Edit/inspect your Pokémon (where permitted)' },
      { cmd: '/legend', desc: 'Legendary spawn info' },
      { cmd: '/gts', desc: 'Global Trade System' },
      { cmd: '/pc', desc: 'Open your Cobblemon PC' },
    ],
  },
  {
    group: 'Battling & Competition',
    items: [
      { cmd: '/bt', desc: 'Battle Tower — tiered singles & doubles ladder' },
      { cmd: '/gym', desc: 'Challenge the eight gym leaders' },
      { cmd: '/pvp', desc: 'PvP hub — Warzone, matchmaking, shop' },
      { cmd: '/ladder', desc: 'The Elite Four seat ladder' },
      { cmd: '/raid', desc: 'Raid boss info & encounters' },
      { cmd: '/az', desc: 'Area Zero combat zone' },
      { cmd: '/skill', desc: 'Spend your Area Zero paradox gauge' },
      { cmd: '/dungeon', desc: 'Enter seasonal dungeons' },
      { cmd: '/party', desc: 'Party up for shared-lives dungeon runs' },
      { cmd: '/tg', desc: 'Training Grounds — EXP buffs' },
    ],
  },
  {
    group: 'Economy & Gambling',
    items: [
      { cmd: '/jobs', desc: 'Browse and join paying jobs' },
      { cmd: '/chestshop', desc: 'Chest-shop system' },
      { cmd: '/casino', desc: 'Casino hub' },
      { cmd: '/coinflip <amount> <player>', desc: 'PvP coinflip wager (alias /cf)' },
      { cmd: '/dice <high|low> <amount>', desc: 'Bet high or low on a d100 roll' },
      { cmd: '/bj <bet>', desc: 'Blackjack against the dealer' },
      { cmd: '/vote', desc: 'Vote links + streak rewards' },
    ],
  },
  {
    group: 'Gear, Crates & Forge',
    items: [
      { cmd: '/crates', desc: 'Warp to the crate area — right-click a crate with its key to open it' },
      { cmd: '/ascc list', desc: 'List every key crate and its odds (preview with /ascc preview <crate>)' },
      { cmd: '/summon', desc: 'Open the gacha banner-select GUI (aliases /banner, /gamble)' },
      { cmd: '/forge', desc: 'Open the Forge — craft & enchant gear and armor sets' },
      { cmd: '/gear', desc: 'SolForge catalog — pieces, passives, how to get' },
      { cmd: '/gear upgrade', desc: 'Spend Solar Shards to level held gear' },
    ],
  },
  {
    group: 'Progression',
    items: [
      { cmd: '/bp', desc: 'Seasonal Battle Pass' },
      { cmd: '/passive', desc: 'Buy & manage permanent passives' },
      { cmd: '/ranks', desc: 'Rank progression & perks' },
      { cmd: '/lvl', desc: 'ASC level & EXP' },
      { cmd: '/lb', desc: 'Leaderboards' },
      { cmd: '/title', desc: 'Equip cosmetic titles' },
    ],
  },
  {
    group: 'Social & Utility',
    items: [
      { cmd: '/clans', desc: 'Clan hub (alias /c, + clan chat)' },
      { cmd: '/mail', desc: 'In-game mailbox — claim rewards & messages' },
      { cmd: '/ec', desc: 'Open your ender chest' },
      { cmd: '/vault', desc: 'Personal item vault that persists across deaths (alias /pv)' },
      { cmd: '/msg <player>', desc: 'Private message a player (reply with /r)' },
      { cmd: '/worldtweaks', desc: 'World tweaks & auth utilities' },
    ],
  },
  {
    group: 'Land Claims',
    items: [
      { cmd: '/flan claim', desc: 'Enter claim mode — right-click two corners with a golden shovel' },
      { cmd: '/flan trust <player>', desc: 'Let a friend build in your claim' },
      { cmd: '/flan list', desc: 'View all your claims (/flan menu for the GUI)' },
      { cmd: '/ascclaim balance', desc: 'See your earned & free claim blocks' },
      { cmd: '/ascclaim transfer <player> <amt>', desc: 'Send claim blocks to another player' },
      { cmd: '/ascclaim voucher <amt>', desc: 'Turn blocks into a tradeable voucher (redeem with /ascclaim redeem)' },
      { cmd: '/ascclaim buy <amt>', desc: 'Buy extra claim blocks with coins' },
    ],
  },
  {
    group: 'Help — every mod has its own',
    items: [
      { cmd: '/ess help', desc: 'Essentials command list (homes, warps, hunts, casino…)' },
      { cmd: '/bt help', desc: 'Battle Tower help' },
      { cmd: '/safari help', desc: 'Safari help' },
      { cmd: '/pvp help', desc: 'PvP & Warzone help' },
      { cmd: '/dungeon help', desc: 'Dungeons help' },
      { cmd: '/clans help', desc: 'Clans help' },
      { cmd: '/bp help', desc: 'Battle Pass help' },
      { cmd: '<command> help', desc: 'Add “help” after any ASC command for its full list' },
    ],
  },
];

// =====================================================================
//  BEGINNER GUIDE (guide.html). Ordered steps to get started.
// =====================================================================
const GUIDE = [
  {
    title: 'Connect & log in',
    body:
      'Grab the modpack from our Discord, launch Minecraft 1.21.1 (Fabric), and add the server: <b>play.cobbleasia.net</b>. On your first join you’ll register an account — type <code>/register &lt;password&gt;</code>, and use <code>/login &lt;password&gt;</code> each time you join after that. Keep your password safe; staff can reset it if needed.',
    cmds: ['/register <password>', '/login <password>'],
  },
  {
    title: 'Choose your starter',
    body:
      'When you spawn in, pick your starter Pokémon and take your first steps. Have a look around spawn — there are NPCs, warps and signs pointing you to everything the server offers.',
    cmds: [],
  },
  {
    title: 'Set a home & learn to travel',
    body:
      'Set a home base with <code>/sethome</code> so you can always get back. Use <code>/spawn</code> to return to spawn, <code>/rtp</code> to teleport into the wild to explore and catch, and <code>/warp</code> to reach key destinations. <code>/back</code> returns you to where you just were.',
    cmds: ['/sethome home', '/home', '/rtp', '/warp'],
  },
  {
    title: 'Catch Pokémon & start a Hunt',
    body:
      'Go catch! Then open <code>/hunt</code> for tiered catch-bounties that pay big coins, and roll a <code>/bingo</code> card for bonus rewards. These are the best way to earn early — every catch can count toward something.',
    cmds: ['/hunt', '/ghunt', '/bingo'],
  },
  {
    title: 'Make money with Jobs',
    body:
      'Open <code>/jobs</code> and join the roles that fit how you play — mining, fishing, catching and more pay you coins as you go. Sell extras at player chest shops with <code>/chestshop</code>, or trade Pokémon globally on the <code>/gts</code>. Don’t forget to <code>/vote</code> daily for free rewards.',
    cmds: ['/jobs', '/chestshop', '/vote'],
  },
  {
    title: 'Battle & progress',
    body:
      'Test yourself: challenge the eight gyms with <code>/gym</code>, climb the <code>/bt</code> Battle Tower, and join raids with <code>/raid</code>. Level your account, climb <code>/ranks</code>, and work the seasonal <code>/bp</code> Battle Pass for steady rewards.',
    cmds: ['/gym', '/bt', '/bp', '/ranks'],
  },
  {
    title: 'Spend & gear up',
    body:
      'Put your coins to work. Pull on gacha banners with <code>/summon</code>, forge the seasonal SolForge set and check it with <code>/gear</code>, and buy permanent account upgrades with <code>/passive</code>. The more you play, the stronger your account gets — for good.',
    cmds: ['/summon', '/gear', '/passive'],
  },
  {
    title: 'Join the community',
    body:
      'You don’t have to go it alone. Join or start a clan with <code>/clans</code> for shared bonuses and a crew, check your <code>/mail</code> for rewards, and hop in our Discord to find friends, events and support. Welcome to Cobble Asia!',
    cmds: ['/clans', '/mail'],
  },
];

// =====================================================================
//  SERVER NEWS (landing hub). Newest first. Link points to a feature page.
// =====================================================================
const NEWS = [
  {
    tag: 'Seasonal',
    title: 'SolForge: Season of the First Sun',
    body: 'The first full seasonal set is live — forge sun-powered gear, level it with Solar Shards, and chase the server-wide Radiant State.',
    link: 'feature.html?f=solforge',
  },
  {
    tag: 'PvP',
    title: 'The Warzone is open',
    body: 'Step into the tag-to-fight arena. Hit a trainer and a ranked battle starts instantly — win to earn Warzone Points and steal a Pokémon.',
    link: 'feature.html?f=warzone',
  },
  {
    tag: 'Exploration',
    title: 'Explore the Umera Safari',
    body: 'A 26-region reserve with region-locked spawns, roaming Megas and Totems, Tera & Dynamax raids, swarms and timed expeditions.',
    link: 'feature.html?f=safari',
  },
];

// =====================================================================
//  PATCH NOTES (patchnotes.html + landing preview). Player-facing only —
//  newest first. `type` per change is one of: new | improved | fixed.
// =====================================================================
const PATCHNOTES = [
  {
    date: '2026-06-20',
    tag: 'New Player',
    title: 'Tutorial video — now in-game and on the site',
    changes: [
      { type: 'new', text: 'A full <strong>server tutorial video</strong> is now one command away. Type <code>/tutorial</code> in-game (there is also a link in <code>/help</code>) to get the official YouTube walkthrough, and it is embedded on the website at the new <strong>Tutorial</strong> page — a video version of the Beginner’s Guide.' },
    ],
  },
  {
    date: '2026-06-20',
    tag: 'Leaderboards',
    title: 'Five new leaderboards & a refreshed hub',
    changes: [
      { type: 'new', text: 'Five new leaderboards — <strong>Shiny Dex, Pokédex, PvP Wins, Total Catches and Shinies Owned</strong> — bringing the board count from 11 to 16. <code>/lb</code>' },
      { type: 'improved', text: 'The leaderboard hub now <strong>previews the live #1 leader</strong> on every tile, and your own row is highlighted with a glint and a <strong>“This is you”</strong> marker — even when your standing sits on another page.' },
    ],
  },
  {
    date: '2026-06-20',
    tag: 'Dungeons',
    title: 'A proper Dungeons hub menu',
    changes: [
      { type: 'new', text: '<code>/dungeon</code> now opens a clean <strong>hub menu</strong> instead of dropping you straight into a list — browse dungeons, track <strong>Quests &amp; Objectives</strong> with live progress bars, hit the Shard Shop, and check <strong>My Stats</strong> (completions, currency balances and your current-run state) all from one screen.' },
    ],
  },
  {
    date: '2026-06-20',
    tag: 'Safari',
    title: 'Roaming Megas can now wander outside the Safari',
    changes: [
      { type: 'new', text: 'Safari’s <strong>roaming Mega encounters</strong> can now also roll in satellite worlds like the <strong>build world and resource world</strong> — so you might cross paths with a wandering Mega outside the Safari zone itself. Raids and ambient alpha/totem spawns stay Safari-only. <code>/safari</code>' },
    ],
  },
  {
    date: '2026-06-20',
    tag: 'Area Zero',
    title: 'Ender pearls limited in Area Zero',
    changes: [
      { type: 'improved', text: '<strong>Ender pearls are now limited inside Area Zero</strong> — a possession cap plus a throw cooldown — to stop players chain-pearling away to dodge fights. PvP in the zone is meant to be committed, not a teleport spam war. <code>/az</code>' },
    ],
  },
  {
    date: '2026-06-19',
    tag: 'Ranks',
    title: 'Shiny Dex rewards & Dex Crate keys',
    changes: [
      { type: 'new', text: 'A separate <strong>Shiny Dex reward track</strong> now pays out as you register distinct shiny species, and every <strong>Dex milestone grants a Dex Crate key</strong> on top of its existing reward. <code>/ranks</code>' },
      { type: 'improved', text: 'Every tile in the <code>/ranks</code> GUI now showcases the <strong>perks that rank unlocks</strong> — not just the one you are currently on — so you can see what each rank up is worth at a glance.' },
      { type: 'fixed', text: 'Several Dex and Shiny-Dex reward tiers were paying their coins but <strong>silently skipping the Battle Tower Token reward</strong>. Every token tier now delivers both, and any tokens players were owed have been reimbursed.' },
    ],
  },
  {
    date: '2026-06-19',
    tag: 'Crates',
    title: 'Paradox & legendary IV guarantees fixed',
    changes: [
      { type: 'fixed', text: 'Summon-banner pulls of <strong>Paradox Pokémon</strong> (Walking Wake, Iron Hands, Roaring Moon…) were rolling <strong>fully random IVs</strong> instead of the guaranteed three perfect IVs. They now land on the proper IV floor. <code>/summon</code>' },
      { type: 'improved', text: '<strong>Legendary and shiny-legendary Pokémon Spins</strong> now also carry the guaranteed 3×31 IV floor (and are a touch rarer to match the banner pulls).' },
    ],
  },
  {
    date: '2026-06-19',
    tag: 'PvP',
    title: 'Urshifu-Rapid-Strike is legal on Singles OU',
    changes: [
      { type: 'fixed', text: '<strong>Urshifu-Rapid-Strike is now legal on the Singles NatDex OU ladder</strong> — it is an OU Pokémon, not Ubers. Only the <strong>Single-Strike</strong> form stays banned, so the two forms are now gated separately. <code>/pvp</code>' },
    ],
  },
  {
    date: '2026-06-19',
    tag: 'Gyms',
    title: 'Gym challenge & banlist fixes',
    changes: [
      { type: 'fixed', text: 'A live gym challenge could <strong>silently fail</strong> and show your opponent “No pending gym challenge” when the challenger’s lead Pokémon was locked by Cobblemon. Challenges now register reliably. <code>/gym</code>' },
      { type: 'fixed', text: 'Gym teams now follow the correct <strong>NatDex Doubles OU</strong> banlist, so Doubles-legal Pokémon like <strong>Manaphy</strong> are allowed in your teams again.' },
    ],
  },
  {
    date: '2026-06-19',
    tag: 'PokéWiki',
    title: 'Spawn data fixed for the Tapus & space-named species',
    changes: [
      { type: 'fixed', text: '<code>/pwiki</code> showed <strong>no spawn biomes or conditions</strong> for species whose names contain a space — the <strong>Tapus, Roaring Moon, Iron Hands, Great Tusk, Flutter Mane and Walking Wake</strong>. Their spawn data now displays correctly. <code>/pwiki</code>' },
    ],
  },
  {
    date: '2026-06-18',
    tag: 'Battle Tower',
    title: 'Battle Tower menus refreshed',
    changes: [
      { type: 'improved', text: 'All three Battle Tower screens got a visual overhaul. The hub is now a full-size board of <strong>mode-coloured tier cards</strong> with aligned Best / Rank / Floors lore, your lifetime floors climbed, and both wallets (BT Tokens + Limited Tokens) inline. <strong>Singles and Doubles are now two separate icons</strong> — the active format glows — instead of one toggle. The shop and leaderboard match the new style, with comma-formatted balances and cleaner tooltips throughout. <code>/bt</code>' },
    ],
  },
  {
    date: '2026-06-18',
    tag: 'Anti-Dupe',
    title: 'Held-item exploits closed',
    changes: [
      { type: 'fixed', text: 'Closed a set of <strong>held-item exploits</strong>. Pokémon could <strong>duplicate held crate keys and cores</strong> when fainting in battle, and <code>/pokeconvert</code> / <code>/pokegift</code> / <code>/wondertrade</code> could <strong>silently delete a held item</strong> such as a Mega Stone. Held items are now preserved on conversion and can no longer be duplicated.' },
      { type: 'fixed', text: '<strong>Starlight Fusion Pokémon can no longer be gifted or wonder-traded</strong> — they were slipping past the fusion gate because they layer forms rather than using a fusion namespace.' },
    ],
  },
  {
    date: '2026-06-18',
    tag: 'Area Zero',
    title: 'Closed a free Area Zero escape',
    changes: [
      { type: 'fixed', text: 'Patched an exploit where players could <strong>overflow the gear cap</strong> to get teleported safely to spawn — a free, no-risk exit out of Area Zero. The cap is now enforced properly. <code>/az</code>' },
    ],
  },
  {
    date: '2026-06-18',
    tag: 'Quality of Life',
    title: 'Fossil Pokémon get an IV floor',
    changes: [
      { type: 'improved', text: '<strong>Fossil-machine Pokémon</strong> now revive with a guaranteed <strong>three perfect IVs</strong>, matching the floor already used on legendary banner and crate pulls. Reviving a fossil is finally worth it.' },
    ],
  },
  {
    date: '2026-06-18',
    tag: 'Flight',
    title: 'Passive flight buyers can use /fly again',
    changes: [
      { type: 'fixed', text: '<strong>Passive flight now actually works with <code>/fly</code></strong>. The 1,000,000-coin / 24h timed-flight perk only responded to double-tap jump, and clan-fly was silently grounding it every few seconds. Both issues are fixed, so paid flight stays on. <code>/fly</code>' },
    ],
  },
  {
    date: '2026-06-16',
    tag: 'Titles',
    title: 'Prestige Crowns: Emperor, Hunter & Warden',
    changes: [
      { type: 'new', text: 'A new family of <strong>rotating prestige crowns</strong> that move to whoever earns them — separate from the permanent ♛ Conqueror crowns. The <strong>♚ Tower Emperor</strong> goes to the trainer who has climbed the <strong>furthest</strong> (highest floor and tier) in the Battle Tower; lose the lead and the crown moves.' },
      { type: 'new', text: 'Area Zero now awards three <strong>Hunter</strong> crowns — <strong>Alpha Hunter, Paradox Hunter and Legendary Hunter</strong> — to the players who have defeated the most <strong>wild Alpha, Paradox, and Legendary/Mythical Pokémon</strong> inside the zone. Every wild kill in Area Zero now counts toward them. <code>/az</code>' },
      { type: 'new', text: 'The <strong>❀ Safari Warden</strong> crown goes to the most active Safari trainer, scored on total <strong>catches plus Tera &amp; Dynamax raid clears</strong> across all your runs. <code>/safari</code>' },
      { type: 'improved', text: 'The <code>/titles</code> list is now <strong>sorted by rarity</strong>, so your rarest titles sit up top.' },
    ],
  },
  {
    date: '2026-06-16',
    tag: 'Jobs',
    title: 'Job ranks — progression tiers with perks',
    changes: [
      { type: 'new', text: 'Every job now ranks up on its own, from <strong>Novice → Apprentice → Journeyman → Expert → Master</strong>, based on that job’s all-time earnings (each job grinds independently). Higher rank means a <strong>bigger payout multiplier</strong> (up to ×1.35 at Master), a <strong>bigger per-cycle cap</strong>, and a cosmetic badge like <strong>“✦ Master Farmer”</strong> shown on your job tiles. Hitting Master broadcasts server-wide. Check it with <code>/job rank</code>.' },
      { type: 'improved', text: 'No reset — everyone starts at Novice and ranks up from current activity, with no change to existing balances. <code>/jobs</code>' },
    ],
  },
  {
    date: '2026-06-16',
    tag: 'PvP',
    title: 'Elite Four & VGC Doubles fixes',
    changes: [
      { type: 'fixed', text: '<strong>VGC Doubles now battles with the four Pokémon you pick</strong> at team preview, not your whole party. Pick your four and those are the ones that fight — un-picked Pokémon are never touched, and fused/aspect forms keep their data.' },
      { type: 'fixed', text: 'A <strong>frozen Elite Four battle no longer counts as a loss</strong>. If a challenge genuinely hangs mid-fight, it’s now resolved as a void — your entry fee is <strong>refunded</strong> and <strong>no cooldown</strong> is applied. Playing then quitting to dodge a defeat still counts as a loss, so the anti-dodge protection stays.' },
      { type: 'improved', text: 'The lost-challenge cooldown is cut from <strong>48 hours to 12 hours</strong>, keeping the ladder active without removing the anti-spam gate. <code>/ladder</code>' },
    ],
  },
  {
    date: '2026-06-16',
    tag: 'Battle Tower',
    title: 'Two competitive move loopholes closed',
    changes: [
      { type: 'fixed', text: 'In <strong>Little Cup</strong>, the fixed-damage moves <strong>Dragon Rage</strong> (40 HP) and <strong>Sonic Boom</strong> (20 HP) are now banned — at the Lv.5 lock they OHKO/2HKO almost the whole format, which is exactly why Smogon bans them.' },
      { type: 'fixed', text: 'Closed a defuse-and-keep-move exploit: a player could fuse, learn the fusion-exclusive move <strong>Nihil Light</strong>, then defuse back to plain Rayquaza (tier-legal in Ubers) while keeping the move. Fusion-exclusive moves are now banned in every clause-enforced tier.' },
    ],
  },
  {
    date: '2026-06-15',
    tag: 'PvP',
    title: 'Warzone daily format rotation',
    changes: [
      { type: 'new', text: 'The <strong>Warzone format now rotates every day at midnight (SGT)</strong>. The tier cycles <strong>NatDex OU → NatDex Ubers → Anything Goes</strong>: Ubers days let legendaries loose, Anything Goes days drop all competitive bans. Every day still requires level 100, fully evolved, and no duplicate species. <code>/pvp</code>' },
      { type: 'new', text: 'The battle style now <strong>alternates Singles ↔ Doubles</strong> daily too. With both cycles flipping, you get fresh combos all week — <em>OU Singles → Ubers Doubles → AG Singles → OU Doubles…</em> A server message announces each day’s format; check <code>/pvp</code> or the Enter-the-Warzone button to see what’s live.' },
    ],
  },
  {
    date: '2026-06-15',
    tag: 'Crates',
    title: 'One flat summon price on every banner',
    changes: [
      { type: 'improved', text: 'Every summon banner now costs the same — <strong>100,000 coins per pull</strong> and <strong>900,000 for a 10-pull</strong>. No more banner being a cheaper outlier, and rotations no longer reset a banner to a stale low price. <code>/summon</code>' },
    ],
  },
  {
    date: '2026-06-14',
    tag: 'Battle Tower',
    title: 'Battle Tower Seasons & Conqueror Crowns',
    changes: [
      { type: 'new', text: 'The Battle Tower now runs on <strong>rolling 30-day seasons</strong>. When a season rolls over every floor and first-clear leaderboard wipes and everyone re-climbs from Floor 1 — your <strong>currency and lifetime stats are kept</strong>. Check the timer with <code>/bt season</code>.' },
      { type: 'new', text: 'Seven <strong>♛ Conqueror crowns</strong> (MYTHIC titles) go to the <strong>first player to clear Floor 50</strong> of each tier — Uber, OU, UU, RU, NU, Little Cup and Anything Goes. Win one and it’s <strong>yours forever</strong>; only the “reigning champ” pointer moves when someone else first-clears next season.' },
      { type: 'fixed', text: 'Closed an exploit where the <strong>Uber tower ran no clauses at all</strong> — Starlight Fusions (e.g. a Cosmog + Rayquaza fusion), the Species Clause and the Mega-Rayquaza guard were all being skipped. Every tier now enforces its banlist.' },
    ],
  },
  {
    date: '2026-06-14',
    tag: 'Dungeons',
    title: 'Puzzles, parkour & trainer battles',
    changes: [
      { type: 'new', text: 'Dungeons gained three new objective types: <strong>block-sequence puzzles</strong>, <strong>parkour courses</strong> (fall and you’re sent back to your last checkpoint, not the start), and <strong>skill-check trainer battles</strong> against full authored teams — built for paradox squads. Lose a trainer fight and you’re healed and returned to your checkpoint to retry.' },
      { type: 'new', text: 'A live <strong>dungeon sidebar</strong> now shows your objective, sidequests, party HP &amp; lives, and the boss HP bar during chamber fights — just like Area Zero. <code>/dungeon</code>' },
    ],
  },
  {
    date: '2026-06-14',
    tag: 'Jobs',
    title: 'New job: Lumberjack',
    changes: [
      { type: 'new', text: 'A dedicated <strong>🪓 Lumberjack</strong> job pays <strong>60 coins per log</strong> you chop (every wood, stem and hyphae type). Logs moved off Farmer, so chopping is now its own role. Placing a log then breaking it pays nothing. <code>/jobs</code>' },
    ],
  },
  {
    date: '2026-06-14',
    tag: 'Gyms',
    title: 'Gym coins are now a first-clear bonus',
    changes: [
      { type: 'improved', text: 'Gym coin rewards no longer repeat daily (you could re-beat all 18 gyms for ~2.5M coins/day, forever). Coins now pay out <strong>only on your first-ever clear</strong> of each gym — the full ladder reward (15k → 270k) plus the one-time token bonus. <strong>Rare candies and TMs still drop on every re-clear</strong>, so the daily run still pays something. <code>/gym</code>' },
    ],
  },
  {
    date: '2026-06-14',
    tag: 'PvP',
    title: 'Warzone payouts buffed & Steal Protection',
    changes: [
      { type: 'improved', text: 'Warzone now pays <strong>+25 WP per win</strong> (up from +5) — a Legendary Core drops from 300 wins to 60, a Shiny Legendary from 500 to 100. <code>/pvp</code>' },
      { type: 'new', text: 'Buy <strong>Steal Protection</strong> — coin-bought insurance that shields your Pokémon from being lost on a Warzone defeat. Priced at <strong>750,000 coins</strong> so it’s a real economy sink and a deliberate choice before a risky run.' },
    ],
  },
  {
    date: '2026-06-14',
    tag: 'Quality of Life',
    title: 'Every menu now has a guide book',
    changes: [
      { type: 'new', text: 'Almost every in-game menu — crates, dungeons, gyms, jobs, safari, ranks, leaderboards, levels, mail, the Pokéditor, the PokéWiki, raids, the Battle Tower and PvP — now has an <strong>“ℹ How it works” book</strong> in the corner that explains the feature in plain language. No more asking in chat how a screen works.' },
      { type: 'improved', text: 'Added short command aliases to match the rest: <code>/npc</code>, <code>/ranks</code>, <code>/worldtweaks</code>, <code>/lvl</code> and <code>/raid</code> all work now.' },
    ],
  },
  {
    date: '2026-06-13',
    tag: 'Titles',
    title: 'Titles are now a tradeable item',
    changes: [
      { type: 'new', text: 'Titles can now be bought, sold and traded as <strong>nametag items</strong> in six rarities (Common → Mythic). Right-click one to unlock and equip that title. They show up in crates, with dungeon / raid / Area Zero drops to follow.' },
      { type: 'improved', text: 'Your <strong>Shards</strong> and <strong>Gems</strong> balances are back on the sidebar.' },
    ],
  },
  {
    date: '2026-06-13',
    tag: 'Dungeons',
    title: 'Parties, lives & the Shard Shop',
    changes: [
      { type: 'new', text: 'Run dungeons as a <strong>party</strong> with a shared pool of lives — team up and clear together. <code>/dungeon</code>' },
      { type: 'new', text: 'The new <strong>Shard Shop</strong> spends your Shards on premium goods. <code>/dungeon shop</code>' },
      { type: 'improved', text: '<code>/dungeon</code> is now the main command (the old <code>/ascdun</code> still works). Dungeons also gained sealable boss chambers, side-quest NPCs, collectible drop nodes and mixed passive/aggressive wild spawns.' },
    ],
  },
  {
    date: '2026-06-13',
    tag: 'Crates',
    title: 'Open crates with a full inventory',
    changes: [
      { type: 'improved', text: 'Crates no longer require 10 free slots to open — anything that doesn’t fit is now <strong>mailed to you</strong> instead of being lost or dropped on the ground. <code>/mail</code>' },
    ],
  },
  {
    date: '2026-06-13',
    tag: 'Battle Tower',
    title: 'Doubles banlist fixed',
    changes: [
      { type: 'fixed', text: 'Restricted Pokémon (a <strong>Kyogre</strong> rain team, an <strong>Urshifu-Rapid-Strike</strong> team) were leaking into the OU/UU/RU/NU Doubles towers from the shared fallback pool. Those tiers now run a clean, legal team list.' },
    ],
  },
  {
    date: '2026-06-12',
    tag: 'Battle Tower',
    title: 'Endless Decay & token rebalance',
    changes: [
      { type: 'new', text: '<strong>Endless Decay</strong> is live: past a threshold your party is level-synced <em>down</em> while opponents stay at Lv.100, so high floors stay a real challenge instead of free farm. Opt-in per tower.' },
      { type: 'new', text: 'A <strong>Challenge Voucher</strong> consumable skips your high-floor loss cooldown — earnable from raids, dungeons and Area Zero.' },
      { type: 'improved', text: 'Capped the high-floor <strong>token payout</strong> so deep runs no longer print hundreds of tokens per floor and out-earn every sink in the economy.' },
    ],
  },
  {
    date: '2026-06-12',
    tag: 'Economy',
    title: 'Season 1 economy pass',
    changes: [
      { type: 'improved', text: '<code>/ecoguide</code> and the GTS “Recommended Price” tooltip now reflect the current <strong>Season 1</strong> valuations, so the marketplace and chat flex agree.' },
      { type: 'improved', text: 'Repriced the cheap-but-powerful <code>/pokeditor</code> edits (Hidden Ability, etc.) to match the rebalanced token economy.' },
    ],
  },
  {
    date: '2026-06-12',
    tag: 'Crates',
    title: 'Cosmog pity restored',
    changes: [
      { type: 'fixed', text: 'Players who had built pity on the old standalone <strong>Cosmog</strong> banner had it reset to 0 when Cosmog joined the Light Trio. Your accumulated pity has been transferred back onto the group banner.' },
    ],
  },
  {
    date: '2026-06-12',
    tag: 'Quality of Life',
    title: 'Jailed players no longer AFK-kicked',
    changes: [
      { type: 'fixed', text: 'A jailed player who couldn’t move far enough to reset the idle timer was being AFK-kicked (and in one case locked out). Jailed players are now exempt from the AFK kick.' },
    ],
  },
  {
    date: '2026-06-11',
    tag: 'Area Zero',
    title: 'Boats banned & fairer surges',
    changes: [
      { type: 'fixed', text: 'You can no longer place or ride <strong>boats</strong> inside Area Zero to skate past the combat layer.' },
      { type: 'improved', text: 'The Energy Surge fill-gate now scales with the online player count, so off-peak players still get wild legendary spawns instead of waiting hours. The Global Energy bar color reflects the active surge tier.' },
    ],
  },
  {
    date: '2026-06-11',
    tag: 'Crates',
    title: 'Crate visuals survive restarts',
    changes: [
      { type: 'fixed', text: 'Crates in custom dimensions (like the SolForge crate) no longer lose their floating name and 3D chest model after a server restart.' },
    ],
  },
  {
    date: '2026-06-11',
    tag: 'Clans',
    title: 'Land claiming fix',
    changes: [
      { type: 'fixed', text: '<code>/clans claim</code> no longer silently spends a claimblock without actually claiming the land when the claim fails.' },
    ],
  },
  {
    date: '2026-06-10',
    tag: 'PvP',
    title: 'Terastal banned on the Singles ladder',
    changes: [
      { type: 'improved', text: 'The <strong>Singles</strong> ranked ladder now runs a Terastal Clause to match National Dex OU — Tera is disabled in Singles bouts. The <strong>Doubles</strong> ladder keeps Tera legal. <code>/ladder</code>' },
    ],
  },
  {
    date: '2026-06-10',
    tag: 'Quality of Life',
    title: 'Movement & Safari fixes',
    changes: [
      { type: 'fixed', text: 'Fixed a bug that could leave you completely unable to walk or sprint (zeroed movement speed). Affected players are now auto-healed, and <code>/speed</code> / <code>/walkspeed</code> / <code>/flyspeed</code> gained a <code>reset</code> option.' },
      { type: 'fixed', text: 'The <strong>Safari</strong> is now build-protected — no more scooping or placing water and lava in the shared Safari world.' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Passives',
    title: 'Toggle your Night Vision passive',
    changes: [
      { type: 'new', text: 'Bought the <strong>Permanent Night Vision</strong> passive? You can now switch the effect on/off without losing the unlock — click the tile in <code>/passive</code> or use <code>/passive nv</code>.' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Raid Boss',
    title: 'Fairer raid payouts',
    changes: [
      { type: 'improved', text: 'Every raider past the damage threshold now gets the <strong>full participation reward</strong> — no more RNG, and no more high-damage raiders walking away empty-handed.' },
      { type: 'improved', text: 'Top rewards are back to <strong>Top 1–3</strong>; everyone placing 4th and below gets the guaranteed participation coins + candies.' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Casino',
    title: 'Animated dice & blackjack',
    changes: [
      { type: 'new', text: '<code>/dice</code> now opens a chest GUI with a spinning d100 reel that decelerates and lands on your roll.' },
      { type: 'new', text: '<code>/bj</code> blackjack is now a visual card game — cards render as items, the dealer’s hole card stays face-down, and <strong>Hit / Stand / Double</strong> are clickable. Typed commands still work and the odds are unchanged.' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Area Zero',
    title: 'Boss & exploit fixes',
    changes: [
      { type: 'fixed', text: 'Bosses that could linger for hours now have a hard lifespan cap and always despawn on time.' },
      { type: 'fixed', text: 'A lag-related bug that could consume your ball without delivering a boss catch is fixed.' },
      { type: 'fixed', text: 'Combat-logging exploits closed — logging out mid-fight no longer saves your kit, and you can’t shake the combat tag by dodging until it expires.' },
      { type: 'improved', text: 'Legendary bosses no longer drop the IV Boost token (coins, tokens, EXP and candies are unchanged).' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Voting',
    title: 'Date-filtered vote leaderboard',
    changes: [
      { type: 'new', text: '<code>/vote top</code> shows the all-time top 10 voters, and <code>/vote top &lt;days&gt;</code> shows the leaders over the last N days (e.g. <code>/vote top 7</code>).' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Competitive',
    title: 'Doubles ladders fixed',
    changes: [
      { type: 'fixed', text: 'The <strong>Battle Tower</strong> and <code>/ladder</code> Doubles formats now use the correct NatDex Doubles banlist — Doubles-legal Pokémon like Mega Salamence, Flutter Mane and Urshifu-Rapid-Strike are no longer wrongly rejected.' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Quality of Life',
    title: 'Cooking Pot fix',
    changes: [
      { type: 'fixed', text: 'Quick-crafting a Poké Snack from the recipe book no longer deletes the finished snack.' },
    ],
  },
  {
    date: '2026-06-09',
    tag: 'Quality of Life',
    title: 'Shorter commands & a fresh site',
    changes: [
      { type: 'improved', text: 'Every system now has a short command — <code>/bt</code>, <code>/raid</code>, <code>/az</code>, <code>/dungeon</code>, <code>/gear</code>, <code>/ranks</code>, <code>/pvp</code> and more. The clunky <code>/asc</code> prefix is gone.' },
      { type: 'new', text: 'Added this Patch Notes page and a full staff Team page, and made the whole website mobile-friendly.' },
    ],
  },
  {
    date: '2026-06-08',
    tag: 'Dungeons',
    title: 'Relic & Key system',
    changes: [
      { type: 'new', text: 'Seasonal dungeons now drop <strong>relics</strong> and feature side-quests for bonus rewards.' },
      { type: 'new', text: 'Daily dungeon keys now scale with your rank.' },
    ],
  },
  {
    date: '2026-06-08',
    tag: 'Gyms',
    title: 'Gym reward revamp',
    changes: [
      { type: 'improved', text: 'Gym payouts are massively up — earn as much as <strong>120k coins</strong> on the toughest leaders, plus more Rare Candies.' },
      { type: 'new', text: 'Added a one-time <strong>first-clear bonus</strong> for every gym you beat for the first time.' },
      { type: 'fixed', text: 'Fixed a bug where some gym clears silently paid out zero coins.' },
    ],
  },
  {
    date: '2026-06-07',
    tag: 'Progression',
    title: 'Permanent Passives',
    changes: [
      { type: 'new', text: 'Buy permanent account passives with coins and tokens via <code>/passive</code> — they stack with your clan passives for even bigger bonuses.' },
    ],
  },
  {
    date: '2026-06-07',
    tag: 'PvP',
    title: 'Elite Four ladder & the Warzone',
    changes: [
      { type: 'new', text: 'The PvP ladder is now an <strong>Elite Four</strong> — beat a seat holder to claim their seat and earn daily passive income while you defend it. <code>/ladder</code>' },
      { type: 'new', text: 'The <strong>Warzone</strong> is open: hit another trainer to trigger an instant ranked battle and win Warzone Points. <code>/pvp</code>' },
    ],
  },
  {
    date: '2026-06-07',
    tag: 'Crates',
    title: 'Daily banner rotation',
    changes: [
      { type: 'improved', text: 'Gacha banners now rotate <strong>daily</strong> instead of weekly, so there is always something new to pull. <code>/summon</code>' },
    ],
  },
  {
    date: '2026-06-05',
    tag: 'Exploration',
    title: 'Umera Safari rework',
    changes: [
      { type: 'improved', text: 'A full Safari overhaul across 26 regions — roaming Megas & Totems, Tera & Dynamax raids, swarms and timed expeditions. <code>/safari</code>' },
    ],
  },
];

// =====================================================================
//  THIRD-PARTY MOD CREDITS (credits.html). Pulled from the live Pebble
//  /mods/ folder 2026-06-09 — excludes our own asc-* mods. Links/authors
//  filled in where confidently known; others listed by name + version.
// =====================================================================
const CREDITS = [
  {
    group: 'Cobblemon & Add-ons',
    items: [
      { name: 'Cobblemon', ver: '1.7.3+1.21.1', by: 'Cobblemon Team', url: 'https://modrinth.com/mod/cobblemon' },
      { name: 'Cobbreeding', ver: '2.2.0', url: 'https://modrinth.com/mod/cobbreeding' },
      { name: 'Mega Showdown', ver: '1.6.12', url: 'https://modrinth.com/mod/mega-showdown' },
      { name: 'Starlight Fusion', ver: '1.6.5', url: 'https://modrinth.com/datapack/starlightfusion' },
      { name: 'ZA Mega Pack (zamega)', ver: '1.5.4' },
      { name: "Horret's Extended Mega", ver: '1.7.6' },
      { name: 'TMCraft', ver: '1.4.18' },
      { name: 'PokéBlocks', ver: '1.4.0' },
      { name: 'CobbleNav', ver: '2.3.3', by: 'gatekeep06', url: 'https://modrinth.com/mod/cobblemon-pokenav' },
      { name: 'More Cobblemon Tweaks', ver: '1.3.3', url: 'https://modrinth.com/mod/more-cobblemon-tweaks' },
      { name: 'CobbleFurnies', ver: '1.0' },
      { name: 'Cobblemon No Fullness', ver: '2.0.0' },
      { name: 'Cobblemon Size Variation', ver: '1.4.0' },
      { name: 'Cobblemon Journey Mounts', ver: '1.7.x' },
      { name: 'Cobblemon EXP All', ver: '0.0.1' },
      { name: 'Capture XP', ver: '1.3.0' },
      { name: 'Catch Indicator', ver: '1.4.1' },
      { name: 'Complete Cobblemon Collection — Myths & Legends Compat', ver: '2.0.1' },
      { name: 'Safe Pastures', ver: '1.1.1' },
      { name: 'CobbleOptimizer', ver: '4.3.3' },
      { name: 'ASC Wondertrade', ver: '1.1', by: 'Ghost' },
    ],
  },
  {
    group: 'Performance & Optimization',
    items: [
      { name: 'Sodium', ver: '0.6.13', by: 'CaffeineMC', url: 'https://modrinth.com/mod/sodium' },
      { name: 'Lithium', ver: '0.15.3', by: 'CaffeineMC', url: 'https://modrinth.com/mod/lithium' },
      { name: 'Krypton', ver: '0.2.8', by: 'astei', url: 'https://modrinth.com/mod/krypton' },
      { name: 'FerriteCore', ver: '7.0.3', by: 'malte0811', url: 'https://modrinth.com/mod/ferrite-core' },
      { name: 'ModernFix', ver: '5.25.1', by: 'embeddedt', url: 'https://modrinth.com/mod/modernfix' },
      { name: 'ImmediatelyFast', ver: '1.6.10', by: 'RaphiMC', url: 'https://modrinth.com/mod/immediatelyfast' },
      { name: 'Entity Culling', ver: '1.10.0', by: 'tr7zw', url: 'https://modrinth.com/mod/entityculling' },
      { name: 'Dynamic FPS', ver: '3.11.4', by: 'juliand665', url: 'https://modrinth.com/mod/dynamic-fps' },
      { name: 'ServerCore', ver: '1.5.10', by: 'Wesley1808', url: 'https://modrinth.com/mod/servercore' },
      { name: 'Clumps', ver: '19.0.0.1', by: 'Jaredlll08', url: 'https://modrinth.com/mod/clumps' },
      { name: 'spark', ver: '1.10.109', by: 'lucko', url: 'https://modrinth.com/mod/spark' },
      { name: 'StutterFix', ver: '0.2.3' },
      { name: 'PacketFixer', ver: '3.3.1' },
      { name: 'Scheduled Restart', ver: '1.2.2' },
    ],
  },
  {
    group: 'Gameplay, Admin & Quality of Life',
    items: [
      { name: 'LuckPerms', ver: '5.4.140', by: 'Luck', url: 'https://luckperms.net/' },
      { name: 'TAB', ver: '5.5.0', by: 'NEZNAMY' },
      { name: 'Flan', ver: '1.12.6', by: 'Flemmli97', url: 'https://modrinth.com/mod/flan' },
      { name: 'WorldEdit', ver: '7.3.8', by: 'EngineHub', url: 'https://modrinth.com/plugin/worldedit' },
      { name: 'Chunky', ver: '1.4.23', by: 'pop4959', url: 'https://modrinth.com/mod/chunky' },
      { name: 'Multiworld', ver: 'bundle' },
      { name: 'Simple Voice Chat', ver: '2.6.16', by: 'henkelmax', url: 'https://modrinth.com/mod/simple-voice-chat' },
      { name: 'Ledger', ver: '1.3.5', url: 'https://modrinth.com/mod/ledger' },
      { name: 'Styled Chat', ver: '2.6.1', by: 'Patbox', url: 'https://modrinth.com/mod/styled-chat' },
      { name: 'Chat Notify', ver: '2.6.6' },
      { name: 'Fabric Tailor', ver: '2.5.0', by: 'Patbox', url: 'https://modrinth.com/mod/fabrictailor' },
      { name: 'Jade', ver: '15.10.5', by: 'Snownee', url: 'https://modrinth.com/mod/jade' },
      { name: 'Roughly Enough Items', ver: '16.0.799', by: 'shedaniel', url: 'https://modrinth.com/mod/rei' },
      { name: 'Inventory Control Tweaks', ver: '1.4.1' },
      { name: "Xaero's Minimap", ver: '25.3.10', by: 'xaero96', url: 'https://modrinth.com/mod/xaeros-minimap' },
      { name: "Xaero's World Map", ver: '1.40.11', by: 'xaero96', url: 'https://modrinth.com/mod/xaeros-world-map' },
      { name: 'Zoomify', ver: '2.15.2', url: 'https://modrinth.com/mod/zoomify' },
      { name: 'Wakes', ver: '0.4.1', url: 'https://modrinth.com/mod/wakes' },
      { name: 'Handcrafted', ver: '4.0.3', url: 'https://modrinth.com/mod/handcrafted' },
      { name: 'Moar Concrete', ver: '1.3.1' },
      { name: 'HoloDisplays', ver: '0.4.8' },
      { name: 'NuVotifier', ver: '1.1.0' },
      { name: 'Skies Clear', ver: '1.1.2' },
      { name: 'Discord Webhook (mc-discord-webhook)', ver: '1.2.0' },
    ],
  },
  {
    group: 'Libraries & API',
    items: [
      { name: 'Fabric API', ver: '0.116.10', url: 'https://modrinth.com/mod/fabric-api' },
      { name: 'Fabric Language Kotlin', ver: '1.13.10', url: 'https://modrinth.com/mod/fabric-language-kotlin' },
      { name: 'Architectury API', ver: '13.0.8', by: 'shedaniel', url: 'https://modrinth.com/mod/architectury-api' },
      { name: 'Cloth Config', ver: '15.0.140', by: 'shedaniel', url: 'https://modrinth.com/mod/cloth-config' },
      { name: 'owo-lib', ver: '0.12.15', by: 'glisco', url: 'https://modrinth.com/mod/owo-lib' },
      { name: 'GeckoLib', ver: '4.8.4', url: 'https://modrinth.com/mod/geckolib' },
      { name: 'Trinkets', ver: '3.10.0', url: 'https://modrinth.com/mod/trinkets' },
      { name: 'Accessories', ver: '1.1.0', url: 'https://modrinth.com/mod/accessories' },
      { name: 'Polymer', ver: '0.9.19', by: 'Patbox', url: 'https://modrinth.com/mod/polymer' },
      { name: 'Athena', ver: '4.0.3', url: 'https://modrinth.com/mod/athena' },
      { name: 'Resourceful Lib', ver: '3.0.12', url: 'https://modrinth.com/mod/resourceful-lib' },
      { name: 'RCT API + RCT Mod', ver: '0.15.2 / 0.18.1' },
      { name: 'Placeholder API', ver: '2.4.2', by: 'Patbox', url: 'https://modrinth.com/mod/placeholder-api' },
      { name: 'Forge Config API Port', ver: '21.1.6', url: 'https://modrinth.com/mod/forge-config-api-port' },
      { name: 'Iceberg', ver: '1.3.2' },
      { name: 'YetAnotherConfigLib', ver: '3.8.2', url: 'https://modrinth.com/mod/yacl' },
      { name: 'Mod Menu', ver: '11.0.4', by: 'TerraformersMC', url: 'https://modrinth.com/mod/modmenu' },
      { name: 'Filament', ver: '0.9.12' },
    ],
  },
];

// =====================================================================
//  STAFF TEAM (team.html). NOTE: the Discord MCP bot can only read
//  messages, not enumerate members/roles — owners below are confirmed;
//  fill in the rest (name, role, optional `mc` username for a head icon).
// =====================================================================
const TEAM = [
  {
    group: 'Core Staff',
    members: [
      { name: 'Kuro', handle: 'kuwusaki', role: 'Owner & Lead Developer', avatar: 'assets/team/kuro.gif',
        motto: 'I only require $112/month for Claude Code.',
        socials: [{ label: 'YouTube', url: 'https://www.youtube.com/@kuwusaki_' }, { label: 'GitHub', url: 'https://github.com/ASC-kuro-code' }] },
      { name: 'Indi', handle: 'IndigoPulse13_', role: 'Owner & Content Design', avatar: 'assets/team/indigopulse.jpg',
        motto: "My whole life is consistent. Everything I do — from what I eat, to when I sleep, to my recovery, to my loved ones. Everything's consistent. It's a routine for me at this point." },
      { name: 'Velpecula', handle: 'VelpeculaTheFox', role: 'Owner & Finance', avatar: 'assets/team/velpecula.gif',
        motto: "Be the baddest one they'll ever see." },
      { name: 'Crysthamyr', role: 'Head Admin', avatar: 'assets/team/crys.jpg', motto: "that's just my fly client." },
      { name: 'PredatorG', role: 'Developer' },
      { name: 'Zeta', handle: 'justt_zeta', role: 'Core Management Staff', avatar: 'assets/team/zeta.png',
        motto: 'You only live once.' },
    ],
  },
  {
    group: 'Admins',
    members: [
      { name: 'HitoriHachi', role: 'Admin & Builder', avatar: 'assets/team/hachi.jpg',
        motto: 'Take life block by block till you build a masterpiece.', socials: [{ label: 'Twitch', url: 'https://twitch.tv/hitorihachi' }] },
      { name: 'AmaxiHaku', role: 'Admin & Builder' },
      { name: 'mAyHAmBLOOM', role: 'Admin', avatar: 'assets/team/mayham.png',
        motto: 'Life is too short to do boring things.' },
      { name: '__Vesper', role: 'Admin', avatar: 'assets/team/vesper.png', motto: "Don't pmo." },
    ],
  },
  {
    group: 'Head Moderator',
    members: [
      { name: 'Prime_RN', role: 'Head Moderator', avatar: 'assets/team/prime.png', motto: 'Fear me?' },
    ],
  },
  {
    group: 'Moderators',
    members: [
      { name: 'Yberuuuu', role: 'Moderator', avatar: 'assets/team/yberu.png', motto: 'Ogerponnnn.' },
      { name: 'SamsonTheManiac', role: 'Moderator', avatar: 'assets/team/samson.png',
        motto: "Life is like a mace — every rise comes with a fall, but if you don't take the shot you won't rise again." },
      { name: 'tobiitobes', role: 'Moderator & Builder', avatar: 'assets/team/tobiitobes.png',
        motto: 'Ecstasy with extra cheese.', socials: [{ label: 'TikTok', url: 'https://www.tiktok.com/@tobiitobes' }] },
      { name: 'OPaint', role: 'Moderator', avatar: 'assets/team/opaint.jpg', motto: 'a² + b² = c²' },
      { name: 'Raizuuuu', role: 'Moderator', avatar: 'assets/team/raizu.jpg',
        motto: 'Behave or Crys will spank me.', socials: [{ label: 'TikTok', url: 'https://www.tiktok.com/@ra1zuu' }] },
      { name: 'EdsonCheah', role: 'Moderator', avatar: 'assets/team/edson.jpg', motto: "it's ok to not be ok" },
      { name: 'DaemonSpade', role: 'Moderator' },
    ],
  },
  {
    group: 'Builders',
    members: [
      { name: '_Lutris', role: 'Builder', avatar: 'assets/team/lutris.png',
        motto: 'I love mountains, they teach me to keep climbing.', socials: [{ label: 'YouTube', url: 'https://www.youtube.com/@lutris-35' }] },
      { name: 'Zesty_Leemon', role: 'Builder', avatar: 'assets/team/leemon.png',
        motto: 'Hotter than Salem 1962.', socials: [{ label: 'Instagram', url: 'https://www.instagram.com/sprucefruits' }] },
    ],
  },
  {
    group: 'Developers',
    members: [
      { name: 'ghostplays00', role: 'Developer', avatar: 'assets/team/ghostplays00.png',
        motto: "You're impossible to underestimate." },
    ],
  },
  {
    group: 'Zeniths',
    members: [
      { name: 'Slaaaine', role: 'Zenith', avatar: 'assets/team/slaaaine.png', motto: 'BingBong not bingbonging.' },
      { name: 'EttLel', role: 'Zenith', avatar: 'assets/team/ettlel.jpg', motto: 'Panda Lover' },
      { name: 'RicKKK', role: 'Zenith', avatar: 'assets/team/rickkk.png', motto: 'Always one ping away.' },
      { name: 'Zandurrrrrr', role: 'Zenith', avatar: 'assets/team/zandurr.png',
        motto: "I stalk myself on the internet just to see what you'll find." },
      { name: 'McNuggetRice', role: 'Zenith', avatar: 'assets/team/mcnugget.jpg', motto: 'una' },
    ],
  },
];

// =====================================================================
//  FAQ (faq.html). Grouped Q&A built from the most-asked questions in
//  our Discord (community-support, bug-reports, suggestions). Answers
//  may use <code>, <b>, <a> — keep them short and player-facing.
// =====================================================================
const FAQ = [
  {
    cat: 'Connecting & Setup',
    items: [
      {
        q: 'How do I join? What is the server IP?',
        a: 'The IP is <code>play.cobbleasia.net</code>. Cobble Asia runs on <b>Minecraft 1.21.1 (Fabric)</b>, so you need our modpack installed first — grab it and the step-by-step install guides from our <a class="js-discord" href="#">Discord</a>. Everything you need (downloads, launchers, versions) lives there.',
      },
      {
        q: 'I get a "NETWORK PROTOCOL ERROR" / Connection refused when joining',
        a: 'Almost always this means your client mods don\'t match the server. Check three things: (1) you\'re on <b>Fabric</b>, not Forge; (2) you\'re on Minecraft <b>1.21.1</b> exactly; (3) the <b>full Cobble Asia modpack</b> is installed in your <code>mods</code> folder. <b>Do not update individual mods</b> unless we announce it — a single mismatched mod will drop you. Still stuck? Post in <b>#community-support</b> with a screenshot of your mod list.',
      },
      {
        q: 'Which Minecraft version and loader do I need? Does Forge work?',
        a: 'Only <b>Minecraft 1.21.1 with the Fabric loader</b>. We do not support Forge, or any version higher or lower than 1.21.1 — that\'s the version Cobblemon is built for. If your launcher offers a "Forge 1.21.1" profile, that is the wrong one.',
      },
      {
        q: 'My mods won\'t load / the mod list is empty',
        a: 'Make sure you <b>extracted the mod .jar files</b> out of the downloaded zip and placed them directly inside your <code>mods</code> folder — leaving the zip in there does nothing. Don\'t mix in mods from other versions, and don\'t keep two copies of the same mod. The title screen should show "Fabric" and a mod count at the bottom-left.',
      },
      {
        q: 'Can I play on TLauncher / Prism / mobile (PojavLauncher)?',
        a: 'Yes. Our Discord has install guides for the common launchers — <b>Modrinth</b> is the easiest one-click setup, and there are separate guides for Prism/TLauncher and for mobile via <b>PojavLauncher</b>. If you use TLauncher, disable its "TL Skins" add-on, as it can conflict.',
      },
      {
        q: 'How do I register and log in?',
        a: 'We\'re an offline-mode server, so on your <b>first join</b> you set a password with <code>/register &lt;password&gt;</code>. Every join after that, log in with <code>/login &lt;password&gt;</code>. Keep your password safe — if you lose it, staff can reset it for you.',
      },
    ],
  },
  {
    cat: 'Getting Started In-Game',
    items: [
      {
        q: 'I can\'t pick a starter / the starter screen disappeared',
        a: 'This happens if you <b>catch a wild Pokémon before choosing your starter</b> — Cobblemon then thinks you already have one and hides the prompt. It\'s a Cobblemon limitation, not a bug. Ask a staff member to reset your starter eligibility and the picker will come back.',
      },
      {
        q: 'How do I set a home and get around?',
        a: 'Use <code>/sethome &lt;name&gt;</code> to save a spot and <code>/home</code> to return to it. <code>/spawn</code> takes you to spawn, <code>/rtp</code> random-teleports you into the wild to explore and catch, <code>/warp</code> reaches named destinations, <code>/back</code> returns you where you just were, and <code>/tpa &lt;player&gt;</code> requests a teleport to a friend.',
      },
      {
        q: 'How do I contact staff or get help in-game?',
        a: 'Message an online staff member with <code>/msg &lt;name&gt;</code>. For bugs, post in the <b>#bug-reports</b> forum on Discord; for setup/connection help, use <b>#community-support</b>. Add <code>help</code> after any command (e.g. <code>/bt help</code>) to see what it does.',
      },
    ],
  },
  {
    cat: 'Catching & Finding Pokémon',
    items: [
      {
        q: 'How do I find where a specific Pokémon spawns?',
        a: 'Use <code>/pwiki &lt;species&gt;</code> to look up a Pokémon\'s spawn biomes and info, or <code>/checkspawns</code> to see what can spawn where you\'re standing. The in-client <b>PokéNav</b> item also gives you a live spawn check around you. For target catches, <code>/hunt</code> points you at species worth chasing.',
      },
      {
        q: 'What is the PokéNav?',
        a: 'PokéNav is an in-client item (the CobbleNav mod, part of our pack) that shows what\'s spawning near you, RSE-style. The GUI is client-side and ships in the modpack — if you don\'t have it, reinstall the latest pack from Discord.',
      },
      {
        q: 'How do legendary and mythical spawns work?',
        a: 'Legendary spawns are tied to <b>Global Energy</b>. Completing <code>/legend</code> tasks raises the server\'s energy bar; once it reaches <b>50%+</b>, legendaries and mythicals can begin spawning (higher energy = better odds). The bar decays slowly over time and drops when a legendary actually spawns — so it\'s a shared, server-wide effort.',
      },
      {
        q: 'What is /hunt?',
        a: '<code>/hunt</code> is your personal board of tiered catch-bounties (Easy → Master) — catch a Pokémon matching the requirements and turn it in for big coins, EXP and bonus rolls. <code>/ghunt</code> is the server-wide version where the <b>first</b> player to catch the target wins the whole prize. Hunts are some of the best income on the server.',
      },
    ],
  },
  {
    cat: 'Money, EXP & Progression',
    items: [
      {
        q: 'How do I make money fast?',
        a: 'The strongest steady income is <code>/hunt</code> (personal bounties pay 75k–750k by tier) and <code>/ghunt</code> (global hunts up to 1,000,000). On top of that: join <code>/jobs</code> to get paid for mining/fishing/catching, beat <code>/gym</code> leaders and clear <code>/dungeon</code> runs, <code>/vote</code> daily for rewards, and sell to other players via <code>/chestshop</code> and <code>/gts</code>.',
      },
      {
        q: 'How do I get EXP / level up my Pokémon?',
        a: 'Visit the <b>Training Grounds</b> with <code>/tg</code> for stacking EXP buffs, and earn Rare Candies from gyms, raids and hunts. There\'s no single official "XP farm" warp — the community builds their own and shares them as player warps (<code>/pwarp</code>), so ask around or browse the warp list.',
      },
      {
        q: 'What are relic coins for?',
        a: 'Relic coins are a base-Cobblemon item, mainly used to <b>evolve Gimmighoul into Gholdengo</b> (1,000 coins). There\'s no extra server-side use planned for them, but you can freely trade or sell spares to other players via <code>/gts</code>.',
      },
      {
        q: 'How does the Elite Four / ladder work?',
        a: 'The <code>/ladder</code> is a four-seat PvP ladder per format (singles & doubles), E1 (top) down to E4. You pay a coin fee to challenge a seat, and that fee goes <b>straight to the player currently holding it</b>. Beat them and you take the seat; while you hold it you earn daily passive income by mail. Lose and you only lose the title, plus a 48-hour cooldown. <b>Fusions are banned</b> on the ladder.',
      },
      {
        q: 'Why is there a countdown/delay when I teleport?',
        a: 'The teleport warm-up is tied to your <b>rank</b> — higher progression ranks have a much shorter delay (near-instant at the top). It can\'t be removed entirely because instant teleport would let players escape PvP zones mid-fight.',
      },
    ],
  },
  {
    cat: 'World Rules & Common Confusions',
    items: [
      {
        q: 'Why can\'t I break blocks in the Nether / on certain land?',
        a: 'Two separate reasons. Block-breaking in the <b>Nether is currently disabled on purpose</b> by staff and will be re-enabled when announced. Elsewhere, land can be <b>claimed</b> by other players (Flan claims) — you can\'t build or break inside someone else\'s claim. Claim your own land to build freely.',
      },
      {
        q: 'Why are some Cooking Pot / Campfire recipes locked?',
        a: 'That\'s a Cobblemon mechanic, not a server restriction. Cooking Pot recipes <b>unlock progressively</b> as you obtain the required ingredients and plants — until then they won\'t appear in the recipe book or REI. Keep gathering ingredients and more recipes open up.',
      },
      {
        q: 'I get an error in Battle Tower with my fusion / custom Pokémon',
        a: 'This is a known issue with some custom/fusion-form Pokémon in the higher tiers. The tower <b>auto-retries</b>, so you won\'t lose your floor. As a workaround, keep fusion/custom mons <b>out of your lead slot</b> for now — it\'s being worked on.',
      },
      {
        q: 'Will the server ever wipe or reset?',
        a: 'No wipe is planned. The server is past its early launch and your progress is here to stay — any future change of that kind would be announced well in advance.',
      },
      {
        q: 'Are alternate accounts (alts) allowed?',
        a: 'Alts aren\'t banned, but running one is genuinely twice the work (double the dailies, jobs and tasks) for little real advantage, and staff keep an eye on abuse. Play how you like, but don\'t expect alts to be a shortcut.',
      },
    ],
  },
];
