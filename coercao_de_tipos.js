// COERÇÃO (CONVERSÃO) DE TIPOS EM JS 

// 1 - Coerção Explicita (Manual);

const numero = 10; 

console.log (numero, typeof numero);

const numeroString = String(numero); // Nessa situação devemos por com S maiusculo mesmo, e colocar a variável em parenteses que vamos alterar; 

console.log(numeroString, typeof numeroString);

//OUTRAS OPÇÕES PARA COERÇÃO; 

console.log(Number('18')); //Forma mais adequada para mudar um numero, seja qual tipo for, para numerico
console.log(parseFloat('18.7'));
console.log(parseInt('12'));
console.log(Boolean(45554)); // Mudando para tipo boleano, nesse caso será sempre true, com uma excessão
console.log(Boolean(0)); // Unica excessão possível, para sair false;

console.clear();

// 2 - Coerção Implicita (Automática);

console.log('10' + 2); // Em JS, na adição, entre uma string com numero e um number, ele irá apenas juntar
console.log('10' - 2); // Já na subtração, ele reconhcerá como number essa string com numero, e fará a conta normal
console.log('10' * 2); // Na multiplicação o mesmo
console.log('10' / 2); // Na divisão o mesmo 
console.log (10 - 'asas'); // Nesse caso será NaN (Not a Number), pois está sendo feito uma conta uma string que tem caracteres, e não numeros;

// Outros exemplos, porém só com strings que possuem números

console.log ('10' - '5');
console.log ('10' + '5');
console.log ('10' * '5');
console.log ('10' / '5');

