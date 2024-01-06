import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function FormMayorista() {
  return (
    <Container>
      <Row>
        <Col xsm={1} sm={1} md={12} lg={12}>
          <div className='encabezadoMayorista'>
            <h3 className='titleContactoMayorista'>Exclusivo mayoristas</h3>
            <h5 className='fw-bold'>¿Querés vender nuestros productos?</h5>
            <p className='parrafoEncabezadoMayorista'>Solicitá nuestro catálogo exclusivo para mayoristas completando el formulario con tus datos o contactanos por nuestras redes sociales. Nos comunicaremos a la brevedad.
            </p>
            <Link to=''>
              <Button className='button-style'>Solicitar catálogo mayorista</Button>
            </Link>
          </div>          
        </Col>        
      </Row>      
      <Row>
        <Col xsm={1} sm={1} md={12} lg={12}>
          <div className='contenedorContacto '>
            <div className='contenedorIconoMail'>
              <Link className="text-dark text-decoration-none" to='mailto:galasbaires@gmail.com'>
                <img alt='' src='./img/icon_mail_.png' className='iconoFAQ'/>
              <p>galasbaires@gmail.com</p>
              </Link>              
            </div>
            <div className='contenedorIconoFacebook'>
              <Link className="text-dark text-decoration-none" to='https://www.facebook.com/Galasbaires' target="_blank">
                <img alt='' src='./img/IconoFacebook.png' className='iconoFAQ'/>
                <p>galasbaires</p>
              </Link>              
            </div>
            <div className='contenedorIcono'>
              <Link className="text-dark text-decoration-none" to='https://www.instagram.com/galasbaires?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' target="_blank">
                <img alt='' src='./img/ig.png' className='iconoFAQ'/>
                <p>@galasbaires</p>
              </Link>              
            </div>
            <div className='contenedorIcono'>
              <img alt='' src='./img/Vector.png' className='iconoFAQ'/>
              <p>San Miguel, Buenos Aires</p>
            </div>
            <div className='contenedorIcono'>
              <Link className="text-dark text-decoration-none" to='' target="_blank">
                <img alt='' src='./img/llamada-telefonica.png' className='iconoFAQ'/>
                <p>1157173773</p>
              </Link>              
            </div>              
          </div>
        </Col>          
      </Row>
      <Row>
        <Col xsm={1} sm={1} md={12} lg={12}>
          <div className='encabezadoImportante' style={{textAlign:'center'}}> 
            <h5 className='fw-bold'>Importante</h5>           
            <p className='parrafoEncabezadoImportante'>Para compras minoristas contactanos y solicitá el catálogo en nuestro formulario de <span><a href='/contacto' style={{color:"#2D2D2D", fontWeight:"bold"}}>CONTACTO</a></span>  o también en nuestras redes sociales</p>            
          </div>          
        </Col>        
      </Row>   
      <Row className='p-5'>
        <Col xsm={1} sm={1} md={1} lg={3}></Col>
        <Col xsm={1} sm={1} md={5} lg={6}>
          <Carousel className='carruselStyle'>
            <Carousel.Item interval={1000}>
              <img
                className="d-block w-100"
                src="./img/img-carrusel-1.jpg"
                alt="First slide"
              />                  
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src="./img/img-carrusel-2.jpg"
                alt="Second slide"
              />                  
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="./img/img-carrusel-3.jpg"
                alt="Third slide"
              />                  
            </Carousel.Item>
          </Carousel>
        </Col> 
        <Col xsm={1} sm={1} md={1} lg={3}></Col>
      </Row>
    </Container>
  );
}

export default FormMayorista;