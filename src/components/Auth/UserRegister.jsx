// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faEye, faEyeSlash, faUser, faLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// // // import { userRegister, setUserToken } from '../../services/api';
// // // import Logo from '../../../public/Logo.png';
// // // import './UserAuth.css';

// // // function UserRegister() {
// // //   const [formData, setFormData] = useState({
// // //     name: '',
// // //     email: '',
// // //     password: '',
// // //     confirmPassword: '',
// // //     phone: ''
// // //   });
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [validationErrors, setValidationErrors] = useState({});
// // //   const navigate = useNavigate();

// // //   const handleChange = (e) => {
// // //     setFormData({
// // //       ...formData,
// // //       [e.target.name]: e.target.value
// // //     });
// // //     setError('');
// // //     setValidationErrors({});
// // //   };

// // //   const validateForm = () => {
// // //     const errors = {};

// // //     if (!formData.name.trim() || formData.name.trim().length < 2) {
// // //       errors.name = 'Name must be at least 2 characters long';
// // //     }

// // //     if (!formData.email.trim()) {
// // //       errors.email = 'Email is required';
// // //     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
// // //       errors.email = 'Please enter a valid email address';
// // //     }

// // //     if (!formData.password) {
// // //       errors.password = 'Password is required';
// // //     } else if (formData.password.length < 6) {
// // //       errors.password = 'Password must be at least 6 characters long';
// // //     }

// // //     if (!formData.confirmPassword) {
// // //       errors.confirmPassword = 'Please confirm your password';
// // //     } else if (formData.password !== formData.confirmPassword) {
// // //       errors.confirmPassword = 'Passwords do not match';
// // //     }

// // //     if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
// // //       errors.phone = 'Please enter a valid 10-digit phone number';
// // //     }

// // //     return errors;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     setIsLoading(true);
// // //     setError('');
// // //     setValidationErrors({});

// // //     // Validate form
// // //     const errors = validateForm();
// // //     if (Object.keys(errors).length > 0) {
// // //       setValidationErrors(errors);
// // //       setIsLoading(false);
// // //       return;
// // //     }

// // //     try {
// // //       const { confirmPassword, ...submitData } = formData;
// // //       const response = await userRegister(submitData);
      
// // //       if (response.data.success) {
// // //         // Store token and user info
// // //         setUserToken(response.data.token);
// // //         localStorage.setItem('userData', JSON.stringify(response.data.user));
        
// // //         // Redirect to proposal page
// // //         navigate('/proposal');
// // //       }
// // //     } catch (error) {
// // //       console.error('Registration error:', error);
// // //       setError(
// // //         error.response?.data?.error || 
// // //         'Registration failed. Please try again.'
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

// // //       <Container className="auth-container">
// // //         <Row className="justify-content-center">
// // //           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
// // //             <Card className="auth-card">
// // //               <div className="logo-container">
// // //                 <Image
// // //                   src={Logo}
// // //                   alt="TSBI Studios Logo"
// // //                   className="logo-image"
// // //                   fluid
// // //                 />
// // //               </div>

// // //               <Card.Body>
// // //                 <div className="auth-header">
// // //                   <h3 className="auth-title">Create Account</h3>
// // //                   <p className="auth-subtitle">Join us to start creating proposals</p>
// // //                 </div>

// // //                 {error && (
// // //                   <Alert variant="danger" className="auth-alert">
// // //                     {error}
// // //                   </Alert>
// // //                 )}

