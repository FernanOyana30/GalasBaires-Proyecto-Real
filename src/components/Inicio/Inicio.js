import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Inicio (){    
    return (
      <>        
        <Container>
          <Row>
            <Col sm={6}>
              <div>
                <h1>Creá ambientes llenos de aroma y calidez.</h1>
                <p>Nuestras velas aromáticas son el complemento perfecto para crear ambientes irresistibles.</p>
                <p>Descubrí nuestra amplia variedad de fragancias y productos para transformar tus espacios.</p>
                <button>Ver catálogo</button> 
              </div>
            </Col>
            <Col sm={6}>
              <Image src="holder.js/171x180" rounded />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div>            
                <CardGroup>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" roundedCircle />
                    <Card.Body>
                      <Card.Title>Título característica</Card.Title>
                      <Card.Text>
                        Descripción de la característica.
                      </Card.Text>
                    </Card.Body>                
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Título característica</Card.Title>
                      <Card.Text>
                        Descripción de la característica.
                      </Card.Text>
                    </Card.Body>                
                  </Card>
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                      <Card.Title>Título característica</Card.Title>
                      <Card.Text>
                        Descripción de la característica.
                      </Card.Text>
                    </Card.Body>                
                  </Card>
                </CardGroup>
              </div>              
            </Col>            
          </Row>
          <Row>
            <Col sm={12}>
              <div>
                <h2>Productos destacados</h2>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Nombre producto</Card.Title>
                    <Card.Text>
                      Precio producto
                    </Card.Text>
                    <Button variant="primary">Más información</Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <div>
                <h3>Descubrí tu fragancia</h3>
                <p>¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                <button>Hacer cuestionario</button>
              </div>              
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div>                  
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
                      <Image src="holder.js/171x180" rounded />
                    </Col>                                
                  </Row>
                </Container>                 
              </div>              
            </Col>
            <Col sm={6}>
              <div>
                <h2>Sobre nosotros</h2>
                <p>Acá va un párrafo</p>
                <button>Conocenos</button>                                  
              </div>              
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <div>
                <h2>¿Sos mayorista?</h2>
                <p>Acá va un párrafo</p>
                <button>¡Quiero saber más!</button>                                   
              </div>              
            </Col >
            <Col sm={6}>
              <div>
                <Container>
                  <Row>
                    <Col xs={6} md={4}>
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