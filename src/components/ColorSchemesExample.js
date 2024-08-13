import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import '../App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';

function ColorSchemesExample() {
 
  const [expanded, setExpanded] = useState(false);



  const closeNavbar = () => {
    setExpanded(false);
  };

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        expanded={expanded}
        onToggle={() => setExpanded(!expanded)}
        className="bg-body-tertiary nav-container"
        bg='dark' 
        data-bs-theme='dark' 
      >
        <Container>
          <Navbar.Brand className='nav-title' as={Link} to="/" onClick={closeNavbar}>
            JASWANTH SAGANABOINA
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/" onClick={closeNavbar}>Home</Nav.Link>
              <Nav.Link as={Link} to="/education" onClick={closeNavbar}>Education</Nav.Link>
              <Nav.Link as={Link} to="/projects" onClick={closeNavbar}>Projects</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
