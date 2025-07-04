
// // import React, { useState, useEffect } from 'react';
// // import { Tab, Nav, Button, Card, Container, Row, Col, Badge } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { 
// //   faGears, 
// //   faFileInvoice, 
// //   faPercentage, 
// //   faSignOutAlt,
// //   faTachometerAlt
// // } from '@fortawesome/free-solid-svg-icons';
// // import Services from './Services';
// // import Quotes from './Quotes';
// // import AgencyCommission from './AgencyCommission';
// // import Logo from '../../assets/Logo.png'; // Adjust the path as necessary

// // function AdminDashboard({ onLogout }) {
// //   const [activeTab, setActiveTab] = useState('services');
// //   const [animateHeader, setAnimateHeader] = useState(false);
  
// //   // Add animation effect when component mounts
// //   useEffect(() => {
// //     setAnimateHeader(true);
// //   }, []);

// //   return (
// //     <div className="admin-dashboard bg-light min-vh-100">
// //       {/* Header with shadow and gradient */}
// //       <header className="bg-white shadow-sm py-3 mb-4">
// //         <Container fluid>
// //           <Row className="align-items-center">
// //             <Col xs={6} md={3}>
// //               <img
// //                 src={Logo}
// //                 alt="TSBI Studios Logo"
// //                 style={{ 
// //                   maxHeight: '60px',
// //                   transition: 'transform 0.5s ease',
// //                   transform: animateHeader ? 'translateY(0)' : 'translateY(-20px)',
// //                   opacity: animateHeader ? 1 : 0
// //                 }}
// //               />
// //             </Col>
// //             <Col xs={6} md={6} className="text-center">
// //               <h2 
// //                 className="fw-bold mb-0"
// //                 style={{ 
// //                   background: 'linear-gradient(90deg, #3a0ca3 0%, #f72585 100%)',
// //                   WebkitBackgroundClip: 'text',
// //                   WebkitTextFillColor: 'transparent',
// //                   transition: 'opacity 0.8s ease-in-out',
// //                   opacity: animateHeader ? 1 : 0
// //                 }}
// //               >
// //                 TSBI Studios Admin Portal
// //               </h2>
// //             </Col>
// //             <Col xs={12} md={3} className="text-end mt-3 mt-md-0">
// //               <Button 
// //                 variant="outline-danger" 
// //                 onClick={onLogout}
// //                 className="d-flex align-items-center ms-auto"
// //               >
// //                 <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
// //                 Logout
// //               </Button>
// //             </Col>
// //           </Row>
// //         </Container>
// //       </header>
      
// //       <Container className="pb-5">
// //         {/* Dashboard overview cards */}
// //         <Row className="mb-4 dashboard-stats">
// //           <Col md={4} className="mb-3">
// //             <Card className="border-0 shadow-sm h-100 dashboard-card">
// //               <Card.Body className="d-flex align-items-center">
// //                 <div className="rounded-circle p-3 me-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
// //                   <FontAwesomeIcon icon={faTachometerAlt} className="text-primary fa-2x" />
// //                 </div>
// //                 <div>
// //                   <div className="text-muted small">Dashboard</div>
// //                   <div className="fs-5 fw-bold">Admin Control Panel</div>
// //                 </div>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //           <Col md={8} className="mb-3">
// //             <Card className="border-0 shadow-sm h-100 dashboard-card">
// //               <Card.Body>
// //                 <p className="mb-0">
// //                   Welcome to the TSBI Studios admin dashboard. Here you can manage services, view proposals, 
// //                   and set agency commission rates. Use the tabs below to navigate between sections.
// //                 </p>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>
        
