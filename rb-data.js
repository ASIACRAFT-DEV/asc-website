// =====================================================================
//  RuneBlock site content. Same structure as data.js: the RuneBlock pages
//  load this file instead and share the Cobble Asia page scripts.
//  To open voting on a list, paste its RuneBlock vote link into VOTE_SITES.
//  Do not reuse Cobble Asia's links: those votes count for Cobble Asia.
// =====================================================================
const SERVER = {
  "name": "RuneBlock",
  "home": "runeblock.html",
  "patchnotes": "rb-patchnotes.html",
  "ip": "51.79.202.18",
  "discord": "https://discord.gg/qB3ExYsUAH",
  "mc": "1.21.11",
  "commandHint": "try &quot;class&quot;, &quot;temple&quot; or &quot;trade&quot;",
  "patchHint": "try &quot;horse&quot;, &quot;skill&quot; or &quot;gems&quot;"
};

const FEATURES = {
  "rb-classes": {
    "name": "Classes & Subclasses",
    "short": "Classes",
    "accent": "violet",
    "tag": "/class",
    "category": "Character",
    "featured": true,
    "blurb": "Choose one of five classes and shape it through its subclass paths.",
    "intro": "Every adventurer follows one of five classes: Warrior, Archer, Mage, Priest or Rogue. Your class sets your skills and your role in a party. Its subclasses are branches of your skill tree, so your build grows from the paths you invest in.",
    "how": [
      {
        "title": "Pick your class",
        "body": "Use /class to browse the five classes and /class choose &lt;class&gt; to take one. You can choose at any level."
      },
      {
        "title": "Know your role",
        "body": "Warriors fight on the front line, Archers deal ranged damage, Mages deal spell damage, Priests heal, and Rogues deal melee damage."
      },
      {
        "title": "Follow a subclass path",
        "body": "Warrior has Guardian, Samurai and Berserker. Archer has Marksman and Ranger, with a third branch, Falconer, still being built. Mage has Elementalist, Arcanist and Riftwalker. Priest has Inquisitor, Oracle and Druid. Rogue has Assassin, Reaver and Swashbuckler."
      },
      {
        "title": "Choose with care",
        "body": "Class changes are switched off for now, so your class stays with your character. A Tome of Rebirth resets your skill tree and stat points, but not your class."
      }
    ],
    "commands": [
      {
        "cmd": "/class",
        "desc": "Open the class screen."
      },
      {
        "cmd": "/class list",
        "desc": "List the classes."
      },
      {
        "cmd": "/class info &lt;class&gt;",
        "desc": "Read about a class and its skills."
      },
      {
        "cmd": "/class choose &lt;class&gt;",
        "desc": "Choose your class."
      }
    ],
    "notes": [
      "There is no separate subclass pick. The skill tree branches you invest in are your build.",
      "The Tome of Rebirth is sold at the General Store."
    ]
  },
  "rb-skill-trees": {
    "name": "Skill Trees",
    "short": "Skill Trees",
    "accent": "azure",
    "tag": "/skilltree",
    "category": "Character",
    "featured": true,
    "blurb": "Spend Skill Points and Souls on the skills, upgrades and passives of your class.",
    "intro": "Your class skills, ultimates and passives all come from your class skill tree. You earn Skill Points as you level up, then decide which branches to push deeper.",
    "how": [
      {
        "title": "Earn your points",
        "body": "You gain Skill Points as you level up. Nodes also cost Souls, which you collect by defeating monsters."
      },
      {
        "title": "Open your tree",
        "body": "Use /skilltree to open the tree for your class. A core section leads out to the subclass branches, your ultimates and advanced nodes."
      },
      {
        "title": "Work your way in",
        "body": "A node needs the nodes before it, and the deeper nodes of a branch need points already spent in that branch."
      },
      {
        "title": "Commit to a keystone",
        "body": "Keystones come in opposing pairs. Taking one locks you out of the other."
      },
      {
        "title": "Change your mind",
        "body": "In a town you can refund the last node of a path for its Skill Points and part of its Souls. A Tome of Rebirth resets the whole tree and returns the Souls you spent."
      }
    ],
    "commands": [
      {
        "cmd": "/skilltree",
        "desc": "Open your skill tree."
      },
      {
        "cmd": "/skilltree list",
        "desc": "Show the nodes you own and the ones you can take next."
      },
      {
        "cmd": "/skilltree info &lt;node&gt;",
        "desc": "Read a node's effect, cost and requirements."
      },
      {
        "cmd": "/skilltree unlock &lt;node&gt;",
        "desc": "Unlock a node."
      },
      {
        "cmd": "/skilltree refund &lt;node&gt;",
        "desc": "Refund the last node of a path while in a town."
      }
    ],
    "notes": [
      "The trees are still being built. Some nodes are marked \"effect not in the game yet\" and do nothing for now, so read a node before you buy it."
    ]
  },
  "rb-combat": {
    "name": "Combat & Skill Casting",
    "short": "Combat",
    "accent": "crimson",
    "tag": "/skills",
    "category": "Combat",
    "featured": true,
    "blurb": "Cast skills with mouse combos or rebindable keys, and fight alongside a party.",
    "intro": "Combat runs on a skill bar of three active skills and one ultimate. You can cast with mouse combos, with skill keys, or with both, and spend stat points to suit your build.",
    "how": [
      {
        "title": "Set your skill bar",
        "body": "Use /skills to see your skills and /skills bind &lt;1-4&gt; &lt;skill&gt; to change a slot. Slot 4 holds your ultimate."
      },
      {
        "title": "Cast with combos",
        "body": "Click R-L-R, R-R-R or R-L-L for slots 1 to 3 and R-R-L for your ultimate. Archers use L-R-L, L-L-L, L-R-R and L-L-R, because right-click fires the bow."
      },
      {
        "title": "Or use skill keys",
        "body": "The RuneBlock client adds skill keys, set to R, Z, V and Left Alt by default. Rebind them under Options, Controls, RuneBlock."
      },
      {
        "title": "Spend your stats",
        "body": "Level-ups give stat points for Strength, Defence, Dexterity, Agility, Intelligence and Spirit. Open /stats to spend them."
      },
      {
        "title": "Team up",
        "body": "Parties hold up to four players, with no friendly fire. Members nearby earn bonus XP from kills."
      }
    ],
    "commands": [
      {
        "cmd": "/skills",
        "desc": "View your skills."
      },
      {
        "cmd": "/skills bind &lt;1-4&gt; &lt;skill&gt;",
        "desc": "Put a skill in a slot."
      },
      {
        "cmd": "/skillkeys",
        "desc": "See your casting options."
      },
      {
        "cmd": "/skillkeys mouse on|off",
        "desc": "Turn mouse combos on or off."
      },
      {
        "cmd": "/stats",
        "desc": "Open your stats."
      },
      {
        "cmd": "/stats add &lt;stat&gt; [amount]",
        "desc": "Spend points on strength, endurance, dexterity, agility, intellect or spirit."
      },
      {
        "cmd": "/arcane party invite &lt;player&gt;",
        "desc": "Invite a player to your party."
      },
      {
        "cmd": "/arcane party accept",
        "desc": "Accept a party invite."
      },
      {
        "cmd": "/arcane party leave",
        "desc": "Leave your party."
      },
      {
        "cmd": "/pc &lt;message&gt;",
        "desc": "Send a message to your party."
      },
      {
        "cmd": "/combatlog [all|party|enemies|off]",
        "desc": "Choose what the battle log shows in chat."
      }
    ],
    "notes": [
      "Souls protect you when you die: you lose a share of the Souls you carry and keep your gear. If you die carrying no Souls, your whole inventory drops.",
      "A monster's drops belong to the player who dealt the most damage. Rare drops go straight into that player's bag."
    ]
  },
  "rb-gear": {
    "name": "Gear, Rune Caskets & Identification",
    "short": "Gear",
    "accent": "amber",
    "tag": "/identify",
    "category": "Gear",
    "featured": true,
    "blurb": "Find Rune Caskets in the wild, identify them and chase better rolls.",
    "intro": "Monsters in the open world can drop Rune Caskets, sealed boxes that hold a weapon, a piece of armour or an accessory. Identify one to find out what you got and how well it rolled.",
    "how": [
      {
        "title": "Find a casket",
        "body": "Hostile monsters in the open world can drop caskets, from Common up to Mythic. Monsters far below your level drop none."
      },
      {
        "title": "Identify it",
        "body": "Hold the casket in your main hand, then right-click it or type /identify to reveal the item inside."
      },
      {
        "title": "Read the rolls",
        "body": "Identified gear rolls bonus stats, and higher rarities roll more of them. Better rolls show in brighter colours, the best earn up to three stars, and holding Shift with the RuneBlock client shows the exact roll."
      },
      {
        "title": "Fill your accessory slots",
        "body": "You can wear a necklace, a bracelet and two rings. Use /accessories to open the slots."
      },
      {
        "title": "Forge and repair",
        "body": "The Blacksmith in Cyrandel forges gear from monster parts, metal and Souls. Armour wears down as you take hits, gives less as it wears, and gives nothing once broken, so have the Blacksmith repair it for Gold."
      }
    ],
    "commands": [
      {
        "cmd": "/identify",
        "desc": "Identify the casket in your main hand."
      },
      {
        "cmd": "/accessories",
        "desc": "Open your accessory slots."
      },
      {
        "cmd": "/arcane gear",
        "desc": "See your gear bonuses and active sets."
      },
      {
        "cmd": "/itemlock",
        "desc": "Lock the item in your hand so it can't be dropped."
      },
      {
        "cmd": "/unlock",
        "desc": "Unlock the item in your hand."
      }
    ],
    "notes": [
      "Weapons and accessories never lose condition. Only armour does.",
      "To drop an item you press the drop key twice, so a single press can't throw away your gear."
    ]
  },
  "rb-gems": {
    "name": "Gems & the Gemsmith",
    "short": "Gems",
    "accent": "emerald",
    "tag": "Gemsmith",
    "category": "Gear",
    "featured": false,
    "blurb": "Socket elemental gems into your gear for extra damage, defence and special effects.",
    "intro": "Gems come in five elements: Fire, Water, Thunder, Earth and Air. Set in a weapon, a gem adds damage of its element. Set in armour, it adds defence against that element.",
    "how": [
      {
        "title": "Collect gems",
        "body": "Elite monsters and bosses can drop Cracked gems of a random element."
      },
      {
        "title": "Combine them",
        "body": "Take matching gems to the Gemsmith in Cyrandel, next to the Blacksmith, and combine them into a higher tier: Cracked, Chipped, Polished, Flawless, Perfect and Radiant."
      },
      {
        "title": "Socket your gear",
        "body": "Hold the item in your main hand and socket gems at the Gemsmith. Rarer gear has more sockets, and accessories have none."
      },
      {
        "title": "Unlock a special",
        "body": "Enough high-tier gems of one element give an item that element's special. Weapons gain Inferno, Curse, Chain Lightning, Quake or Gale. Armour gains Ignition, Recovery, Surge, Fortification or Evasion."
      }
    ],
    "commands": [],
    "notes": [
      "A socketed gem can't be removed, so check the confirm screen before you accept."
    ]
  },
  "rb-nightmare-temple": {
    "name": "Nightmare Temple",
    "short": "Temple",
    "accent": "ember",
    "tag": "/temple",
    "category": "Endgame",
    "featured": true,
    "blurb": "Take on five themed boss courts across rising difficulties.",
    "intro": "The Nightmare Temple is an instanced boss dungeon for parties of up to four. Season 1, The Four Courts, sends you through the Court of Stone, the Court of Tides, the Court of Cinders and the Court of Gales, then on to the Elemental Throne.",
    "how": [
      {
        "title": "Choose your court",
        "body": "Use /temple to open the menu and pick a court and a difficulty. Courts open in order as you clear them."
      },
      {
        "title": "Climb the difficulties",
        "body": "Normal, Hard and Nightmare are open. Clear all five courts on one difficulty to open the next."
      },
      {
        "title": "Prepare the run",
        "body": "Pick one of seven blessings to help you. Affixes make a run harder, the selection on offer changes every week, and higher difficulties require them."
      },
      {
        "title": "Beat the boss",
        "body": "Watch the ground for telegraphed attacks and manage the resurrections your party shares."
      },
      {
        "title": "Grow stronger",
        "body": "Clears pay Nightmare Sparks and Divine Armaments. These raise your Penetration and Resilience, which only count inside the Temple."
      }
    ],
    "commands": [
      {
        "cmd": "/temple",
        "desc": "Open the Temple menu."
      },
      {
        "cmd": "/temple select &lt;dungeon&gt; &lt;difficulty&gt;",
        "desc": "Set the court and difficulty."
      },
      {
        "cmd": "/temple affix &lt;affix&gt;",
        "desc": "Switch an affix on or off."
      },
      {
        "cmd": "/temple blessing &lt;blessing&gt;",
        "desc": "Choose your blessing."
      },
      {
        "cmd": "/temple start",
        "desc": "Start the run."
      },
      {
        "cmd": "/temple ready",
        "desc": "Confirm a ready check."
      },
      {
        "cmd": "/temple decline",
        "desc": "Decline a ready check."
      },
      {
        "cmd": "/temple leave",
        "desc": "Leave the run."
      },
      {
        "cmd": "/temple stats",
        "desc": "View your Temple stats."
      },
      {
        "cmd": "/temple stats upgrade &lt;penetration|resilience&gt; [points]",
        "desc": "Spend Sparks on a Temple stat."
      },
      {
        "cmd": "/temple armaments",
        "desc": "Manage your Divine Armaments."
      },
      {
        "cmd": "/temple rewards",
        "desc": "See what clears can pay."
      },
      {
        "cmd": "/temple records",
        "desc": "See the Temple records."
      },
      {
        "cmd": "/temple claim",
        "desc": "Collect rewards that didn't fit in your bag."
      }
    ],
    "notes": [
      "Each court pays its full rewards once a day. Further clears pay a small assist reward.",
      "Hard and Nightmare have extra party requirements, which the menu lists before you enter."
    ]
  },
  "rb-guardian-raids": {
    "name": "Guardian Raids",
    "short": "Raids",
    "accent": "solar",
    "tag": "/guardian",
    "category": "Endgame",
    "featured": true,
    "blurb": "Track a guardian through its habitat, break its armour and harvest its soul.",
    "intro": "Guardian Raids are instanced hunts for one to four players. Nine guardians wait across three raid levels, from Thornback the Bramble Tusk up to Azkharoth the God-Eater. Find your target and bring it down inside the 20-minute limit.",
    "how": [
      {
        "title": "Choose a guardian",
        "body": "Use /guardian to open the menu. Guardians unlock one after another as you clear them, and higher raid levels ask for a higher level and more Combat Power."
      },
      {
        "title": "Hunt it down",
        "body": "A wounded guardian flees to another hunting ground, so your party has to find it again. A Flare shows where it went."
      },
      {
        "title": "Break and stagger",
        "body": "Break its parts to weaken it, and deal enough damage during a stagger check to knock it down."
      },
      {
        "title": "Use your battle items",
        "body": "Everyone enters with Healing Potions, Flares, Destruction Bombs and Whirlwind Grenades. Most other consumables don't work inside."
      },
      {
        "title": "Harvest the soul",
        "body": "After a win, harvest the guardian's soul for your rewards. You get one harvest a day, reset at 00:00 UTC."
      }
    ],
    "commands": [
      {
        "cmd": "/guardian",
        "desc": "Open the raid menu."
      },
      {
        "cmd": "/guardian select &lt;guardian&gt;",
        "desc": "Pick a guardian."
      },
      {
        "cmd": "/guardian start",
        "desc": "Start the raid."
      },
      {
        "cmd": "/guardian ready",
        "desc": "Confirm a ready check."
      },
      {
        "cmd": "/guardian decline",
        "desc": "Decline a ready check."
      },
      {
        "cmd": "/guardian leave",
        "desc": "Leave the raid."
      },
      {
        "cmd": "/guardian use &lt;potion|flare|bomb|grenade&gt;",
        "desc": "Use a battle item."
      },
      {
        "cmd": "/guardian soul on|off",
        "desc": "Choose whether your next win spends today's harvest."
      },
      {
        "cmd": "/guardian harvest",
        "desc": "Harvest the soul after a win."
      },
      {
        "cmd": "/guardian records",
        "desc": "See the raid records."
      },
      {
        "cmd": "/power",
        "desc": "Check your Combat Power."
      }
    ],
    "notes": [
      "Your party shares three resurrections for the whole raid.",
      "Walking out of a raid that is still running gives you the Guardian's Curse, which locks you out of raids for a while."
    ]
  },
  "rb-trial-of-reflection": {
    "name": "Trial of Reflection",
    "short": "Trial",
    "accent": "azure",
    "tag": "/mirror",
    "category": "Endgame",
    "featured": false,
    "blurb": "Step into a solo duel against a mirror image of your own character.",
    "intro": "The Trial of Reflection is a solo fight against yourself. Your reflection is built from your own character, so a stronger you means a stronger opponent.",
    "how": [
      {
        "title": "Enter the trial",
        "body": "Use /mirror to check whether you are ready, then /mirror start to step into the arena alone."
      },
      {
        "title": "Face your reflection",
        "body": "It wears what you wear, draws its health from your maximum health and hits with your own weapon's strength."
      },
      {
        "title": "Learn its moves",
        "body": "Its attacks depend on your class and take the names of skills you know. Read each telegraph and move out of the way."
      },
      {
        "title": "Claim your reward",
        "body": "Win before time runs out to earn Souls on your first pass. A loss costs nothing, and you can try again after a short wait."
      }
    ],
    "commands": [
      {
        "cmd": "/mirror",
        "desc": "Check your trial status."
      },
      {
        "cmd": "/mirror start",
        "desc": "Begin the trial."
      },
      {
        "cmd": "/mirror leave",
        "desc": "Leave the trial."
      }
    ],
    "notes": []
  },
  "rb-world-bosses": {
    "name": "World Bosses & Mossgrave Cellars",
    "short": "World Bosses",
    "accent": "crimson",
    "tag": "/bosses",
    "category": "World",
    "featured": true,
    "blurb": "Join other players against five bosses in the open world, then spend their keys in the Mossgrave Cellars.",
    "intro": "Five world bosses have lairs across NEPTAR: the Hollow Stalker in the Early Lands, the Ashen Colossus and Frost Wyrm in the Midlands, and the Silent Commander and Echo of Azkharoth in the Endlands.",
    "how": [
      {
        "title": "Watch for the warning",
        "body": "The server announces a boss before it wakes. Use /bosses to see where each one lives and when it returns."
      },
      {
        "title": "Fight together",
        "body": "Everyone who deals a meaningful share of the damage earns rewards, so you don't need to land the final blow."
      },
      {
        "title": "Collect your rewards",
        "body": "Rewards include Souls, Gold, a monster part unique to that boss and a Mossgrave Cellars Key. The top damage dealer earns extra."
      },
      {
        "title": "Open the Cellars",
        "body": "Hold the key and speak to the Mossgrave Warden in Cyrandel, or use /dungeon start mossgrave_cellars. Parties of up to four can enter together."
      },
      {
        "title": "Survive the rooms",
        "body": "Fight through the rooms to the boss. There are no resurrections: alone, dying ends the run. In a party, you return when a living member reaches the next checkpoint."
      }
    ],
    "commands": [
      {
        "cmd": "/bosses",
        "desc": "See the world bosses, their lairs and timers."
      },
      {
        "cmd": "/dungeon list",
        "desc": "List the dungeons and your clears."
      },
      {
        "cmd": "/dungeon start mossgrave_cellars",
        "desc": "Enter with the key in your hand."
      },
      {
        "cmd": "/dungeon ready",
        "desc": "Confirm a ready check."
      },
      {
        "cmd": "/dungeon decline",
        "desc": "Decline a ready check."
      },
      {
        "cmd": "/dungeon leave",
        "desc": "Leave the run."
      },
      {
        "cmd": "/dungeon info",
        "desc": "See your run or your record."
      }
    ],
    "notes": [
      "The key is spent when the run starts."
    ]
  },
  "rb-adventurers-guild": {
    "name": "The Adventurers' Guild",
    "short": "Guild",
    "accent": "amber",
    "tag": "/guild",
    "category": "World",
    "featured": true,
    "blurb": "Register with the Guild, take contracts and earn your way up the ranks.",
    "intro": "The Adventurers' Guild gives you paid work across NEPTAR. Take contracts in any town, earn Gold and reputation, and prove yourself to climb from rank F to rank C.",
    "how": [
      {
        "title": "Register",
        "body": "Once you have a class and reach the required level, speak to the Guild Registrar in Cyrandel."
      },
      {
        "title": "Take a contract",
        "body": "Contract Officers in all seven towns post monster hunts, deliveries, bounties, escorts and event contracts. A daily board refreshes at 00:00 UTC."
      },
      {
        "title": "Follow the tracker",
        "body": "Accepted contracts appear in your quest tracker. Party members who hold the same hunt or bounty can share kills."
      },
      {
        "title": "Hand it in",
        "body": "Return to any Contract Officer to collect your Gold and reputation."
      },
      {
        "title": "Earn a promotion",
        "body": "Reputation and materials move you up at the Registrar. Ranks D and C also require you to pass a promotion trial."
      }
    ],
    "commands": [
      {
        "cmd": "/guild",
        "desc": "See your Guild profile."
      },
      {
        "cmd": "/guild contracts",
        "desc": "Browse the contract board."
      },
      {
        "cmd": "/guild active",
        "desc": "See the contracts you hold."
      },
      {
        "cmd": "/track",
        "desc": "Show or hide the quest tracker."
      },
      {
        "cmd": "/track next",
        "desc": "Switch to the next tracked quest."
      }
    ],
    "notes": [
      "Contracts can only be accepted and handed in at a Contract Officer.",
      "Some hunts only count monsters from a named camp. The contract tells you when this applies."
    ]
  },
  "rb-neptar": {
    "name": "The World of NEPTAR",
    "short": "NEPTAR",
    "accent": "emerald",
    "tag": "/map",
    "category": "World",
    "featured": true,
    "blurb": "Explore seven towns and three regions of rising danger, on foot or on horseback.",
    "intro": "NEPTAR is an open world of seven towns: Cyrandel, Rural Village, Ski Resort, Tent-Ville, Port City, Desert Oasis and Mountain Village. The land is split into the Early Lands, the Midlands and the Endlands, and monsters grow stronger as you travel further out.",
    "how": [
      {
        "title": "Find your bearings",
        "body": "Use /map for the world map and /zone to see which region you are in and which grinding camps are nearby."
      },
      {
        "title": "Fight at the camps",
        "body": "Twenty-four grinding camps stay stocked with monsters while players are nearby. Fighting far below your level pays much less."
      },
      {
        "title": "Travel fast",
        "body": "Discover a town's Teleport Gate to add it to /travel. Travelling while away from a Gate costs a Teleport Crystal, and each region opens at a set level."
      },
      {
        "title": "Ride a horse",
        "body": "Buy a Dusk, Ashen or Sable Horse at /stable. Call it with your Horse Whistle or /mount. Horses use Energy while ridden and recover it while resting."
      },
      {
        "title": "Rest and recover",
        "body": "Rest at a Sanctuary to restore your health and mana, or visit an Innkeeper in any town for the Well Rested XP bonus."
      }
    ],
    "commands": [
      {
        "cmd": "/map",
        "desc": "Open the world map."
      },
      {
        "cmd": "/zone",
        "desc": "See your region and nearby camps."
      },
      {
        "cmd": "/travel [place]",
        "desc": "Fast travel to a place you have discovered."
      },
      {
        "cmd": "/arcane rest",
        "desc": "Rest at a Sanctuary."
      },
      {
        "cmd": "/stable",
        "desc": "Manage and buy horses."
      },
      {
        "cmd": "/mount",
        "desc": "Call or send away your active horse."
      },
      {
        "cmd": "/codex",
        "desc": "Open the Adventurer's Codex."
      },
      {
        "cmd": "/bestiary",
        "desc": "See the creatures you have defeated."
      },
      {
        "cmd": "/music [on|off]",
        "desc": "See what's playing, or turn the music on or off."
      }
    ],
    "notes": [
      "Cyrandel's town centre is a safe zone with no PvP and no monsters. The other towns have no PvP, but monsters can roam there.",
      "Horses can't be called inside the Nightmare Temple, Guardian Raids or the Trial of Reflection.",
      "A horse you are riding comes with you when you fast travel."
    ]
  },
  "rb-bank-and-trade": {
    "name": "Royal Bank & Player Trading",
    "short": "Bank & Trade",
    "accent": "solar",
    "tag": "/trade",
    "category": "Economy",
    "featured": false,
    "blurb": "Store your valuables at the Royal Bank and trade safely with other players.",
    "intro": "The Royal Bank of Cyrandel keeps your items safe in a personal vault, and the trade window lets you swap items and Gold directly with another player.",
    "how": [
      {
        "title": "Open a vault",
        "body": "Speak to the Banker in the south wing of the Guild hall in Cyrandel to open your vault."
      },
      {
        "title": "Upgrade your space",
        "body": "Spend Gold to move up through the Starter, Bronze, Silver, Gold and Royal tiers, from 9 slots up to 54."
      },
      {
        "title": "Start a trade",
        "body": "Stand close to another player in a town, then use /trade &lt;player&gt; or sneak and right-click them."
      },
      {
        "title": "Confirm the deal",
        "body": "Add items and Gold, then both players mark Ready and Confirm. Any change to an offer clears both confirmations."
      }
    ],
    "commands": [
      {
        "cmd": "/bank",
        "desc": "Find out where the Banker is."
      },
      {
        "cmd": "/trade &lt;player&gt;",
        "desc": "Send a trade request."
      },
      {
        "cmd": "/trade accept [player]",
        "desc": "Accept a trade request."
      },
      {
        "cmd": "/trade decline [player]",
        "desc": "Decline a trade request."
      },
      {
        "cmd": "/trade toggle",
        "desc": "Turn incoming requests on or off."
      },
      {
        "cmd": "/trade claim",
        "desc": "Collect items returned from a cancelled trade."
      }
    ],
    "notes": [
      "If a trade is cancelled for any reason, every offered item goes back to its owner.",
      "Quest items can't be stored in a vault."
    ]
  }
};

