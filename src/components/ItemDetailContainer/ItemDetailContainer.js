import Button from 'react-bootstrap/Button'
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
import { Link } from 'react-router-dom';

import { useContext } from "react";
import cartContext from "../../context/cartContext";

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

function ItemDetailContainer(initial, onAddToForm) {
  const [producto, setProducto] = useState({});

  const params = useParams()
  const idProducto = params.idProducto

  useEffect(() =>{
    getSingleItemFromDatabase(idProducto).then(respuesta => {
      setProducto(respuesta)
    })
  }, []);

  //------------------------------------------------------
  const {addItem, isInCart } = useContext(cartContext)

  /**Funcion Agregar al carrito*/
  function onAddToForm(count){    
    alert('hola')
    addItem(producto, count);
  } 


  

  //------------------------------------------------------
  if (producto.nombre === undefined) 
  return <Loader/>  

    return (
      <>
        <Container>
          <Row>
            <Col lg={6} className='mt-5'>
              <Image src={producto.imagen} fluid/>                
            </Col>
            <Col lg={6} className='mt-5'>
              <div>
              <Card style={{borderColor:"white"}}>
                <Card.Body key={producto.id}>
                  <p className='mb-0'>{producto.categoria}</p>
                  <h1 className='nombreProducto fw-bold mb-3' style={{color:"#2D2D2D"}}>{producto.nombre}</h1>                                    
                   <p>{producto.descripcion}</p>  
                  <span class="d-flex flex-row">
                    <img className='me-3' alt="" src="../img/medidas.svg" style={{width: "22px", height: "22px"}}/>
                    <p className='mb-1 ps-0'>Medidas: {producto.medida}</p>  
                  </span>
                  <span class="d-flex flex-row">                
                    <img className='me-3' alt="" src="../img/icon _clock outline.svg" style={{width: "18px", height: "18px"}}/>
                    <p className='mb-1 ps-0'>Duración de {producto.duracion}</p>
                  </span>
                  <span class="d-flex flex-row">
                    <img className='me-3' alt="" src="../img/icon _Hanging Weight.svg" style={{width: "18px", height: "18px"}}/>
                    <p>{producto.cantidad}</p>
                  </span>    
                  <Link to='/formMinorista'>
                    <Button onClick={onAddToForm} variant="light" className="button-style">Más información</Button>                    
                  </Link>          
                </Card.Body>
              </Card>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} className='mt-5'>
              {<Destacados/>}
            </Col>
          </Row>
        </Container>  
      </>
    );
  }

export default ItemDetailContainer