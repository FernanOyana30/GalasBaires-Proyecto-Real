import '../../Styles/style.css'
import Destacados from '../../components/ItemListContainer/destacados'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Inicio (){    
    return (
      <>        
        <Container>
          <Row>
            <Col sm={1} lg={6} className="text-container" >
              <div className="text-container w-75">
                <h1 className="w-75 fw-bold pt-5 pb-3" style={{color:"#2D2D2D"}}>Creá ambientes llenos de <span style={{color:"#986F54"}}>aroma y calidez.</span> </h1>                
                <p className="mb-0">Nuestras velas aromáticas son el complemento perfecto para  <span style={{color:"#986F54"}}>crear ambientes irresistibles</span>.</p>
                <p>Descubrí nuestra amplia variedad de fragancias y productos para transformar tus espacios.</p>
                <Link to="/productos"><Button variant="light" className="button-style">Ver catálogo</Button></Link>
              </div>
            </Col>
            <Col sm={1} lg={6}>
              <div className='img-container'>
                <Image style={{width: "105%"}} src="./img/img-inicio-1.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={1} lg={12}>
              <div className="contenedor-caracteristicas d-flex justify-content-evenly p-5">
                <div className="text-center">    
                  <Card.Img variant="top" src="holder.js/100px160" roundedCircle />
                  <h5>Título característica</h5>
                  <p>Descripción de la característica.</p>
                </div>              
                <div className="text-center">  
                  <svg style={{color:"#986F54"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16">
                    <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                  <h5>Título característica</h5>
                  <p>Descripción de la característica.</p>  
                </div>
                <div className="text-center">      
                  <svg style={{color:"#986F54"}} xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
                  </svg>
                  <h5>Título característica</h5>
                  <p>Descripción de la característica.</p>  
                </div>  
              </div>
            </Col>            
          </Row>
          <Row>
            <Col sm={1} lg={12} >
              <div className='container-destacados'>
                {<Destacados />}
              </div>
            </Col>
          </Row>
          <Row>            
            <Col sm={1} lg={12} className="d-flex flex-column justify-content-center p-5">
              <div className="text-center p-5 mb-5 container-fluid" style={{backgroundColor: "#FFF8F2"}}>
                <h3 className="pb-3 fw-bold" style={{color:"#2D2D2D"}}>Descubrí tu fragancia</h3>
                <p className="pb-3" style={{marginLeft: "250px", marginRight: "250px"}} >¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos.</p>
                <Button variant="light" className="button-style">Hacer cuestionario</Button>
              </div>              
            </Col>            
          </Row>
          <Row>
            <Col sm={1} lg={6}>
              <div>                  
                <Container>
                  <Row>
                    <Col lg={6}>
                      <Image src="holder.js/171x180" rounded />
                    </Col>                                
                  </Row>
                </Container>                 
              </div>              
            </Col>
            <Col sm={1} lg={6}>
              <div className="p-4 mb-5">
                <h2 className="fw-bold" style={{color:"#2D2D2D"}}>Sobre nosotros</h2>
                <p>Acá va un párrafo</p>
                <Link to="/Nosotros"><Button variant="light" className="button-style">Conocenos</Button></Link>                                    
              </div>              
            </Col>
          </Row>
          <Row className='contenedorMayorista'>
            <Col sm={1} lg={6}>
              <div className="p-4 mb-5 text-end">
                <h2 className="fw-bold" style={{color:"#2D2D2D"}}>¿Sos mayorista?</h2>
                <p>Acá va un párrafo</p>
                <Button variant="light" className="button-style">¡Quiero saber más!</Button>                                   
              </div>              
            </Col >
            <Col sm={1} lg={6}>
              <div>
                <Container>
                  <Row>
                    <Col sm={6}>
                      <Image style={{width: "150%", paddingBottom: "60px"}} src="./img/img-inicio-3.jpg" rounded />
                    </Col>                                
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>     
          <Row>
            <Col sm={1} lg={3}></Col>
            <Col sm={1} lg={6}>
              <Carousel style={{width: "75%"}}>
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
            <Col sm={1} lg={3}></Col>
          </Row>               
        </Container>  
      </>
    );
  }  

  export default Inicio;