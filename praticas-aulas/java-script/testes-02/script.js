

// function convidados (...nomes){
//     console.log("Lista de convidados:");
//     console.log(nomes);
// }

// convidados("Maria", "João", "Ana", "Carlos");

function sorteador(...numeros) {
    console.log(numeros);

    const numeroSorteado = Math.floor(Math.random() * numeros.length);
    console.log(numeros[numeroSorteado]);
}

sorteador(5, 10, 15, 20);