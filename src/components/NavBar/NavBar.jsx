import React from "react";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget";

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                    <Navbar.Brand href="#home">BOLUCOMPRAS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">
                        <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#features">Ayudando al medioambiente</Nav.Link>
                        <Nav.Link href="#pricing">Lanzá tu producto</Nav.Link>

                            <NavDropdown title="Categorías" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                
                        </Nav>

                        <Nav>
                            <Nav.Link href="#home"> <CartWidget /> </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    )
}



