import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from "../Loader/Loader"
import Destacados from '../ItemListContainer/destacados'
import productos from '../../productos'
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react';


//--------------------------------------------------------------
function getSingleItemFromDatabase(idProducto){
  return new Promise((resolve) => {
    setTimeout(() => {
      let encontrado = productos.find((producto) => producto.id === Number(idProducto))
      resolve(encontrado);
    }, 1000);
  }); 
}
//---------------------------------------------------------------

function ItemDetailContainer() {
  const [producto, setProducto] = useState({});

  const params = useParams()
  const idProducto = params.idProducto

  useEffect(() =>{
    getSingleItemFromDatabase(idProducto).then(respuesta => {
      setProducto(respuesta)
    })
  }, []);

  if (producto.nombre === undefined) 
  return <Loader/> 

    return (
      <>
        <Container>
          <Row>
            <Col sm={6} className='mt-5'>
              <Image src="holder.js/100px250" fluid/>                
            </Col>
            <Col sm={6} className='mt-5'>
              <div>
              <Card>
                <Card.Body key={producto.id}>
                  <p className='mb-0'>{producto.categoria}</p>
                  <h1 className='fw-bold mb-3'>{producto.nombre}</h1>                                    
                   <p>{producto.descripcion}</p>  
                  <span class="d-flex flex-row">                
                    <svg className='me-3' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock-fill" viewBox="0 0 16 16">
                      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                    </svg> 
                    <p className='mb-1 ps-3'>Duración de {producto.duracion}hs</p>
                  </span>
                  <span class="d-flex flex-row">
                    <img className='me-3' alt="" src="../img/herramienta-de-peso-con-mango.png" style={{width: "18px", height: "18px"}}/>
                    <p>{producto.gramos} gramos</p>
                  </span>              
                  <Button variant="primary">Más información</Button>
                </Card.Body>
              </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} className='mt-5'>
              {<Destacados/>}
            </Col>
          </Row>
        </Container>  
      </>
    );
  }

export default ItemDetailContainer