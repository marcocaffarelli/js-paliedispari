//variabili
var sceltaUtente, numeroUtente, numeroComputer, somma, pari, dispari
//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
sceltaUtente = prompt("Scrivi pari o dispari", "pari o dispari");
console.log("Hai scelto " + sceltaUtente);
sceltaUtente = sceltaUtente.toLowerCase();
numeroUtente = Number(prompt("scrivi un numero da 1 a 5"));
console.log("Hai scelto il numero " + numeroUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
    return Math.floor(Math.random()* (max - min) + min);
};

numeroComputer = Number(numeroRandom(1, 6));
console.log("Il computer ha scelto il numero " + numeroComputer);
//Sommiamo i due numeri
function sommaNumeri(n1, n2) {
    return (n1 + n2);
};
somma = sommaNumeri(numeroUtente, numeroComputer);
console.log("la somma è " + somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if (somma % 2 == 0){
    console.log(somma + " è un numero pari");
    pari = "pari";
}else {
    console.log(somma + " è un numero dispari");
    dispari = "dispari";
};
//Dichiariamo chi ha vinto.
if (pari == sceltaUtente || dispari == sceltaUtente){
    console.log("Complimenti hai vinto");
}else{
    console.log("Mi dispiace hai perso");
};

