// Trabalhando com laços numéricos 

// FOR / PARA 

const input = require('readline-sync');

console.clear();

//Trbalhando com acumuladores em JS 

//Opções

let acumulador = 5;

acumulador = acumulador + 5;

acumulador += 1; //adiciona ele mesmo, mais o numero

acumulador++; //adiciona apenas mais um 

acumulador -= 3; //substrai ele, menos o numero posto.

//A mesma lógica segue para outras operações

console.log(acumulador);


// SITUAÇÃO-PROBLEMA: Fazer um código, que traga três notas do aluno, e faça a média

console.clear();

let nota;
let soma = 0;


for (let i = 1; i <= 3; i++) {
    nota = Number(input.question(`Digite a ${i} nota = `));

    soma += nota;
}

console.log('A média do aluno é ', soma/3);

