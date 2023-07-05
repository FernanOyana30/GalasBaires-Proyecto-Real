import React from 'react'
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div>
            <h5>Galas Baires</h5>
            <ul>
                <li><Link to="/">Home</Link> </li>
                <li><Link to="/ItemListContainer">Productos</Link></li>
                <li><Link to="/FAQ">Preguntas frecuentes</Link></li>
                <li><Link to="/">Nosotros</Link></li>
                <li><Link to="/formMinorista">Contacto</Link></li>
                <li><Link to="/formMayorista">Mayoristas</Link></li>
            </ul>
        </div>
    )
}

export default Footer;