const FEATURE_ORDER = [
  "rb-classes",
  "rb-skill-trees",
  "rb-combat",
  "rb-gear",
  "rb-gems",
  "rb-nightmare-temple",
  "rb-guardian-raids",
  "rb-trial-of-reflection",
  "rb-world-bosses",
  "rb-adventurers-guild",
  "rb-neptar",
  "rb-bank-and-trade"
];

const COMMANDS = [
  {
    "group": "Getting Started",
    "items": [
      {
        "cmd": "/register <password> <ConfirmPassword>",
        "desc": "Create your account on your first visit by typing the same password twice."
      },
      {
        "cmd": "/login <password>",
        "desc": "Log in when you come back to the server."
      },
      {
        "cmd": "/changepassword <oldPassword> <newPassword>",
        "desc": "Change your account password."
      },
      {
        "cmd": "/tutorial",
        "desc": "Show your current tutorial step, or offer a replay once you have finished."
      },
      {
        "cmd": "/tutorial hint",
        "desc": "Repeat the instructions for your current tutorial step."
      },
      {
        "cmd": "/tutorial skip [confirm]",
        "desc": "Skip the tutorial and start the story without the finishing reward."
      },
      {
        "cmd": "/tutorial replay",
        "desc": "Walk through the tutorial again from the open world, with no rewards."
      },
      {
        "cmd": "/codex",
        "desc": "Open the Adventurer's Codex with your character, quests, regions, bestiary and lore."
      },
      {
        "cmd": "/arcane journal",
        "desc": "Open your quest journal."
      }
    ]
  },
  {
    "group": "Character & Skills",
    "items": [
      {
        "cmd": "/class",
        "desc": "Open the class screen to read about the classes and pick one."
      },
      {
        "cmd": "/class list",
        "desc": "List every class in chat."
      },
      {
        "cmd": "/class info <class>",
        "desc": "Read about a class and its skills."
      },
      {
        "cmd": "/class choose <class>",
        "desc": "Pick your class: warrior, archer, mage, priest or rogue. Class changes are currently off, so choose carefully."
      },
      {
        "cmd": "/skills",
        "desc": "Open your skills and see how each one is cast."
      },
      {
        "cmd": "/skills bind <slot> <skill>",
        "desc": "Put a skill you know on slot 1, 2 or 3, or your ultimate on slot 4."
      },
      {
        "cmd": "/skilltree",
        "desc": "Open your class skill tree."
      },
      {
        "cmd": "/skilltree list",
        "desc": "List the nodes you own and the ones you can take next."
      },
      {
        "cmd": "/skilltree info <node>",
        "desc": "Show what a node does, what it costs and what it needs."
      },
      {
        "cmd": "/skilltree unlock <node>",
        "desc": "Buy a node with Skill Points and Souls."
      },
      {
        "cmd": "/skilltree refund <node>",
        "desc": "In a town, refund the last node of a path for its Skill Points and half its Souls."
      },
      {
        "cmd": "/stats",
        "desc": "Open your character sheet and spend stat points."
      },
      {
        "cmd": "/stats info",
        "desc": "List your stat points and what each point gives."
      },
      {
        "cmd": "/stats add <stat> [amount]",
        "desc": "Spend points on strength, endurance, dexterity, agility, intellect or spirit."
      },
      {
        "cmd": "/souls",
        "desc": "Show your Souls, your Soul Vessel cap and your glow."
      },
      {
        "cmd": "/power",
        "desc": "See your Combat Power and what makes it up."
      },
      {
        "cmd": "/power <player>",
        "desc": "Check another online player's Combat Power."
      },
      {
        "cmd": "/power top [page]",
        "desc": "View the Combat Power leaderboard."
      },
      {
        "cmd": "/bestiary",
        "desc": "See the creatures you have defeated."
      }
    ]
  },
  {
    "group": "Gear",
    "items": [
      {
        "cmd": "/arcane gear",
        "desc": "See your gear bonuses and active set bonuses."
      },
      {
        "cmd": "/accessories",
        "desc": "Open your necklace, bracelet and ring slots."
      },
      {
        "cmd": "/identify",
        "desc": "Open the Rune Casket in your main hand."
      },
      {
        "cmd": "/itemlock",
        "desc": "Lock the item in your hand so it can't be dropped."
      },
      {
        "cmd": "/unlock",
        "desc": "Unlock the item in your hand so it can be dropped again."
      }
    ]
  },
  {
    "group": "Party & Social",
    "items": [
      {
        "cmd": "/arcane party",
        "desc": "Open your party screen."
      },
      {
        "cmd": "/arcane party invite <player>",
        "desc": "Invite an online player to your party."
      },
      {
        "cmd": "/arcane party accept",
        "desc": "Accept a party invite."
      },
      {
        "cmd": "/arcane party list",
        "desc": "List your party members in chat."
      },
      {
        "cmd": "/arcane party leave",
        "desc": "Leave your party. If you are the leader, this disbands it."
      },
      {
        "cmd": "/arcane party kick <member>",
        "desc": "Remove a member from your party."
      },
      {
        "cmd": "/arcane party promote <member>",
        "desc": "Make another member the party leader."
      },
      {
        "cmd": "/arcane party disband",
        "desc": "Disband your party."
      },
      {
        "cmd": "/arcane party chat [message]",
        "desc": "Send a party message, or switch party chat on or off."
      },
      {
        "cmd": "/pc [message]",
        "desc": "Send a party message, or switch party chat on or off."
      },
      {
        "cmd": "/power party",
        "desc": "Compare Combat Power across your party."
      }
    ]
  },
  {
    "group": "Travel",
    "items": [
      {
        "cmd": "/travel",
        "desc": "Open fast travel to the places you have discovered."
      },
      {
        "cmd": "/travel <place>",
        "desc": "Travel to a discovered place: free from a Sanctuary or Teleport Gate, otherwise it uses a Teleport Crystal."
      },
      {
        "cmd": "/arcane sanctuaries",
        "desc": "See the Sanctuaries you have discovered."
      },
      {
        "cmd": "/arcane rest",
        "desc": "Rest at a discovered Sanctuary to restore your health and Mana."
      },
      {
        "cmd": "/arcane regions",
        "desc": "See the regions you have discovered."
      },
      {
        "cmd": "/map",
        "desc": "Open the world map while you are in the main world."
      },
      {
        "cmd": "/zone",
        "desc": "Show your current tier, its level range and nearby grinding camps."
      },
      {
        "cmd": "/track",
        "desc": "Turn the quest tracker on or off."
      },
      {
        "cmd": "/track <on|off>",
        "desc": "Set the quest tracker on or off."
      },
      {
        "cmd": "/track list",
        "desc": "List your tracked quests in chat."
      },
      {
        "cmd": "/track next",
        "desc": "Switch the tracker to your next quest or contract."
      },
      {
        "cmd": "/stable",
        "desc": "Manage your horses: buy one or choose your active horse."
      },
      {
        "cmd": "/mount",
        "desc": "Call and ride your active horse, or send it away."
      }
    ]
  },
  {
    "group": "Dungeons & Raids",
    "items": [
      {
        "cmd": "/dungeon list",
        "desc": "List the dungeons, their entry levels and your clears."
      },
      {
        "cmd": "/dungeon start <dungeon>",
        "desc": "Enter a dungeon while holding its key in your main hand."
      },
      {
        "cmd": "/dungeon ready",
        "desc": "Confirm your party's ready check."
      },
      {
        "cmd": "/dungeon decline",
        "desc": "Decline your party's ready check."
      },
      {
        "cmd": "/dungeon leave",
        "desc": "Leave your current dungeon run."
      },
      {
        "cmd": "/dungeon info",
        "desc": "Show your current run or your dungeon record."
      },
      {
        "cmd": "/bosses",
        "desc": "See every world boss, where it lives and when it next wakes."
      },
      {
        "cmd": "/temple",
        "desc": "Open the Nightmare Temple menu."
      },
      {
        "cmd": "/temple select <dungeon> <difficulty>",
        "desc": "Choose the Temple dungeon and difficulty as party leader."
      },
      {
        "cmd": "/temple affix <affix>",
        "desc": "Turn one of this week's affixes on or off as party leader."
      },
      {
        "cmd": "/temple blessing [blessing]",
        "desc": "Open the blessings menu, or choose a blessing."
      },
      {
        "cmd": "/temple start",
        "desc": "Start a Temple run."
      },
      {
        "cmd": "/temple ready",
        "desc": "Confirm your party's Temple ready check."
      },
      {
        "cmd": "/temple decline",
        "desc": "Decline your party's Temple ready check."
      },
      {
        "cmd": "/temple leave",
        "desc": "Leave your Temple run."
      },
      {
        "cmd": "/temple claim",
        "desc": "Collect Temple rewards that are waiting for you."
      },
      {
        "cmd": "/temple info",
        "desc": "Show your Temple season progress."
      },
      {
        "cmd": "/temple stats",
        "desc": "Open your seasonal Temple stats."
      },
      {
        "cmd": "/temple stats upgrade <stat> [points]",
        "desc": "Upgrade penetration or resilience."
      },
      {
        "cmd": "/temple armaments",
        "desc": "Open your Divine Armaments."
      },
      {
        "cmd": "/temple rewards",
        "desc": "Browse the Temple rewards."
      },
      {
        "cmd": "/temple records",
        "desc": "Open the Temple records."
      },
      {
        "cmd": "/guardian",
        "desc": "Open the Guardian Raid menu."
      },
      {
        "cmd": "/guardian select <guardian>",
        "desc": "Choose which guardian to hunt as party leader."
      },
      {
        "cmd": "/guardian soul <on|off>",
        "desc": "Choose before entering whether your next win spends today's soul harvest."
      },
      {
        "cmd": "/guardian start",
        "desc": "Start a Guardian Raid."
      },
      {
        "cmd": "/guardian ready",
        "desc": "Confirm your party's raid ready check."
      },
      {
        "cmd": "/guardian decline",
        "desc": "Decline your party's raid ready check."
      },
      {
        "cmd": "/guardian leave",
        "desc": "Leave your Guardian Raid."
      },
      {
        "cmd": "/guardian harvest",
        "desc": "Harvest the guardian's soul after the kill."
      },
      {
        "cmd": "/guardian use <item>",
        "desc": "Use a battle item during a raid."
      },
      {
        "cmd": "/guardian records",
        "desc": "Open your Guardian Raid records."
      },
      {
        "cmd": "/guardian info",
        "desc": "Show guardians slain, today's harvest and your rest bonus."
      },
      {
        "cmd": "/mirror",
        "desc": "Show the Trial of Reflection and what you need to enter it."
      },
      {
        "cmd": "/mirror start [trial]",
        "desc": "Start your solo fight against your own reflection."
      },
      {
        "cmd": "/mirror leave",
        "desc": "Leave the Trial of Reflection."
      }
    ]
  },
  {
    "group": "Guild",
    "items": [
      {
        "cmd": "/guild",
        "desc": "Show your Adventurers' Guild rank and progress."
      },
      {
        "cmd": "/guild rank",
        "desc": "Show your Adventurers' Guild rank and progress."
      },
      {
        "cmd": "/guild contracts",
        "desc": "Browse the contract board. Take and hand in contracts at a Contract Officer."
      },
      {
        "cmd": "/guild active",
        "desc": "List the contracts you currently hold."
      }
    ]
  },
  {
    "group": "Economy",
    "items": [
      {
        "cmd": "/bank",
        "desc": "Find out where to meet the Royal Bank's Banker."
      },
      {
        "cmd": "/trade",
        "desc": "Show how trading with other players works."
      },
      {
        "cmd": "/trade <player>",
        "desc": "Ask a nearby player to trade items and Gold while you are both in a town."
      },
      {
        "cmd": "/trade accept [player]",
        "desc": "Accept a trade request."
      },
      {
        "cmd": "/trade decline [player]",
        "desc": "Decline a trade request."
      },
      {
        "cmd": "/trade toggle",
        "desc": "Turn incoming trade requests on or off."
      },
      {
        "cmd": "/trade claim",
        "desc": "Get back items held from an unfinished trade."
      }
    ]
  },
  {
    "group": "Settings",
    "items": [
      {
        "cmd": "/skillkeys",
        "desc": "See how you cast skills and which keys are bound."
      },
      {
        "cmd": "/skillkeys mouse <on|off>",
        "desc": "Turn mouse-click skill combos on or off."
      },
      {
        "cmd": "/skillkeys <combos|sneak|fkey>",
        "desc": "Choose a casting mode: combos only, sneak plus 1-4, or F then 1-4."
      },
      {
        "cmd": "/combatlog",
        "desc": "Show your current battle log setting."
      },
      {
        "cmd": "/combatlog <all|party|enemies|off>",
        "desc": "Choose whose casts and hits appear in chat."
      },
      {
        "cmd": "/music",
        "desc": "Show which track is playing."
      },
      {
        "cmd": "/music <on|off>",
        "desc": "Turn background music on or off."
      }
    ]
  }
];

