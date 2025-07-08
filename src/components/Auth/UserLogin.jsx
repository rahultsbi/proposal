// // // // // import React, { useState } from 'react';
// // // // // import { useNavigate, Link } from 'react-router-dom';
// // // // // import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// // // // // import { userLogin, setUserToken } from '../../services/api';
// // // // // import Logo from '../../../public/Logo.png';
// // // // // import './UserAuth.css';

// // // // // function UserLogin() {
// // // // //   const [formData, setFormData] = useState({
// // // // //     email: '',
// // // // //     password: ''
// // // // //   });
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [error, setError] = useState('');
// // // // //   const navigate = useNavigate();

// // // // //   const handleChange = (e) => {
// // // // //     setFormData({
// // // // //       ...formData,
// // // // //       [e.target.name]: e.target.value
// // // // //     });
// // // // //     setError(''); // Clear error when user types
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     setIsLoading(true);
// // // // //     setError('');

// // // // //     try {
// // // // //       const response = await userLogin(formData);
      
// // // // //       if (response.data.success) {
// // // // //         // Store token and user info
// // // // //         setUserToken(response.data.token);
// // // // //         localStorage.setItem('userData', JSON.stringify(response.data.user));
        
// // // // //         // Redirect to proposal page
// // // // //         navigate('/proposal');
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error('Login error:', error);
// // // // //       setError(
// // // // //         error.response?.data?.error || 
// // // // //         'Login failed. Please check your credentials.'
// // // // //       );
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <div className="auth-page-wrapper">
// // // // //       <div className="background-container">
// // // // //         <div className="animated-shape shape1"></div>
// // // // //         <div className="animated-shape shape2"></div>
// // // // //         <div className="animated-shape shape3"></div>
// // // // //       </div>

// // // // //       <Container className="auth-container">
// // // // //         <Row className="justify-content-center">
// // // // //           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
// // // // //             <Card className="auth-card">
// // // // //               <div className="logo-container">
// // // // //                 <Image
// // // // //                   src={Logo}
// // // // //                   alt="TSBI Studios Logo"
// // // // //                   className="logo-image"
// // // // //                   fluid
// // // // //                 />
// // // // //               </div>

// // // // //               <Card.Body>
// // // // //                 <div className="auth-header">
// // // // //                   <h3 className="auth-title">Welcome Back</h3>
// // // // //                   <p className="auth-subtitle">Sign in to create proposals</p>
// // // // //                 </div>

// // // // //                 {error && (
// // // // //                   <Alert variant="danger" className="auth-alert">
// // // // //                     {error}
// // // // //                   </Alert>
// // // // //                 )}

// // // // //                 <Form onSubmit={handleSubmit}>
// // // // //                   <Form.Group className="mb-3">
// // // // //                     <Form.Label>Email Address</Form.Label>
// // // // //                     <div className="input-with-icon">
// // // // //                       <FontAwesomeIcon icon={faUser} className="input-icon" />
// // // // //                       <Form.Control
// // // // //                         type="email"
// // // // //                         name="email"
// // // // //                         value={formData.email}
// // // // //                         onChange={handleChange}
// // // // //                         placeholder="Enter your email"
// // // // //                         required
// // // // //                         className="auth-input"
// // // // //                       />
// // // // //                     </div>
// // // // //                   </Form.Group>

// // // // //                   <Form.Group className="mb-4">
// // // // //                     <Form.Label>Password</Form.Label>
// // // // //                     <div className="input-with-icon password-input">
// // // // //                       <FontAwesomeIcon icon={faLock} className="input-icon" />
// // // // //                       <Form.Control
// // // // //                         type={showPassword ? 'text' : 'password'}
// // // // //                         name="password"
// // // // //                         value={formData.password}
// // // // //                         onChange={handleChange}
// // // // //                         placeholder="Enter your password"
// // // // //                         required
// // // // //                         className="auth-input"
// // // // //                       />
// // // // //                       <Button
// // // // //                         variant="link"
// // // // //                         className="password-toggle"
// // // // //                         onClick={() => setShowPassword(!showPassword)}
// // // // //                         type="button"
// // // // //                       >
// // // // //                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// // // // //                       </Button>
// // // // //                     </div>
// // // // //                   </Form.Group>

