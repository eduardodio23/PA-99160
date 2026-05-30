import { useEffect, useState } from 'react'
import './style.css'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function ListarAlunos() {
    const [alunos, setAlunos] = useState([])
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        async function fetchAlunos() {
            try {
                const response = await api.get('/alunos')
                setAlunos(response.data || [])
            } catch (erro) {
                toast.error('Erro ao buscar alunos')
                console.error(erro)
            } finally {
                setCarregando(false)
            }
        }

        fetchAlunos()
    }, [])

    return (
        <div className='lista-alunos'>
            <h1>Lista de Alunos</h1>

            {carregando ? (
                <p className='texto-medio'>Carregando...</p>
            ) : alunos.length === 0 ? (
                <div className='vazio-card'>Nenhum aluno encontrado.</div>
            ) : (
                <div className='table-wrap'>
                    <table className='tabela-alunos'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>E-mail</th>
                                <th>Telefone</th>
                            </tr>
                        </thead>
                        <tbody>
                            {alunos.map((aluno, index) => (
                                <tr key={aluno.email || index}>
                                    <td>{aluno.nome}</td>
                                    <td>{aluno.email}</td>
                                    <td>{aluno.telefone}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}