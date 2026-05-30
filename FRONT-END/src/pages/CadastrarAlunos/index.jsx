import { toast } from 'react-toastify'
import { useState } from 'react'
import './style.css'
import api from '../../services/api'

export default function CadastrarAlunos() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [estaEnviando, setEstaEnviando] = useState(false)

    function LimparCamposDoFormulario(){
        setNome('')
        setEmail('')
        setTelefone('')
    }

    async function  envioDoFormulario(e) {
        e.preventDefault()
        setEstaEnviando(true)

        const dadosDoFormulario = { nome, email, telefone }

        try {
            //se der certo.
            const resposta = await api.post('/alunos', dadosDoFormulario)

            toast.success(resposta.data.mensagem || 'Aluno cadastrado com sucesso')
            LimparCamposDoFormulario()
        } catch (erro) {
            //se der errado.
            const mensagemDoServidor = erro?.response?.data?.mensagem || 'Erro ao cadastrar aluno.'
            toast.error(mensagemDoServidor)
            console.error('Erro no cadastro: ', erro)
        } finally {
            //executa de qualquer jeito, dando certo ou errado.
            setEstaEnviando(false)
        }
        
    }

    return(
        <div className='cadastro-page'>
            <form onSubmit={envioDoFormulario}>
                <div className='form-grupo'>
                    <label htmlFor='campo-nome'>Nome</label>
                    <input
                        id='campo-nome'
                        type='text'
                        placeholder='Ex..: Fernanda Brito'
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
                
                <div className='form-grupo'>
                    <label htmlFor='campo-telefone'>Telefone</label>
                    <input
                        id='campo-telefone'
                        type='text'
                        placeholder='Ex..: 71988882315'
                        value={telefone}
                        onChange={(e) => setTelefone(e.target.value)}
                    />
                </div>
                
                <div className='form-grupo'>
                    <label htmlFor='campo-email'>Email</label>
                    <input
                        id='campo-email'
                        type='text'
                        placeholder='Ex..: FernandaBrito@gmail.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            

                <button type='submit' disabled={estaEnviando}> 
                    {estaEnviando ? 'Cadastrando...' : 'Cadastrar'}
                </button>

            </form>
        </div>
    )



}