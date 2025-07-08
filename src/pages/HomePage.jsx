

// // // // import React, { useEffect } from 'react';
// // // // import { Link } from 'react-router-dom';
// // // // import { Card, Container, Row, Col, Image } from 'react-bootstrap';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faFileAlt, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// // // // import Logo from '../../public/Logo.png'; // Make sure this path is correct
// // // // import './HomePage.css'; // We'll create this CSS file for animations

// // // // function HomePage() {
// // // //   // Add animation effect when the component mounts
// // // //   useEffect(() => {
// // // //     document.body.classList.add('home-page-active');
    
// // // //     return () => {
// // // //       document.body.classList.remove('home-page-active');
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="home-page-wrapper">
// // // //       <div className="background-container">
// // // //         <div className="animated-shape shape1"></div>
// // // //         <div className="animated-shape shape2"></div>
// // // //         <div className="animated-shape shape3"></div>
// // // //       </div>
      
// // // //       <Container className="home-container">
// // // //         <Row className="justify-content-center">
// // // //           <Col xs={12} md={10} lg={8} xl={6}>
// // // //             <Card className="main-card">
// // // //               <div className="logo-container">
// // // //                 <Image 
// // // //                   src={Logo} 
// // // //                   alt="TSBI Studios Logo" 
// // // //                   className="logo-image"
// // // //                   fluid
// // // //                 />
// // // //               </div>
              
// // // //               <Card.Body className="text-center">
// // // //                 <h2 className="welcome-title">Welcome to TSBI Studios</h2>
// // // //                 <p className="welcome-subtitle">The creative hub for your production needs</p>
                
// // // //                 <div className="options-container">
// // // //                   <Link to="/proposal" className="option-link proposal-link">
// // // //                     <Card className="option-card proposal-card">
// // // //                       <Card.Body>
// // // //                         <div className="icon-container">
// // // //                           <FontAwesomeIcon icon={faFileAlt} className="option-icon" />
// // // //                         </div>
// // // //                         <h4>Create Proposal</h4>
// // // //                         <p>Generate a new studio proposal for your client</p>
// // // //                         <div className="card-action">
// // // //                           <span>Get Started</span>
// // // //                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
// // // //                         </div>
// // // //                       </Card.Body>
// // // //                     </Card>
// // // //                   </Link>
                  
// // // //                   <Link to="/admin/login" className="option-link admin-link">
// // // //                     <Card className="option-card admin-card">
// // // //                       <Card.Body>
// // // //                         <div className="icon-container">
// // // //                           <FontAwesomeIcon icon={faLock} className="option-icon" />
// // // //                         </div>
// // // //                         <h4>Admin Portal</h4>
// // // //                         <p>Access the dashboard to manage services</p>
// // // //                         <div className="card-action">
// // // //                           <span>Sign In</span>
// // // //                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
// // // //                         </div>
// // // //                       </Card.Body>
// // // //                     </Card>
// // // //                   </Link>
// // // //                 </div>
                
// // // //                 <footer className="home-footer">
// // // //                   <p>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</p>
// // // //                 </footer>
// // // //               </Card.Body>
// // // //             </Card>
// // // //           </Col>
// // // //         </Row>
// // // //       </Container>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default HomePage;
// // // import React, { useEffect } from 'react';
// // // import { Link } from 'react-router-dom';
// // // import { Card, Container, Row, Col, Image } from 'react-bootstrap';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faFileAlt, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// // // import Logo from '../../public/Logo.png'; // Make sure this path is correct
// // // import './HomePage.css';

// // // function HomePage() {
// // //   // Add animation effect when the component mounts
// // //   useEffect(() => {
// // //     document.body.classList.add('home-page-active');
// // //     document.body.style.overflow = 'hidden'; // Prevent scrolling
    
// // //     return () => {
// // //       document.body.classList.remove('home-page-active');
// // //       document.body.style.overflow = ''; // Restore default
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="home-page-wrapper">
// // //       <div className="background-container">
// // //         <div className="animated-shape shape1"></div>
// // //         <div className="animated-shape shape2"></div>
// // //         <div className="animated-shape shape3"></div>
// // //       </div>
      
// // //       <Container className="home-container">
// // //         <Row className="justify-content-center">
// // //           <Col xs={12} sm={10} md={8} lg={8} xl={7}>
// // //             <Card className="main-card compact">
// // //               <div className="logo-container compact">
// // //                 <Image 
// // //                   src={Logo} 
// // //                   alt="TSBI Studios Logo" 
// // //                   className="logo-image compact"
// // //                   fluid
// // //                 />
// // //               </div>
              
// // //               <Card.Body className="text-center compact-body">
// // //                 <h3 className="welcome-title">Welcome to TSBI Studios</h3>
                
