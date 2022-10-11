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
let varEl
let resultEl

for (let i = 0; i < listMail.length; i++) {
    if (mailEl == listMail[i]) {
        varEl = 1;
    };
}

/*stampo il risultato nel DOM*/

//seleziono elemento del DOM
let boxMail = document.querySelector('.box_mail')

if (varEl == 1) {
    console.log('Mail presente');
    //inserisco messaggio nell'elemento
    resultEl = 'Mail presente';
} else {
    console.log('Mail non presente');
    //inserisco messaggio nell'elemento
    resultEl = 'Mail NON presente';
}

//inserisco l'elemento con il messaggio nel dom
boxMail.insertAdjacentHTML('afterend', `<h1>${resultEl}</h1>`)

/*
Gioco dei dadi
Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

//genero i numeri
const cpuNumber = Math.floor(Math.random() * 6) + 1;
const userNumber = Math.floor(Math.random() * 6) + 1;
console.log(cpuNumber);
console.log(userNumber);

//confronto i risultati
if (cpuNumber > userNumber) {
    console.log('pc ha vinto');
} else if (userNumber > cpuNumber) {
    console.log('user ha vinto');
} else {
    console.log('patta');
}