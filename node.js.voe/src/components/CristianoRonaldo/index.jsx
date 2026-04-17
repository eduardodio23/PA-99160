import { useState } from 'react'
import './style.css'



export default function AdcionarJogador() {
    // Estado para guardar a lista de jogadores
    const [listaJogadores, setListaJogadores] = useState([])
    
    // Estados para cada campo do formulário
    const [nome, setNome] = useState("")
    const [idade, setIdade] = useState("")
    const [numero, setNumero] = useState("")
    const [melhor_pe, setMelhorpe] = useState("")
    
    const handleAdcionarJogador = (event) => {
        event.preventDefault()
        
        // Verifica se todos os campos estão preenchidos
        if(nome && idade && numero && melhor_pe){
            // Adiciona o jogador na lista
            setListaJogadores([...listaJogadores, { nome, idade, numero, melhor_pe }]) 
            
            // Limpa os campos
            setNome("") 
            setIdade("")
            setNumero("") 
            setMelhorpe("")
        }
    }

    return (
        <div>
            <h2>Adicionar Jogador:</h2>

            <form onSubmit={handleAdcionarJogador}>
                <input
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Idade"
                    value={idade}
                    onChange={(e) => setIdade(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Número"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Melhor pé"
                    value={melhor_pe}
                    onChange={(e) => setMelhorpe(e.target.value)}
                />
                <button type="submit">
                    Adicionar
                </button>
            </form>
            
            <hr />
            
            <h2>Jogadores Cadastrados</h2>
            <ul>
                {listaJogadores.map((jogador, index) => ( 
                    <li key={index}>
                        {jogador.nome} - {jogador.idade} anos - Camisa {jogador.numero} - Pé: {jogador.melhor_pe}
                    </li>
                ))}
            </ul>
        </div>
    )
}