import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Galas Baires</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Inicio</Link>  </Nav.Link>            
            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/NuestraHistoria">Nuestra historia</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Testimonios">Testimonios</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Fragancias">Sobre las fragancias</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Materiales">Nuestros materiales</Link></NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/ItemListContainer">Velas aromáticas</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ItemListContainer">Difusores</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ItemListContainer">Perfuminas</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ItemListContainer">Souvenirs</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ItemListContainer">Hornitos</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ItemListContainer">Refill</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/ItemListContainer">Fragancias</Link></NavDropdown.Item>              
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="">Descubrí tu fragancia</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FAQ" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/PoliticasEnvio">Políticas de envío</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/politicasEntrega">Políticas de entrega</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Recomendaciones">Recomendaciones</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/Materiales">Nuestros materiales</Link></NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/formMinorista">Formulario de contacto</Link></NavDropdown.Item>
              <NavDropdown.Item href="#action/6.2">Redes sociales</NavDropdown.Item>
              <NavDropdown.Item href="#action/6.3">WhatsApp</NavDropdown.Item>              
            </NavDropdown>                        
            <NavDropdown title="Mayoristas" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="/formMayorista">Formulario para mayoristas</Link>  </NavDropdown.Item>              
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;