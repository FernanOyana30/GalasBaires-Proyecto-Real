import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function FormMayorista() {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <div>
            <Form>
              <Row>
                <Col>
                  <Form.Label>Nombre*</Form.Label>
                  <Form.Control placeholder="Ingresá tu nombre" />
                </Col>
                <Col>
                  <Form.Label>Apellido*</Form.Label>
                  <Form.Control placeholder="Ingresá tu apellido" />
                </Col>
              </Row>
              <br></br>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo electrónico*</Form.Label>
                <Form.Control type="email" placeholder="Ingresá tu email" />            
              </Form.Group>  
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>¿Te interesa alguna fragancia?</Form.Label>
                <Form.Control as="textarea" placeholder="Ingresá el nombre de la fragancia" /> 
                <Form.Label>Consulta*</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>            
              <Button variant="primary" type="submit">
                ¡Enviar!
              </Button>
            </Form>
          </div>
        </Col>
        <Col sm={6}></Col>
      </Row>      
    </Container>
  );
}

export default FormMayorista;