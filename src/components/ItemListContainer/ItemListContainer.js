import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from '../Filter/Filter';
import Pagination from './Pagination';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import './style.css';
import Card from 'react-bootstrap/Card';

//--------------------------------------------
import {collection, getDocs, query, where} from "firebase/firestore";
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

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

async function getItemsFromDatabase(){
  const productsColectionRef = collection(db, "productos")
  let snapshotProductos = await getDocs(productsColectionRef)
  const documents = snapshotProductos.docs

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

async function getItemsByCategoryFromDatabase(categoryURL){
  const productsColectionRef = collection(db, "productos")

  const q = query(productsColectionRef, where("categoria", "==", categoryURL));
  let snapshotProductos = await getDocs(q)
  const documents = snapshotProductos.docs

  const dataProducts = documents.map((doc) => ({ ...doc.data(), id: doc.id }));
  return dataProducts;
}

//--------------------------------------------
export default function ItemListContainer (){
  const [productos, setProductos ] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  const params = useParams();
  const idCategory = params.idCategory

  async function leerDatos( ) {
    setIsLoading(true)
    setCurrentPage(1)
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

  //pagination
  const totalProducts = productos.length 
  const [productsPerPage] = useState(8)
  const [currentPage, setCurrentPage] = useState(1)

  const lastIndex =  currentPage * productsPerPage 
  const firstIndex = lastIndex - productsPerPage

    return (
      <>
        <Container className="container-style">     
          <Row >            
            <Col xsm={1} sm={1} md={12} lg={12}>              
              <div className="container-encabezado text-center pb-5 pt-5 mt-5"> 
                <h1 className="encabezadoCatalogo fw-bold" style={{color:"#2D2D2D"}}>Nuestro catálogo</h1>
              </div>              
            </Col>
          </Row>
          <Row> 
            <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor: "#DED5C2"}}>
              <div className="testBanner text-center p-4 container-fluid" >                    
                <h3 className="fw-bold" style={{color:"#804B37"}}>Descubrí tu fragancia</h3>
                <p className="textoBannerFragancias pb-3 ps-5 pe-5">¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                <Link to='/Test'>
                  <Button variant="light" className="button-style">Hacer cuestionario</Button>                
                </Link>
              </div>                             
            </Col>                     
          </Row>        
          <Row className="ps-5">
            <Col xsm={1} sm={1} md={2} lg={2}>
              <div className="filterStyle2 pt-5">
                <h5 className='titleFilter'>Filtrar por</h5>
                {<Filter/>}              
              </div>
            </Col>            
            <Col xsm={1} sm={1} md={6} lg={10}>
              <div className="filaProductos pt-5">
                {
                  isLoading?
                  <Loader/>
                  : 
                  <>
                    <div className="pb-4 d-flex justify-content-start bd-highlight mb-3 flex-wrap">
                      {productos.map((producto) => (
                        <Card style={{ width: '15rem', borderColor:"white" }} key={producto.id} className="mb-3 pb-0 ms-3">
                          <Card.Img variant="top" src={producto.imagen} />
                          <Card.Body>
                            <Card.Title >{producto.nombre}</Card.Title>
                            <Card.Text >
                            {producto.descripcionCard}
                            </Card.Text>            
                            <Link to={`/detalle/${producto.id}`}>
                              <Button variant="light" className="button-style">Más información</Button>
                            </Link>
                          </Card.Body>
                        </Card>
                      )).slice(firstIndex, lastIndex)}                         
                    </div> 
                    <div>
                      <Pagination 
                      productsPerPage={productsPerPage} 
                      currentPage={currentPage} 
                      setCurrentPage={setCurrentPage} 
                      totalProducts={totalProducts} 
                      />  
                    </div>
                  </>
                }
              </div>    
            </Col>           
          </Row>          
        </Container>   
      </>  
    );
  }
  
  

  