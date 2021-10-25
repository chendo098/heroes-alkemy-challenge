import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import swal from "sweetalert";

export default function NavReactB({token, setToken}) {

  const logOut = () => {
    swal({
        title: "Gracias por visitarnos",
        text: "Te esperamos pronto para formar tu equipo",
    });
    localStorage.removeItem('token');
    setToken('');
};


    return (
        <Navbar className="bg-dark navbar-dark fixed-top" expand="lg">
            <Navbar.Brand>Challenge React Js</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto nav-style">
                {!token && (
                <Nav.Link to="/" as={NavLink}>
                Login
                </Nav.Link>
                )};
                {token && (
                <Nav.Link to="/login" onClick={logOut} as={NavLink}>
                Logout
                </Nav.Link>
                )};
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};