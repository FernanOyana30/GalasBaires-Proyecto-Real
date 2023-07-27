import ItemList from "../ItemList/ItemList";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import productos from '../../productos';
import Loader from "../Loader/Loader"

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
        <Container>     
          <Row>            
            <Col sm={1} lg={12}>
              <div className="">
                <div className="text-center pb-5 pt-5"> 
                  <h1 className="encabezadoCatalogo fw-bold" style={{color:"#2D2D2D"}}>Nuestro catálogo</h1>
                </div>
                <div className="text-center p-4 mb-5 container-fluid" style={{backgroundColor: "#E6E6E6"}}>                    
                  <h3 className="fw-bold" style={{color:"#2D2D2D"}}>Descubrí tu fragancia</h3>
                  <p className="pb-3" style={{marginLeft: "250px", marginRight: "250px"}} >¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                  <Button>Hacer cuestionario</Button>                
                </div>
              </div>                
            </Col>                     
          </Row>        
          <Row>
            <Col sm={1} lg={2}>
              <div>
                <h5 class="fw-bold mb-4" style={{color:"#2D2D2D"}}>Filtrar por</h5>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
                      <Link to='/productos'> 
                        <Form.Check 
                          type={type}
                          id={`default-${type}`}   
                          label={`Todos`}                     
                        />                        
                      </Link>            
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
                      <Link to='/category/Velas'> 
                        <Form.Check 
                          type={type}
                          id={`default-${type}`}   
                          label={`Velas`}                     
                        />                        
                      </Link>            
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
                      <Link to='/category/Difusores'> 
                        <Form.Check 
                          type={type}
                          id={`default-${type}`}  
                          label={`Difusores `}                      
                        />
                      </Link>  
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
                      <Link to='/category/Perfuminas'> 
                        <Form.Check 
                          type={type}
                          id={`default-${type}`}   
                          label={`Perfuminas `}                      
                        />
                      </Link>       
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight">
                      <Link to='/category/Refill'> 
                        <Form.Check 
                          type={type}
                          id={`default-${type}`}  
                          label={`Refill`}                       
                        />
                      </Link>        
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1 d-flex flex-row bd-highlight ">
                      <Link to='/category/Hornitos'> 
                        <Form.Check 
                          type={type}
                          id={`default-${type}`} 
                          label={`Hornitos`}                        
                        />
                      </Link>      
                    </div>
                  ))}
                </Form>
              </div>
            </Col>            
            <Col sm={1} lg={10}>
              <div className="filaProductos">
                {
                  isLoading?
                  <Loader/>
                  :
                  <ItemList productos={productos}/>
                }
              </div>
              <Pagination > 
                <Pagination.Item active>{1}</Pagination.Item>
                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                <Pagination.Item>{4}</Pagination.Item>
                <Pagination.Item>{5}</Pagination.Item>
              </Pagination>              
            </Col>           
          </Row>          
        </Container>   
      </>  
    );
  }
  
  

  