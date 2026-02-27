// CRIANDO UM VETOR

const listanomes = ["Marta", "José", "Maria"]

console.log("Exibindo todos os elementos:")
console.log(listanomes)

console.log("\nExibindo apenas o segundo  elemento:")
console.log(listanomes[1])

console.log("\nAdicionando um elemento:")
listanomes.push("Mariana")
console.log(listanomes)

console.log("\nRemovendo o primeiro elemento:")
listanomes.shift()
console.log(listanomes)

console.log("\nRemovendo o ultimo elemento:")
listanomes.pop()
console.log(listanomes)

console.log("\nRemovendo um elemento específico: ")
//No indice 1, remover 1 elemento
listanomes.splice(1,1)
console.log(listanomes)




