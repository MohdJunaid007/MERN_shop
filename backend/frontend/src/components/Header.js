import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Link,NavLink } from 'react-router-dom'
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const Header = () => {
    return <div>
        <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>

                <Link to='/' className='text-decoration-none'>
                    <Navbar.Brand >APNI-DUKAAN</Navbar.Brand>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">

                        <Link  to='/sell' className='text-decoration-none'>
                            <Navbar className='navBar-text link'> <i class="fas fa-money-bill-wave"></i> Sell</Navbar>
                        </Link >

                        <Link to='/cart' className='text-decoration-none'>
                            <Navbar className='navBar-text link'> <i className='fas fa-shopping-cart'></i> Cart</Navbar>
                        </Link>

                        <Link to='/login' className='text-decoration-none'>
                            <Navbar className='navBar-text link'> <i className='fas fa-user'></i> Sign In</Navbar>
                        </Link>
                        
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>;
};

export default Header;



