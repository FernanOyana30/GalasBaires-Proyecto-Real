// import ItemList from "../ItemList/ItemList";
// import Loader from "../Loader/Loader"
// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom"
// import productos from '../../productos';
// import './style.css'

// //---------------------------------------------------------------------------

// function getItemsDestacadosFromDatabase(){
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       let productsDestacadosFiltered = productos.filter(
//         producto => producto.destacado === true
//       )
//       resolve(productsDestacadosFiltered);
//     }, 1000);
//   }); 
// }

// //---------------------------------------------------------------------------

// function Destacados(){
//     const [productos, setProductos ] = useState([]);
//     const [isLoading, setIsLoading] = useState(true)    
  
//     const params = useParams();
//     const prodDestacado = params.prodDestacado
  
//     async function leerDatos( ) {      
//         let respuesta = await getItemsDestacadosFromDatabase(prodDestacado)
//         setProductos(respuesta)
//         setIsLoading(false)            
//     }
  
//     useEffect( () => {
//       leerDatos()
//     }, [prodDestacado])   
    
//     return (
//         <div className="pt-1 contenedorDestacados">
//           <h3 className="fw-bold ps-3 pb-3" style={{color:"#986F54"}}>Productos destacados</h3>
//           {
//               isLoading?
//               <Loader/>
//               :
//               <ItemList productos={productos}/>
//             }
//         </div>
//     )
// }

// export default Destacados

import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader"
import { useState, useEffect } from "react";
import productos from '../../productos';
import './style.css'

//---------------------------------------------------------------------------
const shuffle = (arr) =>{
  const length = arr.length

  for (let i = 0; i < length; i++) {
    const rand_index = Math.floor(Math.random() * length)
    const rand = arr[rand_index]

    arr[rand_index] = arr[i]
    arr[i] = rand
  }
}

function getItemsDestacadosFromDatabase(){
  return new Promise((resolve) => {
    setTimeout(() => {
      shuffle(productos)
      let productsDestacadosFiltered = productos.slice(0, 4)
      resolve(productsDestacadosFiltered);
    }, 1000);
  }); 
}

//---------------------------------------------------------------------------

function Destacados(){
    const [productos, setProductos ] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    async function leerDatos( ) {      
        let respuesta = await getItemsDestacadosFromDatabase()
        setProductos(respuesta)
        setIsLoading(false)            
    }

    useEffect( () => {
      leerDatos()
    }, [])   
    
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