console.log("il foglio funziona");

const createGrid = function () {
  const tabellone = document.getElementById("tabellone");
  for (let i = 1; i < 91; i++) {
    //ho selezionato la section dove va il tabellone
    const cella = document.createElement("div"); // dentro ci ho messo un div grande l'8%
    cella.classList.add("cells");
    cella.innerText = i;
    tabellone.appendChild(cella);
  }
};

createGrid();

const drawnNumbers = function () {
  const number = Math.ceil(Math.random() * 90);
  console.log("numero estratto:", number);

  const tutteLeCelle = document.querySelectorAll(".cells");
  const cellaGiusta = tutteLeCelle[number - 1];

  if (cellaGiusta) {
    cellaGiusta.classList.add("evidenziato");
  }
};

const bottoneEstrazione = document.querySelector("button");
bottoneEstrazione.addEventListener("click", function () {
  drawnNumbers();
});
