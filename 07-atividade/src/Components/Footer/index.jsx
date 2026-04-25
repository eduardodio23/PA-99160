import { Link } from 'react-router-dom'
import './style.css'

export default function Footer() {
    return(
        <footer>
            <div>
                <strong>Delicatessen Dona Cida</strong> CNPJ 45.896.482/1521
                <br />
                Rua Itapicuru, 123 - Republica - Salvador / Bahia
                <br />
                © {new Date().getFullYear()} Todos os direitos reservados
            </div>
        </footer>
    )
}