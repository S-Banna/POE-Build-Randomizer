let redGems = [
  "Absolution",
  "Absolution of Inspiring",
  "Ancestral Cry",
  "Ancestral Protector",
  "Ancestral Warchief",
  "Animate Guardian",
  "Animate Guardian of Smiting",
  "Battlemages Cry",
  "Bladestorm",
  "Bladestorm of Uncertainty",
  "Boneshatter",
  "Boneshatter of Carnage",
  "Boneshatter of Complex Trauma",
  "Chain Hook",
  "Cleave",
  "Cleave of Rage",
  "Consecrated Path",
  "Consecrated Path of Endurance",
  "Corrupting Fever",
  "Decoy Totem",
  "Defiance Banner",
  "Devouring Totem",
  "Dominating Blow",
  "Dominating Blow of Inspiring",
  "Earthquake",
  "Earthquake of Amplification",
  "Earthshatter",
  "Earthshatter of Fragility",
  "Earthshatter of Prominence",
  "Exsanguinate",
  "Exsanguinate of Transmission",
  "Frozen Legion",
  "Frozen Legion of Rallying",
  "Generals Cry",
  "Glacial Hammer",
  "Glacial Hammer of Shattering",
  "Ground Slam",
  "Ground Slam of Earthshaking",
  "Heavy Strike",
  "Herald of Ash",
  "Herald of Purity",
  "Holy Flame Totem",
  "Holy Flame Totem of Ire",
  "Ice Crash",
  "Ice Crash of Cadence",
  "Infernal Blow",
  "Infernal Blow of Immolation",
  "Leap Slam",
  "Leap Slam of Groundbreaking",
  "Molten Shell",
  "Molten Strike",
  "Molten Strike of the Zenith",
  "Perforate",
  "Perforate of Bloodshed",
  "Perforate of Duality",
  "Rage Vortex",
  "Rage Vortex of Berserking",
  "Reap",
  "Reckoning",
  "Shield Charge",
  "Shield Crush",
  "Shield Crush of the Chieftain",
  "Shockwave Totem",
  "Smite",
  "Smite of Divine Judgement",
  "Static Strike",
  "Summon Flame Golem",
  "Summon Flame Golem of Hordes",
  "Summon Flame Golem of the Meteor",
  "Summon Stone Golem",
  "Summon Stone Golem of Hordes",
  "Summon Stone Golem of Safeguarding",
  "Sunder",
  "Sunder of Earthbreaking",
  "Sweep",
  "Tectonic Slam",
  "Tectonic Slam of Cataclysm",
  "Vaal Absolution",
  "Vaal Ancestral Warchief",
  "Vaal Cleave",
  "Vaal Domination",
  "Vaal Earthquake",
  "Vaal Glacial Hammer",
  "Vaal Ground Slam",
  "Vaal Molten Strike",
  "Vaal Reap",
  "Vaal Smite",
  "Vaal Volcanic Fissure",
  "Vengeance",
  "Vigilant Strike",
  "Volcanic Fissure",
  "Volcanic Fissure of Snaking",
];

