import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {useContext} from "react";
import cartContext from "../../context/cartContext";

function FormMinorista() {

  const {cart, removeItemFromCart, getPriceInCart, clearCart} = useContext(cartContext)

  if(cart.length === 0)
  
  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <h1>¿Tenés alguna pregunta?</h1>
              <p>Acá va un párrafo</p>      
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                @galasbaires
              </span> 
              <br></br>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                galasbaires@gmail.com
              </span>              
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control placeholder="Ingresá tu nombre" className='w-100'/>
                  </Col>
                  <Col>
                    <Form.Label>Apellido*</Form.Label>
                    <Form.Control placeholder="Ingresá tu apellido" className='w-100'/>
                  </Col>
                </Row>
                <br></br>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico*</Form.Label>
                  <Form.Control type="email" placeholder="Ingresá tu email" />            
                </Form.Group>  
                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">  
                  <Form.Label>Consulta*</Form.Label>
                  <Form.Control className='w-100' as="textarea" rows={4}></Form.Control>
                </Form.Group>            
                <Button variant="primary" type="submit">
                  ¡Enviar!
                </Button>
              </Form>
            </div>
          </Col>
        </Row>        
      </Container>
    </>  
  );   

  return (
    <>
      <Container>
        <Row>
          <Col sm={6}>
            <div>
              <h1>¿Tenés alguna pregunta?</h1>
              <p>Acá va un párrafo</p>      
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
                @galasbaires
              </span> 
              <br></br>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                </svg>
                galasbaires@gmail.com
              </span>              
            </div>
          </Col>
          <Col sm={6}>
            <div>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control placeholder="Ingresá tu nombre" className='w-100'/>
                  </Col>
                  <Col>
                    <Form.Label>Apellido*</Form.Label>
                    <Form.Control placeholder="Ingresá tu apellido" className='w-100'/>
                  </Col>
                </Row>
                <br></br>
                <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
                  <Form.Label>Correo electrónico*</Form.Label>
                  <Form.Control type="email" placeholder="Ingresá tu email" />            
                </Form.Group>  
                <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">  
                  <Form.Label>Consulta*</Form.Label>                                             
                  {cart.map((item) => {
                    return (
                      <div style={{backgroundColor: "lightGray", padding: "15px"}}>
                        <p key={item.id} style={{marginRight:'60px'}}>¡Hola! Me gustaría recibir más información sobre el producto {item.nombre}, por favor. ¡Muchas gracias!</p>
                      </div>
                        );
                    })} 
                </Form.Group>            
                <Button variant="primary" type="submit">
                  ¡Enviar!
                </Button>
              </Form>
            </div>
          </Col>
        </Row>        
      </Container>
    </>  
  );   
 
}

export default FormMinorista;