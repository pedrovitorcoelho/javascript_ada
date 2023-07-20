// ARRAYS OU VETOR

// Como eu declaro um array em js  ?

let vetor = []; 

// Como posso popular ? 

vetor = ['Pedro', 18, 'Analista de Sistema', 210];

// Como posso exibir, e mostrar os indices ? 

console.clear();

console.log(vetor);
console.log(vetor[0]); // Lembrando que array sempre começa com indices 0
console.log(vetor[1]);
console.log(vetor[2]);
console.log(vetor[3]); 

// Como saber o tamanho do Array ?

console.log(vetor.length);

console.clear();

// formas de percorrer um vetor usando for

for (let i = 0; i < vetor.length; i++) { // Dessa maneira, estamos dizendo que o tamanho do nosso for será do tamanho do vetor, ou seja, podemos popular sem se preoucupar em atualizar o for
    console.log(vetor[i]);
};


for (let variaveis of vetor) { // nesse caso, usamos o "of" para fazer uma buscas das variáveis que compoe tal vetor, utilizando uma variavel para isso;
    console.log(variaveis);
}

for (let indices in vetor) { // é mesma lógica que o "of", mas diferente dele, o "in" busca apenas os vetores que o compoe;
    console.log(indices);
}