// // //                 <Form onSubmit={handleSubmit}>
// // //                   <Form.Group className="mb-3">
// // //                     <Form.Label>Full Name</Form.Label>
// // //                     <div className="input-with-icon">
// // //                       <FontAwesomeIcon icon={faUser} className="input-icon" />
// // //                       <Form.Control
// // //                         type="text"
// // //                         name="name"
// // //                         value={formData.name}
// // //                         onChange={handleChange}
// // //                         placeholder="Enter your full name"
// // //                         required
// // //                         className="auth-input"
// // //                         isInvalid={!!validationErrors.name}
// // //                       />
// // //                       <Form.Control.Feedback type="invalid">
// // //                         {validationErrors.name}
// // //                       </Form.Control.Feedback>
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Form.Group className="mb-3">
// // //                     <Form.Label>Email Address</Form.Label>
// // //                     <div className="input-with-icon">
// // //                       <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
// // //                       <Form.Control
// // //                         type="email"
// // //                         name="email"
// // //                         value={formData.email}
// // //                         onChange={handleChange}
// // //                         placeholder="Enter your email"
// // //                         required
// // //                         className="auth-input"
// // //                         isInvalid={!!validationErrors.email}
// // //                       />
// // //                       <Form.Control.Feedback type="invalid">
// // //                         {validationErrors.email}
// // //                       </Form.Control.Feedback>
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Form.Group className="mb-3">
// // //                     <Form.Label>Phone Number (Optional)</Form.Label>
// // //                     <div className="input-with-icon">
// // //                       <FontAwesomeIcon icon={faPhone} className="input-icon" />
// // //                       <Form.Control
// // //                         type="tel"
// // //                         name="phone"
// // //                         value={formData.phone}
// // //                         onChange={handleChange}
// // //                         placeholder="Enter your phone number"
// // //                         className="auth-input"
// // //                         isInvalid={!!validationErrors.phone}
// // //                       />
// // //                       <Form.Control.Feedback type="invalid">
// // //                         {validationErrors.phone}
// // //                       </Form.Control.Feedback>
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Form.Group className="mb-3">
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
// // //                         isInvalid={!!validationErrors.password}
// // //                       />
// // //                       <Button
// // //                         variant="link"
// // //                         className="password-toggle"
// // //                         onClick={() => setShowPassword(!showPassword)}
// // //                         type="button"
// // //                       >
// // //                         <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// // //                       </Button>
// // //                       <Form.Control.Feedback type="invalid">
// // //                         {validationErrors.password}
// // //                       </Form.Control.Feedback>
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Form.Group className="mb-4">
// // //                     <Form.Label>Confirm Password</Form.Label>
// // //                     <div className="input-with-icon password-input">
// // //                       <FontAwesomeIcon icon={faLock} className="input-icon" />
// // //                       <Form.Control
// // //                         type={showConfirmPassword ? 'text' : 'password'}
// // //                         name="confirmPassword"
// // //                         value={formData.confirmPassword}
// // //                         onChange={handleChange}
// // //                         placeholder="Confirm your password"
// // //                         required
// // //                         className="auth-input"
// // //                         isInvalid={!!validationErrors.confirmPassword}
// // //                       />
// // //                       <Button
// // //                         variant="link"
// // //                         className="password-toggle"
// // //                         onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// // //                         type="button"
// // //                       >
// // //                         <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
// // //                       </Button>
// // //                       <Form.Control.Feedback type="invalid">
// // //                         {validationErrors.confirmPassword}
// // //                       </Form.Control.Feedback>
// // //                     </div>
// // //                   </Form.Group>

// // //                   <Button
// // //                     variant="primary"
// // //                     type="submit"
// // //                     className="auth-submit-btn w-100"
// // //                     disabled={isLoading}
// // //                   >
// // //                     {isLoading ? 'Creating Account...' : 'Create Account'}
// // //                   </Button>
// // //                 </Form>

// // //                 <div className="auth-footer">
// // //                   <p>
// // //                     Already have an account?{' '}
// // //                     <Link to="/login" className="auth-link">
// // //                       Sign in here
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

// // // export default UserRegister;
// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faEye, faEyeSlash, faUser, faLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// // import { userRegister, setUserToken } from '../../services/api';
// // import Logo from '../../assets/Logo.png'; // Update path based on your structure
// // import './UserAuth.css';

// // function UserRegister() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     password: '',
// //     confirmPassword: '',
// //     phone: ''
// //   });
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [validationErrors, setValidationErrors] = useState({});
// //   const navigate = useNavigate();

// //   const handleChange = (e) => {
// //     setFormData({
// //       ...formData,
// //       [e.target.name]: e.target.value
// //     });
// //     setError('');
// //     setValidationErrors({});
// //   };

// //   const validateForm = () => {
// //     const errors = {};

// //     if (!formData.name.trim() || formData.name.trim().length < 2) {
// //       errors.name = 'Name must be at least 2 characters long';
// //     }

// //     if (!formData.email.trim()) {
// //       errors.email = 'Email is required';
// //     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
// //       errors.email = 'Please enter a valid email address';
// //     }

