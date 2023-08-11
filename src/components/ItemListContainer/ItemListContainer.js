import ItemList from "../ItemList/ItemList";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Checkbox from '../Checkbox/Checkbox';
//import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import productos from '../../productos';
import Loader from "../Loader/Loader"
import './style.css'


//--------------------------------------------

function getItemsFromDatabase(){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productos);
    }, 1000);
  }); 
}

function getItemsByCategoryFromDatabase(categoryURL){
  return new Promise((resolve) => {
    setTimeout(() => {
      let productsFiltered = productos.filter(
        producto => producto.categoria === categoryURL
      )
      resolve(productsFiltered);
    }, 1000);
  }); 
}

//-----------------------------------


export default function ItemListContainer (){
  const [productos, setProductos ] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams();
  const idCategory = params.idCategory

  async function leerDatos( ) {
    if (idCategory === undefined) {
     let respuesta = await getItemsFromDatabase();
      setProductos(respuesta);
      setIsLoading(false)  
    } else {
      let respuesta = await getItemsByCategoryFromDatabase(idCategory)
      setProductos(respuesta)
      setIsLoading(false)
    }    
  }

  useEffect( () => {
    leerDatos()
  }, [idCategory]) 

    return (
      <>
        <Container className="container-style">     
          <Row >            
            <Col sm={1} lg={12}>              
              <div className="text-center pb-5 pt-5"> 
                <h1 className="encabezadoCatalogo fw-bold" style={{color:"#2D2D2D"}}>Nuestro catálogo</h1>
              </div>              
            </Col>
          </Row>
          <Row> 
            <Col sm={1} lg={12} style={{backgroundColor: "#DED5C2"}}>
              <div className="text-center p-4 container-fluid" >                    
                <h3 className="fw-bold" style={{color:"#804B37"}}>Descubrí tu fragancia</h3>
                <p className="textFragancias pb-3 ps-5 pe-5">¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                <Link to='/Test'>
                  <Button variant="light" className="button-style">Hacer cuestionario</Button>                
                </Link>
              </div>                             
            </Col>                     
          </Row>        
          <Row className="ps-5">
            <Col sm={1} lg={2}>
              <div className="pt-5">
                <h5>Filtrar por</h5>
                {<Checkbox/>}              
              </div>
            </Col>            
            <Col sm={1} lg={10}>
              <div className="filaProductos pt-5">
                {
                  isLoading?
                  <Loader/>
                  :
                  <ItemList productos={productos}/>
                }
              </div> 
              <div>         
              </div>    
            </Col>           
          </Row>          
        </Container>   
      </>  
    );
  }
  
  

  