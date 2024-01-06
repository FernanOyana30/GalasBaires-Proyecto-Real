import React from 'react'
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CheckoutForm from '../../components/Cart/CheckoutForm';
import {createOrder} from '../../services/firestore'
import {useNavigate} from "react-router-dom"
import './style.css'

function FormMinorista() { 
  const navigateTo = useNavigate()

  /**/
  async function handleCheckout(userData){
    const orderData = {
    buyer: userData,
    timestamp: new Date() ,
    }

    const id = await createOrder(orderData) 
    
    navigateTo(`/checkout/${id}`)
}

/**/

  return (
    <>
      <Container>
        <Row>
          <Col xsm={1} sm={1} md={3} lg={6}>
            <div className='contenedorContacto'>
              <div>
                <h1 className="tituloEncabezado">¿Tenés alguna pregunta?</h1>
                <p>Si tenés alguna duda, querés más información acerca de algún producto o te gustaría solicitar el catálogo minorista, completá el formulario o contactanos por nuestras redes sociales o mail.
                </p>
                <p className='iconosContacto mb-0'><img alt='' src='./img/icon_mail_.png'  className='iconoFAQ me-3' />galasbaires@gmail.com</p>
                <p className='iconosContacto mb-0'><img alt='' src='./img/IconoFacebook.png' className='iconoFAQ me-3' />Galas Baires</p>
                <p className='iconosContacto mb-0'><img alt='' src='./img/ig.png' className='iconoFAQ me-3' />@galasbaires</p>
                <p className='iconosContacto mb-0'><img alt='' src='./img/llamada-telefonica.png' className='iconoFAQ me-3' />1157173773</p>
              </div>
            </div>
          </Col>
          <Col xsm={1} sm={1} md={3} lg={6} className='mb-5'>
            <div className='contenedorFormulario'>
              <CheckoutForm onSubmit={handleCheckout}/>            
            </div>
          </Col>
        </Row>        
      </Container>
    </>  
  );      
}

export default FormMinorista;