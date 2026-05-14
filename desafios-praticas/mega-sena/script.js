

function numeroMegaSena(numero) {
    if (numero < 6 || numero > 9) {
        console.log("O número é inválido para a Mega Sena.");
        return [];
    } else {
        const numerosSorteados = [];
        while (numerosSorteados.length < numero) {
            const numeroSorteado = Math.floor(Math.random() * 60) + 1;
            if (!numerosSorteados.includes(numeroSorteado)) {
                numerosSorteados.push(numeroSorteado);
            }
        }
        return numerosSorteados;
    }
}

numeroMegaSena(6);
console.log(numeroMegaSena(6));