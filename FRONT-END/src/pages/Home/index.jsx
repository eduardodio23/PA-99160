import './style.css'

export default function Home(){
    return (
        <section className='hero'>
            <div className='hero-content'>
                <h1>Bem-vindo ao projeto-front</h1>
                <p>
                    use o menu de navegação acima para cadastrar e listar todos os alunos
                </p>
                <div className='actions'>
                    <span className='senai-logo senai-logo--use' aria-hidden='true'></span>
                </div>
            </div>
        </section>
    )
}