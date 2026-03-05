// Vetor
const numeros = [1,2,3,4,5]

// Usando o map, crie um vetor com os números
// do vetor  'numeros' cada um multiplicado por 2.
// 1 . map dobrando os  valores
const dobrados = numeros.map(numero => numero * 2);
console.log(`os números são ${dobrados}`);


//filtre os elementos do vetor 'numeros' para
// obter um novo vetor apenas com números  pares
const pares = numeros.filter(num => num % 2 === 0);
console.log(`mostrando os números pares: ${pares}`)

//Usando reduce, some todos os números do vetor  'numeros'.

const soma_num = numeros.reduce((acumula, atual) => acumula + atual , 0);
console.log(soma_num)

