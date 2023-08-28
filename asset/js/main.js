/* Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
 Stabilire il vincitore, in base a chi fa il punteggio più alto. */

//generare un numero per il giocatore Math.random
//generare un numero per il pc Math.random
// stabilire con if/else chi vince

const player = Math.floor(Math.random() * 6) + 1;
const pcPlayer = Math.floor(Math.random() * 6) + 1;
console.log(player, pcPlayer);

if (player > pcPlayer) {
  console.log("hai vinto !!");
} else if (player < pcPlayer) {
  console.log("Hai perso!!");
} else {
  console.log("Avete pareggiato!!");
}

/* Mail
Chiedi all'utente la sua email,
 controlla che sia nella lista di chi può accedere,
  stampa un messaggio appropriato sull’esito del controllo.
Bonus
Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina. */

//creiamo una lista invitati
// controlliamo che le email che siano nella lista
// scrivere un messaggio se è inserito o no

/* const userEmail = prompt("Inserisci l'email"); */
const userEmail = document.getElementById("email");

const check = document.querySelector("form");

const emailList = [
  "angela.b@gmail.com",
  "mattia90@hotmail.it",
  "stefania_rossi@gmail.com",
  "alessia.87@tiscali.it",
];

for (let i = 0; i < emailList.length; i++) {
  const guest = emailList[i];
  console.log(guest);
  check.addEventListener("click", function (e) {
    e.preventDefault();
    const email = userEmail.value;
    if (guest === email) {
      console.log("sei invitato");
    } else {
      console.log("non sei invitato");
    }
  });
}
