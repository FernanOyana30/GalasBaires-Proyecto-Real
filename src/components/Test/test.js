import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './fragancias';
import './style.css'

function Test(){
    return (
        <>
            <Container>
                <Row>
                    <Col sm={1} lg={6}>
                        <div className='contenedorTest'>
                          <h1 style={{marginBottom:"60px", textAlign:"center", color:"#804B37", fontWeight:"bold"}}>Descubrí tu fragancia ideal</h1>
                          <div className='contenedorPregunta'>
                            <p style={{color:"#804B37", fontSize:"14px", marginBottom:"3px"}}>PRIMERA PREGUNTA</p>                                                        
                            <p style={{marginBottom:"35px"}}>¿En qué momento encenderías una vela aromática?</p>
                            <div className='contenedor-opciones'>
                              <button className="botonOpcion">A. En la mañana</button>
                              <button className="botonOpcion">B. En la tarde</button>
                              <button className="botonOpcion">C. En la noche</button>
                              <button className="botonOpcion">D. En la cena</button>
                              <button className="botonOpcion">E. Para relajarme</button>
                            </div>
                          </div>
                          <div className='contenedorPregunta'>
                            <p style={{color:"#804B37", fontSize:"14px", marginBottom:"3px"}}>SEGUNDA PREGUNTA</p>
                            <p style={{marginBottom:"35px"}}>¿En qué habitaciones usarías velas y/o difusores aromáticos?</p>  
                            <div className='contenedor-opciones'>
                              <button className="botonOpcion">A. Living</button>
                              <button className="botonOpcion">B. Cocina</button>
                              <button className="botonOpcion">C. Baño</button>
                              <button className="botonOpcion">D. Dormitorio</button>
                              <button className="botonOpcion">E. Otros espacios</button>                            
                            </div>
                          </div>
                          <div className='contenedorPregunta'>
                            <p style={{color:"#804B37", fontSize:"14px", marginBottom:"3px"}}>TERCERA PREGUNTA</p>
                            <p style={{marginBottom:"35px"}}>¿Qué nivel de aroma te gustaría?</p>   
                            <div className='contenedor-opciones'>
                              <button className="botonOpcion">A. Sutil</button>
                              <button className="botonOpcion">B. Normal</button>
                              <button className="botonOpcion">C. Alto</button>
                              <button className="botonOpcion">D. Intenso</button>                            
                            </div>     
                          </div>
                          <div className='contenedorPregunta'>
                            <p style={{color:"#804B37", fontSize:"14px", marginBottom:"3px"}}>CUARTA PREGUNTA</p>
                            <p style={{marginBottom:"35px"}}>¿Qué aromas te gustan?</p>               
                            <div className='contenedor-opciones'>
                              <button className="botonOpcion">A. Floral</button>
                              <button className="botonOpcion">B. Frutal</button>
                              <button className="botonOpcion">C. Cítrico</button>
                              <button className="botonOpcion">D. Relajante</button>
                              <button className="botonOpcion">E. Amaderado</button>                            
                            </div>    
                          </div>
                            <Button className='button-style mb-5'>Enviar</Button>
                        </div>
                    </Col>
                </Row>
            </Container>        
        </>
    )
}

export default Test