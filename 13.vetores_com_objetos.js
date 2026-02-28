// vetor de objetos
const usuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Felipe", idade: 26},
    {nome: "Pedro", idade: 35},
    {nome: "Osmar", idade: 13},
]

console.log("Exibindo todos os usuarios de vetor: ")
//exibindo todos os elementos do vetor
usuarios.forEach(usuario =>  {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log("\n Filtrado idade maior que 18 anos: ")
// adicionando em nova lista apenas maiores de 18 anos    
const maioresDe18 = usuarios.filter(
    usuario => usuario.idade >= 18
)
// Exibindo todos os elemento do vetor
maioresDe18.forEach( usuario => 
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nmostrando apenas o nome dos usuarios: ")
const listadeNomes = usuarios.map(u => u.nome)
listadeNomes.forEach(nome => console.log(`${nome}`))

console.log("\nEncontrar um usuario: ")
const usuarioEncontrado = usuarios.find(u => u.nome === "Ana" )
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)

console.log("\nSomando a idade de todos os usuarios: ")
// total acumula a soma das idades
// 0 é o valor inicial da contagem
// u é o objeto para acessar a variável que contém a idade
const somaIdades = usuarios.reduce((total, usuario) => total + usuario.idade, 0)
console.log(somaIdades)