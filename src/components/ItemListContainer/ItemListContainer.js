import ItemList from "../ItemList/ItemList";
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Pagination from 'react-bootstrap/Pagination';

export default function ItemListContainer (){
    return (
      <>
        <Container>
          <Row>
            <Col sm={3}></Col>
            <Col sm={6}>
              <div className="text-center pb-5 pt-5"> 
                <h1 className="fw-bold">Nuestro catálogo</h1>
              </div>
              <div className="text-center pb-5">                    
                <h3 className="fw-bold">Descubrí tu fragancia</h3>
                <p>¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                <Button>Hacer cuestionario</Button>                
              </div>  
            </Col>    
            <Col sm={3}></Col>        
          </Row>
          <Row>
            <Col sm={2}>
              <div>
                <h5 class="fw-bold mb-4">Filtrar por</h5>
                <Form>
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Velas aromáticas`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Difusores`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Perfuminas`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
                      <Form.Check // prettier-ignore
                        type={type}
                        id={`default-${type}`}
                        label={`Refill`}
                      />                      
                    </div>
                  ))}
                  {['checkbox'].map((type) => (
                    <div key={`default-${type}`} className="mb-1">
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
              <div className="pb-4">
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
  
  

  