let blueGems = [
  "Arc",
  "Arc of Oscillating",
  "Arc of Surging",
  "Arcanist Brand",
  "Armageddon Brand",
  "Armageddon Brand of Recall",
  "Armageddon Brand of Volatility",
  "Ball Lightning",
  "Ball Lightning of Orbiting",
  "Ball Lightning of Static",
  "Bane",
  "Bane of Condemnation",
  "Blazing Salvo",
  "Blight",
  "Blight of Atrophy",
  "Blight of Contagion",
  "Bodyswap",
  "Bodyswap of Sacrifice",
  "Cold Snap",
  "Cold Snap of Power",
  "Contagion",
  "Contagion of Subsiding",
  "Contagion of Transference",
  "Conversion Trap",
  "Crackling Lance",
  "Crackling Lance of Branching",
  "Crackling Lance of Disintegration",
  "Creeping Frost",
  "Dark Pact",
  "Despair",
  "Destructive Link",
  "Discharge",
  "Discharge of Misery",
  "Divine Ire",
  "Divine Ire of Disintegration",
  "Divine Ire of Holy Lightning",
  "Energy Blade",
  "Essence Drain",
  "Essence Drain of Desperation",
  "Essence Drain of Wickedness",
  "Eye of Winter",
  "Eye of Winter of Finality",
  "Eye of Winter of Transience",
  "Fireball",
  "Firestorm",
  "Firestorm of Meteors",
  "Firestorm of Pelting",
  "Flame Dash",
  "Flame Dash of Return",
  "Flame Surge",
  "Flame Surge of Combusting",
  "Flame Wall",
  "Flameblast",
  "Flameblast of Celerity",
  "Flameblast of Contraction",
  "Flammability",
  "Forbidden Rite",
  "Forbidden Rite of Soul Sacrifice",
  "Freezing Pulse",
  "Frost Bomb",
  "Frost Bomb of Forthcoming",
  "Frost Bomb of Instability",
  "Frost Wall",
  "Frostblink",
  "Frostblink of Wintry Blast",
  "Frostbolt",
  "Galvanic Field",
  "Galvanic Field of Intensity",
  "Glacial Cascade",
  "Glacial Cascade of the Fissure",
  "Herald of Thunder",
  "Hexblast",
  "Hexblast of Contradiction",
  "Hexblast of Havoc",
  "Hydrosphere",
  "Ice Nova",
  "Ice Nova of Deep Freeze",
  "Ice Nova of Frostbolts",
  "Ice Spear",
  "Ice Spear of Splitting",
  "Icicle Mine",
  "Icicle Mine of Fanning",
  "Icicle Mine of Sabotage",
  "Incinerate",
  "Kinetic Blast",
  "Kinetic Bolt",
  "Kinetic Bolt of Fragmentation",
  "Lightning Conduit",
  "Lightning Conduit of the Heavens",
  "Lightning Spire Trap",
  "Lightning Spire Trap of Overloading",
  "Lightning Spire Trap of Zapping",
  "Lightning Tendrils",
  "Lightning Tendrils of Eccentricity",
  "Lightning Tendrils of Escalation",
  "Lightning Trap",
  "Lightning Trap of Sparking",
  "Lightning Warp",
  "Orb of Storms",
  "Penance Brand",
  "Penance Brand of Conduction",
  "Penance Brand of Dissipation",
  "Power Siphon",
  "Power Siphon of the Archmage",
  "Purifying Flame",
  "Purifying Flame of Revelations",
  "Pyroclast Mine",
  "Pyroclast Mine of Sabotage",
  "Raise Spectre",
  "Raise Spectre of Transience",
  "Raise Zombie",
  "Raise Zombie of Falling",
  "Raise Zombie of Slamming",
  "Righteous Fire",
  "Righteous Fire of Arcane Devotion",
  "Rolling Magma",
  "Scorching Ray",
  "Scorching Ray of Immolation",
  "Shock Nova",
  "Sigil of Power",
  "Siphoning Trap",
  "Soulrend",
  "Soulrend of Reaping",
  "Soulrend of the Spiral",
  "Spark",
  "Spark of the Nova",
  "Spark of Unpredictability",
  "Spellslinger",
  "Storm Brand",
  "Storm Brand of Indecision",
  "Storm Burst",
  "Storm Call",
  "Stormbind",
  "Stormbind of Teleportation",
  "Stormblast Mine",
  "Summon Carrion Golem",
  "Summon Carrion Golem of Hordes",
  "Summon Carrion Golem of Scavenging",
  "Summon Chaos Golem",
  "Summon Chaos Golem of Hordes",
  "Summon Chaos Golem of the Maelström",
  "Summon Holy Relic",
  "Summon Lightning Golem",
  "Summon Lightning Golem of Hordes",
  "Summon Raging Spirit",
  "Summon Raging Spirit of Enormity",
  "Summon Reaper",
  "Summon Reaper of Eviscerating",
  "Summon Reaper of Revenants",
  "Summon Skeletons",
  "Summon Skeletons of Archers",
  "Summon Skeletons of Mages",
  "Summon Skitterbots",
  "Tempest Shield",
  "Vaal Arc",
  "Vaal Blight",
  "Vaal Cold Snap",
  "Vaal Fireball",
  "Vaal Firestorm",
  "Vaal Flameblast",
  "Vaal Ice Nova",
  "Vaal Lightning Trap",
  "Vaal Power Siphon",
  "Vaal Righteous Fire",
  "Vaal Spark",
  "Vaal Storm Call",
  "Vaal Summon Skeletons",
  "Void Sphere",
  "Void Sphere of Rending",
  "Voltaxic Burst",
  "Vortex",
  "Vortex of Projection",
  "Wave of Conviction",
  "Winter Orb",
  "Wintertide Brand",
];

