import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Galas Baires</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link to="/" href="#home">Inicio</Nav.Link>
            
            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Nuestra historia</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Testimonios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Sobre las fragancias</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Nuestros materiales</NavDropdown.Item>              
            </NavDropdown>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/4.1">Velas aromáticas</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.2">Difusores</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Perfuminas</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.4">Souvenirs</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.5">Hornitos</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.6">Refill</NavDropdown.Item>
              <NavDropdown.Item href="#action/4.7">Fragancias</NavDropdown.Item>              
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/4.8">Descubrí tu fragancia</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="FAQ" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/5.1">Políticas de envío</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">Políticas de entrega</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Recomendaciones</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Nuestros materiales</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Contacto" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/6.1">Formulario de contacto</NavDropdown.Item>
              <NavDropdown.Item href="#action/6.2">Redes sociales</NavDropdown.Item>
              <NavDropdown.Item href="#action/6.3">WhatsApp</NavDropdown.Item>              
            </NavDropdown>                        
            <NavDropdown title="Mayoristas" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/7.1">Formulario para mayoristas</NavDropdown.Item>              
            </NavDropdown> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;