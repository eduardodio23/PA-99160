import { useState } from 'react'
import './style.css'

export default function AdcionarAluno() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [alunos, setAlunos] = useState([])
    
    // Função para adcionar um aluno na lista.
    const handleAdcionarAluno = (event) => {
        //impede que a página seja carregada 
        event.preventDefault()
        
        //se os campos estiverem preenchidos...
        if(nome && email){
            setAlunos([...alunos, {nome,email}]) // Adicionar na lista.
            setNome("") // Apaga o nome informado deixando o campo vazio.
            setEmail("") // Apaga o email infomado deixando o campo vazio.
        }
    }
    return (
        <div>
            <h2>Adcionar Aluno:</h2>

            <form onSubmit={handleAdcionarAluno}>
                <input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                />
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit">
                   Adcionar
                </button>
            </form>
            <hr />
            <h2>Alunos Adicionados</h2>
            <ul>
                {alunos.map((aluno, index) => ( 
                    <li key={index}>
                        {aluno.nome} - {aluno.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

