import { go } from "./ascendancy.js";
import { go2 } from "./gem.js";

let boxFillasc = document.getElementById("second");
let boxFillgem = document.getElementById("third");
let generator = document.getElementById("generator");
let ascHere = document.getElementById("ascHere");
let gemHere = document.getElementById("gemHere");

generator.addEventListener("click", function () {
  //below for ascendancy
  let returnedArr = go();
  boxFillasc.classList.remove("hidden");
  boxFillasc.classList.add("unhidden");
  ascHere.textContent = returnedArr[0];
  ascHere.style.color = returnedArr[1];
  //below for gem
  let returnedArr2 = go2();
  boxFillgem.classList.remove("hidden");
  boxFillgem.classList.add("unhidden");
  gemHere.textContent = returnedArr2[0];
  gemHere.style.color = returnedArr2[1];
});