// // //                 <div className="options-container compact">
// // //                   <Link to="/proposal" className="option-link proposal-link">
// // //                     <Card className="option-card proposal-card compact-card">
// // //                       <Card.Body className="compact-option">
// // //                         <div className="icon-container">
// // //                           <FontAwesomeIcon icon={faFileAlt} className="option-icon" />
// // //                         </div>
// // //                         <h5>Create Proposal</h5>
// // //                         <div className="card-action compact-action">
// // //                           <span>Get Started</span>
// // //                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
// // //                         </div>
// // //                       </Card.Body>
// // //                     </Card>
// // //                   </Link>
                  
// // //                   <Link to="/admin/login" className="option-link admin-link">
// // //                     <Card className="option-card admin-card compact-card">
// // //                       <Card.Body className="compact-option">
// // //                         <div className="icon-container">
// // //                           <FontAwesomeIcon icon={faLock} className="option-icon" />
// // //                         </div>
// // //                         <h5>Admin Portal</h5>
// // //                         <div className="card-action compact-action">
// // //                           <span>Sign In</span>
// // //                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
// // //                         </div>
// // //                       </Card.Body>
// // //                     </Card>
// // //                   </Link>
// // //                 </div>
                
// // //                 <footer className="home-footer">
// // //                   <p>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</p>
// // //                 </footer>
// // //               </Card.Body>
// // //             </Card>
// // //           </Col>
// // //         </Row>
// // //       </Container>
// // //     </div>
// // //   );
// // // }

// // // export default HomePage;
// // import React, { useEffect } from 'react';
// // import { Link } from 'react-router-dom';
// // import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faFileAlt, faLock, faArrowRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// // import { useUserAuth } from '../contexts/UserAuthContext';
// // import Logo from '../../public/Logo.png';
// // import './HomePage.css';

// // function HomePage() {
// //   const { isAuthenticated, user, userType, logout } = useUserAuth();

// //   // Add animation effect when the component mounts
// //   useEffect(() => {
// //     document.body.classList.add('home-page-active');
// //     document.body.style.overflow = 'hidden'; // Prevent scrolling
    
// //     return () => {
// //       document.body.classList.remove('home-page-active');
// //       document.body.style.overflow = ''; // Restore default
// //     };
// //   }, []);

// //   const handleLogout = () => {
// //     logout();
// //     window.location.reload(); // Refresh page after logout
// //   };

// //   return (
// //     <div className="home-page-wrapper">
// //       <div className="background-container">
// //         <div className="animated-shape shape1"></div>
// //         <div className="animated-shape shape2"></div>
// //         <div className="animated-shape shape3"></div>
// //       </div>
      
// //       <Container className="home-container">
// //         <Row className="justify-content-center">
// //           <Col xs={12} sm={10} md={8} lg={8} xl={7}>
// //             <Card className="main-card compact">
// //               <div className="logo-container compact">
// //                 <Image 
// //                   src={Logo} 
// //                   alt="TSBI Studios Logo" 
// //                   className="logo-image compact"
// //                   fluid
// //                 />
// //               </div>
              
// //               <Card.Body className="text-center compact-body">
// //                 <h3 className="welcome-title">Welcome to TSBI Studios</h3>
                
// //                 {/* Show user status if authenticated */}
// //                 {isAuthenticated && (
// //                   <div className="user-status">
// //                     <p className="text-muted">
// //                       Welcome back, <strong>{user?.name || 'User'}</strong>! 
// //                       {userType === 'admin' ? ' (Administrator)' : ''}
// //                     </p>
// //                     <Button 
// //                       variant="outline-secondary" 
// //                       size="sm"
// //                       onClick={handleLogout}
// //                       className="mt-2"
// //                     >
// //                       <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
// //                       Logout
// //                     </Button>
// //                   </div>
// //                 )}
                
// //                 <div className="options-container compact">
// //                   {/* Proposal Creation - Check authentication */}
// //                   <Link 
// //                     to={isAuthenticated ? "/proposal" : "/login"} 
// //                     className="option-link proposal-link"
// //                   >
// //                     <Card className="option-card proposal-card compact-card">
// //                       <Card.Body className="compact-option">
// //                         <div className="icon-container">
// //                           <FontAwesomeIcon icon={faFileAlt} className="option-icon" />
// //                         </div>
// //                         <h5>Create Proposal</h5>
// //                         <div className="card-action compact-action">
// //                           <span>{isAuthenticated ? 'Get Started' : 'Login Required'}</span>
// //                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
// //                         </div>
// //                       </Card.Body>
// //                     </Card>
// //                   </Link>
                  
// //                   {/* Admin Portal */}
// //                   <Link 
// //                     to={isAuthenticated && userType === 'admin' ? "/admin/dashboard" : "/admin/login"} 
// //                     className="option-link admin-link"
// //                   >
// //                     <Card className="option-card admin-card compact-card">
// //                       <Card.Body className="compact-option">
// //                         <div className="icon-container">
// //                           <FontAwesomeIcon icon={faLock} className="option-icon" />
// //                         </div>
// //                         <h5>Admin Portal</h5>
// //                         <div className="card-action compact-action">
// //                           <span>{isAuthenticated && userType === 'admin' ? 'Dashboard' : 'Sign In'}</span>
// //                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
// //                         </div>
// //                       </Card.Body>
// //                     </Card>
// //                   </Link>
// //                 </div>

