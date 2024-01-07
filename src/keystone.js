let keystones = [
  "Acrobatics",
  "Ancestral Bond",
  "Arrow Dancing",
  "Avatar of Fire",
  "Blood Magic",
  "Call to Arms",
  "Chainbreaker",
  "Chaos Innoculation",
  "Conduit",
  "Corrupted Soul",
  "Crimson Dance",
  "Dance with Death",
  "Disciple of Kitava",
  "Divine Flesh",
  "Divine Shield",
  "Eldritch Battery",
  "Elemental Equilibrium",
  "Elemental Overload",
  "Eternal Youth",
  "Ghost Dance",
  "Ghost Reaver",
  "Glancing Blows",
  "Hex Master",
  "Hollow Palm Technique",
  "Imbalanced Guard",
  "Immortal Ambition",
  "Inner Conviction",
  "Iron Grip",
  "Iron Reflexes",
  "Iron Will",
  "Kineticism",
  "Lethe Shade",
  "Lone Messenger",
  "Magebane",
  "Mind Over Matter",
  "Minion Instability",
  "Nature's Patience",
  "Necromantic Aegis",
  "Pain Attunement",
  "Perfect Agony",
  "Pitfighter",
  "Point Blank",
  "Power of Purpose",
  "Precise Technique",
  "Resolute Technique",
  "Runebinder",
  "Second Sight",
  "Secrets of Suffering",
  "Solipsism",
  "Strength of Blood",
  "Supreme Decadence",
  "Supreme Ego",
  "Supreme Grandstanding",
  "Supreme Ostentation",
  "Tempered by War",
  "The Agnostic",
  "The Impaler",
  "The Traitor",
  "Transcendence",
  "Unwavering Stance",
  "Vaal Pact",
  "Versatile Combatant",
  "Veteran's Awareness",
  "Wicked Ward",
  "Wind Dancer",
  "Zealot's Oath",
];

let fourth = document.getElementById("fourth");

function go3() {
  let variable = document.getElementById("keystones").value;
  if (variable == "yesKey") {
    let returnArr = [];
    let num = Math.floor(Math.random() * 66);
    returnArr.push(keystones[num]);
    returnArr.push("orange");
    returnArr.push(
      "https://www.poewiki.net/wiki/" + keystones[num].replace(" ", "_"),
    );
    return returnArr;
  } else {
    fourth.classList.add("hidden");
    fourth.classList.remove("unhidden");
    return;
  }
}

export { go3 };
