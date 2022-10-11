/*
Mail
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere, 
stampa un messaggio appropriato sull’esito del controllo
*/
/*
Gioco dei dadi
Generare un numero random da 1 a 6
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

/************
 ****MAIL*****/

// chiedi all'utente la sua mail
// prompt
const mailEl = prompt('Inserire email')
let varEl


// creo un array
// array
const listMail = ['pippo@gmail.com',
    'pluto@gmail.com',
    'pinco@gmail.com',
    'pallo@gmail.com'];

//controllo che sia nella lista di chi può accedere
//confronto la mail con la lista
//ciclo for
//if statement

for (let i = 0; i < listMail.length; i++) {
    if (mailEl == listMail[i]) {
        varEl = 1;
    };
}

if (varEl == 1) {
    console.log('presente');
} else {
    console.log('non presente');
}

//scorro all'interno dell'array

