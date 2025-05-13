

// import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { Card, Container, Row, Col, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFileAlt, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../public/Logo.png'; // Make sure this path is correct
// import './HomePage.css'; // We'll create this CSS file for animations

// function HomePage() {
//   // Add animation effect when the component mounts
//   useEffect(() => {
//     document.body.classList.add('home-page-active');
    
//     return () => {
//       document.body.classList.remove('home-page-active');
//     };
//   }, []);

//   return (
//     <div className="home-page-wrapper">
//       <div className="background-container">
//         <div className="animated-shape shape1"></div>
//         <div className="animated-shape shape2"></div>
//         <div className="animated-shape shape3"></div>
//       </div>
      
//       <Container className="home-container">
//         <Row className="justify-content-center">
//           <Col xs={12} md={10} lg={8} xl={6}>
//             <Card className="main-card">
//               <div className="logo-container">
//                 <Image 
//                   src={Logo} 
//                   alt="TSBI Studios Logo" 
//                   className="logo-image"
//                   fluid
//                 />
//               </div>
              
//               <Card.Body className="text-center">
//                 <h2 className="welcome-title">Welcome to TSBI Studios</h2>
//                 <p className="welcome-subtitle">The creative hub for your production needs</p>
                
//                 <div className="options-container">
//                   <Link to="/proposal" className="option-link proposal-link">
//                     <Card className="option-card proposal-card">
//                       <Card.Body>
//                         <div className="icon-container">
//                           <FontAwesomeIcon icon={faFileAlt} className="option-icon" />
//                         </div>
//                         <h4>Create Proposal</h4>
//                         <p>Generate a new studio proposal for your client</p>
//                         <div className="card-action">
//                           <span>Get Started</span>
//                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Link>
                  
//                   <Link to="/admin/login" className="option-link admin-link">
//                     <Card className="option-card admin-card">
//                       <Card.Body>
//                         <div className="icon-container">
//                           <FontAwesomeIcon icon={faLock} className="option-icon" />
//                         </div>
//                         <h4>Admin Portal</h4>
//                         <p>Access the dashboard to manage services</p>
//                         <div className="card-action">
//                           <span>Sign In</span>
//                           <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
//                         </div>
//                       </Card.Body>
//                     </Card>
//                   </Link>
//                 </div>
                
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
import { Card, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faLock, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../public/Logo.png'; // Make sure this path is correct
import './HomePage.css';

function HomePage() {
  // Add animation effect when the component mounts
  useEffect(() => {
    document.body.classList.add('home-page-active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    return () => {
      document.body.classList.remove('home-page-active');
      document.body.style.overflow = ''; // Restore default
    };
  }, []);

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
                
                <div className="options-container compact">
                  <Link to="/proposal" className="option-link proposal-link">
                    <Card className="option-card proposal-card compact-card">
                      <Card.Body className="compact-option">
                        <div className="icon-container">
                          <FontAwesomeIcon icon={faFileAlt} className="option-icon" />
                        </div>
                        <h5>Create Proposal</h5>
                        <div className="card-action compact-action">
                          <span>Get Started</span>
                          <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                  
                  <Link to="/admin/login" className="option-link admin-link">
                    <Card className="option-card admin-card compact-card">
                      <Card.Body className="compact-option">
                        <div className="icon-container">
                          <FontAwesomeIcon icon={faLock} className="option-icon" />
                        </div>
                        <h5>Admin Portal</h5>
                        <div className="card-action compact-action">
                          <span>Sign In</span>
                          <FontAwesomeIcon icon={faArrowRight} className="action-icon" />
                        </div>
                      </Card.Body>
                    </Card>
                  </Link>
                </div>
                
                <footer className="home-footer">
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