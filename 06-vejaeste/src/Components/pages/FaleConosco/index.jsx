import './style.css'


export default function FaleConosco() {
    return (
        <div className="fale-conosco">
            <h1>Fale Conosco</h1>
            <p>Envie uma mensagem para entrar em contato conosco</p>
            <form className="fale-conosco-form">
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input type="text" id="nome" name="nome" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="mensagem">Mensagem:</label>
                    <textarea id="mensagem" name="mensagem" required></textarea>
                </div>
                <button type="submit" className="form-button">Enviar</button>
            </form>
        </div>
    )
}