import './style.css'
import Destacados from '../../components/ItemListContainer/destacados'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';

function Inicio (){    

  function scrollTo(){
    window.scrollTo(0, 0)
  }

    return (
      <>        
        <Container className='containerStyle'>
          <Row>
            <Col xsm={1} sm={1} md={6} lg={6}>
              <div className="textContainer w-100 ps-5 pt-4 pb-4 mt-5">
                <div className='textContainer2'>                
                  <h1 className="titleStyle fw-bold pt-3 pb-3">Creá ambientes llenos de aroma y calidez.</h1>                
                  <p className="mb-0">Nuestras velas aromáticas son el complemento perfecto para crear ambientes irresistibles.</p>
                  <p>Descubrí nuestra amplia variedad de fragancias y productos para transformar tus espacios.</p>
                  <Link to="/productos"><Button variant="light" onClick={scrollTo} className="button-style">Ver catálogo</Button></Link>
                </div>
              </div>
            </Col>
            <Col xsm={1} sm={1} md={6} lg={6} >
              <div className='img-container'>
                <img alt='' className='img-style' src="./img/img-inicio-1.jpg" />
              </div>
            </Col>
          </Row>
          <Row>
            <Col xsm={1} sm={1} md={12} lg={12} className='p-5'>
              <div className="contenedorCaracteristicas d-flex justify-content-evenly pt-5 pb-3">
                <div className="textCaracteristicas text-center">    
                  <img alt="" src='./img/corona.svg'  className="iconoCaracteristicas mb-4"/>
                  <h5 className='fw-bold'>Calidad Premium</h5>
                  <p className='parrafoCaracteristicas'>Aromas de autoría con materias primas de primera calidad.</p>
                </div>              
                <div className="textCaracteristicas text-center">  
                  <img alt="" src='./img/camion.svg' className="iconoCaracteristicas mb-4"/>                  
                  <h5 className='fw-bold'>Envíos a todo el país</h5>
                  <p className='parrafoCaracteristicas'>Tu compra llegará lo más rápido posible y de la mejor manera.</p>  
                </div>
                <div className="textCaracteristicas text-center">     
                  <img alt="" src='./img/reciclado.svg' className="iconoCaracteristicas mb-4"/>                   
                  <h5 className='fw-bold'>Productos ecológicos</h5>
                  <p className='parrafoCaracteristicas'>Utilizamos cera de soja, amigable con el medio ambiente.</p>  
                </div>  
              </div>
            </Col>            
          </Row>
          <Row className='p-4 pt-1'>
            <Col xsm={1} sm={1} md={6} lg={12} >                
              {<Destacados />} 
            </Col>
          </Row>
          <Row >            
            <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor: "#DED5C2"}}>
              <div className="testContainer text-center p-4 container-fluid">                    
                <h3 className="fw-bold" style={{color:"green"}}>Descubrí tu fragancia</h3>
                <p className="textFragancias pb-3 ps-5 pe-5">¿No sabés qué fragancia elegir? Hacé este simple cuestionario para enterarte de los mejores productos para vos</p>
                <Link to='/Test'>
                  <Button variant="light" className="button-style" onClick={scrollTo}>Hacer cuestionario</Button>                
                </Link>
              </div>                             
            </Col>            
          </Row>
          <Row className='p-5'>
            <Col xsm={1} sm={1} md={6} lg={6}>                  
              <div>                                 
                <img className='img-nosotros' src="./img/img-inicio-2.jpg" alt=""/>                               
              </div>                                
            </Col>
            <Col xsm={1} sm={1} md={6} lg={6}>
              <div className="containerNosotros p-3 mb-5">                               
                  <h2 className="titleStyle fw-bold mb-3">Sobre nosotros</h2>
                  <p className='mb-0'>Galas nace a mediados de 2019 como terapia para afrontar la pérdida de mi hija ese mismo año.</p>
                  <p className='mb-0'>En mi vida necesitaba luz para atravesar este momento tan difícil por lo que las velas fueron ese motor. <span className='fw-bold'>Llevar luz a los demás, ¿y por qué no también aromas?</span> 
                  </p>
                  <p className='mb-4'>Comenzamos investigando mucho, a prueba y error claro, a leer muchísimo sobre composiciones químicas y origen de aquellos productos naturales que nos permitan producir el menor daño posible a nuestro planeta y seres vivos. Fue así que creamos la marca, el stock y muchas ideas.
                  </p>
                  <Link to="/Nosotros"><Button variant="light" className="button-style" onClick={scrollTo}>Conocenos</Button></Link>                                    
                
              </div>              
            </Col>
          </Row>
          <Row className='contenedorMayorista'>
            <Col xsm={1} sm={1} md={6} lg={6}>
              <div className="containerMayorista p-3 mb-5 text-start">
                <h2 className="titleStyle fw-bold mb-3">¿Sos mayorista?</h2>
                <p className='parrafoMayorista mb-0'  >Desde Galas Baires queremos motivar a quienes tienen pasión por los aromas y el arte deco. Aquellas personas con alma emprendedora. </p>
                <p className='parrafoMayorista mb-0' ><span className='fw-bold'>Ahora vas a poder vender nuestros productos sin inversión previa.</span>  ¿Cómo? Contactate con nosotros y te contaremos esta propuesta distinta para que puedas emprender e incrementar tus ganancias.
                </p>
                <p className='parrafoMayorista mb-4'>Sabemos que todo cambia, por eso nosotros buscamos que los cambios sean positivos <span>siempre</span>. Porque si enciendes una luz en el camino de alguien, también iluminarás tu camino.
                </p>
                <Link to="/mayoristas">
                  <Button variant="light" className="button-style" onClick={scrollTo}>¡Quiero saber más!</Button> 
                </Link>                                  
              </div>              
            </Col >
            <Col xsm={1} sm={1} md={6} lg={6}>
              <div> 
                  <img alt='' className='img-mayorista' src="./img/img-inicio-3.jpg" rounded />
              </div>
            </Col>
          </Row>     
          <Row className='p-5'>
            <Col xsm={0} sm={1} md={2} lg={3}></Col>
            <Col xsm={1} sm={1} md={6} lg={6}>
              <Carousel className='estiloCarrusel'>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="./img/img-carrusel-1.jpg"
                    alt="First slide"
                  />                  
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img
                    className="d-block w-100"
                    src="./img/img-carrusel-2.jpg"
                    alt="Second slide"
                  />                  
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                  <img 
                    className="d-block w-100"
                    src="./img/img-carrusel-3.jpg"
                    alt="Third slide"
                  />                  
                </Carousel.Item>
              </Carousel>
            </Col> 
            <Col xsm={0} sm={1} md={2} lg={3}></Col>
          </Row>               
        </Container>  
      </>
    );
  }  

  export default Inicio;