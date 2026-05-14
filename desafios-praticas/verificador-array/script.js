

function verificarArray(array, numero) {
    if (array.includes(numero)) {
        return "O número está no array.";
    } else {
        return "O número não está no array.";
    }
}

let numeros = [1, 2, 3, 4, 5];
let numeroParaVerificar = 7;

console.log(verificarArray(numeros, numeroParaVerificar));