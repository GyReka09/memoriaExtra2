import Kartya from "./Kartya.js";
import Jatek from "./Jatek.js";
import { szornyek } from "./szornyLista.js";
const szuloElem = document.querySelector(".jatekter");
let hasznaltLista = [];
let szint;
let szornyesGomb, hpGomb, verdaGomb, extremGomb;
let konnyuGomb, kozepesGomb, nehezGomb;
temaGombInit();
szornyesGomb.addEventListener("click", () => {
  console.log("hvhjv");
  hasznaltLista = szornyek;
  nehezseg();
  console.log(konnyuGomb, kozepesGomb, nehezGomb);
});
hpGomb.addEventListener("click", () => {
  console.log("hvhjv");
  hasznaltLista = [];
  nehezseg();
});
verdaGomb.addEventListener("click", () => {
  console.log("hvhjv");
  hasznaltLista = [];
  nehezseg();
});

konnyuGomb.addEventListener("click", () => {
  szint = 20;
  console.log(szint);
  new Jatek(hasznaltLista, szint);
});
kozepesGomb.addEventListener("click", () => {
  szint = 30;
  console.log(szint);
});
nehezGomb.addEventListener("click", () => {
  szint = 40;
  console.log(szint);
  nehezseg();
});

function temaGombInit() {
  szornyesGomb = document.querySelector(".szorny");
  hpGomb = document.querySelector(".harry");
  verdaGomb = document.querySelector(".verdak");
  extremGomb = document.querySelector(".extrem");
}
function nehezsegGombInit() {
  konnyuGomb = document.querySelector(".konnyu");
  kozepesGomb = document.querySelector(".kozepes");
  nehezGomb = document.querySelector(".nehez");
}
function nehezsegGombMegjelenit() {
  szuloElem.innerHTML = `  <button class="konnyu">Könnyű</button>
            <button class="kozepes">Közepes</button>
            <button class="nehez">Nehéz</button>
            <button class="extrem">Extrém</button>`;
}
function nehezseg() {
  nehezsegGombMegjelenit();
  nehezsegGombInit();
}