// // // // //                   <Button
// // // // //                     variant="primary"
// // // // //                     type="submit"
// // // // //                     className="auth-submit-btn w-100"
// // // // //                     disabled={isLoading}
// // // // //                   >
// // // // //                     {isLoading ? 'Signing In...' : 'Sign In'}
// // // // //                   </Button>
// // // // //                 </Form>

// // // // //                 <div className="auth-footer">
// // // // //                   <p>
// // // // //                     Don't have an account?{' '}
// // // // //                     <Link to="/register" className="auth-link">
// // // // //                       Sign up here
// // // // //                     </Link>
// // // // //                   </p>
// // // // //                   <Link to="/" className="auth-link">
// // // // //                     ← Back to Home
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               </Card.Body>
// // // // //             </Card>
// // // // //           </Col>
// // // // //         </Row>
// // // // //       </Container>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default UserLogin;
// // // // import React, { useState } from 'react';
// // // // import { useNavigate, Link } from 'react-router-dom';
// // // // import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// // // // import { userLogin, setUserToken } from '../../services/api';
// // // // import Logo from '../../assets/Logo.png'; // Update path based on your structure
// // // // import './UserAuth.css';

// // // // function UserLogin() {
// // // //   const [formData, setFormData] = useState({
// // // //     email: '',
// // // //     password: ''
// // // //   });
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [error, setError] = useState('');
// // // //   const navigate = useNavigate();

// // // //   const handleChange = (e) => {
// // // //     setFormData({
// // // //       ...formData,
// // // //       [e.target.name]: e.target.value
// // // //     });
// // // //     setError(''); // Clear error when user types
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     setIsLoading(true);
// // // //     setError('');

// // // //     try {
// // // //       const response = await userLogin(formData);
      
// // // //       if (response.data.success) {
// // // //         // Store token and user info
// // // //         setUserToken(response.data.token);
// // // //         localStorage.setItem('userData', JSON.stringify(response.data.user));
        
// // // //         // Redirect to proposal page
// // // //         navigate('/proposal');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Login error:', error);
// // // //       setError(
// // // //         error.response?.data?.error || 
// // // //         'Login failed. Please check your credentials.'
// // // //       );
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="auth-page-wrapper">
// // // //       <div className="background-container">
// // // //         <div className="animated-shape shape1"></div>
// // // //         <div className="animated-shape shape2"></div>
// // // //         <div className="animated-shape shape3"></div>
// // // //       </div>

// // // //       <Container className="auth-container">
// // // //         <Row className="justify-content-center">
// // // //           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
// // // //             <Card className="auth-card">
// // // //               <div className="logo-container">
// // // //                 <Image
// // // //                   src={Logo}
// // // //                   alt="TSBI Studios Logo"
// // // //                   className="logo-image"
// // // //                   fluid
// // // //                   onError={(e) => {
// // // //                     e.target.style.display = 'none';
// // // //                   }}
// // // //                 />
// // // //               </div>

// // // //               <Card.Body>
// // // //                 <div className="auth-header">
// // // //                   <h3 className="auth-title">Welcome Back</h3>
// // // //                   <p className="auth-subtitle">Sign in to create proposals</p>
// // // //                 </div>

// // // //                 {error && (
// // // //                   <Alert variant="danger" className="auth-alert">
// // // //                     {error}
// // // //                   </Alert>
// // // //                 )}

// // // //                 <Form onSubmit={handleSubmit}>
// // // //                   <Form.Group className="mb-3">
// // // //                     <Form.Label>Email Address</Form.Label>
// // // //                     <div className="input-with-icon">
// // // //                       <FontAwesomeIcon icon={faUser} className="input-icon" />
// // // //                       <Form.Control
// // // //                         type="email"
// // // //                         name="email"
// // // //                         value={formData.email}
// // // //                         onChange={handleChange}
// // // //                         placeholder="Enter your email"
// // // //                         required
// // // //                         className="auth-input"
// // // //                       />
// // // //                     </div>
// // // //                   </Form.Group>

