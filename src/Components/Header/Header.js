
import React from 'react';
import { Form, FormControl, Nav, Navbar,Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
            <Navbar expand="lg" className="navbar-bg py-3">
                <Container>
                <NavLink className="navbb" to="/">
                    <Navbar.Brand>Programming Learning</Navbar.Brand>
                </NavLink>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                    className=" mx-5 my-2 my-lg-0 nav-color"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                    >
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/Service">Service</NavLink>
                    <NavLink to="/teacher">Teachers</NavLink>
                    </Nav>
                    <Form className="d-flex  form-content">
                    <FormControl
                        type="search"
                        placeholder="Search"
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Container>
            </Navbar>
        
    );
};

export default Header;