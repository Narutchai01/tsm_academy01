import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";


export default function Nevbar(){
    return(
        <>
            <Navbar bg="dark" expand="lg"  variant="dark">
                <Container>
                    <Navbar.Brand href="/">TSM Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="dance">Dance</Nav.Link>
                            <Nav.Link as={Link} to="dance" disabled>Model</Nav.Link>
                            <Nav.Link as={Link} to="dance" disabled>Acting</Nav.Link>
                            <Nav.Link as={Link} to="dance" disabled>Voice</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}