import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { isAuthenticated } from '../../services/auth';

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img 
            src="/assets/logo.png" 
            alt="Company Logo" 
            style={{ 
              maxHeight: '80px', 
              height: 'auto', 
              width: 'auto', 
              maxWidth: '170px' 
            }} 
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/" className="mr-3">
              Home
            </Nav.Link>
            
            <Nav.Link as={Link} to="/proposal" className="mr-3">
              Create Proposal
            </Nav.Link>
            
            {isAuthenticated() ? (
              <>
                <Nav.Link as={Link} to="/admin/dashboard" className="mr-3">
                  Admin Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/logout" className="text-danger">
                  Logout
                </Nav.Link>
              </>
            ) : (
              <Nav.Link as={Link} to="/admin/login">
                Admin Login
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;