let greenGems = [
  "Ambush",
  "Animate Weapon",
  "Animate Weapon of Ranged Arms",
  "Animate Weapon of Self Reflection",
  "Artillery Ballista",
  "Barrage",
  "Barrage of Volley Fire",
  "Bear Trap",
  "Bear Trap of Skewers",
  "Blade Blast",
  "Blade Blast of Dagger Detonation",
  "Blade Blast of Unloading",
  "Blade Flurry",
  "Blade Flurry of Incision",
  "Blade Trap",
  "Blade Trap of Greatswords",
  "Blade Trap of Laceration",
  "Blade Vortex",
  "Blade Vortex of the Scythe",
  "Bladefall",
  "Bladefall of Impaling",
  "Bladefall of Volleys",
  "Blast Rain",
  "Blink Arrow",
  "Blink Arrow of Bombarding Clones",
  "Blink Arrow of Prismatic Clones",
  "Burning Arrow",
  "Burning Arrow of Vigour",
  "Caustic Arrow",
  "Caustic Arrow of Poison",
  "Charged Dash",
  "Cobra Lash",
  "Cremation",
  "Cremation of Exhuming",
  "Cremation of the Volcano",
  "Cyclone",
  "Cyclone of Tumult",
  "Desecrate",
  "Detonate Dead",
  "Detonate Dead of Chain Reaction",
  "Detonate Dead of Scavenging",
  "Double Strike",
  "Double Strike of Impaling",
  "Double Strike of Momentum",
  "Dual Strike",
  "Dual Strike of Ambidexterity",
  "Elemental Hit",
  "Ensnaring Arrow",
  "Ethereal Knives",
  "Ethereal Knives of Lingering Blades",
  "Ethereal Knives of the Massacre",
  "Explosive Arrow",
  "Explosive Concoction",
  "Explosive Concoction of Destruction",
  "Explosive Trap",
  "Explosive Trap of Magnitude",
  "Explosive Trap of Shrapnel",
  "Fire Trap",
  "Fire Trap of Blasting",
  "Flamethrower Trap",
  "Flicker Strike",
  "Flicker Strike of Power",
  "Frenzy",
  "Frenzy of Onslaught",
  "Frost Blades",
  "Frost Blades of Katabasis",
  "Galvanic Arrow",
  "Galvanic Arrow of Energy",
  "Galvanic Arrow of Surging",
  "Herald of Agony",
  "Herald of Ice",
  "Ice Shot",
  "Ice Trap",
  "Ice Trap of Hollowness",
  "Lacerate",
  "Lacerate of Butchering",
  "Lacerate of Haemorrhage",
  "Lancing Steel",
  "Lancing Steel of Spraying",
  "Lightning Arrow",
  "Lightning Arrow of Electrocution",
  "Lightning Strike",
  "Lightning Strike of Arcing",
  "Mirror Arrow",
  "Mirror Arrow of Bombarding Clones",
  "Mirror Arrow of Prismatic Clones",
  "Pestilent Strike",
  "Plague Bearer",
  "Poisonous Concoction",
  "Puncture",
  "Rain of Arrows",
  "Rain of Arrows of Artillery",
  "Rain of Arrows of Saturation",
  "Reave",
  "Reave of Refraction",
  "Riposte",
  "Scourge Arrow",
  "Scourge Arrow of Menace",
  "Seismic Trap",
  "Seismic Trap of Swells",
  "Shattering Steel",
  "Shattering Steel of Ammunition",
  "Shrapnel Ballista",
  "Shrapnel Ballista of Steel",
  "Siege Ballista",
  "Siege Ballista of Splintering",
  "Snipe",
  "Spectral Helix",
  "Spectral Shield Throw",
  "Spectral Shield Throw of Shattering",
  "Spectral Throw",
  "Spectral Throw of Materialising",
  "Split Arrow",
  "Split Arrow of Splitting",
  "Splitting Steel",
  "Splitting Steel of Ammunition",
  "Storm Rain",
  "Storm Rain of the Conduit",
  "Storm Rain of the Fence",
  "Summon Ice Golem",
  "Summon Ice Golem of Hordes",
  "Summon Ice Golem of Shattering",
  "Temporal Rift",
  "Tornado",
  "Tornado Shot",
  "Tornado Shot of Cloudburst",
  "Toxic Rain",
  "Toxic Rain of Sporeburst",
  "Toxic Rain of Withering",
  "Unearth",
  "Vaal Animate Weapon",
  "Vaal Blade Flurry",
  "Vaal Blade Vortex",
  "Vaal Burning Arrow",
  "Vaal Caustic Arrow",
  "Vaal Cyclone",
  "Vaal Detonate Dead",
  "Vaal Double Strike",
  "Vaal Flicker Strike",
  "Vaal Ice Shot",
  "Vaal Lightning Arrow",
  "Vaal Lightning Strike",
  "Vaal Rain of Arrows",
  "Vaal Reave",
  "Vaal Spectral Throw",
  "Vaal Venom Gyre",
  "Venom Gyre",
  "Viper Strike",
  "Viper Strike of the Mamba",
  "Volatile Dead",
  "Volatile Dead of Confinement",
  "Volatile Dead of Seething",
  "Whirling Blades",
  "Wild Strike",
  "Wild Strike of Extremes",
];

