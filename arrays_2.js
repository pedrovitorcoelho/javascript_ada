// PARTE 2, FALANDO SOBRE ARRAYS

// Trabalhando com métodos (resumindo: funções que estão dentro de uma variável)

let input = require('readline-sync'); // Importando biblioteca;

// Criando um array

let arr1 = [1, 23, 233, 43, 2];

// Metodo slice - fatiamento

console.log(arr1.slice(0, 2)); // Definimos o inicio, até o anterior que irá parar 
console.log(arr1.slice(2)); // definindo apenas o inicio, ele dará continuidade até o fim;

console.clear();

// Adicionando elementos: push | unshift

let arr2 = []

arr2.push(1); // Esse método sempre adiconará no final do array
arr2.push(6);

console.log(arr2);

// Para adicionar algo ao começo, usamos o unshift

arr2.unshift(10);

console.log(arr2);

console.clear();

// Removendo elementos pop | shift

// Nessa situação, segue a mesma lógica: POP remove o último e SHIFT o primeiro

arr2.pop();

console.log(arr2);

arr2.shift();

console.log(arr2);

console.clear();

// Trabalhando com concatenização concat

// Juntar dois arrays, por exemplos

arr2.unshift(420);

console.log(arr1);
console.log(arr2);

console.log(arr1.concat(arr2)); // Juntando eles;

console.clear();

// Buscar por index em JS indexOf | LastIndexOf

console.log(arr1);

let indiceDo23 = arr1.indexOf(23);

console.log(indiceDo23); // Veja que nessa ação, ele buscará o indice de um determinado elemento. ATENÇÃO, CASO HAJA O ELEMENTO REPETIDO NO ARRAY, ELE IRÁ EXIBIR O PRIMEIRO

arr1.push(23);

console.log(arr1);

//Atenção> Caso o elemento não exista, ele retornara o indice -1 

let ultimo = arr1.lastIndexOf(23);

console.log(ultimo); // Já nesse caso, onde tenhamos dois elementos repitidos, podemos usar o LastIndexOf, como o próprio nome já diz, trará o ultimo.

console.clear();

// Descobrindo a exixtencia de um elemento: INCLUDES

console.log(arr1);

console.log(arr1.includes(59)); // Para sabermos se um array tem determinado conteudo, podemos usar esse metodo


console.clear();

// Revertendo Arrays, isto é, alterando a ordem dos elementos reverse

console.log(arr1);

arr1.reverse();

console.log(arr1);