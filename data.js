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
  arctis: {
    name: 'Arctis — Season 2',
    short: 'Arctis Season',
    accent: 'azure',
    tag: '/gear',
    category: 'Seasonal',
    featured: true,
    blurb:
      'The Season 2 seasonal set — frost-forged gear with icy passives, a Domain of Arctis set bonus, and eight signature frozen Pokémon. Live now with Season 2.',
    intro:
      'Arctis is Season 2: an Eternal Winter of frost-forged armor, weapons and tools, each with a passive you level from I to Overmax (VI). Complete the set for the server-wide Domain of Arctis bonus, and hunt the eight signature Arctis Pokémon led by Kyurem and Dialga. The full gear and roster breakdown lives on the Forge page.',
    how: [
      { title: 'Collect the frozen set', body: 'Thirteen pieces — Arctis Crown / Plate / Greaves / Sabatons armor, the Frostfang sword, Rimecleaver axe, Whitewind bow, Borealis crossbow and Aegis shield, plus the Icebreaker, Permafrost, Snowreaper and Glacial Line tools. Pull them from the Arctis Chest or forge them.' },
      { title: 'Earn Frozen Shards', body: 'Mining, chopping, hunting and the season’s tools drop Frozen Shards — the Arctis currency you spend to level your gear.' },
      { title: 'Level to Overmax', body: 'Raise each piece I → VI with /gear upgrade. Higher levels raise the passive’s proc chance (Standard 5–17%, Icebreaker premium 3–15%), capping at 25% Overmax.' },
      { title: 'Trigger the Domain of Arctis', body: 'Wear the full armor set and every passive chance rises, you take less damage from Dungeon & Area Zero enemies, nearby PvE enemies can be Frozen, and you leave a crystalline frost trail.' },
      { title: 'Hunt the signature Pokémon', body: 'Eight frozen ultimate forms headline the roster — Kingambit, Tyrantrum, Noivern, Claydol, Escavalier, Dusknoir, Kyurem (720 BST AG) and Dialga (680 BST AG) — each with one defining frost ability.' },
    ],
    commands: [
      { cmd: '/gear', desc: 'Open the Arctis catalog — pieces, passives and how to get them' },
      { cmd: '/ascforge upgrade', desc: 'Spend Frozen Shards to level the piece in your hand (I → VI)' },
    ],
    notes: [
      'Arctis is live with Season 2 — launched August 8, straight out of the Open Beta.',
      'SolForge stays as a Season 1 legacy set — you keep it and can still play it.',
      'Every Arctis piece has infinite durability.',
      'Full gear + roster breakdown on the Forge page.',
    ],
  },

  solforge: {
    name: 'SolForge — Season 1 (Legacy)',
    short: 'SolForge (Legacy)',
    accent: 'solar',
    tag: '/gear',
    category: 'Seasonal',
    featured: false,
    blurb:
      'The first seasonal gear set. Sun-powered tools and armor leveled with Solar Shards — now a Season 1 legacy set as Arctis takes over.',
    intro:
      'SolForge was our flagship Season 1 drop — a full set of solar-themed weapons, tools and armor, each with its own passive that scales as you upgrade it. With Season 2 it becomes a legacy set: you keep every piece and can still play it, but new SolForge Keys leave the store. Everything ties into one loop: earn Solar Shards, forge and level your gear, and chase the server-wide Radiant State.',
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
      'Season 1 legacy set — kept and still playable in Season 2, but no longer sold. Arctis is the current seasonal set.',
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

  cosmetics: {
    name: 'Player Cosmetics',
    short: 'Cosmetics',
    accent: 'violet',
    tag: '/cosmetics',
    category: 'Collecting',
    soon: true,
    blurb:
      'Glowing particle effects that follow your trainer — halos, auras, trails and more, seen by everyone around you. No mod or download needed.',
    intro:
      'Show off your style. Cosmetics are server-side particle effects you wear on your trainer — pick one from a simple menu and you start glowing for everyone nearby. There’s nothing to install: it all runs on the server, so any player sees your flair the moment you equip it. Revealing soon!',
    how: [
      {
        title: 'Open the menu',
        body:
          'Run /cosmetics to open the picker — a clean, paginated GUI of every effect. Click one to equip it, click again to swap, or hit Off to clear. Your choice is saved, so it sticks between sessions.',
      },
      {
        title: 'Pick your vibe',
        body:
          'A growing collection across themes: Halos, Auras and Trails to start, plus Elemental (Inferno Spiral, Blizzard, Thunder Lord, Rainstorm, Tornado, Crystal Storm), Cosmic (Galaxy Orbit, Solar Ascension, Celestial Ring, Aurora, Meteor Shower), Nature, Spirit, and Prestige flair like the Champion crown.',
      },
      {
        title: 'Unlock more',
        body:
          'Cosmetics unlock through ranks and donator perks — the higher your tier, the flashier the flair you can wear. New effects get added over time, so there’s always something fresh to chase.',
      },
    ],
    commands: [
      { cmd: '/cosmetics', desc: 'Open the cosmetic picker' },
      { cmd: '/cosmetics off', desc: 'Remove your active cosmetic' },
    ],
    notes: [
      'Fully server-side — no client mod or resource pack to install.',
      'Effects are performance-tuned (distance-culled and budget-capped) so they stay smooth even when players gather.',
      'Revealing soon — which ranks unlock which effects is being finalized.',
    ],
  },

  transform: {
    name: 'Transform',
    short: 'Transform',
    accent: 'violet',
    tag: '/transform',
    category: 'Battling',
    soon: true,
    blurb:
      'Become your lead Pokémon and fight as it — cast a type-based skill in full PvP combat. Everyone sees you as your ace, no download needed.',
    intro:
      'Ever wanted to *be* your ace? /transform turns you into your lead Pokémon — everyone around sees you as your Charizard, Gengar, whatever leads your party — and lets you fight as it. It’s fully server-side, so there’s nothing to install. A fresh feature in testing.',
    how: [
      {
        title: 'Become your Pokémon',
        body:
          'Run /transform to turn into your lead Pokémon; run it again to turn back. Others see the Pokémon move as you move — a live disguise driven by the server.',
      },
      {
        title: 'Cast your skill',
        body:
          'Triple-tap Sneak to unleash a skill powered by your Pokémon’s type — Fire casts Flame Burst (burns), Water an Aqua Jet (slows), Ghost a Shadow Ball (withers), Electric a Thunderbolt, and 14 more. Each is an area burst around you.',
      },
      {
        title: 'Full combat',
        body:
          'Skills hit both players and wild Pokémon, so transform-battles are on. Damage falls off toward the edge of the burst, with a short cooldown between casts.',
      },
    ],
    commands: [
      { cmd: '/transform', desc: 'Become your lead Pokémon (toggle)' },
      { cmd: '/transform on · off', desc: 'Explicitly transform or revert' },
      { cmd: 'Triple-tap Sneak', desc: 'Cast your type’s skill (full combat)' },
    ],
    notes: [
      'Fully server-side — no client mod or resource pack to install.',
      'Skills are themed by your Pokémon’s primary type; balance (damage, radius, cooldown) is server-tuned.',
      'A new feature in playtest — expect tuning and more to come.',
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
      'A roguelike Nuzlocke climb. Draft 3 Pokémon, ascend floor by floor with no healing and permanent deaths, and chase the Singles & Doubles Crowns.',
    intro:
      'Season 2 rebuilds the Battle Tower into a roguelike climb. Draft a small team, fight randomized OU-to-AG opponents floor by floor, and survive with no healing between fights and permanent knockouts. It rewards real teambuilding over one broken move.',
    how: [
      {
        title: 'Draft your run',
        body:
          'Draft 3 Pokémon from your party to start. The rest of your party is parked safely in your PC for the whole run and handed straight back when it ends.',
      },
      {
        title: 'Climb with real stakes',
        body:
          'No healing between floors — HP, status and PP all carry over. If a Pokémon faints, it’s out for the rest of the run. Opponents scale from 3 mons up to a full 6 by Floor 10.',
      },
      {
        title: 'Choose at checkpoints',
        body:
          'Every 10 floors, pick exactly one reward: Heal Party (restore HP/status/PP on survivors), Swap (retire a downed mon for a fresh one from your PC — the only way to recover a death), or Open Shop to spend BT Tokens.',
      },
      {
        title: 'Unlock more slots',
        body:
          'New team slots open at floors 10, 25 and 50, up to 6 — each lets you draft another Pokémon out of your PC from the /bt menu.',
      },
      {
        title: 'Push through floor decay',
        body:
          'After Floor 50 your team level drops 5 every 10 floors (Lv95 down to Lv75 by Floor 100), so the top demands sharper play. Clear Floor 100 to auto-prestige from Floor 1 with a bigger Token multiplier.',
      },
      {
        title: 'Claim the Crowns',
        body:
          'Leaderboard titles remain for the Singles Crown and Doubles Crown. Fusions are allowed and NPCs use them too; Cosmog Ray’s one-shot spam is nerfed so AG isn’t the only climb worth doing.',
      },
    ],
    commands: [
      { cmd: '/bt', desc: 'Open Battle Tower S2 — draft a team and start a roguelike climb' },
      { cmd: '/bt battle', desc: 'Fight the next floor of your run (alias /bt next)' },
      { cmd: '/bt forfeit', desc: 'Abandon your current run' },
    ],
    notes: [
      'Checkpoints save every floor — closing the menu or disconnecting won’t waste your choice or send you back floors.',
      'Downed Pokémon can’t be revived — not by Heal Party, not from the Shop. The one Swap at a checkpoint is the only recovery.',
      'Draft carefully: you climb with 3–6 Pokémon, not a full team of 6.',
    ],
  },

  areazero: {
    name: 'Area Zero',
    short: 'Area Zero',
    accent: 'violet',
    tag: '/az',
    category: 'Battling',
    featured: true,
    blurb:
      'A high-stakes endgame combat zone — opt-in PvP with 2x loot, Alpha/Paradox/Legendary spawns, Elemental DNA, and a per-player boss cycle.',
    intro:
      'Area Zero is a dedicated combat layer with its own rules. Drop into PvP-enabled zones for double loot, defeat Alphas and Paradox Pokémon for rare resources, and build toward a personal Legendary spawn — all tracked live on the Area Zero HUD.',
    how: [
      {
        title: 'Enter the zone',
        body:
          'Warp into Area Zero (a coin entry fee, like the other Orb-rewarding content). Inside, spawners keep Alpha and Paradox Pokémon flowing.',
      },
      {
        title: 'Work the spawn cycle',
        body:
          'An Alpha spawns every 10 minutes and a Paradox every 30 minutes. After you defeat 5 Alphas and 5 Paradox Pokémon, a Legendary spawns for you — your progress shows on the HUD.',
      },
      {
        title: 'Catch by Last Hit',
        body:
          'PvP-enabled zones drop 2x loot and can spawn Alpha, Paradox and Legendary Pokémon. Only Alphas are catchable, and the catch goes to whoever lands the Last Hit — so the fight is a DPS race.',
      },
      {
        title: 'Farm Elemental DNA',
        body:
          'Paradox Pokémon aren’t catchable here — defeat them for Elemental DNA, the material you feed into Paradox Crafting. Encounters also have a chance to drop Orbs and IV Modifiers.',
      },
    ],
    commands: [
      { cmd: '/az', desc: 'Area Zero info, HUD progress and status' },
    ],
    notes: [
      'Elemental DNA from Area Zero powers Paradox Crafting — Paradox can no longer be caught from wild spawns.',
      'The Alpha catch is decided by Last Hit, so bring your best DPS.',
    ],
  },

  gyms: {
    name: 'Gyms & Elite Four',
    short: 'Gyms & Elite Four',
    accent: 'ember',
    tag: '/gym',
    category: 'Battling',
    featured: true,
    blurb:
      'Beat eight custom gym leaders for badges, then challenge a single NatDex OU Elite Four once you hold all eight.',
    intro:
      'Season 2 returns to a clean progression path: work through eight type-themed gyms for badges, then take on one Elite Four in NatDex OU. Gym Badges now carry real weight — they gate the Elite Four and feed your rank progression.',
    how: [
      {
        title: 'Earn your badges',
        body:
          'Eight gyms, each on a type theme, laid out in a staircase GUI from gym 1 to gym 8. Beating a leader pays coins and Rare Candies, with a one-time first-clear bonus for each new badge.',
      },
      {
        title: 'Collect all eight',
        body:
          'Gym Badges are the gate — you need all eight before the Elite Four will accept your challenge. They also weigh into your overall rank progression.',
      },
      {
        title: 'Challenge the Elite Four',
        body:
          'One Elite Four, one format: NatDex OU. It’s the server’s championship test — down from the old 24 members across multiple formats to a single, focused climb.',
      },
    ],
    commands: [
      { cmd: '/gym', desc: 'Open the gym staircase, challenge leaders, and take on the Elite Four' },
    ],
    notes: [
      'One Elite Four in NatDex OU — the multi-format seat ladder and player Gym Leaders are retired in Season 2.',
      'All 8 Gym Badges are required to challenge the Elite Four.',
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

  creation: {
    name: 'The Creation Chain',
    short: 'Creation Chain',
    accent: 'violet',
    tag: '/ascraid chain',
    category: 'Battling',
    featured: true,
    blurb:
      'Forge the Red Chain from the lake guardians to summon Dialga, Palkia and Giratina as catchable raid bosses — and Arceus as the capstone.',
    intro:
      'Box legendaries are locked out of the wild spawn pool and out of your Legend bar on purpose. The Creation Chain is the second road to them, built on the Pixelmon Red Chain: bring together the three lake guardians you caught yourself, forge a Chain, and summon a creation legend as a Mythic raid the whole server can fight. Beat it and it is genuinely catchable — no contract, no gamble on a roulette.',
    how: [
      {
        title: 'Imprint the lake trio',
        body:
          'Send out your own Uxie, Mesprit or Azelf and right-click it with a plain Nether Star. The star becomes a Charged Star of Knowledge, Emotion or Willpower. You need one of each, so the real gate is owning all three guardians.',
      },
      {
        title: 'Forge the Chain',
        body:
          'Right-click with all three Charged Stars to fuse them into the Creation Chain. You can forge one Chain every 7 days, and the cooldown is checked at the forge — never when you spend it, so you can never be left holding a Chain you can\'t use.',
      },
      {
        title: 'Summon and fight',
        body:
          'Right-click the Chain to pick Dialga, Palkia or Giratina. It spawns as a Mythic raid boss at the Spear Pillar arena and the server can join in. Only one raid runs at a time server-wide — if one is already live your shatter is refused and your Chain is not consumed.',
      },
      {
        title: 'Catch it',
        body:
          'On defeat the boss stays catchable for 60 seconds at level 85. Anyone who did at least 1% of the damage may throw a ball, and the first ball to land wins it. Nobody outside the raid can touch it.',
      },
      {
        title: 'Call Arceus',
        body:
          'Clear all three creation legends — taking part is enough, you don\'t have to have caught them — and a spare Chain can be shift + right-clicked into the Azure Flute. That summons Arceus at level 90 under the same rules.',
      },
    ],
    commands: [
      { cmd: '/ascraid chain', desc: 'Your Creation Chain progress, plus every guardian in your party and PC and whether it can still imprint' },
      { cmd: '/ascraid creation status', desc: 'Whether the arena is set and a summon is currently live' },
    ],
    notes: [
      'One imprint per individual guardian, forever — three Uxie stars are still worth exactly one. A spent guardian gets a ⛓ on its nickname; renaming that off does not give the imprint back.',
      'Guardians must be self-caught. A traded guardian — including anything bought off the GTS — is refused, because the trade restamps its Original Trainer. Run /ascraid chain to see which of yours will actually imprint before you go hunting for stars.',
      'A Legendary Core is also a Nether Star, and it is refused explicitly, so an imprint can never eat one by accident.',
      'The ordinary rotation Dialga, Palkia and Giratina raids are untouched and stay uncatchable — only a Chain summon is catchable.',
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
        title: 'Build a party for Set Bonuses',
        body:
          'Your six Cobblemon double as a gear set. Share an elemental type across 2, 4 or 6 of your party and you unlock tiered Set Bonuses that stay active for the whole run — stronger hits, damage resistance, thorns, knockback and more. Dual-types count for both of their types, so a clever squad can stack several bonuses at once. Preview what your current party grants with /dungeon setbonus, and watch the active bonuses on the dungeon sidebar.',
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
      { cmd: '/dungeon setbonus', desc: 'Preview the type Set Bonuses your party grants' },
      { cmd: '/party', desc: 'Form a party for shared-lives dungeon runs' },
    ],
    notes: [
      'Higher ranks get more daily keys — up to five at the top tier.',
      'Side-quests are optional but directly scale your reward quality.',
      'Set Bonuses reward type-themed teams: six mons of one type is the strongest single bonus, but mixed dual-type squads can stack several at once.',
      'A single dungeon can chain reach → puzzle → parkour → trainer battle → boss as objectives or side-quests.',
    ],
  },

  skills: {
    name: 'Skills — McMMO-style grinding',
    short: 'Skills',
    accent: 'emerald',
    tag: '/skills',
    category: 'Progression',
    featured: true,
    blurb:
      'Fifteen grinding skills across gathering, combat, utility and Pokémon. Every action levels a skill, stacks your Power Level, and unlocks perks, achievements and rank titles.',
    intro:
      'Skills brings classic McMMO-style progression to Cobble Asia. Just play the game — mine, chop, fish, fight, catch, battle, breed, take a fall — and the matching skill levels on its own. There is nothing to activate: your Power Level is the sum of all fifteen skills and quietly grows the more you play.',
    how: [
      {
        title: 'Level fifteen skills',
        body:
          'Five gathering skills (Mining, Woodcutting, Excavation, Herbalism, Fishing), four combat skills (Swords, Axes, Unarmed, Archery), three utility skills (Acrobatics from surviving falls, Repair from anvils, Alchemy from brewing) and a Pokémon category — Taming from catching, Battling from winning, Breeding from eggs. Each climbs from 0 all the way to 1000.',
      },
      {
        title: 'Watch your Power Level climb',
        body:
          'Your Power Level is the sum of every skill level. It shows up when players hover your name in chat, so a high Power Level is a visible flex — no command needed to prove you put in the hours.',
      },
      {
        title: 'Unlock perks as you level',
        body:
          'Perks scale with skill level: double drops while gathering, bonus melee damage in combat, dodging fall damage through Acrobatics, and bonus coins on fishing, catching, battling, breeding, repairing and brewing. Shiny and legendary catches pay multiplied XP.',
      },
      {
        title: 'Earn tier titles',
        body:
          'Every skill passes through Novice, Apprentice (25), Adept (50), Expert (75) and Master (100) — so hitting 100 in Mining makes you a Master Miner. Titles never spam chat; they surface on your name hover and in the /skills menu. The whole server is notified every 50 levels and when someone earns a new title.',
      },
      {
        title: 'Chase achievements',
        body:
          'Every skill has its own Lv 25/50/100/250/500/1000 achievement ladder, plus a Power Level ladder and two big ones: Renaissance for getting every skill to Lv 50, and Grandmaster for every skill at Lv 100.',
      },
      {
        title: 'Climb the leaderboard',
        body:
          'Power Level is a full leaderboard category — check where you rank in /lb, and admins can raise a floating Power Level hologram at spawn for everyone to chase.',
      },
    ],
    commands: [
      { cmd: '/skills', desc: 'Open the skills menu — see every skill, its level and your Power Level (also /mcmmo)' },
      { cmd: '/skills achievements', desc: 'Browse every skill achievement ladder and what you’ve unlocked' },
    ],
    notes: [
      'Placed blocks don’t grant gathering XP, so you can’t farm a skill by breaking what you just placed.',
      'PvP kills don’t grant combat XP — only fighting mobs does, and PvP is excluded from the bonus-damage perk.',
      'Milestone coins pay out every 10 levels in a skill.',
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
      'The Safari is a whole second world — Umera, a 26-region reserve where each area has its own curated spawn pool. Walk in free, explore, and hunt encounters you can’t find anywhere else: roaming Mega evolutions, Totem Pokémon, Raid Bosses, Dynamax/Gigantamax raids, Raid Dens and rotating swarms.',
    how: [
      {
        title: 'Enter for free',
        body:
          'The Safari is completely free to enter — no coin gate, no timed passes. Open /safari for the hub: the raid board and a region guide, then head in and hunt.',
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
      { cmd: '/safari', desc: 'Open the Safari hub — raid board, region guide' },
      { cmd: '/safari expedition', desc: 'Track your active safari expedition objectives' },
    ],
    notes: [
      'Roaming Megas and Totems must be battled or caught — you can’t sword-kill them for the drop.',
      'Raid bosses are owner-locked and catchable at a reduced rate when you join the fight.',
    ],
  },

  pvp: {
    name: 'PvP Ranked',
    short: 'PvP Ranked',
    accent: 'crimson',
    tag: '/pvp',
    category: 'Battling',
    featured: true,
    blurb:
      'A ranked ladder through Poké, Great and Ultra Ball tiers into a 10-player Master Tier. In Season 2, PvP feeds rank progression.',
    intro:
      'Season 2 makes PvP part of progression with a redesigned Ranked ladder. Climb the Ball tiers by winning, then fight for one of just ten Master Tier spots. Open-world Warzone is retired — clan-vs-clan combat now lives in Clan Wars.',
    how: [
      {
        title: 'Climb the Ball tiers',
        body:
          'Ranked runs through Poké Ball IV→I, Great Ball IV→I and Ultra Ball IV→I. Win ranked matches to climb toward the top.',
      },
      {
        title: 'Reach Ultra Ball I',
        body:
          'Ultra Ball I is the gate to Master Tier — once you’re there, your total wins put you in the running for promotion.',
      },
      {
        title: 'Fight for Master Tier',
        body:
          'Only 10 players hold Master Tier at once. Every 24 hours the top 10 eligible players by total wins are promoted in — prestigious, competitive and always changing.',
      },
    ],
    commands: [
      { cmd: '/pvp', desc: 'Open the PvP hub — queue ranked and check your tier' },
      { cmd: '/pvp rank', desc: 'Check your ranked tier and progress' },
    ],
    notes: [
      'Master Tier is capped at 10 players and re-evaluated every 24 hours by total wins.',
      'The old open-world Warzone is retired — clan-vs-clan combat is now Clan Wars.',
    ],
  },

  clans: {
    name: 'Clans',
    short: 'Clans',
    accent: 'azure',
    tag: '/clans · /c',
    category: 'Social',
    featured: true,
    blurb:
      'Claim territory with permits, pay land tax as an official clan, run a clan Raid Boss, and wage Clan Wars for each other’s Pokémon.',
    intro:
      'Season 2 gives clans a full progression and territory system. Earn your base through permits, defend claimed land, field a dedicated clan Raid Boss, and settle rivalries in Clan Wars — the clan-vs-clan combat that replaces the old Warzone.',
    how: [
      {
        title: 'Earn your base with permits',
        body:
          'Setting up a clan base follows clear steps: obtain a Clan Permit, create your clan, then buy a Clan Base Build Permit to claim territory. Officers can expand the claimed area later.',
      },
      {
        title: 'Pick a territory size',
        body:
          'Build permits come in three sizes — 250×250, 500×500 and 1000×1000. Official clans are recognized on the server and pay a 5% land tax scaled to how large their territory is.',
      },
      {
        title: 'Grow the roster',
        body:
          'Clans cap at 5 members, and you can buy up to +5 extra slots. The cap keeps players from merging into one mega-clan. Set relations with /clan ally and /clan enemy, and talk in clan chat and ally chat.',
      },
      {
        title: 'Run a clan Raid Boss',
        body:
          'Each clan gets its own dedicated Raid Boss that spawns on a fixed timer — only that clan’s members can hit it. A Clan NPC auto-spawns at the center of the build (or the leader can place it).',
      },
      {
        title: 'Wage Clan Wars',
        body:
          'Clan Wars replaces Warzone: proper clan-vs-clan conflict with raid-boss spawns and Pokémon battles. Lose a battle and you forfeit 1 Pokémon to the enemy clan — the losing clan can buy them back after the match, or the winners keep them as War Tokens.',
      },
    ],
    commands: [
      { cmd: '/clans', desc: 'Open the clan hub — permits, territory and members' },
      { cmd: '/c', desc: 'Quick clan command + clan chat' },
      { cmd: '/clan ally', desc: 'Set another clan as an ally (ally chat)' },
      { cmd: '/clan enemy', desc: 'Declare a rival clan for Clan Wars' },
    ],
    notes: [
      'Official clans pay a 5% land tax scaled to territory size.',
      'Member cap is 5, expandable by +5 bought slots.',
      'Clan Wars replaces the old Warzone as clan-vs-clan combat.',
    ],
  },

  jobs: {
    name: 'Jobs & Economy',
    short: 'Jobs & Economy',
    accent: 'amber',
    tag: '/jobs · /chestshop',
    category: 'Economy',
    blurb:
      'Nine jobs, now an activity-driven questline — do the work, complete quests, and claim Paychecks from each job’s NPC. Trade on chest shops and the GTS.',
    intro:
      'Season 2 turns Jobs from passive income into a questline. Do a job’s activity to complete quests, earn Paychecks, Job EXP and Reputation, then claim your pay from that job’s NPC. Coins still tie the economy together — spend across chest shops, the GTS, banners and the forge.',
    how: [
      {
        title: 'Work the questline',
        body:
          'Nine jobs — Farmer, Fisher, Miner, Lumberjack, Slayer, Artisan, Explorer, Builder and Trainer. Do the activity to complete daily & weekly quests (Collection, Crafting, Combat, Exploration, Delivery) and earn a Paycheck + Job EXP + Reputation.',
      },
      {
        title: 'Claim at the Job NPC',
        body:
          'Paychecks can’t be claimed remotely — visit that job’s NPC to accept quests, track progress and collect your pay. No AFK salary, no automation.',
      },
      {
        title: 'Climb three tiers',
        body:
          'Each job climbs three tiers as you earn Job EXP & Reputation — unlocking harder quests, bigger paychecks, more quest slots and exclusive rewards.',
      },
      {
        title: 'Trade and spend',
        body:
          'Set up chest shops to sell to other trainers, or use the GTS to trade Pokémon globally. Coins fuel banners, the forge upgrade ladder, dungeon entry, and more.',
      },
    ],
    commands: [
      { cmd: '/jobs', desc: 'Browse jobs, track quests and see your tier' },
      { cmd: '/chestshop', desc: 'Open the chest shop system' },
      { cmd: '/gts', desc: 'Global Trade System' },
    ],
    notes: [
      'Paychecks must be claimed at a job’s NPC — no passive/AFK income.',
      'Coin payouts were rebalanced in Season 2 so every coin is worth more.',
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
      'Seasonal Battle Pass tracks, the gem-only Solar Pass with 30 days of daily rewards, an 8-tier rank progression with badges, per-region Pokédex tracks, and permanent passive upgrades you keep forever.',
    intro:
      'Progression systems that reward the time you put in: a seasonal Battle Pass with reward tracks, the new Solar Pass that mails you rewards every day for a month, an eight-tier rank ladder with cosmetic glyph badges, and permanent passives that make your account stronger for good.',
    how: [
      {
        title: 'Climb the Battle Pass',
        body:
          'Complete quests to level a seasonal Battle Pass and unlock reward tracks. Each season resets with fresh rewards to chase.',
      },
      {
        title: 'Unlock the Solar Pass',
        body:
          'The Solar Pass is a gem-only premium pass, separate from the regular Battle Pass. Buy it once and you’re paid a reward bundle every day for 30 days — coins, Origin & Legacy crate keys and Master Balls — delivered straight to your in-game mail, even while you’re offline. Open /bp and pick Solar Pass to grab it or check your days remaining, and buy again any time to extend.',
      },
      {
        title: 'Rank up',
        body:
          'An 8-tier rank progression tracks your overall account, with cosmetic badge glyphs that show next to your name. Ranks also gate access to certain features and perks.',
      },
      {
        title: 'Complete Regional Dexes',
        body:
          'On top of the national Dex, every region from Kanto to Paldea has its own completion track. Register 25%, 50%, 75% and 100% of a region’s Pokémon and each milestone pays out — coins, tokens, and a Dex Crate key at 100%. It reuses the Pokémon you’ve already caught, so past progress counts the moment a track goes live. Open /regiondex to see all nine regions and how close you are on each.',
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
      { cmd: '/regiondex', desc: 'Track per-region Pokédex completion for milestone rewards' },
      { cmd: '/passive', desc: 'Buy and manage permanent passives' },
    ],
    notes: [
      'Regional Dex milestones stack with your national Dex — the same catches count toward both.',
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

  fishing: {
    name: 'Fishing',
    short: 'Fishing',
    accent: 'emerald',
    tag: '/fish',
    category: 'Economy',
    featured: true,
    blurb:
      'Every cast reels in a Pokémon. Claim it to your party or release it for coins, chase 0.5% Alphas for Orbs, and compete in tournaments every two hours — plus the weekend Mystery Wormhole.',
    intro:
      'Season 2 fishing catches Pokémon, not fish. Cast anywhere there is water and every reel-in rolls a water or coastal species at a random level and size, filed into your Fish Bag. From there it’s your call: claim it for real, or release it for coins. It’s a genuine second way to build a collection that has nothing to do with walking around in the grass.',
    how: [
      {
        title: 'Cast & reel',
        body:
          'Use a fishing rod near water. Each catch rolls a rarity from Trash up through Common, Uncommon, Rare, Epic, Legendary and Mythic, along with a species, a level and a size — and the Pokémon you get is scaled to the size you rolled. Junk catches (Old Boot, Rusty Can, Cracked iPhone) are still the gag tier.',
      },
      {
        title: 'Claim it or release it',
        body:
          'Open /fish for the hub or /fish bag for your catches. Left-click a catch to CLAIM it — the Pokémon goes to your party or PC for real. Right-click to RELEASE it and take coins instead. Your Codex tracks first-catches and records, and /fish top ranks the server by earnings, biggest catch and total caught.',
      },
      {
        title: 'Hunt Alphas for Orbs',
        body:
          'Uncommon-and-above catches have a 0.5% chance to surface as an Alpha — announced to the whole server. Each one pays 1 Orb, capped at 5 per week; past the cap you still keep the Alpha, it just pays coins instead. Alphas and shinies ignore your bag limit, so a full bag will never throw one away.',
      },
      {
        title: 'Tournaments every two hours',
        body:
          'A rotating tournament runs every two clock hours — Most Caught, Biggest, Smallest, Longest, Shortest, Total Weight, Most Valuable, and Most iPhones. The top 3 split a coin prize pool, and you can check live standings any time from the hub.',
      },
      {
        title: 'The Mystery Wormhole',
        body:
          'On weekends the Mystery Wormhole opens for an hour at a random announced time. It names one biome and one featured legendary — fish there and the Legendary and Mythic tiers unlock at double rate, alongside the permanent guardian legends. Outside a tournament or a wormhole, those tiers don’t bite at all.',
      },
    ],
    commands: [
      { cmd: '/fish', desc: 'Open the fishing hub (bag, claims, codex, leaderboard, event status)' },
      { cmd: '/fish bag', desc: 'Open your Fish Bag — left-click to claim, right-click to release' },
      { cmd: '/fish claim <slot>', desc: 'Claim a specific catch to your party or PC' },
      { cmd: '/fish orbs', desc: 'Check your Alpha Orb payouts and weekly cap' },
      { cmd: '/fish wormhole', desc: 'See the current or next Mystery Wormhole — biome, featured legend, odds' },
      { cmd: '/fish top', desc: 'Fishing leaderboards (value, biggest, count)' },
    ],
    notes: [
      'Legendary and Mythic tiers only bite during a live tournament or Mystery Wormhole — you can’t farm them around the clock.',
      'The Alpha Orb payout is capped at 5 per week; Alphas past the cap still get caught and still pay coins.',
      'Auto-fishing is detected and throttled: macro-regular casts earn worthless junk until you fish like a human.',
      'The Cobblemon Poké Rod spawns its own encounters and doesn’t file catches here — use a normal rod for fishing.',
      'Alias: /ascfish.',
    ],
  },

  breeding: {
    name: 'Breeding & Ranches',
    short: 'Breeding',
    accent: 'frost',
    tag: '/ascbreed',
    category: 'Pokémon',
    featured: true,
    blurb:
      'Turn any Cobblemon pasture into a ranch, then build the environment around it to match your parents’ types. Walk your eggs to hatch, with full mainline inheritance — and Ditto × Ditto for a random species.',
    intro:
      'Season 2 breeding is an in-house ASC system built around one idea: where you breed matters. A ranch is only as good as the pen you build around it, so a serious breeder is someone who invested in the terrain — not someone who parked two Pokémon in a box and walked away.',
    how: [
      {
        title: 'Any pasture is a ranch',
        body:
          'Place a Cobblemon pasture and right-click it — that’s your ranch, no special block to craft. Assign two parents from your party and both appear beside it, roaming inside the pen. You can run up to 3 active ranches at once; check them with /ascbreed info.',
      },
      {
        title: 'Build the right environment',
        body:
          'The ranch scans the blocks around it and scores how well the terrain suits your parents’ types — campfires and magma for Fire, packed ice for Ice, iron blocks for Steel, emerald for Dragon/Ghost/Psychic, and so on. A block only counts if its type matches one of the parents (and Ditto counts as Normal), and only the highest block in each column counts. Environment strength directly sets your egg timer, so a bad pen produces nothing. The screen re-scans live as you build.',
      },
      {
        title: 'Walk your eggs to hatch',
        body:
          'Eggs are real items and they hatch the mainline way — carry one and walk. Better IVs mean more steps, so a great egg makes you earn it. Hover the egg and it tells you exactly what’s inside before it cracks: IVs, nature, ability, egg moves, size, shiny, and steps remaining. A parent with Flame Body, Magma Armor or Steam Engine halves the walk.',
      },
      {
        title: 'Full mainline inheritance',
        body:
          'Destiny Knot passes 5 IVs, power items pin a specific stat, Everstone passes the nature and regional form, and the Masuda Method still boosts shiny odds. Egg moves come from the father or a benched parent, Poké Ball is inherited, and babies can inherit a parent’s size. Light Ball on a parent gives your bred Pichu Volt Tackle, and a Mirror Herb teaches an egg move between incompatible parents. Manaphy breeds Phione, Nidoran and Volbeat/Illumise roll correctly, and baby forms hatch as babies.',
      },
      {
        title: 'Ditto × Ditto',
        body:
          'The mainline forbids it — we don’t. Two Dittos in a ranch produce a completely random species, with IVs, nature, size and ball still inherited from the pair. Legendaries and other restricted tiers are excluded. It’s a deliberate gacha sink for your spare Dittos.',
      },
      {
        title: 'Hourglasses & the Shiny Charm',
        body:
          'Kuro’s Hourglasses skip the timer: Copper 10%, Silver 25%, Gold gives an instant egg and bypasses the environment entirely, Platinum an instant egg with 5 perfect IVs, and Diamond an instant flawless 6×31. The Shiny Charm is a held item that triples that ranch’s shiny odds and stacks with Masuda — but it takes the held slot, so it competes with Destiny Knot.',
      },
    ],
    commands: [
      { cmd: '/ascbreed', desc: 'Breeding help and your ranch overview' },
      { cmd: '/ascbreed info', desc: 'See your active ranches and how many you have left' },
      { cmd: '/unbreed', desc: 'Lock a Pokémon so it can never produce eggs (only the Original Trainer can undo it)' },
    ],
    notes: [
      'An egg can only hatch with a Hidden Ability if a parent actually has one — and Ditto never passes its own.',
      'Environment blocks only count if their type matches a parent, so a Fire × Ditto pair needs both Fire and Normal blocks.',
      'Range upgrades grow the pen from 9×9 up to 15×15, and are refunded if the ranch is broken.',
    ],
  },

  bazaar: {
    name: 'Shop & the Bazaar',
    short: 'Bazaar',
    accent: 'amber',
    tag: '/shop · /bazaar',
    category: 'Economy',
    featured: true,
    blurb:
      'Two markets, on purpose. /shop is the server store with prices that move on demand; /bazaar is a full player-driven order book — and it’s where things are actually worth money.',
    intro:
      'Season 2 splits buying and selling. The server shop still stocks everything, but its buyback is deliberately terrible — 2% of buy price. If you want real money for your goods you sell them to other players on the Bazaar, a proper crossing order book with escrow, limit orders and a live price ladder.',
    how: [
      {
        title: '/shop — the Cobble Bazaar',
        body:
          'The server store’s prices move with demand. The more an item gets bought, the higher its buy price climbs; selling into the shop relieves that pressure and pushes it back down. Prices never fall below base value and buy always stays above sell, so there is no money printer. Tiles show the live price with a ▲ / ▼ / ◈ trend tag.',
      },
      {
        title: 'Shop buyback is only 2%',
        body:
          'Selling to the shop returns 2% of an item’s buy price. That is intentional — the shop is a dump bin for junk you don’t want to list. Anything with real value belongs on the Bazaar.',
      },
      {
        title: '/bazaar — instant buy & instant sell',
        body:
          'Take the best price sitting on the book right now. Every /shop item is tradeable, priced per single item, with a readable buy/sell ladder so you can see the depth before you commit.',
      },
      {
        title: 'Place your own orders',
        body:
          'Create a Buy Order or a Sell Offer at your own price. Anything that crosses fills immediately; the rest rests on the book waiting for someone to take it. Trades execute at the resting order’s price, so being early on the book pays.',
      },
      {
        title: 'Escrow & Claim All',
        body:
          'Orders are escrowed up front — your coins or items are held the moment you place them, so a fill is always honoured. If your order fills while you’re offline, the payout waits for you in Claim All. Cancelling refunds whatever is left.',
      },
      {
        title: 'A 1% tax that burns',
        body:
          'A 1% tax comes out of seller proceeds and is destroyed, not paid to anyone. It is one of the server’s permanent coin sinks and part of what keeps the Season 2 economy from inflating.',
      },
    ],
    commands: [
      { cmd: '/shop', desc: 'Open the server shop — live demand-based pricing' },
      { cmd: '/bazaar', desc: 'Open the player order book (alias /baz)' },
      { cmd: '/baz', desc: 'Same thing, fewer letters — Orders tab tracks, claims and cancels your own' },
    ],
    notes: [
      'Books start empty — players make the liquidity, so early Season 2 is a seller’s market.',
      'Some items are permanently unsellable (Dynamax consumables, for one) and stay blocked in both markets.',
      'Orbs are buy-only — you can’t sell them back, or that would be a money printer.',
    ],
  },

  archaeology: {
    name: 'Archaeology',
    short: 'Archaeology',
    accent: 'amber',
    tag: 'Brush suspicious sand',
    category: 'Collecting',
    blurb:
      'Brush suspicious sand and gravel at desert wells, pyramids, and ocean & trail ruins for a shot at Cobblemon loot — Rare Candy, EXP Candy, Poké Balls, relic coins, even a Master Ball — plus rare bottle caps for IV training.',
    intro:
      'The vanilla archaeology dig sites are worth visiting again. Every suspicious sand or gravel block you brush keeps all its normal pottery-sherd chances and adds a Cobblemon bonus roll on top — useful trainer items you’d otherwise grind or buy, with a rare jackpot and even rarer IV bottle caps.',
    how: [
      {
        title: 'Find a dig site',
        body:
          'Suspicious sand and gravel appear at the usual vanilla spots: desert wells, desert pyramids, warm and cold ocean ruins, and trail ruins. Anywhere you can brush, the bonus loot applies — in every world.',
      },
      {
        title: 'Brush for bonus loot',
        body:
          'Brush a block as normal. Alongside the vanilla sherds, there’s a chance for a Cobblemon reward — Rare Candy, EXP Candy, Poké Balls of various tiers, relic coins, and a rare Master Ball jackpot. The bonus is additive, so you never lose the pottery you came for.',
      },
      {
        title: 'Dig up bottle caps',
        body:
          'Rarely, a brush turns up a Bottle Cap for IV training — usually a random-stat cap, and very occasionally a Gold (perfect-IV) cap. A genuine slice of endgame IV gear from a low-stakes side activity.',
      },
    ],
    commands: [],
    notes: [
      'The bonus loot is additive — you never lose the normal archaeology sherds by having it enabled.',
      'Applies in every world, at all six vanilla archaeology loot sites.',
    ],
  },

  playtime: {
    name: 'Playtime Rewards',
    short: 'Playtime',
    accent: 'azure',
    tag: '/playtime',
    category: 'Progression',
    featured: true,
    blurb:
      'Get paid for the hours you put in. Every 10h of active play unlocks a reward, every 100h a bigger one — and it loops forever. Milestone titles along the way.',
    intro:
      'Playtime Rewards is an infinite claim ladder that turns your time on the server into loot. Open /playtime to see the ladder, and click a glowing tile to claim everything you have earned so far. There is no end — the rewards keep coming the longer you play. Only real, active playtime counts: AFK time is excluded, so you have to actually be playing.',
    how: [
      {
        title: 'Every 10 hours',
        body:
          'Each 10 hours of active play unlocks a tier worth coins and useful items (Great Balls and the like). Tiers stack — log in after a long grind and one click claims every tier you are owed at once.',
      },
      {
        title: 'Every 100 hours',
        body:
          'Tiers that land on a 100-hour mark pay a much bigger haul — a large coin sum, Tokens, and a crate key. Past 1000h it keeps going: you earn one of these milestone hauls for every additional 100 hours.',
      },
      {
        title: 'Milestone titles',
        body:
          'Cross 100h, 250h, 500h and 1000h to permanently earn the ⌚ Dedicated, Committed, Devoted and NoLife titles. The single #1 most-played player on the server also holds the exclusive rotating ⌚ The Timeless crown — out-play them to take it.',
      },
    ],
    commands: [
      { cmd: '/playtime', desc: 'Open the Playtime Rewards ladder (alias /pt)' },
    ],
    notes: [
      'AFK time does not count toward the ladder — only active playtime.',
      'Reward amounts are tunable by staff and may be adjusted over time.',
    ],
  },

  bingo: {
    name: 'Catch Bingo',
    short: 'Catch Bingo',
    accent: 'violet',
    tag: '/bingo',
    category: 'Collecting',
    blurb:
      'A relaxed weekly 4×4 catch card. Fill rows and the full card for coins and Origin Keys — rewards pay out automatically, no claiming, no rush.',
    intro:
      'Bingo is a laid-back weekly side-goal. Roll a card of sixteen species, then catch them at your own pace over the week to mark squares — complete lines for coins and finish the whole card for a big bonus. Everything pays out the instant you complete it, so there’s nothing to claim and no timer breathing down your neck.',
    how: [
      {
        title: 'Roll a weekly card',
        body:
          'Open /bingo to start a 4×4 card — sixteen random species pulled from the huntable pool. Cards run weekly, so there’s no rush to finish in one sitting; if you’ve none active, opening /bingo just rolls you a fresh one.',
      },
      {
        title: 'Catch to mark squares',
        body:
          'Catch any species shown on your card and that square fills automatically. No need to manually match — the card tracks your catches as they happen.',
      },
      {
        title: 'Rows pay out automatically',
        body:
          'Fill all four squares in a row to complete a line, and its coin + token reward is paid to you the moment it completes. No claim button, no cashing out — each row simply pays once, as you finish it.',
      },
      {
        title: 'Complete the full card',
        body:
          'Mark all sixteen squares to complete the card for a full-card bonus — a big coin haul, Origin Keys and tokens — plus a server-wide shout-out. Like the rows, it’s paid automatically the moment you finish.',
      },
    ],
    commands: [
      { cmd: '/bingo', desc: 'Start or open your weekly bingo card' },
    ],
    notes: [
      'Rewards are fully automatic — rows and the full-card bonus pay the instant you complete them. The 📦 button is just a card view now.',
      'A fresh card rolls every week; catch at your own pace as a relaxed side-goal alongside everything else.',
    ],
  },

  casino: {
    name: 'Casino',
    short: 'Casino',
    accent: 'crimson',
    tag: '/casino',
    category: 'Economy',
    blurb:
      'Gamble your coins across five games — Coinflip, Dice, Blackjack, the Lottery and Lucky Key Spin — from one /casino hub.',
    intro:
      'Feeling lucky? The Casino bundles five ways to wager into a single hub. Challenge other players to a Coinflip, bet high-or-low on Dice, beat the dealer at Blackjack, buy into the Lottery, or take a 100k spin at a crate key on Lucky Key Spin. The bet-driven games run on fair odds; Lucky Key Spin carries a small house edge as a deliberate coin sink.',
    how: [
      {
        title: 'Open the casino',
        body:
          'Use /casino for the hub — a chest GUI hosting all five games — or jump straight into one with its command. All games bet in coins. There may be a shared cooldown between plays, and gambling can be limited to a casino zone.',
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
      {
        title: 'Lucky Key Spin — gamble for a crate key',
        body:
          'Pay a flat 100,000 coins and /keyspin (alias /lucky) for an animated case-roll reel: 45% Vote Key, 22.5% Legacy Key, 22.5% Origin Key, with a 10% bust as the house edge. Win a Legacy or Origin key and it announces server-wide. Claim one free spin every 24h with /keyspin free.',
      },
    ],
    commands: [
      { cmd: '/casino', desc: 'Open the casino hub (all five games)' },
      { cmd: '/coinflip <amount> <player>', desc: 'Challenge a player to a coinflip (alias /cf)' },
      { cmd: '/dice <high|low> <amount>', desc: 'Bet high or low on a d100 roll' },
      { cmd: '/bj <bet>', desc: 'Play blackjack against the dealer (hit / stand / double)' },
      { cmd: '/keyspin', desc: 'Spend 100k for a Lucky Key Spin (alias /lucky)' },
      { cmd: '/keyspin free', desc: 'Claim your free daily Lucky Key Spin' },
    ],
    notes: [
      'The bet-driven games are tuned to fair odds; Lucky Key Spin keeps a small house-edge bust as an intentional coin sink — you can still lose, so gamble responsibly.',
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
  // ⏸ 'creation' is deliberately NOT listed while the Creation arena is unarmed on live — the
  // page at feature.html?f=creation is written and reachable, it just isn't advertised on the
  // landing grid yet. Add 'creation' back after 'arctis' once `/ascraid creation arena` is run.
  'arctis', 'solforge', 'crates', 'cosmetics', 'transform', 'fusions', 'battletower', 'areazero', 'gyms', 'raids',
  'dungeons', 'safari', 'hunts', 'fishing', 'breeding', 'archaeology', 'bingo', 'pvp', 'clans',
  'jobs', 'bazaar', 'skills', 'casino', 'playtime', 'progression',
];

// Full mod toolbox (landing page mod grid)
const MODS = [
  { name: 'Area Zero', cmd: '/az' },
  { name: 'Battle Pass', cmd: '/bp' },
  { name: 'Battle Tower', cmd: '/bt' },
  { name: 'Breeding & Ranches', cmd: '/ascbreed' },
  { name: 'Catch Combos', cmd: '/combo' },
  { name: 'Chest Shop', cmd: '/chestshop' },
  { name: 'Claim Blocks', cmd: '/ascclaim' },
  { name: 'Clans', cmd: '/clans · /c' },
  { name: 'Client UI', cmd: '(required — in the modpack)' },
  { name: 'Cosmetics', cmd: '/cosmetics' },
  { name: 'Crates & Banners', cmd: '/ascc · /ascsummon' },
  { name: 'Dungeons', cmd: '/dungeon' },
  { name: 'Essentials', cmd: '/ess' },
  { name: 'Fishing', cmd: '/fish' },
  { name: 'Forge — Arctis & SolForge', cmd: '/gear' },
  { name: 'GTS', cmd: '/gts' },
  { name: 'Gyms', cmd: '/gym' },
  { name: 'Jobs', cmd: '/jobs' },
  { name: 'Leaderboard', cmd: '/lb' },
  { name: 'Legend Spawns', cmd: '/legend' },
  { name: 'Levels', cmd: '/lvl' },
  { name: 'Mail', cmd: '/mail' },
  { name: 'NPCs', cmd: '/npc' },
  { name: 'Pokédex Research', cmd: '/research' },
  { name: 'Pokeditor', cmd: '/pokeditor' },
  { name: 'PokeWiki', cmd: '/pwiki' },
  { name: 'PvP Ranked', cmd: '/pvp' },
  { name: 'Raid Boss', cmd: '/raid' },
  { name: 'Ranks', cmd: '/ranks' },
  { name: 'Safari', cmd: '/safari' },
  { name: 'Skills', cmd: '/skills' },
  { name: 'Starter Questline', cmd: '/quest' },
  { name: 'Training Grounds', cmd: '/tg' },
  { name: 'Transform', cmd: '/transform' },
  { name: 'Voting', cmd: '/vote · /voteparty' },
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
      { cmd: '/quest', desc: 'Your Starter Questline — nine steps that walk you through the server (alias /starter)' },
      { cmd: '/spawn', desc: 'Teleport to Dragonforstborn, the Season 2 spawn city' },
      { cmd: '/hub', desc: 'Teleport to the old lobby hub' },
      { cmd: '/sethome <name>', desc: 'Set a home you can teleport back to' },
      { cmd: '/home [name]', desc: 'Teleport to one of your homes' },
      { cmd: '/rtp', desc: 'Open the biome picker — every biome on the map and how much of it it covers' },
      { cmd: '/rtp <biome>', desc: 'Random-teleport into a specific biome, e.g. /rtp cherry_grove' },
      { cmd: '/rtp random', desc: 'Random-teleport into any eligible biome' },
      { cmd: '/warp <name>', desc: 'Travel to a named server warp' },
      { cmd: '/tpa <player>', desc: 'Request to teleport to another player' },
      { cmd: '/back', desc: 'Return to your previous location' },
      { cmd: '/kits', desc: 'Claim your starter kit and any kits you have access to' },
      { cmd: '/daily', desc: 'Claim your daily reward' },
      { cmd: '/playtime', desc: 'Claim playtime rewards — loot every 10h, bigger every 100h (alias /pt)' },
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
      { cmd: '/research', desc: 'Pokédex Research Quests — 931 quests across Gen 1–9 (also /ascdex)' },
      { cmd: '/legend', desc: 'Your personal Legend bar — how full it is and what fills it' },
      { cmd: '/legend roll', desc: 'Spend your bar on the Legendary roulette — a full bar is guaranteed, from 20% up it\'s a gamble (alias /legend spin)' },
      { cmd: '/ascbreed', desc: 'Breeding help — right-click any Cobblemon pasture to make it a ranch' },
      { cmd: '/ascbreed info', desc: 'Your active ranches and how many you have left' },
      { cmd: '/unbreed', desc: 'Lock a Pokémon so it can never be bred (Original Trainer only to undo)' },
      { cmd: '/gts', desc: 'Global Trade System' },
      { cmd: '/safetrade <player>', desc: 'Direct trade with a countdown and a ready-reset — changing your offer un-readies both sides (alias /trade, or shift + right-click a player)' },
      { cmd: '/tradehelp', desc: 'The checklist for trading with someone you don\'t know' },
      { cmd: '/wondertrade', desc: 'Throw a Pokémon into the pool and get a random one back (alias /wt)' },
      { cmd: '/pc', desc: 'Open your Cobblemon PC' },
    ],
  },
  {
    group: 'Battling & Competition',
    items: [
      { cmd: '/bt', desc: 'Battle Tower — roguelike climb: draft a team, ascend, shop every few floors' },
      { cmd: '/bt battle', desc: 'Fight the next floor of your run (alias /bt next)' },
      { cmd: '/bt forfeit', desc: 'Abandon your Battle Tower run' },
      { cmd: '/scout', desc: 'Battle-Scout — see the opponent’s revealed team mid-fight (alias /ascscout)' },
      { cmd: '/gym', desc: 'Challenge the eight gym leaders and the Elite Four' },
      { cmd: '/pvp', desc: 'PvP hub — ranked Ball tiers & Master Tier' },
      { cmd: '/raid', desc: 'Raid boss info & encounters' },
      // ⏸ HOLD — restore alongside the Creation Chain news/patch-note items once the arena is armed.
      // { cmd: '/ascraid chain', desc: 'Creation Chain progress — every lake guardian you own and whether it can still imprint' },
      { cmd: '/az', desc: 'Area Zero combat zone' },
      { cmd: '/dungeon', desc: 'Enter seasonal dungeons' },
      { cmd: '/dungeon setbonus', desc: 'Preview your party’s type Set Bonuses' },
      { cmd: '/party', desc: 'Party up for shared-lives dungeon runs' },
      { cmd: '/tg', desc: 'Training Grounds — EXP buffs' },
    ],
  },
  {
    group: 'Economy & Gambling',
    items: [
      { cmd: '/jobs', desc: 'Job hub — JOBS and MY QUESTS tabs' },
      { cmd: '/job quests', desc: 'Print your accepted quests, progress and this rotation’s board' },
      { cmd: '/job tier', desc: 'Your per-job tier — Apprentice → Journeyman → Master (alias /job rank)' },
      { cmd: '/shop', desc: 'Server shop — search all 1,700 items from the landing screen (buyback is only 2%, and some listings are buy-only)' },
      { cmd: '/bazaar', desc: 'Player order book — instant buy/sell or place your own orders (alias /baz)' },
      { cmd: '/chestshop', desc: 'Chest-shop system' },
      { cmd: '/gem shop', desc: 'Open the SolForge Black Market (alias /blackmarket, /bm)' },
      { cmd: '/effects', desc: 'Buy a temporary status-effect buff (alias /buff)' },
      { cmd: '/fish', desc: 'Fishing hub — every cast reels in a Pokémon (alias /ascfish)' },
      { cmd: '/fish bag', desc: 'Your catches — left-click to claim, right-click to release for coins' },
      { cmd: '/fish claim <slot>', desc: 'Claim a catch to your party or PC' },
      { cmd: '/fish orbs', desc: 'Your Alpha Orb payouts and weekly cap' },
      { cmd: '/fish wormhole', desc: 'Current or next Mystery Wormhole — biome, featured legend, odds' },
      { cmd: '/fish top', desc: 'Fishing leaderboards (value, biggest, count)' },
      { cmd: '/casino', desc: 'Casino hub' },
      { cmd: '/coinflip <amount> <player>', desc: 'PvP coinflip wager (alias /cf)' },
      { cmd: '/dice <high|low> <amount>', desc: 'Bet high or low on a d100 roll' },
      { cmd: '/bj <bet>', desc: 'Blackjack against the dealer' },
      { cmd: '/keyspin', desc: 'Lucky Key Spin — spend 100k for a crate key (alias /lucky)' },
      { cmd: '/keyspin free', desc: 'Claim your free daily Lucky Key Spin' },
      { cmd: '/vote', desc: 'Vote links + streak rewards' },
      { cmd: '/voteparty', desc: 'Vote Party progress — fill it and the wheel picks someone for a free Legendary' },
    ],
  },
  {
    group: 'Gear, Crates & Forge',
    items: [
      { cmd: '/crates', desc: 'Warp to the crate area — right-click a crate with its key to open it' },
      { cmd: '/ascc list', desc: 'List every key crate and its odds (preview with /ascc preview <crate>)' },
      { cmd: '/ascsummon', desc: 'Open the gacha banner-select GUI (aliases /banner, /gamble — use these, not /summon, which vanilla Minecraft owns)' },
      { cmd: '/ascsummon history', desc: 'Wish History — every pull you’ve made and how far you are from pity' },
      { cmd: '/forge', desc: 'Open the Forge — craft & enchant gear and armor sets' },
      { cmd: '/gear', desc: 'Seasonal gear catalog — Arctis and legacy SolForge pieces, passives, how to get' },
      { cmd: '/gear upgrade', desc: 'Spend seasonal shards to level held gear' },
    ],
  },
  {
    group: 'Progression',
    items: [
      { cmd: '/bp', desc: 'Seasonal Battle Pass — Orbs, Seasonal Essence and the Lv 100 Shiny Legendary Spin' },
      { cmd: '/skills', desc: 'Fifteen grinding skills, perks and your Power Level (also /mcmmo)' },
      { cmd: '/skills achievements', desc: 'Every skill achievement ladder and what you’ve unlocked' },
      { cmd: '/passive', desc: 'Buy & manage permanent passives' },
      { cmd: '/ranks', desc: 'Rank progression & perks' },
      { cmd: '/regiondex', desc: 'Per-region Pokédex completion & milestone rewards' },
      { cmd: '/lvl', desc: 'ASC level & EXP' },
      { cmd: '/levels', desc: 'Prestige menu — reset at Lv.100 for a Star ✨ (/asclvl prestige)' },
      { cmd: '/lb', desc: 'Leaderboards' },
      { cmd: '/shinydex', desc: 'Shiny Dex ladder — /shinydex refresh to register stored shinies' },
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
      { cmd: '/bal <player>', desc: 'Check anyone\'s balances — works on offline players, so you can check before you trust' },
      { cmd: '/playtime check <player>', desc: 'Anyone\'s active playtime (AFK stripped out) and account age — also works offline' },
      { cmd: '/marry <player>', desc: 'Propose to another player — /marry accept|deny|status, and /divorce' },
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
      { cmd: '/pvp help', desc: 'PvP Ranked help' },
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
    title: 'Get the modpack & log in',
    body:
      'Grab the <b>CobbleAsia modpack</b> from our Discord — it is <b>required</b> to join, since Season 2 runs on a custom interface. Launch Minecraft 1.21.1 (Fabric) and add the server: <b>play.cobbleasia.net</b>. On your first join you’ll register an account — type <code>/register &lt;password&gt;</code>, and use <code>/login &lt;password&gt;</code> each time after that. Keep your password safe; staff can reset it if needed.',
    cmds: ['/register <password>', '/login <password>'],
  },
  {
    title: 'Follow the Starter Questline',
    body:
      'Season 2 starts you on a nine-step questline that teaches the server by making you play it — craft a Poké Ball, catch something, spend your first <b>Orb</b> on the Starter Banner for a guaranteed Pikachu, claim some land, take a job, collect a paycheck and buy something. Open it any time with <code>/quest</code>. It never blocks you from doing anything else, so veterans can blitz it.',
    cmds: ['/quest'],
  },
  {
    title: 'Set a home & learn to travel',
    body:
      'Set a home base with <code>/sethome</code> so you can always get back. <code>/spawn</code> returns you to Dragonforstborn, the Season 2 spawn city, and <code>/hub</code> reaches the old lobby. <code>/rtp</code> is now <b>per-biome</b> — open it for the picker or type <code>/rtp desert</code> to land somewhere specific. <code>/back</code> returns you to where you just were.',
    cmds: ['/sethome home', '/home', '/rtp', '/hub'],
  },
  {
    title: 'Catch Pokémon & start a Hunt',
    body:
      'Go catch! Then open <code>/hunt</code> for tiered catch-bounties that pay coins, roll a <code>/bingo</code> card for bonus rewards, and start working <code>/research</code> — every species in Gen 1–9 has its own Pokédex quest. Every catch counts toward something.',
    cmds: ['/hunt', '/bingo', '/research'],
  },
  {
    title: 'Make money with Jobs & the Bazaar',
    body:
      'Open <code>/jobs</code> and take the roles that fit how you play. You complete job quests, then claim your <b>Paycheck</b> from that job’s NPC — check the <b>MY QUESTS</b> tab to see what you’re on. Sell your goods to other players on <code>/bazaar</code>, the player order book, since <code>/shop</code> only buys back at 2%. Don’t forget to <code>/vote</code> daily.',
    cmds: ['/jobs', '/bazaar', '/vote'],
  },
  {
    title: 'Battle & progress',
    body:
      'Test yourself: challenge the eight gyms with <code>/gym</code>, climb the <code>/bt</code> Battle Tower, and join raids with <code>/raid</code>. Level your account, climb <code>/ranks</code>, level your fifteen <code>/skills</code>, and work the seasonal <code>/bp</code> Battle Pass for steady rewards.',
    cmds: ['/gym', '/bt', '/bp', '/skills'],
  },
  {
    title: 'Spend, gear up & breed',
    body:
      'Put your earnings to work. Spend <b>Orbs</b> on gacha banners with <code>/summon</code>, forge the seasonal <b>Arctis</b> set and check it with <code>/gear</code>, and buy permanent account upgrades with <code>/passive</code>. Right-click a Cobblemon pasture to start a breeding ranch — see <code>/ascbreed</code>. The more you play, the stronger your account gets, for good.',
    cmds: ['/summon', '/gear', '/passive', '/ascbreed'],
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
  // ⏸ HOLD — "The Creation Chain" news item is written and ready below, but the arena is not
  // armed on live (world/asc-raidboss/spawnpoints.json is []), so every summon is refused.
  // Restore this item AND the 'creation' patch-note entry once staff have run
  // `/ascraid creation arena`. The feature page (FEATURES.creation) stays published either way —
  // it documents the system without telling anyone to go and use it right now.
  // {
  //   tag: 'New Event',
  //   title: 'The Creation Chain — a second road to the box legends',
  //   body: 'Imprint your own <strong>Uxie, Mesprit and Azelf</strong> onto Nether Stars, forge the <strong>Red Chain</strong>, and summon <strong>Dialga, Palkia or Giratina</strong> as a Mythic raid the whole server can fight — and actually catch. Clear all three and a spare Chain becomes the <strong>Azure Flute</strong> for Arceus.',
  //   link: 'feature.html?f=creation',
  // },
  {
    tag: 'Patched',
    title: 'Raids, the Warzone fence and a trade you can trust',
    body: 'A single stale spawn pad had been <strong>silently stopping every raid on the server</strong> — fixed. The Warzone finally has a border, the ranked ladder stopped booking wins as losses, the Forge stopped duplicating armour, and <strong>/safetrade</strong> brings a scam-proof way to trade with a stranger.',
    link: 'patchnotes.html',
  },
  {
    tag: 'Season 2',
    title: 'Season 2 — Arctis is live',
    body: 'The gates are open. <strong>Arctis launched August 8</strong> on a fresh, pre-generated world with a new spawn city, rebuilt breeding, Pokémon fishing, the player Bazaar and a whole new interface. Everyone starts from zero — grab the CobbleAsia modpack from Discord and jump in.',
    link: 'guide.html',
  },
];

// =====================================================================
//  PATCH NOTES (patchnotes.html + landing preview). Player-facing only —
//  newest first. `type` per change is one of: new | improved | fixed.
// =====================================================================
const PATCHNOTES = [
  {
    date: '2026-08-14',
    tag: 'Patched',
    title: 'A raid outage, a ladder that booked wins as losses, and a trade you can trust',
    changes: [
      // ⏸ HOLD — the Creation Chain item is written and ready, but the arena is not armed on live
      // (world/asc-raidboss/spawnpoints.json is []), so every summon is refused. Un-comment this
      // AND the NEWS item above once staff have run `/ascraid creation arena`.
      // { type: 'new', text: '⛓ <strong>The Creation Chain — a second road to the box legends.</strong> Right-click your own <strong>Uxie, Mesprit and Azelf</strong> with a plain Nether Star to imprint them, fuse the three Charged Stars into the <strong>Red Chain</strong>, and summon <strong>Dialga, Palkia or Giratina</strong> as a Mythic raid at the Spear Pillar. Beat it and it is <strong>genuinely catchable</strong> for 60 seconds at level 85 — anyone who did 1% of the damage may throw, first ball wins. Clear all three and a spare Chain shift-right-clicks into the <strong>Azure Flute</strong> for Arceus. One Chain per player per week; one imprint per guardian, forever; and guardians must be <strong>self-caught</strong> — a traded one is refused, so check <code>/ascraid chain</code> before you go hunting stars. <a href="feature.html?f=creation">Full walkthrough here.</a>' },

      { type: 'fixed', text: '🐲 <strong>One stale spawn pad was silently stopping every raid on the server.</strong> The countdown kept announcing "next raid in ~5 minutes" and nothing ever appeared — for three hours, until players worked out something was wrong before we did. The server had exactly one configured raid pad, in a world raids aren\'t allowed to use any more — and correctly refusing that pad made the auto-spawner give up for the whole cycle instead of falling through to the Safari it should have used. A pad we can\'t use is now skipped rather than treated as the only option. <strong>Thank you to the players who kept saying "the raid never came" instead of assuming they\'d missed it</strong> — that\'s what got it found.' },
      { type: 'fixed', text: '🎁 <strong>Raid participation rewards were paying out a random subset every clear.</strong> Each reward on the participation list was rolled separately, so you\'d get some and not others — and because the coin payout is a single line on that list, it read as "the money specifically didn\'t pay" and looked intermittent rather than broken. It wasn\'t intermittent, it was rolling. <strong>Every participation reward now simply pays</strong> once you\'re past the 2% damage threshold. This was meant to have been fixed back in June; the fix was live in the code and switched off in the config the entire time.' },
      { type: 'improved', text: '⚔️ <strong>Joining a raid no longer makes the break window harder.</strong> The damage goal was measured against the boss\'s scaled HP, which grows with the number of participants — so every extra body that wasn\'t dealing damage raised the bar for everyone who was, and a full raid could be strictly harder to break than a party of three. The goal is now fixed at spawn and means the same thing at 15 players as at 3.' },
      { type: 'fixed', text: '🏆 <strong>The ranked ladder was booking some wins as losses.</strong> When a battle ended without Cobblemon reporting a winner, the watchdog assumed you\'d dodged — so a won bout whose result went missing was recorded as a defeat, which cost the win, the entry fee <strong>and</strong> a 48-hour cooldown on that seat. It now scores from what it actually watched happen: if the AI\'s side was wiped, that\'s a win. Bouts that die within a minute of starting are read as a broken battle rather than a dodge. Genuinely walking out of a real fight still counts as a loss.' },
      { type: 'fixed', text: '🥊 <strong>Gym battles stop freezing.</strong> Across four days of logs, <strong>74 of 146 gym battles</strong> stalled or wedged outright. Singles gym battles have been moved off the trainer-battle engine that was hanging them. A gym leader\'s team also no longer stays standing in the world when you disconnect mid-fight.' },
      { type: 'fixed', text: '⚡ <strong>Whitney\'s Normal gym was fielding Zeraora and Magnezone.</strong> Two Electric-types on the Normal seat, against an authored roster of six Normal-types. It had been half-edited at some point, which made every safety net read it as a deliberate staff roster and protect it — through every restart and every rotation. The authored six are back. All eight seats were checked; only that one was wrong.' },
      { type: 'fixed', text: '🛡️ <strong>The Forge could duplicate the item you were forging.</strong> Picking an item in the forge screen and then relogging handed you a second copy — repeatable on demand, once per relog. There was a second door too: with a pick still live, opening the fallback chest menu rendered your item as a real takeable stack, and confirming there never consumed the original. Both are closed. <strong>If you have gear you know came from this, hand it in — we would much rather sort it out with you than find it later.</strong>' },
      { type: 'new', text: '🤝 <strong><code>/safetrade</code> — direct trades that can\'t be switched at the last second.</strong> Both sides put up what they\'re offering, both press ready, and <strong>changing anything resets both readies</strong>, so nothing can be swapped out after you\'ve agreed. There\'s a countdown, a disconnect cancels it, and the swap is atomic — it either happens completely or not at all. Also on <code>shift + right-click</code> a player, with <code>/trade</code> as an alias. <code>/tradehelp</code> has the checklist.' },
      { type: 'new', text: '🔍 <strong>Two commands for checking who you\'re dealing with.</strong> <code>/playtime check &lt;player&gt;</code> and <code>/bal &lt;player&gt;</code> both work on <strong>offline players</strong> — which is the case that matters, since the account you\'re asked to trust often isn\'t the one standing in front of you. Playtime reports active time with AFK stripped out, plus account age. Neither is staff-only: a scam-prevention tool you have to ask staff to run for you prevents nothing.' },
      { type: 'improved', text: '💎 <strong>Gems are purchase-only now.</strong> <code>/gem convert</code> (coins → Gems) and <code>/convert gems tokens</code> are both retired. The price on the coin route was steep enough that few people used it, which is exactly why it was easy to forget it was there — and it meant the premium economy had a coin-funded back door standing open the whole time. Gems now come from the store and from deliberate grants only. Both commands still answer and explain themselves rather than reading as "unknown command". <strong>Gem-bought content can\'t be traded or listed</strong>, which is the rule this makes real.' },
      { type: 'improved', text: '🎁 <strong>Seasonal crates are gear crates, and every key now pays.</strong> The SolForge and Arctis crates were handing out filler roughly 94% of the time. They\'ve been rebuilt on a flat table — <strong>2% a Level V Relic Piece, 68% seasonal gear, 30% a seasonal bonus item</strong> — so a specific Level V piece goes from about 1 in 2,400 keys to <strong>1 in 650</strong>, and any Level V piece to 1 in 50. The Pokémon moved to the Seasonal Pokémon Crate, and the four game-warping dex modifiers came out entirely.' },
      { type: 'fixed', text: '💰 <strong>Skills had stopped paying coins entirely.</strong> Every mcMMO payout had been failing silently since the last restart — you simply weren\'t paid, and nothing told you, because the failure only ever appeared in the server log. Fixed, and we\'ve swept the other five mods that share the same plumbing.' },
      { type: 'fixed', text: '🥚 <strong>Two ranches side by side were deleting each other\'s Pokémon.</strong> Each ranch clears stray display Pokémon near it, but it only recognised its own two — so ranches built in a row sat killing and respawning each other\'s parents every five seconds, which looked like duplication and was genuinely laggy. An <strong>empty</strong> pasture was the worst case: it recognises nothing, so one unused ranch could wipe every occupied one within twelve blocks. Verified on live before and after — 7 of 22 stocked ranches were affected, every one of them in a cluster.' },
      { type: 'fixed', text: '🧭 <strong>A failed teleport now tells you the thing that actually works.</strong> One player spent four minutes stuck in the Safari because every <code>/spawn</code> put him straight back, while the message told him to report it to staff. The fix was a single relog the whole time. When a teleport fails this specific way it now says so.' },
      { type: 'improved', text: '🚧 <strong>The Warzone finally has a fence.</strong> Crossing the boundary used to just print "You left the Warzone" and let you keep going — straight off the edge into raw terrain, and out of any fight you were tagged into. You now get bounced back inside. Leaving properly by <code>/spawn</code>, <code>/home</code> or a warp still works exactly as before.' },
      { type: 'improved', text: '🚫 <strong>Repels now stop random wild encounters.</strong> Repels and the new roadside encounters were two systems that had never been introduced to each other, so a Max Repel — up to 50,000 coins — did nothing about the thing most players bought it for. It does now.' },
      { type: 'fixed', text: '🛒 <strong>The skills shop stopped selling ten items the server refuses to place.</strong> Ten of the fourteen blocks on the anti-lag blocklist were also sold as Intellect unlocks, so players were grinding for, and paying for, things that could never be put down.' },
      { type: 'fixed', text: '📖 <strong><code>/pwiki</code> was quietly answering for the wrong form.</strong> Asking for <code>Landorus-Therian</code> got you Incarnate\'s page — including its hidden ability, which is a different ability. <strong>115 forms in the dex have a hidden ability that differs from their base form</strong>, and types and stats diverge too. The page now tells you when it has fallen back to the base species.' },
      { type: 'fixed', text: '🗝️ <strong>Vote Keys pulled from the Origin crate wouldn\'t open the Vote crate.</strong> Two spellings of the same crate name disagreed, so a key minted inside the Origin crate was inert in your hand with nothing explaining why. Any key you\'re still holding works now.' },
      { type: 'fixed', text: '💳 <strong>Store purchases can no longer be delivered twice — or lost.</strong> Roughly 4% of our calls to the store were timing out on connect, and a failed delivery confirmation meant the next check re-ran the purchase: a duplicate rank or Legendary Core. Every completed donation is now written to a ledger before it can be re-run, and dropped connections retry instead of giving up.' },
      { type: 'improved', text: '🛡️ <strong>Clan raid bosses, twice over.</strong> A clan whose raid turn collided with the public rotation silently forfeited and waited a full six hours for another chance — it now retries in five minutes with that clan still first in line. And the server now hears about it: everyone gets a line naming the clan and its colour, with <strong>no coordinates and no way to warp in</strong>. It\'s a "look what they\'re dealing with", not an invitation.' },
      { type: 'fixed', text: '🧰 <strong>Odds and ends.</strong> An item on your cursor survives a teleport instead of vanishing. A single Trial Chamber vault was stopping an entire chunk from saving. Raid dens stopped paying Elemental Essence they were never meant to. A level-up save that failed no longer loses your data. Dropped Discord chat lines retry instead of disappearing. Banners with no featured art now showcase their own rewards instead of rendering blank, and the seasonal crate holograms spell their own names.' },
    ],
  },
  {
    date: '2026-08-11',
    tag: 'Launch Week',
    title: 'Launch week — the first wave of Season 2 fixes',
    changes: [
      { type: 'fixed', text: '🩹 <strong>The server crashes are fixed.</strong> Two separate things were freezing the server for a full minute at a time and getting it killed: <code>/rtp</code> waiting on terrain to generate, and a Pokémon being sent out in a battle doing the same thing. Both now check whether the ground is there instead of stopping the server until it is. If you lost anything to one of those crashes, open a ticket.' },
      { type: 'improved', text: '⚔️ <strong>Early gyms stop out-investing a legal team.</strong> Gym seats 1 and 2 were fielding fully EV-trained, flawless-IV squads on Choice Bands at level 20 — a fair team simply could not match that. Those seats now drop their damage items, shed their EVs and cap IVs at 20. Species, levels and movesets are unchanged, and survivability items like Eviolite stay: an early gym should still beat a misplay, it just shouldn\'t one-shot you.' },
      { type: 'improved', text: '🔓 <strong>Skill gates opened up.</strong> <strong>Hoppers, brewing stands, enchanting tables and ender chests are ungated entirely</strong> — basic things you need on day one shouldn\'t have a price. <strong>All diamond gear, armour and tools are ungated too</strong>; netherite is now the only gated tier. Redstone became a ladder instead of a wall (simple parts at Intellect 6, wiring at 10, pistons and observers at 14), with only TNT still needing both stats maxed.' },
      { type: 'fixed', text: '🎣 <strong>The Fisher job counts the fishing this server actually has.</strong> Fisher quests were tracking a kind of catch Season 2 doesn\'t ship, so the job was unworkable — every cast now counts, and the quest text says what it counts. Note that the <strong>Poké Rod is not a starter item</strong>: it comes off casts at roughly 1 in 100, and it isn\'t in the shop.' },
      { type: 'fixed', text: '🥚 <strong>Breeding: three real problems.</strong> Releasing a Pokémon from a pasture left its body standing there forever, which piled up. <strong>Hatching an egg now counts toward your rank</strong> and toward the <strong>Breeding skill</strong>, which had no source of XP at all — so the skill was unlevellable for everyone who tried.' },
      { type: 'improved', text: '💰 <strong>"Buy-only" now actually means buy-only in <code>/shop</code>.</strong> Over a thousand catalogue entries that were never meant to be sold back — TMs, Z-crystals, mega rings, form items and the Orb exchange — were quietly paying out anyway, which made a few of them a money printer. They no longer pay. Sell those on <code>/bazaar</code>, where they\'re worth real value. A refused sale now tells you <em>which</em> rule refused it instead of one generic line.' },
      { type: 'new', text: '🔍 <strong><code>/shop</code> is searchable from the front door.</strong> The only search used to live inside a category, so you had to guess which of the 21 boxes stocked the thing you wanted. The landing screen now has <strong>Search all items</strong> across the whole 1,700-item catalogue, and every result names the category it came from.' },
      { type: 'fixed', text: '🧬 <strong>Hidden Abilities are pinned the moment you catch them</strong>, not at your next login. A HA Pokémon caught mid-session could be normalised back to its regular ability before the old repair ever got a chance to run — which is why HA mons "stopped being HA" overnight. ⚠️ This protects what you catch from now on; it can\'t restore ones already reverted, since the old ability was never recorded anywhere.' },
      { type: 'fixed', text: '🏆 <strong>Every PvP win feeds the Battle Pass</strong>, not just Elite Four ladder bouts — ranked and casual wins were being dropped on the floor. Friendly duels also can\'t be started across dimensions any more, which used to strand both players.' },
      { type: 'fixed', text: '📖 <strong><code>/pwiki</code> was promising something <code>/legend</code> never did.</strong> The Conditions block (time, weather, moon phase) describes <strong>natural spawns only</strong> — <code>/legend</code> rolls ignore all of it, which is why a "Time: noon" legendary could turn up at midnight. Legendary and Mythical entries now say so on the page.' },
      { type: 'fixed', text: '🧭 <strong>The starter questline tells you where the Job Board is.</strong> Quest 4 asked you to take a job without saying where to do it, which is a hard stop if you don\'t already know the spawn city.' },
      { type: 'improved', text: '❄️ <strong>Crates wear the season now.</strong> Every crate on the server was stuck wearing SolForge\'s chest and key — Arctis crates get their own frost art and ice gradient. Crate rewards also draw the <strong>real gear art</strong> in your pull history and previews instead of the plain base item, and command rewards no longer reveal as a blank name card.' },
      { type: 'fixed', text: '✨ <strong>Cosmetics can\'t be bought while they\'re switched off.</strong> Particle cosmetics have been disabled server-wide since the beta, but the shop was still happily charging <strong>15–300 million coins</strong> for one — and rendering nothing for anybody. Buying is now blocked with an honest message, and no, this doesn\'t turn cosmetics back on yet.' },
      { type: 'improved', text: '📜 <strong><code>/rules</code> carries the no-alt rule.</strong> One account per player; alt accounts are banned on sight. Sharing a connection with someone in your house? Open a ticket first and you\'ll be fine.' },
      { type: 'fixed', text: '🎛️ <strong>Odds and ends.</strong> <code>/sidebar</code> can finally hide the CobbleAsia panel (it was only ever hiding the vanilla one behind it). The <strong>Legendary Core preview reaches everyone</strong> — players on chest menus used to shatter one blind with no idea what was in it.' },
    ],
  },
  {
    date: '2026-08-08',
    tag: 'Season 2',
    title: 'Season 2 — Arctis is live',
    changes: [
      { type: 'new', text: '❄️ <strong>Arctis has begun.</strong> The Age of Eternal Winter is open to everyone on a fresh, pre-generated world with a new spawn city. Every account starts from zero — coins, Orbs, Pokémon, gear, levels and claims. Your <strong>donator rank</strong> and <strong>Season Vault</strong> carried over untouched.' },
      { type: 'new', text: '🖥️ <strong>The CobbleAsia modpack is required to join.</strong> Season 2 runs on a custom interface and the client mod ships in the pack — grab it from Discord before you connect. First join asks you to <code>/register &lt;password&gt;</code>, then <code>/login &lt;password&gt;</code> each time after.' },
      { type: 'new', text: '⚒️ <strong>Arctis is the season\'s Forge set</strong> — frost-forged gear with icy passives and the Domain of Arctis set bonus, plus eight signature frozen Pokémon led by Kyurem and Dialga. SolForge becomes a legacy set: keep it and play it, but no new keys or shards.' },
      { type: 'improved', text: '🩹 <strong>Everything the Open Beta turned up has been patched</strong> — well over a hundred fixes across dungeons, Safari, raid bosses, the Forge, jobs, breeding, fishing, crates, GTS and the Bazaar. Thank you to everyone who reported.' },
    ],
  },
  {
    date: '2026-08-05',
    tag: 'Schedule',
    title: 'The Open Beta is done — Season 2 launches August 8',
    changes: [
      { type: 'new', text: '🏁 <strong>The Open Beta is finished.</strong> Five days, dozens of reports, and well over a hundred fixes across every major system. Thank you to everyone who logged in, pushed on things and wrote it up — the list below is your list.' },
      { type: 'new', text: '🎮 <strong>Today is the last day of the beta.</strong> The server is still open — play it out.' },
      { type: 'new', text: '🧹 <strong>The wipe lands August 6</strong>, exactly as promised at the start of the beta. Coins, Orbs, Pokémon, gear, levels and land claims all reset so nobody starts the season ahead. Your <strong>donator rank</strong> and <strong>Season Vault</strong> are untouched.' },
      { type: 'new', text: '🚀 <strong>Season 2 officially launches August 8</strong> — one day earlier than the original August 9 date. The beta gave us what we needed, so there\'s no reason to make you wait. Bring the CobbleAsia modpack; the client mod is required to join.' },
    ],
  },
  {
    date: '2026-08-05',
    tag: 'Open Beta',
    title: 'Open Beta bug sweep — everything you reported, fixed for launch',
    changes: [
      { type: 'fixed', text: '<strong>A dupe exploit is closed.</strong> A Cobblemon dupe doing the rounds on YouTube desyncs the PC and trade systems so one Pokémon ends up in two slots, then sells the copies on repeat. Both cash-out paths — <code>/gts</code> listings and trades — now run an integrity check and refuse anything that fails it. Nothing you legitimately own is affected.' },
      { type: 'fixed', text: '<strong>Area Zero deaths were free.</strong> You could die to a Paradox boss, <code>/back</code> straight to your body with all your gear, and keep hitting the boss while still respawn-invulnerable — chip-killing anything with no armor. <code>/back</code> no longer returns you into Area Zero, and the spawn grace now drops the moment you attack.' },
      { type: 'fixed', text: '<strong>Raid bosses were spawning in the survival world</strong> — including a level 100 Kyurem in the open, and one inside a clan\'s private claim that anyone could <code>/ascraid join</code> to teleport into. Raids are Safari-only again, on every spawn path, including the clan raid boss. Defeating a boss also stopped reporting your damage as "1".' },
      { type: 'fixed', text: '<strong>Safari was eating your bosses.</strong> One <code>/endbattle</code> locked you out of every safari boss until the next restart; totem bosses, Alphas and Dynamax raids spawned underground about half the time; and leaving Safari could strand you on a bedrock pillar in the middle of nowhere. All three fixed, plus every region in the Safari screen draws its own block again instead of plain grass.' },
      { type: 'fixed', text: '<strong>Dungeons: the boss is mandatory again.</strong> A castle could be cleared without ever entering it. Being ejected from a locked area could also drop you <em>under</em> the dungeon, and SolForge tiles in <code>/dungeon shop</code> rendered as blank paper. Boss chambers now handle multiple parties properly, too — the kill credits the party that did the most damage instead of one group claiming the room.' },
      { type: 'fixed', text: '<strong>Crate rewards could vanish.</strong> If the server stopped during the reveal animation, the key was consumed and nothing came out — the spin now survives a restart. Bonus Vote Keys from PokéHunt turn-ins silently failed to deliver, crate previews showed obtainable rewards at 0%, and the Poké Spin could roll Paradox Pokémon it was never meant to.' },
      { type: 'fixed', text: '<strong><code>/summon</code> never worked for anyone but staff</strong> — vanilla Minecraft owns that command name, so the banner alias could never fire for a normal player. Every menu, hint and reward message now points at <code>/ascsummon</code>, which is the one that actually works.' },
      { type: 'fixed', text: '<strong>GTS: paid listings that delivered nothing</strong> are fixed, and non-Pokémon listings show their real item icon instead of a cardboard box.' },
      { type: 'fixed', text: '<strong><code>/shop</code> was selling two tiles literally named "Air"</strong> — one for 2,500 Tokens, one for 500,000 Coins. Gone. <code>/vault</code> also stopped refusing enchanted items, splicers, raid pouches and enchanted books it could store perfectly well.' },
      { type: 'fixed', text: '<strong>The starter questline hard-stopped at 10/11.</strong> "Claim your first paycheck" pointed at a command that can no longer pay, so nobody could finish it — the step now tracks the real Job NPC claim, and the questline explains what your job actually counts as work. Running <code>/asctut start</code> again after finishing also paid the whole thing out a second time; it can only pay once now.' },
      { type: 'fixed', text: '<strong>Jobs quests were paying for the wrong things.</strong> Fisher dailies and weeklies counted any catch at all, not just Poké Rod catches. Job quest payouts were also raised to <strong>25,000 per daily</strong> and <strong>125,000 per weekly</strong> — a full day of quests was worth less than a single crate key.' },
      { type: 'fixed', text: '<strong>Pokédex research quests paid nothing.</strong> Every research reward since launch announced a coin payout and moved no money. They pay now.' },
      { type: 'fixed', text: '<strong>Vote parties sat banked.</strong> When the player who arrived to clear the minimum-player gate joined, the check counted one player short and the party waited for another vote. It fires on the join now, and a party waiting on players says so in chat instead of failing silently.' },
      { type: 'fixed', text: '<strong>The forge bench is a real screen.</strong> <code>/forge</code> was the last menu still running on an old chest GUI — you now pick the item to upgrade out of your inventory instead of dragging it into a slot.' },
      { type: 'fixed', text: '<strong>Skills: two real problems.</strong> You could fly an elytra without meeting the Dexterity gate, and Vitality was priced in half-hearts — "+2.0 max health" grew your bar by exactly one heart. Both corrected.' },
      { type: 'fixed', text: '<strong>The dungeon HUD and sidebar never painted</strong>, and long objective lines ran off the right edge of the screen. Both were client-side and are fixed in the modpack\'s client mod — <strong>update your pack before launch</strong>. Custom screens also draw the correct custom-model icons now instead of falling back to base items.' },
      { type: 'fixed', text: '<strong>Battle Tower:</strong> the 60,000-Token Legendary Core was handing over a plain Nether Star, and a doubles run got stuck when you were down to your last Pokémon.' },
      { type: 'fixed', text: '<strong>Odds and ends:</strong> level grinder Pokémon leaked into the open world; NPCs stared due east instead of at players; the clan passives panel was unreadable; the <code>/legend</code> menu had a Recycler button that only printed an error; releasing a fishing catch could take the fish and pay nothing.' },
      { type: 'improved', text: '<strong>The Season 2 coin nerf is back in place.</strong> The wipe regenerated several config files from their pre-nerf defaults, so jobs, raid bosses and the Solar Pass spent the first days of the beta paying full Season 1 rates. All of it is re-applied in code, so it survives the next wipe too.' },
    ],
  },
  {
    date: '2026-07-30',
    tag: 'Season 2',
    title: 'Season 2 is built — everything landing for the Open Beta',
    changes: [
      { type: 'new', text: '<strong>One world, one border.</strong> Season 2 runs on a single freshly-generated overworld capped at <strong>10,000 × 10,000</strong> — 5,000 blocks out from spawn in every direction — and every chunk inside it is <strong>pre-generated</strong>, so exploring doesn\'t lag and nobody walks into raw terrain. The new spawn city is <strong>Dragonforstborn</strong>; <code>/spawn</code> takes you there and <code>/hub</code> still gets you to the old lobby.' },
      { type: 'improved', text: '<strong><code>/rtp</code> is now per-biome.</strong> It no longer picks a world — it picks a biome. Open <code>/rtp</code> for the picker (it shows every biome on this map and how much of the world it covers), or type it straight: <code>/rtp cherry_grove</code>, <code>/rtp desert</code>, <code>/rtp random</code>. Every trip is a genuinely random spot inside that biome, not the nearest one everybody else got. Oceans and cave-only biomes are excluded so you never land swimming or buried.' },
      { type: 'new', text: '<strong>A nine-step Starter Questline.</strong> New trainers now get walked through the server by playing it — craft a ball, catch something, spend your first Orb on the Starter Banner, claim land, take a job, collect a paycheck, buy something. Open it any time with <code>/quest</code>.' },
      { type: 'new', text: '<strong>Real menus at last.</strong> Over 20 mods have been rebuilt on a proper custom interface — actual panels, tabs, progress bars and animated reels instead of chests full of item icons. Banner pulls, the Battle Pass Shiny Spin, the Legend roulette and the Vote Party wheel all animate properly now. This renders through our client mod, which ships in the modpack and is <strong>required to join</strong>.' },
      { type: 'new', text: '<strong>Breeding has been rebuilt from scratch</strong> as an in-house ASC system. Right-click any <strong>Cobblemon pasture</strong> to turn it into a ranch, assign two parents, then build the environment around it — the blocks you place have to match your parents\' <strong>types</strong>, Pixelmon-style, and environment strength sets your egg speed. Eggs are items you <strong>walk to hatch</strong>, and hovering one shows its IVs, nature, ability, egg moves and size before it cracks. Full mainline inheritance (Destiny Knot, power items, Everstone, Masuda, egg moves, ball, size), Kuro\'s Hourglasses to skip the timer, a Shiny Charm held item, and <strong>Ditto × Ditto for a completely random species</strong>. <code>/ascbreed</code>' },
      { type: 'new', text: '<strong>Fishing 2.0 — you reel in Pokémon now.</strong> Every cast pulls up a water or coastal species: left-click to claim it to your party or PC, right-click to release it for coins. <strong>Alphas</strong> surface at 0.5% on uncommon-and-up, get announced server-wide and pay <strong>1 Orb</strong> (5/week cap). Tournaments run every two hours, and the <strong>Mystery Wormhole</strong> opens on weekends with double rare rates in one announced biome. <code>/fish</code>' },
      { type: 'new', text: '<strong>Vote Party.</strong> Server votes now build toward a party — when it fires, every online trainer\'s name goes on a roulette, the whole server watches it spin, and whoever it lands on gets a <strong>guaranteed Legendary spawn</strong>. Just be online. <code>/voteparty</code>' },
      { type: 'new', text: '<strong>Wish History</strong> is live on the banners. Every pull you\'ve ever made is recorded — see your full log, what you got, and exactly how far you are from pity. The rotation countdown is now live-ticking too. <code>/ascsummon history</code>' },
      { type: 'improved', text: '<strong><code>/bazaar</code> is where you sell now.</strong> The player order book is open: instant buy/sell, or place your own buy orders and sell offers and wait for someone to cross them. Orders are escrowed so fills are always honoured, and payouts wait for you in Claim All if you\'re offline. In exchange, <strong><code>/shop</code> buyback dropped to 2%</strong> — the shop is a dump bin, players are the market.' },
      { type: 'improved', text: '<strong>Jobs: you can finally see your quests.</strong> <code>/jobs</code> now opens with <strong>JOBS</strong> and <strong>MY QUESTS</strong> tabs — accepted quests with progress bars, what\'s claimable, and this rotation\'s board for every job you\'re in. <code>/job quests</code> prints the same in chat. Accepting and claiming still happen at the NPC.' },
      { type: 'improved', text: '<strong>Coin faucets cut about 60% across the board</strong> — jobs, fishing, hunts, the global hunt, Area Zero and raid bosses, contracts, bingo, daily login, playtime and the Solar Pass. Donator <strong>kit coin payouts</strong> were scaled to match, but the keys, Cores, candy and balls in every paid kit are untouched. The <strong>free kit ladder got buffed instead</strong> — about 50% more items, since free kits pay in gear rather than coins. Competitive payouts (gyms, PvP ladder, dungeons), voting and the casino are all unchanged.' },
      { type: 'improved', text: '<strong>The Legend bar is a manual two-roll roulette.</strong> Nothing fires on its own any more — fill your bar, then pull the trigger yourself with <code>/legend roll</code>. Roll one is a <strong>25% chance</strong> at Fate; hit it and roll two spins across every Legendary eligible where you\'re standing. Miss and the wheel stops there.' },
      { type: 'fixed', text: 'The Battle Tower command is <code>/bt</code> (or <code>/ascbt</code>) — the old dev-era <code>/bts2</code> literal has been retired now that there\'s only one tower.' },
    ],
  },
  {
    date: '2026-07-25',
    tag: 'Legendaries',
    title: 'Season 2: legendary hunting goes personal',
    changes: [
      { type: 'new', text: 'The shared <strong>Global Energy</strong> bar is retired. From Season 2, every player has their own <strong>Legend bar</strong> — fill it, and at <strong>100%</strong> you roll a <strong>25% chance</strong> for a Legendary to spawn <strong>for you</strong>. Win or lose, the bar then resets to 0%. No more waiting on the whole server to fill one bar, and no more watching someone else get the spawn you helped pay for. <code>/legend</code>' },
      { type: 'new', text: 'Fill it through <strong>Daily &amp; Weekly Quests</strong>, <strong>PvP wins</strong>, and defeating <strong>Alphas &amp; Paradox</strong> Pokémon, with <strong>Jobs</strong> and your usual catching, training, PokéHunts, Bingo and Battle Tower play chipping in. Every activity is <strong>capped</strong>, so no single grind can fill the bar on its own — you get there by playing across the server.' },
      { type: 'new', text: 'Your roll respects <strong>where you are</strong>. Biome, time of day and weather all matter, exactly as <code>/pwiki</code> describes them. Standing somewhere no Legendary can appear <strong>holds</strong> your full bar instead of wasting it — you\'ll be told to move, and you lose nothing.' },
      { type: 'improved', text: '<strong>Box legendaries are out of the wild spawn pool.</strong> Kyurem, Rayquaza, Mewtwo, Zacian, Koraidon and the rest of the box-art legends can no longer be rolled from a Legend bar. Every other Legendary and Mythical is still in.' },
    ],
  },
  {
    date: '2026-07-22',
    tag: 'Season 2',
    title: 'Revealed: Season 2 — ARCTIS, an age of Eternal Winter',
    changes: [
      { type: 'new', text: 'When Season 1 closes on <strong>July 26</strong>, <strong>Season 2 — Arctis</strong> begins — Open Beta <strong>August 1</strong>, official launch <strong>August 9</strong>. An <strong>Eternal Winter</strong> settles over Cobble Asia: an ancient frozen kingdom, aurora skies, crystal and permafrost, and the primordial cold of <strong>Kyurem</strong>. The whole site and server have been reforged in frost to match — new logo, new look, new age. Bundle up.' },
    ],
  },
  {
    date: '2026-07-22',
    tag: 'Arctis',
    title: 'Season 2 preview: the Arctis frozen gear set + signature Pokémon',
    changes: [
      { type: 'new', text: 'A new <strong>Arctis</strong> gear season is coming to the Forge — frost-forged <strong>armor, weapons and tools</strong> (Frostfang, Rimecleaver, Icebreaker and more) with icy passives that can freeze foes, boost Ice- &amp; Fairy-type catches, and scale all the way to <strong>Overmax</strong>. Complete the set for the <strong>Domain of Arctis</strong> bonus. <strong>SolForge</strong> gear stays on as a Season 1 legacy set. <code>/gear</code>' },
      { type: 'new', text: 'Eight signature <strong>Arctis Pokémon</strong> — frozen ultimate forms led by <strong>Arctis Kyurem</strong> and <strong>Arctis Dialga</strong> — headline the new roster, each with its own defining frost ability and signature move.' },
    ],
  },
  {
    date: '2026-07-18',
    tag: 'Schedule',
    title: 'Season 2 schedule — Season 1 ends July 26, Season 2 launches August 9',
    changes: [
      { type: 'new', text: '<strong>The end-of-Season-1 and Season-2 launch schedule is finalized.</strong> We’re taking extra time to test and polish so Season 2 launches in the best possible state.' },
      { type: 'new', text: '🏁 <strong>Season 1 last day — July 26.</strong> Season 1 officially concludes; make sure to finish anything you’d like to accomplish before then.' },
      { type: 'new', text: '🔧 <strong>Maintenance &amp; Season 2 prep — July 27–31.</strong> The server is offline while we prepare the update, run maintenance and finalize all new systems.' },
      { type: 'new', text: '🧪 <strong>Open Beta Test (OBT) — August 1–6.</strong> Everyone’s welcome to help test the revamped features, new mechanics and balance. All OBT progress is wiped before release, and rates may be temporarily increased to test progression more efficiently.' },
      { type: 'new', text: '🛠️ <strong>Bug fixes &amp; final prep — August 7–8.</strong> We review OBT bug reports, fix critical issues and make final balance adjustments before launch.' },
      { type: 'new', text: '🚀 <strong>Official Season 2 launch — August 9.</strong> Season 2 officially begins! A huge thank you to everyone who supported Season 1 — see you in Arctis. ❤️' },
    ],
  },
  {
    date: '2026-07-10',
    tag: 'Season Vault',
    title: 'New: the Season Vault — carry a few things across the wipe',
    changes: [
      { type: 'new', text: 'A brand-new <strong>Season Vault</strong> keeps a handful of your things safe from eco wipes, Poké wipes and season resets — open it with <strong>/svault</strong> (alias <code>/seasonvault</code>). Store <strong>legendary &amp; mythical Pokémon</strong> and <strong>SolForge Pokémon</strong>, plus items and <strong>SolForge gear</strong>; how much you can keep grows with your donator rank. A few rules keep it fair — no fusions or Manaphy on the Pokémon side, and dex modifiers, Master &amp; Origin Balls and shulker boxes can’t be stored. <code>/svault</code>' },
    ],
  },
  {
    date: '2026-07-10',
    tag: 'Event',
    title: 'New: END OF THE WORLD — the Season 1 finale',
    changes: [
      { type: 'new', text: 'Season 1 is going out with a bang. <strong>Global Energy is now unstable</strong> — a legendary can <strong>surge at any time</strong> instead of waiting on a fixed threshold, so keep a party ready at all times. The finale runs until the season wraps up on <strong>July 26</strong>.' },
    ],
  },
  {
    date: '2026-07-08',
    tag: 'Dungeons',
    title: 'Improved: clear grades reworked + a SolForge Key on every clear',
    changes: [
      { type: 'improved', text: 'Dungeon clears were regraded — the top <strong>S+</strong> rank now takes a sub-15-minute run — and <strong>every grade now drops a SolForge Key</strong>, so every clear moves you toward SolForge gear. <code>/dungeon</code>' },
    ],
  },
  {
    date: '2026-07-08',
    tag: 'Dungeons',
    title: 'Fixed: the Twin boss no longer freezes the fight',
    changes: [
      { type: 'fixed', text: 'The Twins’ finale could lock up mid-fight on the old ritual step. That step is gone — it’s now a clean <strong>twin-link + orb</strong> encounter that plays through without stalling. Totems also work again in every dungeon. <code>/dungeon</code>' },
    ],
  },
  {
    date: '2026-07-08',
    tag: 'SolForge',
    title: 'Improved: every SolForge piece comes fully enchanted',
    changes: [
      { type: 'improved', text: 'All SolForge gear now carries its <strong>full enchant set</strong>, and pieces already in circulation were topped up automatically — no more half-enchanted drops. A glitch that wiped a piece’s gradient name when enchanting it on an anvil is fixed too. <code>/gear</code>' },
    ],
  },
  {
    date: '2026-07-07',
    tag: 'Skills',
    title: 'New: McMMO-style Skills — thirteen skills that level as you play',
    changes: [
      { type: 'new', text: 'A whole new progression system landed: <strong>13 skills</strong> that level on their own as you play — five gathering (Mining, Woodcutting, Excavation, Herbalism, Fishing), four combat (Swords, Axes, Unarmed, Archery) and four utility (Taming from catching Pokémon, Acrobatics from surviving falls, Repair, Alchemy). Each climbs from 0 to <strong>1000</strong>. Your <strong>Power Level</strong> is the sum of them all and shows when players hover your name. Passing 25/50/75/100 in a skill earns <strong>Novice → Master</strong> titles (hover-only, never chat spam), the server is pinged every 50 levels, and every 10 levels pays a <strong>coin milestone</strong>. Track where you rank on the <strong>Power Level leaderboard</strong>. Open it all with <code>/skills</code>.' },
    ],
  },
  {
    date: '2026-07-07',
    tag: 'Mail',
    title: 'Fixed: crate keys and rewards can no longer be lost to a full inventory',
    changes: [
      { type: 'fixed', text: 'If your inventory was full when a <strong>crate key</strong> was granted or a reward was handed out, it could simply vanish. Overflow now goes to your <strong>/mail</strong> instead of dropping into the void, so you can always claim it later. <code>/mail</code>' },
    ],
  },
  {
    date: '2026-07-07',
    tag: 'Dungeons',
    title: 'Fixed: Arena chamber sealing quirks',
    changes: [
      { type: 'fixed', text: 'Arena chambers could seal a player into a spot they couldn’t stand in, and a second party could get tangled up in someone else’s sealed arena. Seals now drop you on solid ground and only admit <strong>your own engaging party</strong>. <code>/dungeon</code>' },
    ],
  },
  {
    date: '2026-07-06',
    tag: 'SolForge',
    title: 'Coming soon: Ceruledge joins the SolForge lineup',
    changes: [
      { type: 'new', text: 'A <strong>Steel/Fighting Ceruledge</strong> is joining the SolForge set as its sixth signature Pokémon, alongside Marshadow, Rayquaza, Hydreigon, Sigilyph and Armarouge. Its custom look is still being finished off, so keep an eye out for it dropping into the SolForge lineup soon.' },
    ],
  },
  {
    date: '2026-07-06',
    tag: 'SolForge',
    title: 'New: Solar Ascension — forge your own SolForge gear',
    changes: [
      { type: 'new', text: 'Once you’re wearing a <strong>4-piece</strong> SolForge set you can forge more of the set yourself: spend <strong>Solar Shards</strong> at <strong>/ascforge solforge</strong> to craft a fresh SolForge gear piece, no crate required. A new way to complete the set through pure play. <code>/gear</code>' },
    ],
  },
  {
    date: '2026-07-06',
    tag: 'Dungeons',
    title: 'Improved: bigger parties, bigger runs',
    changes: [
      { type: 'improved', text: 'Party dungeon runs are rebalanced so a full squad actually feels like one — <strong>mob spawns scale with party size</strong> instead of thinning out, kill rewards were bumped, and the clear payout rose from <strong>100k to 150k coins</strong>. Rallying six players is now clearly worth it. <code>/dungeon</code> · <code>/party</code>' },
    ],
  },
  {
    date: '2026-07-03',
    tag: 'Dungeons',
    title: 'New: party Set Bonuses — your six Cobblemon are a gear set',
    changes: [
      { type: 'new', text: 'Your dungeon party doubles as an MMO-style gear set. Share an <strong>elemental type</strong> across <strong>2, 4 or 6</strong> of your six Cobblemon and you unlock tiered <strong>Set Bonuses</strong> that stay active for the whole run — stronger hits, damage resistance, thorns, knockback and more. <strong>Dual-types count for both</strong> of their types, so a clever team can stack several bonuses at once. Preview what your current party grants with <strong>/dungeon setbonus</strong> (works outside a run too), and watch the active bonuses on the dungeon sidebar. <code>/dungeon setbonus</code>' },
    ],
  },
  {
    date: '2026-07-03',
    tag: 'Bingo',
    title: 'Improved: Catch Bingo is a relaxed weekly card again — and it pays itself',
    changes: [
      { type: 'improved', text: 'By popular request, <strong>/bingo</strong> is back to a <strong>weekly</strong> card instead of a 6-hour sprint — and rewards now <strong>pay out automatically</strong> the instant you complete a row or the full card, with no claim button and no rush. The 16-species roll and every bonus it feeds are unchanged; it’s just a cozy side-goal you chip away at over the week again. <code>/bingo</code>' },
    ],
  },
  {
    date: '2026-07-03',
    tag: 'Poké Hunts',
    title: 'Improved: the hardest Poké Hunts got less punishing',
    changes: [
      { type: 'improved', text: 'The <strong>Hard, Insane and Master</strong> hunt tiers are softened back toward their older difficulty: <strong>nature requirements are gone</strong> (an uncounterable 1-in-25 roll with no server Synchronize), Master no longer demands a <strong>Hidden Ability</strong>, and the single-stat and total IV floors are lowered across the board. Payouts, timers, entry fees and the poké-ball / fully-evolved gates are unchanged. <code>/hunt</code>' },
    ],
  },
  {
    date: '2026-07-03',
    tag: 'Dungeons',
    title: 'New: mob-wave Arena chambers + an on-screen objective bar',
    changes: [
      { type: 'new', text: 'Dungeons can now include <strong>Arena chambers</strong> — walk your whole party in and the room seals, then you fight <strong>five escalating waves</strong> of aggressive Pokémon (fodder, elites, and a scaled-up boss on the final wave) before it opens again. <code>/dungeon</code>' },
      { type: 'improved', text: 'Your <strong>current objective now shows on a boss bar</strong> at the top of the screen with a live progress gauge, so it’s no longer buried in chat. Sword-killing a dungeon mob also correctly counts toward kill objectives now — not just Cobblemon battles. <code>/dungeon</code>' },
    ],
  },
  {
    date: '2026-07-03',
    tag: 'Raid Boss',
    title: 'Improved: raid bosses now telegraph their weakness',
    changes: [
      { type: 'improved', text: 'A raid boss’s type weakness already rotates as it loses HP — now it’s actually <strong>visible</strong>. The raid boss bar shows the current <strong>⚠ WEAK: TYPE</strong>, and every phase change throws a center-screen title telling the whole raid what to bring next. No more spamming one move blind — you can read the fight. <code>/raid</code>' },
    ],
  },
  {
    date: '2026-07-03',
    tag: 'Quality of Life',
    title: 'Fixed: buying a PC box could always fail',
    changes: [
      { type: 'fixed', text: 'Buying an extra PC box (through <strong>/passive</strong>) could fail every single time with “couldn’t add a PC box right now — you were not charged.” The underlying box-resize call is fixed, so boxes now purchase and persist correctly. Anyone who hit the error was never charged. <code>/passive</code>' },
    ],
  },
  {
    date: '2026-07-02',
    tag: 'Gyms',
    title: 'Improved: every gym now runs on one stable battle engine',
    changes: [
      { type: 'improved', text: 'All gym battles — Singles and Doubles — now run through the same <strong>RCT</strong> engine Battle Tower uses, with the older AI kept only as an emergency fallback. This kills a whole class of mid-battle force-switch stalls. Singles gyms keep their Terastal ban, and a singles leader now appears as a humanoid NPC on the pad. <code>/gym</code>' },
      { type: 'improved', text: 'When the shared battle engine wedges, it now <strong>self-heals in seconds</strong> instead of minutes and stops throwing you into a dead engine while it recovers — so far fewer challenges get burned on a “no response from the battle engine” start. <code>/gym</code>' },
    ],
  },
  {
    date: '2026-07-02',
    tag: 'PvP',
    title: 'Fixed: base Kyurem is legal again in ranked & gyms',
    changes: [
      { type: 'fixed', text: 'Base <strong>Kyurem</strong> is National Dex OU, not Uber — it was being wrongly banned in Singles gym and ladder battles. It’s unbanned; only <strong>Kyurem-Black</strong> and <strong>Kyurem-White</strong> stay Uber-banned. <code>/pvp</code> · <code>/gym</code>' },
    ],
  },
  {
    date: '2026-07-01',
    tag: 'PvP',
    title: 'New: solo-queue AI fallback so you can climb off-peak',
    changes: [
      { type: 'new', text: 'Use <strong>/pvp queue</strong> and if no human match is found within 15 seconds you’ll battle an <strong>AI Trainer</strong> instead, so you can keep climbing toward Ultraball even when nobody’s online. AI wins pay reduced RP, don’t touch your win/loss record, and <strong>can’t promote you past Ultraball</strong> — Masterball stays strictly player-vs-player. <code>/pvp</code>' },
    ],
  },
  {
    date: '2026-07-01',
    tag: 'Fishing',
    title: 'Changed: fishing events run on a set schedule + rare fish are event-only',
    changes: [
      { type: 'improved', text: 'Fishing tournaments and the Mystery Tide no longer fire hourly — they now run on a <strong>fixed daily schedule</strong> (default 02:00, 07:00, 14:00 and 19:00 server time). The <strong>Mystery Tide</strong> is now a gamble: it names five candidate biomes but only <strong>one</strong> actually holds the tide, and there are <strong>no hints</strong> — fishing a wrong biome stays completely silent. <code>/fish</code>' },
      { type: 'improved', text: 'To stop around-the-clock macro farming, <strong>Legendary and Mythic fish now only bite during a live tournament window</strong>. Outside events the odds redistribute down to Epic-and-below. <code>/fish</code>' },
    ],
  },
  {
    date: '2026-06-28',
    tag: 'Ranks',
    title: 'New: Regional Dex tracks for every generation',
    changes: [
      { type: 'new', text: 'On top of the national Dex, every region from <strong>Kanto to Paldea</strong> now has its own completion track. Register <strong>25%, 50%, 75% and 100%</strong> of a region’s Pokémon and each milestone pays out — coins, tokens, and a <strong>Dex Crate key at 100%</strong>. It reuses the Pokémon you’ve <strong>already caught</strong>, so past progress counts the moment the track goes live. Open <strong>/regiondex</strong> to see all nine regions and how close you are on each. <code>/regiondex</code>' },
    ],
  },
  {
    date: '2026-06-28',
    tag: 'Mail',
    title: 'Fixed: mailbox clear no longer destroys unclaimed rewards',
    changes: [
      { type: 'fixed', text: 'A daily admin mailbox-clear was wiping mail that still held <strong>unclaimed</strong> items and currency — including level-crate keys players hadn’t collected yet. The clear is now safe by default: it removes spam, fully-claimed, expired and revoked mail, but <strong>preserves any mail still carrying unclaimed rewards</strong>, so nothing you haven’t opened gets deleted. <code>/mail</code>' },
    ],
  },
  {
    date: '2026-06-28',
    tag: 'PvP',
    title: 'Improved: friendly duels bring your full team + a visible move timer',
    changes: [
      { type: 'improved', text: 'Direct R-key challenges and <strong>/pvp challenge</strong> duels no longer force you to pick 4 of 6 in Team Preview — that VGC rule is now <strong>ranked / ladder only</strong>. Friendly duels bring your <strong>full party</strong>: you pick just your on-field lead(s) — 1 in Singles, 2 in Doubles — and the rest ride along as usable reserves, so you can finally practise the official National Dex Doubles OU format. <code>/pvp</code>' },
      { type: 'improved', text: 'The per-turn battle timer is now <strong>visible on the action bar</strong> — a green → yellow → red countdown shown to both players every second during the move-choice window, across every PvP battle type (ranked, ladder, Warzone, friendly). <code>/pvp</code>' },
    ],
  },
  {
    date: '2026-06-28',
    tag: 'Safari',
    title: 'Fixed: server crash when a Safari pass expired',
    changes: [
      { type: 'fixed', text: 'Closed a crash where the whole server could go down when a player’s Safari pass expired — the exit teleport was firing mid server-tick. Pass expiry and exit are now handled safely off the tick loop. <code>/safari</code>' },
    ],
  },
  {
    date: '2026-06-28',
    tag: 'Area Zero',
    title: 'Fixed: PvP kills could be farmed for skill charges',
    changes: [
      { type: 'fixed', text: 'Trading player kills in Area Zero could rapidly bank Paradox Gauge <strong>skill charges</strong> (the zone-wide AOE casts) — a player kill was the single biggest gauge fill and had no anti-farm guard, so two players (or an alt) could trade kills to spam zone-wide skills on everyone in the sphere. Kill-based gauge gain is now capped at the wild-mon rate, with a per-victim cooldown. <code>/skill</code>' },
    ],
  },
  {
    date: '2026-06-27',
    tag: 'Casino',
    title: 'New: Lucky Key Spin — a 100k coin-sink gamble',
    changes: [
      { type: 'new', text: 'A new game joins <strong>/casino</strong>: <strong>Lucky Key Spin</strong>. Pay a flat <strong>100,000 coins</strong> to spin an animated case-roll reel for a weighted key prize — <strong>45% Vote Key / 22.5% Legacy Key / 22.5% Origin Key</strong>, with a 10% bust as the house edge. Win a Legacy or Origin key and it’s announced server-wide. Everyone also gets <strong>one free spin every 24h</strong>. <code>/keyspin</code> (alias <code>/lucky</code>), or <code>/keyspin free</code> for the daily.' },
    ],
  },
  {
    date: '2026-06-27',
    tag: 'Playtime',
    title: 'New: Playtime Rewards — an infinite /playtime claim ladder',
    changes: [
      { type: 'new', text: '<strong>/playtime</strong> (alias <strong>/pt</strong>) opens a claim ladder that rewards <strong>active</strong> play: every 10h unlocks a tier, and every 100h pays a bigger haul — and it <strong>never stops</strong>, looping the major reward every 100h past 1000h. Click any glowing tile to claim everything you’re owed in one shot. Playtime is AFK-adjusted, so idling never advances it, and milestone titles drop at 100h / 250h / 500h / 1000h. <code>/playtime</code>' },
    ],
  },
  {
    date: '2026-06-27',
    tag: 'Raid Boss',
    title: 'Fixed: offline-at-payout raiders lost their rewards',
    changes: [
      { type: 'fixed', text: 'Top-damage raiders who briefly disconnected or lagged out the instant a raid boss died were skipped entirely by the coin payout — the classic “did enough damage, got no money” report. Payouts now reach everyone who qualified, even if they dropped at the exact moment of the kill. <code>/raid</code>' },
    ],
  },
  {
    date: '2026-06-27',
    tag: 'Ranks',
    title: 'New: instant Shiny Dex refresh',
    changes: [
      { type: 'new', text: 'Added <strong>/shinydex refresh</strong> (and a Refresh button in the GUI) so you can register stored shinies instantly instead of relogging. Background sweeps already pick up party + PC shinies within a minute, but the button gives you the update on demand — no more risky rapid relogging to force a scan. <code>/shinydex</code>' },
    ],
  },
  {
    date: '2026-06-27',
    tag: 'Pokémon',
    title: 'Fixed: fusion conversion, Pokédex voucher & breeding bugs',
    changes: [
      { type: 'fixed', text: '<strong>/pokeconvert</strong> now refuses fused Pokémon (Necrozma, Kyurem, Calyrex and addon fusions) instead of sealing them into a capsule they could never be split out of again — unfuse first, then convert.' },
      { type: 'fixed', text: 'The Pokédex Entry Voucher no longer offers species you’ve <strong>already</strong> registered — multi-word caught species (Tapu Koko and friends) now correctly drop out of the picker.' },
      { type: 'fixed', text: 'Single-ability Pokémon (e.g. Clauncher) are no longer mis-read as having a Hidden Ability and wrongly locked out of non-OT breeding.' },
    ],
  },
  {
    date: '2026-06-26',
    tag: 'Ranks',
    title: 'Improved: Pokédex completion rewards buffed + back-paid',
    changes: [
      { type: 'improved', text: 'Every Pokédex completion tier now pays out more coins, tokens and keys. Because dex tiers are one-time claims, anyone who <strong>already claimed</strong> a tier gets the difference <strong>back-paid to /mail</strong> on their next login — so early completionists aren’t shortchanged by the buff. <code>/ranks</code>' },
    ],
  },
  {
    date: '2026-06-26',
    tag: 'Jobs',
    title: 'Improved: Slayer now pays for 11 more mobs',
    changes: [
      { type: 'improved', text: 'The Slayer job was missing a chunk of common hostiles, so a lot of grinding paid nothing. Added <strong>11 more mob types</strong> to the kill table — zombified piglins, piglins, zoglins, vexes, shulkers, silverfish, endermites, and slimes / magma cubes (at a low per-kill rate so split-farms can’t trivially slam the paycheck cap). <code>/jobs</code>' },
    ],
  },
  {
    date: '2026-06-26',
    tag: 'Clans',
    title: 'Improved: /clan kick can now remove offline members',
    changes: [
      { type: 'improved', text: '<strong>/clan kick</strong> previously only matched currently-online players, so an inactive member who’d stopped logging in could never be removed. It now resolves clanmates by name (with tab-completion) and kicks offline members by UUID — the role rules for who-can-kick-whom are unchanged. <code>/clans</code>' },
    ],
  },
  {
    date: '2026-06-26',
    tag: 'Pokeditor',
    title: 'Fixed: Hidden Power charged tokens but never learned',
    changes: [
      { type: 'fixed', text: 'Teaching certain moves — notably <strong>Hidden Power</strong> — could spend move tokens without the Pokémon ever actually learning the move. Move-teaching now verifies the move applied and <strong>refunds your tokens</strong> if it can’t be learned. Past failed charges are being refunded manually. <code>/pokeditor</code>' },
    ],
  },
  {
    date: '2026-06-26',
    tag: 'Quality of Life',
    title: 'Fixed: broken Pokémon interaction wheel on right-click',
    changes: [
      { type: 'fixed', text: 'Right-clicking a Pokémon (Rayquaza especially) could spam errors and fail to open the interaction wheel, thanks to a bug in an external Mega-Evolution mod. The call site is now hardened so the wheel opens normally again — and a related server hard-crash from the same mod’s glow effect was closed too.' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Clans',
    title: 'New: clan member cap + buyable member slots',
    changes: [
      { type: 'new', text: 'Clans now have a roster cap of <strong>10 members</strong> (the leader counts toward it). To grow bigger, buy <strong>extra member slots</strong> from the shared clan bank on <strong>/clans shop</strong> — each slot costs more than the last (the 11th seat is 100,000 coins, ×1.5 every slot after) up to a hard cap of <strong>20 members</strong>. Clans already over 10 get a <strong>72-hour grace window</strong> to buy slots; after that the <strong>newest-joined</strong> members are auto-removed down to the cap — leaders, vice-leaders and officers are never auto-kicked. <code>/clans shop</code>' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Leaderboard',
    title: 'New: a Dex % leaderboard',
    changes: [
      { type: 'new', text: 'A new <strong>Dex %</strong> board joins the Collection row of <strong>/lb</strong> — it ranks Pokédex completion as a percentage (e.g. <strong>73.2% (751/1025)</strong>) instead of a raw species count, so you can see who is closest to a living dex. <code>/lb</code>' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Gyms',
    title: 'Fixed: dead-on-arrival gym battles & stuck "leader is busy"',
    changes: [
      { type: 'fixed', text: 'Gym battles that silently failed to start — cancelled after ~15 seconds with no battle ever appearing — are now handled automatically. The server detects when the shared battle engine has wedged, recovers it for everyone at once, and briefly blocks new challenges with a clear <em>“the battle engine is recovering — this is NOT a loss”</em> message instead of letting you eat another dead battle. <code>/gym</code>' },
      { type: 'fixed', text: 'A gym battle that got force-closed or wedged no longer leaves the leader stuck as permanently <em>“busy with another challenge”</em> — the busy lock now clears itself (and on disconnect), so the leader is challengeable again without a restart.' },
      { type: 'fixed', text: 'Zygarde’s 10% Forme is no longer wrongly rejected as banned in NatDex Doubles OU gyms — gym legality is now form-aware, so only the actually-banned formes are blocked.' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Pokémon',
    title: 'Fixed: held-item dupe & duplicate Pokémon',
    changes: [
      { type: 'fixed', text: 'Closed a held-item duplication exploit where a Pokémon’s held item could drop to the ground during gym, Elite Four and Battle Tower battles while the Pokémon kept the item. Pokémon in your party or PC never drop their held item now — only genuinely wild ones do.' },
      { type: 'fixed', text: 'Added a duplicate-Pokémon integrity sweep that detects and removes copies of the same Pokémon left in two slots at once (party/PC), checked automatically when you join.' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Ranks',
    title: 'Fixed: Shiny Dex now registers PC shinies automatically',
    changes: [
      { type: 'fixed', text: 'The <strong>Shiny Dex</strong> no longer only counts the shinies in your party at login. It now reconciles your <strong>PC boxes</strong> — and any shiny you get mid-session via hatch, trade, GTS, crate or <code>/pokegive</code> — within about a minute, so you no longer have to cycle 6 shinies into your party and relog to register them 6 at a time. <code>/shinydex</code>' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Crates',
    title: 'Fixed: SolForge Marshadow leaking into banner pulls',
    changes: [
      { type: 'fixed', text: 'The server-exclusive <strong>SolForge Marshadow</strong> (a Black Market–only mon) could be pulled as a rare consolation prize from several <strong>/banner</strong> gacha pools. The reward pools now exclude every SolForge species, so it stays obtainable only where it’s meant to be.' },
    ],
  },
  {
    date: '2026-06-25',
    tag: 'Quality of Life',
    title: 'Improved: colored NPC nametags',
    changes: [
      { type: 'improved', text: 'NPC floating nametags are no longer all plain white — each NPC now gets a stable color from a readable palette, so a hub full of trainers actually has some variety to it.' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'World Tweaks',
    title: 'New: archaeology digs drop Cobblemon loot',
    changes: [
      { type: 'new', text: 'Brushing <strong>suspicious sand and gravel</strong> — at desert wells, desert pyramids, warm & cold ocean ruins and trail ruins — now has a chance to turn up <strong>Cobblemon loot</strong> on top of the usual pottery sherds: <strong>Rare Candy, EXP Candy, Poké Balls, relic coins</strong>, and a rare <strong>Master Ball</strong> jackpot. The bonus is additive, so you never lose the vanilla sherds. Rarely a brush even yields a <strong>Bottle Cap</strong> for IV training — occasionally a Gold (perfect-IV) one. Works in every world.' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'Battle Pass',
    title: 'New: the Solar Pass — 30 days of daily rewards',
    changes: [
      { type: 'new', text: 'A new gem-only premium pass, separate from the Battle Pass. Open <strong>/bp</strong> and pick <strong>Solar Pass</strong> — buy it with Gems and you’re paid a reward bundle <strong>every day for 30 days</strong>: <strong>67,000 coins + 1 Origin Key + 1 Legacy Key + 2 Master Balls</strong>, delivered to your <strong>/mail</strong> even while you’re offline. Buy again any time to <strong>extend</strong> your days, and check days remaining + your next reward in the Solar Pass menu. <code>/bp</code>' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'Economy',
    title: 'New: Gem conversion + the SolForge Black Market',
    changes: [
      { type: 'new', text: 'Gems are now earnable in-game. <strong>/gem convert &lt;n&gt;</strong> turns coins into Gems at <strong>100,000,000 coins = 1 Gem</strong> — a one-way coin sink for the server’s rarest currency. <code>/gem convert</code>' },
      { type: 'new', text: 'A shady merchant — the <strong>SolForge Black Market</strong> — now appears at Spawn on a rotating timer (every 8h for 1h) with a random, stock-limited, server-wide inventory paid in Gems. Open it with <strong>/gem shop</strong>, <strong>/blackmarket</strong> or <strong>/bm</strong> while the merchant is in town. <code>/blackmarket</code>' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'Quality of Life',
    title: 'New: /effects — a premium temporary-buff shop',
    changes: [
      { type: 'new', text: '<strong>/effects</strong> (alias <strong>/buff</strong>) opens a shop that sells a <strong>temporary</strong> beneficial status effect for a premium coin price — speed, haste, strength, regeneration, night vision and more. Each buy runs for a set duration, then wears off. <code>/effects</code>' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'PvP',
    title: 'New: /scout — Battle-Scout team tracker',
    changes: [
      { type: 'new', text: 'Tired of memorising which of your opponent’s Pokémon have already been out? <strong>/scout</strong> (alias <strong>/ascscout</strong>) opens a live tracker for the battle you’re in or spectating — who’s been revealed, who’s on the field, who’s fainted, plus form, HP% and a computed speed tier. <code>/scout</code>' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'Progression',
    title: 'New: Prestige — Levels Star Reset & Battle Tower Seasonal Prestige',
    changes: [
      { type: 'new', text: '<strong>Levels Prestige</strong> — hit Lv.100 and run <strong>/asclvl prestige</strong> (or <strong>/levels</strong> for the GUI) to reset to Lv.1 for a permanent <strong>Star ✨</strong>. Each Star adds a wild-shiny boost (up to +50%); Prestige is infinite. <code>/levels</code>' },
      { type: 'new', text: '<strong>Battle Tower Prestige</strong> — clear Floor 100 on a tower+format, then <strong>/ascbt prestige &lt;tower&gt;</strong> to wipe that ladder back to Floor 1 for a permanent (until the season wipe) token bonus and softened level decay. <code>/ascbt prestige</code>' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'Crates',
    title: 'New: Mythical & Ultra Beast Spins',
    changes: [
      { type: 'new', text: 'Four new Spin tiers join the rotation — <strong>Mythical</strong>, <strong>Shiny Mythical</strong>, <strong>Ultra Beast</strong> and <strong>Shiny Ultra Beast</strong> — each rolling from its own dedicated pool. The Legendary Spin is now <strong>legendary-only</strong>, so every tier feels distinct.' },
    ],
  },
  {
    date: '2026-06-24',
    tag: 'Jobs',
    title: 'New: Job ranks — Novice → Master',
    changes: [
      { type: 'new', text: 'Every job now tracks its own lifetime earnings and ranks up through <strong>Novice → Apprentice → Journeyman → Expert → Master</strong>, each tier paying a bigger payout multiplier and a higher cycle cap. Check your progress with <strong>/job rank</strong>. <code>/job rank</code>' },
    ],
  },
  {
    date: '2026-06-23',
    tag: 'Quality of Life',
    title: 'New: /events — an in-game events board',
    changes: [
      { type: 'new', text: '<strong>/events</strong> opens an in-game board of upcoming events and contests, so you don’t have to watch Discord to catch them. Browse upcoming and <em>Coming soon!</em> events with their date, time (GMT+8) and signup count, and <strong>click an event to register or leave</strong> — or use <code>/events register</code> / <code>/events unregister</code>. <code>/events</code>' },
    ],
  },
  {
    date: '2026-06-23',
    tag: 'Ranks',
    title: 'Raid-den catches now count toward /dex',
    changes: [
      { type: 'fixed', text: 'Pokémon caught in <strong>raid dens</strong> now register toward your <strong>/dex</strong> completion. They previously only appeared in the native Cobblemon Pokédex — opening <code>/dex</code> now reconciles your catches on the spot, so den catches (and trades, <code>/pokegive</code> and crate grants) count immediately instead of only after a relog. <code>/dex</code>' },
    ],
  },
  {
    date: '2026-06-23',
    tag: 'PvP',
    title: 'Warzone raid dens are live',
    changes: [
      { type: 'new', text: '<strong>Raid dens now spawn inside the Warzone</strong> — wild dens appear on a timer, and a <strong>legendary den</strong> opens when Warzone Energy maxes out. Hold the area to make it open, then fight for the reward. <code>/warzone</code>' },
    ],
  },
  {
    date: '2026-06-23',
    tag: 'Area Zero',
    title: 'Fixed: phantom boss announcements',
    changes: [
      { type: 'fixed', text: 'Area Zero will no longer announce a boss that never actually spawned. A failed spawn could still fire the “a boss has spawned” alert and send you to empty coordinates — the announcement now only fires when the boss is really there.' },
    ],
  },
  {
    date: '2026-06-22',
    tag: 'Progression',
    title: 'Milestone crate keys re-grant after prestige',
    changes: [
      { type: 'fixed', text: 'After <strong>prestiging</strong>, re-hitting level milestones (50/60/70/80/90/100) now grants your <strong>level-crate keys</strong> again. They were being swallowed on the second climb — the full Lv1→100 re-climb is the gate, so the keys come back each prestige. <code>/asclvl</code>' },
    ],
  },
  {
    date: '2026-06-22',
    tag: 'Raid Boss',
    title: 'Fixed: a raid ending could lose your other battle',
    changes: [
      { type: 'fixed', text: 'Ending a <strong>raid</strong> no longer force-closes an unrelated battle you happen to be in (Elite Four, PvP or wild) and scores it as a loss. Raid cleanup is now scoped to actual raid-boss battles only, so your separate fight — and its entry fee — stays safe.' },
    ],
  },
  {
    date: '2026-06-21',
    tag: 'PvP',
    title: 'Warzone win spoils & Warzone Energy',
    changes: [
      { type: 'new', text: 'Every <strong>Warzone win</strong> now pays <strong>coins, tokens and a weighted item drop</strong> on top of your Warzone Points — and the payout scales with risk. Win <strong>without holding Steal Protection</strong> for the bigger reward (including a shot at a <strong>Legendary Core</strong>); play it safe with protection up and the rewards are leaner. <code>/pvp</code>' },
      { type: 'new', text: '<strong>Warzone Energy</strong> — a zone-wide bar that fills as players rack up <strong>wins and successful steals</strong>. When it maxes out, a <strong>wild legendary spawns inside the Warzone</strong> for everyone to fight over, then the bar drains. Server-wide alerts fire at every milestone to pull people into the zone.' },
    ],
  },
  {
    date: '2026-06-21',
    tag: 'PvP',
    title: 'Ash-Greninja is legal on Singles OU',
    changes: [
      { type: 'fixed', text: '<strong>Battle Bond / Ash-Greninja is now legal on the Singles NatDex OU ladder</strong> — it is an OU Pokémon, not Ubers. All Greninja forms are allowed in Singles again. <code>/pvp</code>' },
    ],
  },
  {
    date: '2026-06-21',
    tag: 'Titles',
    title: 'Exclusive titles are now truly one-of-a-kind',
    changes: [
      { type: 'new', text: 'Bespoke <strong>exclusive titles</strong> are now <strong>auto-granted to their owner on join</strong> — no waiting on staff to hand them over.' },
      { type: 'fixed', text: 'These one-of-a-kind titles are now <strong>locked out of the title shop</strong> so they can never be bought by anyone else. <code>/title</code>' },
    ],
  },
  {
    date: '2026-06-20',
    tag: 'Crates',
    title: 'Summon banner pricing & GUI fixes',
    changes: [
      { type: 'fixed', text: 'Group <strong>summon-banner prices are back to 50,000 a pull and 450,000 for a 10-pull</strong> after they had drifted up to 100k/900k. The correct price is restored automatically. <code>/summon</code>' },
      { type: 'fixed', text: 'The <strong>banner select screen</strong> no longer floods with duplicated tiles — it now cleanly shows the live banners plus a short “next up” preview.' },
    ],
  },
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
    ],
  },
  {
    group: 'Head Admin',
    members: [
      { name: 'Yberuuuu', role: 'Head Admin', avatar: 'assets/team/yberu.png', motto: 'Ogerponnnn.' },
    ],
  },
  {
    group: 'Admins',
    members: [
      { name: 'SamsonTheManiac', role: 'Admin', avatar: 'assets/team/samson.jpg',
        motto: 'Oh Great Cifera of Dolos, grant me a glimpse of your cunning beauty once more!' },
      { name: 'Raizuuuu', role: 'Admin', avatar: 'assets/team/raizu.jpg',
        motto: 'Behave or Crys will spank me.', socials: [{ label: 'TikTok', url: 'https://www.tiktok.com/@ra1zuu' }] },
    ],
  },
  {
    group: 'Event Manager',
    members: [
      { name: 'CallMeAtom', role: 'Event Manager', avatar: 'assets/team/atom.jpg',
        motto: "I've died before. It was boring, so I stood up." },
    ],
  },
  {
    group: 'Moderators',
    members: [
      { name: 'TheGreatJenish', role: 'Moderator', avatar: 'assets/team/jenish.jpg',
        motto: 'Either give up at the very beginning, or never give up.' },
      { name: 'Tadzuna', role: 'Moderator', avatar: 'assets/team/tadzuna.jpg',
        motto: "Ayoko sa mahal, gusto ko sa mura, kasi yung una ko'ng minahal, iba'ng lalake inuna" },
      { name: 'LilCamo', role: 'Moderator', avatar: 'assets/team/lilcamo.jpg',
        motto: 'All truly strong people are kind.' },
      { name: 'DennnPham', role: 'Moderator', avatar: 'assets/team/dennn.png',
        motto: 'Eat Sleep Hustle Repeat 🔁' },
    ],
  },
  {
    group: 'Helpers',
    members: [
      { name: 'DD1amond', role: 'Helper', avatar: 'assets/team/diamond.png',
        motto: 'I speak really well I think.' },
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
    group: 'Content Creators',
    members: [
      { name: 'Athyyy', role: 'Content Creator' },
      { name: 'Clao', role: 'Content Creator' },
      { name: 'ElektroZax', role: 'Content Creator' },
    ],
  },
  {
    group: 'S1 Zeniths',
    members: [
      { name: 'Slaaaine', role: 'S1 Zenith', avatar: 'assets/team/slaaaine.png', motto: 'BingBong not bingbonging.' },
      { name: 'EttLel', role: 'S1 Zenith', avatar: 'assets/team/ettlel.jpg', motto: 'Panda Lover' },
      { name: 'RicKKK', role: 'S1 Zenith', avatar: 'assets/team/rickkk.png', motto: 'Always one ping away.' },
      { name: 'Zandurrrrrr', role: 'S1 Zenith', avatar: 'assets/team/zandurr.png',
        motto: "I stalk myself on the internet just to see what you'll find." },
      { name: 'McNuggetRice', role: 'S1 Zenith', avatar: 'assets/team/mcnugget.jpg', motto: 'una' },
    ],
  },
  {
    group: 'Inactive Staff',
    members: [
      { name: 'Crysthamyr', role: 'Head Admin', avatar: 'assets/team/crys.jpg', motto: "that's just my fly client." },
      { name: 'Zeta', handle: 'justt_zeta', role: 'Core Management Staff', avatar: 'assets/team/zeta.png',
        motto: 'You only live once.' },
      { name: 'mAyHAmBLOOM', role: 'Admin', avatar: 'assets/team/mayham.png',
        motto: 'Life is too short to do boring things.' },
      { name: 'AmaxiHaku', role: 'Admin & Builder' },
      { name: 'HitoriHachi', role: 'Admin & Builder', avatar: 'assets/team/hachi.jpg',
        motto: 'Take life block by block till you build a masterpiece.', socials: [{ label: 'Twitch', url: 'https://twitch.tv/hitorihachi' }] },
      { name: '__Vesper', role: 'Admin', avatar: 'assets/team/vesper.png', motto: "Don't pmo." },
      { name: 'Prime_RN', role: 'Admin', avatar: 'assets/team/prime.png', motto: 'Fear me?' },
      { name: 'EdsonCheah', role: 'Moderator', avatar: 'assets/team/edson.jpg', motto: "it's ok to not be ok" },
      { name: 'OPaint', role: 'Moderator', avatar: 'assets/team/opaint.jpg', motto: 'a² + b² = c²' },
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
        a: 'Every player has their own <b>Legend bar</b> — open it with <code>/legend</code>. Playing fills it, and <b>a full bar is a guaranteed Legendary</b>: spend it with <code>/legend roll</code> and one spawns <b>for you</b>. You can also cash out early from around <b>20%</b> — that\'s a gamble at the odds your bar has earned (50% of the bar is roughly a 25% chance, 75% is roughly 56%), and win or lose it costs you the whole bar. Either way the bar resets to 0% and you start building again. The old shared server-wide Global Energy bar is gone — legendary hunting is personal now.',
      },
      {
        q: 'How do I fill my Legend bar?',
        a: 'Mainly <b>Daily and Weekly Quests</b> (<code>/bp</code>), <b>PvP wins</b> (<code>/pvp</code>), and defeating <b>Alpha and Paradox</b> Pokémon — Area Zero is the densest source. <b>Jobs</b> claims help a little, and catching, training, PokéHunts, Bingo and Battle Tower all still chip in. Every activity has a <b>cap</b> on how much of the bar it can fill, so no single grind gets you there — you reach 100% by playing across the server. Skip an activity for a day and its energy slowly decays.',
      },
      {
        q: 'My Legend bar is full but nothing happened — why?',
        a: 'You have to be somewhere a Legendary can actually appear. Biome, time of day and weather all count, exactly like the spawn conditions <code>/pwiki &lt;species&gt;</code> lists. If nothing is eligible where you\'re standing, the game <b>holds your full bar</b> rather than spending it, and tells you to move — you lose nothing. Travel to a matching biome and the roll fires.',
      },
      {
        q: 'Can I get a box legendary from the Legend bar?',
        a: 'No. <b>Box legendaries are not in the wild spawn pool</b> — Mewtwo, Lugia, Ho-Oh, Kyogre, Groudon, Rayquaza, Dialga, Palkia, Giratina, Reshiram, Zekrom, Kyurem, Xerneas, Yveltal, Solgaleo, Lunala, Necrozma, Zacian, Zamazenta, Eternatus, Calyrex, Koraidon and Miraidon can\'t be rolled from your Legend bar. Everything else legendary and mythical is fair game. Box legends have their own route: <b>Legendary Contracts</b> on the Contract Board.',
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
        q: 'What are gems and how do I use them?',
        a: 'Gems are the server\'s <b>premium currency</b>, separate from coins. <b>They can no longer be bought with coins</b> — <code>/gem convert</code> and <code>/convert gems tokens</code> were both retired, so gems now enter play only through the store and deliberate server grants (the playtime ladder, the daily calendar, contracts and global hunts). That\'s what makes gem-priced content genuinely premium, and it\'s why <b>gem-bought Pokémon can\'t be traded or listed on the GTS</b>. Spend them in the <b>SolForge Black Market</b> (<code>/gem shop</code> or <code>/bm</code>), a rotating shop of custom Pokémon and high-end gear.',
      },
      {
        q: 'How does the Elite Four / ladder work?',
        a: 'The <code>/ladder</code> is a four-seat PvP ladder per format (singles & doubles), E1 (top) down to E4. You pay a coin fee to challenge a seat, and that fee goes <b>straight to the player currently holding it</b>. Beat them and you take the seat; while you hold it you earn daily passive income by mail. Lose and you only lose the title, plus a 12-hour cooldown. <b>Fusions are banned</b> on the ladder.',
      },
      {
        q: 'What PvP is there besides the ladder?',
        a: 'Three systems, each different. <code>/ladder</code> is the <b>Elite Four</b> — take and hold one of four seats for daily passive income. <code>/pvp queue &lt;singles|doubles&gt;</code> enters the <b>Poké Ball League</b>, a ranked seasonal ladder where you climb tiers for rewards. <code>/warzone</code> (<code>/wz</code>) is a <b>force-fight zone</b> with a daily rotating battle format. Type <code>/pvp</code> for the hub.',
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
        q: 'Why can\'t I break blocks somewhere?',
        a: 'Usually one of two reasons. Some areas are <b>protected zones</b> — the server spawns, Safari, Area Zero and similar event maps are build-locked on purpose. Everywhere else, land can be <b>claimed</b> by other players (Flan claims), and you can\'t build or break inside someone else\'s claim. The <b>Nether and the normal wild are open</b> — if you can\'t break in the Nether you\'re almost certainly standing in a claim. Claim your own land to build freely.',
      },
      {
        q: 'Why are some Cooking Pot / Campfire recipes locked?',
        a: 'That\'s a Cobblemon mechanic, not a server restriction. Cooking Pot recipes <b>unlock progressively</b> as you obtain the required ingredients and plants — until then they won\'t appear in the recipe book or REI. Keep gathering ingredients and more recipes open up.',
      },
      {
        q: 'Can I use fusion / custom Pokémon in Battle Tower?',
        a: 'Yes — within each tier\'s rules. Fusions are checked against the tier you\'re entering, and some are restricted in specific tiers to keep things fair. The old crash/stall issues with fusion and Terastal forms have been <b>fixed</b>: if a team isn\'t legal for a tier the tower now tells you up front instead of erroring out mid-run.',
      },
      {
        q: 'Will the server ever wipe or reset?',
        a: 'No wipe is planned. The server is past its early launch and your progress is here to stay — any future change of that kind would be announced well in advance.',
      },
      {
        q: 'Are alternate accounts (alts) allowed?',
        a: '<b>No — one account per player.</b> Alt accounts are banned on sight, and the server enforces it at the door: if your connection already has an account on it, a second, different account is <b>refused at join</b> automatically. <b>Genuinely sharing a connection</b> with someone in your house? <b>Open a ticket first</b> and staff will add you to the exempt list — do it before the second person tries to join, not after.',
      },
      {
        q: 'I\'m being kicked at join and told my IP already has an account — am I IP banned?',
        a: 'Almost certainly not. That kick is the <b>alt-account gate</b>, not a ban — your name is nowhere in the ban list, which is why asking staff to "unban" or pardon you does nothing. Two things trigger it: someone else in your house is already playing (open a ticket to get your connection exempted), or <b>you renamed yourself</b>. We run in offline mode, so a new name counts as a brand-new account, and your old one is the "alt" it\'s seeing. <b>The quickest fix for a rename is to change your name back to the one you first joined with</b> — that always gets you in. If you can\'t, open a ticket and staff will sort it out.',
      },
    ],
  },
];

// =====================================================================
//  VOTE (vote.html). One entry per vote site — add a site by adding a
//  line here. `name` is the display name, `url` is the vote link.
//  Rewards mirror asc-voting's in-game config (vote key + coins, plus
//  streak bonuses) — keep in sync if the in-game rewards change.
// =====================================================================
const VOTE_SITES = [
  { name: 'Minecraft-MP', url: 'https://minecraft-mp.com/server/357992/vote/' },
  { name: 'MinecraftServers.org', url: 'https://minecraftservers.org/vote/687471' },
  { name: 'TopG', url: 'https://topg.org/minecraft-servers/server-682257' },
  { name: 'TopMinecraftServers', url: 'https://topminecraftservers.org/vote/43474' },
  { name: 'Minecraft-ServerList', url: 'https://minecraft-serverlist.com/server/5283/vote' },
  { name: 'MineList.net', url: 'https://minelist.net/vote/5293' },
  { name: 'Minecraft-Server-List.com', url: 'https://minecraft-server-list.com/server/520843/vote/' },
  { name: 'MinecraftBestServers', url: 'https://minecraftbestservers.com/server-cobbleasia.7049/vote/' },
];

const VOTE_REWARDS = {
  perVote: ['1× Vote Crate Key', '5,000 coins'],
  streaks: [
    { day: 7, reward: '2× Vote Crate Keys' },
    { day: 30, reward: '5× Vote Crate Keys' },
  ],
};
