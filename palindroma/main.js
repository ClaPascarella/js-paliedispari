const parola = prompt ("inserisci una parola palindroma")
console.log (parola)

let palindroma = [
    "r",
    "a",
    "d",
    "a",
    "r",
];

const parolaCorretta = palindroma[0,2,4];

for (let i=0; i< palindroma.length; i++) {

    if (parolaCorretta === palindroma[0,2,4]) {
        alert("parola corretta");
    }

    else {
        alert("parola errata");
    }
}
function parolaPalindroma (parola) {

}

