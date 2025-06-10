function ranglistaMegjelenitesTeszt() {

  const tesztLista = [
    { name: "Anna", time: 80, level: 20 },
    { name: "Lujza", time: 100, level: 40 },
  ];

  const tesztSzuloElem = document.createElement("div");
  window.szuloElem = tesztSzuloElem;

  megjelenitLeaderBoard(tesztLista);

  const ranglistaElem = tesztSzuloElem.querySelector(".leaderboard");
  console.assert(ranglistaElem !== null, "Hiba! A ranglista nem jött létre.");

  const bejegyzesek = ranglistaElem.querySelectorAll(".leader-entry");
  console.assert(bejegyzesek.length === 2, "Hiba! Nem megfelelő számú bejegyzés.");

  console.assert(
    bejegyzesek[0].textContent.includes("Anna") && bejegyzesek[0].textContent.includes("80"),
    "Hiba! Anna nem jelent meg helyesen."
  );

  console.assert(
    bejegyzesek[1].textContent.includes("Lujza") && bejegyzesek[1].textContent.includes("100"),
    "Hiba! Lujza nem jelent meg helyesen."
  );

  
}

ranglistaMegjelenitesTeszt()