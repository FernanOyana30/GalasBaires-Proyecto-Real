import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button';

function Inicio (){  
  
    return (
        <>        
          <div>
            <h1>Creá ambientes llenos de aroma y calidez.</h1>
            <p>Nuestras velas aromáticas son el complemento perfecto para crear ambientes irresistibles.</p>
            <p>Descubrí nuestra amplia variedad de fragancias y productos para transformar tus espacios.</p>
            <button>Ver catálogo</button>  
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" rounded />
                </Col>                                
              </Row>
            </Container>                      
          </div>              
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
          <div>
            <h3>Descubrí tu fragancia</h3>
            <p>¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
            <button>Hacer cuestionario</button>
          </div>
          <div>
            <h2>Sobre nosotros</h2>
            <p>Acá va un párrafo</p>
            <button>Conocenos</button>  
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" rounded />
                </Col>                                
              </Row>
            </Container>                 
          </div>
          <div>
              <h2>¿Sos mayorista?</h2>
              <p>Acá va un párrafo</p>
              <button>¡Quiero saber más!</button>  
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src="holder.js/171x180" rounded />
                  </Col>                                
                </Row>
              </Container>                 
          </div>
        </>
    );
  }  

  export default Inicio;