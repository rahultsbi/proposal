
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faUserPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from '../contexts/UserAuthContext';
import Logo from '../../public/Logo.png';
import './HomePage.css';

function HomePage() {
  const { isAuthenticated, user, userType, logout } = useUserAuth();

  // Add animation effect when the component mounts
  useEffect(() => {
    document.body.classList.add('home-page-active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    return () => {
      document.body.classList.remove('home-page-active');
      document.body.style.overflow = ''; // Restore default
    };
  }, []);

  const handleLogout = () => {
    logout();
    window.location.reload(); // Refresh page after logout
  };

  return (
    <div className="home-page-wrapper">
      <div className="background-container">
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
      </div>
      
      <Container className="home-container">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={8} xl={7}>
            <Card className="main-card compact">
              <div className="logo-container compact">
                <Image 
                  src={Logo} 
                  alt="TSBI Studios Logo" 
                  className="logo-image compact"
                  fluid
                />
              </div>
              
              <Card.Body className="text-center compact-body">
                <h3 className="welcome-title">Welcome to TSBI Studios</h3>
                <p className="welcome-subtitle">Your creative partner for innovative solutions</p>
                
                {/* Show user status and dashboard link if authenticated */}
                {isAuthenticated ? (
                  <div className="authenticated-section">
                    <div className="user-status mb-4">
                      <h5 className="text-primary">
                        Welcome back, <strong>{user?.name || 'User'}</strong>!
                      </h5>
                      <p className="text-muted">
                        {userType === 'admin' ? 'Administrator Access' : 'User Dashboard'}
                      </p>
                    </div>
                    
                    <div className="dashboard-actions">
                      <Link 
                        to={userType === 'admin' ? "/admin/dashboard" : "/dashboard"} 
                        className="btn btn-primary btn-lg mb-3 me-3"
                      >
                        Go to {userType === 'admin' ? 'Admin' : 'User'} Dashboard
                      </Link>
                      
                      <Button 
                        variant="outline-secondary" 
                        onClick={handleLogout}
                        className="btn-lg"
                      >
                        <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                        Logout
                      </Button>
                    </div>
                  </div>
                ) : (
                  /* Show login and register options if not authenticated */
                  <div className="auth-section">
                    <p className="auth-description mb-4">
                      Sign in to access your dashboard and create proposals, or create a new account to get started.
                    </p>
                    
                    <div className="auth-buttons">
                      <Link to="/login" className="btn btn-primary btn-lg mb-3 me-3">
                        <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                        Sign In
                      </Link>
                      
                      <Link to="/register" className="btn btn-outline-primary btn-lg mb-3">
                        <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                        Create Account
                      </Link>
                    </div>
                    
                    <div className="auth-help mt-4">
                      <p className="text-muted small">
                        <strong>Note:</strong> Use your admin credentials to access the admin dashboard, 
                        or create a regular account for proposal management.
                      </p>
                    </div>
                  </div>
                )}
                
                <footer className="home-footer mt-5">
                  <p>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</p>
                </footer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomePage;