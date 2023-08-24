import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Fragancias from './fragancias.js';
import './style.css'
import {useState } from 'react'
import Swal from 'sweetalert2'

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
    //debugger
    /*if (resultado.length > 0){
      resultado.forEach((fragancia) => {
          Swal.fire({
            title: fragancia.nombre,
            text: '',
            imageUrl: 'https://unsplash.it/400/200',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })
          //alert(fragancia.nombre)
        }
      )
    } */
    //alert(resultado[0].nombre)
  }

  //console.log(descubrir)

  //console.log(Fragancias)

  return (
    <>
      <Container>
        <Row>
          <Col sm={1} lg={6}>
            <div className='contenedorTest'>
              <h1 style={{ marginBottom: "60px", textAlign: "center", color: "#804B37", fontWeight: "bold" }}>Descubrí tu fragancia ideal</h1>
              <div className='contenedorPregunta'>
                <p style={{ color: "#804B37", fontSize: "14px", marginBottom: "3px" }}>PRIMERA PREGUNTA</p>
                <p style={{ marginBottom: "35px" }}>¿En qué momento encenderías una vela aromática?</p>
                <div className='contenedor-opciones'>
                  {momentos.map((momento) => (
                    <button name="momento" className="text-capitalize botonOpcion" onClick={handleInput} value={momento.descripcion}>{momento.id}.{momento.descripcion}</button>

                  ))}

                </div>
              </div>
              <div className='contenedorPregunta'>
                <p style={{ color: "#804B37", fontSize: "14px", marginBottom: "3px" }}>SEGUNDA PREGUNTA</p>
                <p style={{ marginBottom: "35px" }}>¿En qué habitaciones usarías velas y/o difusores aromáticos?</p>
                <div className='contenedor-opciones'>
                  {habitacion.map((habitacion) => (
                    <button name="habitacion" className="text-capitalize botonOpcion" onClick={handleInput} value={habitacion.descripcion}>{habitacion.id}.{habitacion.descripcion}</button>

                  ))}

                </div>
              </div>
              <div className='contenedorPregunta'>
                <p style={{ color: "#804B37", fontSize: "14px", marginBottom: "3px" }}>TERCERA PREGUNTA</p>
                <p style={{ marginBottom: "35px" }}>¿Qué nivel de aroma te gustaría?</p>
                <div className='contenedor-opciones'>
                  {nivel.map((nivel) => (
                    <button name="nivel" className="text-capitalize botonOpcion" onClick={handleInput} value={nivel.descripcion}>{nivel.id}.{nivel.descripcion}</button>

                  ))}

                </div>
              </div>
              <div className='contenedorPregunta'>
                <p style={{ color: "#804B37", fontSize: "14px", marginBottom: "3px" }}>CUARTA PREGUNTA</p>
                <p style={{ marginBottom: "35px" }}>¿Qué aromas te gustan?</p>
                <div className='contenedor-opciones'>
                  {aroma.map((aroma) => (
                    <button name="aroma" className="text-capitalize botonOpcion" onClick={handleInput} value={aroma.descripcion}>{aroma.id}.{aroma.descripcion}</button>

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