const GUIDE = [
  {
    "title": "Install the RuneBlock client",
    "body": "RuneBlock needs its own client mod, and the server disconnects players who don't have it. Download the latest <code>.mrpack</code> from <a href=\"https://github.com/ASIACRAFT-DEV/runeblock-client/releases/latest\" target=\"_blank\" rel=\"noopener\">the releases page</a>, import it into the <b>Modrinth App</b> or <b>Prism Launcher</b>, and start <b>Minecraft 1.21.11</b>.",
    "cmds": []
  },
  {
    "title": "Join and set a password",
    "body": "Add the server <code>51.79.202.18</code> and connect. On your first visit, choose a password of 5 to 30 characters in the window that appears, or type the register command in chat. When you return, log in with the same password.",
    "cmds": [
      "/register <password> <ConfirmPassword>",
      "/login <password>"
    ]
  },
  {
    "title": "Accept the resource pack",
    "body": "A few seconds after you arrive, the server sends the RuneBlock resource pack. <b>Accept it.</b> It carries the game's menus and textures.",
    "cmds": []
  },
  {
    "title": "Finish the tutorial island",
    "body": "New characters start on the tutorial island. Follow the arrow through six stations: the signpost, the <b>Awakening Shrine</b> where you pick <b>Warrior, Archer, Mage, Priest or Rogue</b>, the training yard, your first fight, a <b>Rune Casket</b>, and the portal. Choose your class carefully, because class changes are currently off. Skipping forfeits the finishing reward.",
    "cmds": [
      "/class",
      "/identify",
      "/tutorial hint",
      "/tutorial skip [confirm]"
    ]
  },
  {
    "title": "Learn to fight and grow",
    "body": "Cast with <b>R</b>, <b>Z</b> and <b>V</b>, and use your ultimate with <b>Left Alt</b>. You can also use mouse combos: <code>R-L-R</code>, <code>R-R-R</code>, <code>R-L-L</code> and <code>R-R-L</code> for the ultimate. With a bow, use <code>L-R-L</code>, <code>L-L-L</code>, <code>L-R-R</code> and <code>L-L-R</code>. Each level gives <b>2 stat points</b>, and each level up to 50 gives <b>1 Skill Point</b> to spend in your skill tree with Souls.",
    "cmds": [
      "/skills",
      "/skilltree",
      "/stats"
    ]
  },
  {
    "title": "Play Chapter I",
    "body": "The portal takes you to <b>Cyrandel</b>, and Chapter I starts by itself. Follow the arrow and quest panel into the forest to the Ordeal stones. When the Ordeal turns on you, <b>run for Cyrandel</b>, because that fight isn't meant to be won at level 1. The story then leads you to the Guard Captain and the Adventurers' Guild. Chapter I's quest rewards take you past <b>level 3</b>.",
    "cmds": [
      "/track",
      "/arcane journal",
      "/map"
    ]
  },
  {
    "title": "Earn a dungeon key",
    "body": "Your first dungeon, <b>Mossgrave Cellars</b>, opens at <b>level 3</b> and needs a <b>Mossgrave Cellars Key</b>. Every world boss gives one to each player who deals a meaningful share of the damage. Check where the bosses are and when they wake, and bring a party. The Early Lands boss is the <b>Hollow Stalker</b>.",
    "cmds": [
      "/bosses",
      "/arcane party invite <player>"
    ]
  },
  {
    "title": "Enter Mossgrave Cellars",
    "body": "Hold the key in your main hand and right-click the <b>Mossgrave Warden</b> in Cyrandel, or use the start command. Parties of 1 to 4 fight through four combat rooms and a boss within 20 minutes, and the content is balanced for level 8. There are <b>no resurrections</b>: dying alone ends the run, and fallen party members return at the next checkpoint. A clear can also give a key back. At <b>level 15</b> the Adventurers' Guild, Nightmare Temple, Guardian Raids and Trial of Reflection open up.",
    "cmds": [
      "/dungeon start mossgrave_cellars",
      "/dungeon ready",
      "/dungeon leave"
    ]
  }
];

