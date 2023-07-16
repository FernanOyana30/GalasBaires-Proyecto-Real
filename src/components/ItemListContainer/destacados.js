import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import productos from '../../productos';

/*
function getItemsFromDatabase(){
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productos);
      }, 1000);
    }); 
  }*/

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
        <div className="pb-5">
          <h3 className="fw-bold pb-4">Productos destacados</h3>
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