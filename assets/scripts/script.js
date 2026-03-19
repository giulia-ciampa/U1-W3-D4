console.log("il foglio funziona");

const tabellone = document.getElementById("tabellone"); //va fuori dalla funzione, è il contenitore

const createGrid = function () {
  // ho selezionato la section dove va il tabellone tramite Id
  for (let i = 1; i < 91; i++) {
    // mi servivano 90 numeri da 1 a 90, quindi ho fatto un for da 1 a 91(91 è escluso-il ciclo si ferma a 90)
    const cella = document.createElement("div"); // ho creato un tag div chiamato cella
    cella.classList.add("cells"); // alla cella ho dato una classe
    cella.innerText = i; // ho inserito del testo, cioè la i da 1 a 90
    tabellone.appendChild(cella); // ho messo il div (cella) nella section
  }
};

createGrid(); // ho lanciato la funzione

const drawnNumbers = function () {
  //1) dentro la funzione genero un numero casuale da 1 a 100
  const number = Math.ceil(Math.random() * 90); // math.random numeri da 0 a 1, moltiplichi per 90, arrotondi per eccesso
  console.log("numero estratto:", number); //vedo se funziona

  const tutteLeCelle = document.querySelectorAll(".cells"); // 2) recupero tutte le celle create prima con la classe cells, querySelectorAll restituisce una lista(è come un array)
  const cellaGiusta = tutteLeCelle[number - 1]; //Trovo la cella specifica da colorare.Siccome è come un array si conta da 0 e la cella con il numero 1 è in posizione 0. Facciamo quindi numero estratto -1.

  if (cellaGiusta) {
    cellaGiusta.classList.add("evidenziato");
  }
};

const bottoneEstrazione = document.querySelector("button"); //seleziono il bottone
bottoneEstrazione.addEventListener("click", function () {
  //aggiungo un eventlistener di click, QUANDO l'utente clicca, estrai il numero
  drawnNumbers();
});

const numeriEstratti = [];
