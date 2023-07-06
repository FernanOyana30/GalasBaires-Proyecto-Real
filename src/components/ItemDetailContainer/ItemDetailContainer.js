import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

function ItemDetailContainer({ greeting }) {
    return (
      <>
        <Container>
          <Row>
            <Col sm={6}>
              <Image src="holder.js/100px250" fluid />                
            </Col>
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <p>Categoría</p>
                  <h1>Título del producto</h1>                                    
                  <p>Descripción</p>
                  <p>Duración de 00hs</p>
                  <p>000 gramos</p>
                  <Button variant="primary">Más información</Button>
                </Card.Body>
              </Card>
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