// //         {/* Main content area with tabs */}
// //         <Card className="border-0 shadow-sm">
// //           <Card.Header className="bg-white border-0 pt-3 pb-0">
// //             <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
// //               <Nav variant="tabs" className="nav-tabs-custom">
// //                 <Nav.Item>
// //                   <Nav.Link 
// //                     eventKey="services" 
// //                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'services' ? 'active' : ''}`}
// //                   >
// //                     <FontAwesomeIcon icon={faGears} className="me-2" />
// //                     <span>Manage Services</span>
// //                   </Nav.Link>
// //                 </Nav.Item>
// //                 <Nav.Item>
// //                   <Nav.Link 
// //                     eventKey="quotes" 
// //                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'quotes' ? 'active' : ''}`}
// //                   >
// //                     <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
// //                     <span>View Quotes</span>
// //                   </Nav.Link>
// //                 </Nav.Item>
// //                 <Nav.Item>
// //                   <Nav.Link 
// //                     eventKey="commission" 
// //                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'commission' ? 'active' : ''}`}
// //                   >
// //                     <FontAwesomeIcon icon={faPercentage} className="me-2" />
// //                     <span>Agency Commission</span>
// //                     <Badge bg="primary" pill className="ms-2">New</Badge>

// //                   </Nav.Link>
// //                 </Nav.Item>
// //               </Nav>
          
// //               <Card.Body className="p-4">
// //                 <Tab.Content>
// //                   <Tab.Pane eventKey="services">
// //                     <Services />
// //                   </Tab.Pane>
// //                   <Tab.Pane eventKey="quotes">
// //                     <Quotes />
// //                   </Tab.Pane>
// //                   <Tab.Pane eventKey="commission">
// //                     <AgencyCommission />
// //                   </Tab.Pane>
// //                 </Tab.Content>
// //               </Card.Body>
// //             </Tab.Container>
// //           </Card.Header>
// //         </Card>
// //       </Container>
      
// //       {/* Footer */}
// //       <footer style={{backgroundColor:'gray' , fontWeight:'bold'}} className="bg-white shadow-md  py-3 mt-5">
// //         <Container>
// //           <div className="d-flex justify-content-between align-items-center">
// //             <div>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</div>
// //             <div className="text-end">TSBI Studios Admin Panel</div>
// //           </div>
// //         </Container>
// //       </footer>

// //       {/* CSS for custom styling */}
// //       <style jsx>{`
// //         .nav-tabs-custom .nav-link {
// //           border: none;
// //           border-bottom: 3px solid transparent;
// //           border-radius: 0;
// //           font-weight: 500;
// //           color: #6c757d;
// //           transition: all 0.3s ease;
// //         }
        
// //         .nav-tabs-custom .nav-link:hover {
// //           color: #0d6efd;
// //           background-color: rgba(13, 110, 253, 0.05);
// //         }
        
// //         .nav-tabs-custom .nav-link.active {
// //           color: #0d6efd;
// //           background-color: transparent;
// //           border-bottom-color: #0d6efd;
// //         }
        
// //         .dashboard-card {
// //           transition: transform 0.3s ease;
// //         }
        
// //         .dashboard-card:hover {
// //           transform: translateY(-5px);
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default AdminDashboard;
// import React, { useState, useEffect } from 'react';
// import { Tab, Nav, Button, Card, Container, Row, Col, Badge } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faGears, 
//   faFileInvoice, 
//   faPercentage, 
//   faSignOutAlt,
//   faTachometerAlt,
//   faDatabase
// } from '@fortawesome/free-solid-svg-icons';
// import Services from './Services';
// import Quotes from './Quotes';
// import AgencyCommission from './AgencyCommission';
// import DynamicTables from './DynamicTables'; // Import the new component
// import Logo from '../../assets/Logo.png';

// function AdminDashboard({ onLogout }) {
//   const [activeTab, setActiveTab] = useState('services');
//   const [animateHeader, setAnimateHeader] = useState(false);
  
//   useEffect(() => {
//     setAnimateHeader(true);
//   }, []);