function go2() {
  let valueGo = document.getElementById("gem").value;
  let returnArr = [];

  switch (valueGo) {
    case "red":
      //eslint-disable-next-line no-case-declarations
      let numb = Math.floor(Math.random() * 92);
      returnArr.push(redGems[numb]);
      returnArr.push("red");
      break;
    case "blue":
      //eslint-disable-next-line no-case-declarations
      let numb2 = Math.floor(Math.random() * 175);
      returnArr.push(blueGems[numb2]);
      returnArr.push("rgb(46, 46, 255)");
      break;
    case "green":
      //eslint-disable-next-line no-case-declarations
      let numb3 = Math.floor(Math.random() * 155);
      returnArr.push(greenGems[numb3]);
      returnArr.push("rgb(53, 235, 83)");
      break;
    case "anyGem":
      //eslint-disable-next-line no-case-declarations
      let one = Math.floor(Math.random() * 4);
      while (one == 0) {
        one = Math.floor(Math.random() * 4);
      }
      switch (one) {
        case 1:
          //eslint-disable-next-line no-case-declarations
          let numb = Math.floor(Math.random() * 92);
          returnArr.push(redGems[numb]);
          returnArr.push("red");
          break;
        case 2:
          //eslint-disable-next-line no-case-declarations
          let numb2 = Math.floor(Math.random() * 175);
          returnArr.push(blueGems[numb2]);
          returnArr.push("rgb(46, 46, 255)");
          break;
        case 3:
          //eslint-disable-next-line no-case-declarations
          let numb3 = Math.floor(Math.random() * 155);
          returnArr.push(greenGems[numb3]);
          returnArr.push("rgb(53, 235, 83)");
          break;
      }
  }

  return returnArr;
}

export { go2 };
