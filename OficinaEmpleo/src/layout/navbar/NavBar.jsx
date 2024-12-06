import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/img/logo.svg"
import "./NavBar.css"

function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand href="#home" className='brand'>
            <div className='imgBrand'>
                <img src={logo} alt="logo empleo" />
            </div>
            <div className='textBrand'>
                <h6>OFICINA DE EMPLEO</h6>
                <p>Alderetes</p>
            </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <div className='ms-auto'></div>
            <Nav className="me-auto">
                <Nav.Link href="#link">Inicio</Nav.Link>
                <Nav.Link href="#link">Conocenos</Nav.Link>
                <Nav.Link href="#link">Galeria</Nav.Link>
                <Nav.Link href="#link">Acceso</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;