//   return (
//     <div className="admin-dashboard bg-light min-vh-100"style={{border:'1px solid red'}} >
//       {/* Header with shadow and gradient */}
//       <header className="bg-white shadow-sm py-3 mb-4" >
//         <Container fluid>
//           <Row className="align-items-center">
//             <Col xs={6} md={3}>
//               <img
//                 src={Logo}
//                 alt="TSBI Studios Logo"
//                 style={{ 
//                   maxHeight: '60px',
//                   transition: 'transform 0.5s ease',
//                   transform: animateHeader ? 'translateY(0)' : 'translateY(-20px)',
//                   opacity: animateHeader ? 1 : 0
//                 }}
//               />
//             </Col>
//             <Col xs={6} md={6} className="text-center">
//               <h2 
//                 className="fw-bold mb-0"
//                 style={{ 
//                   background: 'linear-gradient(90deg, #3a0ca3 0%, #f72585 100%)',
//                   WebkitBackgroundClip: 'text',
//                   WebkitTextFillColor: 'transparent',
//                   transition: 'opacity 0.8s ease-in-out',
//                   opacity: animateHeader ? 1 : 0
//                 }}
//               >
//                 TSBI Studios Admin Portal
//               </h2>
//             </Col>
//             <Col xs={12} md={3} className="text-end mt-3 mt-md-0">
//               <Button 
//                 variant="outline-danger" 
//                 onClick={onLogout}
//                 className="d-flex align-items-center ms-auto"
//               >
//                 <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
//                 Logout
//               </Button>
//             </Col>
//           </Row>
//         </Container>
//       </header>
      
//       <Container className="pb-5 " >
//         {/* Dashboard overview cards */}
//         <Row className="mb-4 dashboard-stats">
//           <Col md={4} className="mb-3">
//             <Card className="border-0 shadow-sm h-100 dashboard-card">
//               <Card.Body className="d-flex align-items-center">
//                 <div className="rounded-circle p-3 me-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
//                   <FontAwesomeIcon icon={faTachometerAlt} className="text-primary fa-2x" />
//                 </div>
//                 <div>
//                   <div className="text-muted small">Dashboard</div>
//                   <div className="fs-5 fw-bold">Admin Control Panel</div>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//           <Col md={8} className="mb-3">
//             <Card className="border-0 shadow-sm h-100 dashboard-card">
//               <Card.Body>
//                 <p className="mb-0">
//                   Welcome to the TSBI Studios admin dashboard. Here you can manage services, view proposals, 
//                   set agency commission rates, and create custom data tables for your business needs.
//                 </p>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
        
//         {/* Main content area with tabs */}
//         <Card className="border-0 shadow-sm">
//           <Card.Header className="bg-white border-0 pt-3 pb-0">
//             <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
//               <Nav variant="tabs" className="nav-tabs-custom">
//                 <Nav.Item>
//                   <Nav.Link 
//                     eventKey="services" 
//                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'services' ? 'active' : ''}`}
//                   >
//                     <FontAwesomeIcon icon={faGears} className="me-2" />
//                     <span>Manage Services</span>
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     eventKey="quotes" 
//                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'quotes' ? 'active' : ''}`}
//                   >
//                     <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
//                     <span>View Quotes</span>
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     eventKey="tables" 
//                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'tables' ? 'active' : ''}`}
//                   >
//                     <FontAwesomeIcon icon={faDatabase} className="me-2" />
//                     <span>Dynamic Tables</span>
//                     <Badge bg="success" pill className="ms-2">New</Badge>
//                   </Nav.Link>
//                 </Nav.Item>
//                 <Nav.Item>
//                   <Nav.Link 
//                     eventKey="commission" 
//                     className={`px-4 py-3 d-flex align-items-center ${activeTab === 'commission' ? 'active' : ''}`}
//                   >
//                     <FontAwesomeIcon icon={faPercentage} className="me-2" />
//                     <span>Agency Commission</span>
//                   </Nav.Link>
//                 </Nav.Item>
//               </Nav>
          
