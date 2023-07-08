import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function ItemDetailContainer() {
    return (
      <>
        <Container>
          <Row>
            <Col sm={6} className='mt-5'>
              <Image src="holder.js/100px250" fluid />                
            </Col>
            <Col sm={6} className='mt-5'>
              <Card >
                <Card.Body >
                  <p className='mb-0'>Categoría</p>
                  <h1 className='fw-bold mb-3'>Título del producto</h1>                                    
                   <p>Descripción</p>  
                  <span class="d-flex flex-row">                
                    <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg> 
                    <p className='mb-1'>Duración de 00hs</p>
                  </span>
                  <span class="d-flex flex-row">
                    <img className='me-3' alt="" src="../img/herramienta-de-peso-con-mango.png" style={{width: "18px", height: "18px"}}/>
                    <p> 000 gramos</p>
                  </span>              
                  <Button variant="primary">Más información</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className='mt-5'>
              <div className='mb-5'>
                <h3 className='fw-bold mb-4'>Productos destacados</h3>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="holder.js/100px180" />
                  <Card.Body>
                    <Card.Title>Nombre producto</Card.Title>
                    <Card.Text>
                      Descripción producto
                    </Card.Text>
                    <Link to="/ItemDetailContainer">
                      <Button variant="primary">Más información</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>  
      </>
    );
  }

export default ItemDetailContainer