const NEWS = [
  {
    "tag": "Update",
    "title": "RuneBlock moves to the Open Beta server",
    "body": "The Open Beta server is now the home of RuneBlock. Character progress from the closed beta has been wiped, so everyone starts fresh.",
    "link": "rb-patchnotes.html"
  },
  {
    "tag": "Feature",
    "title": "Skill Trees are live",
    "body": "Every class now earns its skills, ultimates and passives from its own tree. Open yours in game with /skilltree.",
    "link": "rb-patchnotes.html"
  },
  {
    "tag": "Update",
    "title": "New monsters in the Wilds of Shinkara",
    "body": "Town-themed monsters now roam NEPTAR, and the Silent Commander world boss has a new look.",
    "link": "rb-patchnotes.html"
  }
];

const PATCHNOTES = [
  {
    "date": "2026-11-18",
    "tag": "Open Beta",
    "title": "The Open Beta server",
    "changes": [
      {
        "type": "new",
        "text": "<strong>New home for RuneBlock.</strong> The Open Beta server is now the home of RuneBlock."
      },
      {
        "type": "new",
        "text": "<strong>Fresh start for everyone.</strong> Character progress from the closed beta has been wiped."
      },
      {
        "type": "improved",
        "text": "<strong>More Archer passives work.</strong> Nodes such as Run and Gun, Steady Hands, Long Shot, Camouflage and Open Season now apply their effects."
      }
    ]
  },
  {
    "date": "2026-11-17",
    "tag": "Update",
    "title": "Wilds of Shinkara",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Wilds of Shinkara.</strong> New town-themed monsters roam NEPTAR, including Dire Wolves, Bog Oozes, Dune Scorpions, Crag Harpies and Drowned Corsairs."
      },
      {
        "type": "improved",
        "text": "<strong>A new look for the Silent Commander.</strong> The world boss now has its own model and animations."
      },
      {
        "type": "improved",
        "text": "<strong>New skill icons.</strong> Skills that shared a borrowed icon now have their own art on the skill bar and in the skill tree."
      },
      {
        "type": "improved",
        "text": "<strong>Archer tree upgrades.</strong> Nodes such as Long Draw, Piercing Shot, Wide Volley, One Shot and Barbed Trap now apply their effects."
      },
      {
        "type": "fixed",
        "text": "<strong>Deadeye.</strong> It now boosts Power Shot as well as Snipe."
      }
    ]
  },
  {
    "date": "2026-11-16",
    "tag": "Major Update",
    "title": "Skill Trees",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Skill Trees.</strong> Each class now earns its skills, ultimates and passives from a tree. Open it with <code>/skilltree</code>."
      },
      {
        "type": "improved",
        "text": "<strong>Subclasses are now branches.</strong> Your build comes from the tree branches you invest in, so there is no longer a separate subclass pick."
      },
      {
        "type": "improved",
        "text": "<strong>Tome of Rebirth reset.</strong> The Tome now resets your skill tree and stat points and returns the Souls you spent on nodes."
      }
    ]
  },
  {
    "date": "2026-11-15",
    "tag": "Update",
    "title": "Tutorial Island and Mossgrave Cellars",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Tutorial island.</strong> New characters learn the basics on a small island before entering NEPTAR. Use <code>/tutorial skip</code> to skip it."
      },
      {
        "type": "new",
        "text": "<strong>Mossgrave Cellars.</strong> A room-by-room dungeon for up to four players. World bosses drop the key, and the Mossgrave Warden in Cyrandel lets you in."
      },
      {
        "type": "improved",
        "text": "<strong>Daylight in NEPTAR.</strong> The sky now stays bright for every player in the open world."
      },
      {
        "type": "improved",
        "text": "<strong>Boss damage limit removed.</strong> Nightmare Temple and Guardian Raid bosses no longer limit how much a single hit can deal."
      }
    ]
  },
  {
    "date": "2026-11-13",
    "tag": "Update",
    "title": "Music of NEPTAR",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Background music.</strong> Towns, regions, instances and world bosses now have their own music. Use <code>/music off</code> to turn it off."
      },
      {
        "type": "fixed",
        "text": "<strong>Dropping items from your inventory.</strong> It no longer types a skill combo by accident."
      }
    ]
  },
  {
    "date": "2026-11-12",
    "tag": "Update",
    "title": "Identification Rework",
    "changes": [
      {
        "type": "improved",
        "text": "<strong>New identification rolls.</strong> Gear rolls now show quality colours and stars, and holding Shift with the RuneBlock client shows the exact roll."
      },
      {
        "type": "fixed",
        "text": "<strong>Dropping items with a bow.</strong> Pressing the drop key no longer counts as a click in your skill combo."
      },
      {
        "type": "fixed",
        "text": "<strong>Horses at Teleport Gates.</strong> You no longer snap back to the Gate after travelling on horseback."
      }
    ]
  },
  {
    "date": "2026-11-11",
    "tag": "Update",
    "title": "Skill Keys",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Skill keys.</strong> Cast with R, Z, V and Left Alt alongside mouse combos. Rebind them under Options, Controls, RuneBlock."
      },
      {
        "type": "improved",
        "text": "<strong>More stat points.</strong> You now earn 2 stat points per level."
      },
      {
        "type": "improved",
        "text": "<strong>Enhancing and Enchant Scrolls removed.</strong> Gear is now improved through rarity, identification and gems."
      }
    ]
  },
  {
    "date": "2026-11-09",
    "tag": "Major Update",
    "title": "Caskets, Gems and Horses",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Rune Caskets.</strong> Hostile monsters in the open world can drop sealed gear. Right-click a casket or use <code>/identify</code> to open it."
      },
      {
        "type": "new",
        "text": "<strong>Elemental gems.</strong> Combine and socket gems of five elements at the new Gemsmith in Cyrandel."
      },
      {
        "type": "new",
        "text": "<strong>Horses.</strong> Buy a horse at <code>/stable</code> and call it with your Horse Whistle or <code>/mount</code>."
      },
      {
        "type": "new",
        "text": "<strong>Armour condition.</strong> Armour wears down as you take hits. The Blacksmith repairs it for Gold."
      },
      {
        "type": "new",
        "text": "<strong>Starter wands.</strong> Mages can now buy their first wand from the Armourer."
      },
      {
        "type": "improved",
        "text": "<strong>Elemental monsters.</strong> Many monsters now hit with an element, so elemental defence matters."
      },
      {
        "type": "fixed",
        "text": "<strong>Horses in instances.</strong> Horses can no longer be called inside the Nightmare Temple, Guardian Raids or the Trial of Reflection."
      }
    ]
  },
  {
    "date": "2026-11-08",
    "tag": "Major Update",
    "title": "Classes, Trading and Accessories",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Five classes.</strong> Warrior, Archer, Mage, Priest and Rogue have been rebuilt, and you can now choose your class from level 1."
      },
      {
        "type": "new",
        "text": "<strong>Player trading.</strong> Trade items and Gold in any town with <code>/trade</code>."
      },
      {
        "type": "new",
        "text": "<strong>Accessories.</strong> Wear a necklace, a bracelet and two rings. Open the slots with <code>/accessories</code>."
      },
      {
        "type": "improved",
        "text": "<strong>Fairer loot.</strong> Drops now belong to the player who dealt the most damage, and rare drops go straight to the bag."
      },
      {
        "type": "improved",
        "text": "<strong>Bows.</strong> Right-click now fires your bow, and Archer combos start with left-click."
      },
      {
        "type": "improved",
        "text": "<strong>Guild contracts in the quest tracker.</strong> Accepted contracts now show in your tracker, with an arrow to the target when it has a location."
      },
      {
        "type": "improved",
        "text": "<strong>Safer item handling.</strong> Press the drop key twice to drop an item, or lock it with <code>/itemlock</code>."
      }
    ]
  },
  {
    "date": "2026-11-06",
    "tag": "Update",
    "title": "Azkharoth Awakens",
    "changes": [
      {
        "type": "new",
        "text": "<strong>Azkharoth, the God-Eater.</strong> The Worldbreaker raid adds a third Guardian Raid level."
      },
      {
        "type": "new",
        "text": "<strong>Echo of Azkharoth.</strong> A fifth world boss now appears in the Endlands."
      },
      {
        "type": "fixed",
        "text": "<strong>Camp contracts.</strong> Guild hunts tied to a camp now only count monsters from that camp."
      },
      {
        "type": "fixed",
        "text": "<strong>Temple wards.</strong> Arrows and projectile skills can now hit wards in the Nightmare Temple."
      }
    ]
  }
];

const TEAM = [
  {
    "group": "Core Team",
    "members": [
      {
        "name": "Kuro",
        "handle": "kuwusaki",
        "role": "Owner & Lead Developer",
        "avatar": "assets/team/kuro.gif"
      },
      {
        "name": "Indi",
        "handle": "IndigoPulse13_",
        "role": "Owner & Content Design",
        "avatar": "assets/team/indigopulse.jpg"
      },
      {
        "name": "Ett",
        "role": "Game Master",
        "mc": "EttLel"
      }
    ]
  }
];

const VOTE_SITES = [
  {
    "name": "Minecraft-MP",
    "url": ""
  },
  {
    "name": "MinecraftServers.org",
    "url": ""
  },
  {
    "name": "TopG",
    "url": ""
  },
  {
    "name": "TopMinecraftServers",
    "url": ""
  },
  {
    "name": "Minecraft-ServerList",
    "url": ""
  },
  {
    "name": "MineList.net",
    "url": ""
  },
  {
    "name": "Minecraft-Server-List.com",
    "url": ""
  },
  {
    "name": "MinecraftBestServers",
    "url": ""
  }
];
