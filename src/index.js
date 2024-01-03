import {go} from "./ascendancy.js";
import {go2} from "./gem.js";

let boxFill = document.getElementById("second");
let generator = document.getElementById("generator");
let ascHere = document.getElementById("ascHere");

generator.addEventListener("click", function() {
    let returnedArr = go();
    console.log(returnedArr)
    boxFill.classList.remove("hidden");
    boxFill.classList.add("unhidden");
    ascHere.textContent = returnedArr[0];
    ascHere.style.color = returnedArr[1];
})

go2()
