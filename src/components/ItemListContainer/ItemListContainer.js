import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

export default function ItemListContainer (){
    return (
      <>
        <Container>
          <Row>
            <Col sm={12}>
              <div> 
                <h1>Nuestro catálogo</h1>                    
                <h3>Descubrí tu fragancia</h3>
                <p>¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                <button>Hacer cuestionario</button>                
              </div>  
            </Col>            
          </Row>
          <Row>
            <Col sm={2}>
              <div>
                <h3>Filtrar por</h3>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Velas aromáticas`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Difusores`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Perfuminas`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Refill`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-3">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Hornitos`}
                      />                      
                    </div>
                  ))}
                </Form>
              </div>
            </Col>            
            <Col sm={10}>
              <div>
                {
                  <ItemList/>
                }
              </div>
              <Pagination> 
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
  
  

  