// // // //                   <Form.Group className="mb-4">
// // // //                     <Form.Label>Password</Form.Label>
// // // //                     <div className="input-with-icon password-input">
// // // //                       <FontAwesomeIcon icon={faLock} className="input-icon" />
// // // //                       <Form.Control
// // // //                         type={showPassword ? 'text' : 'password'}
// // // //                         name="password"
// // // //                         value={formData.password}
// // // //                         onChange={handleChange}
// // // //                         placeholder="Enter your password"
// // // //                         required
// // // //                         className="auth-input"
// // // //                       />
// // // //                       <Button
// // // //                         variant="link"
// // // //                         className="password-toggle"
// // // //                         onClick={() => setShowPassword(!showPassword)}
// // // //                         type="button"
// // // //                       >
// // // //                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// // // //                       </Button>
// // // //                     </div>
// // // //                   </Form.Group>

// // // //                   <Button
// // // //                     variant="primary"
// // // //                     type="submit"
// // // //                     className="auth-submit-btn w-100"
// // // //                     disabled={isLoading}
// // // //                   >
// // // //                     {isLoading ? 'Signing In...' : 'Sign In'}
// // // //                   </Button>
// // // //                 </Form>

// // // //                 <div className="auth-footer">
// // // //                   <p>
// // // //                     Don't have an account?{' '}
// // // //                     <Link to="/register" className="auth-link">
// // // //                       Sign up here
// // // //                     </Link>
// // // //                   </p>
// // // //                   <Link to="/" className="auth-link">
// // // //                     ← Back to Home
// // // //                   </Link>
// // // //                 </div>
// // // //               </Card.Body>
// // // //             </Card>
// // // //           </Col>
// // // //         </Row>
// // // //       </Container>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default UserLogin;
// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// // // import { userLogin, setUserToken } from '../../services/api';
// // // import Logo from '../../assets/Logo.png'; // Update path based on your structure
// // // import './UserAuth.css';

// // // function UserLogin() {
// // //   const [formData, setFormData] = useState({
// // //     email: '',
// // //     password: ''
// // //   });
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //     setError(''); // Clear error when user types
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsLoading(true);
// // //     setError('');

// // //     try {
// // //       const response = await userLogin(formData);
      
// // //       if (response.data.success) {
// // //         // Store token and user info
// // //         setUserToken(response.data.token);
// // //         localStorage.setItem('userData', JSON.stringify(response.data.user));
        
// // //         // Redirect to proposal page
// // //         navigate('/proposal');
// // //       }
// // //     } catch (error) {
// // //       console.error('Login error:', error);
// // //       setError(
// // //         error.response?.data?.error || 
// // //         'Login failed. Please check your credentials.'
// // //       );
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div className="auth-page-wrapper">
// // //       <div className="background-container">
// // //         <div className="animated-shape shape1"></div>
// // //         <div className="animated-shape shape2"></div>
// // //         <div className="animated-shape shape3"></div>
// // //       </div>

// // //       <Container className="auth-container normal">
// // //         <Row className="justify-content-center">
// // //           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
// // //             <Card className="auth-card">
// // //               <div className="logo-container">
// // //                 <Image
// // //                   src={Logo}
// // //                   alt="TSBI Studios Logo"
// // //                   className="logo-image"
// // //                   fluid
// // //                   onError={(e) => {
// // //                     e.target.style.display = 'none';
// // //                   }}
// // //                 />
// // //               </div>

// // //               <Card.Body>
// // //                 <div className="auth-header">
// // //                   <h3 className="auth-title">Welcome Back</h3>
// // //                   <p className="auth-subtitle">Sign in to create proposals</p>
// // //                 </div>

// // //                 {error && (
// // //                   <Alert variant="danger" className="auth-alert">
// // //                     {error}
// // //                   </Alert>
// // //                 )}

