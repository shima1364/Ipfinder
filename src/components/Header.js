import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (

      <Navbar bg="info" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Ip Finder</Navbar.Brand>
        </Container>
        <br />
      </Navbar>
  );
}

export default Header;