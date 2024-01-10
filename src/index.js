import { go } from "./ascendancy.js";
import { go2 } from "./gem.js";
import { go3 } from "./keystone.js"

let boxFillasc = document.getElementById("second");
let boxFillgem = document.getElementById("third");
let boxFillkey = document.getElementById("fourth");
let imgFillkey = document.getElementById("keyImgHere")
let generator = document.getElementById("generator");
let ascHere = document.getElementById("ascHere");
let gemHere = document.getElementById("gemHere");
let keystoneHere = document.getElementById("keystoneHere");

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
  //below for keystone
  let returnedArr3 = go3();
  keystoneHere.style.color = "orange";
  keystoneHere.textContent = returnedArr3[0];
  keystoneHere.href = returnedArr3[2];
  boxFillkey.classList.remove("hidden");
  boxFillkey.classList.add("unhidden");
  imgFillkey.src = "keystones/" + returnedArr3[0].replaceAll(" ", "") + ".png";
});