// // //                 <Form onSubmit={handleSubmit}>
// // //                   <Form.Group className="mb-3">
// // //                     <Form.Label>Email Address</Form.Label>
// // //                     <div className="input-with-icon">
// // //                       <FontAwesomeIcon icon={faUser} className="input-icon" />
// // //                       <Form.Control
// // //                         type="email"
// // //                         name="email"
// // //                         value={formData.email}
// // //                         onChange={handleChange}
// // //                         placeholder="Enter your email"
// // //                         required
// // //                         className="auth-input"
// // //                       />
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Form.Group className="mb-4">
// // //                     <Form.Label>Password</Form.Label>
// // //                     <div className="input-with-icon password-input">
// // //                       <FontAwesomeIcon icon={faLock} className="input-icon" />
// // //                       <Form.Control
// // //                         type={showPassword ? 'text' : 'password'}
// // //                         name="password"
// // //                         value={formData.password}
// // //                         onChange={handleChange}
// // //                         placeholder="Enter your password"
// // //                         required
// // //                         className="auth-input"
// // //                       />
// // //                       <Button
// // //                         variant="link"
// // //                         className="password-toggle"
// // //                         onClick={() => setShowPassword(!showPassword)}
// // //                         type="button"
// // //                       >
// // //                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// // //                       </Button>
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Button
// // //                     variant="primary"
// // //                     type="submit"
// // //                     className="auth-submit-btn w-100"
// // //                     disabled={isLoading}
// // //                   >
// // //                     {isLoading ? 'Signing In...' : 'Sign In'}
// // //                   </Button>
// // //                 </Form>

// // //                 <div className="auth-footer">
// // //                   <p>
// // //                     Don't have an account?{' '}
// // //                     <Link to="/register" className="auth-link">
// // //                       Sign up here
// // //                     </Link>
// // //                   </p>
// // //                   <Link to="/" className="auth-link">
// // //                     ← Back to Home
// // //                   </Link>
// // //                 </div>
// // //               </Card.Body>
// // //             </Card>
// // //           </Col>
// // //         </Row>
// // //       </Container>
// // //     </div>
// // //   );
// // // }

// // // export default UserLogin;
// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// // import { userLogin, setUserToken } from '../../services/api';
// // import { useUserAuth } from '../../contexts/UserAuthContext';
// // import Logo from '../../assets/Logo.png';
// // import './UserAuth.css';

// // function UserLogin() {
// //   const [formData, setFormData] = useState({
// //     email: '',
// //     password: ''
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const navigate = useNavigate();
// //   const { login } = useUserAuth();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //     setError(''); // Clear error when user types
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError('');

// //     try {
// //       const response = await userLogin(formData);
      
// //       if (response.data.success) {
// //         // Store token and user info
// //         setUserToken(response.data.token);
        
// //         // Use auth context to set authentication state
// //         login(response.data.user, response.data.token, 'user');
        
