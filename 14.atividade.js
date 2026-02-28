const listaALunos = [
    {nome: 'Ana', nota: 8.0},
    {nome: 'Felipe', nota: 7.0},
    {nome: 'Pedro', nota: 9.0},
    {nome: 'Osmar', nota: 6.0},
    {nome: 'Juliana', nota: 9.0},
    {nome: 'Marta', nota: 5.0}
]

console.log("Encontre a aluna marta e mostra o nome e a media dela.")
const alunoEncontrado = listaALunos.find(a => a.nome === "Marta")
console.log(`Nome: ${alunoEncontrado.nome} \nNota: ${alunoEncontrado.nota}`)

console.log("Mostre a média geral da turma: ")
const mediaTotal = listaALunos.reduce((total, aluno) => total + aluno.nota, 0) / listaALunos.length
console.log(mediaTotal.toFixed(2))

console.log("mostre o nome e a nota dos alunos com nota abaixo de 7.0: ")
const alunoscomNotaBaixa = listaALunos.filter(
    aluno => aluno.nota < 7.0   
)
alunoscomNotaBaixa.forEach(aluno =>
    console.log(`Nome: ${aluno.nome} \nNota: ${aluno.nota}`)
)

console.log("mostre apenas o nome dos alunos com nota maior ou igual a 7.0")
const alunoscomNotaAlta = listaALunos.filter(
    aluno => aluno.nota >= 7.0
)
const nomesalunoscomNotaAlta = alunoscomNotaAlta.map(
    aluno => aluno.nome
)
nomesalunoscomNotaAlta.forEach(nome => console.log(nome))