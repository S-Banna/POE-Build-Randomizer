import { go } from "./ascendancy.js";
import { go2 } from "./gem.js";
import { go3 } from "./keystone.js";

let boxFillasc = document.getElementById("second");
let boxFillgem = document.getElementById("third");
let boxFillkey = document.getElementById("fourth");
let imgFillkey = document.getElementById("keyImgHere");
let imgFill2key = document.getElementById("keyImg2Here");
let generator = document.getElementById("generator");
let ascHere = document.getElementById("ascHere");
let gemHere = document.getElementById("gemHere");
let keystoneHere = document.getElementById("keystoneHere");
let keystone2Here = document.getElementById("keystone2Here");
let secondKey = document.getElementById("secondKey");

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
  gemHere.href = returnedArr2[2];
  //below for keystone
  let returnedArr3 = go3();
  keystoneHere.style.color = "orange";
  keystoneHere.textContent = returnedArr3[0];
  keystoneHere.href = returnedArr3[2];
  boxFillkey.classList.remove("hidden");
  boxFillkey.classList.add("unhidden");
  imgFillkey.src = "keystones/" + returnedArr3[0].replaceAll(" ", "") + ".png";
  if (returnedArr3.length < 4) {
    secondKey.classList.add("hidden");
  } else {
    secondKey.classList.add("unhidden");
    secondKey.classList.remove("hidden");
    keystone2Here.style.color = "orange";
    keystone2Here.textContent = returnedArr3[3];
    keystone2Here.href = returnedArr3[5];
    imgFill2key.src =
      "keystones/" + returnedArr3[3].replaceAll(" ", "") + ".png";
  }
});
