import React from "react";
import {Navbar, Container, Nav} from 'react-bootstrap'
import CartWidget from "./CartWidget";

export default function NavBar() {
    return (
        <>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Bolucompras</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
                        <Nav.Link href="#home">Categorías</Nav.Link>
                        <Nav.Link href="#features">Ayudando al medioambiente</Nav.Link>
                        <Nav.Link href="#pricing">Lanzá tu producto</Nav.Link>
                        <CartWidget />
                    </Nav>
                </Container>
            </Navbar>


        </>
    )
}