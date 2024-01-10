import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'
import { IoLogoInstagram, IoMailOutline } from "react-icons/io5";
import { PiFacebookLogoBold } from "react-icons/pi";

function Footer() {
  function scrollTo(){
    window.scrollTo(0, 0)
  }  

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
                    <img alt='' src='./img/isologo.png' className='d-inline-block align-center' width="170"/>                
                  </div>
                  <div className="d-flex gap-3 " style={{backgroundColor:"#ded5c2"}}>
                    <Link to="https://www.facebook.com/Galasbaires" className="text-dark text-decoration-none" target="_blank">
                      <PiFacebookLogoBold fontSize={30}/>
                    </Link>
                    <Link className="text-dark text-decoration-none" target="_blank" to="https://www.instagram.com/galasbaires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                      <IoLogoInstagram fontSize={30}/>
                    </Link>
                    <Link to='mailto:galasbaires@gmail.com' className="text-dark text-decoration-none">
                      <IoMailOutline fontSize={30}/>
                    </Link>
                  </div>
                </div>
                <div className="contenedorSecciones pb-5 container-fluid" style={{backgroundColor:"#ded5c2"}}>
                  <div className="d-flex flex-column flex-start">
                    <Link to="/productos" className="mb-2 text-dark text-decoration-none" onClick={scrollTo}><h5>Productos</h5></Link>
                    <Link to="/category/Velas" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Velas Aromaticas</Link>
                    <Link to="/category/Difusores" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Difusores</Link>
                    <Link to="/category/Perfuminas" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Perfuminas</Link>                
                    <Link to="/category/Refill" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Refill</Link>                
                    <Link to="/category/Hornitos" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Hornitos</Link>
                    <Link to="/Test" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Descubrí tu fragancia</Link>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/Nosotros" className="mb-2 text-dark text-decoration-none" onClick={scrollTo}><h5>Nosotros</h5></Link>
                    <Link to="/Nosotros" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Sobre Galas Baires</Link>
                    <Link to="/Nosotros" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollToTestimonios}>Testimonios</Link>
                    <Link to="/Nosotros" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Sobre las fragancias</Link>
                    <Link to="/Nosotros" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Nuestros materiales</Link>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/contacto" className="mb-2 text-dark text-decoration-none" onClick={scrollTo}><h5>Contacto</h5></Link>
                    <Link to="/contacto" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Formulario de contacto</Link>
                    <Link to="/contacto" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Redes sociales</Link>
                    <Link to="/contacto" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Whatsapp</Link>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/FAQ" className="mb-2 text-dark text-decoration-none" onClick={scrollTo}><h5>Preguntas frecuentes</h5></Link>
                    <Link to="/FAQ" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Políticas de envío</Link>
                    <Link to="/FAQ" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Políticas de entrega</Link>
                    <Link to="/FAQ" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Recomendaciones</Link>
                  </div>
                  <div className="d-flex flex-column">
                    <Link to="/mayoristas" className="text-dark text-decoration-none" onClick={scrollTo}><h5>Mayoristas</h5></Link>
                    <Link to="/mayoristas" className="ocultarSecciones text-dark text-decoration-none" onClick={scrollTo}>Formulario para mayoristas</Link>
                  </div>
                </div>
            </Col>
            </Row>
          </Container>        
        </>
    )
}

export default Footer;