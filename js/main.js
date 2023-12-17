/*

    1) Visualizzare in pagina 5 numeri casuali;
        -- Parte un Timer di 30 secondi
    2) Dopo 30 secondi i numeri scompaiono
        -- l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
    3) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// Creo un Array nei quali inserirò i numeri estratti
const randomNumbersArray = [];
console.log('randomNumbersArray', randomNumbersArray, typeof randomNumbersArray);

// Creo una Variabile che intrappoli la Funzione per la generazione dei numeri casuali
let randomPcNumbers = numberGenarator(100, 1, randomNumbersArray);

// Creo una Funzione che gestisca l'inserimento dei numeri nell'array che li conterrà
function numberGenarator  (max, min, array) {
    // Creo un ciclo che generi 5 numeri casuali 
    for (i = 1; i <= 5; i++) {

        // Creo una Variabile che rappresenti i numeri casuali del PC e ci inserisco la Funzione
        let numbers = randomNumbers(max, min);
        console.log('Numeri del PC', numbers, typeof numbers);

        // Creo una Variabile che controlli che non venga estratto più volte lo stesso numero
        let foundInArray = array.includes(numbers);
        console.log('foundInArray', foundInArray, typeof foundInArray); 

        //  Creo un ciclo che controlli che i numeri inseriti nell'Array siano sempre diversi 
        while (foundInArray == true) {
            numbers = randomNumbers(max, min);
            console.log(numbers);

            foundInArray = array.includes(numbers);
        }


        // Pusho i numeri dentro l'array
        array.push(numbers);
    }
}

// Creo una Funzione che generi numeri casuali
function randomNumbers (max, min) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}