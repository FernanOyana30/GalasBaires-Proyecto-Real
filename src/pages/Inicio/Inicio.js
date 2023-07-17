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
                <h1 className="w-75 fw-bold pt-5 pb-3">Creá ambientes llenos de aroma y calidez.</h1>                
                <p className="mb-0">Nuestras velas aromáticas son el complemento perfecto para crear ambientes irresistibles.</p>
                <p>Descubrí nuestra amplia variedad de fragancias y productos para transformar tus espacios.</p>
                <Link to="/productos"><Button>Ver catálogo</Button></Link>
              </div>
            </Col>
            <Col sm={1} lg={6}>
              <div className='img-container'>
                <Image  src="holder.js/171x180" rounded />
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
                  <Card.Img variant="top" src="holder.js/100px160" roundedCircle />
                  <h5>Título característica</h5>
                  <p>Descripción de la característica.</p>  
                </div>
                <div className="text-center">      
                  <Card.Img variant="top" src="holder.js/100px160" roundedCircle />
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
            <Col sm={1} lg={3}></Col>
            <Col sm={1} lg={6} className="d-flex flex-column justify-content-center p-5">
              <div className="text-center p-3 mb-5">
                <h3 className="pb-3 fw-bold">Descubrí tu fragancia</h3>
                <p className="pb-3">¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos.</p>
                <Button>Hacer cuestionario</Button>
              </div>              
            </Col>
            <Col sm={1} lg={3}></Col>
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
                <h2 className="fw-bold">Sobre nosotros</h2>
                <p>Acá va un párrafo</p>
                <Link to="/Nosotros"><Button>Conocenos</Button></Link>                                    
              </div>              
            </Col>
          </Row>
          <Row className='contenedorMayorista'>
            <Col sm={1} lg={6}>
              <div className="p-4 mb-5 text-end">
                <h2 className="fw-bold">¿Sos mayorista?</h2>
                <p>Acá va un párrafo</p>
                <Button>¡Quiero saber más!</Button>                                   
              </div>              
            </Col >
            <Col sm={1} lg={6}>
              <div>
                <Container>
                  <Row>
                    <Col sm={6}>
                      <Image src="holder.js/171x180" rounded />
                    </Col>                                
                  </Row>
                </Container>
              </div>
            </Col>
          </Row>     
          <Row>
            <Col sm={1} lg={3}></Col>
            <Col sm={1} lg={6}>
              <Carousel>
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