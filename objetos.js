// OBJETOS 

// Como criar objetos em JS 

let pessoa = { // Nesse caso as chaves são: nome, idade e os valores ~soa o que vem depois de : 
    nome: 'Pedro Vitor',
    idade: 18
};

//Exibindo essas informações

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa['idade']);


console.clear();

// Como podemos adicionar um par de chave e valor: 

pessoa.altura = 1.70;
console.log(pessoa);

//  Removendo um valor

delete pessoa.altura;

console.log(pessoa);

console.clear();

// Percorrendo um objeto

// é a mesma lógica do for in, veja a seguir, para saber os indices e conteudo

// for of não é possivel usar nessa situação
for (let chaves in pessoa) {
    console.log(chaves)
};


// Atenção, também há outras formas!


