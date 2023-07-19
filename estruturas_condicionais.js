// Nessa situação, estamos tratando de estruturas, ou pedaços do códigos, que serão executados com determinada condição.

let idade = 18;

if (idade >= 18) {
    console.log ('Você é maior de idade')
} else {
    console.log('Você é menor de idade')
};

console.clear();

//Outro exemplo.

//Caso o aluno tire uma nota maior que 7 está aprovador, entre 5 e 7 está de recuperação e menor do que isso está reprovado. 

let nota = 5.5;

if (nota >= 7) {
    console.log('Você está aprovado!');
} else if ( nota >= 5) {
    console.log('Você está de recuperação!');
} else {
    console.log('Você está reprovado');
}

