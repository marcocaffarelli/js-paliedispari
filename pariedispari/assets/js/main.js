//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
//sceltaUtente = prompt("Scegli pari o dispari")
//console.log(sceltaUtente);
//numeroUtente = prompt("scegli un numero da 1 a 5")
//console.log(numeroUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
    return Math.floor(Math.random()* (max - min) + min)
}

var numeroComputer = numeroRandom(1, 6)

console.log(numeroComputer);
//Sommiamo i due numeri
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
//Dichiariamo chi ha vinto.
