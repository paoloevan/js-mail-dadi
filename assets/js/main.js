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
// creo un array
// array
const listMail = ['pippo@gmail.com',
    'pluto@gmail.com',
    'pinco@gmail.com',
    'pallo@gmail.com'];

let varEl
let resultEl
let boxMail = document.querySelector('.box_mail')
// chiedi all'utente la sua mail
// prompt
const goButton = document.getElementById('go');
goButton.addEventListener('click',
    function () {
        const mailEl = document.querySelector('input').value;
        console.log(mailEl);
        for (let i = 0; i < listMail.length; i++) {
            if (mailEl == listMail[i]) {
                varEl = 1;
            };
        }
        if (varEl == 1) {
            console.log('Mail presente');
            //inserisco messaggio nell'elemento
            resultEl = 'Mail presente';
        } else {
            console.log('Mail non presente');
            //inserisco messaggio nell'elemento
            resultEl = 'Mail NON presente';
        }
        boxMail.innerHTML = `<h1>${resultEl}</h1>`;

    }
)


//controllo che sia nella lista di chi può accedere
//confronto la mail con la lista
//ciclo for
//if statement



/*stampo il risultato nel DOM*/

//seleziono elemento del DOM



//inserisco l'elemento con il messaggio nel dom

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