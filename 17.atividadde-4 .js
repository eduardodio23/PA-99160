//crie uma função para calcular média aritmética.

nota = [5,5,5]
const soma = nota.reduce ((total, notas) => total + notas,0 )
const media_total = soma/nota.length;
//length Usar a propriedade de tamanho sendo mais seguro do que dividir por um número fixo, pois assim o código funciona mesmo se você mudar a quantidade de notas no array.
console.log(`media geral: ${media_total}`)