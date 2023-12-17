/*

    1) Visualizzare in pagina 5 numeri casuali; OK
        -- Parte un Timer di 30 secondi OK
    2) Dopo 30 secondi i numeri scompaiono OK
        -- l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() OK
    3) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// Dichiaro un Array nei quali inserirò i numeri estratti
const randomNumbersArray = [];
console.log('randomNumbersArray', randomNumbersArray, typeof randomNumbersArray);

// Dichiaro un Array che contenga i numeri inseriti dall'utente
let userNumbersArray = [];
console.log("Array dei numeri dell'utente: ", userNumbersArray, typeof userNumbersArray);

// Dichiaro una Variabile che prenda dall'HTML il contenitore dei Numeri del PC
const pcNumbers = document.querySelector('#pc-numbers');

// Dichiaro una Variabile che prenda dall'HTML il contenitore del Risultato
const resultContainer = document.querySelector('#result-container');

// Aggiungo dello stile al Container del Risultato
resultContainer.classList.add('d-flex', 'justify-content-center', 'mt-3');

// Dichiaro una Variabile che prenda dall'HTML il contenitore del Timer
const timerContainer = document.querySelector('#timer-container');

// Aggiungo dello stile al Contenitore del Timer
timerContainer.classList.add('h2', 'mb-3');

// Setto l'intervallo di tempo per cui debba scorrere il Timer
let timerId = setInterval(countdown, 1000);

// Dichiato una Variabile per il Countdown del Timer
let timeCountdown = 30; 

// Dichiaro una Variabile che intrappoli la Funzione per la generazione dei numeri casuali
let randomPcNumbers = numberGenarator(100, 1, randomNumbersArray, pcNumbers);


// Imposto un Timer che dopo 30 secondi svuoti la pagina
setTimeout (function() {
    pcNumbers.innerHTML = '';
    pcNumbers.classList.remove('p-5', 'text-danger', 'bg-dark', 'fs-2','border', 'rounded');
    console.log('Ora il contenitore si svuota');


}, 30000); 


// Imposto un Timer che dopo 35 secondi faccia apparire i prompt all'utente
setTimeout (function() {

        for (let j = 1; j <= 5; j++) {

            // Creo un prompt che chieda all'utente di inserire i numeri che ha visto
            let userInput = prompt('Inserisci i numeri che hai appena visto: ');
    
            if (userInput !== NaN) {
                // Converto l'input dell'utente in numeri
                let userNumbers = parseInt(userInput);
    
                userNumbersArray.push(userNumbers);
    
            }
    
        }
            
    // Creo un Ciclo che crei 5 prompt per l'Utente dove dovrà inserire i numeri che ha appena visto 

    let result = compareArrays(randomNumbersArray, userNumbersArray, resultContainer);
    
}, 35000); 



// Creo una Funzione che generi numeri casuali
function randomNumbers (max, min) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}

// Creo una Funzione che gestisca l'inserimento dei numeri nell'array che li conterrà
function numberGenarator (max, min, array, div) {
    // Creo un ciclo che generi 5 numeri casuali 
    for (let i = 1; i <= 5; i++) {
        // Creo una Variabile che rappresenti i numeri casuali del PC e ci inserisco la Funzione
        let numbers = randomNumbers(max, min);
        console.log('Numeri del PC', numbers, typeof numbers);

        // Creo una Variabile che controlli che non venga estratto più volte lo stesso numero
        let foundInArray = array.includes(numbers);
        console.log('foundInArray', foundInArray, typeof foundInArray); 

        //  Creo un ciclo che controlli che i numeri inseriti nell'Array siano sempre si 
        while (foundInArray == true) {
            numbers = randomNumbers(max, min);
            console.log(numbers);

            foundInArray = array.includes(numbers);
        }
        
        // Pusho i numeri dentro l'array
        array.push(numbers);

        // Creo un elemento all'interno del Contenitore dei numeri
        let numberContainer = document.createElement('div');

        // Stampo all'interno del contenitore i numeri estratti
        numberContainer.innerHTML += numbers;
        
        // "Appendo" i Piccoli Contenitori al Grande Contenitore
        div.append(numberContainer);

        // Aggiundo dello stile al Grande Contenitore
        div.classList.add('d-flex', 'justify-content-around', 'p-5', 'text-danger', 'bg-dark', 'fs-2','border', 'rounded');

    }
}


// Creo una Funzione per comparare i valori dei 2 array
function compareArrays (a, b, container) {
    
    // Stabilisco delle condizioni per cui le lunghezze dei 2 Array debbano essere uguali
    // if (a.length !== b.length) {
    //     console.log('I 2 array non hanno la stessa lunghezza');
    //     return alert('Devi inserire un minimo di 5 numeri');
    // } else {

        // Inserisco una regola che controlli che gli elementi contenuti dei 2 array possano avere ordine diverso
        // .sort() ordina automaticamente gli elementi di un array, in ordine alfabetico o come in questo caso posiziona i numeri in ordine crescente
        a.sort();
        b.sort();

        // Creo un ciclo che scorra gli elementi di ogni array e li confronti
        for (let n = 1; n <= 5; n++) {

            // Stabilisco una condizione per cui gli elemtni dell'array debbano essere gli stessi
            if (a[n] !== b[n]) {
                console.log('I 2 array non hanno gli stessi Numeri');
                return container.innerHTML = `

                <div class="card text-center mb-3" style="width: 18rem;">
                    <div class="card-body bg-warning">
                        <p class="card-text fs-3">
                            Hai perso! Non hai inserito gli stessi numeri.
                        </p>
                    </div>
                </div> `
            } 
            console.log('I 2 array hanno gli stessi Numeri');
            return container.innerHTML = `

            <div class="card text-center mb-3" style="width: 18rem;">
                <div class="card-body bg-success">
                    <p class="card-text fs-3">
                        Bravissimo! Hai indovinato tutti i numeri.
                    </p>
                </div>
            </div> `
        
        // }
    }


}


// Creo una Funzione per far scorrere il Timer all'indietro
function countdown () {
    if (timeCountdown == -1) {
        clearTimeout(timerId);
        timerContainer.innerHTML = '';
    } else {
        timerContainer.innerHTML = `Ti rimangono ${timeCountdown} secondi per memorizzare i numeri`;
        timeCountdown--;
    }

}