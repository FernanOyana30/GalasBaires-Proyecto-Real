import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function Nosotros() {
  return (
    <>    
      <Container>
        <Row>
          <Col sm={12}>
            <div>
              <h1>Sobre Galas</h1>
              <p>Acá va un párrafo</p>              
            </div>
          </Col>          
        </Row>
        <Row>
          <Col sm={6}>
            <Image src="holder.js/171x180" rounded />
          </Col> 
          <Col sm={6}>
            <div>
              <h3>Nuestra historia</h3>
              <p>Acá va un párrafo</p>              
            </div>
          </Col> 
        </Row>   
        <Row>
          <Col sm={12}>
            <h5>Nuestra misión</h5>
            <h5>Nuestra visión</h5>
            <h5>Nuestros valores</h5>
          </Col>  
        </Row> 
        <Row>
          <Col sm={12}>
            <h5>Amigable con el medio ambiente</h5>
            <p>Acá va un párrafo</p>            
          </Col>  
        </Row>   
        <Row>          
          <Col sm={6}>
            <div>
              <h3>Sobre nuestras fragancias</h3>
              <p>Acá va un párrafo</p>              
            </div>
          </Col> 
          <Col sm={6}>
            <Image src="holder.js/171x180" rounded />
          </Col> 
        </Row>   
        <Row>
          <Col sm={6}>
            <Image src="holder.js/171x180" rounded />
          </Col> 
          <Col sm={6}>
            <div>
              <h3>Sobre nuestros materiales</h3>
              <p>Acá va un párrafo</p>              
            </div>
          </Col> 
        </Row>  
        <Row>
          <Col sm={12}>
            <div>
              <h1>Perfumá tus ambientes con Galas Baires.</h1>
              <p>Contactanos y solicitá el catálogo actualizado para no perderte de ninguna novedad u oferta</p>              
              <button>¡Solicitá el catálogo!</button>
            </div>
          </Col>          
        </Row>
      </Container>   
              
    </>
  )
}

export default Nosotros;