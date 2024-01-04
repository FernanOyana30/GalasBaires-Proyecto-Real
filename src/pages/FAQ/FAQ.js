import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css'

function FAQ() {
  return (
    <>
      <Container>
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12}>
            <div className='contenedorEncabezado mt-5'>
              <h1 className='tituloEncabezado'>¿En qué podemos ayudarte?</h1>
              <p className='parrafoEncabezado'>Acá encontrarás las preguntas más frecuentes. Si tu duda no está resuelta, contactanos. Estaremos encantados de ayudarte.</p>
            </div>
          </Col>          
        </Row>
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12}>
            <div className='contenedorContacto '>
              <div className='contenedorIconoMail'>
                <img alt='' src='./img/icon_mail_.png' className='iconoFAQ'/>
                <p>galasbaires@gmail.com</p>
              </div>
              <div className='contenedorIconoFacebook'>
                <img alt='' src='./img/IconoFacebook.png' className='iconoFAQ'/>
                <p>galasbaires</p>
              </div>
              <div className='contenedorIcono'>
                <img alt='' src='./img/ig.png' className='iconoFAQ'/>
                <p>@galasbaires</p>
              </div>
              <div className='contenedorIcono'>
                <img alt='' src='./img/Vector.png' className='iconoFAQ'/>
                <p>San Miguel, Buenos Aires</p>
              </div>
              <div className='contenedorIcono'>
                <img alt='' src='./img/llamada-telefonica.png' className='iconoFAQ'/>
                <p>11 12345678</p>
              </div>              
            </div>
          </Col>          
        </Row>
        <Row>          
          <Col xsm={1} sm={1} md={12} lg={12}>            
            <Accordion className='acordeonStyle'>
              <Accordion.Item eventKey="0" className='acordeonItem'>
                <Accordion.Header>¿Dónde está mi pedido?</Accordion.Header>
                <Accordion.Body>
                  Galas Baires te enviará un número de seguimiento del envío, que proporciona el correo, 
                  para chequear el tracking de tu pedido.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className='acordeonItem'>
                <Accordion.Header>¿Cómo puedo cuidar mi vela?</Accordion.Header>
                <Accordion.Body>
                  En el primer encendido de tu Galas Baires no debes apagarla hasta que la cera derretida haya 
                  alcanzado los bordes del envase.
                  Recortar la flor que se formó en el pabilo del quemado anterior antes de volver a encenderla.
                  Si se ensució la superficie de polvo podés limpiarlo con un algodón embebido con alcohol. 
                  Recordá que tu vela tiene memoria y un mal uso hará que pierda su magia creando un túnel 
                  en el centro.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className='acordeonItem'>
                <Accordion.Header>Si no sé qué comprar, ¿qué se recomienda?</Accordion.Header>
                <Accordion.Body>
                  Escribirnos o realizar el test de posibles elecciones según tus gustos y preferencias. 
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className='acordeonItem'>
                <Accordion.Header>Puntos de retiro</Accordion.Header>
                <Accordion.Body>
                  San Miguel, GBA.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4" className='acordeonItem'>
                <Accordion.Header>Políticas de envío</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Nuestros envíos a CABA y GBA son realizados por OCA, E-PICK, UBER ENVÍOS. Como también se pueden
                    coordinar envíos con comisionista de confianza. 
                  </p> 
                  <p>Los envíos fuera del área metropolitana se realizarán por VÍA CARGO, CORREO ARGENTINO.</p>
                  <p>Galas Baires no se responsabiliza si dichos correos entregan los pedidos fuera del plazo acordado. 
                  Únicamente se garantiza que los envíos serán despachados dentro del plazo acordado con el cliente luego de 
                  acreditado el pago de los productos.</p>
                  <p>Los pagos se acreditan de inmediato, aunque si fuese un día viernes, sábado, domingo o días feriados, 
                  los mismos ingresarán al siguiente día hábil.</p>
                </Accordion.Body>
              </Accordion.Item>              
            </Accordion>
          </Col>          
        </Row>        
      </Container>          
    </>            
  );
}

export default FAQ;