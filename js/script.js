// 1. chiedi all’utente il cognome
// 2. inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’
// 3. stampa la lista ordinata alfabeticamente sia in console che in pagina
// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova


var surname = ['Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'];
var askSurname = prompt('inserisci il tuo cognome');
console.log(askSurname);

var i = 0;
while (i < surname.length) {
    console.log(surname[i]);
    i++;

}
