import { useState } from 'react'
import './style.css'
//set: serve para definir conteudo a variavel 
// usestate: gerencia o estado de uma variavel
function InfoCurso() {
    const [nome, setNome] = useState("Programação de aplicativos")
    const [cargaHoraria, setCargaHoraria] = useState(10)
    const [local, setLocal] = useState("SENAI")

    return(
        <div className='info-curso'>
            <h2>Dados do curso: </h2>
            <p>Nome: {nome}</p>
            <p>carga horária: {cargaHoraria}</p>
            <p>Local: {local}</p>
        </div>
    )
}

export default InfoCurso