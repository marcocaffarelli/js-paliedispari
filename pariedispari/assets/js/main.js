//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
sceltaUtente = prompt("Scegli pari o dispari")
//console.log(sceltaUtente);
numeroUtente = Number(prompt("scegli un numero da 1 a 5"))
//console.log(numeroUtente);
//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function numeroRandom(min, max) {
    return Math.floor(Math.random()* (max - min) + min)
}

var numeroComputer = Number(numeroRandom(1, 6))

//console.log(numeroComputer);
//Sommiamo i due numeri
function sommaNumeri(n1, n2) {
    return (n1 + n2)
}
var somma = sommaNumeri(numeroUtente, numeroComputer)
console.log(somma);
//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
if (somma % 2 == 0){
    console.log("numero pari");
    var pari = "pari"
}else {
    console.log("numero dispari");
    var dispari = "dispari"
}
//Dichiariamo chi ha vinto.
if (pari == sceltaUtente || dispari == sceltaUtente){
    console.log("Complimenti hai vinto");
}else{
    console.log("Mi dispiace hai perso");
}

