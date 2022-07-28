import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from "react-router-dom";


export default function Nevbar() {
    return (
        <>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/">TSM Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Classroom" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="dance">Dance</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="model" disabled>Model</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="acting" disabled >Acting</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="voice" disabled>Voice</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to="about" >About us</Nav.Link>
                            <Nav.Link as={Link} to="contact" >Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}