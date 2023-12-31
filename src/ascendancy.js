let ascendancies = [
  "Chieftan",
  "Berserker",
  "Juggernaut",
  "Hierophant",
  "Guardian",
  "Inquisitor",
  "Occultist",
  "Elementalist",
  "Necromancer",
  "Assassin",
  "Trickster",
  "Saboteur",
  "Deadeye",
  "Pathfinder",
  "Raider",
  "Slayer",
  "Champion",
  "Gladiator",
];

function go() {
    let valueGo = document.getElementById("ascendancy").value;
    let returnArr = [];

    switch (valueGo) {
        case "anyAsc":  
            //eslint-disable-next-line no-case-declarations
            let local = Math.floor(Math.random() * ascendancies.length); 
            returnArr.push(ascendancies[local]);

            switch (local) {
                case 0:
                case 1:
                case 2: {
                    returnArr.push("red");
                    break;
                }
                case 3:
                case 4:
                case 5: {
                    returnArr.push("rgb(12, 182, 174)");
                    break;
                }
                case 6:
                case 7:
                case 8: {
                    returnArr.push("rgb(46, 46, 255)");
                    break;
                }
                case 9:
                case 10:
                case 11: {
                    returnArr.push("rgb(182, 12, 182)");
                    break;
                }
                case 12:
                case 13:
                case 14: {
                    returnArr.push("rgb(53, 235, 83)");
                    break;
                }
                case 15:
                case 16:
                case 17: {
                    returnArr.push("rgb(255, 255, 52)");
                    break;
                }
            }
            break;
        case "marauder":
            returnArr.push(ascendancies[Math.floor(Math.random() * 3)]);
            returnArr.push("red");
            break;
        case "templar":
            returnArr.push(ascendancies[Math.floor(Math.random() * 3) + 3]);
            returnArr.push("rgb(12, 182, 174)");
            break;
        case "witch":
            returnArr.push(ascendancies[Math.floor(Math.random() * 3) + 6]);
            returnArr.push("rgb(46, 46, 255)");
            break;
        case "shadow":
            returnArr.push(ascendancies[Math.floor(Math.random() * 3) + 9]);
            returnArr.push("rgb(182, 12, 182)");
            break;
        case "ranger":
            returnArr.push(ascendancies[Math.floor(Math.random() * 3) + 12]);
            returnArr.push("rgb(53, 235, 83)");
            break;
        case "duelist":
            returnArr.push(ascendancies[Math.floor(Math.random() * 3) + 15]);
            returnArr.push("rgb(255, 255, 52)");
            break;
    }

    return returnArr;
}
export { go };
