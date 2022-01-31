import React from "react";
import { NavLink } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css"

export default function NavBar() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                
                <NavLink className="titulo" to={`/`}> <Navbar.Brand href="#home">BOLUCOMPRAS</Navbar.Brand></NavLink>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
                            <NavLink to={`/categoria/medioambiente`}> <Nav.Link href="#features">Ayudando al medioambiente</Nav.Link> </NavLink>
                            <NavLink to={`/categoria/hogar`}> <Nav.Link href="#features">Hogar</Nav.Link> </NavLink>
                            <NavLink to={`/categoria/tech`}> <Nav.Link href="#features">Tecnología</Nav.Link> </NavLink>

                        </Nav>

                        <Nav>
                            <Nav.Link  href="#home"> <CartWidget /> </Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>

            </Navbar>
        </>
    )
}



