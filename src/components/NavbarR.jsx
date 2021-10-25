import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

export default function NavReactB({token, logOut}) {

    return (
        <Navbar className="bg-dark navbar-dark fixed-top" expand="lg">
            <Navbar.Brand>Challenge React Js</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-style">
                <Nav.Link to="/" exact as={NavLink}>
            Home
          </Nav.Link>
          {!token && (
            <Nav.Link to="/" as={NavLink}>
              Login
            </Nav.Link>
          )}

          {token && (
            <Nav.Link to="/login" onClick={logOut} as={NavLink}>
              Logout
            </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}