//               <Card.Body className="p-4">
//                 <Tab.Content>
//                   <Tab.Pane eventKey="services">
//                     <Services />
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="quotes">
//                     <Quotes />
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="tables">
//                     <DynamicTables />
//                   </Tab.Pane>
//                   <Tab.Pane eventKey="commission">
//                     <AgencyCommission />
//                   </Tab.Pane>
//                 </Tab.Content>
//               </Card.Body>
//             </Tab.Container>
//           </Card.Header>
//         </Card>
//       </Container>
      
//       {/* Footer */}
//       <footer style={{backgroundColor:'gray' , fontWeight:'bold'}} className="bg-white shadow-md py-3 mt-5">
//         <Container>
//           <div className="d-flex justify-content-between align-items-center">
//             <div>© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</div>
//             <div className="text-end">TSBI Studios Admin Panel</div>
//           </div>
//         </Container>
//       </footer>

//       {/* CSS for custom styling */}
//       <style jsx>{`
//         .nav-tabs-custom .nav-link {
//           border: none;
//           border-bottom: 3px solid transparent;
//           border-radius: 0;
//           font-weight: 500;
//           color: #6c757d;
//           transition: all 0.3s ease;
//         }
        
//         .nav-tabs-custom .nav-link:hover {
//           color: #0d6efd;
//           background-color: rgba(13, 110, 253, 0.05);
//         }
        
//         .nav-tabs-custom .nav-link.active {
//           color: #0d6efd;
//           background-color: transparent;
//           border-bottom-color: #0d6efd;
//         }
        
//         .dashboard-card {
//           transition: transform 0.3s ease;
//         }
        
//         .dashboard-card:hover {
//           transform: translateY(-5px);
//         }
//       `}</style>
//     </div>
//   );
// }

// export default AdminDashboard;
import React, { useState, useEffect } from 'react';
import { Tab, Nav, Button, Card, Container, Row, Col, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faGears, 
  faFileInvoice, 
  faPercentage, 
  faSignOutAlt,
  faTachometerAlt,
  faDatabase
} from '@fortawesome/free-solid-svg-icons';
import Services from './Services';
import Quotes from './Quotes';
import AgencyCommission from './AgencyCommission';
import DynamicTables from './DynamicTables';
import Logo from '../../assets/Logo.png';

function AdminDashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('services');
  const [animateHeader, setAnimateHeader] = useState(false);
  
  useEffect(() => {
    setAnimateHeader(true);
  }, []);

  return (
    <div className="admin-dashboard bg-light min-vh-100">
      {/* Header with shadow and gradient */}
      <header className="bg-white shadow-sm py-3 mb-4">
        <Container fluid className="px-4">
          <Row className="align-items-center">
            <Col xs={6} lg={2}>
              <img
                src={Logo}
                alt="TSBI Studios Logo"
                style={{ 
                  maxHeight: '50px',
                  transition: 'transform 0.5s ease',
                  transform: animateHeader ? 'translateY(0)' : 'translateY(-20px)',
                  opacity: animateHeader ? 1 : 0
                }}
              />
            </Col>
            <Col xs={12} lg={8} className="text-center mt-2 mt-lg-0">
              <h2 
                className="fw-bold mb-0"
                style={{ 
                  background: 'linear-gradient(90deg, #3a0ca3 0%, #f72585 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  transition: 'opacity 0.8s ease-in-out',
                  opacity: animateHeader ? 1 : 0,
                  fontSize: '1.75rem'
                }}
              >
                TSBI Studios Admin Portal
              </h2>
            </Col>
            <Col xs={6} lg={2} className="text-end mt-2 mt-lg-0">
              <Button 
                variant="outline-danger" 
                onClick={onLogout}
                size="sm"
                className="d-flex align-items-center ms-auto"
              >
                <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                Logout
              </Button>
            </Col>
          </Row>
        </Container>
      </header>
      
      {/* Full width container */}
      <Container fluid className="px-4 pb-5">
        {/* Dashboard overview cards - more compact */}
        <Row className="mb-4 dashboard-stats g-3">
          <Col lg={3} md={6} className="mb-3">
            <Card className="border-0 shadow-sm h-100 dashboard-card">
              <Card.Body className="d-flex align-items-center p-3">
                <div className="rounded-circle p-2 me-3" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                  <FontAwesomeIcon icon={faTachometerAlt} className="text-primary fa-lg" />
                </div>
                <div>
                  <div className="text-muted small">Dashboard</div>
                  <div className="fs-6 fw-bold">Admin Control</div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg={9} md={6} className="mb-3">
            <Card className="border-0 shadow-sm h-100 dashboard-card">
              <Card.Body className="p-3">
                <p className="mb-0 small">
                  Welcome to the TSBI Studios admin dashboard. Manage services, view proposals, 
                  set commission rates, and create custom data tables.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        
        {/* Main content area with tabs - full width */}
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white border-0 pt-3 pb-0">
            <Tab.Container activeKey={activeTab} onSelect={setActiveTab}>
              <Nav variant="tabs" className="nav-tabs-custom">
                <Nav.Item>
                  <Nav.Link 
                    eventKey="services" 
                    className={`px-3 py-2 d-flex align-items-center ${activeTab === 'services' ? 'active' : ''}`}
                  >
                    <FontAwesomeIcon icon={faGears} className="me-2" />
                    <span>Manage Services</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="quotes" 
                    className={`px-3 py-2 d-flex align-items-center ${activeTab === 'quotes' ? 'active' : ''}`}
                  >
                    <FontAwesomeIcon icon={faFileInvoice} className="me-2" />
                    <span>View Quotes</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="tables" 
                    className={`px-3 py-2 d-flex align-items-center ${activeTab === 'tables' ? 'active' : ''}`}
                  >
                    <FontAwesomeIcon icon={faDatabase} className="me-2" />
                    <span>Dynamic Tables</span>
                    <Badge bg="success" pill className="ms-2" style={{ fontSize: '0.65rem' }}>New</Badge>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link 
                    eventKey="commission" 
                    className={`px-3 py-2 d-flex align-items-center ${activeTab === 'commission' ? 'active' : ''}`}
                  >
                    <FontAwesomeIcon icon={faPercentage} className="me-2" />
                    <span>Agency Commission</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
          
              <Card.Body className="p-3">
                <Tab.Content>
                  <Tab.Pane eventKey="services">
                    <Services />
                  </Tab.Pane>
                  <Tab.Pane eventKey="quotes">
                    <Quotes />
                  </Tab.Pane>
                  <Tab.Pane eventKey="tables">
                    <DynamicTables />
                  </Tab.Pane>
                  <Tab.Pane eventKey="commission">
                    <AgencyCommission />
                  </Tab.Pane>
                </Tab.Content>
              </Card.Body>
            </Tab.Container>
          </Card.Header>
        </Card>
      </Container>
      
      {/* Footer */}
      <footer className="bg-white shadow-md py-3 mt-5">
        <Container fluid className="px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="small">© {new Date().getFullYear()} The Small Big Idea. All rights reserved.</div>
            <div className="text-end small">TSBI Studios Admin Panel</div>
          </div>
        </Container>
      </footer>

      {/* CSS for custom styling */}
      <style jsx>{`
        .nav-tabs-custom .nav-link {
          border: none;
          border-bottom: 3px solid transparent;
          border-radius: 0;
          font-weight: 500;
          color: #6c757d;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }
        
        .nav-tabs-custom .nav-link:hover {
          color: #0d6efd;
          background-color: rgba(13, 110, 253, 0.05);
        }
        
        .nav-tabs-custom .nav-link.active {
          color: #0d6efd;
          background-color: transparent;
          border-bottom-color: #0d6efd;
        }
        
        .dashboard-card {
          transition: transform 0.3s ease;
        }
        
        .dashboard-card:hover {
          transform: translateY(-3px);
        }
        
        @media (max-width: 768px) {
          .nav-tabs-custom .nav-link span {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </div>
  );
}

export default AdminDashboard;