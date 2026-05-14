
const itens = [ 
    { name: 'Maça', price: 2.5 }, 
    { name: 'Coca cola', price: 8 }, 
    { name: 'Guarana', price: 5 }, 
    { name: 'Chocolate', price: 20 }
];

for (const product of itens) {
    if (product.price === 19) {
        console.log(product);
    } else if (product.price <= 8) {
        console.log(product);
    }
}