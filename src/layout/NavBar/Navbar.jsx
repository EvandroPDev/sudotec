import { Link } from "react-router-dom";

import './NavBar.css'
const NavBar = () => {
    return(
        <nav className="navbar">
            <li>
                <Link to={`/`}>SUDOTEC</Link>
            </li>
            <li>
                <Link to={`portal`}>PORTAL DA TRANSPARÊNCIA</Link>
                </li>
            <li>
                <Link to={`inclusao`}>INCLUSÃO DIGITAL</Link>
                </li>
            <li>
                <Link to={`maker`}>MAKER SPACE</Link>
            </li>
            <li>
                <Link to={`aprender`}>APRENDER & CRESCER</Link>
                </li>
            <li>
                <Link to={`incubadora`}>INCUBADORA TECNOLOGICA</Link>
                </li>
            <li>
                <Link to={`imprensa`}>IMPRENSA</Link>
            </li>
        </nav>
    )
}
export default NavBar