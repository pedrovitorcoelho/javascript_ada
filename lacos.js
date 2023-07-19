// TRABALHANDO COM LAÇOS CONDICIONAIS EM JS 

//Importando biblioteca para usar no arquivo

const input = require('readline-sync');

let sorteio = Math.random() + 1; // função que sortei um número entre 0 e 1

let numero = input.question('Digite um numero = ');

while (sorteio !== numero) {

    console.log("Você errou, digite novamente");

    let numero = Number(input.question('Digite um numero = ')); // Nesse caso, estamos transformando nossa entrada de string, para number

}



