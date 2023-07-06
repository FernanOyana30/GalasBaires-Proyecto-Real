import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Fragancias() {
  return (
    <>    
      <Container>
        <Row>
          <Col sm={8}>
            <div>
              <h1>Sección Nosotros</h1>
              <Card body>Sobre las fragancias</Card>
            </div>
          </Col>
          <Col sm={4}></Col>
        </Row>        
      </Container>   
              
    </>
  )
}

export default Fragancias;