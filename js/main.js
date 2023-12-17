/*

    1) Visualizzare in pagina 5 numeri casuali;
        -- Parte un Timer di 30 secondi
    2) Dopo 30 secondi i numeri scompaiono
        -- l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt()
    3) Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

*/

// Creo un ciclo che generi 5 numeri casuali 
for (i = 1; i <= 5; i++) {
    // Creo una Variabile che rappresenti i 5 numeri casuali
    let pcNumbers = randomNumbers(100, 1);
    console.log('Numeri del PC', pcNumbers, typeof pcNumbers);
}

// Creo una Funzione che generi numeri casuali
function randomNumbers (max, min) {
    const randNum = Math.floor(Math.random() * (max - min + 1)) + min;
    
    return randNum;
}