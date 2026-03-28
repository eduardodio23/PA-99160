
import './style.css'

function InfoAluno() {
    const nome = "Eduardo"
    const idade = 20
    const curso = "Desenvolvimento de Sistemas"

    return(
        <div className='infoAluno'>
            <h2> Informações do aluno: </h2>
            <p>Nome: {nome} </p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>

        </div>
    )
}

export default InfoAluno