import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ItemListContainer (){
    return (
      <>
        <Container>
          <Row>
            <Col sm={12}>
              <div> 
                <h1>Nuestro catálogo</h1>    
                <div>
                  <h3>Descubrí tu fragancia</h3>
                  <p>¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                  <button>Hacer cuestionario</button>
                </div> 
              </div>  
            </Col>            
          </Row>
          <Row>
            <Col sm={2}>
              <div>
                <h3>Filtrar por</h3>
                <ul>
                  <li>Velas aromáticas</li>
                  <li>Difusores</li>
                  <li>Perfuminas</li>
                  <li>Refill</li>
                  <li>Hornitos</li>
                </ul>
              </div>
            </Col>            
            <Col sm={10}>
              <div>
                {
                  <ItemList/>
                }
              </div>
            </Col>           
          </Row>          
        </Container>   
      </>  
    );
  }
  
  

  