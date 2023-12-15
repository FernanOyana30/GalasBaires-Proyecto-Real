import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fragancias from './fragancias.js';
import './style.css'
import {useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Preguntas from './dataPreguntas.js'
import Modal from 'react-bootstrap/Modal';
import Loader from "../Loader/Loader.js"
import { Link } from 'react-router-dom';

function Test() { 
  const [isLoading, setIsLoading ] = useState(true)

  useEffect(()=>{
    setIsLoading(false)
  })

  //modal
  function recargarPag(){
    window.location.reload()
  }

  const [show, setShow] = useState(false);
  //const handleClose = () => setShow(false); 
  function handleClose(){
    setShow(false)
    recargarPag()
  }  

  const [preguntaActual, setPreguntaActual] = useState(0)
  const [isFinished, setIsFinished] = useState(false)

  const [descubrir, setDescubrir] = useState({
    momento: "",
    habitacion: "",
    nivel: "",
    aroma: "",
  })

  //funciones de paginado del test
  function handleNextQuestion(){
      if (preguntaActual === Preguntas.length - 1){
        setIsFinished(true)
      } 
      else {
        setPreguntaActual(preguntaActual + 1);
      };      
    }
    
  // 
  const handleInput = (event) => {
    event.preventDefault()
    setDescubrir({
      ...descubrir,
      [event.target.name]: event.target.value      
    })
    handleNextQuestion()
  };  
  
  const [resultado, setResultado] = useState([])  

  const descubrirSubmit = () =>{
    setResultado ( Fragancias.filter((fragancia) => (
    fragancia.momento === descubrir.momento 
    && fragancia.habitación === descubrir.habitacion 
    && fragancia.nivel === descubrir.nivel
    && fragancia.aroma === descubrir.aroma)
    || (fragancia.momento !== descubrir.momento
      && fragancia.habitación !== descubrir.habitacion
      && fragancia.nivel === descubrir.nivel
      && fragancia.aroma === descubrir.aroma)
      || (fragancia.momento !== descubrir.momento
        && fragancia.habitación === descubrir.habitacion
        && fragancia.nivel === descubrir.nivel
        && fragancia.aroma === descubrir.aroma)
        || (
           fragancia.momento === descubrir.momento
          && fragancia.habitación !== descubrir.habitacion          
          && fragancia.nivel === descubrir.nivel
          && fragancia.aroma === descubrir.aroma)
           ));
           
    //console.log(resultado)    
    setShow(true)    
  }
  console.log(descubrir)
  //console.log(Fragancias)

  //----------------------------------------------------------------  

  return (
    <div>
        {
          isLoading?
          <Loader/>
          : 
          <>
          <Container>
            <Row>
              <Col xsm={1} sm={1} lg={6}>
                <div className='contenedorTest'>
                  <h1 style={{ marginBottom: "20px", fontWeight: "bold" }}>Descubrí tu fragancia</h1>
                  <p className='estiloParrafo'>Respondiendo sólo 4 preguntas simples pero muy personales, podrás descubrir el aroma perfecto para tus ambientes</p>
                  <div className='contenedorPregunta'>                
                    <h5 style={{ marginBottom: "10px" }}>{Preguntas[preguntaActual].titulo}</h5>
                    <p style={{ marginBottom: "35px" }}>Elegí una opción</p>
                    <div className='contenedor-opciones'>
                      {Preguntas[preguntaActual].opciones.map((respuesta) => (
                        <button name={respuesta.nombrePregunta} key={respuesta.id} className="text-capitalize botonOpcion" value={respuesta.descripcion} onClick={handleInput}>{respuesta.descripcion}</button>
                      ))}
                    </div>
                    {
                      preguntaActual === 3 && descubrir.aroma !== '' ?  <>                  
                    <button className='botonPaginado' onClick={descubrirSubmit}>Enviar</button></>                
                    :
                    ""
                     }
                  </div>                          
                   
                  <Modal show={show} onHide={handleClose}>                
                    <Modal.Body>
                        <div >
                          {resultado.length > 0 && (                
                            <div style={{textAlign: "center"}}>
                              <h3>¡Felicitaciones!</h3>
                              <p>Tu fragancia perfecta es:</p>
                              {resultado.map((fragancia) => (
                                <Card style={{borderColor:"white"}}>
                                  <Card.Img className='w-25 imagen-modal' variant="top" src={fragancia.imagen} />
                                  <Card.Body key={fragancia.id}>                                    
                                    <p className='mb-0 fw-bold'>{fragancia.nombre}</p>
                                    <p className='mb-0'>{fragancia.descripcion}</p>
                                  </Card.Body>
                                </Card>
                              ) )}
                            </div>
                          )}
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" className='botonOpcion' onClick={handleClose}>
                        Cerrar
                      </Button>         
                      <Link to="/productos">
                        <Button variant="primary" className='botonOpcion'>Ver productos</Button> 
                      </Link>        
                    </Modal.Footer>
                  </Modal>              
                </div>
              </Col>
            </Row>
          </Container>
        </>
        }
    </div>
    
  );
}

export default Test