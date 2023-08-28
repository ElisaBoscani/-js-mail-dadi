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
