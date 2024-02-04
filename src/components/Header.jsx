import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Header() {

    return (
        <Navbar expand="lg" className="bg-body-tertiary" sticky='top' data-bs-theme="dark">
            <Container>
                <Navbar.Brand>Boathouse Manager</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="">Boats</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header