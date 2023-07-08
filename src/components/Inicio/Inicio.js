import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Inicio (){    
    return (
      <>        
        <Container>
          <Row>
            <Col sm={6}>
              <div className="w-75">
                <h1 className="w-75 fw-bold pt-5 pb-3">Creá ambientes llenos de aroma y calidez.</h1>                
                <p className="mb-0">Nuestras velas aromáticas son el complemento perfecto para crear ambientes irresistibles.</p>
                <p>Descubrí nuestra amplia variedad de fragancias y productos para transformar tus espacios.</p>
                <Link to="/ItemListContainer"><Button>Ver catálogo</Button></Link>
              </div>
            </Col>
            <Col sm={6}>
              <Image src="holder.js/171x180" rounded />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div className="d-flex justify-content-evenly p-5">
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
            <Col sm={12}>
              <div className="pb-5">
                <h3 className="fw-bold pb-4">Productos destacados</h3>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Nombre producto</Card.Title>
                    <Card.Text>
                      Precio producto
                    </Card.Text>
                    <Link to="/ItemDetailContainer"><Button variant="primary">Más información</Button></Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6} class="d-flex flex-column justify-content-center p-5">
              <div className="text-center p-3 mb-5">
                <h3 className="pb-3 fw-bold">Descubrí tu fragancia</h3>
                <p className="pb-3">¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos.</p>
                <Button>Hacer cuestionario</Button>
              </div>              
            </Col>
            <Col sm={3}></Col>
          </Row>
          <Row>
            <Col sm={6}>
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
            <Col sm={6}>
              <div className="p-4 mb-5">
                <h2 className="fw-bold">Sobre nosotros</h2>
                <p>Acá va un párrafo</p>
                <Link to="/Nosotros"><Button>Conocenos</Button></Link>                                    
              </div>              
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div className="p-4 mb-5 text-end">
                <h2 className="fw-bold">¿Sos mayorista?</h2>
                <p>Acá va un párrafo</p>
                <Button>¡Quiero saber más!</Button>                                   
              </div>              
            </Col >
            <Col sm={6}>
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
        </Container>  
      </>
    );
  }  

  export default Inicio;