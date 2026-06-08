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
          'SolForge has 14 pieces — sword, pickaxe, axe, hoe, shovel, fishing rod, shield, and a full armor set (helmet, chestplate, leggings, boots). Each piece is a custom-modelled item with infinite durability. Get them from the SolForge Chest gacha crate or by forging.',
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
      { cmd: '/ascforge upgrade', desc: 'Spend Solar Shards to level the piece in your hand (I → IV)' },
    ],
    notes: [
      'Every SolForge piece has infinite durability — forge it once, keep it forever.',
      'Level V is grand-prize only, pulled from the SolForge Chest.',
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
      'Our crate system is a full gacha: featured banners with pity counters, a shuffled weekly rotation so no set is ever predictable, and previews of what’s coming next — all in a spinning chest GUI.',
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
    tag: '/ascbt',
    category: 'Battling',
    featured: true,
    blurb:
      'Climb tiered floors of hand-built OU, Uber and AG NPC teams. Singles and doubles. Cash out tokens in the tower shop.',
    intro:
      'The Battle Tower is our endgame PvE battling ladder. Each tier fields fully-authored competitive teams — real abilities, natures, EVs, items and movesets — across both singles and doubles formats.',
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
    ],
    commands: [
      { cmd: '/ascbt', desc: 'Open the Battle Tower hub — pick tier, format, and battle' },
    ],
    notes: [
      'Doubles uses a dedicated per-tier team pool, refreshed when admins add new sets.',
      'Tower tokens are spent across multiple systems, not just the tower shop.',
    ],
  },

  areazero: {
    name: 'Area Zero',
    short: 'Area Zero',
    accent: 'violet',
    tag: '/ascaz · /skill',
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
      { cmd: '/ascaz', desc: 'Area Zero info, leaderboard and status' },
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
          'Seats persist across restarts, but if you go offline too long or stop defending, your seat decays back to an NPC. Lose a challenge and you’re on a 48-hour cooldown before you can challenge that format again.',
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
    tag: '/ascraid',
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
      { cmd: '/ascraid', desc: 'Raid boss info and status' },
    ],
    notes: [
      'STAB, multi-hit moves and regen all matter — the combat model is deeper than a normal wild fight.',
    ],
  },

  dungeons: {
    name: 'Seasonal Dungeons',
    short: 'Dungeons',
    accent: 'amber',
    tag: '/ascdun · /buykey',
    category: 'Battling',
    blurb:
      'Rank-scaled daily keys, relic drops, side-quests and a seasonal currency. Clear dungeons for fragments and prestige.',
    intro:
      'Dungeons are instanced challenge runs with objectives, optional side-quests, and a layered reward economy. Entry is gated by keys you earn daily based on your rank — or buy with gems.',
    how: [
      {
        title: 'Get your daily keys',
        body:
          'Each new day, your Dungeon Keys top up to an allowance based on your donator rank. Need more? Buy extra keys with gems via /buykey.',
      },
      {
        title: 'Clear objectives',
        body:
          'Every dungeon has mandatory objectives to clear it, plus optional side-quests (reach, collect, defeat) that aren’t required but boost your rewards when completed.',
      },
      {
        title: 'Earn relic rewards',
        body:
          'Clearing pays coins and tokens scaled by difficulty, Pokédex reward tokens scaled by how many side-quests you finished, and always a SolForge Crate Key — with a chance at a random SolForge gear piece.',
      },
      {
        title: 'Build toward the season',
        body:
          'Dungeons layer on top of a fragment economy — collect fragments and craft keys, working toward prestige titles through the seasonal system.',
      },
    ],
    commands: [
      { cmd: '/ascdun', desc: 'Open the dungeon hub and enter runs' },
      { cmd: '/buykey', desc: 'Buy extra dungeon keys with gems' },
    ],
    notes: [
      'Higher ranks get more daily keys — up to five at the top tier.',
      'Side-quests are optional but directly scale your reward quality.',
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
      { cmd: '/hunt', desc: 'Track your active safari hunt objectives' },
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
      'Warzone is high-stakes open PvP. Step into the zone and you’ve consented to fight: melee-hit any other trainer and a ranked NatDex OU singles battle force-starts — no accept, no decline, no dodging. Win to earn Warzone Points and, if you dare, steal one of the loser’s Pokémon.',
    how: [
      {
        title: 'Gear up and enter',
        body:
          'The Warzone requires a NatDex OU team, all level 100 and fully evolved. There’s an enter button in the /pvp hub that validates your team before warping you in. Entering the zone is consent to be tagged.',
      },
      {
        title: 'Tag to fight',
        body:
          'Hit another trainer with a melee swing and the battle starts immediately — the hit damage is cancelled and a ranked singles match begins. No team preview, no escape. You get 60 seconds of entry protection when you first arrive.',
      },
      {
        title: 'Win for Warzone Points',
        body:
          'Wins pay +5 Warzone Points, losses cost −3. WP is its own currency — balances can even go negative, so throwing matches doesn’t pay. Both players get a few minutes of tag-immunity after a fight.',
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
      { cmd: '/ascpvp history', desc: 'View your recent Warzone match history' },
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
          'Start your own clan or join an existing one. Members get roles (Leader, Vice, member) and a clan tag that shows in chat and the TAB list.',
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
    ],
    notes: [
      'Clan passive buys are Leader/Vice only and spend the clan bank.',
    ],
  },

  jobs: {
    name: 'Jobs & Economy',
    short: 'Jobs & Economy',
    accent: 'amber',
    tag: '/jobs · /ascshop',
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
      { cmd: '/ascshop', desc: 'Open the chest shop system' },
      { cmd: '/ascgts', desc: 'Global Trade System' },
    ],
    notes: [
      'Donator ranks get a deposit boost on earned coins.',
    ],
  },

  progression: {
    name: 'Battle Pass, Ranks & Passives',
    short: 'Progression',
    accent: 'violet',
    tag: '/bp · /ascranks',
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
      { cmd: '/ascranks', desc: 'View rank progression and perks' },
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
};

// Display order + grouping on the landing page
const FEATURE_ORDER = [
  'solforge', 'crates', 'battletower', 'areazero', 'gyms', 'raids',
  'dungeons', 'safari', 'hunts', 'bingo', 'warzone', 'clans',
  'jobs', 'casino', 'progression',
];

// Full mod toolbox (landing page mod grid)
const MODS = [
  { name: 'Area Zero', cmd: '/ascaz · /skill' },
  { name: 'Battle Pass', cmd: '/bp' },
  { name: 'Battle Tower', cmd: '/ascbt' },
  { name: 'Catch Combos', cmd: '/combo' },
  { name: 'Chest Shop', cmd: '/ascshop' },
  { name: 'Clans', cmd: '/clans · /c' },
  { name: 'Crates & Banners', cmd: '/crates · /summon' },
  { name: 'Dungeons', cmd: '/ascdun' },
  { name: 'Essentials', cmd: '/ascess' },
  { name: 'Forge & SolForge', cmd: '/gear' },
  { name: 'GTS', cmd: '/ascgts' },
  { name: 'Gyms', cmd: '/gym' },
  { name: 'Jobs', cmd: '/jobs' },
  { name: 'Leaderboard', cmd: '/lb' },
  { name: 'Legend Spawns', cmd: '/asclegend' },
  { name: 'Levels', cmd: '/asclvl' },
  { name: 'Mail', cmd: '/mail' },
  { name: 'NPCs', cmd: '/ascnpc' },
  { name: 'Pokeditor', cmd: '/pokeditor' },
  { name: 'PokeWiki', cmd: '/pwiki' },
  { name: 'PvP & Warzone', cmd: '/pvp' },
  { name: 'Raid Boss', cmd: '/ascraid' },
  { name: 'Ranks', cmd: '/ascranks' },
  { name: 'Safari', cmd: '/safari' },
  { name: 'Training Grounds', cmd: '/tg' },
  { name: 'Voting', cmd: '/vote' },
  { name: 'World Tweaks', cmd: '/ascwt' },
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
      { cmd: '/asclegend', desc: 'Legendary spawn info' },
      { cmd: '/ascgts', desc: 'Global Trade System' },
      { cmd: '/pc', desc: 'Open your Cobblemon PC' },
    ],
  },
  {
    group: 'Battling & Competition',
    items: [
      { cmd: '/ascbt', desc: 'Battle Tower — tiered singles & doubles ladder' },
      { cmd: '/gym', desc: 'Challenge the eight gym leaders' },
      { cmd: '/pvp', desc: 'PvP hub — Warzone, matchmaking, shop' },
      { cmd: '/ladder', desc: 'The Elite Four seat ladder' },
      { cmd: '/ascraid', desc: 'Raid boss info & encounters' },
      { cmd: '/ascaz', desc: 'Area Zero combat zone' },
      { cmd: '/skill', desc: 'Spend your Area Zero paradox gauge' },
      { cmd: '/ascdun', desc: 'Enter seasonal dungeons' },
      { cmd: '/buykey', desc: 'Buy extra dungeon keys with gems' },
      { cmd: '/tg', desc: 'Training Grounds — EXP buffs' },
    ],
  },
  {
    group: 'Economy & Gambling',
    items: [
      { cmd: '/jobs', desc: 'Browse and join paying jobs' },
      { cmd: '/ascshop', desc: 'Chest-shop system' },
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
      { cmd: '/crates', desc: 'Crate hub' },
      { cmd: '/summon', desc: 'Open the gacha banner-select GUI' },
      { cmd: '/gear', desc: 'SolForge catalog — pieces, passives, how to get' },
      { cmd: '/ascforge upgrade', desc: 'Spend Solar Shards to level held gear' },
    ],
  },
  {
    group: 'Progression',
    items: [
      { cmd: '/bp', desc: 'Seasonal Battle Pass' },
      { cmd: '/passive', desc: 'Buy & manage permanent passives' },
      { cmd: '/ascranks', desc: 'Rank progression & perks' },
      { cmd: '/asclvl', desc: 'ASC level & EXP' },
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
      { cmd: '/msg <player>', desc: 'Private message a player' },
      { cmd: '/ascwt', desc: 'World tweaks & auth utilities' },
    ],
  },
  {
    group: 'Help — every mod has its own',
    items: [
      { cmd: '/ascess help', desc: 'Essentials command list (homes, warps, hunts, casino…)' },
      { cmd: '/ascbt help', desc: 'Battle Tower help' },
      { cmd: '/safari help', desc: 'Safari help' },
      { cmd: '/pvp help', desc: 'PvP & Warzone help' },
      { cmd: '/ascdun help', desc: 'Dungeons help' },
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
      'Open <code>/jobs</code> and join the roles that fit how you play — mining, fishing, catching and more pay you coins as you go. Sell extras at player chest shops with <code>/ascshop</code>, or trade Pokémon globally on the <code>/ascgts</code>. Don’t forget to <code>/vote</code> daily for free rewards.',
    cmds: ['/jobs', '/ascshop', '/vote'],
  },
  {
    title: 'Battle & progress',
    body:
      'Test yourself: challenge the eight gyms with <code>/gym</code>, climb the <code>/ascbt</code> Battle Tower, and join raids with <code>/ascraid</code>. Level your account, climb <code>/ascranks</code>, and work the seasonal <code>/bp</code> Battle Pass for steady rewards.',
    cmds: ['/gym', '/ascbt', '/bp', '/ascranks'],
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
