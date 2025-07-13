import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { ThemeContext } from '../App';

function Header() {
    const { darkMode, toggleTheme } = useContext(ThemeContext);

    return (
        <Navbar
            bg={darkMode ? 'dark' : 'light'}
            variant={darkMode ? 'dark' : 'light'}
            expand="lg"
            sticky="top"
        >
            <Container>
                <Navbar.Brand as={Link} to="/">Ravi Silva</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar-nav" />
                <Navbar.Collapse id="main-navbar-nav">
                    <Nav className="ms-auto align-items-center gap-3">
                        <Nav.Link as={Link} to="/">Início</Nav.Link>
                        <Nav.Link as={Link} to="/repositories">Repositórios</Nav.Link>
                        <Button
                            variant={darkMode ? 'outline-light' : 'outline-dark'}
                            onClick={toggleTheme}
                            size="sm"
                        >
                            {darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
