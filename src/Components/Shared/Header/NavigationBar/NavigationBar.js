import React from 'react';
import { Button, Container, Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const NavigationBar = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar className="background" collapseOnSelect expand="lg" sticky="top">
                <Container>
                    <Navbar.Brand className="text-white fs-4" href="/home">LifeLine General Clinic</Navbar.Brand>
                    <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>
                    <Nav.Link as={HashLink} className="text-white" to="/home#services">Services</Nav.Link>
                    <Nav.Link as={Link} className="text-white" to="/doctors">Doctors</Nav.Link>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        {user?.email ?
                            <Button onClick={logOut} variant="light">LogOut</Button> :
                            <Nav.Link as={Link} className="text-white" to="/login">Login</Nav.Link>}
                        <Nav.Link as={Link} className="text-white" to="/register">Register</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/aboutUs">About Us</Nav.Link>
                        <Navbar.Text className="text-white">
                            Signed in as: <a className="text-white" href="/login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default NavigationBar;