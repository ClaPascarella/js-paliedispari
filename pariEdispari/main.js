let bet = prompt("scommettiamo se è pari o dispari");
let numeroUtente =parseInt (prompt("inserisci un numero da 1 a 6"));
if (numeroUtente <=6) {
    let computer = random ();
    let somma = computer + numeroUtente;
    
    

    if ( somma % 2 == 0) {
        risulatato = "pari";
        
    }
    
    let pari = somma % 2 == 0;
    
    if (bet == pariOrDispari()) {
        alert("vince utente");
    
    }
    else {
        console.log("vince computer");
    }
} else {
    alert ("numero non corretto")
}



function random() {
    let com = Math,floor (Math.random( ) * 6) +1;
    console.log(computer);
    return computer;
}

function pariOrDispari (numero) {
    let risultato = "disapri";
    if ( numero % 2 == 0) {
        risulatato = "pari";
    }
     console.log(risultato);
     return risultato   
}