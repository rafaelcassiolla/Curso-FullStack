//FIND

// let numbers = [5, "mateus", 15, "jose", 25];

// let busca = numbers.find((item) => {
//    if (item === "jose") {
//        return console.log("encontrou o nome jose");
//    }
// });

// console.log(busca); //jose

let palavras = ["casa", "carro", "moto", "bicicleta"];

let busca = palavras.filter((item) => {
    if (item.length <= 5) {
        return console.log("encontrou a palavra " + item);
    }
});

console.log(busca); // ["casa", "carro", "moto"]