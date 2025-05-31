import Kartya from "./Kartya.js";
import { KonnyuLeader } from "./leaderboard/KonnyuLeaderBoardLista.js";
export default class Jatek {
  #stopperId = null;
  #idő = 0;
  #stopperFut = false;
  stopperElem;
  #kivalasztottKartyaLista;
  #kartyaLista;
  #db;
  #vegleges;
  #lista = [];
  #nehezseg;
  #beallitott = [];
  #leaderboard;

  constructor(lista, nehezseg, leaderboard) {
    this.#leaderboard = leaderboard;
    this.stopperElem = document.querySelector(".stopper");
    this.stopperIndit();
    this.#lista = lista;
    this.#nehezseg = nehezseg;
    this.#db = 0;
    this.keverendoLista();
    this.#kartyaLista = [];
    this.#kivalasztottKartyaLista = [];
    this.#vegleges = [];
    this.kever();
    this.fordit();
    this.init();
  }
  init() {
    const jatekterElem = document.querySelector(".kartyater");
    jatekterElem.innerHTML = ``;
    this.#kartyaLista = [];
    this.#beallitott.forEach((kartya) => {
      this.#kartyaLista.push(
        new Kartya(
          kartya.id,
          false,
          document.querySelector(".kartyater"),
          this.#beallitott
        )
      );
    });
    this.#vegleges = [];
  }
  keverendoLista() {
    for (let index = 0; index < this.#nehezseg; index++) {
      this.#beallitott.push(this.#lista[index]);
    }
  }
  kever() {
    let currentIndex = this.#beallitott.length;

    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.#beallitott[currentIndex], this.#beallitott[randomIndex]] = [
        this.#beallitott[randomIndex],
        this.#beallitott[currentIndex],
      ];
    }
  }


ellenorzes() {
  if (this.#vegleges.length === this.#nehezseg) {
    this.stopperMegallit();
    setTimeout(() => {
      const nev = prompt(`Gratulálok! Add meg a neved:`);
      if (nev) {
        this.#leaderboard.push({ name: nev, time: this.#idő, level: this.#nehezseg });
      }      
      alert(`Gratulálok, kész vagy! Időd: ${this.#idő} másodperc`);
      this.kever();
      this.init();
      this.#idő = 0;
      if (this.stopperElem) this.stopperElem.textContent = `Idő: 0 mp`;
      this.stopperIndit();
    }, 500);
  }
}


  fordit() {
    window.addEventListener("fordit", (event) => {
      const kartya = event.detail.kartya;

      if (kartya.getBlokkolt()) return;

      this.#db++;
      this.#kivalasztottKartyaLista.push(kartya);
      kartya.setAllapot();
      kartya.setBlokkolt(true);

      if (this.#db === 2) {
        this.#kartyaLista.forEach((k) => k.setBlokkolt(true));

        const [kartya1, kartya2] = this.#kivalasztottKartyaLista;

        if (kartya1.getId() === kartya2.getId()) {
          this.#vegleges.push(kartya1, kartya2);
          setTimeout(() => {
            this.#kartyaLista.forEach((k) => {
              if (
                k.getId() !== kartya1.getId() ||
                (k !== kartya1 && k !== kartya2)
              ) {
                k.setBlokkolt(false);
              }
            });

            this.#db = 0;
            this.#kivalasztottKartyaLista = [];
            this.ellenorzes();
          }, 1000);

          return;
        }

        setTimeout(() => {
          this.#kivalasztottKartyaLista.forEach((k) => {
            k.setAllapot();
            k.setBlokkolt(false);
          });

          this.#kartyaLista.forEach((k) => {
            if (!this.#kivalasztottKartyaLista.includes(k)) {
              k.setBlokkolt(false);
            }
          });

          this.#db = 0;
          this.#kivalasztottKartyaLista = [];
        }, 1000);
      }
    });
  }

  stopperIndit() {
    if (this.#stopperFut) return; // Már fut
    this.#stopperFut = true;
    this.#idő = 0;

    this.#stopperId = setInterval(() => {
      this.#idő++;
      if (this.stopperElem) {
        this.stopperElem.textContent = `Idő: ${this.#idő} mp`;
      }
    }, 1000);
  }

  stopperMegallit() {
    clearInterval(this.#stopperId);
    this.#stopperFut = false;
    console.log("Játék vége, idő:", this.#idő);
}


}
