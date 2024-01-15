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
          <Col xsm={1} sm={1} md={6} lg={12}>
            <div className='encabezadoNosotros'>
              <div className='encabezadoNosotros2'>
                <h3 className='titleStyle ' style={{fontWeight:"bold", fontSize:"50px"}}>Sobre Galas Baires</h3>
                <p>"No hay nadie tan fuerte como una persona, cuyo corazón está siempre lleno de gratitud" - Daisaku Ikeda."</p>              
              </div>
            </div>
          </Col>          
        </Row>
        <Row>
          <Col xsm={1} sm={1} md={12} lg={6}>                  
            <div>                                 
              <img className='img-nuestra-historia' src="./img/img-inicio-2.jpg" alt=""/>                               
            </div>                                
          </Col> 
          <Col xsm={1} sm={1} md={12} lg={6}>
            <div className="containerNuestraHistoria p-3 mb-5">                               
                <h2 className="titleStyle fw-bold mb-3" style={{fontSize:"17px"}}>Nuestra historia</h2>
                <p className='parrafoNuestraHistoria mb-2'>Galas nace en un momento muy complicado, en 2019, tras la pérdida de mi hija. Comencé investigando mucho, a prueba y error, claro, a leer muchísimo sobre composiciones químicas y origen de aquellos <span className='fw-bold'>productos naturales</span>  que nos permitan producir el menor daño posible a nuestro planeta y seres vivos.</p>
                <p className='parrafoNuestraHistoria mb-2'>Estudié Diseño Gráfico, y aproveché toda mi <span className='fw-bold'>creatividad</span> para volcarlas en el diseño de nuestro packaging. Todo parecía encaminarse, hasta que en 2020 comenzó la pandemia. Esto nos llevó a querer ayudar a muchas personas que no estaban en un buen momento, llevando nuestros productos a la venta mayorista donde nuestros clientes puedan <span className='fw-bold'>personalizar las velas</span>  con su propia marca y empezar a vender.
                </p>
                <p className='parrafoNuestraHistoria mb-4'>Hoy, Galas sigue creciendo gracias a los minoristas y mayoristas que me acompañan y me permiten seguir llevando luz de Gala a sus hogares.
                </p>
            </div>              
          </Col>
        </Row>   
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12}>
              <div className="contenedorIconosNosotros d-flex justify-content-evenly pt-5 pb-3">
                <div className="textNosotros text-center" >    
                  <img alt="" src='./img/target-icon.png' className="iconoNosotros mb-4"/>
                  <h5 className='fw-bold'>Nuestra misión</h5>
                  <p className='parrafoNosotros ' >Crear un vela natural de mayor durabilidad que no sólo ilumine sino que perfume incluso sin encenderla. Por eso desarrollamos nuestra propia fórmula, experimentamos con distintas composiciones químicas hasta lograr la correcta.
                  Todos los días se suman nuevas ideas a nuestro mundo iluminado, y esperamos seguir mejorando y creando nuevos Blends incluso para los gustos más exigentes.
                  </p>                  
                </div>              
                <div className="textNosotros text-center">  
                  <img alt="" src='./img/luz-icon.png' className="iconoNosotros mb-4"/>                  
                  <h5 className='fw-bold'>Nuestra visión</h5>
                  <p className='parrafoNosotros' >GALAS BAIRES, a raíz de sus constantes esfuerzos por crecer, incorporando nuevos aromas, nuevos modelos, packaging exclusivos y diferentes, capacitación constante y materias primas de calidad, se convirtió en poco tiempo en una pasión y un emprendimiento sustentable que espera seguir creciendo día a día para que muchos más conozcan nuestras fragancias de autoría creadas con aceites de perfumería fina.</p>  
                  <p></p>
                </div>
                <div className="textNosotros text-center">     
                  <img alt="" src='./img/diamante-icon.png' className="iconoNosotros mb-4"/>                   
                  <h5 className='fw-bold'>Nuestros valores</h5>
                  <p className='parrafoNosotros'>Realizamos un seguimiento personalizado de satisfacción y supervisión. Nuestro compromiso es seguir creciendo, creando y desarrollando en Galas con los mismos valores de siempre, para producir velas y aromas de autoria de calidad, que decoren con onda y buenas vibras!</p>  
                </div>  
              </div>            
          </Col>  
        </Row> 
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor: "#DED5C2"}} className='mb-5'>
            <div className="bannerNosotros text-center p-4 container-fluid">                    
              <h3 className="fw-bold" style={{color:"#804B37"}}>Amigable con el medio ambiente</h3>
              <p className="textBanner pb-3 ">En cada una de nuestras velas utilizamos Cera de Soja. Sumamente reconocida como una gran alternativa ecológica por su naturaleza sostenible y abundante, sin contribuir a la deforestación ni al agotamiento de recursos naturales.</p>
            </div>             
          </Col>  
        </Row>   
        <Row className='contenedorMayorista'>
          <Col xsm={1} sm={1} md={6} lg={6}>
            <div className="containerNuestrasFragancias p-3 mb-5 text-end">
              <h2 className="titleFragancias fw-bold mb-3">Sobre nuestras fragancias</h2>
              <p className='parrafoNuestrasFragancias mb-0'>En Galas Baires tenemos una gran variedad de fragancias y aromas para tu hogar. Nuestros aromas son realizados con aceites de <span className='fw-bold'>perfumería fina</span>, logrando combinaciones exquisitas que cautivan incluso a los gustos más exigentes.</p>
              <p className='parrafoNuestrasFragancias mb-0'>Puede ser complicado encontrar «esa» fragancia entre tantas opciones. Te invitamos a hacer un cuestionario corto para  <span className='fw-bold'><a href='/Test' style={{textDecoration:"none", color:"#804B37"}}>descubrir tu fragancia ideal.</a></span>
              </p>              
            </div>                
          </Col >
          <Col xsm={1} sm={1} md={6} lg={6}>
            <div> 
                <img alt='' className='img-fragancias' src="./img/img-inicio-3.jpg" rounded />
            </div>
          </Col>
        </Row>
        <Row className='p-5 contenedorMateriales'>
          <Col xsm={1} sm={1} md={6} lg={6}>                  
            <div>                                 
              <img className='img-materiales' src="./img/img-inicio-2.jpg" alt=""/>                               
            </div>                                
          </Col>
          <Col xsm={1} sm={1} md={6} lg={6}>
            <div className="containerMateriales mb-5">                               
                <h2 className="titleMateriales fw-bold mb-3">Sobre nuestros materiales</h2>
                <p className='mb-0 parrafoMateriales'>En la elaboración de nuestros productos, seleccionamos cuidadosamente cada insumo de <span className='fw-bold'>primera calidad</span>. No solo te ofrecemos una experiencia única de luz y aroma, sino que también estamos <span className='fw-bold'>comprometidos con el medio ambiente</span> y el bienestar de todos los seres vivos.</p>                
                <p className='mb-0 parrafoMateriales'>Disfrutá de la magia que transporta cada producto.
                </p>
            </div>               
          </Col>
        </Row>             
        <Row>
          <Col xsm={1} sm={1} md={12} lg={12} style={{backgroundColor: "#DED5C2"}}>
              <div className="catalogoContainer text-center p-4 container-fluid">                    
                <h3 className="fw-bold" style={{color:"#804B37"}}>Aromatizá tus ambientes con Galas Baires</h3>
                <p className="textCatalogo pb-3">Contactanos y solicitá el catálogo actualizado para no perderte de ninguna novedad u oferta</p>
                <Link to='/contacto'>
                  <Button variant="light" className="button-style">Solicitar el catálogo</Button>                
                </Link>
              </div>             
          </Col>          
        </Row>
        <Row>          
          <Col xsm={1} sm={1} md={6} lg={12}>
            <div className='encabezadoTestimonios mb-5'>
              <h1 className='tituloTestimonios fw-bold'>¿Qué opinan nuestros clientes?</h1>                           
            </div>
            <div>
              <Carousel className='carruselNosotros'>
                <Carousel.Item interval={6000}>
                  <div className='contenedorTestimonio text-center mb-5'>
                    <img alt="" src='./img/person-circle.svg' width="80px" color="#804B37" className='mb-3' />
                    <h5 className='fw-bold mb-3' style={{color:"#804B37"}}>Noelia</h5>
                    <p className=''>Gracias por tan hermoso y delicado trabajo. Super recomendable gente!!!</p>
                  </div>                                   
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='contenedorTestimonio text-center mb-5'>
                    <img alt="" src='./img/person-circle.svg' width="80px" color="#804B37" className='mb-3' />
                    <h5 className='fw-bold mb-3' style={{color:"#804B37"}} >Usuario</h5>
                    <p className=''>Una maravilla!!! No sé cómo definir o caracterizar las fragancias. Súper fantásticas!!</p>
                  </div>                 
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='contenedorTestimonio text-center mb-5'>
                    <img alt="" src='./img/person-circle.svg' width="80px" color="#804B37" className='mb-3' />
                    <h5 className='fw-bold mb-3' style={{color:"#804B37"}} >Usuario</h5>
                    <p className=''>No dan más de lindas!! Y aromas que no había sentido nunca!! Son geniales!</p>
                  </div>                  
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='contenedorTestimonio text-center mb-5'>
                    <img alt="" src='./img/person-circle.svg' width="80px" color="#804B37" className='mb-3' />
                    <h5 className='fw-bold mb-3' style={{color:"#804B37"}} >Usuario</h5>
                    <p className=''>Hoy encendí una vela y tiene un aroma riquísimo. Llegó hasta el piso de arriba!! Muy suave!!</p>
                  </div>                  
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='contenedorTestimonio text-center mb-5'>
                    <img alt="" src='./img/person-circle.svg' width="80px" color="#804B37" className='mb-3' />
                    <h5 className='fw-bold mb-3' style={{color:"#804B37"}} >Usuario</h5>
                    <p className=''>Hice un pedido de 6 cónicas y 5 velas negras. Exquisito todo, me ha quedado el aroma impregnado. Súper todo.</p>
                  </div>                  
                </Carousel.Item>
                <Carousel.Item interval={6000}>
                  <div className='contenedorTestimonio text-center mb-5'>
                    <img alt="" src='./img/person-circle.svg' width="80px" color="#804B37" className='mb-3' />
                    <h5 className='fw-bold mb-3' style={{color:"#804B37"}} >Usuario</h5>
                    <p className='textoTestimonio'>Estoy enamorada de cada una de las Galas. El aroma es perfecto y la cera se ve bellísima!</p>
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