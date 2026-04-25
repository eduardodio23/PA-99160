import './style.css'

export default function Produtos() {
    return (
        <div className="produtos">
            <h1>Nossos Produtos</h1>
            <p>Explore nossa seleção de delícias frescas e de alta qualidade.</p>
            <div className="produtos-grid">
                <div className="produto-card">
                    <h3>Queijo Gouda</h3>
                    <p>Queijo holandês maturado, perfeito para sanduíches.</p>
                    <span className="preco">R$ 25,00/kg</span>
                </div>
                <div className="produto-card">
                    <h3>Presunto Parma</h3>
                    <p>Presunto italiano curado, ideal para entradas.</p>
                    <span className="preco">R$ 45,00/kg</span>
                </div>
                <div className="produto-card">
                    <h3>Vinho Tinto Cabernet</h3>
                    <p>Vinho francês robusto, acompanha carnes vermelhas.</p>
                    <span className="preco">R$ 80,00</span>
                </div>
                <div className="produto-card">
                    <h3>Pão Artesanal</h3>
                    <p>Pão francês fresco, assado diariamente.</p>
                    <span className="preco">R$ 5,00/un</span>
                </div>
                <div className="produto-card">
                    <h3>Azeite Extra Virgem</h3>
                    <p>Azeite italiano de oliva, para realçar sabores.</p>
                    <span className="preco">R$ 30,00</span>
                </div>
                <div className="produto-card">
                    <h3>Chocolate Belga</h3>
                    <p>Chocolate amargo, perfeito para sobremesas.</p>
                    <span className="preco">R$ 15,00</span>
                </div>
            </div>
        </div>
    )
}