// //     if (!formData.password) {
// //       errors.password = 'Password is required';
// //     } else if (formData.password.length < 6) {
// //       errors.password = 'Password must be at least 6 characters long';
// //     }

// //     if (!formData.confirmPassword) {
// //       errors.confirmPassword = 'Please confirm your password';
// //     } else if (formData.password !== formData.confirmPassword) {
// //       errors.confirmPassword = 'Passwords do not match';
// //     }

// //     if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
// //       errors.phone = 'Please enter a valid 10-digit phone number';
// //     }

// //     return errors;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsLoading(true);
// //     setError('');
// //     setValidationErrors({});

// //     // Validate form
// //     const errors = validateForm();
// //     if (Object.keys(errors).length > 0) {
// //       setValidationErrors(errors);
// //       setIsLoading(false);
// //       return;
// //     }

// //     try {
// //       const { confirmPassword, ...submitData } = formData;
// //       const response = await userRegister(submitData);
      
// //       if (response.data.success) {
// //         // Store token and user info
// //         setUserToken(response.data.token);
// //         localStorage.setItem('userData', JSON.stringify(response.data.user));
        
// //         // Redirect to proposal page
// //         navigate('/proposal');
// //       }
// //     } catch (error) {
// //       console.error('Registration error:', error);
// //       setError(
// //         error.response?.data?.error || 
// //         'Registration failed. Please try again.'
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

// //       <Container className="auth-container wide">
// //         <Row className="justify-content-center">
// //           <Col xs={12} sm={10} md={8} lg={6} xl={5}>
// //             <Card  className="auth-card ">
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
// //                   <h3 className="auth-title">Create Account</h3>
// //                   <p className="auth-subtitle">Join us to start creating proposals</p>
// //                 </div>

// //                 {error && (
// //                   <Alert variant="danger" className="auth-alert">
// //                     {error}
// //                   </Alert>
// //                 )}

// //                 <Form onSubmit={handleSubmit}>
// //                   {/* First Row - Name and Email */}
// //                   <div className="auth-form-row">
// //                     <Form.Group>
// //                       <Form.Label>Full Name</Form.Label>
// //                       <div className="input-with-icon">
// //                         <FontAwesomeIcon icon={faUser} className="input-icon" />
// //                         <Form.Control
// //                           type="text"
// //                           name="name"
// //                           value={formData.name}
// //                           onChange={handleChange}
// //                           placeholder="Enter your full name"
// //                           required
// //                           className="auth-input"
// //                           isInvalid={!!validationErrors.name}
// //                         />
// //                         <Form.Control.Feedback type="invalid">
// //                           {validationErrors.name}
// //                         </Form.Control.Feedback>
// //                       </div>
// //                     </Form.Group>

// //                     <Form.Group>
// //                       <Form.Label>Email Address</Form.Label>
// //                       <div className="input-with-icon">
// //                         <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
// //                         <Form.Control
// //                           type="email"
// //                           name="email"
// //                           value={formData.email}
// //                           onChange={handleChange}
// //                           placeholder="Enter your email"
// //                           required
// //                           className="auth-input"
// //                           isInvalid={!!validationErrors.email}
// //                         />
// //                         <Form.Control.Feedback type="invalid">
// //                           {validationErrors.email}
// //                         </Form.Control.Feedback>
// //                       </div>
// //                     </Form.Group>
// //                   </div>

// //                   {/* Second Row - Phone */}
// //                   <Form.Group className="auth-form-full">
// //                     <Form.Label>Phone Number (Optional)</Form.Label>
// //                     <div className="input-with-icon">
// //                       <FontAwesomeIcon icon={faPhone} className="input-icon" />
// //                       <Form.Control
// //                         type="tel"
// //                         name="phone"
// //                         value={formData.phone}
// //                         onChange={handleChange}
// //                         placeholder="Enter your phone number"
// //                         className="auth-input"
// //                         isInvalid={!!validationErrors.phone}
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         {validationErrors.phone}
// //                       </Form.Control.Feedback>
// //                     </div>
// //                   </Form.Group>

