import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import productos from '../../productos';
import './style.css'

//---------------------------------------------------------------------------

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

//---------------------------------------------------------------------------

function Destacados(){
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
          <h3 className="fw-bold ps-3 pb-3" style={{color:"#986F54"}}>Productos destacados</h3>
          {
              isLoading?
              <Loader/>
              :
              <ItemList productos={productos}/>
            }
        </div>
    )
}

export default Destacados