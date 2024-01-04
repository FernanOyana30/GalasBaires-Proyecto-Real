import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi";

function Footer() {
    return (
        <>
            
          <Container className="footer-container">
            <div className="d-flex justify-content-between align-items-center py-5">
              <div></div>
              <div>
                <img alt='' src='./img/isologo.png' className='d-inline-block align-center' width="170"/>
                {/* <h2>GALAS ⭐ BAIRES</h2> */}
              </div>
              <div className="d-flex gap-3">
                <PiFacebookLogoBold fontSize={30}/>
                <IoLogoInstagram fontSize={30}/>
                <IoMailOutline fontSize={30}/>
              </div>
            </div>
            <div className="d-flex justify-content-around align-items-start pb-5">
              <div className="d-flex flex-column flex-start">
              <Link to="/productos" className="text-dark text-decoration-none"><h5>Productos</h5></Link>
              <Link to="/productos" className="text-dark text-decoration-none">Velas Aromaticas</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Difusores</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Perfuminas</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Souvenirs</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Hornitos</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Refill</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Fragancias</Link>
              <Link to="/productos" className="text-dark text-decoration-none">Descubrí tu fragancia</Link>
              </div>
              <div className="d-flex flex-column">
              <Link to="/Nosotros" className="text-dark text-decoration-none"><h5>Nosotros</h5></Link>
              <Link to="/Nosotros" className="text-dark text-decoration-none">Sobre Galas Baires</Link>
              <Link to="/Nosotros" className="text-dark text-decoration-none">Testimonios</Link>
              <Link to="/Nosotros" className="text-dark text-decoration-none">Sobre las fragancias</Link>
              <Link to="/Nosotros" className="text-dark text-decoration-none">Nuestros materiales</Link>
              </div>
              <div className="d-flex flex-column">
              <Link to="/formMinorista" className="text-dark text-decoration-none"><h5>Contacto</h5></Link>
              <Link to="/formMinorista" className="text-dark text-decoration-none">Formulario de contacto</Link>
              <Link to="/formMinorista" className="text-dark text-decoration-none">Redes sociales</Link>
              <Link to="/formMinorista" className="text-dark text-decoration-none">Whatsapp</Link>
              </div>
              <div className="d-flex flex-column">
              <Link to="/FAQ" className="text-dark text-decoration-none"><h5>Preguntas frecuentes</h5></Link>
              <Link to="/FAQ" className="text-dark text-decoration-none">Políticas de envío</Link>
              <Link to="/FAQ" className="text-dark text-decoration-none">Políticas de entrega</Link>
              <Link to="/FAQ" className="text-dark text-decoration-none">Recomendaciones</Link>
              </div>
              <div className="d-flex flex-column">
              <Link to="/formMayorista" className="text-dark text-decoration-none"><h5>Mayoristas</h5></Link>
              <Link to="/formMayorista" className="text-dark text-decoration-none">Formulario para mayoristas</Link>
              </div>
            </div>
          </Container>
        
        </>
    )
}

export default Footer;