// //                   {/* Third Row - Passwords */}
// //                   <div className="auth-form-row">
// //                     <Form.Group>
// //                       <Form.Label>Password</Form.Label>
// //                       <div className="input-with-icon password-input">
// //                         <FontAwesomeIcon icon={faLock} className="input-icon" />
// //                         <Form.Control
// //                           type={showPassword ? 'text' : 'password'}
// //                           name="password"
// //                           value={formData.password}
// //                           onChange={handleChange}
// //                           placeholder="Enter your password"
// //                           required
// //                           className="auth-input"
// //                           isInvalid={!!validationErrors.password}
// //                         />
// //                         <Button
// //                           variant="link"
// //                           className="password-toggle"
// //                           onClick={() => setShowPassword(!showPassword)}
// //                           type="button"
// //                         >
// //                           <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
// //                         </Button>
// //                         <Form.Control.Feedback type="invalid">
// //                           {validationErrors.password}
// //                         </Form.Control.Feedback>
// //                       </div>
// //                     </Form.Group>

// //                     <Form.Group>
// //                       <Form.Label>Confirm Password</Form.Label>
// //                       <div className="input-with-icon password-input">
// //                         <FontAwesomeIcon icon={faLock} className="input-icon" />
// //                         <Form.Control
// //                           type={showConfirmPassword ? 'text' : 'password'}
// //                           name="confirmPassword"
// //                           value={formData.confirmPassword}
// //                           onChange={handleChange}
// //                           placeholder="Confirm your password"
// //                           required
// //                           className="auth-input"
// //                           isInvalid={!!validationErrors.confirmPassword}
// //                         />
// //                         <Button
// //                           variant="link"
// //                           className="password-toggle"
// //                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
// //                           type="button"
// //                         >
// //                           <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
// //                         </Button>
// //                         <Form.Control.Feedback type="invalid">
// //                           {validationErrors.confirmPassword}
// //                         </Form.Control.Feedback>
// //                       </div>
// //                     </Form.Group>
// //                   </div>

// //                   <Button
// //                     variant="primary"
// //                     type="submit"
// //                     className="auth-submit-btn w-100"
// //                     disabled={isLoading}
// //                   >
// //                     {isLoading ? 'Creating Account...' : 'Create Account'}
// //                   </Button>
// //                 </Form>

// //                 <div className="auth-footer">
// //                   <p>
// //                     Already have an account?{' '}
// //                     <Link to="/login" className="auth-link">
// //                       Sign in here
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

// // export default UserRegister;
// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye, faEyeSlash, faUser, faLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
// import { userRegister, setUserToken } from '../../services/api';
// import { useUserAuth } from '../../contexts/UserAuthContext';
// import Logo from '../../assets/Logo.png';
// import './UserAuth.css';

// function UserRegister() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     phone: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [validationErrors, setValidationErrors] = useState({});
//   const navigate = useNavigate();
//   const { login } = useUserAuth();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//     setError('');
//     setValidationErrors({});
//   };

//   const validateForm = () => {
//     const errors = {};

//     if (!formData.name.trim() || formData.name.trim().length < 2) {
//       errors.name = 'Name must be at least 2 characters long';
//     }

//     if (!formData.email.trim()) {
//       errors.email = 'Email is required';
//     } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
//       errors.email = 'Please enter a valid email address';
//     }

//     if (!formData.password) {
//       errors.password = 'Password is required';
//     } else if (formData.password.length < 6) {
//       errors.password = 'Password must be at least 6 characters long';
//     }

//     if (!formData.confirmPassword) {
//       errors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }

//     if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
//       errors.phone = 'Please enter a valid 10-digit phone number';
//     }

//     return errors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');
//     setValidationErrors({});

//     // Validate form
//     const errors = validateForm();
//     if (Object.keys(errors).length > 0) {
//       setValidationErrors(errors);
//       setIsLoading(false);
//       return;
//     }

//     try {
//       const { confirmPassword, ...submitData } = formData;
//       const response = await userRegister(submitData);
      
//       if (response.data.success) {
//         // Store token and user info
//         setUserToken(response.data.token);
        
//         // Use auth context to set authentication state
//         login(response.data.user, response.data.token, 'user');
        
