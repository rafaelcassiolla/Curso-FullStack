
//  while = enquanto

// var x = 1;

// while(x < 11){
//     document.write("<br> O valor do X é: " + x);

//     x++;
// 

// for = para

// var valor = 30;

// for(a = 1; a <= valor; a++){
//     document.write("<br> valor do A é: " + a);
// }

// switch = caso

function pedir(){
    var valor = prompt("Digite um valor de 1 a 4");

    switch(Number(valor)){
        case 1: 
            document.write("Voce escolheu 1 = Suco");
            break;

        case 2:
            alert("Voce escolheu 2 = Agua gelada");
            break;

        case 3:
            alert("Voce escolheu 3 = Sorvete");
            break;

        case 4:
            alert("Voce escolheu 4 = chamar garçom");
            break;

        default:
            alert("Escolha uma opção entre 1 a 4");
            break;
    }
}

// CONDICIONAIS: se/senao.

var valor = 20;

if(valor == 30){
    console.log("O valor é igual a 30!")
} else{
    console.log("Numero diferente de 30!")
}