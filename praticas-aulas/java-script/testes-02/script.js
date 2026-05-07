//

// let pessoa = {
//     nome: "João",
//     sobrenome: "Silva",
//     empresa: "Tech Solutions",
//     cargo: "Desenvolvedor",
// };

// console.log(pessoa.nome); // Acessando a propriedade 'nome'
// console.log(pessoa.sobrenome); // Acessando a propriedade 'sobrenome'



// const { nome, sobrenome, empresa, cargo } = pessoa; // Desestruturação do objeto 'pessoa'

// console.log(nome);
// console.log(sobrenome);

// console.log(empresa);
// console.log(cargo);


let nomes = ["João", "Maria", "Pedro"];

// let { 0:primeira} = nomes;

// console.log(primeira); // Acessando o elemento 'João' do array 'nomes' usando desestruturação

let [primeiroNome, segundoNome, terceiroNome] = nomes;

console.log(primeiroNome); // Acessando o elemento 'João' do array 'nomes' usando desestruturação
console.log(segundoNome); // Acessando o elemento 'Maria' do array 'nomes' usando desestruturação
console.log(terceiroNome); // Acessando o elemento 'Pedro' do array 'nomes' usando desestruturação