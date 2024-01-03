import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {useContext} from "react";
import cartContext from "../../context/cartContext";
import FormTitle from "./FormTitle";

function FormMinorista() {
  const {cart} = useContext(cartContext);

  const [msg, setMsg] = useState("aqui va el mensaje");

  const nombreProducto = cart[0].nombre
  console.log(cart[0].nombre);

  const createMsg = () => {
    if (cart.length !== 0) {
      setMsg(`¡Hola! Me gustaría recibir más información sobre el producto ${nombreProducto}, por favor. ¡Muchas gracias!`)
    }
    else {
      return msg
    }
  }
  
  return (
      <Container className="mt-5">
        <Row>
          <Col sm={6}>
            <FormTitle />
          </Col>
          <Col sm={6}>
              <Form>
                <Row>
                  <Col>
                    <Form.Label>Nombre*</Form.Label>
                    <Form.Control
                      placeholder="Ingresá tu nombre"
                      className="w-100"
                    />
                  </Col>
                  <Col>
                    <Form.Label>Apellido*</Form.Label>
                    <Form.Control
                      placeholder="Ingresá tu apellido"
                      className="w-100"
                    />
                  </Col>
                </Row>
                <Form.Group className="mb-3 w-100">
                  <Form.Label>Correo electrónico*</Form.Label>
                  <Form.Control type="email" placeholder="Ingresá tu email" />
                </Form.Group>
                <Form.Group className="mb-3 w-100">
                  <Form.Label>Consulta*</Form.Label>
                  <Form.Control id="mensaje" as='textarea' value={createMsg} ></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                  ¡Enviar!
                </Button>
              </Form>
          </Col>
        </Row>
      </Container>
  );
}

export default FormMinorista;