// //                 {/* Show auth links if not authenticated */}
// //                 {!isAuthenticated && (
// //                   <div className="auth-links mt-4">
// //                     <p className="text-muted mb-3">New to TSBI Studios?</p>
// //                     <div className="d-flex justify-content-center gap-2 flex-wrap">
// //                       <Link to="/register" className="btn btn-outline-primary">
// //                         <FontAwesomeIcon icon={faUser} className="me-2" />
// //                         Create Account
// //                       </Link>
// //                       <Link to="/login" className="btn btn-link">
// //                         Already have an account?
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 )}
                
// //                 <footer className="home-footer">
// //                   <p>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</p>
// //                 </footer>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default HomePage;
// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Container, Row, Col, Image, Button } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileAlt, faLock, faArrowRight, faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
// import { useUserAuth } from '../contexts/UserAuthContext';
// import Logo from '../../public/Logo.png';
// import './HomePage.css';

// function HomePage() {
//   const { isAuthenticated, user, userType, logout } = useUserAuth();

//   // Add animation effect when the component mounts
//   useEffect(() => {
//     document.body.classList.add('home-page-active');
//     document.body.style.overflow = 'hidden'; // Prevent scrolling
    
//     return () => {
//       document.body.classList.remove('home-page-active');
//       document.body.style.overflow = ''; // Restore default
//     };
//   }, []);

//   const handleLogout = () => {
//     logout();
//     window.location.reload(); // Refresh page after logout
//   };

//   return (
//     <div className="home-page-wrapper">
//       <div className="background-container">
//         <div className="animated-shape shape1"></div>
//         <div className="animated-shape shape2"></div>
//         <div className="animated-shape shape3"></div>
//       </div>
      
//       <Container className="home-container">
//         <Row className="justify-content-center">
//           <Col xs={12} sm={10} md={8} lg={8} xl={7}>
//             <Card className="main-card compact">
//               <div className="logo-container compact">
//                 <Image 
//                   src={Logo} 
//                   alt="TSBI Studios Logo" 
//                   className="logo-image compact"
//                   fluid
//                 />
//               </div>
              
//               <Card.Body className="text-center compact-body">
//                 <h3 className="welcome-title">Welcome to TSBI Studios</h3>
                
//                 {/* Show user status if authenticated */}
//                 {isAuthenticated && (
//                   <div className="user-status">
//                     <p className="text-muted">
//                       Welcome back, <strong>{user?.name || 'User'}</strong>! 
//                       {userType === 'admin' ? ' (Administrator)' : ''}
//                     </p>
//                     <Button 
//                       variant="outline-secondary" 
//                       size="sm"
//                       onClick={handleLogout}
//                       className="mt-2"
//                     >
//                       <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
//                       Logout
//                     </Button>
//                   </div>
//                 )}
                
//                 <div className="options-container compact">
//                   {/* Proposal Creation - Check authentication */}
//                   <Link 
//                     to={isAuthenticated ? "/dashboard" : "/login"} 
//                     className="option-link proposal-link"
//                   >
//                     <Card className="option-card proposal-card compact-card">
//                       <Card.Body className="compact-option">
//                         <div className="icon-container">
//                           <FontAwesomeIcon icon={faFileAlt} className="option-icon" />
//                         </div>
//                         <h5>Create Proposal</h5>
//                         <div className="card-action compact-action">
//                           <span>{isAuthenticated ? 'Go to Dashboard' : 'Login Required'}</span>
//                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Link>
                  
//                   {/* Admin Portal */}
//                   <Link 
//                     to={isAuthenticated && userType === 'admin' ? "/admin/dashboard" : "/admin/login"} 
//                     className="option-link admin-link"
//                   >
//                     <Card className="option-card admin-card compact-card">
//                       <Card.Body className="compact-option">
//                         <div className="icon-container">
//                           <FontAwesomeIcon icon={faLock} className="option-icon" />
//                         </div>
//                         <h5>Admin Portal</h5>
//                         <div className="card-action compact-action">
//                           <span>{isAuthenticated && userType === 'admin' ? 'Dashboard' : 'Sign In'}</span>
//                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Link>
//                 </div>

//                 {/* Show auth links if not authenticated */}
//                 {!isAuthenticated && (
//                   <div className="auth-links mt-4">
//                     <p className="text-muted mb-3">New to TSBI Studios?</p>
//                     <div className="d-flex justify-content-center gap-2 flex-wrap">
//                       <Link to="/register" className="btn btn-outline-primary">
//                         <FontAwesomeIcon icon={faUser} className="me-2" />
//                         Create Account
//                       </Link>
//                       <Link to="/login" className="btn btn-link">
//                         Already have an account?
//                       </Link>
//                     </div>
//                   </div>
//                 )}
                
//                 <footer className="home-footer">
//                   <p>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</p>
//                 </footer>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default HomePage;
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