import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi";

function Footer() {
  function scrollToTestimonios(){
    window.scrollTo(0, 2800)
  }  

    return (
        <>            
          <Container className="footer-container container-fluid" style={{backgroundColor:"#ded5c2"}}>
            <Row style={{backgroundColor:"#ded5c2"}}>
              <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor:"#ded5c2"}}>              
                <div className="d-flex justify-content-between align-items-center py-5 container-fluid" style={{backgroundColor:"#ded5c2"}}>
                  <div style={{backgroundColor:"#ded5c2"}}></div>
                  <div style={{backgroundColor:"#ded5c2"}}>
                    <a href="/" className="text-dark text-decoration-none">
                      <img alt='' src='./img/isologo.png' className='d-inline-block align-center' width="170"/>
                    </a>
                  </div>
                  <div className="d-flex gap-3 " style={{backgroundColor:"#ded5c2"}}>
                    <a href="https://www.facebook.com/Galasbaires" className="text-dark text-decoration-none" target="_blank">
                      <PiFacebookLogoBold fontSize={30}/>
                    </a>
                    <a className="text-dark text-decoration-none" target="_blank" href="https://www.instagram.com/galasbaires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <IoLogoInstagram fontSize={30}/>
                    </a>
                    <a href='mailto:galasbaires@gmail.com' className="text-dark text-decoration-none">
                      <IoMailOutline fontSize={30}/>
                    </a>
                  </div>
                </div>
                <div className="contenedorSecciones pb-5 container-fluid" style={{backgroundColor:"#ded5c2"}}>
                  <div className="d-flex flex-column flex-start">
                    <a href="/productos" className="mb-2 text-dark text-decoration-none"><h5>Productos</h5></a>
                    <a href="/category/Velas" className="ocultarSecciones text-dark text-decoration-none">Velas Aromaticas</a>
                    <a href="/category/Difusores" className="ocultarSecciones text-dark text-decoration-none">Difusores</a>
                    <a href="/category/Perfuminas" className="ocultarSecciones text-dark text-decoration-none">Perfuminas</a>                
                    <a href="/category/Refill" className="ocultarSecciones text-dark text-decoration-none">Refill</a>                
                    <a href="/category/Hornitos" className="ocultarSecciones text-dark text-decoration-none">Hornitos</a>
                    <a href="/Test" className="ocultarSecciones text-dark text-decoration-none">Descubrí tu fragancia</a>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="/Nosotros" className="mb-2 text-dark text-decoration-none"><h5>Nosotros</h5></a>
                    <a href="/Nosotros" className="ocultarSecciones text-dark text-decoration-none">Sobre Galas Baires</a>
                    <a href="/Nosotros" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollToTestimonios}>Testimonios</a>
                    <a href="/Nosotros" className="ocultarSecciones text-dark text-decoration-none">Sobre las fragancias</a>
                    <a href="/Nosotros" className="ocultarSecciones text-dark text-decoration-none">Nuestros materiales</a>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="/contacto" className="mb-2 text-dark text-decoration-none"><h5>Contacto</h5></a>
                    <a href="/contacto" className="ocultarSecciones text-dark text-decoration-none">Formulario de contacto</a>
                    <a href="/contacto" className="ocultarSecciones text-dark text-decoration-none">Redes sociales</a>
                    <a href="/contacto" className="ocultarSecciones text-dark text-decoration-none">Whatsapp</a>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="/FAQ" className="mb-2 text-dark text-decoration-none"><h5>Preguntas frecuentes</h5></a>
                    <a href="/FAQ" className="ocultarSecciones text-dark text-decoration-none">Políticas de envío</a>
                    <a href="/FAQ" className="ocultarSecciones text-dark text-decoration-none">Políticas de entrega</a>
                    <a href="/FAQ" className="ocultarSecciones text-dark text-decoration-none">Recomendaciones</a>
                  </div>
                  <div className="d-flex flex-column">
                    <a href="/mayoristas" className="text-dark text-decoration-none"><h5>Mayoristas</h5></a>
                    <a href="/mayoristas" className="ocultarSecciones text-dark text-decoration-none">Formulario para mayoristas</a>
                  </div>
                </div>
            </Col>
            </Row>
          </Container>        
        </>
    )
}

export default Footer;