import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import '../css/navbar.css';

class navbar extends Component {
    render() {
        return (
        <div className='heading'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Featured Recipes</Nav.Link>
                        <Nav.Link href="#">Recipe Categories</Nav.Link>
                        <Nav.Link href="#">Videos</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Navbar>    
        </div>
        )
    };
};

export default navbar;