import ItemList from "../ItemList/ItemList";
import Loader from "../Loader/Loader"
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
//import productos from '../../productos';
import './style.css'

//---------------------------------------------------------------------------
import {getFirestore, collection, getDocs, query, where} from "firebase/firestore";
import { initializeApp } from "firebase/app";

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

async function getItemsDestacadosFromDatabase(producto){
  const productsColectionRef = collection(db, "productos")

  const q = query(productsColectionRef, where("destacado", "==", true));
  let snapshotProductos = await getDocs(q)
  const documents = snapshotProductos.docs

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

//---------------------------------------------------------------------------

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