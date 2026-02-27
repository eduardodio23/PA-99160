// FUNCAO

function somar(a,b){
    return a + b
}

function subtrair(a,b){
    return a - b
}

function multi(a,b){
    return a * b
}

function dividir(a,b){
    if(b === 0){
        return 'Não é possível dividir por zero'
    }
    return a / b
}


const soma = somar(2,3)
console.log(`Soma: ${soma}`)

const subtracao = subtrair(5,3)
console.log(`Subtração: ${subtracao}`)

const multiplicacao = multi(2,3)
console.log(`Multiplicação: ${multiplicacao}`)

const divisao = dividir(10,2)
console.log(`Divisão: ${divisao}`)