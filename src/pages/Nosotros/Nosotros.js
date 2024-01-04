import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
//import Image from 'react-bootstrap/Image';
import './style.css'

function Nosotros() {
  return (
    <>    
      <Container className='containerStyle'>
        <Row>
          <Col sm={12}>
            <div className='encabezadoNosotros'>
              <h1>Sobre Galas Baires</h1>
              <p>"No hay nadie tan fuerte como una persona, cuyo corazón está siempre lleno de gratitud" - Daisaku Ikeda."</p>              
            </div>
          </Col>          
        </Row>
        <Row>
          <Col xsm={1} sm={1} md={6} lg={6}>                  
            <div>                                 
              <img className='img-nosotros' src="./img/img-inicio-2.jpg" alt=""/>                               
            </div>                                
          </Col> 
          <Col xsm={1} sm={1} md={6} lg={6}>
            <div className="containerNosotros p-3 mb-5">                               
                <h2 className="titleStyle fw-bold mb-3">Nuestra historia</h2>
                <p className='mb-2'>Galas nace en un momento muy complicado, en 2019, tras la pérdida de mi hija. Comencé investigando mucho, a prueba y error, claro, a leer muchísimo sobre composiciones químicas y origen de aquellos productos naturales que nos permitan producir el menor daño posible a nuestro planeta y seres vivos.
                  
                </p>
                <p className='mb-2'>Estudié Diseño Gráfico, y aproveché toda mi creatividad para volcarlas en el diseño de nuestro packaging. Todo parecía encaminarse, hasta que en 2020 comenzó la pandemia. Esto nos llevó a querer ayudar a muchas personas que no estaban en un buen momento, llevando nuestros productos a la venta mayorista donde nuestros clientes puedan personalizar las velas con su propia marca y empezar a vender.
                </p>
                <p className='mb-4'>Hoy, Galas sigue creciendo gracias a los minoristas y mayoristas que me acompañan y me permiten seguir llevando luz de Gala a sus hogares.
                </p>
            </div>              
          </Col>
        </Row>   
        <Row>
          <Col sm={12}>
              <div className="contenedorCaracteristicas d-flex justify-content-evenly pt-5 pb-3">
                <div className="textCaracteristicas text-center">    
                  <img alt="" src='./img/target-icon.png'  className="iconoCaracteristicas mb-4"/>
                  <h5 className='fw-bold'>Nuestra misión</h5>
                  <p className='parrafoCaracteristicas'>Crear un vela natural que no solo ilumine sino que perfume incluso sin encenderla y con mayor durabilidad.
                  Por eso desarrollamos nuestra propia fórmula y experimentamos con distintas composiciones químicas hasta lograr la correcta.
                  Todos los días se suman nuevas ideas a nuestro mundo iluminado y esperamos seguir mejorando y creando nuevos Blends incluso para los gustos más exigentes!
                  </p>
                </div>              
                <div className="textCaracteristicas text-center">  
                  <img alt="" src='./img/luz-icon.png' className="iconoCaracteristicas mb-4"/>                  
                  <h5 className='fw-bold'>Nuestra visión</h5>
                  <p className='parrafoCaracteristicas'>GALAS BAIRES  a raíz de sus constantes esfuerzos por crecer, incorporando nuevos aromas, nuevos modelos, packaging exclusivos y diferentes, capacitación constante y materias primas de calidad, se convirtió en poco tiempo en una pasión y un emprendimiento sustentable que espera seguir creciendo día a día para que muchos más conozcan nuestras fragancias de autoría creadas con aceites de perfumería fina.</p>  
                </div>
                <div className="textCaracteristicas text-center">     
                  <img alt="" src='./img/diamante-icon.png' className="iconoCaracteristicas mb-4"/>                   
                  <h5 className='fw-bold'>Nuestros valores</h5>
                  <p className='parrafoCaracteristicas'>Realizamos un seguimiento personalizado de satisfacción y supervisión. Nuestro compromiso es seguir creciendo, creando y desarrollando en Galas con los mismos valores de siempre, para producir velas y aromas de autoria de calidad, que decoren con onda y buenas vibras!</p>  
                </div>  
              </div>            
          </Col>  
        </Row> 
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor: "#DED5C2"}} className='mb-5'>
            <div className="testContainer text-center p-4 container-fluid">                    
              <h3 className="fw-bold" style={{color:"#804B37"}}>Amigable con el medio ambiente</h3>
              <p className="textFragancias pb-3 ps-5 pe-5">En cada una de nuestras velas utilizamos Cera de Soja. Sumamente reconocida como una gran alternativa ecológica por su naturaleza sostenible y abundante, sin contribuir a la deforestación ni al agotamiento de recursos naturales.</p>
            </div>             
          </Col>  
        </Row>   
        <Row className='contenedorMayorista'>
          <Col xsm={1} sm={1} md={6} lg={6}>
            <div className="containerMayorista p-3 mb-5 text-start">
              <h2 className="titleStyle fw-bold mb-3">Sobre nuestras fragancias</h2>
              <p className='parrafoMayorista mb-0'>En Galas Baires tenemos una gran variedad de fragancias y aromas para tu hogar. Nuestros aromas son realizados con aceites de perfumería fina, logrando combinaciones exquisitas que cautivan incluso a los gustos más exigentes.</p>
              <p className='parrafoMayorista mb-0'>Puede ser complicado encontrar «esa» fragancia entre tantas opciones. Te invitamos a hacer un cuestionario corto para  <span className='fw-bold'>descubrir tu fragancia ideal.</span>
              </p>              
            </div>                
          </Col >
          <Col xsm={1} sm={1} md={6} lg={6}>
            <div> 
                <img alt='' className='img-mayorista' src="./img/img-inicio-3.jpg" rounded />
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
                <h2 className="titleStyle fw-bold mb-3">Sobre nuestros materiales</h2>
                <p className='mb-0'>En la elaboración de nuestros productos, seleccionamos cuidadosamente cada insumo de primera calidad. No solo te ofrecemos una experiencia única de luz y aroma, sino que también estamos comprometidos con el medio ambiente y el bienestar de todos los seres vivos.</p>                
                <p className='mb-4'>Disfrutá de la magia que transporta cada producto.
                </p>
            </div>               
          </Col>
        </Row>             
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor: "#DED5C2"}}>
              <div className="testContainer text-center p-4 container-fluid">                    
                <h3 className="fw-bold" style={{color:"#804B37"}}>Aromatizá tus ambientes con Galas Baires</h3>
                <p className="textFragancias pb-3 ps-5 pe-5">Contactanos y solicitá el catálogo actualizado para no perderte de ninguna novedad u oferta</p>
                <Link to='/Test'>
                  <Button variant="light" className="button-style">Solicitar el catálogo</Button>                
                </Link>
              </div>             
          </Col>          
        </Row>
        <Row>
          <Col sm={12}>
            <div className='encabezadoNosotros mb-5'>
              <h1>¿Qué opinan nuestros clientes?</h1>                           
            </div>
            <div>
              <Carousel>
                <Carousel.Item interval={6000}>
                  <div className='text-center mb-5'>
                    <img alt="" src='./img/target-icon.png' />
                    <h5 className='fw-bold'>Usuario</h5>
                    <p>Gracias por tan hermoso y delicado trabajo. Super recomendable gente!!!</p>
                  </div>                                   
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='text-center mb-5'>
                    <img alt="" src='./img/target-icon.png' />
                    <h5 className='fw-bold'>Usuario</h5>
                    <p>Una maravilla!!! No sé cómo definir o caracterizar las fragancias. Súper fantásticas!!</p>
                  </div>                 
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='text-center mb-5'>
                    <img alt="" src='./img/target-icon.png' />
                    <h5 className='fw-bold'>Usuario</h5>
                    <p>No dan más de lindas!! Y aromas que no había sentido nunca!! Son geniales!</p>
                  </div>                  
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='text-center mb-5'>
                    <img alt="" src='./img/target-icon.png' />
                    <h5 className='fw-bold'>Usuario</h5>
                    <p>Hoy encendí una vela y tiene un aroma riquísimo. Llegó hasta el piso de arriba!! Muy suave!!</p>
                  </div>                  
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='text-center mb-5'>
                    <img alt="" src='./img/target-icon.png' />
                    <h5 className='fw-bold'>Usuario</h5>
                    <p>Hice un pedido de 6 cónicas y 5 velas negras. Exquisito todo, me ha quedado el aroma impregnado. Súper todo.</p>
                  </div>                  
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='text-center mb-5'>
                    <img alt="" src='./img/target-icon.png' />
                    <h5 className='fw-bold'>Usuario</h5>
                    <p>Estoy enamorada de cada una de las Galas. El aroma es perfecto y la cera se ve bellísima!</p>
                  </div>                  
                </Carousel.Item>
              </Carousel>
            </div>            
          </Col>          
        </Row>
      </Container> 
    </>
  )
}

export default Nosotros;