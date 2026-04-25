import { Link } from 'react-router-dom'
import './style.css'

export default function Principal() {
    return(
        <div className="principal">
            <section className="hero">
                <h1>Bem-vindo a Delicatesse Dona Cida </h1>
                <p>Descubra sabores únicos e produtos frescos selecionados com cuidado.</p>
                <Link to="/produtos" className="cta-button">Ver Produtos</Link>
            </section>
            <section className="featured">
                <h2>Nossos Destaques</h2>
                <div className="products-grid">
                    <div className="product-card">
                        <h3>Queijos Artesanais</h3>
                        <p>Variedade de queijos importados e nacionais.</p>
                    </div>
                    <div className="product-card">
                        <h3>Embutidos Premium</h3>
                        <p>Salames, presuntos e muito mais.</p>
                    </div>
                    <div className="product-card">
                        <h3>Vinhos Selecionados</h3>
                        <p>Acompanhamentos perfeitos para suas refeições.</p>
                    </div>
                </div>
            </section>
            <section className="about">
                <h2>Sobre Nós</h2>
                <p>Somos uma delicatessen dedicada a oferecer produtos de alta qualidade, frescos e deliciosos. Venha nos visitar!</p>
            </section>
        </div>
    )
}