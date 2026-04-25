import './style.css'


export default function FaleConosco() {
    return (
        <div className="fale-conosco">
            <h1>Realize seu pedido!</h1>
            <p>Envie uma mensagem informando oque você deseja</p>
            <form className="fale-conosco-form">
                <div className="form-group">
                    <label htmlFor="pedido">Pedido:</label>
                    <input type="text" id="pedido" name="pedido" required />
                </div>
                <div className="form-group">
                    <label htmlFor="endereco">Endereço:</label>
                    <input type="endereco" id="endereco" name="endeco" required />
                </div>
                <div className="form-group">
                    <label htmlFor="observacoes">Observações:</label>
                    <textarea id="observacoes" name="observacoes" required></textarea>
                </div>
                <button type="submit" className="form-button">Enviar</button>
            </form>
        </div>
    )
}

