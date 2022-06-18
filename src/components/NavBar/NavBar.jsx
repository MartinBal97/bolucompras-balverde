import React from "react";
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css"

export default function NavBar() {
    return (
        <>
            <Navbar className="contenedorNavBar" collapseOnSelect expand="lg" bg="dark" variant="dark">

                <Container>
                
                    <Navbar.Brand as={Link} to={`/`} className="titulo" href="#home">BOLUCOMPRAS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto">

                            <Nav.Link href="#home">Sobre Nosotros</Nav.Link>
                            <Nav.Link as={Link} to={`/categoria/medioambiente`} href="#features">Ayudando al medioambiente</Nav.Link> 
                            <Nav.Link as={Link} to={`/categoria/hogar`} href="#features">Hogar</Nav.Link> 
                            <Nav.Link as={Link} to={`/categoria/tech`} href="#features">Tecnología</Nav.Link> 

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



