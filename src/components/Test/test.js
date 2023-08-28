import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fragancias from './fragancias.js';
import './style.css'
import {useState } from 'react'

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
    descripcion: "cena",
  },
  {
    id: 5,
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
    descripcion: "frutal",
  },
  {
    id: 3,
    descripcion: "citrico",
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

//Funciones del test
function Test() { 
  const [descubrir, setDescubrir] = useState({
    momento: "",
    habitacion: "",
    nivel: "",
    aroma: "",
  })

  const handleInput = (event) => {
    setDescubrir({
      ...descubrir,
      [event.target.name]: event.target.value,

    });
  };

  const [resultado, setResultado] = useState([])  

  const descubrirSubmit = () =>{
    setResultado ( Fragancias.filter((fragancia) => fragancia.momento === descubrir.momento 
    && fragancia.aroma === descubrir.aroma 
    && fragancia.habitación === descubrir.habitacion 
    && fragancia.nivel === descubrir.nivel));
    console.log(resultado)    
  }
  //console.log(descubrir)
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
                <h5 style={{ marginBottom: "10px" }}>¿En qué momento encenderías una vela aromática?</h5>
                <p style={{ marginBottom: "35px" }}>Elegí una opción</p>
                <div className='contenedor-opciones'>
                  {momentos.map((momento) => (
                    <button name="momento" className="text-capitalize botonOpcion" onClick={handleInput} value={momento.descripcion}>{momento.descripcion}</button>
                  ))}
                </div>
              </div>
              <div className='contenedorPregunta'>                
                <h5 style={{ marginBottom: "10px" }}>¿En qué habitaciones usarías velas y/o difusores aromáticos?</h5>
                <p style={{ marginBottom: "35px" }}>Elegí una opción</p>
                <div className='contenedor-opciones'>
                  {habitacion.map((habitacion) => (
                    <button name="habitacion" className="text-capitalize botonOpcion" onClick={handleInput} value={habitacion.descripcion}>{habitacion.descripcion}</button>
                  ))}
                </div>
              </div>
              <div className='contenedorPregunta'>                
                <h5 style={{ marginBottom: "10px" }}>¿Qué nivel de aroma te gustaría?</h5>
                <p style={{ marginBottom: "35px" }}>Elegí una opción</p>
                <div className='contenedor-opciones'>
                  {nivel.map((nivel) => (
                    <button name="nivel" className="text-capitalize botonOpcion" onClick={handleInput} value={nivel.descripcion}>{nivel.descripcion}</button>
                  ))}
                </div>
              </div>
              <div className='contenedorPregunta'>                
                <h5 style={{ marginBottom: "10px" }}>¿Qué aromas te gustan?</h5>
                <p style={{ marginBottom: "35px" }}>Elegí una opción</p>
                <div className='contenedor-opciones'>
                  {aroma.map((aroma) => (
                    <button name="aroma" className="text-capitalize botonOpcion" onClick={handleInput} value={aroma.descripcion}>{aroma.descripcion}</button>
                  ))}
                </div>
              </div>
              <Button className='button-style mb-5' onClick={descubrirSubmit}>Enviar</Button>
              <div >
                {resultado.length > 0 && (                
                  <div className='contenedorPregunta'>
                    <h3>Tu fragancia es:</h3>
                    {resultado.map((fragancia) => (
                      <p key={fragancia.id}>{fragancia.nombre}</p>
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