import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <span>Contabilidade Simples</span>
                </Link>

                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/sobrenos">Sobre nós</NavLink></li>
                    <li><NavLink to="/faleconosco">Fale conosco</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}