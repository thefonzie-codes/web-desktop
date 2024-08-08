import { useNavigate } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";

export default function customNav() {

  const navigate = useNavigate();

  return (
    <Navbar sticky="top" bg="dark" data-bs-theme="dark">
      <Container>
        <Nav
          defaultActiveKey="/"
          onClick={() => navigate('/')}
        >
          <Nav.Item>
            <Nav.Link>Alfonso Banzon | Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Contact</Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
}