import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <>
            <Container>
                <Row>
                    <Col sm={12}>
                        <div>
                            <h5>Galas Baires</h5>
                            <ul>
                                <li><Link to="/">Home</Link> </li>
                                <li><Link to="/ItemListContainer">Productos</Link></li>
                                <li><Link to="/FAQ">Preguntas frecuentes</Link></li>
                                <li><Link to="/Fragancias">Nosotros</Link></li>
                                <li><Link to="/formMinorista">Contacto</Link></li>
                                <li><Link to="/formMayorista">Mayoristas</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>        
        </>
    )
}

export default Footer;