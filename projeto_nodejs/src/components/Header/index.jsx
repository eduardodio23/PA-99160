import { Link, NavLink } from 'react-router-dom'
import 'assets'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <Header>
            <div>
                <Link to="/">
                 <img src={logo}  alt="Logo da empresa" />
                 <span>Contabilidade Simples</span>
                </Link>
            
            <nav>
                <NavLink to="/sobre-nos">Sobre nós</NavLink>
                <NavLink to="/fale-conosco">Fale conosco</NavLink>
            </nav>
            
            </div>
        </Header>
    )
}