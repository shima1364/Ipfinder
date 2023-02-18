import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (

      <Navbar variant="dark" bg="info" >
        <Container>
          <Navbar.Brand href="#home">Ip Finder</Navbar.Brand>
        </Container>
        <br />
      </Navbar>
  );
}

export default Header;