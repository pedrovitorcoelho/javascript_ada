// Trabalhando com funções em js

// Como declaramos funções em js: 

function saudacao () {
    console.log ('Ola, tudo bem ?');
};

saudacao();

console.clear();

// Trabalhando com parametros

function saudacao2 (nome, sobrenome = 'vitor') { // Repare que nesse caso, usamos um igual, pois caso não seja passado o parametro sobrenome, ele virá por padrão esse que pusemos na função
    console.log(`Olá, tudo bem com você, ${nome} ${sobrenome} ?`);
};

saudacao2('Pedro');

console.clear();


// Trabalhando com return em JS.

// O return tem como sentido retornar um valo, diferente do console.log que apenas imprime, e uma vez feito isso, não pode ser impresso novamente, diferente do return.

// Uma vez feito o return, sem ser dentro de estruturas condicionais, o código da função não é mais feito.

// veja os exemplos a seguir


function soma(num1, num2) {
    return num1 + num2;
};

let soma2 = soma(5, 7);

console.log(soma2);

// Outro exemplo

function ValorMaior50 (num) {
    if (num > 50) {
        return true
    }

    return false;
};


let valor = ValorMaior50(80);

console.log(valor);

