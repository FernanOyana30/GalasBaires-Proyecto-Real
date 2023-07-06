import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Row>
          <Col sm={12}>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link><Link to="/">Home</Link>  </Nav.Link>                                    
                <Nav.Link><Link to="/ItemListContainer">Productos</Link>  </Nav.Link>             
                <Nav.Link><Link to="/FAQ">Preguntas frecuentes</Link></Nav.Link>             
            <Navbar.Brand>Galas Baires</Navbar.Brand>
                <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                  <NavDropdown.Item><Link to="/NuestraHistoria">Nuestra historia</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Testimonios">Testimonios</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Fragancias">Sobre las fragancias</Link></NavDropdown.Item>
                  <NavDropdown.Item><Link to="/Materiales">Nuestros materiales</Link></NavDropdown.Item>              
                </NavDropdown>
                <Nav.Link><Link to="/formMinorista">Contacto</Link>  </Nav.Link>             
                <Nav.Link><Link to="/formMayorista">Mayoristas</Link>  </Nav.Link>             
              </Nav>
            </Navbar.Collapse>        
          </Col>        
        </Row>        
      </Container>
    </Navbar>
  );
}

export default NavBar;