// //         // Navigate to proposal page
// //         navigate('/proposal');
// //       }
// //     } catch (error) {
// //       console.error('Login error:', error);
// //       setError(
// //         error.response?.data?.error || 
// //         'Login failed. Please check your credentials.'
// //       );
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   return (
// //     <div className="auth-page-wrapper">
// //       <div className="background-container">
// //         <div className="animated-shape shape1"></div>
// //         <div className="animated-shape shape2"></div>
// //         <div className="animated-shape shape3"></div>
// //       </div>

// //       <Container className="auth-container normal">
// //         <Row className="justify-content-center">
// //           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
// //             <Card className="auth-card">
// //               <div className="logo-container">
// //                 <Image
// //                   src={Logo}
// //                   alt="TSBI Studios Logo"
// //                   className="logo-image"
// //                   fluid
// //                   onError={(e) => {
// //                     e.target.style.display = 'none';
// //                   }}
// //                 />
// //               </div>

// //               <Card.Body>
// //                 <div className="auth-header">
// //                   <h3 className="auth-title">Welcome Back</h3>
// //                   <p className="auth-subtitle">Sign in to create proposals</p>
// //                 </div>

// //                 {error && (
// //                   <Alert variant="danger" className="auth-alert">
// //                     {error}
// //                   </Alert>
// //                 )}

// //                 <Form onSubmit={handleSubmit}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Email Address</Form.Label>
// //                     <div className="input-with-icon">
// //                       <FontAwesomeIcon icon={faUser} className="input-icon" />
// //                       <Form.Control
// //                         type="email"
// //                         name="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         placeholder="Enter your email"
// //                         required
// //                         className="auth-input"
// //                       />
// //                     </div>
// //                   </Form.Group>

// //                   <Form.Group className="mb-4">
// //                     <Form.Label>Password</Form.Label>
// //                     <div className="input-with-icon password-input">
// //                       <FontAwesomeIcon icon={faLock} className="input-icon" />
// //                       <Form.Control
// //                         type={showPassword ? 'text' : 'password'}
// //                         name="password"
// //                         value={formData.password}
// //                         onChange={handleChange}
// //                         placeholder="Enter your password"
// //                         required
// //                         className="auth-input"
// //                       />
// //                       <Button
// //                         variant="link"
// //                         className="password-toggle"
// //                         onClick={() => setShowPassword(!showPassword)}
// //                         type="button"
// //                       >
// //                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// //                       </Button>
// //                     </div>
// //                   </Form.Group>

// //                   <Button
// //                     variant="primary"
// //                     type="submit"
// //                     className="auth-submit-btn w-100"
// //                     disabled={isLoading}
// //                   >
// //                     {isLoading ? 'Signing In...' : 'Sign In'}
// //                   </Button>
// //                 </Form>

// //                 <div className="auth-footer">
// //                   <p>
// //                     Don't have an account?{' '}
// //                     <Link to="/register" className="auth-link">
// //                       Sign up here
// //                     </Link>
// //                   </p>
// //                   <Link to="/" className="auth-link">
// //                     ← Back to Home
// //                   </Link>
// //                 </div>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Container>
// //     </div>
// //   );
// // }

// // export default UserLogin;
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash, faUser, faLock } from '@fortawesome/free-solid-svg-icons';
// import { userLogin, setUserToken } from '../../services/api';
// import { useUserAuth } from '../../contexts/UserAuthContext';
// import Logo from '../../assets/Logo.png';
// import './UserAuth.css';

// function UserLogin() {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const navigate = useNavigate();
//   const { login } = useUserAuth();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError(''); // Clear error when user types
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     try {
//       const response = await userLogin(formData);
      
//       if (response.data.success) {
//         // Store token and user info
//         setUserToken(response.data.token);
        
//         // Use auth context to set authentication state
//         login(response.data.user, response.data.token, 'user');
        
//         // Navigate to dashboard page
//         navigate('/dashboard');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setError(
//         error.response?.data?.error || 
//         'Login failed. Please check your credentials.'
//       );
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="auth-page-wrapper">
//       <div className="background-container">
//         <div className="animated-shape shape1"></div>
//         <div className="animated-shape shape2"></div>
//         <div className="animated-shape shape3"></div>
//       </div>

//       <Container className="auth-container normal">
//         <Row className="justify-content-center">
//           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
//             <Card className="auth-card">
//               <div className="logo-container">
//                 <Image
//                   src={Logo}
//                   alt="TSBI Studios Logo"
//                   className="logo-image"
//                   fluid
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                   }}
//                 />
//               </div>

//               <Card.Body>
//                 <div className="auth-header">
//                   <h3 className="auth-title">Welcome Back</h3>
//                   <p className="auth-subtitle">Sign in to create proposals</p>
//                 </div>

//                 {error && (
//                   <Alert variant="danger" className="auth-alert">
//                     {error}
//                   </Alert>
//                 )}

//                 <Form onSubmit={handleSubmit}>
//                   <Form.Group className="mb-3">
//                     <Form.Label>Email Address</Form.Label>
//                     <div className="input-with-icon">
//                       <FontAwesomeIcon icon={faUser} className="input-icon" />
//                       <Form.Control
//                         type="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={handleChange}
//                         placeholder="Enter your email"
//                         required
//                         className="auth-input"
//                       />
//                     </div>
//                   </Form.Group>

//                   <Form.Group className="mb-4">
//                     <Form.Label>Password</Form.Label>
//                     <div className="input-with-icon password-input">
//                       <FontAwesomeIcon icon={faLock} className="input-icon" />
//                       <Form.Control
//                         type={showPassword ? 'text' : 'password'}
//                         name="password"
//                         value={formData.password}
//                         onChange={handleChange}
//                         placeholder="Enter your password"
//                         required
//                         className="auth-input"
//                       />
//                       <Button
//                         variant="link"
//                         className="password-toggle"
//                         onClick={() => setShowPassword(!showPassword)}
//                         type="button"
//                       >
//                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                       </Button>
//                     </div>
//                   </Form.Group>

