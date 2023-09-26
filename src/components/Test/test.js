import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fragancias from './fragancias.js';
import './style.css'
import {useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Preguntas from './dataPreguntas.js'

//Array de opciones
const momentos = [
  {
    id: 1,
    descripcion: "mañana",
  },
  {
    id: 2,
    descripcion: "tarde",
  },
  {
    id: 3,
    descripcion: "noche",
  },
  {
    id: 4,    
    descripcion: "relax",
  },
]

const habitacion = [
  {
    id: 1,
    descripcion: "living",
  },
  {
    id: 2,
    descripcion: "cocina",
  },
  {
    id: 3,
    descripcion: "baño",
  },
  {
    id: 4,
    descripcion: "dormitorio",
  },
  {
    id: 5,
    descripcion: "otros",
  },
]

const nivel = [
  {
    id: 1,
    descripcion: "sutil",
  },
  {
    id: 2,
    descripcion: "intermedio",
  },
  {
    id: 3,
    descripcion: "normal",
  },
  {
    id: 4,
    descripcion: "alto",
  },
  {
    id: 5,
    descripcion: "intenso",
  },
]

const aroma = [
  {
    id: 1,
    descripcion: "floral",
  },
  {
    id: 2,
    descripcion: "dulce",
  },
  {
    id: 3,
    descripcion: "cítrico",
  },
  {
    id: 4,
    descripcion: "relajante",
  },
  {
    id: 5,
    descripcion: "amaderado",
  },
]

//Componente test
function Test() { 
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
    } else {
      setPreguntaActual(preguntaActual + 1);
    };
  }

  function handlePreviousQuestion(event){
    if (preguntaActual === Preguntas.length + 1){
      setIsFinished(true)
    } else if (preguntaActual === 0){
      event.target.classList.add("disabled")
    }    
    else {
      setPreguntaActual(preguntaActual - 1);
    };
  }

  //Código original 
  const handleInput = (event) => {
    event.preventDefault()
    setDescubrir({
      ...descubrir,
      [event.target.name]: event.target.value      
    })
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
  }
  console.log(descubrir)
  //console.log(Fragancias)

  return (
    <>
      <Container>
        <Row>
          <Col sm={1} lg={6}>
            <div className='contenedorTest'>
              <h1 style={{ marginBottom: "20px", fontWeight: "bold" }}>Descubrí tu fragancia</h1>
              <p style={{ marginBottom: "60px", marginLeft: "100px", marginRight: "100px"}}>Respondiendo sólo 4 preguntas simples pero muy personales, podrás descubrir el aroma perfecto para tus ambientes</p>
              <div className='contenedorPregunta'>                
                <h5 style={{ marginBottom: "10px" }}>{Preguntas[preguntaActual].titulo}</h5>
                <p style={{ marginBottom: "35px" }}>Elegí una opción</p>
                <div className='contenedor-opciones'>
                  {Preguntas[preguntaActual].opciones.map((respuesta) => (
                    <button name={respuesta.nombrePregunta} key={respuesta.id} className="text-capitalize botonOpcion" value={respuesta.descripcion} onClick={handleInput}>{respuesta.descripcion}</button>
                  ))}
                </div>
                <button onClick={handlePreviousQuestion}>Anterior</button>
                <button onClick={handleNextQuestion}>Siguiente</button>
              </div>             

              
              <Button className='button-style mb-5' onClick={descubrirSubmit}>Enviar</Button>
              <div >
                {resultado.length > 0 && (                
                  <div className='contenedorPregunta'>
                    <h3>¡Felicitaciones!</h3>
                    <p>Tu fragancia perfecta es:</p>
                    {resultado.map((fragancia) => (
                      <Card style={{borderColor:"white"}}>
                        <Card.Body key={fragancia.id}>
                          <p>{fragancia.nombre}</p>
                        </Card.Body>
                      </Card>
                    ) )}
                  </div>
                )}
              </div> 
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Test