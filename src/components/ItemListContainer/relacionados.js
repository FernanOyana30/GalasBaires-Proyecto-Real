//import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import productos from '../../productos';
import './style.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function getItemsDestacadosFromDatabase(){
  return new Promise((resolve) => {
    setTimeout(() => {
      let productsDestacadosFiltered = productos.filter(
        producto => producto.destacado === true
      )
      resolve(productsDestacadosFiltered);
    }, 1000);
  }); 
}

function Relacionados(){
    const [productos, setProductos ] = useState([]);
    const [isLoading, setIsLoading] = useState(true)    
  
    const params = useParams();
    const prodDestacado = params.prodDestacado
  
    async function leerDatos( ) {      
        let respuesta = await getItemsDestacadosFromDatabase(prodDestacado)
        setProductos(respuesta)
        setIsLoading(false)            
    }
  
    useEffect( () => {
      leerDatos()
    }, [prodDestacado])   
    
    return (
        <div className="pt-1 contenedorDestacados">
          <h3 className="fw-bold ps-3 pb-3" style={{color:"#986F54"}}>Productos relacionados</h3>
          {
              isLoading?
              <Loader/>
              :
              <div className="pb-4 d-flex justify-content-start bd-highlight mb-3 flex-wrap">
                {productos.map((producto) => {
                  if (producto.categoria === producto.categoria)
                  return(  
                  <Card style={{ width: '15rem', borderColor:"white" }} key={producto.id} className="mb-3 pb-0 ms-3">
                    <Card.Img variant="top" src={producto.imagen} />
                    <Card.Body>
                      <Card.Title >{producto.nombre}</Card.Title>
                      <Card.Text>
                      {producto.descripcionCard}
                      </Card.Text>     
                      <Link to={`/detalle/${producto.id}`}>
                        <Button variant="light" className="button-style">Más información</Button>
                      </Link> 
                    </Card.Body>
                  </Card>)
                })}
              </div> 
            }
        </div>
    )
}

export default Relacionados