//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="auth-submit-btn w-100"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? 'Signing In...' : 'Sign In'}
//                   </Button>
//                 </Form>

//                 <div className="auth-footer">
//                   <p>
//                     Don't have an account?{' '}
//                     <Link to="/register" className="auth-link">
//                       Sign up here
//                     </Link>
//                   </p>
//                   <Link to="/" className="auth-link">
//                     ← Back to Home
//                   </Link>
//                 </div>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>
//     </div>
//   );
// }

// export default UserLogin;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser, faLock, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { userLogin, adminLogin, setUserToken, setAdminToken } from '../../services/api';
import { useUserAuth } from '../../contexts/UserAuthContext';
import Logo from '../../assets/Logo.png';
import './UserAuth.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useUserAuth();

  // Admin credentials - you can move these to a config file later
  const ADMIN_CREDENTIALS = {
    username: 'admin',
    password: 'password123'
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Check if these are admin credentials
      if (formData.email === ADMIN_CREDENTIALS.username && 
          formData.password === ADMIN_CREDENTIALS.password) {
        
        // Admin login
        try {
          const adminResponse = await adminLogin({
            username: formData.email,
            password: formData.password
          });
          
          if (adminResponse.data.success) {
            setAdminToken(adminResponse.data.token);
            login(adminResponse.data.admin, adminResponse.data.token, 'admin');
            navigate('/admin/dashboard');
            return;
          }
        } catch (adminError) {
          console.error('Admin login error:', adminError);
          // If admin login fails, fall through to user login
        }
      }
      
      // Try user login
      const userResponse = await userLogin(formData);
      
      if (userResponse.data.success) {
        setUserToken(userResponse.data.token);
        login(userResponse.data.user, userResponse.data.token, 'user');
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError(
        error.response?.data?.error || 
        'Login failed. Please check your credentials.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="auth-page-wrapper">
      <div className="background-container">
        <div className="animated-shape shape1"></div>
        <div className="animated-shape shape2"></div>
        <div className="animated-shape shape3"></div>
      </div>

      <Container className="auth-container normal">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="auth-card">
              {/* <div className="logo-container">
                <Image
                  src={Logo}
                  alt="TSBI Studios Logo"
                  className="logo-image"
                  fluid
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div> */}

              <Card.Body>
                <div className="auth-header">
                  <h3 className="auth-title">
                    <FontAwesomeIcon icon={faSignInAlt} className="me-2" />
                    Sign In
                  </h3>
                  <p className="auth-subtitle">
                    Enter your credentials to access your dashboard
                  </p>
                </div>

                {error && (
                  <Alert variant="danger" className="auth-alert">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label>Email / Username</Form.Label>
                    <div className="input-with-icon">
                      <FontAwesomeIcon icon={faUser} className="input-icon" />
                      <Form.Control
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email or username"
                        required
                        className="auth-input"
                      />
                    </div>
                    <Form.Text className="text-muted">
                      Use your email for user account or username for admin access
                    </Form.Text>
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>Password</Form.Label>
                    <div className="input-with-icon password-input">
                      <FontAwesomeIcon icon={faLock} className="input-icon" />
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        className="auth-input"
                      />
                      <Button
                        variant="link"
                        className="password-toggle"
                        onClick={() => setShowPassword(!showPassword)}
                        type="button"
                      >
                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                      </Button>
                    </div>
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="auth-submit-btn w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </Form>

                {/* <div className="auth-info mt-4">
                  <Alert variant="info" className="small">
                    <strong>Access Levels:</strong>
                    <br />
                    • <strong>Admin:</strong> Use "admin" / "password123"
                    <br />
                    • <strong>User:</strong> Use your registered email and password
                  </Alert>
                </div> */}

                <div className="auth-footer">
                  <p>
                    Don't have an account?{' '}
                    <Link to="/register" className="auth-link">
                      Sign up here
                    </Link>
                  </p>
                  <Link to="/" className="auth-link">
                    ← Back to Home
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Login;