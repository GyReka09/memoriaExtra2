import Kartya from "./Kartya.js";
import Jatek from "./Jatek.js";
import { verdak } from "./verdakLista.js";
import { szornyek } from "./szornyLista.js";
import { harry } from "./harryLista.js";
import { extrem } from "./extremLista.js";
import { LeaderBoard } from "./leaderBoardLista.js";
const szuloElem = document.querySelector(".jatekter");
const ujJatekGomb = document.querySelector(".ujra");
const leaderGomb = document.querySelector(".leader");
let hasznaltLista = [];
let szint;
let szornyesGomb, hpGomb, verdaGomb, extremGomb;
let konnyuGomb, kozepesGomb, nehezGomb;
let jatekter;
console.log(konnyuGomb, kozepesGomb, nehezGomb);
temaGombInit();
temaGombValasztas();
kezdooldalMegjelenites();

function kezdooldalMegjelenites() {
  szuloElem.innerHTML = `
    <button class="szorny">Szörnyek</button>
    <button class="harry">Harry Potter</button>
    <button class="verdak">Verdák</button>
    <button class="extrem">Extrém</button>
  `;
  temaGombInit();
  temaGombValasztas();
}


function temaGombValasztas() {
  szornyesGomb.addEventListener("click", () => {
    console.log("hvhjv");
    hasznaltLista = szornyek;
    nehezseg();
    console.log(konnyuGomb, kozepesGomb, nehezGomb);
  });
  hpGomb.addEventListener("click", () => {
    console.log("hvhjv");
    hasznaltLista = harry;
    nehezseg();
  });
  verdaGomb.addEventListener("click", () => {
    console.log("hvhjv");
    hasznaltLista = verdak;
    nehezseg();
  });
  extremGomb.addEventListener("click", () => {
    hasznaltLista = extrem;
    szuloElem.innerHTML = `<div class = "kartyater"></div>`;
    jatekter = document.querySelector(".kartyater");
    new Jatek(hasznaltLista, 120);
    const kartyaMenny = document.querySelectorAll("img");
    console.log(kartyaMenny.length);
  });
}

ujJatekGomb.addEventListener("click", () => {
  szuloElem.innerHTML = ` <button class="szorny">Szörnyek</button>
            <button class="harry">Harry Potter</button>
            <button class="verdak">Verdák</button>
            <button class="extrem">Extrém</button>`;
  temaGombInit();
  temaGombValasztas();
});



leaderGomb.addEventListener("click", () => {
  megjelenitLeaderBoard(LeaderBoard);
});

console.log(konnyuGomb, kozepesGomb, nehezGomb);

function nehezsegGombValasztas() {
  konnyuGomb.addEventListener("click", () => {
    szint = 20;
    console.log(szint);
    szuloElem.innerHTML = `<div class = "kartyater"></div>
                          <div class="stopper">Idő: 0 mp</div>`;
    jatekter = document.querySelector(".kartyater");
    new Jatek(hasznaltLista, szint);
  });
  kozepesGomb.addEventListener("click", () => {
    szint = 30;
    console.log(szint);
    szuloElem.innerHTML = `<div class = "kartyater"></div>`;
    jatekter = document.querySelector(".kartyater");
    new Jatek(hasznaltLista, szint);
  });
  nehezGomb.addEventListener("click", () => {
    szint = 40;
    console.log(szint);
    szuloElem.innerHTML = `<div class = "kartyater"></div>`;
    jatekter = document.querySelector(".kartyater");
    new Jatek(hasznaltLista, szint);
  });
}
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
           `;
}
console.log(LeaderBoard)
function megjelenitLeaderBoard(lista) {
  if (!lista || !Array.isArray(lista)) {
    szuloElem.innerHTML = "<p>Nincs elérhető leaderboard adat.</p>";
    return;
  }
  const rendezettLista = lista.slice().sort((a, b) => a.time - b.time);
  szuloElem.innerHTML = `
    <div class="leaderboard">
      ${lista.map(player => `
        <div class="leader-entry">
          <strong>${player.name}</strong> - ${player.time} sec
        </div>
      `).join('')}
    </div>
    <button class="vissza">Vissza a témákhoz</button>
  `;

 
  const visszaGomb = szuloElem.querySelector(".vissza");
  visszaGomb.addEventListener("click", () => {
    kezdooldalMegjelenites();
  });
}

function nehezseg() {
  nehezsegGombMegjelenit();
  nehezsegGombInit();
  nehezsegGombValasztas();
}
