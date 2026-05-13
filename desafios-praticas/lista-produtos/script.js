
let produtos = ["Computador", "Telefone", "Mouse", "Teclado"]

console.log(produtos)
console.log(produtos.length)


produtos.splice(produtos.indexOf("Mouse"), 1)
console.log(produtos)
console.log(produtos.length)

produtos.indexOf("Teclado") !== -1 ? console.log("Produto encontrado:", produtos[produtos.indexOf("Teclado")]) : console.log("Produto não encontrado")

produtos.splice(1, 1)
console.log(produtos)
console.log(produtos.length)