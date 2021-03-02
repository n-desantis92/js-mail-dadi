// Gioco dei dadi
alert("chi fa il numero piu alto vince!!!");
// Generare un numero random da 1  a 6, sia per il giocatore sia per il computer
var giocatore = Math.floor(Math.random() * 6) + 1;
document.getElementById('giocatore').innerHTML = giocatore;
console.log(giocatore);
var computer = Math.floor(Math.random() * 6) + 1;
document.getElementById('computer').innerHTML = computer;
console.log(computer);
var risultato;
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (giocatore > computer){
  risultato = "hai vinto!"
}
else if (giocatore == computer) {
  risultato = "pareggio!"
}
else {
  risultato = "hai perso!"
};
document.getElementById('risultato').innerHTML = risultato;
console.log(risultato);
