export default class Kartya {
  #fajlnev;
  #allapot;
  #blokkolt;
  #imgElem;
  #id;
  #lista;
  constructor(id, allapot, szuloElem, lista) {
    this.#lista = lista;
    this.setFajlnev(id);
    this.#allapot = allapot;
    this.#blokkolt = false;
    this.#id = id;
    const img = document.createElement("img");

    img.src = "./kepek-2/hatter.jpg";
    szuloElem.appendChild(img);

    this.#imgElem = img;

    this.kattintasTrigger(img, id);
  }

  setFajlnev(id) {
    for (let index = 0; index < lista.length; index++) {
      if (id === lista[index].id) {
        this.#fajlnev = lista[index].nev;
      }
    }
  }
  getImg() {
    return this.#imgElem;
  }
  getId() {
    return this.#id;
  }
  getAllapot() {
    return this.#allapot;
  }
  setAllapot() {
    this.#allapot = !this.#allapot;
    this.#setLap();
  }

  getFajlnev() {
    return this.#fajlnev;
  }
  getBlokkolt() {
    return this.#blokkolt;
  }

  #setLap() {
    if (this.#allapot) {
      this.#imgElem.src = `./kepek-2/${this.#fajlnev}`;
    } else {
      this.#imgElem.src = `./kepek-2/hatter.jpg`;
    }
  }
  setBlokkolt(ertek) {
    this.#blokkolt = ertek;
  }

  kattintasTrigger(img, id) {
    img.addEventListener("click", () => {
      const e = new CustomEvent("fordit", {
        detail: { id: id, kartya: this },
      });
      window.dispatchEvent(e);
    });
  }
}
