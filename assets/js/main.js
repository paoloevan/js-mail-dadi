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

const listMail = ['pippo@gmail.com',
    'pluto@gmail.com',
    'pinco@gmail.com',
    'pallo@gmail.com'];

let varEl;
let resultEl;
let boxMail = document.querySelector('.box_mail');

const goButton = document.getElementById('go');
goButton.addEventListener('click',
    function () {
        const mailEl = document.querySelector('input').value;
        console.log(mailEl);
        varEl = 0;
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

/*
Gioco dei dadi
Generare un numero random da 1 a 6,
sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

const playButton = document.getElementById('play');
playButton.addEventListener('click',
    function () {
        //genero i numeri
        const cpuNumber = Math.floor(Math.random() * 6) + 1;
        const userNumber = Math.floor(Math.random() * 6) + 1;
        console.log(cpuNumber);
        console.log(userNumber);

        //inserisco i numeri nel DOM
        const cpuNumberEl = document.querySelector('.cpu_number');
        const userNumberEl = document.querySelector('.user_number');

        cpuNumberEl.innerHTML = `<h4>${cpuNumber}</h4>`;
        userNumberEl.innerHTML = `<h4>${userNumber}</h4>`;

        //confronto i risultati
        const winnerEl = document.querySelector('.winner');
        if (cpuNumber > userNumber) {
            console.log('pc ha vinto');
            winnerEl.innerHTML = `<h1 class=\"cpu_win\">Computer ha vinto :(</h1>`;
        } else if (userNumber > cpuNumber) {
            console.log('user ha vinto');
            winnerEl.innerHTML = `<h1 class=\"you_win">Hai vinto! :D</h1>`;
        } else {
            console.log('patta');
            winnerEl.innerHTML = `<h1 class=\"patta">Patta -.-</h1>`;
        }
    }
)