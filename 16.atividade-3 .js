//criar uma função para verificar se um numero é positivo ou negativo

const verificar  = (numero) =>
    //operação ternária. "? if" se for maior que 0 "else" se for menor que 0
    numero > 0 ? "positivo" : "negativo"

resultado = verificar(10)

console.log(resultado)

