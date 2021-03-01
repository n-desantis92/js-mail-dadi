// Chiedi all’utente la sua email,
var mail = prompt("inserisci e-mail");
var autorizzazione = false;
// controlla che sia nella lista di chi può accedere,
var accessi = ["giggi@gmail","luca@gmail","paolo@gmail","marco@gmail","michele@gmail"];
var i;
for(i = accessi.length; i > 0 ; i--){
  // confronto accessi[i] con mail
  if(accessi[i] == mail){
    autorizzazione = true;
  }
}
// stampa un messaggio appropriato sull’esito del controllo
if(autorizzazione) {
  alert("ben fatto ora puoi accedere");
}
else{
  alert("inserisci un e-mail valida");
}
