import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo-svg.svg'
import './style.css'

export default function Header() {
    return (
        <header>
            <nav>
                <Link to="/" className="logo">
                    <img src={logo} alt="Delicatessen Dona Cida" />
                </Link>

                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/produtos">Produtos</NavLink></li>
                    <li><NavLink to="/sobrenos">Sobre nós</NavLink></li>
                    <li><NavLink to="/faleconosco">Fale conosco</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}