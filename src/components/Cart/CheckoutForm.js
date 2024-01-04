import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function CheckoutForm(props) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comment: ""    
  });

  console.log(userData);

  function handleChange(evt) {
    const value = evt.target.value;
    const input = evt.target.name;

    const newUserData = { ...userData };
    newUserData[input] = value;
    setUserData(newUserData);
  }  

  function clearForm() {
    setUserData({
      firstName: "",
      lastName: "",
      email: "",
      comment: "",            
    });
  }

  function submitData(){
    props.onSubmit(userData)
    clearForm()
  }

  return (
    <div className='mt-5'>
      <Form >
        <Row >
          <Col >
            <Form.Label>Nombre*</Form.Label>
            <Form.Control placeholder="Ingresá tu nombre" className='w-100' value={userData.firstName}
               name="firstName"
               type="text"
               required
               onChange={handleChange}/>
          </Col>
          <Col>
            <Form.Label>Apellido*</Form.Label>
            <Form.Control placeholder="Ingresá tu apellido" className='w-100' value={userData.lastName}
               name="lastName"
               type="text"
               required
               onChange={handleChange}/>
          </Col>
        </Row>
        <br></br>
        <Form.Group className="mb-3 w-100" controlId="formBasicEmail">
          <Form.Label>Correo electrónico*</Form.Label>
          <Form.Control placeholder="Ingresá tu email" value={userData.email}
           name="email"
           type="email"
           required
           onChange={handleChange} />            
        </Form.Group>  
        <Form.Group className="mb-3 w-100" controlId="exampleForm.ControlTextarea1">  
          <Form.Label>Consulta*</Form.Label>
          <Form.Control className='w-100' as="textarea" rows={4} value={userData.comment}
               name="comment"
               type="text"
               required
               onChange={handleChange} />
        </Form.Group>            
        <Button variant="primary" disabled={
          !(
            userData.firstName !== "" &&
            userData.lastName !== "" &&            
            userData.email !== "" &&
            userData.comment !== ""
          )
        }
        onClick={submitData}>
          ¡Enviar!
        </Button>
      </Form>
    </div>    
  );
}