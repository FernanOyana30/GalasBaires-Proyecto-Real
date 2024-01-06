import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './style.css'

function PantallaAgradecimiento(){
    return (
        <>
            <Container>
                <Row>
                    <Col></Col>
                    <Col sm={6}>
                        <div className='contenedorGracias'>
                            <h1 className='tituloGracias'>¡Muchas gracias por contactarnos!</h1>
                            <p style={{marginBottom:"30px", marginLeft:"20px"}}>Apreciamos que te hayas contactado con nosotros. Pronto vas a recibir una respuesta por parte de nuestro equipo lo más detallada posible. ¡Estamos felices de ayudarte!</p>
                            <Link to="/">
                                <Button className='button-style'>Volver al inicio</Button>
                            </Link>
                        </div>
                    </Col>
                    <Col></Col>
                </Row>
            </Container>        
        </>
    )
}

export default PantallaAgradecimiento;