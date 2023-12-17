/*

    1) Visualizzare in pagina 5 numeri casuali; OK
        -- Parte un Timer di 30 secondi OK
    2) Dopo 30 secondi i numeri scompaiono OK
        -- l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
    3) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// Creo un Array nei quali inserirò i numeri estratti
const randomNumbersArray = [];
console.log('randomNumbersArray', randomNumbersArray, typeof randomNumbersArray);

// Creo un Array che contenga i numeri inseriti dall'utente
let userNumbersArray = [];


// Creo una Variabile che prenda dall'HTML il contenitore dei Numeri del PC
const pcNumbers = document.querySelector('#pc-numbers');

// Creo una Variabile che intrappoli la Funzione per la generazione dei numeri casuali
let randomPcNumbers = numberGenarator(100, 1, randomNumbersArray, pcNumbers);


// Creo una Funzione che gestisca l'inserimento dei numeri nell'array che li conterrà
function numberGenarator (max, min, array, div) {
    // Creo un ciclo che generi 5 numeri casuali 
    for (i = 1; i <= 5; i++) {
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

// Imposto un Timer che dopo 30 secondi svuoti la pagina
setTimeout (function() {
    pcNumbers.innerHTML = '';
    pcNumbers.classList.remove('p-5', 'text-danger', 'bg-dark', 'fs-2','border', 'rounded');
    console.log('Ora il contenitore si svuota');

}, 5000); 

// Creo una Funzione che generi numeri casuali
function randomNumbers (max, min) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}

// Imposto un Timer che dopo 35 secondi faccia apparire i prompt all'utente
setTimeout (function() {

    // Creo un Ciclo che crei 5 prompt per l'Utente dove dovrà inserire i numeri che ha appena visto 
    for (j = 1; j <= 5; j++) {

        // Creo un prompt che chieda all'utente di inserire i numeri che ha visto
        let userInput = prompt('Inserisci i numeri che hai appena visto: ');
        console.log ("Numeri dell'utente: ", userInput, typeof userInput);

        // Converto l'input dell'utente in numeri
        let userNumbers = parseInt(userInput);
        console.log("Il tipo di input dello utente é: ",userNumbers, typeof userNumbers);

        userNumbersArray.push(userNumbers);
        console.log("Array dei numeri dell'utente: ", userNumbersArray, typeof userNumbersArray);

    }

}, 8000); 



