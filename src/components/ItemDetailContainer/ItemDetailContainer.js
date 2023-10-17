import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Loader from "../Loader/Loader"
import Destacados from '../ItemListContainer/destacados'
//import productos from '../../productos'
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import cartContext from "../../context/cartContext";

//--------------------------------------------

import { initializeApp } from "firebase/app";
import {getFirestore, collection, doc, getDoc} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCpHD-qtUpmMRAD-ki_GFQ8tbECyY4XeE",
  authDomain: "galas-baires.firebaseapp.com",
  projectId: "galas-baires",
  storageBucket: "galas-baires.appspot.com",
  messagingSenderId: "930077035982",
  appId: "1:930077035982:web:86e727538f7ab43c87ef9f"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getSingleItemFromDatabase(idProducto){
  const productsColectionRef = collection(db, "productos");
  const docRef = doc(productsColectionRef, idProducto);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists() === false) throw new Error("No existe el documento");

  return  {...docSnapshot.data(), id: docSnapshot.id};
}

//--------------------------------------------------------------
// function getSingleItemFromDatabase(idProducto){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let encontrado = productos.find((producto) => producto.id === Number(idProducto))
//       resolve(encontrado);
//     }, 1000);
//   }); 
// }

//---------------------------------------------------------------
function ItemDetailContainer(initial, onAddToForm) {

  const [loading, setLoading ] = useState(false)
  const [producto, setProducto] = useState({});

  const params = useParams()
  const idProducto = params.idProducto

  useEffect(() =>{
    setLoading(true)
    getSingleItemFromDatabase(idProducto).then(respuesta => {
      setProducto(respuesta)
      setLoading(false)
    })
  }, [idProducto]);

  //------------------------------------------------------
  const {addItem, isInCart } = useContext(cartContext)

  /**Funcion Agregar al carrito*/
  function onAddToForm(count){        
    addItem(producto, count);
  }  

  //------------------------------------------------------
  if (loading) 
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