//         // Navigate to proposal page
//         navigate('/proposal');
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       setError(
//         error.response?.data?.error || 
//         'Registration failed. Please try again.'
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

//       <Container className="auth-container wide">
//         <Row className="justify-content-center">
//           <Col xs={12} sm={10} md={8} lg={8} xl={7}>
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
//                   <h3 className="auth-title">Create Account</h3>
//                   <p className="auth-subtitle">Join us to start creating proposals</p>
//                 </div>

//                 {error && (
//                   <Alert variant="danger" className="auth-alert">
//                     {error}
//                   </Alert>
//                 )}

//                 <Form onSubmit={handleSubmit}>
//                   {/* First Row - Name and Email */}
//                   <div className="auth-form-row">
//                     <Form.Group>
//                       <Form.Label>Full Name</Form.Label>
//                       <div className="input-with-icon">
//                         <FontAwesomeIcon icon={faUser} className="input-icon" />
//                         <Form.Control
//                           type="text"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           placeholder="Enter your full name"
//                           required
//                           className="auth-input"
//                           isInvalid={!!validationErrors.name}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           {validationErrors.name}
//                         </Form.Control.Feedback>
//                       </div>
//                     </Form.Group>

//                     <Form.Group>
//                       <Form.Label>Email Address</Form.Label>
//                       <div className="input-with-icon">
//                         <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
//                         <Form.Control
//                           type="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           placeholder="Enter your email"
//                           required
//                           className="auth-input"
//                           isInvalid={!!validationErrors.email}
//                         />
//                         <Form.Control.Feedback type="invalid">
//                           {validationErrors.email}
//                         </Form.Control.Feedback>
//                       </div>
//                     </Form.Group>
//                   </div>

//                   {/* Second Row - Phone */}
//                   <Form.Group className="auth-form-full">
//                     <Form.Label>Phone Number (Optional)</Form.Label>
//                     <div className="input-with-icon">
//                       <FontAwesomeIcon icon={faPhone} className="input-icon" />
//                       <Form.Control
//                         type="tel"
//                         name="phone"
//                         value={formData.phone}
//                         onChange={handleChange}
//                         placeholder="Enter your phone number"
//                         className="auth-input"
//                         isInvalid={!!validationErrors.phone}
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {validationErrors.phone}
//                       </Form.Control.Feedback>
//                     </div>
//                   </Form.Group>

//                   {/* Third Row - Passwords */}
//                   <div className="auth-form-row">
//                     <Form.Group>
//                       <Form.Label>Password</Form.Label>
//                       <div className="input-with-icon password-input">
//                         <FontAwesomeIcon icon={faLock} className="input-icon" />
//                         <Form.Control
//                           type={showPassword ? 'text' : 'password'}
//                           name="password"
//                           value={formData.password}
//                           onChange={handleChange}
//                           placeholder="Enter your password"
//                           required
//                           className="auth-input"
//                           isInvalid={!!validationErrors.password}
//                         />
//                         <Button
//                           variant="link"
//                           className="password-toggle"
//                           onClick={() => setShowPassword(!showPassword)}
//                           type="button"
//                         >
//                           <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
//                         </Button>
//                         <Form.Control.Feedback type="invalid">
//                           {validationErrors.password}
//                         </Form.Control.Feedback>
//                       </div>
//                     </Form.Group>

//                     <Form.Group>
//                       <Form.Label>Confirm Password</Form.Label>
//                       <div className="input-with-icon password-input">
//                         <FontAwesomeIcon icon={faLock} className="input-icon" />
//                         <Form.Control
//                           type={showConfirmPassword ? 'text' : 'password'}
//                           name="confirmPassword"
//                           value={formData.confirmPassword}
//                           onChange={handleChange}
//                           placeholder="Confirm your password"
//                           required
//                           className="auth-input"
//                           isInvalid={!!validationErrors.confirmPassword}
//                         />
//                         <Button
//                           variant="link"
//                           className="password-toggle"
//                           onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                           type="button"
//                         >
//                           <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
//                         </Button>
//                         <Form.Control.Feedback type="invalid">
//                           {validationErrors.confirmPassword}
//                         </Form.Control.Feedback>
//                       </div>
//                     </Form.Group>
//                   </div>

//                   <Button
//                     variant="primary"
//                     type="submit"
//                     className="auth-submit-btn w-100"
//                     disabled={isLoading}
//                   >
//                     {isLoading ? 'Creating Account...' : 'Create Account'}
//                   </Button>
//                 </Form>

//                 <div className="auth-footer">
//                   <p>
//                     Already have an account?{' '}
//                     <Link to="/login" className="auth-link">
//                       Sign in here
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

// export default UserRegister;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, Form, Button, Alert, Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faUser, faLock, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { userRegister, setUserToken } from '../../services/api';
import { useUserAuth } from '../../contexts/UserAuthContext';
import Logo from '../../assets/Logo.png';
import './UserAuth.css';

function UserRegister() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [validationErrors, setValidationErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useUserAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
    setValidationErrors({});
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
    setValidationErrors({});

    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      setIsLoading(false);
      return;
    }

    try {
      const { confirmPassword, ...submitData } = formData;
      const response = await userRegister(submitData);
      
      if (response.data.success) {
        // Store token and user info
        setUserToken(response.data.token);
        
        // Use auth context to set authentication state
        login(response.data.user, response.data.token, 'user');
        
        // Navigate to dashboard page
        navigate('/dashboard');
      }
    } catch (error) {
      console.error('Registration error:', error);
      setError(
        error.response?.data?.error || 
        'Registration failed. Please try again.'
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

      <Container className="auth-container wide">
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={8} xl={7}>
            <Card className="auth-card">
              <div className="logo-container">
                <Image
                  src={Logo}
                  alt="TSBI Studios Logo"
                  className="logo-image"
                  fluid
                  onError={(e) => {
                    e.target.style.display = 'none';
                  }}
                />
              </div>

              <Card.Body>
                <div className="auth-header">
                  <h3 className="auth-title">Create Account</h3>
                  <p className="auth-subtitle">Join us to start creating proposals</p>
                </div>

                {error && (
                  <Alert variant="danger" className="auth-alert">
                    {error}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  {/* First Row - Name and Email */}
                  <div className="auth-form-row">
                    <Form.Group>
                      <Form.Label>Full Name</Form.Label>
                      <div className="input-with-icon">
                        <FontAwesomeIcon icon={faUser} className="input-icon" />
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your full name"
                          required
                          className="auth-input"
                          isInvalid={!!validationErrors.name}
                        />
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.name}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Email Address</Form.Label>
                      <div className="input-with-icon">
                        <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                          className="auth-input"
                          isInvalid={!!validationErrors.email}
                        />
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.email}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </div>

                  {/* Second Row - Phone */}
                  <Form.Group className="auth-form-full">
                    <Form.Label>Phone Number (Optional)</Form.Label>
                    <div className="input-with-icon">
                      <FontAwesomeIcon icon={faPhone} className="input-icon" />
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="auth-input"
                        isInvalid={!!validationErrors.phone}
                      />
                      <Form.Control.Feedback type="invalid">
                        {validationErrors.phone}
                      </Form.Control.Feedback>
                    </div>
                  </Form.Group>

                  {/* Third Row - Passwords */}
                  <div className="auth-form-row">
                    <Form.Group>
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
                          isInvalid={!!validationErrors.password}
                        />
                        <Button
                          variant="link"
                          className="password-toggle"
                          onClick={() => setShowPassword(!showPassword)}
                          type="button"
                        >
                          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.password}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>

                    <Form.Group>
                      <Form.Label>Confirm Password</Form.Label>
                      <div className="input-with-icon password-input">
                        <FontAwesomeIcon icon={faLock} className="input-icon" />
                        <Form.Control
                          type={showConfirmPassword ? 'text' : 'password'}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                          required
                          className="auth-input"
                          isInvalid={!!validationErrors.confirmPassword}
                        />
                        <Button
                          variant="link"
                          className="password-toggle"
                          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          type="button"
                        >
                          <FontAwesomeIcon icon={showConfirmPassword ? faEyeSlash : faEye} />
                        </Button>
                        <Form.Control.Feedback type="invalid">
                          {validationErrors.confirmPassword}
                        </Form.Control.Feedback>
                      </div>
                    </Form.Group>
                  </div>

                  <Button
                    variant="primary"
                    type="submit"
                    className="auth-submit-btn w-100"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </Button>
                </Form>

                <div className="auth-footer">
                  <p>
                    Already have an account?{' '}
                    <Link to="/login" className="auth-link">
                      Sign in here
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

export default UserRegister;