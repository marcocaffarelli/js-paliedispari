//Chiedere all’utente di inserire una parola
var parolaUtente = prompt("Inserisci una parola")
//console.log(parolaUtente);

//Creare una funzione per capire se la parola inserita è palindroma
//funzione controllo 
function ctrlPalindroma(parola){
    // se la parola è uguale alla parola scritta al contrario allora vero
    if (parola === parola.split("").reverse().join("")){
    return true;
    }
}

var ctrlParola = ctrlPalindroma(parolaUtente)

if (ctrlParola) {
    console.log("la parola è palindroma");
}