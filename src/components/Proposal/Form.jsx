

// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { 
// // // // // // // //   Form, 
// // // // // // // //   Button, 
// // // // // // // //   Card, 
// // // // // // // //   Alert, 
// // // // // // // //   Container, 
// // // // // // // //   Row, 
// // // // // // // //   Col, 
// // // // // // // //   InputGroup, 
// // // // // // // //   Badge,
// // // // // // // //   Spinner,
// // // // // // // //   OverlayTrigger,
// // // // // // // //   Tooltip,
// // // // // // // //   ListGroup
// // // // // // // // } from 'react-bootstrap';
// // // // // // // // import { fetchServices } from '../../services/api';
// // // // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // // // import { 
// // // // // // // //   faCheck,
// // // // // // // //   faTimes,
// // // // // // // //   faInfoCircle,
// // // // // // // //   faCalendarAlt,
// // // // // // // //   faBuilding,
// // // // // // // //   faEnvelope,
// // // // // // // //   faTag,
// // // // // // // //   faMapMarkerAlt,
// // // // // // // //   faMoneyBillWave,
// // // // // // // //   faFilePdf,
// // // // // // // //   faUser,
// // // // // // // //   faClipboardList,
// // // // // // // //   faExclamationTriangle
// // // // // // // // } from '@fortawesome/free-solid-svg-icons';
// // // // // // // // import Logo from '../../assets/Logo.png';

// // // // // // // // function ProposalForm({ onSubmit, onAdminClick }) {
// // // // // // // //   const [services, setServices] = useState([]);
// // // // // // // //   const [formData, setFormData] = useState({
// // // // // // // //     client_name: '',
// // // // // // // //     your_email: '',
// // // // // // // //     project_title: '',
// // // // // // // //     category: '',
// // // // // // // //     location: '',
// // // // // // // //     services: [],
// // // // // // // //     days: 1,
// // // // // // // //     shoot_dates: ''
// // // // // // // //   });
// // // // // // // //   const [errors, setErrors] = useState({});
// // // // // // // //   const [total, setTotal] = useState(0);
// // // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // // //   const [serviceError, setServiceError] = useState('');
// // // // // // // //   const [formSubmitting, setFormSubmitting] = useState(false);

// // // // // // // //   // Load services on component mount
// // // // // // // //   useEffect(() => {
// // // // // // // //     const loadServices = async () => {
// // // // // // // //       setIsLoading(true);
// // // // // // // //       try {
// // // // // // // //         console.log('Fetching services from API...');
// // // // // // // //         const response = await fetchServices();
// // // // // // // //         const servicesWithStringIds = response.data.map(service => ({
// // // // // // // //           ...service,
// // // // // // // //           id: service.id.toString() // Ensure IDs are strings
// // // // // // // //         }));
// // // // // // // //         console.log('Services loaded:', servicesWithStringIds);
// // // // // // // //         setServices(servicesWithStringIds);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Error loading services:', error);
// // // // // // // //         setServiceError('Failed to load services. Please refresh the page or contact support.');
// // // // // // // //       } finally {
// // // // // // // //         setIsLoading(false);
// // // // // // // //       }
// // // // // // // //     };
// // // // // // // //     loadServices();
// // // // // // // //   }, []);

// // // // // // // //   // Calculate total when services or days change
// // // // // // // //   useEffect(() => {
// // // // // // // //     calculateTotal();
// // // // // // // //   }, [formData.services, formData.days, services]);

// // // // // // // //   const calculateTotal = () => {
// // // // // // // //     let calculatedTotal = 0;
// // // // // // // //     formData.services.forEach(serviceId => {
// // // // // // // //       const service = services.find(s => s.id === serviceId);
// // // // // // // //       if (service) {
// // // // // // // //         calculatedTotal += service.rate_per_day * formData.days;
// // // // // // // //       }
// // // // // // // //     });
// // // // // // // //     console.log('Calculated total:', calculatedTotal);
// // // // // // // //     setTotal(calculatedTotal);
// // // // // // // //   };

// // // // // // // //   const handleChange = (e) => {
// // // // // // // //     const { name, value, type, checked } = e.target;
// // // // // // // //     console.log('Input changed:', { name, value, type, checked });

// // // // // // // //     // Clear specific error when field is changed
// // // // // // // //     if (errors[name]) {
// // // // // // // //       setErrors(prev => {
// // // // // // // //         const newErrors = {...prev};
// // // // // // // //         delete newErrors[name];
// // // // // // // //         return newErrors;
// // // // // // // //       });
// // // // // // // //     }

// // // // // // // //     setFormData(prev => {
// // // // // // // //       if (type === 'checkbox') {
// // // // // // // //         const newServices = checked
// // // // // // // //           ? [...prev.services, value]
// // // // // // // //           : prev.services.filter(id => id !== value);
        
// // // // // // // //         console.log('Updated services selection:', newServices);
// // // // // // // //         return {
// // // // // // // //           ...prev,
// // // // // // // //           services: newServices
// // // // // // // //         };
// // // // // // // //       }
      
// // // // // // // //       return {
// // // // // // // //         ...prev,
// // // // // // // //         [name]: value
// // // // // // // //       };
// // // // // // // //     });
// // // // // // // //   };

// // // // // // // //   const validateForm = () => {
// // // // // // // //     const newErrors = {};
    
// // // // // // // //     // Client name validation
// // // // // // // //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// // // // // // // //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// // // // // // // //     }
    
// // // // // // // //     // Email validation
// // // // // // // //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// // // // // // // //     if (!emailPattern.test(formData.your_email)) {
// // // // // // // //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// // // // // // // //     }
    
// // // // // // // //     // Project title validation
// // // // // // // //     // if (!formData.project_title || formData.project_title.trim() === '') {
// // // // // // // //     //   newErrors.project_title = 'Project title is required';
// // // // // // // //     // }
// // // // // // // //     if (!formData.project_title || formData.project_title.trim() === '') {
// // // // // // // //       newErrors.project_title = 'Project title is required';
// // // // // // // //     } else if (formData.project_title.length > 100) {
// // // // // // // //       newErrors.project_title = 'Project title must be 1–100 characters long';
// // // // // // // //     }
    
// // // // // // // //     // Category validation
// // // // // // // //     if (!formData.category) {
// // // // // // // //       newErrors.category = 'Please select a category';
// // // // // // // //     }
    
// // // // // // // //     // Location validation
// // // // // // // //     if (!formData.location) {
// // // // // // // //       newErrors.location = 'Please select a location';
// // // // // // // //     }
    
// // // // // // // //     // Shoot date validation
// // // // // // // //     if (!formData.shoot_dates) {
// // // // // // // //       newErrors.shoot_dates = 'Shoot date is required';
// // // // // // // //     } else {
// // // // // // // //       const shootDate = new Date(formData.shoot_dates);
// // // // // // // //       const today = new Date();
// // // // // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // // // //       const fyStart = new Date(fyStartYear, 3, 1); // April 1
// // // // // // // //       // const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
// // // // // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

      
// // // // // // // //       if (shootDate < fyStart || shootDate > fyEnd) {
// // // // // // // //         newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // // // // //       }
// // // // // // // //     }
    
// // // // // // // //     // Services validation
// // // // // // // //     if (formData.services.length === 0) {
// // // // // // // //       newErrors.services = 'Please select at least one service';
// // // // // // // //     }
    
// // // // // // // //     console.log('Form validation errors:', newErrors);
// // // // // // // //     setErrors(newErrors);
// // // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // // //   };

// // // // // // // //   const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     console.log('Form submission attempted');
    
// // // // // // // //     if (validateForm()) {
// // // // // // // //       console.log('Form is valid, submitting:', formData);
// // // // // // // //       setFormSubmitting(true);
// // // // // // // //       try {
// // // // // // // //         await onSubmit(formData);
// // // // // // // //       } catch (error) {
// // // // // // // //         console.error('Form submission error:', error);
// // // // // // // //         setErrors({
// // // // // // // //           submission: 'An error occurred while generating the proposal. Please try again.'
// // // // // // // //         });
// // // // // // // //       } finally {
// // // // // // // //         setFormSubmitting(false);
// // // // // // // //       }
// // // // // // // //     } else {
// // // // // // // //       console.log('Form validation failed');
// // // // // // // //       // Scroll to the first error
// // // // // // // //       const firstErrorField = Object.keys(errors)[0];
// // // // // // // //       if (firstErrorField) {
// // // // // // // //         const element = document.getElementsByName(firstErrorField)[0];
// // // // // // // //         if (element) {
// // // // // // // //           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
// // // // // // // //         }
// // // // // // // //       }
// // // // // // // //     }
// // // // // // // //   };

// // // // // // // //   // Calculate fiscal year dates for min/max date inputs
// // // // // // // //   // const today = new Date();
// // // // // // // //   // const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // // // //   // const fyStart = new Date(fyStartYear, 3, 1); // April 1
// // // // // // // //   // const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
  
// // // // // // // //   // const minDate = fyStart.toISOString().split('T')[0];
// // // // // // // //   // const maxDate = fyEnd.toISOString().split('T')[0];
// // // // // // // //   const today = new Date();
// // // // // // // // const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // // // // const fyStart = new Date(fyStartYear, 3, 1); // April 1
// // // // // // // // // const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
// // // // // // // // const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // // // // // Choose today or fiscal start, whichever is later
// // // // // // // // const effectiveMinDate = today > fyStart ? today : fyStart;

// // // // // // // // const minDate = effectiveMinDate.toISOString().split('T')[0];
// // // // // // // // const maxDate = fyEnd.toISOString().split('T')[0];


// // // // // // // //   // Get selected services details for summary
// // // // // // // //   const selectedServicesDetails = formData.services.map(id => {
// // // // // // // //     const service = services.find(s => s.id === id);
// // // // // // // //     return service ? {
// // // // // // // //       name: service.service_name,
// // // // // // // //       rate: service.rate_per_day
// // // // // // // //     } : null;
// // // // // // // //   }).filter(Boolean);

// // // // // // // //   return (
// // // // // // // //     <div className="proposal-form-component">
// // // // // // // //       <div className="header bg-white border-bottom py-2">
// // // // // // // //         <Container fluid className="px-4">
// // // // // // // //           <div className="d-flex justify-content-between align-items-center">
// // // // // // // //             <div className="d-flex align-items-center">
// // // // // // // //               <img 
// // // // // // // //                 src={Logo} 
// // // // // // // //                 alt="Company Logo" 
// // // // // // // //                 style={{ height: '55px', width: 'auto' }} 
// // // // // // // //               />
// // // // // // // //             </div>
// // // // // // // //             <div className="text-center flex-grow-1">
// // // // // // // //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// // // // // // // //             </div>
// // // // // // // //             <Button 
// // // // // // // //               variant="outline-danger" 
// // // // // // // //               onClick={onAdminClick}
// // // // // // // //               className="px-3 py-1"
// // // // // // // //             >
// // // // // // // //               <FontAwesomeIcon icon={faUser} className="me-2" />
// // // // // // // //               Admin Login
// // // // // // // //             </Button>
// // // // // // // //           </div>
// // // // // // // //         </Container>
// // // // // // // //       </div>
      
// // // // // // // //       <Container className="py-4">
        
// // // // // // // //         <Row>
// // // // // // // //           <Col lg={8}>
// // // // // // // //             <Card className="shadow-sm border-0 mb-4">
// // // // // // // //               <Card.Body className="p-4">
// // // // // // // //                 <div className="d-flex justify-content-between align-items-center mb-4">
// // // // // // // //                   <div>
// // // // // // // //                     <h3 className="mb-1">Create Studio Proposal</h3>
// // // // // // // //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// // // // // // // //                   </div>
// // // // // // // //                   <Badge bg="info" className="py-2 px-3">
// // // // // // // //                     <FontAwesomeIcon icon={faFilePdf} className="me-1" />
// // // // // // // //                     New Quote
// // // // // // // //                   </Badge>
// // // // // // // //                 </div>

// // // // // // // //                 {errors.submission && (
// // // // // // // //                   <Alert 
// // // // // // // //                     variant="danger" 
// // // // // // // //                     dismissible 
// // // // // // // //                     onClose={() => setErrors(prev => {
// // // // // // // //                       const newErrors = {...prev};
// // // // // // // //                       delete newErrors.submission;
// // // // // // // //                       return newErrors;
// // // // // // // //                     })}
// // // // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // // // //                   >
// // // // // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // // // // //                     {errors.submission}
// // // // // // // //                   </Alert>
// // // // // // // //                 )}

// // // // // // // //                 {serviceError && (
// // // // // // // //                   <Alert 
// // // // // // // //                     variant="danger" 
// // // // // // // //                     dismissible 
// // // // // // // //                     onClose={() => setServiceError('')}
// // // // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // // // //                   >
// // // // // // // //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // // // // // //                     {serviceError}
// // // // // // // //                   </Alert>
// // // // // // // //                 )}

// // // // // // // //                 {Object.keys(errors).length > 0 && !errors.submission && (
// // // // // // // //                   <Alert 
// // // // // // // //                     variant="warning" 
// // // // // // // //                     dismissible 
// // // // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // // // //                   >
// // // // // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // // // // //                     Please fix the highlighted errors below to continue.
// // // // // // // //                   </Alert>
// // // // // // // //                 )}

// // // // // // // //                 <Form onSubmit={handleSubmit}>
// // // // // // // //                   <h5 className="mb-3">
// // // // // // // //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// // // // // // // //                     Client Information
// // // // // // // //                   </h5>
                  
// // // // // // // //                   <Row>
// // // // // // // //                     <Col md={6}>
// // // // // // // //                       <Form.Group className="mb-3">
// // // // // // // //                         <Form.Label>
// // // // // // // //                           Brand Name <span className="text-danger">*</span>
// // // // // // // //                         </Form.Label>
// // // // // // // //                         <InputGroup hasValidation>
// // // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // // //                             <FontAwesomeIcon icon={faBuilding} />
// // // // // // // //                           </InputGroup.Text>
// // // // // // // //                           <Form.Control
// // // // // // // //                             type="text"
// // // // // // // //                             name="client_name"
// // // // // // // //                             value={formData.client_name}
// // // // // // // //                             onChange={handleChange}
// // // // // // // //                             isInvalid={!!errors.client_name}
// // // // // // // //                             placeholder="e.g. Zee TV, Colors"
// // // // // // // //                             required
// // // // // // // //                           />
// // // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // // //                             {errors.client_name}
// // // // // // // //                           </Form.Control.Feedback>
// // // // // // // //                         </InputGroup>
// // // // // // // //                       </Form.Group>
// // // // // // // //                     </Col>
                    
// // // // // // // //                     <Col md={6}>
// // // // // // // //                       <Form.Group className="mb-3">
// // // // // // // //                         <Form.Label>
// // // // // // // //                           Your Email <span className="text-danger">*</span>
// // // // // // // //                         </Form.Label>
// // // // // // // //                         <InputGroup hasValidation>
// // // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // // //                             <FontAwesomeIcon icon={faEnvelope} />
// // // // // // // //                           </InputGroup.Text>
// // // // // // // //                           <Form.Control
// // // // // // // //                             type="email"
// // // // // // // //                             name="your_email"
// // // // // // // //                             value={formData.your_email}
// // // // // // // //                             onChange={handleChange}
// // // // // // // //                             isInvalid={!!errors.your_email}
// // // // // // // //                             placeholder="e.g. user@tsbi.in"
// // // // // // // //                             required
// // // // // // // //                           />
// // // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // // //                             {errors.your_email}
// // // // // // // //                           </Form.Control.Feedback>
// // // // // // // //                         </InputGroup>
// // // // // // // //                         <Form.Text className="text-muted">
// // // // // // // //                           Only @tsbi.in email addresses are allowed
// // // // // // // //                         </Form.Text>
// // // // // // // //                       </Form.Group>
// // // // // // // //                     </Col>
// // // // // // // //                   </Row>

// // // // // // // //                   <hr className="my-4" />
                  
// // // // // // // //                   <h5 className="mb-3">
// // // // // // // //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// // // // // // // //                     Project Details
// // // // // // // //                   </h5>
                  
// // // // // // // //                   <Form.Group className="mb-3">
// // // // // // // //                     <Form.Label>
// // // // // // // //                       Project Title <span className="text-danger">*</span>
// // // // // // // //                     </Form.Label>
// // // // // // // //                     <InputGroup hasValidation>
// // // // // // // //                       <InputGroup.Text className="bg-light">
// // // // // // // //                         <FontAwesomeIcon icon={faTag} />
// // // // // // // //                       </InputGroup.Text>
// // // // // // // //                       <Form.Control
// // // // // // // //                         type="text"
// // // // // // // //                         name="project_title"
// // // // // // // //                         value={formData.project_title}
// // // // // // // //                         onChange={handleChange}
// // // // // // // //                         isInvalid={!!errors.project_title}
// // // // // // // //                         placeholder="e.g. Product Launch Promo"
// // // // // // // //                         required
// // // // // // // //                       />
// // // // // // // //                       <Form.Control.Feedback type="invalid">
// // // // // // // //                         {errors.project_title}
// // // // // // // //                       </Form.Control.Feedback>
// // // // // // // //                     </InputGroup>
// // // // // // // //                   </Form.Group>

// // // // // // // //                   <Row>
// // // // // // // //                     <Col md={6}>
// // // // // // // //                       <Form.Group className="mb-3">
// // // // // // // //                         <Form.Label>
// // // // // // // //                           Category <span className="text-danger">*</span>
// // // // // // // //                         </Form.Label>
// // // // // // // //                         <InputGroup hasValidation>
// // // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // // //                             <FontAwesomeIcon icon={faTag} />
// // // // // // // //                           </InputGroup.Text>
// // // // // // // //                           <Form.Select 
// // // // // // // //                             name="category"
// // // // // // // //                             value={formData.category}
// // // // // // // //                             onChange={handleChange}
// // // // // // // //                             isInvalid={!!errors.category}
// // // // // // // //                             required
// // // // // // // //                           >
// // // // // // // //                             <option value="" disabled>Select a option</option>
// // // // // // // //                             <option value="Digital Bytes">Digital Bytes</option>
// // // // // // // //                             <option value="Piece to Camera">Piece to Camera</option>
// // // // // // // //                             <option value="Digital Video">Digital Video</option>
// // // // // // // //                             <option value="Behind the Scene">Behind the Scene</option>
// // // // // // // //                           </Form.Select>
// // // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // // //                             {errors.category}
// // // // // // // //                           </Form.Control.Feedback>
// // // // // // // //                         </InputGroup>
// // // // // // // //                       </Form.Group>
// // // // // // // //                     </Col>
                    
// // // // // // // //                     <Col md={6}>
// // // // // // // //                       <Form.Group className="mb-3">
// // // // // // // //                         <Form.Label>
// // // // // // // //                           Location <span className="text-danger">*</span>
// // // // // // // //                         </Form.Label>
// // // // // // // //                         <InputGroup hasValidation>
// // // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // // //                             <FontAwesomeIcon icon={faMapMarkerAlt} />
// // // // // // // //                           </InputGroup.Text>
// // // // // // // //                           <Form.Select 
// // // // // // // //                             name="location"
// // // // // // // //                             value={formData.location}
// // // // // // // //                             onChange={handleChange}
// // // // // // // //                             isInvalid={!!errors.location}
// // // // // // // //                             required
// // // // // // // //                           >
// // // // // // // //                             <option value="" disabled>Select a location</option>
// // // // // // // //                             <option value="Mumbai">Mumbai</option>
// // // // // // // //                             <option value="Outside Mumbai">Outside Mumbai</option>
// // // // // // // //                           </Form.Select>
// // // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // // //                             {errors.location}
// // // // // // // //                           </Form.Control.Feedback>
// // // // // // // //                         </InputGroup>
// // // // // // // //                       </Form.Group>
// // // // // // // //                     </Col>
// // // // // // // //                   </Row>

// // // // // // // //                   <hr className="my-4" />
                  
// // // // // // // //                   <h5 className="mb-3">
// // // // // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // // // // //                     Services & Scheduling
// // // // // // // //                   </h5>
                  
// // // // // // // //                   <Form.Group className="mb-4">
// // // // // // // //                     <Form.Label>
// // // // // // // //                       Select Required Services <span className="text-danger">*</span>
// // // // // // // //                     </Form.Label>
// // // // // // // //                     {isLoading ? (
// // // // // // // //                       <div className="text-center py-4">
// // // // // // // //                         <Spinner animation="border" variant="primary" />
// // // // // // // //                         <p className="mt-2">Loading available services...</p>
// // // // // // // //                       </div>
// // // // // // // //                     ) : services.length > 0 ? (
// // // // // // // //                       <div className="service-selection p-3 border rounded bg-light">
// // // // // // // //                         <Row>
// // // // // // // //                           {services.map(service => (
// // // // // // // //                             <Col md={6} key={service.id}>
// // // // // // // //                               <Form.Check
// // // // // // // //                                 type="checkbox"
// // // // // // // //                                 id={`service-${service.id}`}
// // // // // // // //                                 className="mb-2 d-flex align-items-center"
// // // // // // // //                               >
// // // // // // // //                                 <Form.Check.Input
// // // // // // // //                                   type="checkbox"
// // // // // // // //                                   value={service.id}
// // // // // // // //                                   checked={formData.services.includes(service.id)}
// // // // // // // //                                   onChange={handleChange}
// // // // // // // //                                   name="services"
// // // // // // // //                                   isInvalid={!!errors.services && formData.services.length === 0}
// // // // // // // //                                 />
// // // // // // // //                                 <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
// // // // // // // //                                   <span>{service.service_name}</span>
// // // // // // // //                                   {/* <Badge bg="light" text="dark" className="ms-2 rate-display">
// // // // // // // //                                     ₹{service.rate_per_day.toLocaleString()}/day
// // // // // // // //                                   </Badge> */}
// // // // // // // //                                 </Form.Check.Label>
// // // // // // // //                               </Form.Check>
// // // // // // // //                             </Col>
// // // // // // // //                           ))}
// // // // // // // //                         </Row>
// // // // // // // //                         {errors.services && (
// // // // // // // //                           <div className="text-danger small mt-2">
// // // // // // // //                             <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
// // // // // // // //                             {errors.services}
// // // // // // // //                           </div>
// // // // // // // //                         )}
// // // // // // // //                       </div>
// // // // // // // //                     ) : (
// // // // // // // //                       <Alert variant="warning">
// // // // // // // //                         No services available. Please contact the administrator.
// // // // // // // //                       </Alert>
// // // // // // // //                     )}
// // // // // // // //                   </Form.Group>

// // // // // // // //                   <Row>
// // // // // // // //                     <Col md={6}>
// // // // // // // //                       <Form.Group className="mb-3">
// // // // // // // //                         <Form.Label>
// // // // // // // //                           Number of Days <span className="text-danger">*</span>
// // // // // // // //                         </Form.Label>
// // // // // // // //                         <InputGroup>
// // // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // // //                             <FontAwesomeIcon icon={faCalendarAlt} />
// // // // // // // //                           </InputGroup.Text>
// // // // // // // //                           <Form.Control
// // // // // // // //                             type="number"
// // // // // // // //                             name="days"
// // // // // // // //                             value={formData.days}
// // // // // // // //                             onChange={handleChange}
// // // // // // // //                             min="1"
// // // // // // // //                             max="100"
// // // // // // // //                             required
// // // // // // // //                           />
// // // // // // // //                         </InputGroup>
// // // // // // // //                       </Form.Group>
// // // // // // // //                     </Col>
                    
// // // // // // // //                     <Col md={6}>
// // // // // // // //                       <Form.Group className="mb-3">
// // // // // // // //                         <Form.Label>
// // // // // // // //                           Shoot Date <span className="text-danger">*</span>
// // // // // // // //                           <OverlayTrigger
// // // // // // // //                             placement="top"
// // // // // // // //                             overlay={
// // // // // // // //                               <Tooltip>
// // // // // // // //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// // // // // // // //                               </Tooltip>
// // // // // // // //                             }
// // // // // // // //                           >
// // // // // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // // // // //                           </OverlayTrigger>
// // // // // // // //                         </Form.Label>
// // // // // // // //                         <InputGroup hasValidation>
// // // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // // //                             <FontAwesomeIcon icon={faCalendarAlt} />
// // // // // // // //                           </InputGroup.Text>
// // // // // // // //                           <Form.Control
// // // // // // // //                             type="date"
// // // // // // // //                             name="shoot_dates"
// // // // // // // //                             value={formData.shoot_dates}
// // // // // // // //                             onChange={handleChange}
// // // // // // // //                             isInvalid={!!errors.shoot_dates}
// // // // // // // //                             min={minDate}
// // // // // // // //                             max={maxDate}
// // // // // // // //                             required
// // // // // // // //                           />
// // // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // // //                             {errors.shoot_dates}
// // // // // // // //                           </Form.Control.Feedback>
// // // // // // // //                         </InputGroup>
// // // // // // // //                       </Form.Group>
// // // // // // // //                     </Col>
// // // // // // // //                   </Row>

// // // // // // // //                   <div className="d-grid mt-4">
// // // // // // // //                     <Button 
// // // // // // // //                       variant="success" 
// // // // // // // //                       type="submit" 
// // // // // // // //                       size="lg"
// // // // // // // //                       disabled={formSubmitting || isLoading}
// // // // // // // //                     >
// // // // // // // //                       {formSubmitting ? (
// // // // // // // //                         <>
// // // // // // // //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // // // // //                           Generating Proposal...
// // // // // // // //                         </>
// // // // // // // //                       ) : (
// // // // // // // //                         <>
// // // // // // // //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// // // // // // // //                           Generate Proposal
// // // // // // // //                         </>
// // // // // // // //                       )}
// // // // // // // //                     </Button>
// // // // // // // //                   </div>
// // // // // // // //                 </Form>
// // // // // // // //               </Card.Body>
// // // // // // // //             </Card>
// // // // // // // //           </Col>

// // // // // // // //           <Col lg={4}>
// // // // // // // //             <div className="sticky-top" style={{ top: '20px' }}>
// // // // // // // //               <Card className="shadow-sm border-0 mb-4">
// // // // // // // //                 <Card.Body className="p-4">
// // // // // // // //                   <h5 className="mb-3">
// // // // // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // // // // //                     Quote Summary
// // // // // // // //                   </h5>
                  
// // // // // // // //                   {formData.client_name && (
// // // // // // // //                     <p>
// // // // // // // //                       <strong>Client:</strong> {formData.client_name}
// // // // // // // //                     </p>
// // // // // // // //                   )}
                  
// // // // // // // //                   {formData.project_title && (
// // // // // // // //                     <p>
// // // // // // // //                       <strong>Project:</strong> {formData.project_title}
// // // // // // // //                     </p>
// // // // // // // //                   )}
                  
// // // // // // // //                   {formData.days > 0 && (
// // // // // // // //                     <p>
// // // // // // // //                       <strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}
// // // // // // // //                     </p>
// // // // // // // //                   )}

// // // // // // // //                   <div className="mb-3">
// // // // // // // //                     <strong>Selected Services:</strong>
// // // // // // // //                     {selectedServicesDetails.length > 0 ? (
// // // // // // // //                       <ListGroup variant="flush" className="mt-2">
// // // // // // // //                         {selectedServicesDetails.map((service, index) => (
// // // // // // // //                           <ListGroup.Item key={index} className="px-0 py-2 d-flex justify-content-between align-items-center border-bottom">
// // // // // // // //                             <span>{service.name}</span>
// // // // // // // //                             <Badge bg="light" text="dark" className="rate-display">
// // // // // // // //                               ₹{service.rate * formData.days} 
// // // // // // // //                               <span className="ms-1 text-muted">
// // // // // // // //                                 (₹{service.rate}/day × {formData.days})
// // // // // // // //                               </span>
// // // // // // // //                             </Badge>
// // // // // // // //                           </ListGroup.Item>
// // // // // // // //                         ))}
// // // // // // // //                       </ListGroup>
// // // // // // // //                     ) : (
// // // // // // // //                       <p className="text-muted">No services selected</p>
// // // // // // // //                     )}
// // // // // // // //                   </div>

// // // // // // // //                   <hr />
                  
// // // // // // // //                   <div className="d-flex justify-content-between align-items-center">
// // // // // // // //                     <h4 className="mb-0">Total:</h4>
// // // // // // // //                     <h4 className="mb-0 rate-display">₹{total.toLocaleString()}</h4>
// // // // // // // //                   </div>
                  
// // // // // // // //                   {selectedServicesDetails.length > 0 && (
// // // // // // // //                     <div className="mt-3 text-center">
// // // // // // // //                       <small className="text-muted">
// // // // // // // //                         <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // // // // // // //                         This is an estimate based on your selections
// // // // // // // //                       </small>
// // // // // // // //                     </div>
// // // // // // // //                   )}
// // // // // // // //                 </Card.Body>
// // // // // // // //               </Card>
              
// // // // // // // //               <Card className="shadow-sm border-0 bg-light">
// // // // // // // //                 <Card.Body className="p-3">
// // // // // // // //                   <div className="d-flex align-items-center">
// // // // // // // //                     <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
// // // // // // // //                     <small>
// // // // // // // //                       <strong>Need help?</strong> Contact the admin team at{' '}
// // // // // // // //                       <a href="mailto:admin@tsbi.in">tech@tsbi.in</a> for assistance.
// // // // // // // //                     </small>
// // // // // // // //                   </div>
// // // // // // // //                 </Card.Body>
// // // // // // // //               </Card>
// // // // // // // //             </div>
// // // // // // // //           </Col>
// // // // // // // //         </Row>
// // // // // // // //       </Container>

// // // // // // // //       {/* CSS for animation, hover effects, and rate display */}
// // // // // // // //       <style jsx>{`
// // // // // // // //         .header {
// // // // // // // //           border-bottom: 1px solid #e9e9e9;
// // // // // // // //         }
        
// // // // // // // //         .text-purple {
// // // // // // // //           color: #8e24aa;
// // // // // // // //           font-size: 1.75rem;
// // // // // // // //           font-weight: 600;
// // // // // // // //         }
        
// // // // // // // //         .proposal-form-component .card {
// // // // // // // //           transition: box-shadow 0.3s ease;
// // // // // // // //         }
        
// // // // // // // //         .proposal-form-component .card:hover {
// // // // // // // //           box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
// // // // // // // //         }
        
// // // // // // // //         .rate-display {
// // // // // // // //           font-family: monospace;
// // // // // // // //           white-space: nowrap;
// // // // // // // //         }
        
// // // // // // // //         .service-selection {
// // // // // // // //           max-height: 300px;
// // // // // // // //           overflow-y: auto;
// // // // // // // //         }
        
// // // // // // // //         .form-check {
// // // // // // // //           transition: background-color 0.2s ease;
// // // // // // // //         }
        
// // // // // // // //         .form-check:hover {
// // // // // // // //           background-color: rgba(13, 110, 253, 0.05);
// // // // // // // //         }
        
// // // // // // // //         .sticky-top {
// // // // // // // //           z-index: 100;
// // // // // // // //         }

// // // // // // // //         @media (max-width: 768px) {
// // // // // // // //           .text-purple {
// // // // // // // //             font-size: 1.25rem;
// // // // // // // //           }
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </div>
// // // // // // // //   );
// // // // // // // // }

// // // // // // // // export default ProposalForm;
// // // // // // // // Updated ProposalForm component with Delivery Date field

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { 
// // // // // // //   Form, 
// // // // // // //   Button, 
// // // // // // //   Card, 
// // // // // // //   Alert, 
// // // // // // //   Container, 
// // // // // // //   Row, 
// // // // // // //   Col, 
// // // // // // //   InputGroup, 
// // // // // // //   Badge,
// // // // // // //   Spinner,
// // // // // // //   OverlayTrigger,
// // // // // // //   Tooltip,
// // // // // // //   ListGroup
// // // // // // // } from 'react-bootstrap';
// // // // // // // import { fetchServices } from '../../services/api';
// // // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // // import { 
// // // // // // //   faCheck,
// // // // // // //   faTimes,
// // // // // // //   faInfoCircle,
// // // // // // //   faCalendarAlt,
// // // // // // //   faBuilding,
// // // // // // //   faEnvelope,
// // // // // // //   faTag,
// // // // // // //   faMapMarkerAlt,
// // // // // // //   faMoneyBillWave,
// // // // // // //   faFilePdf,
// // // // // // //   faUser,
// // // // // // //   faClipboardList,
// // // // // // //   faExclamationTriangle,
// // // // // // //   faTruck
// // // // // // // } from '@fortawesome/free-solid-svg-icons';
// // // // // // // import Logo from '../../assets/Logo.png';

// // // // // // // function ProposalForm({ onSubmit, onAdminClick }) {
// // // // // // //   const [services, setServices] = useState([]);
// // // // // // //   const [formData, setFormData] = useState({
// // // // // // //     client_name: '',
// // // // // // //     your_email: '',
// // // // // // //     project_title: '',
// // // // // // //     category: '',
// // // // // // //     location: '',
// // // // // // //     services: [],
// // // // // // //     days: 1,
// // // // // // //     shoot_dates: '',
// // // // // // //     delivery_date: '' // Add delivery_date field
// // // // // // //   });
// // // // // // //   const [errors, setErrors] = useState({});
// // // // // // //   const [total, setTotal] = useState(0);
// // // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // // //   const [serviceError, setServiceError] = useState('');
// // // // // // //   const [formSubmitting, setFormSubmitting] = useState(false);

// // // // // // //   // Load services on component mount
// // // // // // //   useEffect(() => {
// // // // // // //     const loadServices = async () => {
// // // // // // //       setIsLoading(true);
// // // // // // //       try {
// // // // // // //         console.log('Fetching services from API...');
// // // // // // //         const response = await fetchServices();
// // // // // // //         const servicesWithStringIds = response.data.map(service => ({
// // // // // // //           ...service,
// // // // // // //           id: service.id.toString() // Ensure IDs are strings
// // // // // // //         }));
// // // // // // //         console.log('Services loaded:', servicesWithStringIds);
// // // // // // //         setServices(servicesWithStringIds);
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Error loading services:', error);
// // // // // // //         setServiceError('Failed to load services. Please refresh the page or contact support.');
// // // // // // //       } finally {
// // // // // // //         setIsLoading(false);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     loadServices();
// // // // // // //   }, []);

// // // // // // //   // Calculate total when services or days change
// // // // // // //   useEffect(() => {
// // // // // // //     calculateTotal();
// // // // // // //   }, [formData.services, formData.days, services]);

// // // // // // //   // Update delivery date min when shoot date changes
// // // // // // //   useEffect(() => {
// // // // // // //     if (formData.shoot_dates && !formData.delivery_date) {
// // // // // // //       // Clear any delivery date errors since we'll be setting a new min date
// // // // // // //       if (errors.delivery_date) {
// // // // // // //         setErrors(prev => {
// // // // // // //           const newErrors = {...prev};
// // // // // // //           delete newErrors.delivery_date;
// // // // // // //           return newErrors;
// // // // // // //         });
// // // // // // //       }
// // // // // // //     }
// // // // // // //   }, [formData.shoot_dates]);

// // // // // // //   const calculateTotal = () => {
// // // // // // //     let calculatedTotal = 0;
// // // // // // //     formData.services.forEach(serviceId => {
// // // // // // //       const service = services.find(s => s.id === serviceId);
// // // // // // //       if (service) {
// // // // // // //         calculatedTotal += service.rate_per_day * formData.days;
// // // // // // //       }
// // // // // // //     });
// // // // // // //     console.log('Calculated total:', calculatedTotal);
// // // // // // //     setTotal(calculatedTotal);
// // // // // // //   };

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value, type, checked } = e.target;
// // // // // // //     console.log('Input changed:', { name, value, type, checked });

// // // // // // //     // Clear specific error when field is changed
// // // // // // //     if (errors[name]) {
// // // // // // //       setErrors(prev => {
// // // // // // //         const newErrors = {...prev};
// // // // // // //         delete newErrors[name];
// // // // // // //         return newErrors;
// // // // // // //       });
// // // // // // //     }

// // // // // // //     setFormData(prev => {
// // // // // // //       if (type === 'checkbox') {
// // // // // // //         const newServices = checked
// // // // // // //           ? [...prev.services, value]
// // // // // // //           : prev.services.filter(id => id !== value);
        
// // // // // // //         console.log('Updated services selection:', newServices);
// // // // // // //         return {
// // // // // // //           ...prev,
// // // // // // //           services: newServices
// // // // // // //         };
// // // // // // //       }
      
// // // // // // //       return {
// // // // // // //         ...prev,
// // // // // // //         [name]: value
// // // // // // //       };
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const validateForm = () => {
// // // // // // //     const newErrors = {};
    
// // // // // // //     // Client name validation
// // // // // // //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// // // // // // //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// // // // // // //     }
    
// // // // // // //     // Email validation
// // // // // // //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// // // // // // //     if (!emailPattern.test(formData.your_email)) {
// // // // // // //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// // // // // // //     }
    
// // // // // // //     // Project title validation
// // // // // // //     if (!formData.project_title || formData.project_title.trim() === '') {
// // // // // // //       newErrors.project_title = 'Project title is required';
// // // // // // //     } else if (formData.project_title.length > 100) {
// // // // // // //       newErrors.project_title = 'Project title must be 1–100 characters long';
// // // // // // //     }
    
// // // // // // //     // Category validation
// // // // // // //     if (!formData.category) {
// // // // // // //       newErrors.category = 'Please select a category';
// // // // // // //     }
    
// // // // // // //     // Location validation
// // // // // // //     if (!formData.location) {
// // // // // // //       newErrors.location = 'Please select a location';
// // // // // // //     }
    
// // // // // // //     // Shoot date validation
// // // // // // //     if (!formData.shoot_dates) {
// // // // // // //       newErrors.shoot_dates = 'Shoot date is required';
// // // // // // //     } else {
// // // // // // //       const shootDate = new Date(formData.shoot_dates);
// // // // // // //       const today = new Date();
// // // // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // // //       const fyStart = new Date(fyStartYear, 3, 1); // April 1
// // // // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // // //       if (shootDate < fyStart || shootDate > fyEnd) {
// // // // // // //         newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Delivery date validation
// // // // // // //     if (!formData.delivery_date) {
// // // // // // //       newErrors.delivery_date = 'Delivery date is required';
// // // // // // //     } else {
// // // // // // //       const deliveryDate = new Date(formData.delivery_date);
// // // // // // //       const shootDate = formData.shoot_dates ? new Date(formData.shoot_dates) : null;
// // // // // // //       const today = new Date();
// // // // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // // //       if (deliveryDate > fyEnd) {
// // // // // // //         newErrors.delivery_date = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // // // //       } else if (shootDate && deliveryDate < shootDate) {
// // // // // // //         newErrors.delivery_date = 'Delivery date must be on or after shoot date';
// // // // // // //       }
// // // // // // //     }
    
// // // // // // //     // Services validation
// // // // // // //     if (formData.services.length === 0) {
// // // // // // //       newErrors.services = 'Please select at least one service';
// // // // // // //     }
    
// // // // // // //     console.log('Form validation errors:', newErrors);
// // // // // // //     setErrors(newErrors);
// // // // // // //     return Object.keys(newErrors).length === 0;
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     console.log('Form submission attempted');
    
// // // // // // //     if (validateForm()) {
// // // // // // //       console.log('Form is valid, submitting:', formData);
// // // // // // //       setFormSubmitting(true);
// // // // // // //       try {
// // // // // // //         await onSubmit(formData);
// // // // // // //       } catch (error) {
// // // // // // //         console.error('Form submission error:', error);
// // // // // // //         setErrors({
// // // // // // //           submission: 'An error occurred while generating the proposal. Please try again.'
// // // // // // //         });
// // // // // // //       } finally {
// // // // // // //         setFormSubmitting(false);
// // // // // // //       }
// // // // // // //     } else {
// // // // // // //       console.log('Form validation failed');
// // // // // // //       // Scroll to the first error
// // // // // // //       const firstErrorField = Object.keys(errors)[0];
// // // // // // //       if (firstErrorField) {
// // // // // // //         const element = document.getElementsByName(firstErrorField)[0];
// // // // // // //         if (element) {
// // // // // // //           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
// // // // // // //         }
// // // // // // //       }
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Calculate fiscal year dates for min/max date inputs
// // // // // // //   const today = new Date();
// // // // // // //   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // // //   const fyStart = new Date(fyStartYear, 3, 1); // April 1
// // // // // // //   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // // //   // Choose today or fiscal start, whichever is later
// // // // // // //   const effectiveMinDate = today > fyStart ? today : fyStart;

// // // // // // //   const minDate = effectiveMinDate.toISOString().split('T')[0];
// // // // // // //   const maxDate = fyEnd.toISOString().split('T')[0];

// // // // // // //   // Get min date for delivery date (should be shoot date or today, whichever is later)
// // // // // // //   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
// // // // // // //     ? formData.shoot_dates 
// // // // // // //     : minDate;

// // // // // // //   // Get selected services details for summary
// // // // // // //   const selectedServicesDetails = formData.services.map(id => {
// // // // // // //     const service = services.find(s => s.id === id);
// // // // // // //     return service ? {
// // // // // // //       name: service.service_name,
// // // // // // //       rate: service.rate_per_day
// // // // // // //     } : null;
// // // // // // //   }).filter(Boolean);

// // // // // // //   return (
// // // // // // //     <div className="proposal-form-component">
// // // // // // //       <div className="header bg-white border-bottom py-2">
// // // // // // //         <Container fluid className="px-4">
// // // // // // //           <div className="d-flex justify-content-between align-items-center">
// // // // // // //             <div className="d-flex align-items-center">
// // // // // // //               <img 
// // // // // // //                 src={Logo} 
// // // // // // //                 alt="Company Logo" 
// // // // // // //                 style={{ height: '55px', width: 'auto' }} 
// // // // // // //               />
// // // // // // //             </div>
// // // // // // //             <div className="text-center flex-grow-1">
// // // // // // //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// // // // // // //             </div>
// // // // // // //             <Button 
// // // // // // //               variant="outline-danger" 
// // // // // // //               onClick={onAdminClick}
// // // // // // //               className="px-3 py-1"
// // // // // // //             >
// // // // // // //               <FontAwesomeIcon icon={faUser} className="me-2" />
// // // // // // //               Admin Login
// // // // // // //             </Button>
// // // // // // //           </div>
// // // // // // //         </Container>
// // // // // // //       </div>
      
// // // // // // //       <Container className="py-4">
        
// // // // // // //         <Row>
// // // // // // //           <Col lg={8}>
// // // // // // //             <Card className="shadow-sm border-0 mb-4">
// // // // // // //               <Card.Body className="p-4">
// // // // // // //                 <div className="d-flex justify-content-between align-items-center mb-4">
// // // // // // //                   <div>
// // // // // // //                     <h3 className="mb-1">Create Studio Proposal</h3>
// // // // // // //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// // // // // // //                   </div>
// // // // // // //                   <Badge bg="info" className="py-2 px-3">
// // // // // // //                     <FontAwesomeIcon icon={faFilePdf} className="me-1" />
// // // // // // //                     New Quote
// // // // // // //                   </Badge>
// // // // // // //                 </div>

// // // // // // //                 {errors.submission && (
// // // // // // //                   <Alert 
// // // // // // //                     variant="danger" 
// // // // // // //                     dismissible 
// // // // // // //                     onClose={() => setErrors(prev => {
// // // // // // //                       const newErrors = {...prev};
// // // // // // //                       delete newErrors.submission;
// // // // // // //                       return newErrors;
// // // // // // //                     })}
// // // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // // //                   >
// // // // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // // // //                     {errors.submission}
// // // // // // //                   </Alert>
// // // // // // //                 )}

// // // // // // //                 {serviceError && (
// // // // // // //                   <Alert 
// // // // // // //                     variant="danger" 
// // // // // // //                     dismissible 
// // // // // // //                     onClose={() => setServiceError('')}
// // // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // // //                   >
// // // // // // //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // // // // //                     {serviceError}
// // // // // // //                   </Alert>
// // // // // // //                 )}

// // // // // // //                 {Object.keys(errors).length > 0 && !errors.submission && (
// // // // // // //                   <Alert 
// // // // // // //                     variant="warning" 
// // // // // // //                     dismissible 
// // // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // // //                   >
// // // // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // // // //                     Please fix the highlighted errors below to continue.
// // // // // // //                   </Alert>
// // // // // // //                 )}

// // // // // // //                 <Form onSubmit={handleSubmit}>
// // // // // // //                   <h5 className="mb-3">
// // // // // // //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// // // // // // //                     Client Information
// // // // // // //                   </h5>
                  
// // // // // // //                   <Row>
// // // // // // //                     <Col md={6}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Brand Name <span className="text-danger">*</span>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup hasValidation>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faBuilding} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Control
// // // // // // //                             type="text"
// // // // // // //                             name="client_name"
// // // // // // //                             value={formData.client_name}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             isInvalid={!!errors.client_name}
// // // // // // //                             placeholder="e.g. Zee TV, Colors"
// // // // // // //                             required
// // // // // // //                           />
// // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // //                             {errors.client_name}
// // // // // // //                           </Form.Control.Feedback>
// // // // // // //                         </InputGroup>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
                    
// // // // // // //                     <Col md={6}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Your Email <span className="text-danger">*</span>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup hasValidation>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faEnvelope} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Control
// // // // // // //                             type="email"
// // // // // // //                             name="your_email"
// // // // // // //                             value={formData.your_email}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             isInvalid={!!errors.your_email}
// // // // // // //                             placeholder="e.g. user@tsbi.in"
// // // // // // //                             required
// // // // // // //                           />
// // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // //                             {errors.your_email}
// // // // // // //                           </Form.Control.Feedback>
// // // // // // //                         </InputGroup>
// // // // // // //                         <Form.Text className="text-muted">
// // // // // // //                           Only @tsbi.in email addresses are allowed
// // // // // // //                         </Form.Text>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
// // // // // // //                   </Row>

// // // // // // //                   <hr className="my-4" />
                  
// // // // // // //                   <h5 className="mb-3">
// // // // // // //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// // // // // // //                     Project Details
// // // // // // //                   </h5>
                  
// // // // // // //                   <Form.Group className="mb-3">
// // // // // // //                     <Form.Label>
// // // // // // //                       Project Title <span className="text-danger">*</span>
// // // // // // //                     </Form.Label>
// // // // // // //                     <InputGroup hasValidation>
// // // // // // //                       <InputGroup.Text className="bg-light">
// // // // // // //                         <FontAwesomeIcon icon={faTag} />
// // // // // // //                       </InputGroup.Text>
// // // // // // //                       <Form.Control
// // // // // // //                         type="text"
// // // // // // //                         name="project_title"
// // // // // // //                         value={formData.project_title}
// // // // // // //                         onChange={handleChange}
// // // // // // //                         isInvalid={!!errors.project_title}
// // // // // // //                         placeholder="e.g. Product Launch Promo"
// // // // // // //                         required
// // // // // // //                       />
// // // // // // //                       <Form.Control.Feedback type="invalid">
// // // // // // //                         {errors.project_title}
// // // // // // //                       </Form.Control.Feedback>
// // // // // // //                     </InputGroup>
// // // // // // //                   </Form.Group>

// // // // // // //                   <Row>
// // // // // // //                     <Col md={6}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Category <span className="text-danger">*</span>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup hasValidation>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faTag} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Select 
// // // // // // //                             name="category"
// // // // // // //                             value={formData.category}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             isInvalid={!!errors.category}
// // // // // // //                             required
// // // // // // //                           >
// // // // // // //                             <option value="" disabled>Select a option</option>
// // // // // // //                             <option value="Digital Bytes">Digital Bytes</option>
// // // // // // //                             <option value="Piece to Camera">Piece to Camera</option>
// // // // // // //                             <option value="Digital Video">Digital Video</option>
// // // // // // //                             <option value="Behind the Scene">Behind the Scene</option>
// // // // // // //                           </Form.Select>
// // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // //                             {errors.category}
// // // // // // //                           </Form.Control.Feedback>
// // // // // // //                         </InputGroup>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
                    
// // // // // // //                     <Col md={6}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Location <span className="text-danger">*</span>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup hasValidation>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faMapMarkerAlt} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Select 
// // // // // // //                             name="location"
// // // // // // //                             value={formData.location}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             isInvalid={!!errors.location}
// // // // // // //                             required
// // // // // // //                           >
// // // // // // //                             <option value="" disabled>Select a location</option>
// // // // // // //                             <option value="Mumbai">Mumbai</option>
// // // // // // //                             <option value="Outside Mumbai">Outside Mumbai</option>
// // // // // // //                           </Form.Select>
// // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // //                             {errors.location}
// // // // // // //                           </Form.Control.Feedback>
// // // // // // //                         </InputGroup>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
// // // // // // //                   </Row>

// // // // // // //                   <hr className="my-4" />
                  
// // // // // // //                   <h5 className="mb-3">
// // // // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // // // //                     Services & Scheduling
// // // // // // //                   </h5>
                  
// // // // // // //                   <Form.Group className="mb-4">
// // // // // // //                     <Form.Label>
// // // // // // //                       Select Required Services <span className="text-danger">*</span>
// // // // // // //                     </Form.Label>
// // // // // // //                     {isLoading ? (
// // // // // // //                       <div className="text-center py-4">
// // // // // // //                         <Spinner animation="border" variant="primary" />
// // // // // // //                         <p className="mt-2">Loading available services...</p>
// // // // // // //                       </div>
// // // // // // //                     ) : services.length > 0 ? (
// // // // // // //                       <div className="service-selection p-3 border rounded bg-light">
// // // // // // //                         <Row>
// // // // // // //                           {services.map(service => (
// // // // // // //                             <Col md={6} key={service.id}>
// // // // // // //                               <Form.Check
// // // // // // //                                 type="checkbox"
// // // // // // //                                 id={`service-${service.id}`}
// // // // // // //                                 className="mb-2 d-flex align-items-center"
// // // // // // //                               >
// // // // // // //                                 <Form.Check.Input
// // // // // // //                                   type="checkbox"
// // // // // // //                                   value={service.id}
// // // // // // //                                   checked={formData.services.includes(service.id)}
// // // // // // //                                   onChange={handleChange}
// // // // // // //                                   name="services"
// // // // // // //                                   isInvalid={!!errors.services && formData.services.length === 0}
// // // // // // //                                 />
// // // // // // //                                 <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
// // // // // // //                                   <span>{service.service_name}</span>
// // // // // // //                                 </Form.Check.Label>
// // // // // // //                               </Form.Check>
// // // // // // //                             </Col>
// // // // // // //                           ))}
// // // // // // //                         </Row>
// // // // // // //                         {errors.services && (
// // // // // // //                           <div className="text-danger small mt-2">
// // // // // // //                             <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
// // // // // // //                             {errors.services}
// // // // // // //                           </div>
// // // // // // //                         )}
// // // // // // //                       </div>
// // // // // // //                     ) : (
// // // // // // //                       <Alert variant="warning">
// // // // // // //                         No services available. Please contact the administrator.
// // // // // // //                       </Alert>
// // // // // // //                     )}
// // // // // // //                   </Form.Group>

// // // // // // //                   <Row>
// // // // // // //                     <Col md={4}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Number of Days <span className="text-danger">*</span>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faCalendarAlt} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Control
// // // // // // //                             type="number"
// // // // // // //                             name="days"
// // // // // // //                             value={formData.days}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             min="1"
// // // // // // //                             max="100"
// // // // // // //                             required
// // // // // // //                           />
// // // // // // //                         </InputGroup>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
                    
// // // // // // //                     <Col md={4}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Shoot Date <span className="text-danger">*</span>
// // // // // // //                           <OverlayTrigger
// // // // // // //                             placement="top"
// // // // // // //                             overlay={
// // // // // // //                               <Tooltip>
// // // // // // //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// // // // // // //                               </Tooltip>
// // // // // // //                             }
// // // // // // //                           >
// // // // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // // // //                           </OverlayTrigger>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup hasValidation>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faCalendarAlt} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Control
// // // // // // //                             type="date"
// // // // // // //                             name="shoot_dates"
// // // // // // //                             value={formData.shoot_dates}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             isInvalid={!!errors.shoot_dates}
// // // // // // //                             min={minDate}
// // // // // // //                             max={maxDate}
// // // // // // //                             required
// // // // // // //                           />
// // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // //                             {errors.shoot_dates}
// // // // // // //                           </Form.Control.Feedback>
// // // // // // //                         </InputGroup>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
                    
// // // // // // //                     {/* New Delivery Date Field */}
// // // // // // //                     <Col md={4}>
// // // // // // //                       <Form.Group className="mb-3">
// // // // // // //                         <Form.Label>
// // // // // // //                           Delivery Date <span className="text-danger">*</span>
// // // // // // //                           <OverlayTrigger
// // // // // // //                             placement="top"
// // // // // // //                             overlay={
// // // // // // //                               <Tooltip>
// // // // // // //                                 Must be on or after shoot date, within fiscal year
// // // // // // //                               </Tooltip>
// // // // // // //                             }
// // // // // // //                           >
// // // // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // // // //                           </OverlayTrigger>
// // // // // // //                         </Form.Label>
// // // // // // //                         <InputGroup hasValidation>
// // // // // // //                           <InputGroup.Text className="bg-light">
// // // // // // //                             <FontAwesomeIcon icon={faTruck} />
// // // // // // //                           </InputGroup.Text>
// // // // // // //                           <Form.Control
// // // // // // //                             type="date"
// // // // // // //                             name="delivery_date"
// // // // // // //                             value={formData.delivery_date}
// // // // // // //                             onChange={handleChange}
// // // // // // //                             isInvalid={!!errors.delivery_date}
// // // // // // //                             min={deliveryMinDate}
// // // // // // //                             max={maxDate}
// // // // // // //                             required
// // // // // // //                           />
// // // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // // //                             {errors.delivery_date}
// // // // // // //                           </Form.Control.Feedback>
// // // // // // //                         </InputGroup>
// // // // // // //                       </Form.Group>
// // // // // // //                     </Col>
// // // // // // //                   </Row>

// // // // // // //                   <div className="d-grid mt-4">
// // // // // // //                     <Button 
// // // // // // //                       variant="success" 
// // // // // // //                       type="submit" 
// // // // // // //                       size="lg"
// // // // // // //                       disabled={formSubmitting || isLoading}
// // // // // // //                     >
// // // // // // //                       {formSubmitting ? (
// // // // // // //                         <>
// // // // // // //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // // // //                           Generating Proposal...
// // // // // // //                         </>
// // // // // // //                       ) : (
// // // // // // //                         <>
// // // // // // //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// // // // // // //                           Generate Proposal
// // // // // // //                         </>
// // // // // // //                       )}
// // // // // // //                     </Button>
// // // // // // //                   </div>
// // // // // // //                 </Form>
// // // // // // //               </Card.Body>
// // // // // // //             </Card>
// // // // // // //           </Col>

// // // // // // //           <Col lg={4}>
// // // // // // //             <div className="sticky-top" style={{ top: '20px' }}>
// // // // // // //               <Card className="shadow-sm border-0 mb-4">
// // // // // // //                 <Card.Body className="p-4">
// // // // // // //                   <h5 className="mb-3">
// // // // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // // // //                     Quote Summary
// // // // // // //                   </h5>
                  
// // // // // // //                   {formData.client_name && (
// // // // // // //                     <p>
// // // // // // //                       <strong>Client:</strong> {formData.client_name}
// // // // // // //                     </p>
// // // // // // //                   )}
                  
// // // // // // //                   {formData.project_title && (
// // // // // // //                     <p>
// // // // // // //                       <strong>Project:</strong> {formData.project_title}
// // // // // // //                     </p>
// // // // // // //                   )}
                  
// // // // // // //                   {formData.days > 0 && (
// // // // // // //                     <p>
// // // // // // //                       <strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}
// // // // // // //                     </p>
// // // // // // //                   )}
                  
// // // // // // //                   {formData.shoot_dates && (
// // // // // // //                     <p>
// // // // // // //                       <strong>Shoot Date:</strong> {new Date(formData.shoot_dates).toLocaleDateString()}
// // // // // // //                     </p>
// // // // // // //                   )}
                  
// // // // // // //                   {formData.delivery_date && (
// // // // // // //                     <p>
// // // // // // //                       <strong>Delivery Date:</strong> {new Date(formData.delivery_date).toLocaleDateString()}
// // // // // // //                     </p>
// // // // // // //                   )}

// // // // // // //                   <div className="mb-3">
// // // // // // //                     <strong>Selected Services:</strong>
// // // // // // //                     {selectedServicesDetails.length > 0 ? (
// // // // // // //                       <ListGroup variant="flush" className="mt-2">
// // // // // // //                         {selectedServicesDetails.map((service, index) => (
// // // // // // //                           <ListGroup.Item key={index} className="px-0 py-2 d-flex justify-content-between align-items-center border-bottom">
// // // // // // //                             <span>{service.name}</span>
// // // // // // //                             <Badge bg="light" text="dark" className="rate-display">
// // // // // // //                               ₹{service.rate * formData.days} 
// // // // // // //                               <span className="ms-1 text-muted">
// // // // // // //                                 (₹{service.rate}/day × {formData.days})
// // // // // // //                               </span>
// // // // // // //                             </Badge>
// // // // // // //                           </ListGroup.Item>
// // // // // // //                         ))}
// // // // // // //                       </ListGroup>
// // // // // // //                     ) : (
// // // // // // //                       <p className="text-muted">No services selected</p>
// // // // // // //                     )}
// // // // // // //                   </div>

// // // // // // //                   <hr />
                  
// // // // // // //                   <div className="d-flex justify-content-between align-items-center">
// // // // // // //                     <h4 className="mb-0">Total:</h4>
// // // // // // //                     <h4 className="mb-0 rate-display">₹{total.toLocaleString()}</h4>
// // // // // // //                   </div>
                  
// // // // // // //                   {selectedServicesDetails.length > 0 && (
// // // // // // //                     <div className="mt-3 text-center">
// // // // // // //                       <small className="text-muted">
// // // // // // //                         <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // // // // // //                         This is an estimate based on your selections
// // // // // // //                       </small>
// // // // // // //                     </div>
// // // // // // //                   )}
// // // // // // //                 </Card.Body>
// // // // // // //               </Card>
              
// // // // // // //               <Card className="shadow-sm border-0 bg-light">
// // // // // // //                 <Card.Body className="p-3">
// // // // // // //                   <div className="d-flex align-items-center">
// // // // // // //                     <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
// // // // // // //                     <small>
// // // // // // //                       <strong>Need help?</strong> Contact the admin team at{' '}
// // // // // // //                       <a href="mailto:admin@tsbi.in">tech@tsbi.in</a> for assistance.
// // // // // // //                     </small>
// // // // // // //                   </div>
// // // // // // //                 </Card.Body>
// // // // // // //               </Card>
// // // // // // //             </div>
// // // // // // //           </Col>
// // // // // // //         </Row>
// // // // // // //       </Container>

// // // // // // //       {/* CSS for animation, hover effects, and rate display */}
// // // // // // //       <style jsx>{`
// // // // // // //         .header {
// // // // // // //           border-bottom: 1px solid #e9e9e9;
// // // // // // //         }
        
// // // // // // //         .text-purple {
// // // // // // //           color: #8e24aa;
// // // // // // //           font-size: 1.75rem;
// // // // // // //           font-weight: 600;
// // // // // // //         }
        
// // // // // // //         .proposal-form-component .card {
// // // // // // //           transition: box-shadow 0.3s ease;
// // // // // // //         }
        
// // // // // // //         .proposal-form-component .card:hover {
// // // // // // //           box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
// // // // // // //         }
        
// // // // // // //         .rate-display {
// // // // // // //           font-family: monospace;
// // // // // // //           white-space: nowrap;
// // // // // // //         }
        
// // // // // // //         .service-selection {
// // // // // // //           max-height: 300px;
// // // // // // //           overflow-y: auto;
// // // // // // //         }
        
// // // // // // //         .form-check {
// // // // // // //           transition: background-color 0.2s ease;
// // // // // // //         }
        
// // // // // // //         .form-check:hover {
// // // // // // //           background-color: rgba(13, 110, 253, 0.05);
// // // // // // //         }
        
// // // // // // //         .sticky-top {
// // // // // // //           z-index: 100;
// // // // // // //         }

// // // // // // //         @media (max-width: 768px) {
// // // // // // //           .text-purple {
// // // // // // //             font-size: 1.25rem;
// // // // // // //           }
// // // // // // //         }
// // // // // // //       `}</style>
// // // // // // //     </div>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default ProposalForm;
// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { 
// // // // // //   Form, 
// // // // // //   Button, 
// // // // // //   Card, 
// // // // // //   Alert, 
// // // // // //   Container, 
// // // // // //   Row, 
// // // // // //   Col, 
// // // // // //   InputGroup, 
// // // // // //   Badge,
// // // // // //   Spinner,
// // // // // //   OverlayTrigger,
// // // // // //   Tooltip,
// // // // // //   ListGroup,
// // // // // //   Accordion,
// // // // // //   Nav,
// // // // // //   Tab
// // // // // // } from 'react-bootstrap';
// // // // // // import { fetchServices } from '../../services/api';
// // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // import { 
// // // // // //   faCheck,
// // // // // //   faTimes,
// // // // // //   faInfoCircle,
// // // // // //   faCalendarAlt,
// // // // // //   faBuilding,
// // // // // //   faEnvelope,
// // // // // //   faTag,
// // // // // //   faMapMarkerAlt,
// // // // // //   faMoneyBillWave,
// // // // // //   faFilePdf,
// // // // // //   faUser,
// // // // // //   faClipboardList,
// // // // // //   faExclamationTriangle,
// // // // // //   faTruck,
// // // // // //   faEdit,
// // // // // //   faCamera,
// // // // // //   faVideo,
// // // // // //   faChevronDown,
// // // // // //   faChevronRight
// // // // // // } from '@fortawesome/free-solid-svg-icons';
// // // // // // import Logo from '../../assets/Logo.png';
// // // // // // import { Navigate } from 'react-router-dom';
// // // // // // import { useUserAuth } from '../../contexts/UserAuthContext';

// // // // // // // Service categories structure
// // // // // // const SERVICE_CATEGORIES = {
// // // // // //   'pre-production': {
// // // // // //     name: 'Pre-Production',
// // // // // //     icon: faEdit,
// // // // // //     subcategories: {
// // // // // //       'part-1': {
// // // // // //         name: 'Part 1 - Creative Development'
// // // // // //       },
// // // // // //       'part-1-shoot-location': {
// // // // // //         name: 'Part 1 - Shoot Location'
// // // // // //       },
// // // // // //       'legal-permits': {
// // // // // //         name: 'Legal & Permits'
// // // // // //       },
// // // // // //       'logistics': {
// // // // // //         name: 'Logistics & Planning'
// // // // // //       }
// // // // // //     }
// // // // // //   },
// // // // // //   'production': {
// // // // // //     name: 'Production',
// // // // // //     icon: faCamera,
// // // // // //     subcategories: {
// // // // // //       'creative-team': {
// // // // // //         name: 'Part 2 - Creative Team'
// // // // // //       },
// // // // // //       'production-team': {
// // // // // //         name: 'Part 2 - Production Team'
// // // // // //       },
// // // // // //       'production-design': {
// // // // // //         name: 'Part 2 - Production Design'
// // // // // //       },
// // // // // //       'talent': {
// // // // // //         name: 'Part 2 - Talent'
// // // // // //       },
// // // // // //       'hair-makeup': {
// // // // // //         name: 'Part 2 - Hair & Make-UP'
// // // // // //       },
// // // // // //       'wardrobe': {
// // // // // //         name: 'Part 2 - Wardrobe'
// // // // // //       },
// // // // // //       'camera-grip': {
// // // // // //         name: 'Camera & Grip'
// // // // // //       },
// // // // // //       'lights': {
// // // // // //         name: 'Lights'
// // // // // //       },
// // // // // //       'vehicles': {
// // // // // //         name: 'Vehicles Hire'
// // // // // //       },
// // // // // //       'catering': {
// // // // // //         name: 'Catering'
// // // // // //       },
// // // // // //       'miscellaneous': {
// // // // // //         name: 'Miscellaneous'
// // // // // //       }
// // // // // //     }
// // // // // //   },
// // // // // //   // 'post-production': {
// // // // // //   //   name: 'Post Production',
// // // // // //   //   icon: faVideo,
// // // // // //   //   subcategories: {
// // // // // //   //     'general': {
// // // // // //   //       name: 'General Post Production'
// // // // // //   //     }
// // // // // //   //   }
// // // // // //   // }
// // // // // //    'post-production': {
// // // // // //     name: 'Post Production',
// // // // // //     icon: faVideo,
// // // // // //     // No subcategories for post-production
// // // // // //     subcategories: {}
// // // // // //   }
// // // // // // };

// // // // // // function ProposalForm({ onSubmit, onAdminClick,onHomeClick,onDashboardClick }) {
// // // // // //    const { user, logout } = useUserAuth();
// // // // // //   const [services, setServices] = useState([]);
// // // // // //   const [organizedServices, setOrganizedServices] = useState({});
// // // // // //   const [formData, setFormData] = useState({
// // // // // //     client_name: '',
// // // // // //     your_email: '',
// // // // // //     project_title: '',
// // // // // //     category: '',
// // // // // //     location: '',
// // // // // //     services: [],
// // // // // //     days: 1,
// // // // // //     shoot_dates: '',
// // // // // //     delivery_date: ''
// // // // // //   });
// // // // // //   const [errors, setErrors] = useState({});
// // // // // //   const [total, setTotal] = useState(0);
// // // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // // //   const [serviceError, setServiceError] = useState('');
// // // // // //   const [formSubmitting, setFormSubmitting] = useState(false);
// // // // // //   const [activeServiceCategory, setActiveServiceCategory] = useState('pre-production');
// // // // // //   const [expandedCategories, setExpandedCategories] = useState({});

// // // // // //   // Load services on component mount
// // // // // //   // useEffect(() => {
// // // // // //   //   const loadServices = async () => {
// // // // // //   //     setIsLoading(true);
// // // // // //   //     try {
// // // // // //   //       console.log('Fetching services from API...');
// // // // // //   //       const response = await fetchServices();
// // // // // //   //       const servicesWithStringIds = response.data.map(service => ({
// // // // // //   //         ...service,
// // // // // //   //         id: service.id.toString()
// // // // // //   //       }));
// // // // // //   //       console.log('Services loaded:', servicesWithStringIds);
// // // // // //   //       setServices(servicesWithStringIds);
        
// // // // // //   //       // Organize services by category and subcategory
// // // // // //   //       const organized = {};
// // // // // //   //       servicesWithStringIds.forEach(service => {
// // // // // //   //         const category = service.category || 'pre-production';
// // // // // //   //         const subcategory = service.subcategory || 'part-1';
          
// // // // // //   //         if (!organized[category]) {
// // // // // //   //           organized[category] = {};
// // // // // //   //         }
// // // // // //   //         if (!organized[category][subcategory]) {
// // // // // //   //           organized[category][subcategory] = [];
// // // // // //   //         }
// // // // // //   //         organized[category][subcategory].push(service);
// // // // // //   //       });
        
// // // // // //   //       console.log('Organized services:', organized);
// // // // // //   //       setOrganizedServices(organized);
        
// // // // // //   //     } catch (error) {
// // // // // //   //       console.error('Error loading services:', error);
// // // // // //   //       setServiceError('Failed to load services. Please refresh the page or contact support.');
// // // // // //   //     } finally {
// // // // // //   //       setIsLoading(false);
// // // // // //   //     }
// // // // // //   //   };
// // // // // //   //   loadServices();
// // // // // //   // }, []);
// // // // // //   // Load services on component mount
// // // // // //   useEffect(() => {
// // // // // //     const loadServices = async () => {
// // // // // //       setIsLoading(true);
// // // // // //       try {
// // // // // //         console.log('Fetching services from API...');
// // // // // //         const response = await fetchServices();
// // // // // //         const servicesWithStringIds = response.data.map(service => ({
// // // // // //           ...service,
// // // // // //           id: service.id.toString()
// // // // // //         }));
// // // // // //         console.log('Services loaded:', servicesWithStringIds);
// // // // // //         setServices(servicesWithStringIds);
        
// // // // // //         // Organize services by category and subcategory
// // // // // //         const organized = {};
// // // // // //         servicesWithStringIds.forEach(service => {
// // // // // //           const category = service.category || 'pre-production';
          
// // // // // //           if (!organized[category]) {
// // // // // //             organized[category] = {};
// // // // // //           }
          
// // // // // //           // Handle post-production differently (no subcategories)
// // // // // //           if (category === 'post-production') {
// // // // // //             if (!organized[category]['all']) {
// // // // // //               organized[category]['all'] = [];
// // // // // //             }
// // // // // //             organized[category]['all'].push(service);
// // // // // //           } else {
// // // // // //             // For other categories, use subcategories
// // // // // //             const subcategory = service.subcategory || 'part-1';
// // // // // //             if (!organized[category][subcategory]) {
// // // // // //               organized[category][subcategory] = [];
// // // // // //             }
// // // // // //             organized[category][subcategory].push(service);
// // // // // //           }
// // // // // //         });
        
// // // // // //         console.log('Organized services:', organized);
// // // // // //         setOrganizedServices(organized);
        
// // // // // //       } catch (error) {
// // // // // //         console.error('Error loading services:', error);
// // // // // //         setServiceError('Failed to load services. Please refresh the page or contact support.');
// // // // // //       } finally {
// // // // // //         setIsLoading(false);
// // // // // //       }
// // // // // //     };
// // // // // //     loadServices();
// // // // // //   }, []);

// // // // // //   // Calculate total when services or days change
// // // // // //   useEffect(() => {
// // // // // //     calculateTotal();
// // // // // //   }, [formData.services, formData.days, services]);

// // // // // //   // Update delivery date min when shoot date changes
// // // // // //   useEffect(() => {
// // // // // //     if (formData.shoot_dates && !formData.delivery_date) {
// // // // // //       if (errors.delivery_date) {
// // // // // //         setErrors(prev => {
// // // // // //           const newErrors = {...prev};
// // // // // //           delete newErrors.delivery_date;
// // // // // //           return newErrors;
// // // // // //         });
// // // // // //       }
// // // // // //     }
// // // // // //   }, [formData.shoot_dates]);

// // // // // //   const calculateTotal = () => {
// // // // // //     let calculatedTotal = 0;
// // // // // //     formData.services.forEach(serviceId => {
// // // // // //       const service = services.find(s => s.id === serviceId);
// // // // // //       if (service) {
// // // // // //         calculatedTotal += service.rate_per_day * formData.days;
// // // // // //       }
// // // // // //     });
// // // // // //     console.log('Calculated total:', calculatedTotal);
// // // // // //     setTotal(calculatedTotal);
// // // // // //   };

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value, type, checked } = e.target;
// // // // // //     console.log('Input changed:', { name, value, type, checked });

// // // // // //     // Clear specific error when field is changed
// // // // // //     if (errors[name]) {
// // // // // //       setErrors(prev => {
// // // // // //         const newErrors = {...prev};
// // // // // //         delete newErrors[name];
// // // // // //         return newErrors;
// // // // // //       });
// // // // // //     }

// // // // // //     setFormData(prev => {
// // // // // //       if (type === 'checkbox') {
// // // // // //         const newServices = checked
// // // // // //           ? [...prev.services, value]
// // // // // //           : prev.services.filter(id => id !== value);
        
// // // // // //         console.log('Updated services selection:', newServices);
// // // // // //         return {
// // // // // //           ...prev,
// // // // // //           services: newServices
// // // // // //         };
// // // // // //       }
      
// // // // // //       return {
// // // // // //         ...prev,
// // // // // //         [name]: value
// // // // // //       };
// // // // // //     });
// // // // // //   };

// // // // // //   const toggleCategoryExpansion = (category) => {
// // // // // //     setExpandedCategories(prev => ({
// // // // // //       ...prev,
// // // // // //       [category]: !prev[category]
// // // // // //     }));
// // // // // //   };

// // // // // //   // Get selected services with their category/subcategory info
// // // // // //   // const getSelectedServicesWithDetails = () => {
// // // // // //   //   return formData.services.map(id => {
// // // // // //   //     const service = services.find(s => s.id === id);
// // // // // //   //     if (service) {
// // // // // //   //       const categoryInfo = SERVICE_CATEGORIES[service.category];
// // // // // //   //       const subcategoryInfo = categoryInfo?.subcategories[service.subcategory];
        
// // // // // //   //       return {
// // // // // //   //         ...service,
// // // // // //   //         categoryName: categoryInfo?.name || service.category,
// // // // // //   //         subcategoryName: subcategoryInfo?.name || service.subcategory
// // // // // //   //       };
// // // // // //   //     }
// // // // // //   //     return null;
// // // // // //   //   }).filter(Boolean);
// // // // // //   // };
// // // // // //    const getSelectedServicesWithDetails = () => {
// // // // // //     return formData.services.map(id => {
// // // // // //       const service = services.find(s => s.id === id);
// // // // // //       if (service) {
// // // // // //         const categoryInfo = SERVICE_CATEGORIES[service.category];
// // // // // //         let subcategoryInfo = null;
// // // // // //         let subcategoryName = '';
        
// // // // // //         // Handle post-production differently
// // // // // //         if (service.category === 'post-production') {
// // // // // //           subcategoryName = 'Post Production Services';
// // // // // //         } else {
// // // // // //           subcategoryInfo = categoryInfo?.subcategories[service.subcategory];
// // // // // //           subcategoryName = subcategoryInfo?.name || service.subcategory;
// // // // // //         }
        
// // // // // //         return {
// // // // // //           ...service,
// // // // // //           categoryName: categoryInfo?.name || service.category,
// // // // // //           subcategoryName: subcategoryName
// // // // // //         };
// // // // // //       }
// // // // // //       return null;
// // // // // //     }).filter(Boolean);
// // // // // //   };

// // // // // //   const validateForm = () => {
// // // // // //     const newErrors = {};
    
// // // // // //     // Client name validation
// // // // // //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// // // // // //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// // // // // //     }
    
// // // // // //     // Email validation
// // // // // //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// // // // // //     if (!emailPattern.test(formData.your_email)) {
// // // // // //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// // // // // //     }
    
// // // // // //     // Project title validation
// // // // // //     if (!formData.project_title || formData.project_title.trim() === '') {
// // // // // //       newErrors.project_title = 'Project title is required';
// // // // // //     } else if (formData.project_title.length > 100) {
// // // // // //       newErrors.project_title = 'Project title must be 1–100 characters long';
// // // // // //     }
    
// // // // // //     // Category validation
// // // // // //     if (!formData.category) {
// // // // // //       newErrors.category = 'Please select a category';
// // // // // //     }
    
// // // // // //     // Location validation
// // // // // //     if (!formData.location) {
// // // // // //       newErrors.location = 'Please select a location';
// // // // // //     }
    
// // // // // //     // Shoot date validation
// // // // // //     if (!formData.shoot_dates) {
// // // // // //       newErrors.shoot_dates = 'Shoot date is required';
// // // // // //     } else {
// // // // // //       const shootDate = new Date(formData.shoot_dates);
// // // // // //       const today = new Date();
// // // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // //       const fyStart = new Date(fyStartYear, 3, 1);
// // // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // //       if (shootDate < fyStart || shootDate > fyEnd) {
// // // // // //         newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // // //       }
// // // // // //     }
    
// // // // // //     // Delivery date validation
// // // // // //     if (!formData.delivery_date) {
// // // // // //       newErrors.delivery_date = 'Delivery date is required';
// // // // // //     } else {
// // // // // //       const deliveryDate = new Date(formData.delivery_date);
// // // // // //       const shootDate = formData.shoot_dates ? new Date(formData.shoot_dates) : null;
// // // // // //       const today = new Date();
// // // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // //       if (deliveryDate > fyEnd) {
// // // // // //         newErrors.delivery_date = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // // //       } else if (shootDate && deliveryDate < shootDate) {
// // // // // //         newErrors.delivery_date = 'Delivery date must be on or after shoot date';
// // // // // //       }
// // // // // //     }
    
// // // // // //     // Services validation
// // // // // //     if (formData.services.length === 0) {
// // // // // //       newErrors.services = 'Please select at least one service';
// // // // // //     }
    
// // // // // //     console.log('Form validation errors:', newErrors);
// // // // // //     setErrors(newErrors);
// // // // // //     return Object.keys(newErrors).length === 0;
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     console.log('Form submission attempted');
    
// // // // // //     if (validateForm()) {
// // // // // //       console.log('Form is valid, submitting:', formData);
// // // // // //       setFormSubmitting(true);
// // // // // //       try {
// // // // // //         await onSubmit(formData);
// // // // // //       } catch (error) {
// // // // // //         console.error('Form submission error:', error);
// // // // // //         setErrors({
// // // // // //           submission: 'An error occurred while generating the proposal. Please try again.'
// // // // // //         });
// // // // // //       } finally {
// // // // // //         setFormSubmitting(false);
// // // // // //       }
// // // // // //     } else {
// // // // // //       console.log('Form validation failed');
// // // // // //       const firstErrorField = Object.keys(errors)[0];
// // // // // //       if (firstErrorField) {
// // // // // //         const element = document.getElementsByName(firstErrorField)[0];
// // // // // //         if (element) {
// // // // // //           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
// // // // // //         }
// // // // // //       }
// // // // // //     }
// // // // // //   };

// // // // // //   // Calculate fiscal year dates for min/max date inputs
// // // // // //   const today = new Date();
// // // // // //   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // // //   const fyStart = new Date(fyStartYear, 3, 1);
// // // // // //   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // // //   const effectiveMinDate = today > fyStart ? today : fyStart;
// // // // // //   const minDate = effectiveMinDate.toISOString().split('T')[0];
// // // // // //   const maxDate = fyEnd.toISOString().split('T')[0];

// // // // // //   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
// // // // // //     ? formData.shoot_dates 
// // // // // //     : minDate;

// // // // // //   const selectedServicesDetails = getSelectedServicesWithDetails();
// // // // // //   const handleLogout = () => {
// // // // // //     logout();
// // // // // //     navigate('/');
// // // // // //   };

// // // // // //   // const onDashboardClick = () => {
// // // // // //   //   navigate('/dashboard');
// // // // // //   // }
 


// // // // // //   return (
// // // // // //     <div className="proposal-form-component">
// // // // // //       <div className="header bg-white border-bottom py-2">
// // // // // //         <Container fluid className="px-4">
// // // // // //           <div className="d-flex justify-content-between align-items-center">
// // // // // //             <div className="d-flex align-items-center">
// // // // // //               <img 
// // // // // //                 src={Logo} 
// // // // // //                 alt="Company Logo" 
// // // // // //                 style={{ height: '55px', width: 'auto' }} 
// // // // // //               />
// // // // // //             </div>
// // // // // //             <div className="text-center flex-grow-1">
// // // // // //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// // // // // //             </div>

// // // // // //              <Button
// // // // // //               variant="outline-primary" onClick={onDashboardClick}
// // // // // //               className="px-3 py-1" 
// // // // // //               style={{ marginRight: '10px' }}
// // // // // //               >
// // // // // //               <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // // // // //                 Dashboard

// // // // // //               </Button>
// // // // // //               <br/>
            
// // // // // //             <Button
// // // // // //               variant="outline-primary" onClick={onHomeClick}
// // // // // //               className="px-3 py-1" 
// // // // // //               style={{ marginRight: '10px' }}
// // // // // //               >
// // // // // //               <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // // // // //                 Home

// // // // // //               </Button>
// // // // // //               <br/>
// // // // // //             <Button 
// // // // // //               variant="outline-danger" 
// // // // // //               onClick={handleLogout}
// // // // // //               className="px-3 py-1"
// // // // // //             >
// // // // // //               <FontAwesomeIcon icon={faUser} className="me-2" />
// // // // // //               Logout
// // // // // //             </Button>
// // // // // //           </div>
// // // // // //         </Container>
// // // // // //       </div>
      
// // // // // //       <Container className="py-4">
// // // // // //         <Row>
// // // // // //           <Col lg={8}>
// // // // // //             <Card className="shadow-sm border-0 mb-4">
// // // // // //               <Card.Body className="p-4">
// // // // // //                 <div className="d-flex justify-content-between align-items-center mb-4">
// // // // // //                   <div>
// // // // // //                     <h3 className="mb-1">Create Studio Proposal</h3>
// // // // // //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// // // // // //                   </div>
// // // // // //                   {/* <Badge bg="info" className="py-2 px-3">
// // // // // //                     <FontAwesomeIcon icon={faFilePdf} className="me-1" />
// // // // // //                     New Quote
// // // // // //                   </Badge> */}
// // // // // //                 </div>

// // // // // //                 {errors.submission && (
// // // // // //                   <Alert 
// // // // // //                     variant="danger" 
// // // // // //                     dismissible 
// // // // // //                     onClose={() => setErrors(prev => {
// // // // // //                       const newErrors = {...prev};
// // // // // //                       delete newErrors.submission;
// // // // // //                       return newErrors;
// // // // // //                     })}
// // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // //                   >
// // // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // // //                     {errors.submission}
// // // // // //                   </Alert>
// // // // // //                 )}

// // // // // //                 {serviceError && (
// // // // // //                   <Alert 
// // // // // //                     variant="danger" 
// // // // // //                     dismissible 
// // // // // //                     onClose={() => setServiceError('')}
// // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // //                   >
// // // // // //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // // // //                     {serviceError}
// // // // // //                   </Alert>
// // // // // //                 )}

// // // // // //                 {Object.keys(errors).length > 0 && !errors.submission && (
// // // // // //                   <Alert 
// // // // // //                     variant="warning" 
// // // // // //                     dismissible 
// // // // // //                     className="border-0 shadow-sm mb-4"
// // // // // //                   >
// // // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // // //                     Please fix the highlighted errors below to continue.
// // // // // //                   </Alert>
// // // // // //                 )}

// // // // // //                 <Form onSubmit={handleSubmit}>
// // // // // //                   <h5 className="mb-3">
// // // // // //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// // // // // //                     Client Information
// // // // // //                   </h5>
                  
// // // // // //                   <Row>
// // // // // //                     <Col md={6}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Brand Name <span className="text-danger">*</span>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup hasValidation>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faBuilding} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Control
// // // // // //                             type="text"
// // // // // //                             name="client_name"
// // // // // //                             value={formData.client_name}
// // // // // //                             onChange={handleChange}
// // // // // //                             isInvalid={!!errors.client_name}
// // // // // //                             placeholder="e.g. Zee TV, Colors"
// // // // // //                             required
// // // // // //                           />
// // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // //                             {errors.client_name}
// // // // // //                           </Form.Control.Feedback>
// // // // // //                         </InputGroup>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
                    
// // // // // //                     <Col md={6}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Your Email <span className="text-danger">*</span>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup hasValidation>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faEnvelope} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Control
// // // // // //                             type="email"
// // // // // //                             name="your_email"
// // // // // //                             value={formData.your_email}
// // // // // //                             onChange={handleChange}
// // // // // //                             isInvalid={!!errors.your_email}
// // // // // //                             placeholder="e.g. user@tsbi.in"
// // // // // //                             required
// // // // // //                           />
// // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // //                             {errors.your_email}
// // // // // //                           </Form.Control.Feedback>
// // // // // //                         </InputGroup>
// // // // // //                         <Form.Text className="text-muted">
// // // // // //                           Only @tsbi.in email addresses are allowed
// // // // // //                         </Form.Text>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
// // // // // //                   </Row>

// // // // // //                   <hr className="my-4" />
                  
// // // // // //                   <h5 className="mb-3">
// // // // // //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// // // // // //                     Project Details
// // // // // //                   </h5>
                  
// // // // // //                   <Form.Group className="mb-3">
// // // // // //                     <Form.Label>
// // // // // //                       Project Title <span className="text-danger">*</span>
// // // // // //                     </Form.Label>
// // // // // //                     <InputGroup hasValidation>
// // // // // //                       <InputGroup.Text className="bg-light">
// // // // // //                         <FontAwesomeIcon icon={faTag} />
// // // // // //                       </InputGroup.Text>
// // // // // //                       <Form.Control
// // // // // //                         type="text"
// // // // // //                         name="project_title"
// // // // // //                         value={formData.project_title}
// // // // // //                         onChange={handleChange}
// // // // // //                         isInvalid={!!errors.project_title}
// // // // // //                         placeholder="e.g. Product Launch Promo"
// // // // // //                         required
// // // // // //                       />
// // // // // //                       <Form.Control.Feedback type="invalid">
// // // // // //                         {errors.project_title}
// // // // // //                       </Form.Control.Feedback>
// // // // // //                     </InputGroup>
// // // // // //                   </Form.Group>

// // // // // //                   <Row>
// // // // // //                     <Col md={6}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Category <span className="text-danger">*</span>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup hasValidation>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faTag} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Select 
// // // // // //                             name="category"
// // // // // //                             value={formData.category}
// // // // // //                             onChange={handleChange}
// // // // // //                             isInvalid={!!errors.category}
// // // // // //                             required
// // // // // //                           >
// // // // // //                             <option value="" disabled>Select a option</option>
// // // // // //                             <option value="Digital Bytes">Digital Bytes</option>
// // // // // //                             <option value="Piece to Camera">Piece to Camera</option>
// // // // // //                             <option value="Digital Video">Digital Video</option>
// // // // // //                             <option value="Behind the Scene">Behind the Scene</option>
// // // // // //                           </Form.Select>
// // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // //                             {errors.category}
// // // // // //                           </Form.Control.Feedback>
// // // // // //                         </InputGroup>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
                    
// // // // // //                     <Col md={6}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Location <span className="text-danger">*</span>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup hasValidation>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faMapMarkerAlt} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Select 
// // // // // //                             name="location"
// // // // // //                             value={formData.location}
// // // // // //                             onChange={handleChange}
// // // // // //                             isInvalid={!!errors.location}
// // // // // //                             required
// // // // // //                           >
// // // // // //                             <option value="" disabled>Select a location</option>
// // // // // //                             <option value="Mumbai">Mumbai</option>
// // // // // //                             <option value="Outside Mumbai">Outside Mumbai</option>
// // // // // //                           </Form.Select>
// // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // //                             {errors.location}
// // // // // //                           </Form.Control.Feedback>
// // // // // //                         </InputGroup>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
// // // // // //                   </Row>

// // // // // //                   <hr className="my-4" />
                  
// // // // // //                   <h5 className="mb-3">
// // // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // // //                     Particular Selection
// // // // // //                   </h5>
                  
// // // // // //                   <Form.Group className="mb-4">
// // // // // //                     <Form.Label>
// // // // // //                       Select Required Particular 
// // // // // //                       <Badge bg="secondary" className="ms-2">
// // // // // //                         {formData.services.length} selected
// // // // // //                       </Badge>
// // // // // //                     </Form.Label>
                    
// // // // // //                      {isLoading ? (
// // // // // //                       <div className="text-center py-4">
// // // // // //                         <Spinner animation="border" variant="primary" />
// // // // // //                         <p className="mt-2">Loading available services...</p>
// // // // // //                       </div>
// // // // // //                     ) : Object.keys(organizedServices).length > 0 ? (
// // // // // //                       <div className="service-selection border rounded bg-light">
// // // // // //                         <Tab.Container activeKey={activeServiceCategory} onSelect={setActiveServiceCategory}>
// // // // // //                           {/* Category Tabs */}
// // // // // //                           <div className="border-bottom bg-white p-3">
// // // // // //                             <Nav variant="pills" className="justify-content-center">
// // // // // //                               {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// // // // // //                                 <Nav.Item key={key}>
// // // // // //                                   <Nav.Link eventKey={key} className="text-decoration-none">
// // // // // //                                     <FontAwesomeIcon icon={category.icon} className="me-2" />
// // // // // //                                     {category.name}
// // // // // //                                     {organizedServices[key] && (
// // // // // //                                       <Badge bg="secondary" className="ms-2">
// // // // // //                                         {key === 'post-production' 
// // // // // //                                           ? (organizedServices[key]['all'] || []).length
// // // // // //                                           : Object.values(organizedServices[key]).flat().length
// // // // // //                                         }
// // // // // //                                       </Badge>
// // // // // //                                     )}
// // // // // //                                   </Nav.Link>
// // // // // //                                 </Nav.Item>
// // // // // //                               ))}
// // // // // //                             </Nav>
// // // // // //                           </div>

// // // // // //                           {/* Services Content */}
// // // // // //                            <Tab.Content className="p-3">
// // // // // //                             {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
// // // // // //                               <Tab.Pane key={categoryKey} eventKey={categoryKey}>
// // // // // //                                 {organizedServices[categoryKey] ? (
// // // // // //                                   categoryKey === 'post-production' ? (
// // // // // //                                     // Special handling for post-production (no subcategories)
// // // // // //                                     <div>
// // // // // //                                       <h6 className="mb-3 text-primary">Post Production Particulars</h6>
// // // // // //                                       <Row>
// // // // // //                                         {(organizedServices[categoryKey]['all'] || []).map(service => (
// // // // // //                                           <Col md={6} key={service.id}>
// // // // // //                                             <Form.Check
// // // // // //                                               type="checkbox"
// // // // // //                                               id={`service-${service.id}`}
// // // // // //                                               className="mb-2 service-checkbox"
// // // // // //                                             >
// // // // // //                                               <Form.Check.Input
// // // // // //                                                 type="checkbox"
// // // // // //                                                 value={service.id}
// // // // // //                                                 checked={formData.services.includes(service.id)}
// // // // // //                                                 onChange={handleChange}
// // // // // //                                                 name="services"
// // // // // //                                               />
// // // // // //                                               <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
// // // // // //                                                 <span>{service.service_name}</span>
// // // // // //                                                 <span className="rate-display text-muted">
// // // // // //                                                   ₹{service.rate_per_day}/day
// // // // // //                                                 </span>
// // // // // //                                               </Form.Check.Label>
// // // // // //                                             </Form.Check>
// // // // // //                                           </Col>
// // // // // //                                         ))}
// // // // // //                                       </Row>
// // // // // //                                       {(organizedServices[categoryKey]['all'] || []).length === 0 && (
// // // // // //                                         <div className="text-center py-4">
// // // // // //                                           <p className="text-muted">No services available in this category</p>
// // // // // //                                         </div>
// // // // // //                                       )}
// // // // // //                                     </div>
// // // // // //                                   ) : (
// // // // // //                                     // Regular accordion handling for other categories
// // // // // //                                     <Accordion flush>
// // // // // //                                       {Object.entries(organizedServices[categoryKey]).map(([subcategoryKey, subcategoryServices]) => {
// // // // // //                                         const subcategoryInfo = category.subcategories[subcategoryKey];
// // // // // //                                         const subcategoryName = subcategoryInfo?.name || subcategoryKey;
                                        
// // // // // //                                         return (
// // // // // //                                           <Accordion.Item key={subcategoryKey} eventKey={subcategoryKey}>
// // // // // //                                             <Accordion.Header>
// // // // // //                                               <div className="d-flex justify-content-between align-items-center w-100 me-3">
// // // // // //                                                 <span>{subcategoryName}</span>
// // // // // //                                                 <Badge bg="info">
// // // // // //                                                   {subcategoryServices.length} service{subcategoryServices.length !== 1 ? 's' : ''}
// // // // // //                                                 </Badge>
// // // // // //                                               </div>
// // // // // //                                             </Accordion.Header>
// // // // // //                                             <Accordion.Body>
// // // // // //                                               <Row>
// // // // // //                                                 {subcategoryServices.map(service => (
// // // // // //                                                   <Col md={6} key={service.id}>
// // // // // //                                                     <Form.Check
// // // // // //                                                       type="checkbox"
// // // // // //                                                       id={`service-${service.id}`}
// // // // // //                                                       className="mb-2 service-checkbox"
// // // // // //                                                     >
// // // // // //                                                       <Form.Check.Input
// // // // // //                                                         type="checkbox"
// // // // // //                                                         value={service.id}
// // // // // //                                                         checked={formData.services.includes(service.id)}
// // // // // //                                                         onChange={handleChange}
// // // // // //                                                         name="services"
// // // // // //                                                       />
// // // // // //                                                       <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
// // // // // //                                                         <span>{service.service_name}</span>
// // // // // //                                                         <span className="rate-display text-muted">
// // // // // //                                                           ₹{service.rate_per_day}/day
// // // // // //                                                         </span>
// // // // // //                                                       </Form.Check.Label>
// // // // // //                                                     </Form.Check>
// // // // // //                                                   </Col>
// // // // // //                                                 ))}
// // // // // //                                               </Row>
// // // // // //                                             </Accordion.Body>
// // // // // //                                           </Accordion.Item>
// // // // // //                                         );
// // // // // //                                       })}
// // // // // //                                     </Accordion>
// // // // // //                                   )
// // // // // //                                 ) : (
// // // // // //                                   <div className="text-center py-4">
// // // // // //                                     <p className="text-muted">No services available in this category</p>
// // // // // //                                   </div>
// // // // // //                                 )}
// // // // // //                               </Tab.Pane>
// // // // // //                             ))}
// // // // // //                           </Tab.Content>
// // // // // //                         </Tab.Container>
                        
// // // // // //                         {errors.services && (
// // // // // //                           <div className="text-danger small mt-2 px-3 pb-2">
// // // // // //                             <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
// // // // // //                             {errors.services}
// // // // // //                           </div>
// // // // // //                         )}
// // // // // //                       </div>
// // // // // //                     ) : (
// // // // // //                       <Alert variant="warning">
// // // // // //                         No services available. Please contact the administrator.
// // // // // //                       </Alert>
// // // // // //                     )}
// // // // // //                   </Form.Group>

// // // // // //                   <Row>
// // // // // //                     <Col md={4}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Number of Days <span className="text-danger">*</span>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faCalendarAlt} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Control
// // // // // //                             type="number"
// // // // // //                             name="days"
// // // // // //                             value={formData.days}
// // // // // //                             onChange={handleChange}
// // // // // //                             min="1"
// // // // // //                             max="100"
// // // // // //                             required
// // // // // //                           />
// // // // // //                         </InputGroup>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
                    
// // // // // //                     <Col md={4}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Shoot Date <span className="text-danger">*</span>
// // // // // //                           <OverlayTrigger
// // // // // //                             placement="top"
// // // // // //                             overlay={
// // // // // //                               <Tooltip>
// // // // // //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// // // // // //                               </Tooltip>
// // // // // //                             }
// // // // // //                           >
// // // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // // //                           </OverlayTrigger>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup hasValidation>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faCalendarAlt} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Control
// // // // // //                             type="date"
// // // // // //                             name="shoot_dates"
// // // // // //                             value={formData.shoot_dates}
// // // // // //                             onChange={handleChange}
// // // // // //                             isInvalid={!!errors.shoot_dates}
// // // // // //                             min={minDate}
// // // // // //                             max={maxDate}
// // // // // //                             required
// // // // // //                           />
// // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // //                             {errors.shoot_dates}
// // // // // //                           </Form.Control.Feedback>
// // // // // //                         </InputGroup>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
                    
// // // // // //                     <Col md={4}>
// // // // // //                       <Form.Group className="mb-3">
// // // // // //                         <Form.Label>
// // // // // //                           Delivery Date <span className="text-danger">*</span>
// // // // // //                           <OverlayTrigger
// // // // // //                             placement="top"
// // // // // //                             overlay={
// // // // // //                               <Tooltip>
// // // // // //                                 Must be on or after shoot date, within fiscal year
// // // // // //                               </Tooltip>
// // // // // //                             }
// // // // // //                           >
// // // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // // //                           </OverlayTrigger>
// // // // // //                         </Form.Label>
// // // // // //                         <InputGroup hasValidation>
// // // // // //                           <InputGroup.Text className="bg-light">
// // // // // //                             <FontAwesomeIcon icon={faTruck} />
// // // // // //                           </InputGroup.Text>
// // // // // //                           <Form.Control
// // // // // //                             type="date"
// // // // // //                             name="delivery_date"
// // // // // //                             value={formData.delivery_date}
// // // // // //                             onChange={handleChange}
// // // // // //                             isInvalid={!!errors.delivery_date}
// // // // // //                             min={deliveryMinDate}
// // // // // //                             max={maxDate}
// // // // // //                             required
// // // // // //                           />
// // // // // //                           <Form.Control.Feedback type="invalid">
// // // // // //                             {errors.delivery_date}
// // // // // //                           </Form.Control.Feedback>
// // // // // //                         </InputGroup>
// // // // // //                       </Form.Group>
// // // // // //                     </Col>
// // // // // //                   </Row>

// // // // // //                   <div className="d-grid mt-4">
// // // // // //                     <Button 
// // // // // //                       variant="success" 
// // // // // //                       type="submit" 
// // // // // //                       size="lg"
// // // // // //                       disabled={formSubmitting || isLoading}
// // // // // //                     >
// // // // // //                       {formSubmitting ? (
// // // // // //                         <>
// // // // // //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // // //                           Generating Proposal...
// // // // // //                         </>
// // // // // //                       ) : (
// // // // // //                         <>
// // // // // //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// // // // // //                           Generate Proposal
// // // // // //                         </>
// // // // // //                       )}
// // // // // //                     </Button>
// // // // // //                   </div>
// // // // // //                 </Form>
// // // // // //               </Card.Body>
// // // // // //             </Card>
// // // // // //           </Col>

// // // // // //           <Col lg={4}>
// // // // // //             <div className="sticky-top" style={{ top: '20px' }}>
// // // // // //               <Card className="shadow-sm border-0 mb-4">
// // // // // //                 <Card.Body className="p-4">
// // // // // //                   <h5 className="mb-3">
// // // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // // //                     Quote Summary
// // // // // //                   </h5>
                  
// // // // // //                   {formData.client_name && (
// // // // // //                     <p>
// // // // // //                       <strong>Client:</strong> {formData.client_name}
// // // // // //                     </p>
// // // // // //                   )}
                  
// // // // // //                   {formData.project_title && (
// // // // // //                     <p>
// // // // // //                       <strong>Project:</strong> {formData.project_title}
// // // // // //                     </p>
// // // // // //                   )}
                  
// // // // // //                   {formData.days > 0 && (
// // // // // //                     <p>
// // // // // //                       <strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}
// // // // // //                     </p>
// // // // // //                   )}
                  
// // // // // //                   {formData.shoot_dates && (
// // // // // //                     // <p>
// // // // // //                     //   <strong>Shoot Date:</strong> {new Date(formData.shoot_dates).toLocaleDateString()}
// // // // // //                     // </p>
// // // // // //                     <p>
// // // // // //   <strong>Shoot Date:</strong>{' '}
// // // // // //   {new Date(formData.shoot_dates).toLocaleDateString('en-IN', {
// // // // // //     day: 'numeric',
// // // // // //     month: 'long',
// // // // // //     year: 'numeric'
// // // // // //   })}
// // // // // // </p>
// // // // // //                   )}
                  
// // // // // //                   {formData.delivery_date && (
// // // // // //                     // <p>
// // // // // //                     //   <strong>Delivery Date:</strong> {new Date(formData.delivery_date).toLocaleDateString()}
// // // // // //                     // </p>
// // // // // //                     <p>
// // // // // //   <strong>Delivery Date:</strong>{' '}
// // // // // //   {new Date(formData.delivery_date).toLocaleDateString('en-IN', {
// // // // // //     day: 'numeric',
// // // // // //     month: 'long',
// // // // // //     year: 'numeric'
// // // // // //   })}
// // // // // // </p>
// // // // // //                   )}

// // // // // //                   <div className="mb-3">
// // // // // //                     <strong>Selected Particulars:</strong>
// // // // // //                     {selectedServicesDetails.length > 0 ? (
// // // // // //                       <div className="mt-2">
// // // // // //                         {/* Group services by category */}
// // // // // //                         {Object.entries(
// // // // // //                           selectedServicesDetails.reduce((groups, service) => {
// // // // // //                             const category = service.categoryName;
// // // // // //                             if (!groups[category]) {
// // // // // //                               groups[category] = {};
// // // // // //                             }
// // // // // //                             const subcategory = service.subcategoryName;
// // // // // //                             if (!groups[category][subcategory]) {
// // // // // //                               groups[category][subcategory] = [];
// // // // // //                             }
// // // // // //                             groups[category][subcategory].push(service);
// // // // // //                             return groups;
// // // // // //                           }, {})
// // // // // //                         ).map(([categoryName, subcategories]) => (
// // // // // //                           <div key={categoryName} className="mb-3">
// // // // // //                             <div className="d-flex align-items-center mb-2">
// // // // // //                               <FontAwesomeIcon 
// // // // // //                                 icon={
// // // // // //                                   categoryName.includes('Pre-Production') ? faEdit :
// // // // // //                                   categoryName.includes('Production') ? faCamera : faVideo
// // // // // //                                 } 
// // // // // //                                 className="me-2 text-primary" 
// // // // // //                               />
// // // // // //                               <strong className="text-primary">{categoryName}</strong>
// // // // // //                             </div>
// // // // // //                             {Object.entries(subcategories).map(([subcategoryName, services]) => (
// // // // // //                               <div key={subcategoryName} className="ms-3 mb-2">
// // // // // //                                 {/* Only show subcategory if it's not "Post Production Services" */}
// // // // // //                                 {subcategoryName !== 'Post Production Particulars' && (
// // // // // //                                   <div className="fw-bold text-muted small mb-1">{subcategoryName}</div>
// // // // // //                                 )}
// // // // // //                                 {services.map((service, index) => (
// // // // // //                                   <div key={service.id} className="d-flex justify-content-between align-items-center border-bottom py-1">
// // // // // //                                     <span className="small">{service.service_name}</span>
// // // // // //                                     <Badge bg="light" text="dark" className="rate-display">
// // // // // //                                       ₹{service.rate_per_day * formData.days}
// // // // // //                                       <span className="ms-1 text-muted">
// // // // // //                                         (₹{service.rate_per_day}/day × {formData.days})
// // // // // //                                       </span>
// // // // // //                                     </Badge>
// // // // // //                                   </div>
// // // // // //                                 ))}
// // // // // //                               </div>
// // // // // //                             ))}
// // // // // //                           </div>
// // // // // //                         ))}
// // // // // //                       </div>
// // // // // //                     ) : (
// // // // // //                       <p className="text-muted mt-2">No services selected</p>
// // // // // //                     )}
// // // // // //                   </div>

// // // // // //                   <hr />
                  
// // // // // //                   <div className="d-flex justify-content-between align-items-center">
// // // // // //                     <h4 className="mb-0">Total:</h4>
// // // // // //                     <h4 className="mb-0 rate-display">₹{total.toLocaleString()}</h4>
// // // // // //                   </div>
                  
// // // // // //                   {selectedServicesDetails.length > 0 && (
// // // // // //                     <div className="mt-3 text-center">
// // // // // //                       <small className="text-muted">
// // // // // //                         <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // // // // //                         This is an estimate based on your selections
// // // // // //                       </small>
// // // // // //                     </div>
// // // // // //                   )}
// // // // // //                 </Card.Body>
// // // // // //               </Card>
              
// // // // // //               <Card className="shadow-sm border-0 bg-light">
// // // // // //                 <Card.Body className="p-3">
// // // // // //                   <div className="d-flex align-items-center">
// // // // // //                     <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
// // // // // //                     <small>
// // // // // //                       <strong>Need help?</strong> Contact the tech team at{' '}
// // // // // //                       <a href="mailto:admin@tsbi.in">tech@tsbi.in</a> for assistance.
// // // // // //                     </small>
// // // // // //                   </div>
// // // // // //                 </Card.Body>
// // // // // //               </Card>
// // // // // //             </div>
// // // // // //           </Col>
// // // // // //         </Row>
// // // // // //       </Container>

// // // // // //       {/* CSS for styling */}
// // // // // //       <style jsx>{`
// // // // // //         .header {
// // // // // //           border-bottom: 1px solid #e9e9e9;
// // // // // //         }
        
// // // // // //         .text-purple {
// // // // // //           color: #8e24aa;
// // // // // //           font-size: 1.75rem;
// // // // // //           font-weight: 600;
// // // // // //         }
        
// // // // // //         .proposal-form-component .card {
// // // // // //           transition: box-shadow 0.3s ease;
// // // // // //         }
        
// // // // // //         .proposal-form-component .card:hover {
// // // // // //           box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
// // // // // //         }
        
// // // // // //         .rate-display {
// // // // // //           font-family: monospace;
// // // // // //           white-space: nowrap;
// // // // // //         }
        
// // // // // //         .service-selection {
// // // // // //           max-height: 500px;
// // // // // //           overflow-y: auto;
// // // // // //         }
        
// // // // // //         .service-checkbox {
// // // // // //           transition: background-color 0.2s ease;
// // // // // //           padding: 8px;
// // // // // //           border-radius: 4px;
// // // // // //         }
        
// // // // // //         .service-checkbox:hover {
// // // // // //           background-color: rgba(13, 110, 253, 0.05);
// // // // // //         }
        
// // // // // //         .nav-pills .nav-link {
// // // // // //           color: #6c757d;
// // // // // //           border-radius: 0.375rem;
// // // // // //           margin-right: 0.5rem;
// // // // // //           transition: all 0.2s ease;
// // // // // //         }
        
// // // // // //         .nav-pills .nav-link:hover {
// // // // // //           background-color: rgba(13, 110, 253, 0.1);
// // // // // //           color: #0d6efd;
// // // // // //         }
        
// // // // // //         .nav-pills .nav-link.active {
// // // // // //           background-color: #0d6efd;
// // // // // //           color: white;
// // // // // //         }
        
// // // // // //         .accordion-button:not(.collapsed) {
// // // // // //           background-color: #e7f1ff;
// // // // // //           color: #0d6efd;
// // // // // //         }
        
// // // // // //         .sticky-top {
// // // // // //           z-index: 100;
// // // // // //         }

// // // // // //         @media (max-width: 768px) {
// // // // // //           .text-purple {
// // // // // //             font-size: 1.25rem;
// // // // // //           }
          
// // // // // //           .service-selection {
// // // // // //             max-height: 400px;
// // // // // //           }
// // // // // //         }
// // // // // //       `}</style>
// // // // // //     </div>
// // // // // //   );
// // // // // // }

// // // // // // export default ProposalForm;
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { 
// // // // //   Form, 
// // // // //   Button, 
// // // // //   Card, 
// // // // //   Alert, 
// // // // //   Container, 
// // // // //   Row, 
// // // // //   Col, 
// // // // //   InputGroup, 
// // // // //   Badge,
// // // // //   Spinner,
// // // // //   OverlayTrigger,
// // // // //   Tooltip,
// // // // //   ListGroup,
// // // // //   Nav,
// // // // //   Tab,
// // // // //   ButtonGroup
// // // // // } from 'react-bootstrap';
// // // // // import { 
// // // // //   fetchServices, 
// // // // //   fetchCategories 
// // // // // } from '../../services/api';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { 
// // // // //   faCheck,
// // // // //   faTimes,
// // // // //   faInfoCircle,
// // // // //   faCalendarAlt,
// // // // //   faBuilding,
// // // // //   faEnvelope,
// // // // //   faTag,
// // // // //   faMapMarkerAlt,
// // // // //   faMoneyBillWave,
// // // // //   faFilePdf,
// // // // //   faUser,
// // // // //   faClipboardList,
// // // // //   faExclamationTriangle,
// // // // //   faTruck,
// // // // //   faEdit,
// // // // //   faCamera,
// // // // //   faVideo,
// // // // //   faChevronDown,
// // // // //   faChevronRight,
// // // // //   faPlus,
// // // // //   faMinus,
// // // // //   faLayerGroup
// // // // // } from '@fortawesome/free-solid-svg-icons';
// // // // // import Logo from '../../assets/Logo.png';
// // // // // import { useUserAuth } from '../../contexts/UserAuthContext';

// // // // // // Service categories structure
// // // // // const SERVICE_CATEGORIES = {
// // // // //   'pre-production': {
// // // // //     name: 'Pre-Production',
// // // // //     icon: faEdit,
// // // // //     color: '#17a2b8'
// // // // //   },
// // // // //   'production': {
// // // // //     name: 'Production',
// // // // //     icon: faCamera,
// // // // //     color: '#28a745'
// // // // //   },
// // // // //   'post-production': {
// // // // //     name: 'Post Production',
// // // // //     icon: faVideo,
// // // // //     color: '#6f42c1'
// // // // //   }
// // // // // };

// // // // // function ProposalForm({ onSubmit, onAdminClick, onHomeClick, onDashboardClick }) {
// // // // //   const { user, logout } = useUserAuth();
  
// // // // //   // State management
// // // // //   const [services, setServices] = useState([]);
// // // // //   const [categories, setCategories] = useState([]);
// // // // //   const [organizedServices, setOrganizedServices] = useState({});
// // // // //   const [formData, setFormData] = useState({
// // // // //     client_name: '',
// // // // //     your_email: '',
// // // // //     project_title: '',
// // // // //     category_id: '', // Changed to use category ID
// // // // //     location: '',
// // // // //     services: {}, // Changed to object to store quantities
// // // // //     days: 1,
// // // // //     shoot_dates: '',
// // // // //     delivery_date: ''
// // // // //   });
// // // // //   const [errors, setErrors] = useState({});
// // // // //   const [total, setTotal] = useState(0);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [categoriesLoading, setCategoriesLoading] = useState(true);
// // // // //   const [serviceError, setServiceError] = useState('');
// // // // //   const [formSubmitting, setFormSubmitting] = useState(false);
// // // // //   const [activeServiceCategory, setActiveServiceCategory] = useState('pre-production');
// // // // //   const [selectedCategory, setSelectedCategory] = useState(null);

// // // // //   // Load services and categories on component mount
// // // // //   useEffect(() => {
// // // // //     loadServices();
// // // // //     loadCategories();
// // // // //   }, []);

// // // // //   // Load services from API
// // // // //   const loadServices = async () => {
// // // // //     try {
// // // // //       setIsLoading(true);
// // // // //       const response = await fetchServices();
// // // // //       const servicesWithStringIds = response.data.map(service => ({
// // // // //         ...service,
// // // // //         id: service.id.toString()
// // // // //       }));
// // // // //       console.log('Services loaded:', servicesWithStringIds);
// // // // //       setServices(servicesWithStringIds);
      
// // // // //       // Organize services by category
// // // // //       const organized = {};
// // // // //       servicesWithStringIds.forEach(service => {
// // // // //         const category = service.category || 'pre-production';
        
// // // // //         if (!organized[category]) {
// // // // //           organized[category] = {};
// // // // //         }
        
// // // // //         if (category === 'post-production') {
// // // // //           if (!organized[category]['all']) {
// // // // //             organized[category]['all'] = [];
// // // // //           }
// // // // //           organized[category]['all'].push(service);
// // // // //         } else {
// // // // //           const subcategory = service.subcategory || 'part-1';
// // // // //           if (!organized[category][subcategory]) {
// // // // //             organized[category][subcategory] = [];
// // // // //           }
// // // // //           organized[category][subcategory].push(service);
// // // // //         }
// // // // //       });
      
// // // // //       setOrganizedServices(organized);
// // // // //     } catch (error) {
// // // // //       console.error('Error loading services:', error);
// // // // //       setServiceError('Failed to load services. Please refresh the page or contact support.');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Load categories from API
// // // // //   const loadCategories = async () => {
// // // // //     try {
// // // // //       setCategoriesLoading(true);
// // // // //       const response = await fetchCategories();
// // // // //       console.log('Categories loaded:', response.data);
// // // // //       setCategories(response.data || []);
// // // // //     } catch (error) {
// // // // //       console.error('Error loading categories:', error);
// // // // //       // Use fallback categories if API fails
// // // // //       setCategories([
// // // // //         { id: 'fallback-1', name: 'Digital Bytes', description: 'Short digital content' },
// // // // //         { id: 'fallback-2', name: 'Piece to Camera', description: 'Direct camera presentations' },
// // // // //         { id: 'fallback-3', name: 'Digital Video', description: 'Full digital video production' },
// // // // //         { id: 'fallback-4', name: 'Behind the Scene', description: 'BTS content creation' }
// // // // //       ]);
// // // // //     } finally {
// // // // //       setCategoriesLoading(false);
// // // // //     }
// // // // //   };

// // // // //   // Calculate total when services or days change
// // // // //   useEffect(() => {
// // // // //     calculateTotal();
// // // // //   }, [formData.services, formData.days, services]);

// // // // //   // Handle category selection and auto-select services
// // // // //   useEffect(() => {
// // // // //     if (formData.category_id && categories.length > 0) {
// // // // //       const category = categories.find(cat => cat.id.toString() === formData.category_id);
// // // // //       if (category && category.selectedServices) {
// // // // //         setSelectedCategory(category);
        
// // // // //         // Auto-select services from the category
// // // // //         const autoSelectedServices = {};
// // // // //         category.selectedServices.forEach(serviceId => {
// // // // //           autoSelectedServices[serviceId.toString()] = 1; // Default quantity of 1
// // // // //         });
        
// // // // //         setFormData(prev => ({
// // // // //           ...prev,
// // // // //           services: { ...prev.services, ...autoSelectedServices }
// // // // //         }));
// // // // //       }
// // // // //     }
// // // // //   }, [formData.category_id, categories]);

// // // // //   const calculateTotal = () => {
// // // // //     let calculatedTotal = 0;
// // // // //     Object.entries(formData.services).forEach(([serviceId, quantity]) => {
// // // // //       const service = services.find(s => s.id === serviceId);
// // // // //       if (service && quantity > 0) {
// // // // //         calculatedTotal += service.rate_per_day * quantity * formData.days;
// // // // //       }
// // // // //     });
// // // // //     setTotal(calculatedTotal);
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
    
// // // // //     // Clear specific error when field is changed
// // // // //     if (errors[name]) {
// // // // //       setErrors(prev => {
// // // // //         const newErrors = {...prev};
// // // // //         delete newErrors[name];
// // // // //         return newErrors;
// // // // //       });
// // // // //     }

// // // // //     setFormData(prev => ({
// // // // //       ...prev,
// // // // //       [name]: value
// // // // //     }));
// // // // //   };

// // // // //   // Handle service quantity changes
// // // // //   const handleServiceQuantityChange = (serviceId, change) => {
// // // // //     setFormData(prev => {
// // // // //       const currentQuantity = prev.services[serviceId] || 0;
// // // // //       const newQuantity = Math.max(0, currentQuantity + change);
      
// // // // //       const newServices = { ...prev.services };
// // // // //       if (newQuantity === 0) {
// // // // //         delete newServices[serviceId];
// // // // //       } else {
// // // // //         newServices[serviceId] = newQuantity;
// // // // //       }
      
// // // // //       return {
// // // // //         ...prev,
// // // // //         services: newServices
// // // // //       };
// // // // //     });
// // // // //   };

// // // // //   // Get selected services with details and quantities
// // // // //   const getSelectedServicesWithDetails = () => {
// // // // //     return Object.entries(formData.services).map(([serviceId, quantity]) => {
// // // // //       const service = services.find(s => s.id === serviceId);
// // // // //       if (service && quantity > 0) {
// // // // //         const categoryInfo = SERVICE_CATEGORIES[service.category];
// // // // //         let subcategoryName = '';
        
// // // // //         if (service.category === 'post-production') {
// // // // //           subcategoryName = 'Post Production Services';
// // // // //         } else {
// // // // //           const subcategoryInfo = categoryInfo?.subcategories?.[service.subcategory];
// // // // //           subcategoryName = subcategoryInfo?.name || service.subcategory;
// // // // //         }
        
// // // // //         return {
// // // // //           ...service,
// // // // //           quantity,
// // // // //           categoryName: categoryInfo?.name || service.category,
// // // // //           subcategoryName: subcategoryName,
// // // // //           totalCost: service.rate_per_day * quantity * formData.days
// // // // //         };
// // // // //       }
// // // // //       return null;
// // // // //     }).filter(Boolean);
// // // // //   };

// // // // //   const validateForm = () => {
// // // // //     const newErrors = {};
    
// // // // //     // Client name validation
// // // // //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// // // // //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// // // // //     }
    
// // // // //     // Email validation
// // // // //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// // // // //     if (!emailPattern.test(formData.your_email)) {
// // // // //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// // // // //     }
    
// // // // //     // Project title validation
// // // // //     if (!formData.project_title || formData.project_title.trim() === '') {
// // // // //       newErrors.project_title = 'Project title is required';
// // // // //     } else if (formData.project_title.length > 100) {
// // // // //       newErrors.project_title = 'Project title must be 1–100 characters long';
// // // // //     }
    
// // // // //     // Category validation
// // // // //     if (!formData.category_id) {
// // // // //       newErrors.category_id = 'Please select a category';
// // // // //     }
    
// // // // //     // Location validation
// // // // //     if (!formData.location) {
// // // // //       newErrors.location = 'Please select a location';
// // // // //     }
    
// // // // //     // Date validations (keeping your existing logic)
// // // // //     if (!formData.shoot_dates) {
// // // // //       newErrors.shoot_dates = 'Shoot date is required';
// // // // //     } else {
// // // // //       const shootDate = new Date(formData.shoot_dates);
// // // // //       const today = new Date();
// // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // //       const fyStart = new Date(fyStartYear, 3, 1);
// // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // //       if (shootDate < fyStart || shootDate > fyEnd) {
// // // // //         newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // //       }
// // // // //     }
    
// // // // //     if (!formData.delivery_date) {
// // // // //       newErrors.delivery_date = 'Delivery date is required';
// // // // //     } else {
// // // // //       const deliveryDate = new Date(formData.delivery_date);
// // // // //       const shootDate = formData.shoot_dates ? new Date(formData.shoot_dates) : null;
// // // // //       const today = new Date();
// // // // //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // //       if (deliveryDate > fyEnd) {
// // // // //         newErrors.delivery_date = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// // // // //       } else if (shootDate && deliveryDate < shootDate) {
// // // // //         newErrors.delivery_date = 'Delivery date must be on or after shoot date';
// // // // //       }
// // // // //     }
    
// // // // //     // Services validation
// // // // //     if (Object.keys(formData.services).length === 0) {
// // // // //       newErrors.services = 'Please select at least one service';
// // // // //     }
    
// // // // //     setErrors(newErrors);
// // // // //     return Object.keys(newErrors).length === 0;
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
    
// // // // //     if (validateForm()) {
// // // // //       setFormSubmitting(true);
// // // // //       try {
// // // // //         // Convert services object back to array format for compatibility
// // // // //         const servicesArray = Object.entries(formData.services).map(([serviceId, quantity]) => ({
// // // // //           id: serviceId,
// // // // //           quantity: quantity
// // // // //         }));
        
// // // // //         const submissionData = {
// // // // //           ...formData,
// // // // //           services: servicesArray,
// // // // //           selectedCategory: selectedCategory
// // // // //         };
        
// // // // //         await onSubmit(submissionData);
// // // // //       } catch (error) {
// // // // //         console.error('Form submission error:', error);
// // // // //         setErrors({
// // // // //           submission: 'An error occurred while generating the proposal. Please try again.'
// // // // //         });
// // // // //       } finally {
// // // // //         setFormSubmitting(false);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   // Calculate fiscal year dates
// // // // //   const today = new Date();
// // // // //   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // // //   const fyStart = new Date(fyStartYear, 3, 1);
// // // // //   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // // //   const effectiveMinDate = today > fyStart ? today : fyStart;
// // // // //   const minDate = effectiveMinDate.toISOString().split('T')[0];
// // // // //   const maxDate = fyEnd.toISOString().split('T')[0];

// // // // //   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
// // // // //     ? formData.shoot_dates 
// // // // //     : minDate;

// // // // //   const selectedServicesDetails = getSelectedServicesWithDetails();

// // // // //   const handleLogout = () => {
// // // // //     logout();
// // // // //   };

// // // // //   return (
// // // // //     <div className="proposal-form-component">
// // // // //       {/* Header */}
// // // // //       <div className="header bg-white border-bottom py-2">
// // // // //         <Container fluid className="px-4">
// // // // //           <div className="d-flex justify-content-between align-items-center">
// // // // //             <div className="d-flex align-items-center">
// // // // //               <img 
// // // // //                 src={Logo} 
// // // // //                 alt="Company Logo" 
// // // // //                 style={{ height: '55px', width: 'auto' }} 
// // // // //               />
// // // // //             </div>
// // // // //             <div className="text-center flex-grow-1">
// // // // //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// // // // //             </div>

// // // // //             <div className="d-flex gap-2">
// // // // //               <Button variant="outline-primary" onClick={onDashboardClick} size="sm">
// // // // //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // // // //                 Dashboard
// // // // //               </Button>
// // // // //               <Button variant="outline-primary" onClick={onHomeClick} size="sm">
// // // // //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // // // //                 Home
// // // // //               </Button>
// // // // //               <Button variant="outline-danger" onClick={handleLogout} size="sm">
// // // // //                 <FontAwesomeIcon icon={faUser} className="me-2" />
// // // // //                 Logout
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>
// // // // //         </Container>
// // // // //       </div>
      
// // // // //       <Container className="py-4">
// // // // //         <Row>
// // // // //           <Col lg={8}>
// // // // //             <Card className="shadow-sm border-0 mb-4">
// // // // //               <Card.Body className="p-4">
// // // // //                 <div className="d-flex justify-content-between align-items-center mb-4">
// // // // //                   <div>
// // // // //                     <h3 className="mb-1">Create Studio Proposal</h3>
// // // // //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// // // // //                   </div>
// // // // //                 </div>

// // // // //                 {/* Error/Success Alerts */}
// // // // //                 {errors.submission && (
// // // // //                   <Alert variant="danger" dismissible onClose={() => setErrors(prev => {
// // // // //                     const newErrors = {...prev};
// // // // //                     delete newErrors.submission;
// // // // //                     return newErrors;
// // // // //                   })}>
// // // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // // //                     {errors.submission}
// // // // //                   </Alert>
// // // // //                 )}

// // // // //                 {serviceError && (
// // // // //                   <Alert variant="danger" dismissible onClose={() => setServiceError('')}>
// // // // //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // // //                     {serviceError}
// // // // //                   </Alert>
// // // // //                 )}

// // // // //                 <Form onSubmit={handleSubmit}>
// // // // //                   {/* Client Information */}
// // // // //                   <h5 className="mb-3">
// // // // //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// // // // //                     Client Information
// // // // //                   </h5>
                  
// // // // //                   <Row>
// // // // //                     <Col md={6}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>Brand Name <span className="text-danger">*</span></Form.Label>
// // // // //                         <InputGroup hasValidation>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
// // // // //                           <Form.Control
// // // // //                             type="text"
// // // // //                             name="client_name"
// // // // //                             value={formData.client_name}
// // // // //                             onChange={handleChange}
// // // // //                             isInvalid={!!errors.client_name}
// // // // //                             placeholder="e.g. Zee TV, Colors"
// // // // //                             required
// // // // //                           />
// // // // //                           <Form.Control.Feedback type="invalid">
// // // // //                             {errors.client_name}
// // // // //                           </Form.Control.Feedback>
// // // // //                         </InputGroup>
// // // // //                       </Form.Group>
// // // // //                     </Col>
                    
// // // // //                     <Col md={6}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>Your Email <span className="text-danger">*</span></Form.Label>
// // // // //                         <InputGroup hasValidation>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
// // // // //                           <Form.Control
// // // // //                             type="email"
// // // // //                             name="your_email"
// // // // //                             value={formData.your_email}
// // // // //                             onChange={handleChange}
// // // // //                             isInvalid={!!errors.your_email}
// // // // //                             placeholder="e.g. user@tsbi.in"
// // // // //                             required
// // // // //                           />
// // // // //                           <Form.Control.Feedback type="invalid">
// // // // //                             {errors.your_email}
// // // // //                           </Form.Control.Feedback>
// // // // //                         </InputGroup>
// // // // //                         <Form.Text className="text-muted">
// // // // //                           Only @tsbi.in email addresses are allowed
// // // // //                         </Form.Text>
// // // // //                       </Form.Group>
// // // // //                     </Col>
// // // // //                   </Row>

// // // // //                   <hr className="my-4" />
                  
// // // // //                   {/* Project Details */}
// // // // //                   <h5 className="mb-3">
// // // // //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// // // // //                     Project Details
// // // // //                   </h5>
                  
// // // // //                   <Form.Group className="mb-3">
// // // // //                     <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
// // // // //                     <InputGroup hasValidation>
// // // // //                       <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// // // // //                       <Form.Control
// // // // //                         type="text"
// // // // //                         name="project_title"
// // // // //                         value={formData.project_title}
// // // // //                         onChange={handleChange}
// // // // //                         isInvalid={!!errors.project_title}
// // // // //                         placeholder="e.g. Product Launch Promo"
// // // // //                         required
// // // // //                       />
// // // // //                       <Form.Control.Feedback type="invalid">
// // // // //                         {errors.project_title}
// // // // //                       </Form.Control.Feedback>
// // // // //                     </InputGroup>
// // // // //                   </Form.Group>

// // // // //                   <Row>
// // // // //                     <Col md={6}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>
// // // // //                           Category Package <span className="text-danger">*</span>
// // // // //                           {selectedCategory && (
// // // // //                             <Badge bg="success" className="ms-2">
// // // // //                               <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
// // // // //                               {selectedCategory.services?.length || 0} services auto-selected
// // // // //                             </Badge>
// // // // //                           )}
// // // // //                         </Form.Label>
// // // // //                         <InputGroup hasValidation>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// // // // //                           <Form.Select 
// // // // //                             name="category_id"
// // // // //                             value={formData.category_id}
// // // // //                             onChange={handleChange}
// // // // //                             isInvalid={!!errors.category_id}
// // // // //                             disabled={categoriesLoading}
// // // // //                             required
// // // // //                           >
// // // // //                             <option value="" disabled>
// // // // //                               {categoriesLoading ? 'Loading categories...' : 'Select a category package'}
// // // // //                             </option>
// // // // //                             {categories.map(category => (
// // // // //                               <option key={category.id} value={category.id}>
// // // // //                                 {category.name}
// // // // //                                 {category.description && ` - ${category.description}`}
// // // // //                               </option>
// // // // //                             ))}
// // // // //                           </Form.Select>
// // // // //                           <Form.Control.Feedback type="invalid">
// // // // //                             {errors.category_id}
// // // // //                           </Form.Control.Feedback>
// // // // //                         </InputGroup>
// // // // //                         {selectedCategory && (
// // // // //                           <Form.Text className="text-success">
// // // // //                             <FontAwesomeIcon icon={faCheck} className="me-1" />
// // // // //                             Services from "{selectedCategory.name}" have been automatically added
// // // // //                           </Form.Text>
// // // // //                         )}
// // // // //                       </Form.Group>
// // // // //                     </Col>
                    
// // // // //                     <Col md={6}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>Location <span className="text-danger">*</span></Form.Label>
// // // // //                         <InputGroup hasValidation>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
// // // // //                           <Form.Select 
// // // // //                             name="location"
// // // // //                             value={formData.location}
// // // // //                             onChange={handleChange}
// // // // //                             isInvalid={!!errors.location}
// // // // //                             required
// // // // //                           >
// // // // //                             <option value="" disabled>Select a location</option>
// // // // //                             <option value="Mumbai">Mumbai</option>
// // // // //                             <option value="Outside Mumbai">Outside Mumbai</option>
// // // // //                           </Form.Select>
// // // // //                           <Form.Control.Feedback type="invalid">
// // // // //                             {errors.location}
// // // // //                           </Form.Control.Feedback>
// // // // //                         </InputGroup>
// // // // //                       </Form.Group>
// // // // //                     </Col>
// // // // //                   </Row>

// // // // //                   <hr className="my-4" />
                  
// // // // //                   {/* Service Selection */}
// // // // //                   <h5 className="mb-3">
// // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // //                     Service Selection & Quantities
// // // // //                     <Badge bg="secondary" className="ms-2">
// // // // //                       {Object.keys(formData.services).length} services selected
// // // // //                     </Badge>
// // // // //                   </h5>
                  
// // // // //                   <Form.Group className="mb-4">
// // // // //                     {isLoading ? (
// // // // //                       <div className="text-center py-4">
// // // // //                         <Spinner animation="border" variant="primary" />
// // // // //                         <p className="mt-2">Loading available services...</p>
// // // // //                       </div>
// // // // //                     ) : Object.keys(organizedServices).length > 0 ? (
// // // // //                       <div className="service-selection border rounded bg-light">
// // // // //                         <Tab.Container activeKey={activeServiceCategory} onSelect={setActiveServiceCategory}>
// // // // //                           {/* Category Tabs */}
// // // // //                           <div className="border-bottom bg-white p-3">
// // // // //                             <Nav variant="pills" className="justify-content-center">
// // // // //                               {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// // // // //                                 <Nav.Item key={key}>
// // // // //                                   <Nav.Link eventKey={key}>
// // // // //                                     <FontAwesomeIcon icon={category.icon} className="me-2" />
// // // // //                                     {category.name}
// // // // //                                     {organizedServices[key] && (
// // // // //                                       <Badge bg="secondary" className="ms-2">
// // // // //                                         {key === 'post-production' 
// // // // //                                           ? (organizedServices[key]['all'] || []).length
// // // // //                                           : Object.values(organizedServices[key]).flat().length
// // // // //                                         }
// // // // //                                       </Badge>
// // // // //                                     )}
// // // // //                                   </Nav.Link>
// // // // //                                 </Nav.Item>
// // // // //                               ))}
// // // // //                             </Nav>
// // // // //                           </div>

// // // // //                           {/* Services Content */}
// // // // //                           <Tab.Content className="p-3">
// // // // //                             {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
// // // // //                               <Tab.Pane key={categoryKey} eventKey={categoryKey}>
// // // // //                                 {organizedServices[categoryKey] ? (
// // // // //                                   categoryKey === 'post-production' ? (
// // // // //                                     // Post-production services
// // // // //                                     <div>
// // // // //                                       <h6 className="mb-3 text-primary">Post Production Services</h6>
// // // // //                                       <Row>
// // // // //                                         {(organizedServices[categoryKey]['all'] || []).map(service => (
// // // // //                                           <Col md={12} key={service.id} className="mb-3">
// // // // //                                             <Card className={`service-card ${formData.services[service.id] ? 'selected' : ''}`}>
// // // // //                                               <Card.Body className="p-3">
// // // // //                                                 <div className="d-flex justify-content-between align-items-center">
// // // // //                                                   <div className="flex-grow-1">
// // // // //                                                     <h6 className="mb-1">{service.service_name}</h6>
// // // // //                                                     <small className="text-muted">₹{service.rate_per_day}/day</small>
// // // // //                                                   </div>
// // // // //                                                   <div className="d-flex align-items-center gap-2">
// // // // //                                                     <ButtonGroup size="sm">
// // // // //                                                       <Button 
// // // // //                                                         variant="outline-danger"
// // // // //                                                         onClick={() => handleServiceQuantityChange(service.id, -1)}
// // // // //                                                         disabled={!formData.services[service.id]}
// // // // //                                                       >
// // // // //                                                         <FontAwesomeIcon icon={faMinus} />
// // // // //                                                       </Button>
// // // // //                                                       <Button variant="outline-secondary" disabled>
// // // // //                                                         {formData.services[service.id] || 0}
// // // // //                                                       </Button>
// // // // //                                                       <Button 
// // // // //                                                         variant="outline-success"
// // // // //                                                         onClick={() => handleServiceQuantityChange(service.id, 1)}
// // // // //                                                       >
// // // // //                                                         <FontAwesomeIcon icon={faPlus} />
// // // // //                                                       </Button>
// // // // //                                                     </ButtonGroup>
// // // // //                                                   </div>
// // // // //                                                 </div>
// // // // //                                               </Card.Body>
// // // // //                                             </Card>
// // // // //                                           </Col>
// // // // //                                         ))}
// // // // //                                       </Row>
// // // // //                                     </div>
// // // // //                                   ) : (
// // // // //                                     // Other categories with subcategories
// // // // //                                     <div>
// // // // //                                       {Object.entries(organizedServices[categoryKey]).map(([subcategoryKey, subcategoryServices]) => {
// // // // //                                         const subcategoryName = SERVICE_CATEGORIES[categoryKey].subcategories?.[subcategoryKey]?.name || subcategoryKey;
                                        
// // // // //                                         return (
// // // // //                                           <div key={subcategoryKey} className="mb-4">
// // // // //                                             <h6 className="mb-3 text-primary border-bottom pb-2">
// // // // //                                               {subcategoryName}
// // // // //                                               <Badge bg="info" className="ms-2">
// // // // //                                                 {subcategoryServices.length} services
// // // // //                                               </Badge>
// // // // //                                             </h6>
// // // // //                                             <Row>
// // // // //                                               {subcategoryServices.map(service => (
// // // // //                                                 <Col md={6} key={service.id} className="mb-3">
// // // // //                                                   <Card className={`service-card ${formData.services[service.id] ? 'selected' : ''}`}>
// // // // //                                                     <Card.Body className="p-3">
// // // // //                                                       <div className="d-flex justify-content-between align-items-center">
// // // // //                                                         <div className="flex-grow-1">
// // // // //                                                           <h6 className="mb-1 small">{service.service_name}</h6>
// // // // //                                                           <small className="text-muted">₹{service.rate_per_day}/day</small>
// // // // //                                                         </div>
// // // // //                                                         <div className="d-flex align-items-center gap-2">
// // // // //                                                           <ButtonGroup size="sm">
// // // // //                                                             <Button 
// // // // //                                                               variant="outline-danger"
// // // // //                                                               onClick={() => handleServiceQuantityChange(service.id, -1)}
// // // // //                                                               disabled={!formData.services[service.id]}
// // // // //                                                             >
// // // // //                                                               <FontAwesomeIcon icon={faMinus} />
// // // // //                                                             </Button>
// // // // //                                                             <Button variant="outline-secondary" disabled style={{ minWidth: '40px' }}>
// // // // //                                                               {formData.services[service.id] || 0}
// // // // //                                                             </Button>
// // // // //                                                             <Button 
// // // // //                                                               variant="outline-success"
// // // // //                                                               onClick={() => handleServiceQuantityChange(service.id, 1)}
// // // // //                                                             >
// // // // //                                                               <FontAwesomeIcon icon={faPlus} />
// // // // //                                                             </Button>
// // // // //                                                           </ButtonGroup>
// // // // //                                                         </div>
// // // // //                                                       </div>
// // // // //                                                     </Card.Body>
// // // // //                                                   </Card>
// // // // //                                                 </Col>
// // // // //                                               ))}
// // // // //                                             </Row>
// // // // //                                           </div>
// // // // //                                         );
// // // // //                                       })}
// // // // //                                     </div>
// // // // //                                   )
// // // // //                                 ) : (
// // // // //                                   <div className="text-center py-4">
// // // // //                                     <p className="text-muted">No services available in this category</p>
// // // // //                                   </div>
// // // // //                                 )}
// // // // //                               </Tab.Pane>
// // // // //                             ))}
// // // // //                           </Tab.Content>
// // // // //                         </Tab.Container>
                        
// // // // //                         {errors.services && (
// // // // //                           <div className="text-danger small mt-2 px-3 pb-2">
// // // // //                             <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
// // // // //                             {errors.services}
// // // // //                           </div>
// // // // //                         )}
// // // // //                       </div>
// // // // //                     ) : (
// // // // //                       <Alert variant="warning">
// // // // //                         No services available. Please contact the administrator.
// // // // //                       </Alert>
// // // // //                     )}
// // // // //                   </Form.Group>

// // // // //                   {/* Timeline */}
// // // // //                   <Row>
// // // // //                     <Col md={4}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>Number of Days <span className="text-danger">*</span></Form.Label>
// // // // //                         <InputGroup>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// // // // //                           <Form.Control
// // // // //                             type="number"
// // // // //                             name="days"
// // // // //                             value={formData.days}
// // // // //                             onChange={handleChange}
// // // // //                             min="1"
// // // // //                             max="100"
// // // // //                             required
// // // // //                           />
// // // // //                         </InputGroup>
// // // // //                       </Form.Group>
// // // // //                     </Col>
                    
// // // // //                     <Col md={4}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>
// // // // //                           Shoot Date <span className="text-danger">*</span>
// // // // //                           <OverlayTrigger
// // // // //                             placement="top"
// // // // //                             overlay={
// // // // //                               <Tooltip>
// // // // //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// // // // //                               </Tooltip>
// // // // //                             }
// // // // //                           >
// // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // //                           </OverlayTrigger>
// // // // //                         </Form.Label>
// // // // //                         <InputGroup hasValidation>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// // // // //                           <Form.Control
// // // // //                             type="date"
// // // // //                             name="shoot_dates"
// // // // //                             value={formData.shoot_dates}
// // // // //                             onChange={handleChange}
// // // // //                             isInvalid={!!errors.shoot_dates}
// // // // //                             min={minDate}
// // // // //                             max={maxDate}
// // // // //                             required
// // // // //                           />
// // // // //                           <Form.Control.Feedback type="invalid">
// // // // //                             {errors.shoot_dates}
// // // // //                           </Form.Control.Feedback>
// // // // //                         </InputGroup>
// // // // //                       </Form.Group>
// // // // //                     </Col>
                    
// // // // //                     <Col md={4}>
// // // // //                       <Form.Group className="mb-3">
// // // // //                         <Form.Label>
// // // // //                           Delivery Date <span className="text-danger">*</span>
// // // // //                           <OverlayTrigger
// // // // //                             placement="top"
// // // // //                             overlay={
// // // // //                               <Tooltip>
// // // // //                                 Must be on or after shoot date, within fiscal year
// // // // //                               </Tooltip>
// // // // //                             }
// // // // //                           >
// // // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // // //                           </OverlayTrigger>
// // // // //                         </Form.Label>
// // // // //                         <InputGroup hasValidation>
// // // // //                           <InputGroup.Text><FontAwesomeIcon icon={faTruck} /></InputGroup.Text>
// // // // //                           <Form.Control
// // // // //                             type="date"
// // // // //                             name="delivery_date"
// // // // //                             value={formData.delivery_date}
// // // // //                             onChange={handleChange}
// // // // //                             isInvalid={!!errors.delivery_date}
// // // // //                             min={deliveryMinDate}
// // // // //                             max={maxDate}
// // // // //                             required
// // // // //                           />
// // // // //                           <Form.Control.Feedback type="invalid">
// // // // //                             {errors.delivery_date}
// // // // //                           </Form.Control.Feedback>
// // // // //                         </InputGroup>
// // // // //                       </Form.Group>
// // // // //                     </Col>
// // // // //                   </Row>

// // // // //                   <div className="d-grid mt-4">
// // // // //                     <Button 
// // // // //                       variant="success" 
// // // // //                       type="submit" 
// // // // //                       size="lg"
// // // // //                       disabled={formSubmitting || isLoading}
// // // // //                     >
// // // // //                       {formSubmitting ? (
// // // // //                         <>
// // // // //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // //                           Generating Proposal...
// // // // //                         </>
// // // // //                       ) : (
// // // // //                         <>
// // // // //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// // // // //                           Generate Proposal
// // // // //                         </>
// // // // //                       )}
// // // // //                     </Button>
// // // // //                   </div>
// // // // //                 </Form>
// // // // //               </Card.Body>
// // // // //             </Card>
// // // // //           </Col>

// // // // //           {/* Summary Sidebar */}
// // // // //           <Col lg={4}>
// // // // //             <div className="sticky-top" style={{ top: '20px' }}>
// // // // //               <Card className="shadow-sm border-0 mb-4">
// // // // //                 <Card.Body className="p-4">
// // // // //                   <h5 className="mb-3">
// // // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // // //                     Quote Summary
// // // // //                   </h5>
                  
// // // // //                   {formData.client_name && (
// // // // //                     <p><strong>Client:</strong> {formData.client_name}</p>
// // // // //                   )}
                  
// // // // //                   {formData.project_title && (
// // // // //                     <p><strong>Project:</strong> {formData.project_title}</p>
// // // // //                   )}

// // // // //                   {selectedCategory && (
// // // // //                     <p>
// // // // //                       <strong>Package:</strong> 
// // // // //                       <Badge bg="primary" className="ms-2">{selectedCategory.name}</Badge>
// // // // //                     </p>
// // // // //                   )}
                  
// // // // //                   {formData.days > 0 && (
// // // // //                     <p><strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}</p>
// // // // //                   )}
                  
// // // // //                   {formData.shoot_dates && (
// // // // //                     <p>
// // // // //                       <strong>Shoot Date:</strong>{' '}
// // // // //                       {new Date(formData.shoot_dates).toLocaleDateString('en-IN', {
// // // // //                         day: 'numeric',
// // // // //                         month: 'long',
// // // // //                         year: 'numeric'
// // // // //                       })}
// // // // //                     </p>
// // // // //                   )}
                  
// // // // //                   {formData.delivery_date && (
// // // // //                     <p>
// // // // //                       <strong>Delivery Date:</strong>{' '}
// // // // //                       {new Date(formData.delivery_date).toLocaleDateString('en-IN', {
// // // // //                         day: 'numeric',
// // // // //                         month: 'long',
// // // // //                         year: 'numeric'
// // // // //                       })}
// // // // //                     </p>
// // // // //                   )}

// // // // //                   <div className="mb-3">
// // // // //                     <strong>Selected Services:</strong>
// // // // //                     {selectedServicesDetails.length > 0 ? (
// // // // //                       <div className="mt-2">
// // // // //                         {/* Group services by category */}
// // // // //                         {Object.entries(
// // // // //                           selectedServicesDetails.reduce((groups, service) => {
// // // // //                             const category = service.categoryName;
// // // // //                             if (!groups[category]) {
// // // // //                               groups[category] = {};
// // // // //                             }
// // // // //                             const subcategory = service.subcategoryName;
// // // // //                             if (!groups[category][subcategory]) {
// // // // //                               groups[category][subcategory] = [];
// // // // //                             }
// // // // //                             groups[category][subcategory].push(service);
// // // // //                             return groups;
// // // // //                           }, {})
// // // // //                         ).map(([categoryName, subcategories]) => (
// // // // //                           <div key={categoryName} className="mb-3">
// // // // //                             <div className="d-flex align-items-center mb-2">
// // // // //                               <FontAwesomeIcon 
// // // // //                                 icon={
// // // // //                                   categoryName.includes('Pre-Production') ? faEdit :
// // // // //                                   categoryName.includes('Production') ? faCamera : faVideo
// // // // //                                 } 
// // // // //                                 className="me-2 text-primary" 
// // // // //                               />
// // // // //                               <strong className="text-primary">{categoryName}</strong>
// // // // //                             </div>
// // // // //                             {Object.entries(subcategories).map(([subcategoryName, services]) => (
// // // // //                               <div key={subcategoryName} className="ms-3 mb-2">
// // // // //                                 {subcategoryName !== 'Post Production Services' && (
// // // // //                                   <div className="fw-bold text-muted small mb-1">{subcategoryName}</div>
// // // // //                                 )}
// // // // //                                 {services.map((service) => (
// // // // //                                   <div key={service.id} className="d-flex justify-content-between align-items-center border-bottom py-1">
// // // // //                                     <div>
// // // // //                                       <span className="small">{service.service_name}</span>
// // // // //                                       {service.quantity > 1 && (
// // // // //                                         <Badge bg="info" className="ms-2" style={{ fontSize: '0.7rem' }}>
// // // // //                                           x{service.quantity}
// // // // //                                         </Badge>
// // // // //                                       )}
// // // // //                                     </div>
// // // // //                                     <div className="text-end">
// // // // //                                       <Badge bg="light" text="dark" className="rate-display">
// // // // //                                         ₹{service.totalCost.toLocaleString()}
// // // // //                                       </Badge>
// // // // //                                       <div className="small text-muted">
// // // // //                                         ₹{service.rate_per_day}/day × {service.quantity} × {formData.days}
// // // // //                                       </div>
// // // // //                                     </div>
// // // // //                                   </div>
// // // // //                                 ))}
// // // // //                               </div>
// // // // //                             ))}
// // // // //                           </div>
// // // // //                         ))}
// // // // //                       </div>
// // // // //                     ) : (
// // // // //                       <p className="text-muted mt-2">No services selected</p>
// // // // //                     )}
// // // // //                   </div>

// // // // //                   <hr />
                  
// // // // //                   <div className="d-flex justify-content-between align-items-center">
// // // // //                     <h4 className="mb-0">Total:</h4>
// // // // //                     <h4 className="mb-0 rate-display text-success">₹{total.toLocaleString()}</h4>
// // // // //                   </div>
                  
// // // // //                   {selectedServicesDetails.length > 0 && (
// // // // //                     <div className="mt-3 text-center">
// // // // //                       <small className="text-muted">
// // // // //                         <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // // // //                         This is an estimate based on your selections
// // // // //                       </small>
// // // // //                     </div>
// // // // //                   )}

// // // // //                   {/* Quick Summary Stats */}
// // // // //                   {Object.keys(formData.services).length > 0 && (
// // // // //                     <div className="mt-3 pt-3 border-top">
// // // // //                       <Row className="text-center">
// // // // //                         <Col>
// // // // //                           <div className="small text-muted">Services</div>
// // // // //                           <div className="fw-bold">{Object.keys(formData.services).length}</div>
// // // // //                         </Col>
// // // // //                         <Col>
// // // // //                           <div className="small text-muted">Total Units</div>
// // // // //                           <div className="fw-bold">
// // // // //                             {Object.values(formData.services).reduce((sum, qty) => sum + qty, 0)}
// // // // //                           </div>
// // // // //                         </Col>
// // // // //                         <Col>
// // // // //                           <div className="small text-muted">Per Day</div>
// // // // //                           <div className="fw-bold">₹{Math.round(total / formData.days).toLocaleString()}</div>
// // // // //                         </Col>
// // // // //                       </Row>
// // // // //                     </div>
// // // // //                   )}
// // // // //                 </Card.Body>
// // // // //               </Card>
              
// // // // //               <Card className="shadow-sm border-0 bg-light">
// // // // //                 <Card.Body className="p-3">
// // // // //                   <div className="d-flex align-items-center">
// // // // //                     <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
// // // // //                     <small>
// // // // //                       <strong>Need help?</strong> Contact the tech team at{' '}
// // // // //                       <a href="mailto:tech@tsbi.in">tech@tsbi.in</a> for assistance.
// // // // //                     </small>
// // // // //                   </div>
// // // // //                 </Card.Body>
// // // // //               </Card>
// // // // //             </div>
// // // // //           </Col>
// // // // //         </Row>
// // // // //       </Container>

// // // // //       {/* Custom Styles */}
// // // // //       <style jsx>{`
// // // // //         .header {
// // // // //           border-bottom: 1px solid #e9e9e9;
// // // // //         }
        
// // // // //         .text-purple {
// // // // //           color: #8e24aa;
// // // // //           font-size: 1.75rem;
// // // // //           font-weight: 600;
// // // // //         }
        
// // // // //         .service-selection {
// // // // //           max-height: 600px;
// // // // //           overflow-y: auto;
// // // // //         }
        
// // // // //         .service-card {
// // // // //           transition: all 0.2s ease;
// // // // //           border: 2px solid transparent;
// // // // //           cursor: pointer;
// // // // //         }
        
// // // // //         .service-card:hover {
// // // // //           border-color: #0d6efd;
// // // // //           box-shadow: 0 2px 8px rgba(13, 110, 253, 0.15);
// // // // //         }
        
// // // // //         .service-card.selected {
// // // // //           border-color: #28a745;
// // // // //           background-color: rgba(40, 167, 69, 0.05);
// // // // //         }
        
// // // // //         .nav-pills .nav-link {
// // // // //           color: #6c757d;
// // // // //           border-radius: 0.375rem;
// // // // //           margin-right: 0.5rem;
// // // // //           transition: all 0.2s ease;
// // // // //         }
        
// // // // //         .nav-pills .nav-link:hover {
// // // // //           background-color: rgba(13, 110, 253, 0.1);
// // // // //           color: #0d6efd;
// // // // //         }
        
// // // // //         .nav-pills .nav-link.active {
// // // // //           background-color: #0d6efd;
// // // // //           color: white;
// // // // //         }
        
// // // // //         .rate-display {
// // // // //           font-family: monospace;
// // // // //           white-space: nowrap;
// // // // //         }
        
// // // // //         .sticky-top {
// // // // //           z-index: 100;
// // // // //         }

// // // // //         .btn-group .btn {
// // // // //           border-radius: 0;
// // // // //         }

// // // // //         .btn-group .btn:first-child {
// // // // //           border-top-left-radius: 0.375rem;
// // // // //           border-bottom-left-radius: 0.375rem;
// // // // //         }

// // // // //         .btn-group .btn:last-child {
// // // // //           border-top-right-radius: 0.375rem;
// // // // //           border-bottom-right-radius: 0.375rem;
// // // // //         }

// // // // //         @media (max-width: 768px) {
// // // // //           .text-purple {
// // // // //             font-size: 1.25rem;
// // // // //           }
          
// // // // //           .service-selection {
// // // // //             max-height: 400px;
// // // // //           }

// // // // //           .service-card .btn-group {
// // // // //             scale: 0.9;
// // // // //           }
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default ProposalForm;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { 
// // // //   Form, 
// // // //   Button, 
// // // //   Card, 
// // // //   Alert, 
// // // //   Container, 
// // // //   Row, 
// // // //   Col, 
// // // //   InputGroup, 
// // // //   Badge,
// // // //   Spinner,
// // // //   OverlayTrigger,
// // // //   Tooltip,
// // // //   ListGroup,
// // // //   Modal,
// // // //   Table
// // // // } from 'react-bootstrap';
// // // // import { 
// // // //   fetchServices, 
// // // //   fetchCategories,
// // // //   fetchTables,
// // // //   fetchTableData
// // // // } from '../../services/api';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { 
// // // //   faCheck,
// // // //   faTimes,
// // // //   faInfoCircle,
// // // //   faCalendarAlt,
// // // //   faBuilding,
// // // //   faEnvelope,
// // // //   faTag,
// // // //   faMapMarkerAlt,
// // // //   faMoneyBillWave,
// // // //   faFilePdf,
// // // //   faUser,
// // // //   faClipboardList,
// // // //   faExclamationTriangle,
// // // //   faTruck,
// // // //   faEdit,
// // // //   faCamera,
// // // //   faVideo,
// // // //   faChevronDown,
// // // //   faChevronRight,
// // // //   faPlus,
// // // //   faMinus,
// // // //   faLayerGroup,
// // // //   faUsers,
// // // //   faStar,
// // // //   faEye
// // // // } from '@fortawesome/free-solid-svg-icons';
// // // // import Logo from '../../assets/Logo.png';
// // // // import { useUserAuth } from '../../contexts/UserAuthContext';

// // // // // Service categories structure
// // // // const SERVICE_CATEGORIES = {
// // // //   'pre-production': {
// // // //     name: 'Pre-Production',
// // // //     icon: faEdit,
// // // //     color: '#17a2b8'
// // // //   },
// // // //   'production': {
// // // //     name: 'Production',
// // // //     icon: faCamera,
// // // //     color: '#28a745'
// // // //   },
// // // //   'post-production': {
// // // //     name: 'Post Production',
// // // //     icon: faVideo,
// // // //     color: '#6f42c1'
// // // //   }
// // // // };

// // // // function ProposalForm({ onSubmit, onAdminClick, onHomeClick, onDashboardClick }) {
// // // //   const { user, logout } = useUserAuth();
  
// // // //   // State management
// // // //   const [services, setServices] = useState([]);
// // // //   const [categories, setCategories] = useState([]);
// // // //   const [dynamicTables, setDynamicTables] = useState([]);
// // // //   const [tableData, setTableData] = useState({});
// // // //   const [organizedServices, setOrganizedServices] = useState({});
// // // //   const [formData, setFormData] = useState({
// // // //     client_name: '',
// // // //     your_email: '',
// // // //     project_title: '',
// // // //     category_id: '',
// // // //     location: '',
// // // //     services: {}, // serviceId: { quantity: 1, selectedItems: [] }
// // // //     days: 1,
// // // //     shoot_dates: '',
// // // //     delivery_date: ''
// // // //   });
// // // //   const [errors, setErrors] = useState({});
// // // //   const [total, setTotal] = useState(0);
// // // //   const [isLoading, setIsLoading] = useState(true);
// // // //   const [categoriesLoading, setCategoriesLoading] = useState(true);
// // // //   const [serviceError, setServiceError] = useState('');
// // // //   const [formSubmitting, setFormSubmitting] = useState(false);
// // // //   const [selectedCategory, setSelectedCategory] = useState(null);
  
// // // //   // Modal states
// // // //   const [showServiceModal, setShowServiceModal] = useState(false);
// // // //   const [selectedService, setSelectedService] = useState(null);
// // // //   const [selectedServiceItems, setSelectedServiceItems] = useState([]);

// // // //   // Load data on component mount
// // // //   useEffect(() => {
// // // //     loadServices();
// // // //     loadCategories();
// // // //     loadDynamicTables();
// // // //   }, []);

// // // //   // Load services from API
// // // //   const loadServices = async () => {
// // // //     try {
// // // //       setIsLoading(true);
// // // //       const response = await fetchServices();
// // // //       const servicesWithStringIds = response.data.map(service => ({
// // // //         ...service,
// // // //         id: service.id.toString()
// // // //       }));
// // // //       setServices(servicesWithStringIds);
      
// // // //       // Organize services by category
// // // //       const organized = {};
// // // //       servicesWithStringIds.forEach(service => {
// // // //         const category = service.category || 'pre-production';
        
// // // //         if (!organized[category]) {
// // // //           organized[category] = {};
// // // //         }
        
// // // //         if (category === 'post-production') {
// // // //           if (!organized[category]['all']) {
// // // //             organized[category]['all'] = [];
// // // //           }
// // // //           organized[category]['all'].push(service);
// // // //         } else {
// // // //           const subcategory = service.subcategory || 'part-1';
// // // //           if (!organized[category][subcategory]) {
// // // //             organized[category][subcategory] = [];
// // // //           }
// // // //           organized[category][subcategory].push(service);
// // // //         }
// // // //       });
      
// // // //       setOrganizedServices(organized);
// // // //     } catch (error) {
// // // //       console.error('Error loading services:', error);
// // // //       setServiceError('Failed to load services. Please refresh the page or contact support.');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   // Load categories from API
// // // //   const loadCategories = async () => {
// // // //     try {
// // // //       setCategoriesLoading(true);
// // // //       const response = await fetchCategories();
// // // //       setCategories(response.data || []);
// // // //     } catch (error) {
// // // //       console.error('Error loading categories:', error);
// // // //       setCategories([
// // // //         { id: 'fallback-1', name: 'Digital Bytes', description: 'Short digital content' },
// // // //         { id: 'fallback-2', name: 'Piece to Camera', description: 'Direct camera presentations' },
// // // //         { id: 'fallback-3', name: 'Digital Video', description: 'Full digital video production' },
// // // //         { id: 'fallback-4', name: 'Behind the Scene', description: 'BTS content creation' }
// // // //       ]);
// // // //     } finally {
// // // //       setCategoriesLoading(false);
// // // //     }
// // // //   };

// // // //   // Load dynamic tables
// // // //   const loadDynamicTables = async () => {
// // // //     try {
// // // //       const response = await fetchTables();
// // // //       if (response.data?.success && Array.isArray(response.data.data)) {
// // // //         setDynamicTables(response.data.data);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error loading dynamic tables:', error);
// // // //     }
// // // //   };

// // // //   // Load data for specific table
// // // //   const loadTableData = async (tableName) => {
// // // //     try {
// // // //       const table = dynamicTables.find(t => 
// // // //         t.table_name.toLowerCase() === tableName.toLowerCase()
// // // //       );
// // // //       if (table) {
// // // //         const response = await fetchTableData(table.id);
// // // //         const data = response.data?.data || [];
// // // //         setTableData(prev => ({
// // // //           ...prev,
// // // //           [tableName.toLowerCase()]: data
// // // //         }));
// // // //         return data;
// // // //       }
// // // //     } catch (error) {
// // // //       console.error(`Error loading ${tableName} data:`, error);
// // // //       return [];
// // // //     }
// // // //   };

// // // //   // Calculate total
// // // //   useEffect(() => {
// // // //     calculateTotal();
// // // //   }, [formData.services, formData.days, services, tableData]);

// // // //   // Handle category selection and auto-select services
// // // //   useEffect(() => {
// // // //     if (formData.category_id && categories.length > 0) {
// // // //       const category = categories.find(cat => cat.id.toString() === formData.category_id);
// // // //       if (category && category.selectedServices) {
// // // //         setSelectedCategory(category);
        
// // // //         const autoSelectedServices = {};
// // // //         category.selectedServices.forEach(serviceId => {
// // // //           autoSelectedServices[serviceId.toString()] = {
// // // //             quantity: 1,
// // // //             selectedItems: []
// // // //           };
// // // //         });
        
// // // //         setFormData(prev => ({
// // // //           ...prev,
// // // //           services: { ...prev.services, ...autoSelectedServices }
// // // //         }));
// // // //       }
// // // //     }
// // // //   }, [formData.category_id, categories]);

// // // //   const calculateTotal = () => {
// // // //     let calculatedTotal = 0;
    
// // // //     Object.entries(formData.services).forEach(([serviceId, serviceData]) => {
// // // //       if (serviceData.quantity > 0) {
// // // //         if (serviceData.selectedItems && serviceData.selectedItems.length > 0) {
// // // //           // Calculate based on selected items with individual rates
// // // //           serviceData.selectedItems.forEach(item => {
// // // //             const rate = item.rate || item.data_json?.rate || 0;
// // // //             calculatedTotal += rate * formData.days;
// // // //           });
// // // //         } else {
// // // //           // Use default service rate
// // // //           const service = services.find(s => s.id === serviceId);
// // // //           if (service) {
// // // //             calculatedTotal += service.rate_per_day * serviceData.quantity * formData.days;
// // // //           }
// // // //         }
// // // //       }
// // // //     });
    
// // // //     setTotal(calculatedTotal);
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
    
// // // //     if (errors[name]) {
// // // //       setErrors(prev => {
// // // //         const newErrors = {...prev};
// // // //         delete newErrors[name];
// // // //         return newErrors;
// // // //       });
// // // //     }

// // // //     setFormData(prev => ({
// // // //       ...prev,
// // // //       [name]: value
// // // //     }));
// // // //   };

// // // //   // Handle service quantity changes
// // // //   const handleServiceQuantityChange = (serviceId, change) => {
// // // //     setFormData(prev => {
// // // //       const currentService = prev.services[serviceId] || { quantity: 0, selectedItems: [] };
// // // //       const newQuantity = Math.max(0, currentService.quantity + change);
      
// // // //       const newServices = { ...prev.services };
// // // //       if (newQuantity === 0) {
// // // //         delete newServices[serviceId];
// // // //       } else {
// // // //         newServices[serviceId] = {
// // // //           ...currentService,
// // // //           quantity: newQuantity
// // // //         };
// // // //       }
      
// // // //       return {
// // // //         ...prev,
// // // //         services: newServices
// // // //       };
// // // //     });
// // // //   };

// // // //   // Open service selection modal
// // // //   const openServiceModal = async (service) => {
// // // //     setSelectedService(service);
// // // //     setSelectedServiceItems([]);
    
// // // //     // Check if this service has associated dynamic table data
// // // //     const serviceName = service.service_name.toLowerCase();
// // // //     const tableNames = ['director', 'cinematographer', 'editor', 'dop', 'line producer'];
    
// // // //     for (const tableName of tableNames) {
// // // //       if (serviceName.includes(tableName.replace('_', ' '))) {
// // // //         const data = await loadTableData(tableName);
// // // //         setSelectedServiceItems(data);
// // // //         break;
// // // //       }
// // // //     }
    
// // // //     setShowServiceModal(true);
// // // //   };

// // // //   // Handle item selection in modal
// // // //   const handleItemSelection = (item, isSelected) => {
// // // //     const serviceId = selectedService.id;
// // // //     setFormData(prev => {
// // // //       const currentService = prev.services[serviceId] || { quantity: 1, selectedItems: [] };
// // // //       let newSelectedItems;
      
// // // //       if (isSelected) {
// // // //         newSelectedItems = [...currentService.selectedItems, item];
// // // //       } else {
// // // //         newSelectedItems = currentService.selectedItems.filter(selected => selected.id !== item.id);
// // // //       }
      
// // // //       return {
// // // //         ...prev,
// // // //         services: {
// // // //           ...prev.services,
// // // //           [serviceId]: {
// // // //             ...currentService,
// // // //             selectedItems: newSelectedItems,
// // // //             quantity: Math.max(newSelectedItems.length, currentService.quantity)
// // // //           }
// // // //         }
// // // //       };
// // // //     });
// // // //   };

// // // //   // Get service display name with selected items count
// // // //   const getServiceDisplayInfo = (service) => {
// // // //     const serviceData = formData.services[service.id];
// // // //     if (!serviceData) return { name: service.service_name, count: 0, details: [] };
    
// // // //     let details = [];
// // // //     if (serviceData.selectedItems && serviceData.selectedItems.length > 0) {
// // // //       details = serviceData.selectedItems.map(item => ({
// // // //         name: item.data_json?.name || item.data_json?.title || `${service.service_name} ${item.id}`,
// // // //         rate: item.data_json?.rate || service.rate_per_day
// // // //       }));
// // // //     }
    
// // // //     return {
// // // //       name: service.service_name,
// // // //       count: serviceData.quantity || 0,
// // // //       details: details,
// // // //       hasTable: selectedServiceItems.length > 0
// // // //     };
// // // //   };

// // // //   // Validation and submit functions (keeping the same as before)
// // // //   const validateForm = () => {
// // // //     const newErrors = {};
    
// // // //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// // // //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// // // //     }
    
// // // //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// // // //     if (!emailPattern.test(formData.your_email)) {
// // // //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// // // //     }
    
// // // //     if (!formData.project_title || formData.project_title.trim() === '') {
// // // //       newErrors.project_title = 'Project title is required';
// // // //     } else if (formData.project_title.length > 100) {
// // // //       newErrors.project_title = 'Project title must be 1–100 characters long';
// // // //     }
    
// // // //     if (!formData.category_id) {
// // // //       newErrors.category_id = 'Please select a category';
// // // //     }
    
// // // //     if (!formData.location) {
// // // //       newErrors.location = 'Please select a location';
// // // //     }
    
// // // //     if (!formData.shoot_dates) {
// // // //       newErrors.shoot_dates = 'Shoot date is required';
// // // //     }
    
// // // //     if (!formData.delivery_date) {
// // // //       newErrors.delivery_date = 'Delivery date is required';
// // // //     }
    
// // // //     if (Object.keys(formData.services).length === 0) {
// // // //       newErrors.services = 'Please select at least one service';
// // // //     }
    
// // // //     setErrors(newErrors);
// // // //     return Object.keys(newErrors).length === 0;
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
    
// // // //     if (validateForm()) {
// // // //       setFormSubmitting(true);
// // // //       try {
// // // //         const submissionData = {
// // // //           ...formData,
// // // //           selectedCategory: selectedCategory,
// // // //           serviceDetails: Object.entries(formData.services).map(([serviceId, serviceData]) => ({
// // // //             serviceId,
// // // //             ...serviceData,
// // // //             service: services.find(s => s.id === serviceId)
// // // //           }))
// // // //         };
        
// // // //         await onSubmit(submissionData);
// // // //       } catch (error) {
// // // //         console.error('Form submission error:', error);
// // // //         setErrors({
// // // //           submission: 'An error occurred while generating the proposal. Please try again.'
// // // //         });
// // // //       } finally {
// // // //         setFormSubmitting(false);
// // // //       }
// // // //     }
// // // //   };

// // // //   // Calculate fiscal year dates
// // // //   const today = new Date();
// // // //   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // // //   const fyStart = new Date(fyStartYear, 3, 1);
// // // //   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // //   const effectiveMinDate = today > fyStart ? today : fyStart;
// // // //   const minDate = effectiveMinDate.toISOString().split('T')[0];
// // // //   const maxDate = fyEnd.toISOString().split('T')[0];

// // // //   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
// // // //     ? formData.shoot_dates 
// // // //     : minDate;

// // // //   const handleLogout = () => {
// // // //     logout();
// // // //   };

// // // //   return (
// // // //     <div className="proposal-form-component">
// // // //       {/* Header */}
// // // //       <div className="header bg-white border-bottom py-2">
// // // //         <Container fluid className="px-4">
// // // //           <div className="d-flex justify-content-between align-items-center">
// // // //             <div className="d-flex align-items-center">
// // // //               <img 
// // // //                 src={Logo} 
// // // //                 alt="Company Logo" 
// // // //                 style={{ height: '55px', width: 'auto' }} 
// // // //               />
// // // //             </div>
// // // //             <div className="text-center flex-grow-1">
// // // //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// // // //             </div>

// // // //             <div className="d-flex gap-2">
// // // //               <Button variant="outline-primary" onClick={onDashboardClick} size="sm">
// // // //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // // //                 Dashboard
// // // //               </Button>
// // // //               <Button variant="outline-primary" onClick={onHomeClick} size="sm">
// // // //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // // //                 Home
// // // //               </Button>
// // // //               <Button variant="outline-danger" onClick={handleLogout} size="sm">
// // // //                 <FontAwesomeIcon icon={faUser} className="me-2" />
// // // //                 Logout
// // // //               </Button>
// // // //             </div>
// // // //           </div>
// // // //         </Container>
// // // //       </div>
      
// // // //       <Container fluid className="py-4">
// // // //         <Row className="justify-content-center">
// // // //           <Col xl={10}>
// // // //             <Card className="shadow-sm border-0 mb-4">
// // // //               <Card.Body className="p-4">
// // // //                 <div className="d-flex justify-content-between align-items-center mb-4">
// // // //                   <div>
// // // //                     <h3 className="mb-1">Create Studio Proposal</h3>
// // // //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// // // //                   </div>
// // // //                   {total > 0 && (
// // // //                     <div className="text-end">
// // // //                       <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
// // // //                       <small className="text-muted">Total for {formData.days} day{formData.days !== 1 ? 's' : ''}</small>
// // // //                     </div>
// // // //                   )}
// // // //                 </div>

// // // //                 {/* Error/Success Alerts */}
// // // //                 {errors.submission && (
// // // //                   <Alert variant="danger" dismissible onClose={() => setErrors(prev => {
// // // //                     const newErrors = {...prev};
// // // //                     delete newErrors.submission;
// // // //                     return newErrors;
// // // //                   })}>
// // // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // //                     {errors.submission}
// // // //                   </Alert>
// // // //                 )}

// // // //                 {serviceError && (
// // // //                   <Alert variant="danger" dismissible onClose={() => setServiceError('')}>
// // // //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // //                     {serviceError}
// // // //                   </Alert>
// // // //                 )}

// // // //                 <Form onSubmit={handleSubmit}>
// // // //                   {/* Client Information */}
// // // //                   <h5 className="mb-3">
// // // //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// // // //                     Client Information
// // // //                   </h5>
                  
// // // //                   <Row>
// // // //                     <Col md={6}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>Brand Name <span className="text-danger">*</span></Form.Label>
// // // //                         <InputGroup hasValidation>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
// // // //                           <Form.Control
// // // //                             type="text"
// // // //                             name="client_name"
// // // //                             value={formData.client_name}
// // // //                             onChange={handleChange}
// // // //                             isInvalid={!!errors.client_name}
// // // //                             placeholder="e.g. Zee TV, Colors"
// // // //                             required
// // // //                           />
// // // //                           <Form.Control.Feedback type="invalid">
// // // //                             {errors.client_name}
// // // //                           </Form.Control.Feedback>
// // // //                         </InputGroup>
// // // //                       </Form.Group>
// // // //                     </Col>
                    
// // // //                     <Col md={6}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>Your Email <span className="text-danger">*</span></Form.Label>
// // // //                         <InputGroup hasValidation>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
// // // //                           <Form.Control
// // // //                             type="email"
// // // //                             name="your_email"
// // // //                             value={formData.your_email}
// // // //                             onChange={handleChange}
// // // //                             isInvalid={!!errors.your_email}
// // // //                             placeholder="e.g. user@tsbi.in"
// // // //                             required
// // // //                           />
// // // //                           <Form.Control.Feedback type="invalid">
// // // //                             {errors.your_email}
// // // //                           </Form.Control.Feedback>
// // // //                         </InputGroup>
// // // //                         <Form.Text className="text-muted">
// // // //                           Only @tsbi.in email addresses are allowed
// // // //                         </Form.Text>
// // // //                       </Form.Group>
// // // //                     </Col>
// // // //                   </Row>

// // // //                   <hr className="my-4" />
                  
// // // //                   {/* Project Details */}
// // // //                   <h5 className="mb-3">
// // // //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// // // //                     Project Details
// // // //                   </h5>
                  
// // // //                   <Form.Group className="mb-3">
// // // //                     <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
// // // //                     <InputGroup hasValidation>
// // // //                       <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// // // //                       <Form.Control
// // // //                         type="text"
// // // //                         name="project_title"
// // // //                         value={formData.project_title}
// // // //                         onChange={handleChange}
// // // //                         isInvalid={!!errors.project_title}
// // // //                         placeholder="e.g. Product Launch Promo"
// // // //                         required
// // // //                       />
// // // //                       <Form.Control.Feedback type="invalid">
// // // //                         {errors.project_title}
// // // //                       </Form.Control.Feedback>
// // // //                     </InputGroup>
// // // //                   </Form.Group>

// // // //                   <Row>
// // // //                     <Col md={6}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>
// // // //                           Category Package <span className="text-danger">*</span>
// // // //                           {selectedCategory && (
// // // //                             <Badge bg="success" className="ms-2">
// // // //                               <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
// // // //                               {selectedCategory.services?.length || 0} services auto-selected
// // // //                             </Badge>
// // // //                           )}
// // // //                         </Form.Label>
// // // //                         <InputGroup hasValidation>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// // // //                           <Form.Select 
// // // //                             name="category_id"
// // // //                             value={formData.category_id}
// // // //                             onChange={handleChange}
// // // //                             isInvalid={!!errors.category_id}
// // // //                             disabled={categoriesLoading}
// // // //                             required
// // // //                           >
// // // //                             <option value="" disabled>
// // // //                               {categoriesLoading ? 'Loading categories...' : 'Select a category package'}
// // // //                             </option>
// // // //                             {categories.map(category => (
// // // //                               <option key={category.id} value={category.id}>
// // // //                                 {category.name}
// // // //                                 {category.description && ` - ${category.description}`}
// // // //                               </option>
// // // //                             ))}
// // // //                           </Form.Select>
// // // //                           <Form.Control.Feedback type="invalid">
// // // //                             {errors.category_id}
// // // //                           </Form.Control.Feedback>
// // // //                         </InputGroup>
// // // //                         {selectedCategory && (
// // // //                           <Form.Text className="text-success">
// // // //                             <FontAwesomeIcon icon={faCheck} className="me-1" />
// // // //                             Services from "{selectedCategory.name}" have been automatically added
// // // //                           </Form.Text>
// // // //                         )}
// // // //                       </Form.Group>
// // // //                     </Col>
                    
// // // //                     <Col md={6}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>Location <span className="text-danger">*</span></Form.Label>
// // // //                         <InputGroup hasValidation>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
// // // //                           <Form.Select 
// // // //                             name="location"
// // // //                             value={formData.location}
// // // //                             onChange={handleChange}
// // // //                             isInvalid={!!errors.location}
// // // //                             required
// // // //                           >
// // // //                             <option value="" disabled>Select a location</option>
// // // //                             <option value="Mumbai">Mumbai</option>
// // // //                             <option value="Outside Mumbai">Outside Mumbai</option>
// // // //                           </Form.Select>
// // // //                           <Form.Control.Feedback type="invalid">
// // // //                             {errors.location}
// // // //                           </Form.Control.Feedback>
// // // //                         </InputGroup>
// // // //                       </Form.Group>
// // // //                     </Col>
// // // //                   </Row>

// // // //                   <hr className="my-4" />
                  
// // // //                   {/* Service Selection */}
// // // //                   <h5 className="mb-3">
// // // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // // //                     Service Selection & Quantities
// // // //                     <Badge bg="secondary" className="ms-2">
// // // //                       {Object.keys(formData.services).length} services selected
// // // //                     </Badge>
// // // //                   </h5>
                  
// // // //                   {isLoading ? (
// // // //                     <div className="text-center py-4">
// // // //                       <Spinner animation="border" variant="primary" />
// // // //                       <p className="mt-2">Loading available services...</p>
// // // //                     </div>
// // // //                   ) : (
// // // //                     <div className="service-selection-container">
// // // //                       {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => {
// // // //                         const categoryServices = organizedServices[categoryKey];
// // // //                         if (!categoryServices) return null;

// // // //                         return (
// // // //                           <div key={categoryKey} className="mb-4">
// // // //                             {/* Category Header */}
// // // //                             <div className="category-header p-3 mb-3 rounded" style={{ backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}` }}>
// // // //                               <h6 className="mb-0" style={{ color: category.color }}>
// // // //                                 <FontAwesomeIcon icon={category.icon} className="me-2" />
// // // //                                 {category.name}
// // // //                                 <Badge bg="light" text="dark" className="ms-2">
// // // //                                   {categoryKey === 'post-production' 
// // // //                                     ? (categoryServices['all'] || []).length
// // // //                                     : Object.values(categoryServices).flat().length
// // // //                                   } services
// // // //                                 </Badge>
// // // //                               </h6>
// // // //                             </div>

// // // //                             {/* Services Grid */}
// // // //                             <Row>
// // // //                               {categoryKey === 'post-production' ? (
// // // //                                 // Post-production services
// // // //                                 (categoryServices['all'] || []).map(service => {
// // // //                                   const displayInfo = getServiceDisplayInfo(service);
// // // //                                   const isSelected = formData.services[service.id];
                                  
// // // //                                   return (
// // // //                                     <Col md={6} xl={4} key={service.id} className="mb-3">
// // // //                                       <Card className={`service-card h-100 ${isSelected ? 'selected' : ''}`}>
// // // //                                         <Card.Body className="p-3">
// // // //                                           <div className="d-flex justify-content-between align-items-start mb-2">
// // // //                                             <div className="flex-grow-1">
// // // //                                               <h6 className="mb-1">{service.service_name}</h6>
// // // //                                               <small className="text-muted">₹{service.rate_per_day}/day</small>
// // // //                                             </div>
// // // //                                             <div className="d-flex align-items-center gap-1">
// // // //                                               <Button 
// // // //                                                 variant="outline-danger"
// // // //                                                 size="sm"
// // // //                                                 onClick={() => handleServiceQuantityChange(service.id, -1)}
// // // //                                                 disabled={!isSelected}
// // // //                                               >
// // // //                                                 <FontAwesomeIcon icon={faMinus} />
// // // //                                               </Button>
// // // //                                               <span className="px-2 py-1 bg-light rounded text-center" style={{ minWidth: '35px' }}>
// // // //                                                 {displayInfo.count}
// // // //                                               </span>
// // // //                                               <Button 
// // // //                                                 variant="outline-success"
// // // //                                                 size="sm"
// // // //                                                 onClick={() => handleServiceQuantityChange(service.id, 1)}
// // // //                                               >
// // // //                                                 <FontAwesomeIcon icon={faPlus} />
// // // //                                               </Button>
// // // //                                             </div>
// // // //                                           </div>
                                          
// // // //                                           {displayInfo.hasTable && (
// // // //                                             <Button
// // // //                                               variant="outline-primary"
// // // //                                               size="sm"
// // // //                                               className="w-100"
// // // //                                               onClick={() => openServiceModal(service)}
// // // //                                             >
// // // //                                               <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // //                                               Select Specific {service.service_name}
// // // //                                             </Button>
// // // //                                           )}
                                          
// // // //                                           {displayInfo.details.length > 0 && (
// // // //                                             <div className="mt-2">
// // // //                                               <small className="text-success">
// // // //                                                 <FontAwesomeIcon icon={faCheck} className="me-1" />
// // // //                                                 {displayInfo.details.length} selected
// // // //                                               </small>
// // // //                                             </div>
// // // //                                           )}
// // // //                                         </Card.Body>
// // // //                                       </Card>
// // // //                                     </Col>
// // // //                                   );
// // // //                                 })
// // // //                               ) : (
// // // //                                 // Other categories with subcategories
// // // //                                 Object.entries(categoryServices).map(([subcategoryKey, subcategoryServices]) => {
// // // //                                   return subcategoryServices.map(service => {
// // // //                                     const displayInfo = getServiceDisplayInfo(service);
// // // //                                     const isSelected = formData.services[service.id];
                                    
// // // //                                     return (
// // // //                                       <Col md={6} xl={4} key={service.id} className="mb-3">
// // // //                                         <Card className={`service-card h-100 ${isSelected ? 'selected' : ''}`}>
// // // //                                           <Card.Body className="p-3">
// // // //                                             <div className="d-flex justify-content-between align-items-start mb-2">
// // // //                                               <div className="flex-grow-1">
// // // //                                                 <h6 className="mb-1">{service.service_name}</h6>
// // // //                                                 <small className="text-muted">₹{service.rate_per_day}/day</small>
// // // //                                               </div>
// // // //                                               <div className="d-flex align-items-center gap-1">
// // // //                                                 <Button 
// // // //                                                   variant="outline-danger"
// // // //                                                   size="sm"
// // // //                                                   onClick={() => handleServiceQuantityChange(service.id, -1)}
// // // //                                                   disabled={!isSelected}
// // // //                                                 >
// // // //                                                   <FontAwesomeIcon icon={faMinus} />
// // // //                                                 </Button>
// // // //                                                 <span className="px-2 py-1 bg-light rounded text-center" style={{ minWidth: '35px' }}>
// // // //                                                   {displayInfo.count}
// // // //                                                 </span>
// // // //                                                 <Button 
// // // //                                                   variant="outline-success"
// // // //                                                   size="sm"
// // // //                                                   onClick={() => handleServiceQuantityChange(service.id, 1)}
// // // //                                                 >
// // // //                                                   <FontAwesomeIcon icon={faPlus} />
// // // //                                                 </Button>
// // // //                                               </div>
// // // //                                             </div>
                                            
// // // //                                             {displayInfo.hasTable && (
// // // //                                               <Button
// // // //                                                 variant="outline-primary"
// // // //                                                 size="sm"
// // // //                                                 className="w-100"
// // // //                                                 onClick={() => openServiceModal(service)}
// // // //                                               >
// // // //                                                 <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // //                                                 Select Specific {service.service_name}
// // // //                                               </Button>
// // // //                                             )}
                                            
// // // //                                             {displayInfo.details.length > 0 && (
// // // //                                               <div className="mt-2">
// // // //                                                 <small className="text-success">
// // // //                                                   <FontAwesomeIcon icon={faCheck} className="me-1" />
// // // //                                                   {displayInfo.details.length} selected
// // // //                                                 </small>
// // // //                                               </div>
// // // //                                             )}
// // // //                                           </Card.Body>
// // // //                                         </Card>
// // // //                                       </Col>
// // // //                                     );
// // // //                                   });
// // // //                                 })
// // // //                               )}
// // // //                             </Row>
// // // //                           </div>
// // // //                         );
// // // //                       })}
                      
// // // //                       {errors.services && (
// // // //                         <Alert variant="danger">
// // // //                           <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // // //                           {errors.services}
// // // //                         </Alert>
// // // //                       )}
// // // //                     </div>
// // // //                   )}

// // // //                   <hr className="my-4" />

// // // //                   {/* Timeline */}
// // // //                   <h5 className="mb-3">
// // // //                     <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
// // // //                     Project Timeline
// // // //                   </h5>
                  
// // // //                   <Row>
// // // //                     <Col md={4}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>Number of Days <span className="text-danger">*</span></Form.Label>
// // // //                         <InputGroup>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// // // //                           <Form.Control
// // // //                             type="number"
// // // //                             name="days"
// // // //                             value={formData.days}
// // // //                             onChange={handleChange}
// // // //                             min="1"
// // // //                             max="100"
// // // //                             required
// // // //                           />
// // // //                         </InputGroup>
// // // //                       </Form.Group>
// // // //                     </Col>
                    
// // // //                     <Col md={4}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>
// // // //                           Shoot Date <span className="text-danger">*</span>
// // // //                           <OverlayTrigger
// // // //                             placement="top"
// // // //                             overlay={
// // // //                               <Tooltip>
// // // //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// // // //                               </Tooltip>
// // // //                             }
// // // //                           >
// // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // //                           </OverlayTrigger>
// // // //                         </Form.Label>
// // // //                         <InputGroup hasValidation>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// // // //                           <Form.Control
// // // //                             type="date"
// // // //                             name="shoot_dates"
// // // //                             value={formData.shoot_dates}
// // // //                             onChange={handleChange}
// // // //                             isInvalid={!!errors.shoot_dates}
// // // //                             min={minDate}
// // // //                             max={maxDate}
// // // //                             required
// // // //                           />
// // // //                           <Form.Control.Feedback type="invalid">
// // // //                             {errors.shoot_dates}
// // // //                           </Form.Control.Feedback>
// // // //                         </InputGroup>
// // // //                       </Form.Group>
// // // //                     </Col>
                    
// // // //                     <Col md={4}>
// // // //                       <Form.Group className="mb-3">
// // // //                         <Form.Label>
// // // //                           Delivery Date <span className="text-danger">*</span>
// // // //                           <OverlayTrigger
// // // //                             placement="top"
// // // //                             overlay={
// // // //                               <Tooltip>
// // // //                                 Must be on or after shoot date, within fiscal year
// // // //                               </Tooltip>
// // // //                             }
// // // //                           >
// // // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // // //                           </OverlayTrigger>
// // // //                         </Form.Label>
// // // //                         <InputGroup hasValidation>
// // // //                           <InputGroup.Text><FontAwesomeIcon icon={faTruck} /></InputGroup.Text>
// // // //                           <Form.Control
// // // //                             type="date"
// // // //                             name="delivery_date"
// // // //                             value={formData.delivery_date}
// // // //                             onChange={handleChange}
// // // //                             isInvalid={!!errors.delivery_date}
// // // //                             min={deliveryMinDate}
// // // //                             max={maxDate}
// // // //                             required
// // // //                           />
// // // //                           <Form.Control.Feedback type="invalid">
// // // //                             {errors.delivery_date}
// // // //                           </Form.Control.Feedback>
// // // //                         </InputGroup>
// // // //                       </Form.Group>
// // // //                     </Col>
// // // //                   </Row>

// // // //                   {/* Summary Section */}
// // // //                   {Object.keys(formData.services).length > 0 && (
// // // //                     <>
// // // //                       <hr className="my-4" />
// // // //                       <div className="summary-section p-3 bg-light rounded">
// // // //                         <h6 className="mb-3">Selected Services Summary:</h6>
// // // //                         <Row>
// // // //                           {Object.entries(formData.services).map(([serviceId, serviceData]) => {
// // // //                             const service = services.find(s => s.id === serviceId);
// // // //                             if (!service || serviceData.quantity === 0) return null;
                            
// // // //                             return (
// // // //                               <Col md={6} key={serviceId} className="mb-2">
// // // //                                 <div className="d-flex justify-content-between align-items-center">
// // // //                                   <div>
// // // //                                     <strong>{service.service_name}</strong>
// // // //                                     {serviceData.selectedItems && serviceData.selectedItems.length > 0 ? (
// // // //                                       <div>
// // // //                                         {serviceData.selectedItems.map((item, index) => (
// // // //                                           <small key={index} className="d-block text-muted">
// // // //                                             • {item.data_json?.name || `Item ${index + 1}`} - ₹{item.data_json?.rate || service.rate_per_day}/day
// // // //                                           </small>
// // // //                                         ))}
// // // //                                       </div>
// // // //                                     ) : (
// // // //                                       <small className="d-block text-muted">
// // // //                                         Quantity: {serviceData.quantity} × ₹{service.rate_per_day}/day
// // // //                                       </small>
// // // //                                     )}
// // // //                                   </div>
// // // //                                   <div className="text-end">
// // // //                                     <Badge bg="success">
// // // //                                       ₹{(serviceData.selectedItems && serviceData.selectedItems.length > 0
// // // //                                         ? serviceData.selectedItems.reduce((sum, item) => sum + (item.data_json?.rate || service.rate_per_day), 0)
// // // //                                         : service.rate_per_day * serviceData.quantity
// // // //                                       ) * formData.days}
// // // //                                     </Badge>
// // // //                                   </div>
// // // //                                 </div>
// // // //                               </Col>
// // // //                             );
// // // //                           })}
// // // //                         </Row>
// // // //                         <hr />
// // // //                         <div className="d-flex justify-content-between align-items-center">
// // // //                           <h5 className="mb-0">Total Amount:</h5>
// // // //                           <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
// // // //                         </div>
// // // //                       </div>
// // // //                     </>
// // // //                   )}

// // // //                   <div className="d-grid mt-4">
// // // //                     <Button 
// // // //                       variant="success" 
// // // //                       type="submit" 
// // // //                       size="lg"
// // // //                       disabled={formSubmitting || isLoading}
// // // //                     >
// // // //                       {formSubmitting ? (
// // // //                         <>
// // // //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // //                           Generating Proposal...
// // // //                         </>
// // // //                       ) : (
// // // //                         <>
// // // //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// // // //                           Generate Proposal - ₹{total.toLocaleString()}
// // // //                         </>
// // // //                       )}
// // // //                     </Button>
// // // //                   </div>
// // // //                 </Form>
// // // //               </Card.Body>
// // // //             </Card>
// // // //           </Col>
// // // //         </Row>
// // // //       </Container>

// // // //       {/* Service Selection Modal */}
// // // //       <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)} size="lg">
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>
// // // //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // //             Select {selectedService?.service_name}
// // // //           </Modal.Title>
// // // //         </Modal.Header>
// // // //         <Modal.Body>
// // // //           {selectedServiceItems.length > 0 ? (
// // // //             <div>
// // // //               <p className="text-muted">Choose specific {selectedService?.service_name.toLowerCase()}s for your project:</p>
// // // //               <div className="table-responsive">
// // // //                 <Table hover>
// // // //                   <thead>
// // // //                     <tr>
// // // //                       <th width="50">Select</th>
// // // //                       <th>Name</th>
// // // //                       <th>Rate per Day</th>
// // // //                       <th>Details</th>
// // // //                     </tr>
// // // //                   </thead>
// // // //                   <tbody>
// // // //                     {selectedServiceItems.map(item => {
// // // //                       const isSelected = formData.services[selectedService?.id]?.selectedItems?.some(selected => selected.id === item.id);
// // // //                       const rate = item.data_json?.rate || selectedService?.rate_per_day || 0;
                      
// // // //                       return (
// // // //                         <tr key={item.id} className={isSelected ? 'table-success' : ''}>
// // // //                           <td>
// // // //                             <Form.Check
// // // //                               type="checkbox"
// // // //                               checked={isSelected}
// // // //                               onChange={(e) => handleItemSelection(item, e.target.checked)}
// // // //                             />
// // // //                           </td>
// // // //                           <td>
// // // //                             <strong>{item.data_json?.name || `${selectedService?.service_name} ${item.id}`}</strong>
// // // //                             {item.data_json?.experience && (
// // // //                               <div className="small text-muted">
// // // //                                 Experience: {item.data_json.experience} years
// // // //                               </div>
// // // //                             )}
// // // //                           </td>
// // // //                           <td>
// // // //                             <Badge bg="info">₹{rate.toLocaleString()}</Badge>
// // // //                           </td>
// // // //                           <td>
// // // //                             {item.data_json?.specialization && (
// // // //                               <small className="text-muted">{item.data_json.specialization}</small>
// // // //                             )}
// // // //                             {item.data_json?.rating && (
// // // //                               <div>
// // // //                                 {[...Array(5)].map((_, i) => (
// // // //                                   <FontAwesomeIcon 
// // // //                                     key={i}
// // // //                                     icon={faStar} 
// // // //                                     className={i < item.data_json.rating ? 'text-warning' : 'text-light'}
// // // //                                   />
// // // //                                 ))}
// // // //                               </div>
// // // //                             )}
// // // //                           </td>
// // // //                         </tr>
// // // //                       );
// // // //                     })}
// // // //                   </tbody>
// // // //                 </Table>
// // // //               </div>
// // // //             </div>
// // // //           ) : (
// // // //             <div className="text-center py-4">
// // // //               <FontAwesomeIcon icon={faInfoCircle} size="3x" className="text-muted mb-3" />
// // // //               <h6>No specific {selectedService?.service_name.toLowerCase()}s available</h6>
// // // //               <p className="text-muted">
// // // //                 This service doesn't have individual options to choose from. 
// // // //                 You can still add it with the quantity selector.
// // // //               </p>
// // // //             </div>
// // // //           )}
// // // //         </Modal.Body>
// // // //         <Modal.Footer>
// // // //           <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
// // // //             Close
// // // //           </Button>
// // // //           {selectedServiceItems.length > 0 && (
// // // //             <Button 
// // // //               variant="primary" 
// // // //               onClick={() => setShowServiceModal(false)}
// // // //             >
// // // //               <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // //               Confirm Selection
// // // //             </Button>
// // // //           )}
// // // //         </Modal.Footer>
// // // //       </Modal>

// // // //       {/* Custom Styles */}
// // // //       <style jsx>{`
// // // //         .header {
// // // //           border-bottom: 1px solid #e9e9e9;
// // // //         }
        
// // // //         .text-purple {
// // // //           color: #8e24aa;
// // // //           font-size: 1.75rem;
// // // //           font-weight: 600;
// // // //         }
        
// // // //         .service-selection-container {
// // // //           max-height: none;
// // // //         }
        
// // // //         .category-header {
// // // //           border-radius: 8px;
// // // //           transition: all 0.2s ease;
// // // //         }
        
// // // //         .service-card {
// // // //           transition: all 0.2s ease;
// // // //           border: 2px solid transparent;
// // // //           cursor: pointer;
// // // //           height: 100%;
// // // //         }
        
// // // //         .service-card:hover {
// // // //           border-color: #0d6efd;
// // // //           box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
// // // //           transform: translateY(-2px);
// // // //         }
        
// // // //         .service-card.selected {
// // // //           border-color: #28a745;
// // // //           background-color: rgba(40, 167, 69, 0.05);
// // // //         }
        
// // // //         .summary-section {
// // // //           border: 1px solid #dee2e6;
// // // //         }
        
// // // //         .proposal-form-component .card {
// // // //           transition: box-shadow 0.3s ease;
// // // //         }

// // // //         @media (max-width: 768px) {
// // // //           .text-purple {
// // // //             font-size: 1.25rem;
// // // //           }
          
// // // //           .service-card {
// // // //             margin-bottom: 1rem;
// // // //           }
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ProposalForm;
// // // import React, { useState, useEffect } from 'react';
// // // import { 
// // //   Form, 
// // //   Button, 
// // //   Card, 
// // //   Alert, 
// // //   Container, 
// // //   Row, 
// // //   Col, 
// // //   InputGroup, 
// // //   Badge,
// // //   Spinner,
// // //   OverlayTrigger,
// // //   Tooltip,
// // //   ListGroup,
// // //   Modal,
// // //   Table
// // // } from 'react-bootstrap';
// // // import { 
// // //   fetchServices, 
// // //   fetchCategories,
// // //   fetchTables,
// // //   fetchTableData
// // // } from '../../services/api';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { 
// // //   faCheck,
// // //   faTimes,
// // //   faInfoCircle,
// // //   faCalendarAlt,
// // //   faBuilding,
// // //   faEnvelope,
// // //   faTag,
// // //   faMapMarkerAlt,
// // //   faMoneyBillWave,
// // //   faFilePdf,
// // //   faUser,
// // //   faClipboardList,
// // //   faExclamationTriangle,
// // //   faTruck,
// // //   faEdit,
// // //   faCamera,
// // //   faVideo,
// // //   faChevronDown,
// // //   faChevronRight,
// // //   faPlus,
// // //   faMinus,
// // //   faLayerGroup,
// // //   faUsers,
// // //   faStar,
// // //   faEye
// // // } from '@fortawesome/free-solid-svg-icons';
// // // import Logo from '../../assets/Logo.png';
// // // import { useUserAuth } from '../../contexts/UserAuthContext';

// // // // Service categories structure
// // // const SERVICE_CATEGORIES = {
// // //   'pre-production': {
// // //     name: 'Pre-Production',
// // //     icon: faEdit,
// // //     color: '#17a2b8'
// // //   },
// // //   'production': {
// // //     name: 'Production',
// // //     icon: faCamera,
// // //     color: '#28a745'
// // //   },
// // //   'post-production': {
// // //     name: 'Post Production',
// // //     icon: faVideo,
// // //     color: '#6f42c1'
// // //   }
// // // };

// // // function ProposalForm({ onSubmit, onAdminClick, onHomeClick, onDashboardClick }) {
// // //   const { user, logout } = useUserAuth();
  
// // //   // State management
// // //   const [services, setServices] = useState([]);
// // //   const [categories, setCategories] = useState([]);
// // //   const [dynamicTables, setDynamicTables] = useState([]);
// // //   const [tableData, setTableData] = useState({});
// // //   const [organizedServices, setOrganizedServices] = useState({});
// // //   const [formData, setFormData] = useState({
// // //     client_name: '',
// // //     your_email: '',
// // //     project_title: '',
// // //     category_id: '',
// // //     location: '',
// // //     services: {}, // serviceId: { quantity: 1, selectedItems: [] }
// // //     days: 1,
// // //     shoot_dates: '',
// // //     delivery_date: ''
// // //   });
// // //   const [errors, setErrors] = useState({});
// // //   const [total, setTotal] = useState(0);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [categoriesLoading, setCategoriesLoading] = useState(true);
// // //   const [serviceError, setServiceError] = useState('');
// // //   const [formSubmitting, setFormSubmitting] = useState(false);
// // //   const [selectedCategory, setSelectedCategory] = useState(null);
  
// // //   // Modal states
// // //   const [showServiceModal, setShowServiceModal] = useState(false);
// // //   const [selectedService, setSelectedService] = useState(null);
// // //   const [selectedServiceItems, setSelectedServiceItems] = useState([]);

// // //   // Load data on component mount
// // //   useEffect(() => {
// // //     loadServices();
// // //     loadCategories();
// // //     loadDynamicTables();
// // //   }, []);

// // //   // Load services from API
// // //   const loadServices = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       const response = await fetchServices();
// // //       const servicesWithStringIds = response.data.map(service => ({
// // //         ...service,
// // //         id: service.id.toString()
// // //       }));
// // //       setServices(servicesWithStringIds);
      
// // //       // Organize services by category
// // //       const organized = {};
// // //       servicesWithStringIds.forEach(service => {
// // //         const category = service.category || 'pre-production';
        
// // //         if (!organized[category]) {
// // //           organized[category] = {};
// // //         }
        
// // //         if (category === 'post-production') {
// // //           if (!organized[category]['all']) {
// // //             organized[category]['all'] = [];
// // //           }
// // //           organized[category]['all'].push(service);
// // //         } else {
// // //           const subcategory = service.subcategory || 'part-1';
// // //           if (!organized[category][subcategory]) {
// // //             organized[category][subcategory] = [];
// // //           }
// // //           organized[category][subcategory].push(service);
// // //         }
// // //       });
      
// // //       setOrganizedServices(organized);
// // //     } catch (error) {
// // //       console.error('Error loading services:', error);
// // //       setServiceError('Failed to load services. Please refresh the page or contact support.');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Load categories from API
// // //   const loadCategories = async () => {
// // //     try {
// // //       setCategoriesLoading(true);
// // //       const response = await fetchCategories();
// // //       setCategories(response.data || []);
// // //     } catch (error) {
// // //       console.error('Error loading categories:', error);
// // //       setCategories([
// // //         { id: 'fallback-1', name: 'Digital Bytes', description: 'Short digital content' },
// // //         { id: 'fallback-2', name: 'Piece to Camera', description: 'Direct camera presentations' },
// // //         { id: 'fallback-3', name: 'Digital Video', description: 'Full digital video production' },
// // //         { id: 'fallback-4', name: 'Behind the Scene', description: 'BTS content creation' }
// // //       ]);
// // //     } finally {
// // //       setCategoriesLoading(false);
// // //     }
// // //   };

// // //   // Load dynamic tables
// // //   const loadDynamicTables = async () => {
// // //     try {
// // //       const response = await fetchTables();
// // //       if (response.data?.success && Array.isArray(response.data.data)) {
// // //         console.log('Dynamic tables loaded:', response.data.data);
// // //         setDynamicTables(response.data.data);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error loading dynamic tables:', error);
// // //     }
// // //   };

// // //   // Load data for specific table
// // //   const loadTableData = async (tableName) => {
// // //     try {
// // //       const table = dynamicTables.find(t => 
// // //         t.table_name.toLowerCase() === tableName.toLowerCase()
// // //       );
// // //       if (table) {
// // //         const response = await fetchTableData(table.id);
// // //         const data = response.data?.data || [];
// // //         console.log(`Loaded ${tableName} data:`, data); // Debug log
// // //         setTableData(prev => ({
// // //           ...prev,
// // //           [tableName.toLowerCase()]: data
// // //         }));

// // //         return data;
// // //       }
// // //     } catch (error) {
// // //       console.error(`Error loading ${tableName} data:`, error);
// // //       return [];
// // //     }
// // //   };

// // //   // Calculate total
// // //   useEffect(() => {
// // //     calculateTotal();
// // //   }, [formData.services, formData.days, services, tableData]);

// // //   // Handle category selection and auto-select services
// // //   useEffect(() => {
// // //     if (formData.category_id && categories.length > 0) {
// // //       const category = categories.find(cat => cat.id.toString() === formData.category_id);
// // //       if (category && category.selectedServices) {
// // //         setSelectedCategory(category);
        
// // //         const autoSelectedServices = {};
// // //         category.selectedServices.forEach(serviceId => {
// // //           autoSelectedServices[serviceId.toString()] = {
// // //             quantity: 1,
// // //             selectedItems: []
// // //           };
// // //         });
        
// // //         setFormData(prev => ({
// // //           ...prev,
// // //           services: { ...prev.services, ...autoSelectedServices }
// // //         }));
// // //       }
// // //     }
// // //   }, [formData.category_id, categories]);

// // //   const calculateTotal = () => {
// // //     let calculatedTotal = 0;
    
// // //     Object.entries(formData.services).forEach(([serviceId, serviceData]) => {
// // //       if (serviceData.quantity > 0) {
// // //         if (serviceData.selectedItems && serviceData.selectedItems.length > 0) {
// // //           // Calculate based on selected items with individual rates
// // //           serviceData.selectedItems.forEach(item => {
// // //             const rate = item.rate || item.data_json?.rate || 0;
// // //             calculatedTotal += rate * formData.days;
// // //           });
// // //         } else {
// // //           // Use default service rate
// // //           const service = services.find(s => s.id === serviceId);
// // //           if (service) {
// // //             calculatedTotal += service.rate_per_day * serviceData.quantity * formData.days;
// // //           }
// // //         }
// // //       }
// // //     });
    
// // //     setTotal(calculatedTotal);
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
    
// // //     if (errors[name]) {
// // //       setErrors(prev => {
// // //         const newErrors = {...prev};
// // //         delete newErrors[name];
// // //         return newErrors;
// // //       });
// // //     }

// // //     setFormData(prev => ({
// // //       ...prev,
// // //       [name]: value
// // //     }));
// // //   };

// // //   // Handle service quantity changes
// // //   const handleServiceQuantityChange = (serviceId, change) => {
// // //     setFormData(prev => {
// // //       const currentService = prev.services[serviceId] || { quantity: 0, selectedItems: [] };
// // //       const newQuantity = Math.max(0, currentService.quantity + change);
      
// // //       const newServices = { ...prev.services };
// // //       if (newQuantity === 0) {
// // //         delete newServices[serviceId];
// // //       } else {
// // //         newServices[serviceId] = {
// // //           ...currentService,
// // //           quantity: newQuantity
// // //         };
// // //       }
      
// // //       return {
// // //         ...prev,
// // //         services: newServices
// // //       };
// // //     });
// // //   };

// // //   // Enhanced function to map services to dynamic tables
// // //   const getServiceTableMapping = (serviceName) => {
// // //     const name = serviceName.toLowerCase();
// // //     const mappings = {
// // //       'director': 'Director',
// // //       'dop': 'DOP', 
// // //       'cinematographer': 'Cinematographer',
// // //       'editor': 'Editor',
// // //       'script writer': 'Script Writer',
// // //       'focus puller': 'Focus Puller',
// // //       'cc': 'CC',
// // //       'food stylist': 'Food Stylist',
// // //       'vo artist': 'VO Artist',
// // //       'art director': 'Art Director/Production Designer',
// // //       'line producer': 'Line Producer',
// // //       'assistant director': 'Assistant Directors'
// // //     };
    
// // //     for (const [keyword, tableName] of Object.entries(mappings)) {
// // //       if (name.includes(keyword)) {
// // //         return tableName;
// // //       }
// // //     }
// // //     return null;
// // //   };

// // //   // Enhanced function to load table data with better error handling
// // //   const loadTableDataEnhanced = async (tableName) => {
// // //     try {
// // //       const table = dynamicTables.find(t => 
// // //         t.table_name.toLowerCase() === tableName.toLowerCase()
// // //       );
// // //       if (table) {
// // //         const response = await fetchTableData(table.id);
// // //         const data = response.data?.data || [];
        
// // //         console.log(`Raw ${tableName} data:`, data); // Debug log
        
// // //         // Transform data to ensure we have rate information
// // //         const transformedData = data.map(item => {
// // //           // Parse JSON if it's a string
// // //           let jsonData = item.data_json;
// // //           if (typeof jsonData === 'string') {
// // //             try {
// // //               jsonData = JSON.parse(jsonData);
// // //             } catch (e) {
// // //               console.error('Error parsing JSON:', e);
// // //               jsonData = {};
// // //             }
// // //           }
          
// // //           console.log(`Transformed item:`, { id: item.id, jsonData }); // Debug log
          
// // //           return {
// // //             ...item,
// // //             data_json: jsonData,
// // //             displayName: jsonData?.Name || jsonData?.name || `${tableName} ${item.id}`,
// // //             rate: parseFloat(jsonData?.Price || jsonData?.price || jsonData?.rate || 0),
// // //             location: jsonData?.Location || jsonData?.location || '',
// // //             experience: jsonData?.['Experience in Years'] || jsonData?.experience || '',
// // //             rating: parseInt(jsonData?.['Remarks/Rating'] || jsonData?.rating || 0),
// // //             contactNumber: jsonData?.['Contact Number'] || jsonData?.contact || '',
// // //             profileLink: jsonData?.['Profile/Work Links'] || jsonData?.profile || ''
// // //           };
// // //         });
        
// // //         console.log(`Final transformed ${tableName} data:`, transformedData); // Debug log
        
// // //         setTableData(prev => ({
// // //           ...prev,
// // //           [tableName.toLowerCase()]: transformedData
// // //         }));
// // //         return transformedData;
// // //       }
// // //     } catch (error) {
// // //       console.error(`Error loading ${tableName} data:`, error);
// // //       return [];
// // //     }
// // //   };

// // //   // Open service selection modal with enhanced logic
// // //   const openServiceModal = async (service) => {
// // //     setSelectedService(service);
// // //     setSelectedServiceItems([]);
    
// // //     const tableMapping = getServiceTableMapping(service.service_name);
// // //     console.log(`Opening modal for service: ${service.service_name}, table mapping: ${tableMapping}`); // Debug log
    
// // //     if (tableMapping) {
// // //       const data = await loadTableDataEnhanced(tableMapping);
// // //       setSelectedServiceItems(data);
// // //     }
    
// // //     setShowServiceModal(true);
// // //   };

// // //   // Enhanced service display with table integration
// // //   const renderServiceItem = (service, index) => {
// // //     const serviceData = formData.services[service.id];
// // //     const isSelected = serviceData && serviceData.quantity > 0;
// // //     const tableMapping = getServiceTableMapping(service.service_name);
// // //     const hasTableData = tableMapping && tableData[tableMapping.toLowerCase()]?.length > 0;
    
// // //     return (
// // //       <tr key={service.id} className={isSelected ? 'table-success' : ''}>
// // //         <td>
// // //           <div className="d-flex align-items-center">
// // //             <strong>{service.service_name}</strong>
// // //             {hasTableData && (
// // //               <Badge bg="info" className="ms-2 small">
// // //                 <FontAwesomeIcon icon={faUsers} className="me-1" />
// // //                 {tableData[tableMapping.toLowerCase()].length} available
// // //               </Badge>
// // //             )}
// // //           </div>
// // //           {serviceData?.selectedItems?.length > 0 && (
// // //             <div className="mt-1">
// // //               {serviceData.selectedItems.map((item, idx) => (
// // //                 <small key={idx} className="d-block text-success">
// // //                   • {item.displayName} - ₹{item.rate.toLocaleString()}/day
// // //                 </small>
// // //               ))}
// // //             </div>
// // //           )}
// // //         </td>
// // //         <td>
// // //           {hasTableData ? (
// // //             <div>
// // //               <div className="small text-muted">Individual rates available</div>
// // //               <Button
// // //                 variant="outline-primary"
// // //                 size="sm"
// // //                 onClick={() => openServiceModal(service)}
// // //                 className="mt-1"
// // //               >
// // //                 <FontAwesomeIcon icon={faUsers} className="me-1" />
// // //                 Select {tableMapping}
// // //               </Button>
// // //             </div>
// // //           ) : (
// // //             <Badge bg="secondary">₹{service.rate_per_day}/day</Badge>
// // //           )}
// // //         </td>
// // //         <td>
// // //           <div className="d-flex align-items-center gap-2">
// // //             <Button 
// // //               variant="outline-danger"
// // //               size="sm"
// // //               onClick={() => handleServiceQuantityChange(service.id, -1)}
// // //               disabled={!isSelected}
// // //             >
// // //               <FontAwesomeIcon icon={faMinus} />
// // //             </Button>
// // //             <span className="px-3 py-1 bg-light rounded text-center fw-bold" style={{ minWidth: '45px' }}>
// // //               {serviceData?.quantity || 0}
// // //             </span>
// // //             <Button 
// // //               variant="outline-success"
// // //               size="sm"
// // //               onClick={() => handleServiceQuantityChange(service.id, 1)}
// // //             >
// // //               <FontAwesomeIcon icon={faPlus} />
// // //             </Button>
// // //           </div>
// // //         </td>
// // //         <td>
// // //           {isSelected && (
// // //             <Badge bg="success" className="fw-bold">
// // //               ₹{(serviceData.selectedItems?.length > 0
// // //                 ? serviceData.selectedItems.reduce((sum, item) => sum + item.rate, 0)
// // //                 : service.rate_per_day * serviceData.quantity
// // //               ) * formData.days}
// // //             </Badge>
// // //           )}
// // //         </td>
// // //       </tr>
// // //     );
// // //   };

// // //   // Handle item selection in modal
// // //   const handleItemSelection = (item, isSelected) => {
// // //     const serviceId = selectedService.id;
// // //     setFormData(prev => {
// // //       const currentService = prev.services[serviceId] || { quantity: 1, selectedItems: [] };
// // //       let newSelectedItems;
      
// // //       if (isSelected) {
// // //         // Add the item with enhanced data
// // //         const enhancedItem = {
// // //           ...item,
// // //           displayName: item.displayName,
// // //           rate: item.rate > 0 ? item.rate : selectedService?.rate_per_day || 0
// // //         };
// // //         newSelectedItems = [...currentService.selectedItems, enhancedItem];
// // //       } else {
// // //         newSelectedItems = currentService.selectedItems.filter(selected => selected.id !== item.id);
// // //       }
      
// // //       return {
// // //         ...prev,
// // //         services: {
// // //           ...prev.services,
// // //           [serviceId]: {
// // //             ...currentService,
// // //             selectedItems: newSelectedItems,
// // //             quantity: Math.max(newSelectedItems.length, 1) // At least 1 if items selected
// // //           }
// // //         }
// // //       };
// // //     });
// // //   };

// // //   // Get service display name with selected items count
// // //   const getServiceDisplayInfo = (service) => {
// // //     const serviceData = formData.services[service.id];
// // //     if (!serviceData) return { name: service.service_name, count: 0, details: [] };
    
// // //     let details = [];
// // //     if (serviceData.selectedItems && serviceData.selectedItems.length > 0) {
// // //       details = serviceData.selectedItems.map(item => ({
// // //         name: item.data_json?.name || item.data_json?.title || `${service.service_name} ${item.id}`,
// // //         rate: item.data_json?.rate || service.rate_per_day
// // //       }));
// // //     }
    
// // //     return {
// // //       name: service.service_name,
// // //       count: serviceData.quantity || 0,
// // //       details: details,
// // //       hasTable: selectedServiceItems.length > 0
// // //     };
// // //   };

// // //   // Validation and submit functions (keeping the same as before)
// // //   const validateForm = () => {
// // //     const newErrors = {};
    
// // //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// // //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// // //     }
    
// // //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// // //     if (!emailPattern.test(formData.your_email)) {
// // //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// // //     }
    
// // //     if (!formData.project_title || formData.project_title.trim() === '') {
// // //       newErrors.project_title = 'Project title is required';
// // //     } else if (formData.project_title.length > 100) {
// // //       newErrors.project_title = 'Project title must be 1–100 characters long';
// // //     }
    
// // //     if (!formData.category_id) {
// // //       newErrors.category_id = 'Please select a category';
// // //     }
    
// // //     if (!formData.location) {
// // //       newErrors.location = 'Please select a location';
// // //     }
    
// // //     if (!formData.shoot_dates) {
// // //       newErrors.shoot_dates = 'Shoot date is required';
// // //     }
    
// // //     if (!formData.delivery_date) {
// // //       newErrors.delivery_date = 'Delivery date is required';
// // //     }
    
// // //     if (Object.keys(formData.services).length === 0) {
// // //       newErrors.services = 'Please select at least one service';
// // //     }
    
// // //     setErrors(newErrors);
// // //     return Object.keys(newErrors).length === 0;
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
    
// // //     if (validateForm()) {
// // //       setFormSubmitting(true);
// // //       try {
// // //         const submissionData = {
// // //           ...formData,
// // //           selectedCategory: selectedCategory,
// // //           serviceDetails: Object.entries(formData.services).map(([serviceId, serviceData]) => ({
// // //             serviceId,
// // //             ...serviceData,
// // //             service: services.find(s => s.id === serviceId)
// // //           }))
// // //         };
        
// // //         await onSubmit(submissionData);
// // //       } catch (error) {
// // //         console.error('Form submission error:', error);
// // //         setErrors({
// // //           submission: 'An error occurred while generating the proposal. Please try again.'
// // //         });
// // //       } finally {
// // //         setFormSubmitting(false);
// // //       }
// // //     }
// // //   };

// // //   // Calculate fiscal year dates
// // //   const today = new Date();
// // //   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // //   const fyStart = new Date(fyStartYear, 3, 1);
// // //   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // //   const effectiveMinDate = today > fyStart ? today : fyStart;
// // //   const minDate = effectiveMinDate.toISOString().split('T')[0];
// // //   const maxDate = fyEnd.toISOString().split('T')[0];

// // //   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
// // //     ? formData.shoot_dates 
// // //     : minDate;

// // //   const handleLogout = () => {
// // //     logout();
// // //   };

// // //   return (
// // //     <div className="proposal-form-component">
// // //       {/* Header */}
// // //       <div className="header bg-white border-bottom py-2">
// // //         <Container fluid className="px-4">
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <div className="d-flex align-items-center">
// // //               <img 
// // //                 src={Logo} 
// // //                 alt="Company Logo" 
// // //                 style={{ height: '55px', width: 'auto' }} 
// // //               />
// // //             </div>
// // //             <div className="text-center flex-grow-1">
// // //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// // //             </div>

// // //             <div className="d-flex gap-2">
// // //               <Button variant="outline-primary" onClick={onDashboardClick} size="sm">
// // //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // //                 Dashboard
// // //               </Button>
// // //               <Button variant="outline-primary" onClick={onHomeClick} size="sm">
// // //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// // //                 Home
// // //               </Button>
// // //               <Button variant="outline-danger" onClick={handleLogout} size="sm">
// // //                 <FontAwesomeIcon icon={faUser} className="me-2" />
// // //                 Logout
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </Container>
// // //       </div>
      
// // //       <Container fluid className="py-4">
// // //         <Row className="justify-content-center">
// // //           <Col xl={10}>
// // //             <Card className="shadow-sm border-0 mb-4">
// // //               <Card.Body className="p-4">
// // //                 <div className="d-flex justify-content-between align-items-center mb-4">
// // //                   <div>
// // //                     <h3 className="mb-1">Create Studio Proposal</h3>
// // //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// // //                   </div>
// // //                   {total > 0 && (
// // //                     <div className="text-end">
// // //                       <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
// // //                       <small className="text-muted">Total for {formData.days} day{formData.days !== 1 ? 's' : ''}</small>
// // //                     </div>
// // //                   )}
// // //                 </div>

// // //                 {/* Error/Success Alerts */}
// // //                 {errors.submission && (
// // //                   <Alert variant="danger" dismissible onClose={() => setErrors(prev => {
// // //                     const newErrors = {...prev};
// // //                     delete newErrors.submission;
// // //                     return newErrors;
// // //                   })}>
// // //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // //                     {errors.submission}
// // //                   </Alert>
// // //                 )}

// // //                 {serviceError && (
// // //                   <Alert variant="danger" dismissible onClose={() => setServiceError('')}>
// // //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// // //                     {serviceError}
// // //                   </Alert>
// // //                 )}

// // //                 <Form onSubmit={handleSubmit}>
// // //                   {/* Client Information */}
// // //                   <h5 className="mb-3">
// // //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// // //                     Client Information
// // //                   </h5>
                  
// // //                   <Row>
// // //                     <Col md={6}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>Brand Name <span className="text-danger">*</span></Form.Label>
// // //                         <InputGroup hasValidation>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
// // //                           <Form.Control
// // //                             type="text"
// // //                             name="client_name"
// // //                             value={formData.client_name}
// // //                             onChange={handleChange}
// // //                             isInvalid={!!errors.client_name}
// // //                             placeholder="e.g. Zee TV, Colors"
// // //                             required
// // //                           />
// // //                           <Form.Control.Feedback type="invalid">
// // //                             {errors.client_name}
// // //                           </Form.Control.Feedback>
// // //                         </InputGroup>
// // //                       </Form.Group>
// // //                     </Col>
                    
// // //                     <Col md={6}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>Your Email <span className="text-danger">*</span></Form.Label>
// // //                         <InputGroup hasValidation>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
// // //                           <Form.Control
// // //                             type="email"
// // //                             name="your_email"
// // //                             value={formData.your_email}
// // //                             onChange={handleChange}
// // //                             isInvalid={!!errors.your_email}
// // //                             placeholder="e.g. user@tsbi.in"
// // //                             required
// // //                           />
// // //                           <Form.Control.Feedback type="invalid">
// // //                             {errors.your_email}
// // //                           </Form.Control.Feedback>
// // //                         </InputGroup>
// // //                         <Form.Text className="text-muted">
// // //                           Only @tsbi.in email addresses are allowed
// // //                         </Form.Text>
// // //                       </Form.Group>
// // //                     </Col>
// // //                   </Row>

// // //                   <hr className="my-4" />
                  
// // //                   {/* Project Details */}
// // //                   <h5 className="mb-3">
// // //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// // //                     Project Details
// // //                   </h5>
                  
// // //                   <Form.Group className="mb-3">
// // //                     <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
// // //                     <InputGroup hasValidation>
// // //                       <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// // //                       <Form.Control
// // //                         type="text"
// // //                         name="project_title"
// // //                         value={formData.project_title}
// // //                         onChange={handleChange}
// // //                         isInvalid={!!errors.project_title}
// // //                         placeholder="e.g. Product Launch Promo"
// // //                         required
// // //                       />
// // //                       <Form.Control.Feedback type="invalid">
// // //                         {errors.project_title}
// // //                       </Form.Control.Feedback>
// // //                     </InputGroup>
// // //                   </Form.Group>

// // //                   <Row>
// // //                     <Col md={6}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>
// // //                           Category Package <span className="text-danger">*</span>
// // //                           {selectedCategory && (
// // //                             <Badge bg="success" className="ms-2">
// // //                               <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
// // //                               {selectedCategory.services?.length || 0} services auto-selected
// // //                             </Badge>
// // //                           )}
// // //                         </Form.Label>
// // //                         <InputGroup hasValidation>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// // //                           <Form.Select 
// // //                             name="category_id"
// // //                             value={formData.category_id}
// // //                             onChange={handleChange}
// // //                             isInvalid={!!errors.category_id}
// // //                             disabled={categoriesLoading}
// // //                             required
// // //                           >
// // //                             <option value="" disabled>
// // //                               {categoriesLoading ? 'Loading categories...' : 'Select a category package'}
// // //                             </option>
// // //                             {categories.map(category => (
// // //                               <option key={category.id} value={category.id}>
// // //                                 {category.name}
// // //                                 {category.description && ` - ${category.description}`}
// // //                               </option>
// // //                             ))}
// // //                           </Form.Select>
// // //                           <Form.Control.Feedback type="invalid">
// // //                             {errors.category_id}
// // //                           </Form.Control.Feedback>
// // //                         </InputGroup>
// // //                         {selectedCategory && (
// // //                           <Form.Text className="text-success">
// // //                             <FontAwesomeIcon icon={faCheck} className="me-1" />
// // //                             Services from "{selectedCategory.name}" have been automatically added
// // //                           </Form.Text>
// // //                         )}
// // //                       </Form.Group>
// // //                     </Col>
                    
// // //                     <Col md={6}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>Location <span className="text-danger">*</span></Form.Label>
// // //                         <InputGroup hasValidation>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
// // //                           <Form.Select 
// // //                             name="location"
// // //                             value={formData.location}
// // //                             onChange={handleChange}
// // //                             isInvalid={!!errors.location}
// // //                             required
// // //                           >
// // //                             <option value="" disabled>Select a location</option>
// // //                             <option value="Mumbai">Mumbai</option>
// // //                             <option value="Outside Mumbai">Outside Mumbai</option>
// // //                           </Form.Select>
// // //                           <Form.Control.Feedback type="invalid">
// // //                             {errors.location}
// // //                           </Form.Control.Feedback>
// // //                         </InputGroup>
// // //                       </Form.Group>
// // //                     </Col>
// // //                   </Row>

// // //                   <hr className="my-4" />
                  
// // //                   {/* Service Selection */}
// // //                   <h5 className="mb-3">
// // //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// // //                     Service Selection & Quantities
// // //                     <Badge bg="secondary" className="ms-2">
// // //                       {Object.keys(formData.services).length} services selected
// // //                     </Badge>
// // //                   </h5>
                  
// // //                   {isLoading ? (
// // //                     <div className="text-center py-4">
// // //                       <Spinner animation="border" variant="primary" />
// // //                       <p className="mt-2">Loading available services...</p>
// // //                     </div>
// // //                   ) : (
// // //                     <div className="service-selection-container">
// // //                       {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => {
// // //                         const categoryServices = organizedServices[categoryKey];
// // //                         if (!categoryServices) return null;

// // //                         return (
// // //                           <div key={categoryKey} className="mb-4">
// // //                             {/* Category Header */}
// // //                             <div className="category-header p-3 mb-3 rounded" style={{ backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}` }}>
// // //                               <h6 className="mb-0" style={{ color: category.color }}>
// // //                                 <FontAwesomeIcon icon={category.icon} className="me-2" />
// // //                                 {category.name}
// // //                                 <Badge bg="light" text="dark" className="ms-2">
// // //                                   {categoryKey === 'post-production' 
// // //                                     ? (categoryServices['all'] || []).length
// // //                                     : Object.values(categoryServices).flat().length
// // //                                   } services
// // //                                 </Badge>
// // //                               </h6>
// // //                             </div>

// // //                             {/* Services Table */}
// // //                             <div className="table-responsive">
// // //                               <Table hover className="mb-0">
// // //                                 <thead className="table-light">
// // //                                   <tr>
// // //                                     <th width="35%">Service</th>
// // //                                     <th width="25%">Rate / Options</th>
// // //                                     <th width="20%" className="text-center">Quantity</th>
// // //                                     <th width="20%" className="text-center">Total</th>
// // //                                   </tr>
// // //                                 </thead>
// // //                                 <tbody>
// // //                                   {categoryKey === 'post-production' ? (
// // //                                     // Post-production services
// // //                                     (categoryServices['all'] || []).map(renderServiceItem)
// // //                                   ) : (
// // //                                     // Other categories with subcategories
// // //                                     Object.entries(categoryServices).map(([subcategoryKey, subcategoryServices]) => 
// // //                                       subcategoryServices.map(renderServiceItem)
// // //                                     )
// // //                                   )}
// // //                                 </tbody>
// // //                               </Table>
// // //                             </div>
// // //                           </div>
// // //                         );
// // //                       })}
                      
// // //                       {errors.services && (
// // //                         <Alert variant="danger">
// // //                           <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // //                           {errors.services}
// // //                         </Alert>
// // //                       )}
// // //                     </div>
// // //                   )}

// // //                   <hr className="my-4" />

// // //                   {/* Timeline */}
// // //                   <h5 className="mb-3">
// // //                     <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
// // //                     Project Timeline
// // //                   </h5>
                  
// // //                   <Row>
// // //                     <Col md={4}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>Number of Days <span className="text-danger">*</span></Form.Label>
// // //                         <InputGroup>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// // //                           <Form.Control
// // //                             type="number"
// // //                             name="days"
// // //                             value={formData.days}
// // //                             onChange={handleChange}
// // //                             min="1"
// // //                             max="100"
// // //                             required
// // //                           />
// // //                         </InputGroup>
// // //                       </Form.Group>
// // //                     </Col>
                    
// // //                     <Col md={4}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>
// // //                           Shoot Date <span className="text-danger">*</span>
// // //                           <OverlayTrigger
// // //                             placement="top"
// // //                             overlay={
// // //                               <Tooltip>
// // //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// // //                               </Tooltip>
// // //                             }
// // //                           >
// // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // //                           </OverlayTrigger>
// // //                         </Form.Label>
// // //                         <InputGroup hasValidation>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// // //                           <Form.Control
// // //                             type="date"
// // //                             name="shoot_dates"
// // //                             value={formData.shoot_dates}
// // //                             onChange={handleChange}
// // //                             isInvalid={!!errors.shoot_dates}
// // //                             min={minDate}
// // //                             max={maxDate}
// // //                             required
// // //                           />
// // //                           <Form.Control.Feedback type="invalid">
// // //                             {errors.shoot_dates}
// // //                           </Form.Control.Feedback>
// // //                         </InputGroup>
// // //                       </Form.Group>
// // //                     </Col>
                    
// // //                     <Col md={4}>
// // //                       <Form.Group className="mb-3">
// // //                         <Form.Label>
// // //                           Delivery Date <span className="text-danger">*</span>
// // //                           <OverlayTrigger
// // //                             placement="top"
// // //                             overlay={
// // //                               <Tooltip>
// // //                                 Must be on or after shoot date, within fiscal year
// // //                               </Tooltip>
// // //                             }
// // //                           >
// // //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// // //                           </OverlayTrigger>
// // //                         </Form.Label>
// // //                         <InputGroup hasValidation>
// // //                           <InputGroup.Text><FontAwesomeIcon icon={faTruck} /></InputGroup.Text>
// // //                           <Form.Control
// // //                             type="date"
// // //                             name="delivery_date"
// // //                             value={formData.delivery_date}
// // //                             onChange={handleChange}
// // //                             isInvalid={!!errors.delivery_date}
// // //                             min={deliveryMinDate}
// // //                             max={maxDate}
// // //                             required
// // //                           />
// // //                           <Form.Control.Feedback type="invalid">
// // //                             {errors.delivery_date}
// // //                           </Form.Control.Feedback>
// // //                         </InputGroup>
// // //                       </Form.Group>
// // //                     </Col>
// // //                   </Row>

// // //                   {/* Summary Section */}
// // //                   {Object.keys(formData.services).length > 0 && (
// // //                     <>
// // //                       <hr className="my-4" />
// // //                       <div className="summary-section p-3 bg-light rounded">
// // //                         <h6 className="mb-3">Selected Services Summary:</h6>
// // //                         <Row>
// // //                           {Object.entries(formData.services).map(([serviceId, serviceData]) => {
// // //                             const service = services.find(s => s.id === serviceId);
// // //                             if (!service || serviceData.quantity === 0) return null;
                            
// // //                             return (
// // //                               <Col md={6} key={serviceId} className="mb-2">
// // //                                 <div className="d-flex justify-content-between align-items-center">
// // //                                   <div>
// // //                                     <strong>{service.service_name}</strong>
// // //                                     {serviceData.selectedItems && serviceData.selectedItems.length > 0 ? (
// // //                                       <div>
// // //                                         {serviceData.selectedItems.map((item, index) => (
// // //                                           <small key={index} className="d-block text-muted">
// // //                                             • {item.data_json?.name || `Item ${index + 1}`} - ₹{item.data_json?.rate || service.rate_per_day}/day
// // //                                           </small>
// // //                                         ))}
// // //                                       </div>
// // //                                     ) : (
// // //                                       <small className="d-block text-muted">
// // //                                         Quantity: {serviceData.quantity} × ₹{service.rate_per_day}/day
// // //                                       </small>
// // //                                     )}
// // //                                   </div>
// // //                                   <div className="text-end">
// // //                                     <Badge bg="success">
// // //                                       ₹{(serviceData.selectedItems && serviceData.selectedItems.length > 0
// // //                                         ? serviceData.selectedItems.reduce((sum, item) => sum + (item.data_json?.rate || service.rate_per_day), 0)
// // //                                         : service.rate_per_day * serviceData.quantity
// // //                                       ) * formData.days}
// // //                                     </Badge>
// // //                                   </div>
// // //                                 </div>
// // //                               </Col>
// // //                             );
// // //                           })}
// // //                         </Row>
// // //                         <hr />
// // //                         <div className="d-flex justify-content-between align-items-center">
// // //                           <h5 className="mb-0">Total Amount:</h5>
// // //                           <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
// // //                         </div>
// // //                       </div>
// // //                     </>
// // //                   )}

// // //                   <div className="d-grid mt-4">
// // //                     <Button 
// // //                       variant="success" 
// // //                       type="submit" 
// // //                       size="lg"
// // //                       disabled={formSubmitting || isLoading}
// // //                     >
// // //                       {formSubmitting ? (
// // //                         <>
// // //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // //                           Generating Proposal...
// // //                         </>
// // //                       ) : (
// // //                         <>
// // //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// // //                           Generate Proposal - ₹{total.toLocaleString()}
// // //                         </>
// // //                       )}
// // //                     </Button>
// // //                   </div>
// // //                 </Form>
// // //               </Card.Body>
// // //             </Card>
// // //           </Col>
// // //         </Row>
// // //       </Container>

// // //       {/* Service Selection Modal */}
// // //       <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)} size="lg">
// // //         <Modal.Header closeButton>
// // //           <Modal.Title>
// // //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// // //             Select {selectedService?.service_name}
// // //           </Modal.Title>
// // //         </Modal.Header>
// // //         <Modal.Body>
// // //           {selectedServiceItems.length > 0 ? (
// // //             <div>
// // //               <p className="text-muted">Choose specific {selectedService?.service_name.toLowerCase()}s for your project:</p>
// // //               <div className="table-responsive">
// // //                 <Table hover>
// // //                   <thead>
// // //                     <tr>
// // //                       <th width="50">Select</th>
// // //                       <th>Name</th>
// // //                       <th>Rate per Day</th>
// // //                       <th>Details</th>
// // //                     </tr>
// // //                   </thead>
// // //                   <tbody>
// // //                     {selectedServiceItems.map(item => {
// // //                       const isSelected = formData.services[selectedService?.id]?.selectedItems?.some(selected => selected.id === item.id);
// // //                       const rate = item.data_json?.rate || selectedService?.rate_per_day || 0;
                      
// // //                       return (
// // //                         <tr key={item.id} className={isSelected ? 'table-success' : ''}>
// // //                           <td>
// // //                             <Form.Check
// // //                               type="checkbox"
// // //                               checked={isSelected}
// // //                               onChange={(e) => handleItemSelection(item, e.target.checked)}
// // //                             />
// // //                           </td>
// // //                           <td>
// // //                             <strong>{item.data_json?.name || `${selectedService?.service_name} ${item.id}`}</strong>
// // //                             {item.data_json?.experience && (
// // //                               <div className="small text-muted">
// // //                                 Experience: {item.data_json.experience} years
// // //                               </div>
// // //                             )}
// // //                           </td>
// // //                           <td>
// // //                             <Badge bg="info">₹{rate.toLocaleString()}</Badge>
// // //                           </td>
// // //                           <td>
// // //                             {item.data_json?.specialization && (
// // //                               <small className="text-muted">{item.data_json.specialization}</small>
// // //                             )}
// // //                             {item.data_json?.rating && (
// // //                               <div>
// // //                                 {[...Array(5)].map((_, i) => (
// // //                                   <FontAwesomeIcon 
// // //                                     key={i}
// // //                                     icon={faStar} 
// // //                                     className={i < item.data_json.rating ? 'text-warning' : 'text-light'}
// // //                                   />
// // //                                 ))}
// // //                               </div>
// // //                             )}
// // //                           </td>
// // //                         </tr>
// // //                       );
// // //                     })}
// // //                   </tbody>
// // //                 </Table>
// // //               </div>
// // //             </div>
// // //           ) : (
// // //             <div className="text-center py-4">
// // //               <FontAwesomeIcon icon={faInfoCircle} size="3x" className="text-muted mb-3" />
// // //               <h6>No specific {selectedService?.service_name.toLowerCase()}s available</h6>
// // //               <p className="text-muted">
// // //                 This service doesn't have individual options to choose from. 
// // //                 You can still add it with the quantity selector.
// // //               </p>
// // //             </div>
// // //           )}
// // //         </Modal.Body>
// // //         <Modal.Footer>
// // //           <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
// // //             Close
// // //           </Button>
// // //           {selectedServiceItems.length > 0 && (
// // //             <Button 
// // //               variant="primary" 
// // //               onClick={() => setShowServiceModal(false)}
// // //             >
// // //               <FontAwesomeIcon icon={faCheck} className="me-2" />
// // //               Confirm Selection
// // //             </Button>
// // //           )}
// // //         </Modal.Footer>
// // //       </Modal>

// // //       {/* Custom Styles */}
// // //       <style jsx>{`
// // //         .header {
// // //           border-bottom: 1px solid #e9e9e9;
// // //         }
        
// // //         .text-purple {
// // //           color: #8e24aa;
// // //           font-size: 1.75rem;
// // //           font-weight: 600;
// // //         }
        
// // //         .service-selection-container {
// // //           max-height: none;
// // //         }
        
// // //         .category-header {
// // //           border-radius: 8px;
// // //           transition: all 0.2s ease;
// // //         }
        
// // //         .table tbody tr {
// // //           transition: all 0.2s ease;
// // //         }
        
// // //         .table tbody tr:hover {
// // //           background-color: rgba(13, 110, 253, 0.05) !important;
// // //         }
        
// // //         .table-success {
// // //           background-color: rgba(40, 167, 69, 0.1) !important;
// // //         }
        
// // //         .summary-section {
// // //           border: 1px solid #dee2e6;
// // //         }
        
// // //         .proposal-form-component .card {
// // //           transition: box-shadow 0.3s ease;
// // //         }

// // //         @media (max-width: 768px) {
// // //           .text-purple {
// // //             font-size: 1.25rem;
// // //           }
          
// // //           .service-card {
// // //             margin-bottom: 1rem;
// // //           }
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default ProposalForm;
// // import React, { useState, useEffect } from 'react';
// // import { 
// //   Form, 
// //   Button, 
// //   Card, 
// //   Alert, 
// //   Container, 
// //   Row, 
// //   Col, 
// //   InputGroup, 
// //   Badge,
// //   Spinner,
// //   OverlayTrigger,
// //   Tooltip,
// //   ListGroup,
// //   Modal,
// //   Table
// // } from 'react-bootstrap';
// // import { 
// //   fetchServices, 
// //   fetchCategories,
// //   fetchTables,
// //   fetchTableData
// // } from '../../services/api';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { 
// //   faCheck,
// //   faTimes,
// //   faInfoCircle,
// //   faCalendarAlt,
// //   faBuilding,
// //   faEnvelope,
// //   faTag,
// //   faMapMarkerAlt,
// //   faMoneyBillWave,
// //   faFilePdf,
// //   faUser,
// //   faClipboardList,
// //   faExclamationTriangle,
// //   faTruck,
// //   faEdit,
// //   faCamera,
// //   faVideo,
// //   faChevronDown,
// //   faChevronRight,
// //   faPlus,
// //   faMinus,
// //   faLayerGroup,
// //   faUsers,
// //   faStar,
// //   faEye
// // } from '@fortawesome/free-solid-svg-icons';
// // import Logo from '../../assets/Logo.png';
// // import { useUserAuth } from '../../contexts/UserAuthContext';

// // // Service categories structure
// // const SERVICE_CATEGORIES = {
// //   'pre-production': {
// //     name: 'Pre-Production',
// //     icon: faEdit,
// //     color: '#17a2b8'
// //   },
// //   'production': {
// //     name: 'Production',
// //     icon: faCamera,
// //     color: '#28a745'
// //   },
// //   'post-production': {
// //     name: 'Post Production',
// //     icon: faVideo,
// //     color: '#6f42c1'
// //   }
// // };

// // function ProposalForm({ onSubmit, onAdminClick, onHomeClick, onDashboardClick }) {
// //   const { user, logout } = useUserAuth();
  
// //   // State management
// //   const [services, setServices] = useState([]);
// //   const [categories, setCategories] = useState([]);
// //   const [dynamicTables, setDynamicTables] = useState([]);
// //   const [tableData, setTableData] = useState({});
// //   const [organizedServices, setOrganizedServices] = useState({});
// //   const [formData, setFormData] = useState({
// //     client_name: '',
// //     your_email: '',
// //     project_title: '',
// //     category_id: '',
// //     location: '',
// //     services: {}, // serviceId: { quantity: 1, selectedItems: [] }
// //     days: 1,
// //     shoot_dates: '',
// //     delivery_date: ''
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [total, setTotal] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [categoriesLoading, setCategoriesLoading] = useState(true);
// //   const [serviceError, setServiceError] = useState('');
// //   const [formSubmitting, setFormSubmitting] = useState(false);
// //   const [selectedCategory, setSelectedCategory] = useState(null);
  
// //   // Modal states
// //   const [showServiceModal, setShowServiceModal] = useState(false);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [selectedServiceItems, setSelectedServiceItems] = useState([]);

// //   // Preload common table data
// //   const preloadCommonTables = async () => {
// //     console.log('🔄 Preloading common tables...');
// //     const commonTables = [
// //       'Director', 'DOP', 'Cinematographer', 'Editor', 'Script Writer', 
// //       'Focus Puller', 'CC', 'Food Stylist', 'VO Artist', 
// //       'Art Director/Production Designer', 'Line Producer', 'Assistant Directors',
// //       'DI Artist', 'CGI Artist', 'Location/Studio', 'Location Manager'
// //     ];
    
// //     for (const tableName of commonTables) {
// //       try {
// //         await loadTableDataEnhanced(tableName);
// //         console.log(`✅ Preloaded table: ${tableName}`);
// //       } catch (error) {
// //         console.log(`⚠️ Failed to preload table: ${tableName}`, error);
// //       }
// //     }
// //     console.log('🎉 Common tables preloading completed');
// //   };

// //   // Load data on component mount
// //   useEffect(() => {
// //     console.log('🚀 Component mounted, loading initial data...');
// //     const loadInitialData = async () => {
// //       await loadServices();
// //       await loadCategories();
// //       await loadDynamicTables();
      
// //       // Wait a bit for dynamic tables to be set, then preload common tables
// //       setTimeout(async () => {
// //         await preloadCommonTables();
// //       }, 1000);
      
// //       console.log('🎉 All initial data loading completed');
// //     };
    
// //     loadInitialData();
// //   }, []);

// //   // Load services from API
// //   const loadServices = async () => {
// //     try {
// //       console.log('🔄 Starting loadServices...');
// //       setIsLoading(true);
// //       const response = await fetchServices();
// //       console.log('📥 Raw services response:', response);
      
// //       const servicesWithStringIds = response.data.map(service => ({
// //         ...service,
// //         id: service.id.toString()
// //       }));
// //       console.log('🔄 Services with string IDs:', servicesWithStringIds);
// //       setServices(servicesWithStringIds);
      
// //       // Organize services by category
// //       const organized = {};
// //       servicesWithStringIds.forEach(service => {
// //         const category = service.category || 'pre-production';
// //         console.log(`📂 Processing service "${service.service_name}" in category "${category}"`);
        
// //         if (!organized[category]) {
// //           organized[category] = {};
// //         }
        
// //         if (category === 'post-production') {
// //           if (!organized[category]['all']) {
// //             organized[category]['all'] = [];
// //           }
// //           organized[category]['all'].push(service);
// //         } else {
// //           const subcategory = service.subcategory || 'part-1';
// //           if (!organized[category][subcategory]) {
// //             organized[category][subcategory] = [];
// //           }
// //           organized[category][subcategory].push(service);
// //         }
// //       });
      
// //       console.log('📊 Final organized services:', organized);
// //       setOrganizedServices(organized);
// //     } catch (error) {
// //       console.error('❌ Error loading services:', error);
// //       setServiceError('Failed to load services. Please refresh the page or contact support.');
// //     } finally {
// //       setIsLoading(false);
// //       console.log('✅ loadServices completed');
// //     }
// //   };

// //   // Load categories from API
// //   const loadCategories = async () => {
// //     try {
// //       console.log('🔄 Starting loadCategories...');
// //       setCategoriesLoading(true);
// //       const response = await fetchCategories();
// //       console.log('📥 Raw categories response:', response);
// //       console.log('📊 Categories data:', response.data);
// //       setCategories(response.data || []);
// //     } catch (error) {
// //       console.error('❌ Error loading categories:', error);
// //       console.log('🔄 Using fallback categories...');
// //       const fallbackCategories = [
// //         { id: 'fallback-1', name: 'Digital Bytes', description: 'Short digital content' },
// //         { id: 'fallback-2', name: 'Piece to Camera', description: 'Direct camera presentations' },
// //         { id: 'fallback-3', name: 'Digital Video', description: 'Full digital video production' },
// //         { id: 'fallback-4', name: 'Behind the Scene', description: 'BTS content creation' }
// //       ];
// //       console.log('📊 Fallback categories set:', fallbackCategories);
// //       setCategories(fallbackCategories);
// //     } finally {
// //       setCategoriesLoading(false);
// //       console.log('✅ loadCategories completed');
// //     }
// //   };

// //   // Load dynamic tables
// //   const loadDynamicTables = async () => {
// //     try {
// //       console.log('🔄 Starting loadDynamicTables...');
// //       const response = await fetchTables();
// //       console.log('📥 Raw dynamic tables response:', response);
      
// //       if (response.data?.success && Array.isArray(response.data.data)) {
// //         console.log('📊 Dynamic tables loaded successfully:', response.data.data);
// //         console.log('📊 Number of tables:', response.data.data.length);
// //         response.data.data.forEach((table, index) => {
// //           console.log(`📋 Table ${index + 1}:`, table);
// //         });
// //         setDynamicTables(response.data.data);
// //       } else {
// //         console.warn('⚠️ Invalid dynamic tables response structure:', response.data);
// //       }
// //     } catch (error) {
// //       console.error('❌ Error loading dynamic tables:', error);
// //     }
// //     console.log('✅ loadDynamicTables completed');
// //   };

// //   // Calculate total
// //   useEffect(() => {
// //     console.log('🧮 Calculating total...');
// //     console.log('📊 Current formData.services:', formData.services);
// //     console.log('📊 Current formData.days:', formData.days);
// //     console.log('📊 Current services array:', services);
// //     console.log('📊 Current tableData:', tableData);
// //     calculateTotal();
// //   }, [formData.services, formData.days, services, tableData]);

// //   // Handle category selection and auto-select services
// //   useEffect(() => {
// //     console.log('🎯 Category selection effect triggered');
// //     console.log('📊 formData.category_id:', formData.category_id);
// //     console.log('📊 categories.length:', categories.length);
// //     console.log('📊 categories:', categories);
    
// //     if (formData.category_id && categories.length > 0) {
// //       const category = categories.find(cat => cat.id.toString() === formData.category_id);
// //       console.log('🎯 Found category:', category);
      
// //       if (category && category.selectedServices) {
// //         console.log('🎯 Category has selectedServices:', category.selectedServices);
// //         setSelectedCategory(category);
        
// //         const autoSelectedServices = {};
// //         category.selectedServices.forEach(serviceId => {
// //           autoSelectedServices[serviceId.toString()] = {
// //             quantity: 1,
// //             selectedItems: []
// //           };
// //         });
        
// //         console.log('🎯 Auto-selected services:', autoSelectedServices);
// //         setFormData(prev => {
// //           const newFormData = {
// //             ...prev,
// //             services: { ...prev.services, ...autoSelectedServices }
// //           };
// //           console.log('🎯 Updated formData with auto-selected services:', newFormData);
// //           return newFormData;
// //         });
// //       } else {
// //         console.log('🎯 Category does not have selectedServices or category not found');
// //       }
// //     }
// //   }, [formData.category_id, categories]);

// //   const calculateTotal = () => {
// //     console.log('🧮 Starting calculateTotal...');
// //     let calculatedTotal = 0;
    
// //     console.log('📊 Processing services:', Object.entries(formData.services));
    
// //     Object.entries(formData.services).forEach(([serviceId, serviceData]) => {
// //       console.log(`💰 Processing service ${serviceId}:`, serviceData);
      
// //       if (serviceData.quantity > 0) {
// //         if (serviceData.selectedItems && serviceData.selectedItems.length > 0) {
// //           console.log(`📋 Service ${serviceId} has selected items:`, serviceData.selectedItems);
// //           // Calculate based on selected items with individual rates
// //           serviceData.selectedItems.forEach(item => {
// //             const rate = item.rate || item.data_json?.rate || 0;
// //             const itemTotal = rate * formData.days;
// //             console.log(`💵 Item rate: ${rate}, days: ${formData.days}, item total: ${itemTotal}`);
// //             calculatedTotal += itemTotal;
// //           });
// //         } else {
// //           console.log(`💼 Service ${serviceId} using default rate`);
// //           // Use default service rate
// //           const service = services.find(s => s.id === serviceId);
// //           if (service) {
// //             const serviceTotal = service.rate_per_day * serviceData.quantity * formData.days;
// //             console.log(`💵 Service rate: ${service.rate_per_day}, quantity: ${serviceData.quantity}, days: ${formData.days}, service total: ${serviceTotal}`);
// //             calculatedTotal += serviceTotal;
// //           } else {
// //             console.warn(`⚠️ Service ${serviceId} not found in services array`);
// //           }
// //         }
// //       } else {
// //         console.log(`⏸️ Service ${serviceId} has quantity 0, skipping`);
// //       }
// //     });
    
// //     console.log('💰 Final calculated total:', calculatedTotal);
// //     setTotal(calculatedTotal);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     console.log(`📝 Form field changed: ${name} = ${value}`);
    
// //     if (errors[name]) {
// //       console.log(`🧹 Clearing error for field: ${name}`);
// //       setErrors(prev => {
// //         const newErrors = {...prev};
// //         delete newErrors[name];
// //         return newErrors;
// //       });
// //     }

// //     setFormData(prev => {
// //       const newFormData = {
// //         ...prev,
// //         [name]: value
// //       };
// //       console.log('📝 Updated formData:', newFormData);
// //       return newFormData;
// //     });
// //   };

// //   // Handle service quantity changes
// //   const handleServiceQuantityChange = (serviceId, change) => {
// //     console.log(`🔢 Quantity change for service ${serviceId}: ${change}`);
    
// //     setFormData(prev => {
// //       const currentService = prev.services[serviceId] || { quantity: 0, selectedItems: [] };
// //       const newQuantity = Math.max(0, currentService.quantity + change);
      
// //       console.log(`🔢 Current quantity: ${currentService.quantity}, new quantity: ${newQuantity}`);
      
// //       const newServices = { ...prev.services };
// //       if (newQuantity === 0) {
// //         console.log(`🗑️ Removing service ${serviceId} (quantity = 0)`);
// //         delete newServices[serviceId];
// //       } else {
// //         console.log(`📊 Updating service ${serviceId} quantity to ${newQuantity}`);
// //         newServices[serviceId] = {
// //           ...currentService,
// //           quantity: newQuantity
// //         };
// //       }
      
// //       const newFormData = {
// //         ...prev,
// //         services: newServices
// //       };
// //       console.log('📊 Updated services in formData:', newFormData.services);
// //       return newFormData;
// //     });
// //   };

// //   // Enhanced function to map services to dynamic tables
// //   const getServiceTableMapping = (serviceName) => {
// //     console.log(`🗺️ Getting table mapping for service: ${serviceName}`);
// //     const name = serviceName.toLowerCase();
    
// //     // Comprehensive mapping including all database tables and service variations
// //     const mappings = {
// //       // Director variations
// //       'director': 'Director',
// //       'casting agency': 'Director',
// //       'casting director': 'Director',
      
// //       // DOP variations
// //       'dop': 'DOP',
// //       'director of photography': 'DOP',
// //       'cinematographer': 'Cinematographer',
      
// //       // Editor variations
// //       'editor': 'Editor',
// //       'edit': 'Editor',
// //       'audio edit': 'Editor',
// //       'video edit': 'Editor',
      
// //       // Script Writer variations
// //       'script writer': 'Script Writer',
// //       'scriptwriter': 'Script Writer',
// //       'writer': 'Script Writer',
      
// //       // Focus Puller variations
// //       'focus puller': 'Focus Puller',
// //       'focus': 'Focus Puller',
      
// //       // CC variations
// //       'cc': 'CC',
// //       'color correction': 'CC',
// //       'colour correction': 'CC',
// //       'colorist': 'CC',
      
// //       // Food Stylist variations
// //       'food stylist': 'Food Stylist',
// //       'food styling': 'Food Stylist',
      
// //       // VO Artist variations
// //       'vo artist': 'VO Artist',
// //       'voice over': 'VO Artist',
// //       'voiceover': 'VO Artist',
// //       'voice artist': 'VO Artist',
      
// //       // Art Director variations
// //       'art director': 'Art Director/Production Designer',
// //       'production designer': 'Art Director/Production Designer',
// //       'art dept': 'Art Director/Production Designer',
      
// //       // Line Producer variations
// //       'line producer': 'Line Producer',
// //       'producer': 'Line Producer',
// //       'production': 'Line Producer',
      
// //       // Assistant Director variations
// //       'assistant director': 'Assistant Directors',
// //       'ad': 'Assistant Directors',
// //       'asst director': 'Assistant Directors',
      
// //       // DI Artist variations
// //       'di artist': 'DI Artist',
// //       'digital intermediate': 'DI Artist',
// //       'di': 'DI Artist',
      
// //       // CGI Artist variations
// //       'cgi artist': 'CGI Artist',
// //       'vfx': 'CGI Artist',
// //       'visual effects': 'CGI Artist',
// //       'cgi': 'CGI Artist',
// //       'graphics': 'CGI Artist',
      
// //       // Location variations
// //       'location': 'Location/Studio',
// //       'studio': 'Location/Studio',
// //       'location manager': 'Location Manager',
// //       'location scout': 'Location Manager'
// //     };
    
// //     // Check for exact matches first
// //     if (mappings[name]) {
// //       console.log(`✅ Found exact mapping: ${serviceName} → ${mappings[name]}`);
// //       return mappings[name];
// //     }
    
// //     // Check for partial matches
// //     for (const [keyword, tableName] of Object.entries(mappings)) {
// //       if (name.includes(keyword)) {
// //         console.log(`✅ Found partial mapping: ${serviceName} → ${tableName}`);
// //         return tableName;
// //       }
// //     }
    
// //     console.log(`❌ No mapping found for service: ${serviceName}`);
// //     return null;
// //   };

// //   // Enhanced function to load table data with better error handling
// //   const loadTableDataEnhanced = async (tableName) => {
// //     try {
// //       console.log(`🔄 Loading enhanced table data for: ${tableName}`);
// //       console.log('📊 Available dynamic tables:', dynamicTables);
      
// //       if (!dynamicTables || dynamicTables.length === 0) {
// //         console.warn('⚠️ No dynamic tables available yet');
// //         return [];
// //       }
      
// //       // Find the table by name to get its ID
// //       const table = dynamicTables.find(t => 
// //         t.table_name.toLowerCase() === tableName.toLowerCase()
// //       );
      
// //       if (table) {
// //         console.log(`✅ Found table: ${table.table_name} (ID: ${table.id})`);
        
// //         // Use the table ID to fetch the data
// //         const response = await fetchTableData(table.id);
// //         console.log(`📥 Raw ${tableName} response:`, response);
        
// //         const data = response.data?.data || [];
// //         console.log(`📊 Raw ${tableName} data (${data.length} items):`, data);
        
// //         if (data.length === 0) {
// //           console.warn(`⚠️ No data found in table: ${tableName} (ID: ${table.id})`);
// //           return [];
// //         }
        
// //         // Transform data to ensure we have rate information
// //         const transformedData = data.map((item, index) => {
// //           console.log(`🔄 Transforming item ${index + 1}:`, item);
// //           console.log(`🔄 Item table_id: ${item.table_id}, Expected table_id: ${table.id}`);
          
// //           // Parse JSON if it's a string
// //           let jsonData = item.data_json;
// //           if (typeof jsonData === 'string') {
// //             try {
// //               jsonData = JSON.parse(jsonData);
// //               console.log(`✅ Parsed JSON for item ${index + 1}:`, jsonData);
// //             } catch (e) {
// //               console.error(`❌ Error parsing JSON for item ${index + 1}:`, e);
// //               jsonData = {};
// //             }
// //           } else if (typeof jsonData === 'object' && jsonData !== null) {
// //             console.log(`📊 JSON data already parsed for item ${index + 1}:`, jsonData);
// //           } else {
// //             console.warn(`⚠️ Invalid JSON data for item ${index + 1}:`, jsonData);
// //             jsonData = {};
// //           }
          
// //           // Enhanced field mapping for different JSON structures
// //           const getName = () => {
// //             return jsonData?.Name || 
// //                    jsonData?.name || 
// //                    jsonData?.['Name'] || 
// //                    `${tableName} ${item.id}`;
// //           };
          
// //           const getRate = () => {
// //             return parseFloat(
// //               jsonData?.Price || 
// //               jsonData?.price || 
// //               jsonData?.Rate || 
// //               jsonData?.rate || 
// //               jsonData?.['Rate'] || 
// //               0
// //             );
// //           };
          
// //           const transformedItem = {
// //             ...item,
// //             data_json: jsonData,
// //             displayName: getName(),
// //             rate: getRate(),
// //             location: jsonData?.Location || jsonData?.location || '',
// //             experience: jsonData?.['Experience in Years'] || jsonData?.experience || jsonData?.Experience || '',
// //             rating: parseInt(jsonData?.['Remarks/Rating'] || jsonData?.rating || jsonData?.Rating || 0),
// //             contactNumber: jsonData?.['Contact Number'] || jsonData?.contact || jsonData?.Contact || '',
// //             profileLink: jsonData?.['Profile/Work Links'] || jsonData?.profile || jsonData?.Profile || '',
// //             // Additional fields that might be useful
// //             specialization: jsonData?.Specialization || jsonData?.specialization || '',
// //             availability: jsonData?.Availability || jsonData?.availability || '',
// //             email: jsonData?.Email || jsonData?.email || ''
// //           };
          
// //           console.log(`✅ Transformed item ${index + 1}:`, transformedItem);
// //           return transformedItem;
// //         });
        
// //         console.log(`📊 Final transformed ${tableName} data (${transformedData.length} items):`, transformedData);
        
// //         setTableData(prev => {
// //           const newTableData = {
// //             ...prev,
// //             [tableName.toLowerCase()]: transformedData
// //           };
// //           console.log('📊 Updated tableData:', newTableData);
// //           return newTableData;
// //         });
// //         return transformedData;
// //       } else {
// //         console.warn(`⚠️ No table found for name: ${tableName}`);
// //         console.log('📋 Available table names:', dynamicTables.map(t => `${t.table_name} (ID: ${t.id})`));
// //         return [];
// //       }
// //     } catch (error) {
// //       console.error(`❌ Error loading ${tableName} data:`, error);
// //       return [];
// //     }
// //   };

// //   // Open service selection modal with enhanced logic
// //   const openServiceModal = async (service) => {
// //     console.log('🔓 Opening service modal for:', service);
// //     setSelectedService(service);
// //     setSelectedServiceItems([]);
    
// //     const tableMapping = getServiceTableMapping(service.service_name);
// //     console.log('🗺️ Table mapping result:', tableMapping);
    
// //     if (tableMapping) {
// //       console.log(`📋 Loading data for table: ${tableMapping}`);
// //       const data = await loadTableDataEnhanced(tableMapping);
// //       console.log('📊 Loaded service items:', data);
// //       setSelectedServiceItems(data);
// //     } else {
// //       console.log('❌ No table mapping found, modal will show empty state');
// //     }
    
// //     setShowServiceModal(true);
// //     console.log('✅ Service modal opened');
// //   };

// //   // Enhanced service display with table integration
// //   const renderServiceItem = (service, index) => {
// //     console.log(`🎨 Rendering service item: ${service.service_name} (${service.id})`);
// //     const serviceData = formData.services[service.id];
// //     const isSelected = serviceData && serviceData.quantity > 0;
// //     const tableMapping = getServiceTableMapping(service.service_name);
    
// //     // Check if table data exists
// //     const hasTableData = tableMapping && tableData[tableMapping.toLowerCase()]?.length > 0;
    
// //     // Debug current tableData state
// //     console.log(`🔍 Checking tableData for ${tableMapping?.toLowerCase()}:`, {
// //       tableMapping,
// //       hasTableData,
// //       tableDataKeys: Object.keys(tableData),
// //       specificTableData: tableData[tableMapping?.toLowerCase()],
// //       tableDataLength: tableData[tableMapping?.toLowerCase()]?.length || 0
// //     });
    
// //     console.log(`🎨 Service rendering data:`, {
// //       serviceName: service.service_name,
// //       serviceId: service.id,
// //       isSelected,
// //       tableMapping,
// //       hasTableData,
// //       tableDataLength: tableData[tableMapping?.toLowerCase()]?.length || 0,
// //       serviceData,
// //       allTableDataKeys: Object.keys(tableData)
// //     });
    
// //     return (
// //       <tr key={service.id} className={isSelected ? 'table-success' : ''}>
// //         <td>
// //           <div className="d-flex align-items-center">
// //             <strong>{service.service_name}</strong>
// //             {hasTableData && (
// //               <Badge bg="info" className="ms-2 small">
// //                 <FontAwesomeIcon icon={faUsers} className="me-1" />
// //                 {tableData[tableMapping.toLowerCase()].length} available
// //               </Badge>
// //             )}
// //           </div>
// //           {serviceData?.selectedItems?.length > 0 && (
// //             <div className="mt-1">
// //               {serviceData.selectedItems.map((item, idx) => (
// //                 <small key={idx} className="d-block text-success">
// //                   • {item.displayName} - ₹{item.rate.toLocaleString()}/day
// //                 </small>
// //               ))}
// //             </div>
// //           )}
// //         </td>
// //         <td>
// //           {hasTableData ? (
// //             <div>
// //               <div className="small text-muted">Individual rates available</div>
// //               <Button
// //                 variant="outline-primary"
// //                 size="sm"
// //                 onClick={() => openServiceModal(service)}
// //                 className="mt-1"
// //               >
// //                 <FontAwesomeIcon icon={faUsers} className="me-1" />
// //                 Select {tableMapping}
// //               </Button>
// //             </div>
// //           ) : (
// //             <div>
// //               <Badge bg="secondary">₹{service.rate_per_day}/day</Badge>
// //               {tableMapping && (
// //                 <div className="small text-muted mt-1">
// //                   Looking for {tableMapping} data...
// //                 </div>
// //               )}
// //             </div>
// //           )}
// //         </td>
// //         <td>
// //           <div className="d-flex align-items-center gap-2">
// //             <Button 
// //               variant="outline-danger"
// //               size="sm"
// //               onClick={() => handleServiceQuantityChange(service.id, -1)}
// //               disabled={!isSelected}
// //             >
// //               <FontAwesomeIcon icon={faMinus} />
// //             </Button>
// //             <span className="px-3 py-1 bg-light rounded text-center fw-bold" style={{ minWidth: '45px' }}>
// //               {serviceData?.quantity || 0}
// //             </span>
// //             <Button 
// //               variant="outline-success"
// //               size="sm"
// //               onClick={() => handleServiceQuantityChange(service.id, 1)}
// //             >
// //               <FontAwesomeIcon icon={faPlus} />
// //             </Button>
// //           </div>
// //         </td>
// //         <td>
// //           {isSelected && (
// //             <Badge bg="success" className="fw-bold">
// //               ₹{(serviceData.selectedItems?.length > 0
// //                 ? serviceData.selectedItems.reduce((sum, item) => sum + item.rate, 0)
// //                 : service.rate_per_day * serviceData.quantity
// //               ) * formData.days}
// //             </Badge>
// //           )}
// //         </td>
// //       </tr>
// //     );
// //   };

// //   // Handle item selection in modal
// //   const handleItemSelection = (item, isSelected) => {
// //     console.log(`🎯 Item selection changed: ${item.displayName}, selected: ${isSelected}`);
// //     console.log('🎯 Item details:', item);
    
// //     const serviceId = selectedService.id;
// //     console.log(`🎯 Service ID: ${serviceId}`);
    
// //     setFormData(prev => {
// //       console.log('🎯 Previous formData:', prev);
// //       const currentService = prev.services[serviceId] || { quantity: 1, selectedItems: [] };
// //       console.log('🎯 Current service data:', currentService);
      
// //       let newSelectedItems;
      
// //       if (isSelected) {
// //         // Add the item with enhanced data
// //         const enhancedItem = {
// //           ...item,
// //           displayName: item.displayName,
// //           rate: item.rate > 0 ? item.rate : selectedService?.rate_per_day || 0
// //         };
// //         console.log('🎯 Adding enhanced item:', enhancedItem);
// //         newSelectedItems = [...currentService.selectedItems, enhancedItem];
// //       } else {
// //         console.log('🎯 Removing item with ID:', item.id);
// //         newSelectedItems = currentService.selectedItems.filter(selected => selected.id !== item.id);
// //       }
      
// //       console.log('🎯 New selected items:', newSelectedItems);
      
// //       const updatedFormData = {
// //         ...prev,
// //         services: {
// //           ...prev.services,
// //           [serviceId]: {
// //             ...currentService,
// //             selectedItems: newSelectedItems,
// //             quantity: Math.max(newSelectedItems.length, 1) // At least 1 if items selected
// //           }
// //         }
// //       };
      
// //       console.log('🎯 Updated formData:', updatedFormData);
// //       return updatedFormData;
// //     });
// //   };

// //   // Get service display name with selected items count
// //   const getServiceDisplayInfo = (service) => {
// //     console.log(`📊 Getting display info for service: ${service.service_name}`);
// //     const serviceData = formData.services[service.id];
// //     console.log('📊 Service data:', serviceData);
    
// //     if (!serviceData) {
// //       console.log('📊 No service data found, returning defaults');
// //       return { name: service.service_name, count: 0, details: [] };
// //     }
    
// //     let details = [];
// //     if (serviceData.selectedItems && serviceData.selectedItems.length > 0) {
// //       console.log('📊 Processing selected items:', serviceData.selectedItems);
// //       details = serviceData.selectedItems.map(item => ({
// //         name: item.data_json?.name || item.data_json?.title || `${service.service_name} ${item.id}`,
// //         rate: item.data_json?.rate || service.rate_per_day
// //       }));
// //     }
    
// //     const displayInfo = {
// //       name: service.service_name,
// //       count: serviceData.quantity || 0,
// //       details: details,
// //       hasTable: selectedServiceItems.length > 0
// //     };
    
// //     console.log('📊 Final display info:', displayInfo);
// //     return displayInfo;
// //   };

// //   // Validation and submit functions
// //   const validateForm = () => {
// //     console.log('🔍 Starting form validation...');
// //     console.log('📊 Current formData:', formData);
    
// //     const newErrors = {};
    
// //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// //       console.log('❌ Client name validation failed');
// //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// //     }
    
// //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// //     if (!emailPattern.test(formData.your_email)) {
// //       console.log('❌ Email validation failed');
// //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// //     }
    
// //     if (!formData.project_title || formData.project_title.trim() === '') {
// //       console.log('❌ Project title validation failed');
// //       newErrors.project_title = 'Project title is required';
// //     } else if (formData.project_title.length > 100) {
// //       console.log('❌ Project title too long');
// //       newErrors.project_title = 'Project title must be 1–100 characters long';
// //     }
    
// //     if (!formData.category_id) {
// //       console.log('❌ Category validation failed');
// //       newErrors.category_id = 'Please select a category';
// //     }
    
// //     if (!formData.location) {
// //       console.log('❌ Location validation failed');
// //       newErrors.location = 'Please select a location';
// //     }
    
// //     if (!formData.shoot_dates) {
// //       console.log('❌ Shoot dates validation failed');
// //       newErrors.shoot_dates = 'Shoot date is required';
// //     }
    
// //     if (!formData.delivery_date) {
// //       console.log('❌ Delivery date validation failed');
// //       newErrors.delivery_date = 'Delivery date is required';
// //     }
    
// //     if (Object.keys(formData.services).length === 0) {
// //       console.log('❌ Services validation failed');
// //       newErrors.services = 'Please select at least one service';
// //     }
    
// //     console.log('📋 Validation errors:', newErrors);
// //     setErrors(newErrors);
    
// //     const isValid = Object.keys(newErrors).length === 0;
// //     console.log(`✅ Form validation result: ${isValid ? 'VALID' : 'INVALID'}`);
// //     return isValid;
// //   };

// //   const handleSubmit = async (e) => {
// //     console.log('🚀 Form submission started');
// //     e.preventDefault();
    
// //     if (validateForm()) {
// //       console.log('✅ Form validation passed, proceeding with submission');
// //       setFormSubmitting(true);
      
// //       try {
// //         const submissionData = {
// //           ...formData,
// //           selectedCategory: selectedCategory,
// //           serviceDetails: Object.entries(formData.services).map(([serviceId, serviceData]) => ({
// //             serviceId,
// //             ...serviceData,
// //             service: services.find(s => s.id === serviceId)
// //           }))
// //         };
        
// //         console.log('📤 Submission data prepared:', submissionData);
// //         console.log('📊 Service details:', submissionData.serviceDetails);
        
// //         await onSubmit(submissionData);
// //         console.log('✅ Form submission completed successfully');
        
// //       } catch (error) {
// //         console.error('❌ Form submission error:', error);
// //         setErrors({
// //           submission: 'An error occurred while generating the proposal. Please try again.'
// //         });
// //       } finally {
// //         setFormSubmitting(false);
// //         console.log('🏁 Form submission process finished');
// //       }
// //     } else {
// //       console.log('❌ Form validation failed, submission aborted');
// //     }
// //   };

// //   // Calculate fiscal year dates
// //   const today = new Date();
// //   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// //   const fyStart = new Date(fyStartYear, 3, 1);
// //   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// //   const effectiveMinDate = today > fyStart ? today : fyStart;
// //   const minDate = effectiveMinDate.toISOString().split('T')[0];
// //   const maxDate = fyEnd.toISOString().split('T')[0];

// //   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
// //     ? formData.shoot_dates 
// //     : minDate;
    
// //   console.log('📅 Fiscal year calculations:', {
// //     today: today.toISOString(),
// //     fyStartYear,
// //     fyStart: fyStart.toISOString(),
// //     fyEnd: fyEnd.toISOString(),
// //     effectiveMinDate: effectiveMinDate.toISOString(),
// //     minDate,
// //     maxDate,
// //     deliveryMinDate
// //   });

// //   const handleLogout = () => {
// //     console.log('🚪 User logout initiated');
// //     logout();
// //   };

// //   return (
// //     <div className="proposal-form-component">
// //       {/* Header */}
// //       <div className="header bg-white border-bottom py-2">
// //         <Container fluid className="px-4">
// //           <div className="d-flex justify-content-between align-items-center">
// //             <div className="d-flex align-items-center">
// //               <img 
// //                 src={Logo} 
// //                 alt="Company Logo" 
// //                 style={{ height: '55px', width: 'auto' }} 
// //               />
// //             </div>
// //             <div className="text-center flex-grow-1">
// //               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
// //             </div>

// //             <div className="d-flex gap-2">
// //               <Button variant="outline-primary" onClick={onDashboardClick} size="sm">
// //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// //                 Dashboard
// //               </Button>
// //               <Button variant="outline-primary" onClick={onHomeClick} size="sm">
// //                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
// //                 Home
// //               </Button>
// //               <Button variant="outline-danger" onClick={handleLogout} size="sm">
// //                 <FontAwesomeIcon icon={faUser} className="me-2" />
// //                 Logout
// //               </Button>
// //             </div>
// //           </div>
// //         </Container>
// //       </div>
      
// //       <Container fluid className="py-4">
// //         <Row className="justify-content-center">
// //           <Col xl={10}>
// //             <Card className="shadow-sm border-0 mb-4">
// //               <Card.Body className="p-4">
// //                 <div className="d-flex justify-content-between align-items-center mb-4">
// //                   <div>
// //                     <h3 className="mb-1">Create Studio Proposal</h3>
// //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// //                   </div>
// //                   {total > 0 && (
// //                     <div className="text-end">
// //                       <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
// //                       <small className="text-muted">Total for {formData.days} day{formData.days !== 1 ? 's' : ''}</small>
// //                     </div>
// //                   )}
// //                 </div>

// //                 {/* Error/Success Alerts */}
// //                 {errors.submission && (
// //                   <Alert variant="danger" dismissible onClose={() => setErrors(prev => {
// //                     const newErrors = {...prev};
// //                     delete newErrors.submission;
// //                     return newErrors;
// //                   })}>
// //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// //                     {errors.submission}
// //                   </Alert>
// //                 )}

// //                 {serviceError && (
// //                   <Alert variant="danger" dismissible onClose={() => setServiceError('')}>
// //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// //                     {serviceError}
// //                   </Alert>
// //                 )}

// //                 <Form onSubmit={handleSubmit}>
// //                   {/* Client Information */}
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// //                     Client Information
// //                   </h5>
                  
// //                   <Row>
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>Brand Name <span className="text-danger">*</span></Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
// //                           <Form.Control
// //                             type="text"
// //                             name="client_name"
// //                             value={formData.client_name}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.client_name}
// //                             placeholder="e.g. Zee TV, Colors"
// //                             required
// //                           />
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.client_name}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                       </Form.Group>
// //                     </Col>
                    
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>Your Email <span className="text-danger">*</span></Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
// //                           <Form.Control
// //                             type="email"
// //                             name="your_email"
// //                             value={formData.your_email}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.your_email}
// //                             placeholder="e.g. user@tsbi.in"
// //                             required
// //                           />
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.your_email}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                         <Form.Text className="text-muted">
// //                           Only @tsbi.in email addresses are allowed
// //                         </Form.Text>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>

// //                   <hr className="my-4" />
                  
// //                   {/* Project Details */}
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// //                     Project Details
// //                   </h5>
                  
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
// //                     <InputGroup hasValidation>
// //                       <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// //                       <Form.Control
// //                         type="text"
// //                         name="project_title"
// //                         value={formData.project_title}
// //                         onChange={handleChange}
// //                         isInvalid={!!errors.project_title}
// //                         placeholder="e.g. Product Launch Promo"
// //                         required
// //                       />
// //                       <Form.Control.Feedback type="invalid">
// //                         {errors.project_title}
// //                       </Form.Control.Feedback>
// //                     </InputGroup>
// //                   </Form.Group>

// //                   <Row>
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>
// //                           Category Package <span className="text-danger">*</span>
// //                           {selectedCategory && (
// //                             <Badge bg="success" className="ms-2">
// //                               <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
// //                               {selectedCategory.services?.length || 0} services auto-selected
// //                             </Badge>
// //                           )}
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
// //                           <Form.Select 
// //                             name="category_id"
// //                             value={formData.category_id}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.category_id}
// //                             disabled={categoriesLoading}
// //                             required
// //                           >
// //                             <option value="" disabled>
// //                               {categoriesLoading ? 'Loading categories...' : 'Select a category package'}
// //                             </option>
// //                             {categories.map(category => (
// //                               <option key={category.id} value={category.id}>
// //                                 {category.name}
// //                                 {category.description && ` - ${category.description}`}
// //                               </option>
// //                             ))}
// //                           </Form.Select>
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.category_id}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                         {selectedCategory && (
// //                           <Form.Text className="text-success">
// //                             <FontAwesomeIcon icon={faCheck} className="me-1" />
// //                             Services from "{selectedCategory.name}" have been automatically added
// //                           </Form.Text>
// //                         )}
// //                       </Form.Group>
// //                     </Col>
                    
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>Location <span className="text-danger">*</span></Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
// //                           <Form.Select 
// //                             name="location"
// //                             value={formData.location}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.location}
// //                             required
// //                           >
// //                             <option value="" disabled>Select a location</option>
// //                             <option value="Mumbai">Mumbai</option>
// //                             <option value="Outside Mumbai">Outside Mumbai</option>
// //                           </Form.Select>
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.location}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>

// //                   <hr className="my-4" />
                  
// //                   {/* Service Selection */}
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// //                     Service Selection & Quantities
// //                     <Badge bg="secondary" className="ms-2">
// //                       {Object.keys(formData.services).length} services selected
// //                     </Badge>
// //                   </h5>
                  
// //                   {isLoading ? (
// //                     <div className="text-center py-4">
// //                       <Spinner animation="border" variant="primary" />
// //                       <p className="mt-2">Loading available services...</p>
// //                     </div>
// //                   ) : (
// //                     <div className="service-selection-container">
// //                       {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => {
// //                         const categoryServices = organizedServices[categoryKey];
// //                         if (!categoryServices) return null;

// //                         return (
// //                           <div key={categoryKey} className="mb-4">
// //                             {/* Category Header */}
// //                             <div className="category-header p-3 mb-3 rounded" style={{ backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}` }}>
// //                               <h6 className="mb-0" style={{ color: category.color }}>
// //                                 <FontAwesomeIcon icon={category.icon} className="me-2" />
// //                                 {category.name}
// //                                 <Badge bg="light" text="dark" className="ms-2">
// //                                   {categoryKey === 'post-production' 
// //                                     ? (categoryServices['all'] || []).length
// //                                     : Object.values(categoryServices).flat().length
// //                                   } services
// //                                 </Badge>
// //                               </h6>
// //                             </div>

// //                             {/* Services Table */}
// //                             <div className="table-responsive">
// //                               <Table hover className="mb-0">
// //                                 <thead className="table-light">
// //                                   <tr>
// //                                     <th width="35%">Service</th>
// //                                     <th width="25%">Rate / Options</th>
// //                                     <th width="20%" className="text-center">Quantity</th>
// //                                     <th width="20%" className="text-center">Total</th>
// //                                   </tr>
// //                                 </thead>
// //                                 <tbody>
// //                                   {categoryKey === 'post-production' ? (
// //                                     // Post-production services
// //                                     (categoryServices['all'] || []).map(renderServiceItem)
// //                                   ) : (
// //                                     // Other categories with subcategories
// //                                     Object.entries(categoryServices).map(([subcategoryKey, subcategoryServices]) => 
// //                                       subcategoryServices.map(renderServiceItem)
// //                                     )
// //                                   )}
// //                                 </tbody>
// //                               </Table>
// //                             </div>
// //                           </div>
// //                         );
// //                       })}
                      
// //                       {errors.services && (
// //                         <Alert variant="danger">
// //                           <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// //                           {errors.services}
// //                         </Alert>
// //                       )}
// //                     </div>
// //                   )}

// //                   <hr className="my-4" />

// //                   {/* Timeline */}
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
// //                     Project Timeline
// //                   </h5>
                  
// //                   <Row>
// //                     <Col md={4}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>Number of Days <span className="text-danger">*</span></Form.Label>
// //                         <InputGroup>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// //                           <Form.Control
// //                             type="number"
// //                             name="days"
// //                             value={formData.days}
// //                             onChange={handleChange}
// //                             min="1"
// //                             max="100"
// //                             required
// //                           />
// //                         </InputGroup>
// //                       </Form.Group>
// //                     </Col>
                    
// //                     <Col md={4}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>
// //                           Shoot Date <span className="text-danger">*</span>
// //                           <OverlayTrigger
// //                             placement="top"
// //                             overlay={
// //                               <Tooltip>
// //                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
// //                               </Tooltip>
// //                             }
// //                           >
// //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// //                           </OverlayTrigger>
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
// //                           <Form.Control
// //                             type="date"
// //                             name="shoot_dates"
// //                             value={formData.shoot_dates}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.shoot_dates}
// //                             min={minDate}
// //                             max={maxDate}
// //                             required
// //                           />
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.shoot_dates}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                       </Form.Group>
// //                     </Col>
                    
// //                     <Col md={4}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>
// //                           Delivery Date <span className="text-danger">*</span>
// //                           <OverlayTrigger
// //                             placement="top"
// //                             overlay={
// //                               <Tooltip>
// //                                 Must be on or after shoot date, within fiscal year
// //                               </Tooltip>
// //                             }
// //                           >
// //                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
// //                           </OverlayTrigger>
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text><FontAwesomeIcon icon={faTruck} /></InputGroup.Text>
// //                           <Form.Control
// //                             type="date"
// //                             name="delivery_date"
// //                             value={formData.delivery_date}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.delivery_date}
// //                             min={deliveryMinDate}
// //                             max={maxDate}
// //                             required
// //                           />
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.delivery_date}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>

// //                   {/* Summary Section */}
// //                   {Object.keys(formData.services).length > 0 && (
// //                     <>
// //                       <hr className="my-4" />
// //                       <div className="summary-section p-3 bg-light rounded">
// //                         <h6 className="mb-3">Selected Services Summary:</h6>
// //                         <Row>
// //                           {Object.entries(formData.services).map(([serviceId, serviceData]) => {
// //                             const service = services.find(s => s.id === serviceId);
// //                             if (!service || serviceData.quantity === 0) return null;
                            
// //                             return (
// //                               <Col md={6} key={serviceId} className="mb-2">
// //                                 <div className="d-flex justify-content-between align-items-center">
// //                                   <div>
// //                                     <strong>{service.service_name}</strong>
// //                                     {serviceData.selectedItems && serviceData.selectedItems.length > 0 ? (
// //                                       <div>
// //                                         {serviceData.selectedItems.map((item, index) => (
// //                                           <small key={index} className="d-block text-muted">
// //                                             • {item.data_json?.name || `Item ${index + 1}`} - ₹{item.data_json?.rate || service.rate_per_day}/day
// //                                           </small>
// //                                         ))}
// //                                       </div>
// //                                     ) : (
// //                                       <small className="d-block text-muted">
// //                                         Quantity: {serviceData.quantity} × ₹{service.rate_per_day}/day
// //                                       </small>
// //                                     )}
// //                                   </div>
// //                                   <div className="text-end">
// //                                     <Badge bg="success">
// //                                       ₹{(serviceData.selectedItems && serviceData.selectedItems.length > 0
// //                                         ? serviceData.selectedItems.reduce((sum, item) => sum + (item.data_json?.rate || service.rate_per_day), 0)
// //                                         : service.rate_per_day * serviceData.quantity
// //                                       ) * formData.days}
// //                                     </Badge>
// //                                   </div>
// //                                 </div>
// //                               </Col>
// //                             );
// //                           })}
// //                         </Row>
// //                         <hr />
// //                         <div className="d-flex justify-content-between align-items-center">
// //                           <h5 className="mb-0">Total Amount:</h5>
// //                           <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
// //                         </div>
// //                       </div>
// //                     </>
// //                   )}

// //                   <div className="d-grid mt-4">
// //                     <Button 
// //                       variant="success" 
// //                       type="submit" 
// //                       size="lg"
// //                       disabled={formSubmitting || isLoading}
// //                     >
// //                       {formSubmitting ? (
// //                         <>
// //                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// //                           Generating Proposal...
// //                         </>
// //                       ) : (
// //                         <>
// //                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
// //                           Generate Proposal - ₹{total.toLocaleString()}
// //                         </>
// //                       )}
// //                     </Button>
// //                   </div>
// //                 </Form>
// //               </Card.Body>
// //             </Card>
// //           </Col>
// //         </Row>
// //       </Container>

// //       {/* Service Selection Modal */}
// //       <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)} size="lg">
// //         <Modal.Header closeButton>
// //           <Modal.Title>
// //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// //             Select {selectedService?.service_name}
// //           </Modal.Title>
// //         </Modal.Header>
// //         <Modal.Body>
// //           {selectedServiceItems.length > 0 ? (
// //             <div>
// //               <p className="text-muted">Choose specific {selectedService?.service_name.toLowerCase()}s for your project:</p>
// //               <div className="table-responsive">
// //                 <Table hover>
// //                   <thead>
// //                     <tr>
// //                       <th width="50">Select</th>
// //                       <th>Name</th>
// //                       <th>Rate per Day</th>
// //                       <th>Details</th>
// //                     </tr>
// //                   </thead>
// //                   <tbody>
// //                     {selectedServiceItems.map(item => {
// //                       const isSelected = formData.services[selectedService?.id]?.selectedItems?.some(selected => selected.id === item.id);
// //                       const rate = item.data_json?.rate || selectedService?.rate_per_day || 0;
                      
// //                       return (
// //                         <tr key={item.id} className={isSelected ? 'table-success' : ''}>
// //                           <td>
// //                             <Form.Check
// //                               type="checkbox"
// //                               checked={isSelected}
// //                               onChange={(e) => handleItemSelection(item, e.target.checked)}
// //                             />
// //                           </td>
// //                           <td>
// //                             <strong>{item.data_json?.name || `${selectedService?.service_name} ${item.id}`}</strong>
// //                             {item.data_json?.experience && (
// //                               <div className="small text-muted">
// //                                 Experience: {item.data_json.experience} years
// //                               </div>
// //                             )}
// //                           </td>
// //                           <td>
// //                             <Badge bg="info">₹{rate.toLocaleString()}</Badge>
// //                           </td>
// //                           <td>
// //                             {item.data_json?.specialization && (
// //                               <small className="text-muted">{item.data_json.specialization}</small>
// //                             )}
// //                             {item.data_json?.rating && (
// //                               <div>
// //                                 {[...Array(5)].map((_, i) => (
// //                                   <FontAwesomeIcon 
// //                                     key={i}
// //                                     icon={faStar} 
// //                                     className={i < item.data_json.rating ? 'text-warning' : 'text-light'}
// //                                   />
// //                                 ))}
// //                               </div>
// //                             )}
// //                           </td>
// //                         </tr>
// //                       );
// //                     })}
// //                   </tbody>
// //                 </Table>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="text-center py-4">
// //               <FontAwesomeIcon icon={faInfoCircle} size="3x" className="text-muted mb-3" />
// //               <h6>No specific {selectedService?.service_name.toLowerCase()}s available</h6>
// //               <p className="text-muted">
// //                 This service doesn't have individual options to choose from. 
// //                 You can still add it with the quantity selector.
// //               </p>
// //             </div>
// //           )}
// //         </Modal.Body>
// //         <Modal.Footer>
// //           <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
// //             Close
// //           </Button>
// //           {selectedServiceItems.length > 0 && (
// //             <Button 
// //               variant="primary" 
// //               onClick={() => setShowServiceModal(false)}
// //             >
// //               <FontAwesomeIcon icon={faCheck} className="me-2" />
// //               Confirm Selection
// //             </Button>
// //           )}
// //         </Modal.Footer>
// //       </Modal>

// //       {/* Custom Styles */}
// //       <style jsx>{`
// //         .header {
// //           border-bottom: 1px solid #e9e9e9;
// //         }
        
// //         .text-purple {
// //           color: #8e24aa;
// //           font-size: 1.75rem;
// //           font-weight: 600;
// //         }
        
// //         .service-selection-container {
// //           max-height: none;
// //         }
        
// //         .category-header {
// //           border-radius: 8px;
// //           transition: all 0.2s ease;
// //         }
        
// //         .table tbody tr {
// //           transition: all 0.2s ease;
// //         }
        
// //         .table tbody tr:hover {
// //           background-color: rgba(13, 110, 253, 0.05) !important;
// //         }
        
// //         .table-success {
// //           background-color: rgba(40, 167, 69, 0.1) !important;
// //         }
        
// //         .summary-section {
// //           border: 1px solid #dee2e6;
// //         }
        
// //         .proposal-form-component .card {
// //           transition: box-shadow 0.3s ease;
// //         }

// //         @media (max-width: 768px) {
// //           .text-purple {
// //             font-size: 1.25rem;
// //           }
          
// //           .service-card {
// //             margin-bottom: 1rem;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default ProposalForm;
// import React, { useState, useEffect } from 'react';
// import { 
//   Form, 
//   Button, 
//   Card, 
//   Alert, 
//   Container, 
//   Row, 
//   Col, 
//   InputGroup, 
//   Badge,
//   Spinner,
//   OverlayTrigger,
//   Tooltip,
//   ListGroup,
//   Modal,
//   Table
// } from 'react-bootstrap';
// import { 
//   fetchServices, 
//   fetchCategories,
//   fetchServiceData,
//   getServicesWithData
// } from '../../services/api';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faCheck,
//   faTimes,
//   faInfoCircle,
//   faCalendarAlt,
//   faBuilding,
//   faEnvelope,
//   faTag,
//   faMapMarkerAlt,
//   faMoneyBillWave,
//   faFilePdf,
//   faUser,
//   faClipboardList,
//   faExclamationTriangle,
//   faTruck,
//   faEdit,
//   faCamera,
//   faVideo,
//   faChevronDown,
//   faChevronRight,
//   faPlus,
//   faMinus,
//   faLayerGroup,
//   faUsers,
//   faStar,
//   faEye,
//   faLink,
//   faAward
// } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../assets/Logo.png';
// import { useUserAuth } from '../../contexts/UserAuthContext';

// // Service categories structure
// const SERVICE_CATEGORIES = {
//   'pre-production': {
//     name: 'Pre-Production',
//     icon: faEdit,
//     color: '#17a2b8'
//   },
//   'production': {
//     name: 'Production',
//     icon: faCamera,
//     color: '#28a745'
//   },
//   'post-production': {
//     name: 'Post Production',
//     icon: faVideo,
//     color: '#6f42c1'
//   }
// };

// function ProposalForm({ onSubmit, onAdminClick, onHomeClick, onDashboardClick }) {
//   const { user, logout } = useUserAuth();
  
//   // State management
//   const [services, setServices] = useState([]);
//   const [categories, setCategories] = useState([]);
//   const [serviceData, setServiceData] = useState({}); // Store service-specific data (directors, etc.)
//   const [organizedServices, setOrganizedServices] = useState({});
//   const [formData, setFormData] = useState({
//     client_name: '',
//     your_email: '',
//     project_title: '',
//     category_id: '',
//     location: '',
//     services: {}, // serviceId: { quantity: 1, selectedItems: [], useDefault: true }
//     days: 1,
//     shoot_dates: '',
//     delivery_date: ''
//   });
//   const [errors, setErrors] = useState({});
//   const [total, setTotal] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [categoriesLoading, setCategoriesLoading] = useState(true);
//   const [serviceError, setServiceError] = useState('');
//   const [formSubmitting, setFormSubmitting] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState(null);
  
//   // Modal states
//   const [showServiceModal, setShowServiceModal] = useState(false);
//   const [selectedService, setSelectedService] = useState(null);
//   const [selectedServiceItems, setSelectedServiceItems] = useState([]);
//   const [loadingServiceData, setLoadingServiceData] = useState(false);

//   // Load data on component mount
//   useEffect(() => {
//     console.log('🚀 Component mounted, loading initial data...');
//     const loadInitialData = async () => {
//       await loadServices();
//       await loadCategories();
//       console.log('🎉 All initial data loading completed');
//     };
    
//     loadInitialData();
//   }, []);

//   // Load services from API
//   const loadServices = async () => {
//     try {
//       console.log('🔄 Starting loadServices...');
//       setIsLoading(true);
//       const response = await fetchServices();
//       console.log('📥 Raw services response:', response);
      
//       const servicesWithStringIds = response.data.map(service => ({
//         ...service,
//         id: service.id.toString()
//       }));
//       console.log('🔄 Services with string IDs:', servicesWithStringIds);
//       setServices(servicesWithStringIds);
      
//       // Organize services by category
//       const organized = {};
//       servicesWithStringIds.forEach(service => {
//         const category = service.category || 'pre-production';
//         console.log(`📂 Processing service "${service.service_name}" in category "${category}"`);
        
//         if (!organized[category]) {
//           organized[category] = {};
//         }
        
//         if (category === 'post-production') {
//           if (!organized[category]['all']) {
//             organized[category]['all'] = [];
//           }
//           organized[category]['all'].push(service);
//         } else {
//           const subcategory = service.subcategory || 'part-1';
//           if (!organized[category][subcategory]) {
//             organized[category][subcategory] = [];
//           }
//           organized[category][subcategory].push(service);
//         }
//       });
      
//       console.log('📊 Final organized services:', organized);
//       setOrganizedServices(organized);
//     } catch (error) {
//       console.error('❌ Error loading services:', error);
//       setServiceError('Failed to load services. Please refresh the page or contact support.');
//     } finally {
//       setIsLoading(false);
//       console.log('✅ loadServices completed');
//     }
//   };

//   // Load categories from API
//   const loadCategories = async () => {
//     try {
//       console.log('🔄 Starting loadCategories...');
//       setCategoriesLoading(true);
//       const response = await fetchCategories();
//       console.log('📥 Raw categories response:', response);
//       console.log('📊 Categories data:', response.data);
//       setCategories(response.data || []);
//     } catch (error) {
//       console.error('❌ Error loading categories:', error);
//       console.log('🔄 Using fallback categories...');
//       const fallbackCategories = [
//         { id: 'fallback-1', name: 'Digital Bytes', description: 'Short digital content' },
//         { id: 'fallback-2', name: 'Piece to Camera', description: 'Direct camera presentations' },
//         { id: 'fallback-3', name: 'Digital Video', description: 'Full digital video production' },
//         { id: 'fallback-4', name: 'Behind the Scene', description: 'BTS content creation' }
//       ];
//       console.log('📊 Fallback categories set:', fallbackCategories);
//       setCategories(fallbackCategories);
//     } finally {
//       setCategoriesLoading(false);
//       console.log('✅ loadCategories completed');
//     }
//   };

//   // Load service data (directors, cinematographers, etc.)
//   const loadServiceSpecificData = async (serviceId) => {
//     try {
//       console.log(`🔄 Loading service data for service ID: ${serviceId}`);
//       setLoadingServiceData(true);
      
//       const response = await fetchServiceData(serviceId);
//       console.log('📥 Service data response:', response);
      
//       const data = response.data?.data || [];
//       console.log('📊 Service data:', data);
      
//       setServiceData(prev => ({
//         ...prev,
//         [serviceId]: data
//       }));
      
//       return data;
//     } catch (error) {
//       console.error(`❌ Error loading service data for ${serviceId}:`, error);
//       return [];
//     } finally {
//       setLoadingServiceData(false);
//     }
//   };

//   // Calculate total
//   useEffect(() => {
//     console.log('🧮 Calculating total...');
//     calculateTotal();
//   }, [formData.services, formData.days, services]);

//   // Handle category selection and auto-select services
//   useEffect(() => {
//     console.log('🎯 Category selection effect triggered');
//     console.log('📊 formData.category_id:', formData.category_id);
//     console.log('📊 categories.length:', categories.length);
    
//     if (formData.category_id && categories.length > 0) {
//       const category = categories.find(cat => cat.id.toString() === formData.category_id);
//       console.log('🎯 Found category:', category);
      
//       if (category && category.selectedServices) {
//         console.log('🎯 Category has selectedServices:', category.selectedServices);
//         setSelectedCategory(category);
        
//         const autoSelectedServices = {};
//         category.selectedServices.forEach(serviceId => {
//           autoSelectedServices[serviceId.toString()] = {
//             quantity: 1,
//             selectedItems: [],
//             useDefault: true
//           };
//         });
        
//         console.log('🎯 Auto-selected services:', autoSelectedServices);
//         setFormData(prev => {
//           const newFormData = {
//             ...prev,
//             services: { ...prev.services, ...autoSelectedServices }
//           };
//           console.log('🎯 Updated formData with auto-selected services:', newFormData);
//           return newFormData;
//         });
//       } else {
//         console.log('🎯 Category does not have selectedServices or category not found');
//       }
//     }
//   }, [formData.category_id, categories]);

//   const calculateTotal = () => {
//     console.log('🧮 Starting calculateTotal...');
//     let calculatedTotal = 0;
    
//     console.log('📊 Processing services:', Object.entries(formData.services));
    
//     Object.entries(formData.services).forEach(([serviceId, serviceData]) => {
//       console.log(`💰 Processing service ${serviceId}:`, serviceData);
      
//       if (serviceData.quantity > 0) {
//         if (serviceData.selectedItems && serviceData.selectedItems.length > 0 && !serviceData.useDefault) {
//           console.log(`📋 Service ${serviceId} has selected items:`, serviceData.selectedItems);
//           // Calculate based on selected items with individual rates
//           serviceData.selectedItems.forEach(item => {
//             const rate = parseFloat(item.rate) || 0;
//             const itemTotal = rate * formData.days;
//             console.log(`💵 Item rate: ${rate}, days: ${formData.days}, item total: ${itemTotal}`);
//             calculatedTotal += itemTotal;
//           });
//         } else {
//           console.log(`💼 Service ${serviceId} using default rate`);
//           // Use default service rate
//           const service = services.find(s => s.id === serviceId);
//           if (service) {
//             const serviceTotal = service.rate_per_day * serviceData.quantity * formData.days;
//             console.log(`💵 Service rate: ${service.rate_per_day}, quantity: ${serviceData.quantity}, days: ${formData.days}, service total: ${serviceTotal}`);
//             calculatedTotal += serviceTotal;
//           } else {
//             console.warn(`⚠️ Service ${serviceId} not found in services array`);
//           }
//         }
//       } else {
//         console.log(`⏸️ Service ${serviceId} has quantity 0, skipping`);
//       }
//     });
    
//     console.log('💰 Final calculated total:', calculatedTotal);
//     setTotal(calculatedTotal);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     console.log(`📝 Form field changed: ${name} = ${value}`);
    
//     if (errors[name]) {
//       console.log(`🧹 Clearing error for field: ${name}`);
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }

//     setFormData(prev => {
//       const newFormData = {
//         ...prev,
//         [name]: value
//       };
//       console.log('📝 Updated formData:', newFormData);
//       return newFormData;
//     });
//   };

//   // Handle service quantity changes
//   const handleServiceQuantityChange = (serviceId, change) => {
//     console.log(`🔢 Quantity change for service ${serviceId}: ${change}`);
    
//     setFormData(prev => {
//       const currentService = prev.services[serviceId] || { quantity: 0, selectedItems: [], useDefault: true };
//       const newQuantity = Math.max(0, currentService.quantity + change);
      
//       console.log(`🔢 Current quantity: ${currentService.quantity}, new quantity: ${newQuantity}`);
      
//       const newServices = { ...prev.services };
//       if (newQuantity === 0) {
//         console.log(`🗑️ Removing service ${serviceId} (quantity = 0)`);
//         delete newServices[serviceId];
//       } else {
//         console.log(`📊 Updating service ${serviceId} quantity to ${newQuantity}`);
//         newServices[serviceId] = {
//           ...currentService,
//           quantity: newQuantity
//         };
//       }
      
//       const newFormData = {
//         ...prev,
//         services: newServices
//       };
//       console.log('📊 Updated services in formData:', newFormData.services);
//       return newFormData;
//     });
//   };

//   // Open service selection modal
//   const openServiceModal = async (service) => {
//     console.log('🔓 Opening service modal for:', service);
//     setSelectedService(service);
//     setSelectedServiceItems([]);
//     setShowServiceModal(true);
    
//     // Load service-specific data
//     const data = serviceData[service.id] || await loadServiceSpecificData(service.id);
//     console.log('📊 Service items loaded:', data);
//     setSelectedServiceItems(data);
//   };

//   // Handle item selection in modal
//   const handleItemSelection = (item, isSelected) => {
//     console.log(`🎯 Item selection changed: ${item.name}, selected: ${isSelected}`);
    
//     const serviceId = selectedService.id;
    
//     setFormData(prev => {
//       const currentService = prev.services[serviceId] || { quantity: 1, selectedItems: [], useDefault: true };
      
//       let newSelectedItems;
      
//       if (isSelected) {
//         newSelectedItems = [...currentService.selectedItems, item];
//       } else {
//         newSelectedItems = currentService.selectedItems.filter(selected => selected.id !== item.id);
//       }
      
//       return {
//         ...prev,
//         services: {
//           ...prev.services,
//           [serviceId]: {
//             ...currentService,
//             selectedItems: newSelectedItems,
//             useDefault: newSelectedItems.length === 0,
//             quantity: Math.max(newSelectedItems.length, 1)
//           }
//         }
//       };
//     });
//   };

//   // Toggle between default and custom selection
//   const toggleServiceMode = (serviceId) => {
//     setFormData(prev => {
//       const currentService = prev.services[serviceId];
//       const newUseDefault = !currentService.useDefault;
      
//       return {
//         ...prev,
//         services: {
//           ...prev.services,
//           [serviceId]: {
//             ...currentService,
//             useDefault: newUseDefault,
//             selectedItems: newUseDefault ? [] : currentService.selectedItems
//           }
//         }
//       };
//     });
//   };

//   // Enhanced service display
//   const renderServiceItem = (service, index) => {
//     console.log(`🎨 Rendering service item: ${service.service_name} (${service.id})`);
//     const serviceFormData = formData.services[service.id];
//     const isSelected = serviceFormData && serviceFormData.quantity > 0;
    
//     // Check if this service has specific data available
//     const hasServiceData = serviceData[service.id] && serviceData[service.id].length > 0;
    
//     // Debug logging
//     console.log(`🔍 Service ${service.service_name}:`, {
//       serviceId: service.id,
//       hasServiceData,
//       serviceDataLength: serviceData[service.id]?.length || 0,
//       serviceDataKeys: Object.keys(serviceData),
//       allServiceData: serviceData
//     });
    
//     return (
//       <tr key={service.id} className={isSelected ? 'table-success' : ''}>
//         <td>
//           <div className="d-flex align-items-center">
//             <strong>{service.service_name}</strong>
//             {hasServiceData && (
//               <Badge bg="info" className="ms-2 small">
//                 <FontAwesomeIcon icon={faUsers} className="me-1" />
//                 {serviceData[service.id].length} available
//               </Badge>
//             )}
//           </div>
          
//           {/* Show selected items */}
//           {serviceFormData?.selectedItems?.length > 0 && !serviceFormData.useDefault && (
//             <div className="mt-1">
//               {serviceFormData.selectedItems.map((item, idx) => (
//                 <div key={idx} className="small text-success d-flex align-items-center">
//                   <FontAwesomeIcon icon={faCheck} className="me-1" />
//                   <strong>{item.name}</strong>
//                   <Badge bg="success" className="ms-2">₹{parseFloat(item.rate || 0).toLocaleString()}/day</Badge>
//                   {item.is_default && (
//                     <Badge bg="primary" className="ms-1">
//                       <FontAwesomeIcon icon={faAward} className="me-1" />
//                       Default
//                     </Badge>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}
//         </td>
//         <td>
//           {hasServiceData ? (
//             <div>
//               {serviceFormData?.useDefault !== false ? (
//                 <div>
//                   <Badge bg="secondary">₹{service.rate_per_day?.toLocaleString()}/day</Badge>
//                   <div className="small text-muted mt-1">Using default rate</div>
//                 </div>
//               ) : (
//                 <div className="small text-success">Custom selection active</div>
//               )}
//               <Button
//                 variant="outline-primary"
//                 size="sm"
//                 onClick={() => openServiceModal(service)}
//                 className="mt-1"
//               >
//                 <FontAwesomeIcon icon={faUsers} className="me-1" />
//                 {serviceFormData?.useDefault !== false ? 'Choose Specific' : 'Change Selection'}
//               </Button>
//             </div>
//           ) : (
//             <div>
//               <Badge bg="secondary">₹{service.rate_per_day?.toLocaleString()}/day</Badge>
//               <div className="small text-muted mt-1">Standard rate</div>
//               {/* Debug button to test loading data */}
//               <Button
//                 variant="outline-info"
//                 size="sm"
//                 onClick={() => openServiceModal(service)}
//                 className="mt-1"
//               >
//                 <FontAwesomeIcon icon={faUsers} className="me-1" />
//                 Check for Options
//               </Button>
//             </div>
//           )}
//         </td>
//         <td>
//           <div className="d-flex align-items-center gap-2">
//             <Button 
//               variant="outline-danger"
//               size="sm"
//               onClick={() => handleServiceQuantityChange(service.id, -1)}
//               disabled={!isSelected}
//             >
//               <FontAwesomeIcon icon={faMinus} />
//             </Button>
//             <span className="px-3 py-1 bg-light rounded text-center fw-bold" style={{ minWidth: '45px' }}>
//               {serviceFormData?.quantity || 0}
//             </span>
//             <Button 
//               variant="outline-success"
//               size="sm"
//               onClick={() => handleServiceQuantityChange(service.id, 1)}
//             >
//               <FontAwesomeIcon icon={faPlus} />
//             </Button>
//           </div>
//         </td>
//         <td>
//           {isSelected && (
//             <Badge bg="success" className="fw-bold">
//               ₹{(() => {
//                 if (serviceFormData.selectedItems?.length > 0 && !serviceFormData.useDefault) {
//                   return serviceFormData.selectedItems.reduce((sum, item) => sum + (parseFloat(item.rate) || 0), 0) * formData.days;
//                 } else {
//                   return service.rate_per_day * serviceFormData.quantity * formData.days;
//                 }
//               })().toLocaleString()}
//             </Badge>
//           )}
//         </td>
//       </tr>
//     );
//   };

//   // Validation and submit functions
//   const validateForm = () => {
//     console.log('🔍 Starting form validation...');
    
//     const newErrors = {};
    
//     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
//       newErrors.client_name = 'Brand name must be 2–30 letters long';
//     }
    
//     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
//     if (!emailPattern.test(formData.your_email)) {
//       newErrors.your_email = 'Only @tsbi.in emails allowed';
//     }
    
//     if (!formData.project_title || formData.project_title.trim() === '') {
//       newErrors.project_title = 'Project title is required';
//     } else if (formData.project_title.length > 100) {
//       newErrors.project_title = 'Project title must be 1–100 characters long';
//     }
    
//     if (!formData.category_id) {
//       newErrors.category_id = 'Please select a category';
//     }
    
//     if (!formData.location) {
//       newErrors.location = 'Please select a location';
//     }
    
//     if (!formData.shoot_dates) {
//       newErrors.shoot_dates = 'Shoot date is required';
//     }
    
//     if (!formData.delivery_date) {
//       newErrors.delivery_date = 'Delivery date is required';
//     }
    
//     if (Object.keys(formData.services).length === 0) {
//       newErrors.services = 'Please select at least one service';
//     }
    
//     console.log('📋 Validation errors:', newErrors);
//     setErrors(newErrors);
    
//     const isValid = Object.keys(newErrors).length === 0;
//     console.log(`✅ Form validation result: ${isValid ? 'VALID' : 'INVALID'}`);
//     return isValid;
//   };

//   const handleSubmit = async (e) => {
//     console.log('🚀 Form submission started');
//     e.preventDefault();
    
//     if (validateForm()) {
//       console.log('✅ Form validation passed, proceeding with submission');
//       setFormSubmitting(true);
      
//       try {
//         const submissionData = {
//           ...formData,
//           selectedCategory: selectedCategory,
//           serviceDetails: Object.entries(formData.services).map(([serviceId, serviceFormData]) => ({
//             serviceId,
//             ...serviceFormData,
//             service: services.find(s => s.id === serviceId)
//           }))
//         };
        
//         console.log('📤 Submission data prepared:', submissionData);
        
//         await onSubmit(submissionData);
//         console.log('✅ Form submission completed successfully');
        
//       } catch (error) {
//         console.error('❌ Form submission error:', error);
//         setErrors({
//           submission: 'An error occurred while generating the proposal. Please try again.'
//         });
//       } finally {
//         setFormSubmitting(false);
//       }
//     }
//   };

//   // Calculate fiscal year dates
//   const today = new Date();
//   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
//   const fyStart = new Date(fyStartYear, 3, 1);
//   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

//   const effectiveMinDate = today > fyStart ? today : fyStart;
//   const minDate = effectiveMinDate.toISOString().split('T')[0];
//   const maxDate = fyEnd.toISOString().split('T')[0];

//   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
//     ? formData.shoot_dates 
//     : minDate;

//   const handleLogout = () => {
//     console.log('🚪 User logout initiated');
//     logout();
//   };

//   return (
//     <div className="proposal-form-component">
//       {/* Header */}
//       <div className="header bg-white border-bottom py-2">
//         <Container fluid className="px-4">
//           <div className="d-flex justify-content-between align-items-center">
//             <div className="d-flex align-items-center">
//               <img 
//                 src={Logo} 
//                 alt="Company Logo" 
//                 style={{ height: '55px', width: 'auto' }} 
//               />
//             </div>
//             <div className="text-center flex-grow-1">
//               <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
//             </div>

//             <div className="d-flex gap-2">
//               <Button variant="outline-primary" onClick={onDashboardClick} size="sm">
//                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
//                 Dashboard
//               </Button>
//               <Button variant="outline-primary" onClick={onHomeClick} size="sm">
//                 <FontAwesomeIcon icon={faChevronRight} className="me-2" />
//                 Home
//               </Button>
//               <Button variant="outline-danger" onClick={handleLogout} size="sm">
//                 <FontAwesomeIcon icon={faUser} className="me-2" />
//                 Logout
//               </Button>
//             </div>
//           </div>
//         </Container>
//       </div>
      
//       <Container fluid className="py-4">
//         <Row className="justify-content-center">
//           <Col xl={10}>
//             <Card className="shadow-sm border-0 mb-4">
//               <Card.Body className="p-4">
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <div>
//                     <h3 className="mb-1">Create Studio Proposal</h3>
//                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
//                   </div>
//                   {total > 0 && (
//                     <div className="text-end">
//                       <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
//                       <small className="text-muted">Total for {formData.days} day{formData.days !== 1 ? 's' : ''}</small>
//                     </div>
//                   )}
//                 </div>

//                 {/* Error/Success Alerts */}
//                 {errors.submission && (
//                   <Alert variant="danger" dismissible onClose={() => setErrors(prev => {
//                     const newErrors = {...prev};
//                     delete newErrors.submission;
//                     return newErrors;
//                   })}>
//                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
//                     {errors.submission}
//                   </Alert>
//                 )}

//                 {serviceError && (
//                   <Alert variant="danger" dismissible onClose={() => setServiceError('')}>
//                     <FontAwesomeIcon icon={faTimes} className="me-2" />
//                     {serviceError}
//                   </Alert>
//                 )}

//                 <Form onSubmit={handleSubmit}>
//                   {/* Client Information */}
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
//                     Client Information
//                   </h5>
                  
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Brand Name <span className="text-danger">*</span></Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
//                           <Form.Control
//                             type="text"
//                             name="client_name"
//                             value={formData.client_name}
//                             onChange={handleChange}
//                             isInvalid={!!errors.client_name}
//                             placeholder="e.g. Zee TV, Colors"
//                             required
//                           />
//                           <Form.Control.Feedback type="invalid">
//                             {errors.client_name}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                       </Form.Group>
//                     </Col>
                    
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Your Email <span className="text-danger">*</span></Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
//                           <Form.Control
//                             type="email"
//                             name="your_email"
//                             value={formData.your_email}
//                             onChange={handleChange}
//                             isInvalid={!!errors.your_email}
//                             placeholder="e.g. user@tsbi.in"
//                             required
//                           />
//                           <Form.Control.Feedback type="invalid">
//                             {errors.your_email}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                         <Form.Text className="text-muted">
//                           Only @tsbi.in email addresses are allowed
//                         </Form.Text>
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <hr className="my-4" />
                  
//                   {/* Project Details */}
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
//                     Project Details
//                   </h5>
                  
//                   <Form.Group className="mb-3">
//                     <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
//                     <InputGroup hasValidation>
//                       <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
//                       <Form.Control
//                         type="text"
//                         name="project_title"
//                         value={formData.project_title}
//                         onChange={handleChange}
//                         isInvalid={!!errors.project_title}
//                         placeholder="e.g. Product Launch Promo"
//                         required
//                       />
//                       <Form.Control.Feedback type="invalid">
//                         {errors.project_title}
//                       </Form.Control.Feedback>
//                     </InputGroup>
//                   </Form.Group>

//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>
//                           Category Package <span className="text-danger">*</span>
//                           {selectedCategory && (
//                             <Badge bg="success" className="ms-2">
//                               <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
//                               {selectedCategory.services?.length || 0} services auto-selected
//                             </Badge>
//                           )}
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
//                           <Form.Select 
//                             name="category_id"
//                             value={formData.category_id}
//                             onChange={handleChange}
//                             isInvalid={!!errors.category_id}
//                             disabled={categoriesLoading}
//                             required
//                           >
//                             <option value="" disabled>
//                               {categoriesLoading ? 'Loading categories...' : 'Select a category package'}
//                             </option>
//                             {categories.map(category => (
//                               <option key={category.id} value={category.id}>
//                                 {category.name}
//                                 {category.description && ` - ${category.description}`}
//                               </option>
//                             ))}
//                           </Form.Select>
//                           <Form.Control.Feedback type="invalid">
//                             {errors.category_id}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                         {selectedCategory && (
//                           <Form.Text className="text-success">
//                             <FontAwesomeIcon icon={faCheck} className="me-1" />
//                             Services from "{selectedCategory.name}" have been automatically added
//                           </Form.Text>
//                         )}
//                       </Form.Group>
//                     </Col>
                    
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Location <span className="text-danger">*</span></Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
//                           <Form.Select 
//                             name="location"
//                             value={formData.location}
//                             onChange={handleChange}
//                             isInvalid={!!errors.location}
//                             required
//                           >
//                             <option value="" disabled>Select a location</option>
//                             <option value="Mumbai">Mumbai</option>
//                             <option value="Outside Mumbai">Outside Mumbai</option>
//                           </Form.Select>
//                           <Form.Control.Feedback type="invalid">
//                             {errors.location}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   <hr className="my-4" />
                  
//                   {/* Service Selection */}
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
//                     Service Selection & Quantities
//                     <Badge bg="secondary" className="ms-2">
//                       {Object.keys(formData.services).length} services selected
//                     </Badge>
//                   </h5>
                  
//                   {isLoading ? (
//                     <div className="text-center py-4">
//                       <Spinner animation="border" variant="primary" />
//                       <p className="mt-2">Loading available services...</p>
//                     </div>
//                   ) : (
//                     <div className="service-selection-container">
//                       {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => {
//                         const categoryServices = organizedServices[categoryKey];
//                         if (!categoryServices) return null;

//                         return (
//                           <div key={categoryKey} className="mb-4">
//                             {/* Category Header */}
//                             <div className="category-header p-3 mb-3 rounded" style={{ backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}` }}>
//                               <h6 className="mb-0" style={{ color: category.color }}>
//                                 <FontAwesomeIcon icon={category.icon} className="me-2" />
//                                 {category.name}
//                                 <Badge bg="light" text="dark" className="ms-2">
//                                   {categoryKey === 'post-production' 
//                                     ? (categoryServices['all'] || []).length
//                                     : Object.values(categoryServices).flat().length
//                                   } services
//                                 </Badge>
//                               </h6>
//                             </div>

//                             {/* Services Table */}
//                             <div className="table-responsive">
//                               <Table hover className="mb-0">
//                                 <thead className="table-light">
//                                   <tr>
//                                     <th width="35%">Service</th>
//                                     <th width="25%">Rate / Options</th>
//                                     <th width="20%" className="text-center">Quantity</th>
//                                     <th width="20%" className="text-center">Total</th>
//                                   </tr>
//                                 </thead>
//                                 <tbody>
//                                   {categoryKey === 'post-production' ? (
//                                     // Post-production services
//                                     (categoryServices['all'] || []).map(renderServiceItem)
//                                   ) : (
//                                     // Other categories with subcategories
//                                     Object.entries(categoryServices).map(([subcategoryKey, subcategoryServices]) => 
//                                       subcategoryServices.map(renderServiceItem)
//                                     )
//                                   )}
//                                 </tbody>
//                               </Table>
//                             </div>
//                           </div>
//                         );
//                       })}
                      
//                       {errors.services && (
//                         <Alert variant="danger">
//                           <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
//                           {errors.services}
//                         </Alert>
//                       )}
//                     </div>
//                   )}

//                   <hr className="my-4" />

//                   {/* Timeline */}
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
//                     Project Timeline
//                   </h5>
                  
//                   <Row>
//                     <Col md={4}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>Number of Days <span className="text-danger">*</span></Form.Label>
//                         <InputGroup>
//                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
//                           <Form.Control
//                             type="number"
//                             name="days"
//                             value={formData.days}
//                             onChange={handleChange}
//                             min="1"
//                             max="100"
//                             required
//                           />
//                         </InputGroup>
//                       </Form.Group>
//                     </Col>
                    
//                     <Col md={4}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>
//                           Shoot Date <span className="text-danger">*</span>
//                           <OverlayTrigger
//                             placement="top"
//                             overlay={
//                               <Tooltip>
//                                 Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
//                               </Tooltip>
//                             }
//                           >
//                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
//                           </OverlayTrigger>
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
//                           <Form.Control
//                             type="date"
//                             name="shoot_dates"
//                             value={formData.shoot_dates}
//                             onChange={handleChange}
//                             isInvalid={!!errors.shoot_dates}
//                             min={minDate}
//                             max={maxDate}
//                             required
//                           />
//                           <Form.Control.Feedback type="invalid">
//                             {errors.shoot_dates}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                       </Form.Group>
//                     </Col>
                    
//                     <Col md={4}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>
//                           Delivery Date <span className="text-danger">*</span>
//                           <OverlayTrigger
//                             placement="top"
//                             overlay={
//                               <Tooltip>
//                                 Must be on or after shoot date, within fiscal year
//                               </Tooltip>
//                             }
//                           >
//                             <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
//                           </OverlayTrigger>
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text><FontAwesomeIcon icon={faTruck} /></InputGroup.Text>
//                           <Form.Control
//                             type="date"
//                             name="delivery_date"
//                             value={formData.delivery_date}
//                             onChange={handleChange}
//                             isInvalid={!!errors.delivery_date}
//                             min={deliveryMinDate}
//                             max={maxDate}
//                             required
//                           />
//                           <Form.Control.Feedback type="invalid">
//                             {errors.delivery_date}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                       </Form.Group>
//                     </Col>
//                   </Row>

//                   {/* Summary Section */}
//                   {Object.keys(formData.services).length > 0 && (
//                     <>
//                       <hr className="my-4" />
//                       <div className="summary-section p-3 bg-light rounded">
//                         <h6 className="mb-3">Selected Services Summary:</h6>
//                         <Row>
//                           {Object.entries(formData.services).map(([serviceId, serviceFormData]) => {
//                             const service = services.find(s => s.id === serviceId);
//                             if (!service || serviceFormData.quantity === 0) return null;
                            
//                             return (
//                               <Col md={6} key={serviceId} className="mb-2">
//                                 <div className="d-flex justify-content-between align-items-start">
//                                   <div>
//                                     <strong>{service.service_name}</strong>
//                                     {serviceFormData.selectedItems && serviceFormData.selectedItems.length > 0 && !serviceFormData.useDefault ? (
//                                       <div>
//                                         {serviceFormData.selectedItems.map((item, index) => (
//                                           <small key={index} className="d-block text-success">
//                                             • {item.name} - ₹{parseFloat(item.rate || 0).toLocaleString()}/day
//                                             {item.is_default && <span className="text-primary"> (Default)</span>}
//                                           </small>
//                                         ))}
//                                       </div>
//                                     ) : (
//                                       <small className="d-block text-muted">
//                                         Quantity: {serviceFormData.quantity} × ₹{service.rate_per_day.toLocaleString()}/day
//                                       </small>
//                                     )}
//                                   </div>
//                                   <div className="text-end">
//                                     <Badge bg="success">
//                                       ₹{(() => {
//                                         if (serviceFormData.selectedItems && serviceFormData.selectedItems.length > 0 && !serviceFormData.useDefault) {
//                                           return serviceFormData.selectedItems.reduce((sum, item) => sum + (parseFloat(item.rate) || 0), 0) * formData.days;
//                                         } else {
//                                           return service.rate_per_day * serviceFormData.quantity * formData.days;
//                                         }
//                                       })().toLocaleString()}
//                                     </Badge>
//                                   </div>
//                                 </div>
//                               </Col>
//                             );
//                           })}
//                         </Row>
//                         <hr />
//                         <div className="d-flex justify-content-between align-items-center">
//                           <h5 className="mb-0">Total Amount:</h5>
//                           <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
//                         </div>
//                       </div>
//                     </>
//                   )}

//                   <div className="d-grid mt-4">
//                     <Button 
//                       variant="success" 
//                       type="submit" 
//                       size="lg"
//                       disabled={formSubmitting || isLoading}
//                     >
//                       {formSubmitting ? (
//                         <>
//                           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
//                           Generating Proposal...
//                         </>
//                       ) : (
//                         <>
//                           <FontAwesomeIcon icon={faFilePdf} className="me-2" />
//                           Generate Proposal - ₹{total.toLocaleString()}
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>
//         </Row>
//       </Container>

//       {/* Service Selection Modal */}
//       <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             <FontAwesomeIcon icon={faUsers} className="me-2" />
//             Select {selectedService?.service_name}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {loadingServiceData ? (
//             <div className="text-center py-4">
//               <Spinner animation="border" variant="primary" />
//               <p className="mt-2">Loading available options...</p>
//             </div>
//           ) : selectedServiceItems.length > 0 ? (
//             <div>
//               <div className="d-flex justify-content-between align-items-center mb-3">
//                 <p className="text-muted mb-0">Choose specific {selectedService?.service_name.toLowerCase()}s for your project:</p>
//                 <div>
//                   <Button
//                     variant="outline-secondary"
//                     size="sm"
//                     onClick={() => toggleServiceMode(selectedService?.id)}
//                   >
//                     {formData.services[selectedService?.id]?.useDefault !== false ? 'Use Custom Selection' : 'Use Default Rate'}
//                   </Button>
//                 </div>
//               </div>

//               {formData.services[selectedService?.id]?.useDefault !== false ? (
//                 <Alert variant="info">
//                   <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//                   Currently using default rate of ₹{selectedService?.rate_per_day?.toLocaleString()}/day. 
//                   Click "Use Custom Selection" to choose specific {selectedService?.service_name.toLowerCase()}s.
//                 </Alert>
//               ) : (
//                 <div className="table-responsive">
//                   <Table hover>
//                     <thead>
//                       <tr>
//                         <th width="50">Select</th>
//                         <th>Name</th>
//                         <th>Rate per Day</th>
//                         <th>Details</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {selectedServiceItems.map(item => {
//                         const isSelected = formData.services[selectedService?.id]?.selectedItems?.some(selected => selected.id === item.id);
//                         const rate = parseFloat(item.rate) || selectedService?.rate_per_day || 0;
                        
//                         return (
//                           <tr key={item.id} className={isSelected ? 'table-success' : ''}>
//                             <td>
//                               <Form.Check
//                                 type="checkbox"
//                                 checked={isSelected}
//                                 onChange={(e) => handleItemSelection(item, e.target.checked)}
//                               />
//                             </td>
//                             <td>
//                               <div>
//                                 <strong>{item.name}</strong>
//                                 {item.is_default && (
//                                   <Badge bg="primary" className="ms-2">
//                                     <FontAwesomeIcon icon={faAward} className="me-1" />
//                                     Default
//                                   </Badge>
//                                 )}
//                               </div>
//                               {item.experience && (
//                                 <div className="small text-muted">
//                                   Experience: {item.experience} years
//                                 </div>
//                               )}
//                               {item.location && (
//                                 <div className="small text-muted">
//                                   <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
//                                   {item.location}
//                                 </div>
//                               )}
//                             </td>
//                             <td>
//                               <Badge bg="info">₹{rate.toLocaleString()}</Badge>
//                             </td>
//                             <td>
//                               {item.specialization && (
//                                 <div className="small text-muted">{item.specialization}</div>
//                               )}
//                               {item.rating && item.rating > 0 && (
//                                 <div>
//                                   {[...Array(5)].map((_, i) => (
//                                     <FontAwesomeIcon 
//                                       key={i}
//                                       icon={faStar} 
//                                       className={i < item.rating ? 'text-warning' : 'text-light'}
//                                     />
//                                   ))}
//                                 </div>
//                               )}
//                               {item.profile_link && (
//                                 <div>
//                                   <a 
//                                     href={item.profile_link} 
//                                     target="_blank" 
//                                     rel="noopener noreferrer"
//                                     className="small text-primary"
//                                   >
//                                     <FontAwesomeIcon icon={faLink} className="me-1" />
//                                     Portfolio
//                                   </a>
//                                 </div>
//                               )}
//                               {item.contact && (
//                                 <div className="small text-muted">
//                                   Contact: {item.contact}
//                                 </div>
//                               )}
//                             </td>
//                           </tr>
//                         );
//                       })}
//                     </tbody>
//                   </Table>
//                 </div>
//               )}
//             </div>
//           ) : (
//             <div className="text-center py-4">
//               <FontAwesomeIcon icon={faInfoCircle} size="3x" className="text-muted mb-3" />
//               <h6>No specific {selectedService?.service_name.toLowerCase()}s available</h6>
//               <p className="text-muted">
//                 This service doesn't have individual options to choose from. 
//                 You can still add it with the quantity selector using the default rate.
//               </p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
//             Close
//           </Button>
//           {selectedServiceItems.length > 0 && formData.services[selectedService?.id]?.useDefault === false && (
//             <Button 
//               variant="primary" 
//               onClick={() => setShowServiceModal(false)}
//             >
//               <FontAwesomeIcon icon={faCheck} className="me-2" />
//               Confirm Selection ({formData.services[selectedService?.id]?.selectedItems?.length || 0} selected)
//             </Button>
//           )}
//         </Modal.Footer>
//       </Modal>

//       {/* Custom Styles */}
//       <style jsx>{`
//         .header {
//           border-bottom: 1px solid #e9e9e9;
//         }
        
//         .text-purple {
//           color: #8e24aa;
//           font-size: 1.75rem;
//           font-weight: 600;
//         }
        
//         .service-selection-container {
//           max-height: none;
//         }
        
//         .category-header {
//           border-radius: 8px;
//           transition: all 0.2s ease;
//         }
        
//         .table tbody tr {
//           transition: all 0.2s ease;
//         }
        
//         .table tbody tr:hover {
//           background-color: rgba(13, 110, 253, 0.05) !important;
//         }
        
//         .table-success {
//           background-color: rgba(40, 167, 69, 0.1) !important;
//         }
        
//         .summary-section {
//           border: 1px solid #dee2e6;
//         }
        
//         .proposal-form-component .card {
//           transition: box-shadow 0.3s ease;
//         }

//         @media (max-width: 768px) {
//           .text-purple {
//             font-size: 1.25rem;
//           }
          
//           .service-card {
//             margin-bottom: 1rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }

// export default ProposalForm;
import React, { useState, useEffect } from 'react';
import { 
  Form, 
  Button, 
  Card, 
  Alert, 
  Container, 
  Row, 
  Col, 
  InputGroup, 
  Badge,
  Spinner,
  OverlayTrigger,
  Tooltip,
  ListGroup,
  Modal,
  Table
} from 'react-bootstrap';
import { 
  fetchServices, 
  fetchCategories,
  fetchServiceData,
  getServicesWithData
} from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faCheck,
  faTimes,
  faInfoCircle,
  faCalendarAlt,
  faBuilding,
  faEnvelope,
  faTag,
  faMapMarkerAlt,
  faMoneyBillWave,
  faFilePdf,
  faUser,
  faClipboardList,
  faExclamationTriangle,
  faTruck,
  faEdit,
  faCamera,
  faVideo,
  faChevronDown,
  faChevronRight,
  faPlus,
  faMinus,
  faLayerGroup,
  faUsers,
  faStar,
  faEye,
  faLink,
  faAward
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Logo.png';
import { useUserAuth } from '../../contexts/UserAuthContext';

// Service categories structure
const SERVICE_CATEGORIES = {
  'pre-production': {
    name: 'Pre-Production',
    icon: faEdit,
    color: '#17a2b8'
  },
  'production': {
    name: 'Production',
    icon: faCamera,
    color: '#28a745'
  },
  'post-production': {
    name: 'Post Production',
    icon: faVideo,
    color: '#6f42c1'
  }
};

function ProposalForm({ onSubmit, onAdminClick, onHomeClick, onDashboardClick }) {
  const { user, logout } = useUserAuth();
  
  // State management
  const [services, setServices] = useState([]);
  const [categories, setCategories] = useState([]);
  const [serviceData, setServiceData] = useState({}); // Store service-specific data (directors, etc.)
  const [organizedServices, setOrganizedServices] = useState({});
  const [formData, setFormData] = useState({
    client_name: '',
    your_email: '',
    project_title: '',
    category_id: '',
    location: '',
    services: {}, // serviceId: { quantity: 1, selectedItems: [], useDefault: true }
    days: 1,
    shoot_dates: '',
    delivery_date: ''
  });
  const [errors, setErrors] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [serviceError, setServiceError] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  // Modal states
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedServiceItems, setSelectedServiceItems] = useState([]);
  const [loadingServiceData, setLoadingServiceData] = useState(false);

  // Load data on component mount
  useEffect(() => {
    console.log('🚀 Component mounted, loading initial data...');
    const loadInitialData = async () => {
      await loadServices();
      await loadCategories();
      console.log('🎉 All initial data loading completed');
    };
    
    loadInitialData();
  }, []);

  // Load services from API
  const loadServices = async () => {
    try {
      console.log('🔄 Starting loadServices...');
      setIsLoading(true);
      const response = await fetchServices();
      console.log('📥 Raw services response:', response);
      
      const servicesWithStringIds = response.data.map(service => ({
        ...service,
        id: service.id.toString()
      }));
      console.log('🔄 Services with string IDs:', servicesWithStringIds);
      setServices(servicesWithStringIds);
      
      // Organize services by category
      const organized = {};
      servicesWithStringIds.forEach(service => {
        const category = service.category || 'pre-production';
        console.log(`📂 Processing service "${service.service_name}" in category "${category}"`);
        
        if (!organized[category]) {
          organized[category] = {};
        }
        
        if (category === 'post-production') {
          if (!organized[category]['all']) {
            organized[category]['all'] = [];
          }
          organized[category]['all'].push(service);
        } else {
          const subcategory = service.subcategory || 'part-1';
          if (!organized[category][subcategory]) {
            organized[category][subcategory] = [];
          }
          organized[category][subcategory].push(service);
        }
      });
      
      console.log('📊 Final organized services:', organized);
      setOrganizedServices(organized);
      
      // Debug: Check if Director service exists
      const directorService = servicesWithStringIds.find(s => s.service_name.toLowerCase().includes('director'));
      console.log('🎯 Looking for Director service:', directorService);
      
      // Debug: Show all services with their categories
      console.log('📋 All services breakdown:');
      servicesWithStringIds.forEach(service => {
        console.log(`  - ${service.service_name} (ID: ${service.id}) → Category: ${service.category}, Subcategory: ${service.subcategory}`);
      });
    } catch (error) {
      console.error('❌ Error loading services:', error);
      setServiceError('Failed to load services. Please refresh the page or contact support.');
    } finally {
      setIsLoading(false);
      console.log('✅ loadServices completed');
    }
  };

  // Load categories from API
  const loadCategories = async () => {
    try {
      console.log('🔄 Starting loadCategories...');
      setCategoriesLoading(true);
      const response = await fetchCategories();
      console.log('📥 Raw categories response:', response);
      console.log('📊 Categories data:', response.data);
      setCategories(response.data || []);
    } catch (error) {
      console.error('❌ Error loading categories:', error);
      console.log('🔄 Using fallback categories...');
      const fallbackCategories = [
        { id: 'fallback-1', name: 'Digital Bytes', description: 'Short digital content' },
        { id: 'fallback-2', name: 'Piece to Camera', description: 'Direct camera presentations' },
        { id: 'fallback-3', name: 'Digital Video', description: 'Full digital video production' },
        { id: 'fallback-4', name: 'Behind the Scene', description: 'BTS content creation' }
      ];
      console.log('📊 Fallback categories set:', fallbackCategories);
      setCategories(fallbackCategories);
    } finally {
      setCategoriesLoading(false);
      console.log('✅ loadCategories completed');
    }
  };

  // Load service data (directors, cinematographers, etc.)
  const loadServiceSpecificData = async (serviceId) => {
    try {
      console.log(`🔄 Loading service data for service ID: ${serviceId}`);
      setLoadingServiceData(true);
      
      const response = await fetchServiceData(serviceId);
      console.log('📥 Service data response:', response);
      
      const data = response.data?.data || [];
      console.log('📊 Service data:', data);
      
      setServiceData(prev => ({
        ...prev,
        [serviceId]: data
      }));
      
      return data;
    } catch (error) {
      console.error(`❌ Error loading service data for ${serviceId}:`, error);
      return [];
    } finally {
      setLoadingServiceData(false);
    }
  };

  // Calculate total
  useEffect(() => {
    console.log('🧮 Calculating total...');
    calculateTotal();
  }, [formData.services, formData.days, services]);

  // Handle category selection and auto-select services
  useEffect(() => {
    console.log('🎯 Category selection effect triggered');
    console.log('📊 formData.category_id:', formData.category_id);
    console.log('📊 categories.length:', categories.length);
    
    if (formData.category_id && categories.length > 0) {
      const category = categories.find(cat => cat.id.toString() === formData.category_id);
      console.log('🎯 Found category:', category);
      
      if (category && category.selectedServices) {
        console.log('🎯 Category has selectedServices:', category.selectedServices);
        setSelectedCategory(category);
        
        const autoSelectedServices = {};
        category.selectedServices.forEach(serviceId => {
          autoSelectedServices[serviceId.toString()] = {
            quantity: 1,
            selectedItems: [],
            useDefault: true
          };
        });
        
        console.log('🎯 Auto-selected services:', autoSelectedServices);
        setFormData(prev => {
          const newFormData = {
            ...prev,
            services: { ...prev.services, ...autoSelectedServices }
          };
          console.log('🎯 Updated formData with auto-selected services:', newFormData);
          return newFormData;
        });
      } else {
        console.log('🎯 Category does not have selectedServices or category not found');
      }
    }
  }, [formData.category_id, categories]);

  const calculateTotal = () => {
    console.log('🧮 Starting calculateTotal...');
    let calculatedTotal = 0;
    
    console.log('📊 Processing services:', Object.entries(formData.services));
    
    Object.entries(formData.services).forEach(([serviceId, serviceData]) => {
      console.log(`💰 Processing service ${serviceId}:`, serviceData);
      
      if (serviceData.quantity > 0) {
        if (serviceData.selectedItems && serviceData.selectedItems.length > 0 && !serviceData.useDefault) {
          console.log(`📋 Service ${serviceId} has selected items:`, serviceData.selectedItems);
          // Calculate based on selected items with individual rates
          serviceData.selectedItems.forEach(item => {
            const rate = parseFloat(item.rate) || 0;
            const itemTotal = rate * formData.days;
            console.log(`💵 Item rate: ${rate}, days: ${formData.days}, item total: ${itemTotal}`);
            calculatedTotal += itemTotal;
          });
        } else {
          console.log(`💼 Service ${serviceId} using default rate`);
          // Use default service rate
          const service = services.find(s => s.id === serviceId);
          if (service) {
            const serviceTotal = service.rate_per_day * serviceData.quantity * formData.days;
            console.log(`💵 Service rate: ${service.rate_per_day}, quantity: ${serviceData.quantity}, days: ${formData.days}, service total: ${serviceTotal}`);
            calculatedTotal += serviceTotal;
          } else {
            console.warn(`⚠️ Service ${serviceId} not found in services array`);
          }
        }
      } else {
        console.log(`⏸️ Service ${serviceId} has quantity 0, skipping`);
      }
    });
    
    console.log('💰 Final calculated total:', calculatedTotal);
    setTotal(calculatedTotal);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(`📝 Form field changed: ${name} = ${value}`);
    
    if (errors[name]) {
      console.log(`🧹 Clearing error for field: ${name}`);
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }

    setFormData(prev => {
      const newFormData = {
        ...prev,
        [name]: value
      };
      console.log('📝 Updated formData:', newFormData);
      return newFormData;
    });
  };

  // Handle service quantity changes
  const handleServiceQuantityChange = (serviceId, change) => {
    console.log(`🔢 Quantity change for service ${serviceId}: ${change}`);
    
    setFormData(prev => {
      const currentService = prev.services[serviceId] || { quantity: 0, selectedItems: [], useDefault: true };
      const newQuantity = Math.max(0, currentService.quantity + change);
      
      console.log(`🔢 Current quantity: ${currentService.quantity}, new quantity: ${newQuantity}`);
      
      const newServices = { ...prev.services };
      if (newQuantity === 0) {
        console.log(`🗑️ Removing service ${serviceId} (quantity = 0)`);
        delete newServices[serviceId];
      } else {
        console.log(`📊 Updating service ${serviceId} quantity to ${newQuantity}`);
        newServices[serviceId] = {
          ...currentService,
          quantity: newQuantity
        };
      }
      
      const newFormData = {
        ...prev,
        services: newServices
      };
      console.log('📊 Updated services in formData:', newFormData.services);
      return newFormData;
    });
  };

  // Open service selection modal
  const openServiceModal = async (service) => {
    console.log('🔓 Opening service modal for:', service);
    setSelectedService(service);
    setSelectedServiceItems([]);
    setShowServiceModal(true);
    
    // Load service-specific data
    const data = serviceData[service.id] || await loadServiceSpecificData(service.id);
    console.log('📊 Service items loaded:', data);
    setSelectedServiceItems(data);
  };

  // Handle item selection in modal
  const handleItemSelection = (item, isSelected) => {
    console.log(`🎯 Item selection changed: ${item.name}, selected: ${isSelected}`);
    
    const serviceId = selectedService.id;
    
    setFormData(prev => {
      const currentService = prev.services[serviceId] || { quantity: 1, selectedItems: [], useDefault: true };
      
      let newSelectedItems;
      
      if (isSelected) {
        newSelectedItems = [...currentService.selectedItems, item];
      } else {
        newSelectedItems = currentService.selectedItems.filter(selected => selected.id !== item.id);
      }
      
      return {
        ...prev,
        services: {
          ...prev.services,
          [serviceId]: {
            ...currentService,
            selectedItems: newSelectedItems,
            useDefault: newSelectedItems.length === 0,
            quantity: Math.max(newSelectedItems.length, 1)
          }
        }
      };
    });
  };

  // Toggle between default and custom selection
  const toggleServiceMode = (serviceId) => {
    setFormData(prev => {
      const currentService = prev.services[serviceId];
      
      // Check if currentService exists to prevent the error
      if (!currentService) {
        console.warn(`⚠️ No service data found for serviceId: ${serviceId}`);
        return prev;
      }
      
      const newUseDefault = !currentService.useDefault;
      
      return {
        ...prev,
        services: {
          ...prev.services,
          [serviceId]: {
            ...currentService,
            useDefault: newUseDefault,
            selectedItems: newUseDefault ? [] : currentService.selectedItems
          }
        }
      };
    });
  };

  // Enhanced service display
  const renderServiceItem = (service, index) => {
    console.log(`🎨 Rendering service item: ${service.service_name} (${service.id})`);
    const serviceFormData = formData.services[service.id];
    const isSelected = serviceFormData && serviceFormData.quantity > 0;
    
    // Check if this service has specific data available
    const hasServiceData = serviceData[service.id] && serviceData[service.id].length > 0;
    
    // Debug logging
    console.log(`🔍 Service ${service.service_name}:`, {
      serviceId: service.id,
      hasServiceData,
      serviceDataLength: serviceData[service.id]?.length || 0,
      serviceDataKeys: Object.keys(serviceData),
      allServiceData: serviceData
    });
    
    return (
      <tr key={service.id} className={isSelected ? 'table-success' : ''}>
        <td>
          <div className="d-flex align-items-center">
            <strong>{service.service_name}</strong>
            {hasServiceData && (
              <Badge bg="info" className="ms-2 small">
                <FontAwesomeIcon icon={faUsers} className="me-1" />
                {serviceData[service.id].length} available
              </Badge>
            )}
          </div>
          
          {/* Show selected items */}
          {serviceFormData?.selectedItems?.length > 0 && !serviceFormData.useDefault && (
            <div className="mt-1">
              {serviceFormData.selectedItems.map((item, idx) => (
                <div key={idx} className="small text-success d-flex align-items-center">
                  <FontAwesomeIcon icon={faCheck} className="me-1" />
                  <strong>{item.name}</strong>
                  <Badge bg="success" className="ms-2">₹{parseFloat(item.rate || 0).toLocaleString()}/day</Badge>
                  {item.is_default && (
                    <Badge bg="primary" className="ms-1">
                      <FontAwesomeIcon icon={faAward} className="me-1" />
                      Default
                    </Badge>
                  )}
                </div>
              ))}
            </div>
          )}
        </td>
        <td>
          {hasServiceData ? (
            <div>
              {serviceFormData?.useDefault !== false ? (
                <div>
                  <Badge bg="secondary">₹{service.rate_per_day?.toLocaleString()}/day</Badge>
                  <div className="small text-muted mt-1">Using default rate</div>
                </div>
              ) : (
                <div className="small text-success">Custom selection active</div>
              )}
              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => openServiceModal(service)}
                className="mt-1"
              >
                <FontAwesomeIcon icon={faUsers} className="me-1" />
                {serviceFormData?.useDefault !== false ? 'Choose Specific' : 'Change Selection'}
              </Button>
            </div>
          ) : (
            <div>
              <Badge bg="secondary">₹{service.rate_per_day?.toLocaleString()}/day</Badge>
              <div className="small text-muted mt-1">Standard rate</div>
              {/* Debug button to test loading data */}
              <Button
                variant="outline-info"
                size="sm"
                onClick={() => openServiceModal(service)}
                className="mt-1"
              >
                <FontAwesomeIcon icon={faUsers} className="me-1" />
                Check for Options
              </Button>
            </div>
          )}
        </td>
        <td>
          <div className="d-flex align-items-center gap-2">
            <Button 
              variant="outline-danger"
              size="sm"
              onClick={() => handleServiceQuantityChange(service.id, -1)}
              disabled={!isSelected}
            >
              <FontAwesomeIcon icon={faMinus} />
            </Button>
            <span className="px-3 py-1 bg-light rounded text-center fw-bold" style={{ minWidth: '45px' }}>
              {serviceFormData?.quantity || 0}
            </span>
            <Button 
              variant="outline-success"
              size="sm"
              onClick={() => handleServiceQuantityChange(service.id, 1)}
            >
              <FontAwesomeIcon icon={faPlus} />
            </Button>
          </div>
        </td>
        <td>
          {isSelected && (
            <Badge bg="success" className="fw-bold">
              ₹{(() => {
                if (serviceFormData.selectedItems?.length > 0 && !serviceFormData.useDefault) {
                  return serviceFormData.selectedItems.reduce((sum, item) => sum + (parseFloat(item.rate) || 0), 0) * formData.days;
                } else {
                  return service.rate_per_day * serviceFormData.quantity * formData.days;
                }
              })().toLocaleString()}
            </Badge>
          )}
        </td>
      </tr>
    );
  };

  // Validation and submit functions
  const validateForm = () => {
    console.log('🔍 Starting form validation...');
    
    const newErrors = {};
    
    if (formData.client_name.length < 2 || formData.client_name.length > 30) {
      newErrors.client_name = 'Brand name must be 2–30 letters long';
    }
    
    const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
    if (!emailPattern.test(formData.your_email)) {
      newErrors.your_email = 'Only @tsbi.in emails allowed';
    }
    
    if (!formData.project_title || formData.project_title.trim() === '') {
      newErrors.project_title = 'Project title is required';
    } else if (formData.project_title.length > 100) {
      newErrors.project_title = 'Project title must be 1–100 characters long';
    }
    
    if (!formData.category_id) {
      newErrors.category_id = 'Please select a category';
    }
    
    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }
    
    if (!formData.shoot_dates) {
      newErrors.shoot_dates = 'Shoot date is required';
    }
    
    if (!formData.delivery_date) {
      newErrors.delivery_date = 'Delivery date is required';
    }
    
    if (Object.keys(formData.services).length === 0) {
      newErrors.services = 'Please select at least one service';
    }
    
    console.log('📋 Validation errors:', newErrors);
    setErrors(newErrors);
    
    const isValid = Object.keys(newErrors).length === 0;
    console.log(`✅ Form validation result: ${isValid ? 'VALID' : 'INVALID'}`);
    return isValid;
  };

  const handleSubmit = async (e) => {
    console.log('🚀 Form submission started');
    e.preventDefault();
    
    if (validateForm()) {
      console.log('✅ Form validation passed, proceeding with submission');
      setFormSubmitting(true);
      
      try {
        const submissionData = {
          ...formData,
          selectedCategory: selectedCategory,
          serviceDetails: Object.entries(formData.services).map(([serviceId, serviceFormData]) => ({
            serviceId,
            ...serviceFormData,
            service: services.find(s => s.id === serviceId)
          }))
        };
        
        console.log('📤 Submission data prepared:', submissionData);
        
        await onSubmit(submissionData);
        console.log('✅ Form submission completed successfully');
        
      } catch (error) {
        console.error('❌ Form submission error:', error);
        setErrors({
          submission: 'An error occurred while generating the proposal. Please try again.'
        });
      } finally {
        setFormSubmitting(false);
      }
    }
  };

  // Calculate fiscal year dates
  const today = new Date();
  const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
  const fyStart = new Date(fyStartYear, 3, 1);
  const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

  const effectiveMinDate = today > fyStart ? today : fyStart;
  const minDate = effectiveMinDate.toISOString().split('T')[0];
  const maxDate = fyEnd.toISOString().split('T')[0];

  const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
    ? formData.shoot_dates 
    : minDate;

  const handleLogout = () => {
    console.log('🚪 User logout initiated');
    logout();
  };

  return (
    <div className="proposal-form-component">
      {/* Header */}
      <div className="header bg-white border-bottom py-2">
        <Container fluid className="px-4">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <img 
                src={Logo} 
                alt="Company Logo" 
                style={{ height: '55px', width: 'auto' }} 
              />
            </div>
            <div className="text-center flex-grow-1">
              <h1 className="text-purple mb-0">TSBI Studios Quote Portal</h1>
            </div>

            <div className="d-flex gap-2">
              <Button variant="outline-primary" onClick={onDashboardClick} size="sm">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Dashboard
              </Button>
              <Button variant="outline-primary" onClick={onHomeClick} size="sm">
                <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                Home
              </Button>
              <Button variant="outline-danger" onClick={handleLogout} size="sm">
                <FontAwesomeIcon icon={faUser} className="me-2" />
                Logout
              </Button>
            </div>
          </div>
        </Container>
      </div>
      
      <Container fluid className="py-4">
        <Row className="justify-content-center">
          <Col xl={10}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h3 className="mb-1">Create Studio Proposal</h3>
                    <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
                  </div>
                  {total > 0 && (
                    <div className="text-end">
                      <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
                      <small className="text-muted">Total for {formData.days} day{formData.days !== 1 ? 's' : ''}</small>
                    </div>
                  )}
                </div>

                {/* Error/Success Alerts */}
                {errors.submission && (
                  <Alert variant="danger" dismissible onClose={() => setErrors(prev => {
                    const newErrors = {...prev};
                    delete newErrors.submission;
                    return newErrors;
                  })}>
                    <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                    {errors.submission}
                  </Alert>
                )}

                {serviceError && (
                  <Alert variant="danger" dismissible onClose={() => setServiceError('')}>
                    <FontAwesomeIcon icon={faTimes} className="me-2" />
                    {serviceError}
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  {/* Client Information */}
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
                    Client Information
                  </h5>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Brand Name <span className="text-danger">*</span></Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text><FontAwesomeIcon icon={faBuilding} /></InputGroup.Text>
                          <Form.Control
                            type="text"
                            name="client_name"
                            value={formData.client_name}
                            onChange={handleChange}
                            isInvalid={!!errors.client_name}
                            placeholder="e.g. Zee TV, Colors"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.client_name}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Your Email <span className="text-danger">*</span></Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text><FontAwesomeIcon icon={faEnvelope} /></InputGroup.Text>
                          <Form.Control
                            type="email"
                            name="your_email"
                            value={formData.your_email}
                            onChange={handleChange}
                            isInvalid={!!errors.your_email}
                            placeholder="e.g. user@tsbi.in"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.your_email}
                          </Form.Control.Feedback>
                        </InputGroup>
                        <Form.Text className="text-muted">
                          Only @tsbi.in email addresses are allowed
                        </Form.Text>
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr className="my-4" />
                  
                  {/* Project Details */}
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
                    Project Details
                  </h5>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>Project Title <span className="text-danger">*</span></Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="project_title"
                        value={formData.project_title}
                        onChange={handleChange}
                        isInvalid={!!errors.project_title}
                        placeholder="e.g. Product Launch Promo"
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.project_title}
                      </Form.Control.Feedback>
                    </InputGroup>
                  </Form.Group>

                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Category Package <span className="text-danger">*</span>
                          {selectedCategory && (
                            <Badge bg="success" className="ms-2">
                              <FontAwesomeIcon icon={faLayerGroup} className="me-1" />
                              {selectedCategory.services?.length || 0} services auto-selected
                            </Badge>
                          )}
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text><FontAwesomeIcon icon={faTag} /></InputGroup.Text>
                          <Form.Select 
                            name="category_id"
                            value={formData.category_id}
                            onChange={handleChange}
                            isInvalid={!!errors.category_id}
                            disabled={categoriesLoading}
                            required
                          >
                            <option value="" disabled>
                              {categoriesLoading ? 'Loading categories...' : 'Select a category package'}
                            </option>
                            {categories.map(category => (
                              <option key={category.id} value={category.id}>
                                {category.name}
                                {category.description && ` - ${category.description}`}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.category_id}
                          </Form.Control.Feedback>
                        </InputGroup>
                        {selectedCategory && (
                          <Form.Text className="text-success">
                            <FontAwesomeIcon icon={faCheck} className="me-1" />
                            Services from "{selectedCategory.name}" have been automatically added
                          </Form.Text>
                        )}
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>Location <span className="text-danger">*</span></Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text><FontAwesomeIcon icon={faMapMarkerAlt} /></InputGroup.Text>
                          <Form.Select 
                            name="location"
                            value={formData.location}
                            onChange={handleChange}
                            isInvalid={!!errors.location}
                            required
                          >
                            <option value="" disabled>Select a location</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Outside Mumbai">Outside Mumbai</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.location}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>

                  <hr className="my-4" />
                  
                  {/* Service Selection */}
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
                    Service Selection & Quantities
                    <Badge bg="secondary" className="ms-2">
                      {Object.keys(formData.services).length} services selected
                    </Badge>
                    {/* Debug button */}
                    <Button 
                      variant="outline-warning" 
                      size="sm" 
                      className="ms-3"
                      onClick={async () => {
                        console.log('🧪 Testing Director service data load...');
                        const data = await loadServiceSpecificData('63');
                        console.log('🧪 Director data result:', data);
                      }}
                    >
                      Test Director Load
                    </Button>
                  </h5>
                  
                  {isLoading ? (
                    <div className="text-center py-4">
                      <Spinner animation="border" variant="primary" />
                      <p className="mt-2">Loading available services...</p>
                    </div>
                  ) : (
                    <div className="service-selection-container">
                      {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => {
                        const categoryServices = organizedServices[categoryKey];
                        if (!categoryServices) return null;

                        return (
                          <div key={categoryKey} className="mb-4">
                            {/* Category Header */}
                            <div className="category-header p-3 mb-3 rounded" style={{ backgroundColor: `${category.color}15`, borderLeft: `4px solid ${category.color}` }}>
                              <h6 className="mb-0" style={{ color: category.color }}>
                                <FontAwesomeIcon icon={category.icon} className="me-2" />
                                {category.name}
                                <Badge bg="light" text="dark" className="ms-2">
                                  {categoryKey === 'post-production' 
                                    ? (categoryServices['all'] || []).length
                                    : Object.values(categoryServices).flat().length
                                  } services
                                </Badge>
                              </h6>
                            </div>

                            {/* Services Table */}
                            <div className="table-responsive">
                              <Table hover className="mb-0">
                                <thead className="table-light">
                                  <tr>
                                    <th width="35%">Service</th>
                                    <th width="25%">Rate / Options</th>
                                    <th width="20%" className="text-center">Quantity</th>
                                    <th width="20%" className="text-center">Total</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {categoryKey === 'post-production' ? (
                                    // Post-production services
                                    (categoryServices['all'] || []).map(renderServiceItem)
                                  ) : (
                                    // Other categories with subcategories
                                    Object.entries(categoryServices).map(([subcategoryKey, subcategoryServices]) => {
                                      console.log(`🔍 Rendering subcategory: ${subcategoryKey}`, subcategoryServices);
                                      return subcategoryServices.map((service, idx) => {
                                        console.log(`🎯 About to render service: ${service.service_name} (ID: ${service.id})`);
                                        return renderServiceItem(service, idx);
                                      });
                                    })
                                  )}
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        );
                      })}
                      
                      {errors.services && (
                        <Alert variant="danger">
                          <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                          {errors.services}
                        </Alert>
                      )}
                    </div>
                  )}

                  <hr className="my-4" />

                  {/* Timeline */}
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faCalendarAlt} className="me-2 text-primary" />
                    Project Timeline
                  </h5>
                  
                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>Number of Days <span className="text-danger">*</span></Form.Label>
                        <InputGroup>
                          <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                          <Form.Control
                            type="number"
                            name="days"
                            value={formData.days}
                            onChange={handleChange}
                            min="1"
                            max="100"
                            required
                          />
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Shoot Date <span className="text-danger">*</span>
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                Date must be within current fiscal year ({fyStartYear}-{fyStartYear + 1})
                              </Tooltip>
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
                          </OverlayTrigger>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                          <Form.Control
                            type="date"
                            name="shoot_dates"
                            value={formData.shoot_dates}
                            onChange={handleChange}
                            isInvalid={!!errors.shoot_dates}
                            min={minDate}
                            max={maxDate}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.shoot_dates}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Delivery Date <span className="text-danger">*</span>
                          <OverlayTrigger
                            placement="top"
                            overlay={
                              <Tooltip>
                                Must be on or after shoot date, within fiscal year
                              </Tooltip>
                            }
                          >
                            <FontAwesomeIcon icon={faInfoCircle} className="ms-1 text-muted" />
                          </OverlayTrigger>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text><FontAwesomeIcon icon={faTruck} /></InputGroup.Text>
                          <Form.Control
                            type="date"
                            name="delivery_date"
                            value={formData.delivery_date}
                            onChange={handleChange}
                            isInvalid={!!errors.delivery_date}
                            min={deliveryMinDate}
                            max={maxDate}
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.delivery_date}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* Summary Section */}
                  {Object.keys(formData.services).length > 0 && (
                    <>
                      <hr className="my-4" />
                      <div className="summary-section p-3 bg-light rounded">
                        <h6 className="mb-3">Selected Services Summary:</h6>
                        <Row>
                          {Object.entries(formData.services).map(([serviceId, serviceFormData]) => {
                            const service = services.find(s => s.id === serviceId);
                            if (!service || serviceFormData.quantity === 0) return null;
                            
                            return (
                              <Col md={6} key={serviceId} className="mb-2">
                                <div className="d-flex justify-content-between align-items-start">
                                  <div>
                                    <strong>{service.service_name}</strong>
                                    {serviceFormData.selectedItems && serviceFormData.selectedItems.length > 0 && !serviceFormData.useDefault ? (
                                      <div>
                                        {serviceFormData.selectedItems.map((item, index) => (
                                          <small key={index} className="d-block text-success">
                                            • {item.name} - ₹{parseFloat(item.rate || 0).toLocaleString()}/day
                                            {item.is_default && <span className="text-primary"> (Default)</span>}
                                          </small>
                                        ))}
                                      </div>
                                    ) : (
                                      <small className="d-block text-muted">
                                        Quantity: {serviceFormData.quantity} × ₹{service.rate_per_day.toLocaleString()}/day
                                      </small>
                                    )}
                                  </div>
                                  <div className="text-end">
                                    <Badge bg="success">
                                      ₹{(() => {
                                        if (serviceFormData.selectedItems && serviceFormData.selectedItems.length > 0 && !serviceFormData.useDefault) {
                                          return serviceFormData.selectedItems.reduce((sum, item) => sum + (parseFloat(item.rate) || 0), 0) * formData.days;
                                        } else {
                                          return service.rate_per_day * serviceFormData.quantity * formData.days;
                                        }
                                      })().toLocaleString()}
                                    </Badge>
                                  </div>
                                </div>
                              </Col>
                            );
                          })}
                        </Row>
                        <hr />
                        <div className="d-flex justify-content-between align-items-center">
                          <h5 className="mb-0">Total Amount:</h5>
                          <h4 className="mb-0 text-success">₹{total.toLocaleString()}</h4>
                        </div>
                      </div>
                    </>
                  )}

                  <div className="d-grid mt-4">
                    <Button 
                      variant="success" 
                      type="submit" 
                      size="lg"
                      disabled={formSubmitting || isLoading}
                    >
                      {formSubmitting ? (
                        <>
                          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
                          Generating Proposal...
                        </>
                      ) : (
                        <>
                          <FontAwesomeIcon icon={faFilePdf} className="me-2" />
                          Generate Proposal - ₹{total.toLocaleString()}
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Service Selection Modal */}
      <Modal show={showServiceModal} onHide={() => setShowServiceModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faUsers} className="me-2" />
            Select {selectedService?.service_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {loadingServiceData ? (
            <div className="text-center py-4">
              <Spinner animation="border" variant="primary" />
              <p className="mt-2">Loading available options...</p>
            </div>
          ) : selectedServiceItems.length > 0 ? (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="text-muted mb-0">Choose specific {selectedService?.service_name.toLowerCase()}s for your project:</p>
                <div>
                  <Button
                    variant="outline-secondary"
                    size="sm"
                    onClick={() => toggleServiceMode(selectedService?.id)}
                  >
                    {formData.services[selectedService?.id]?.useDefault !== false ? 'Use Custom Selection' : 'Use Default Rate'}
                  </Button>
                </div>
              </div>

              {formData.services[selectedService?.id]?.useDefault !== false ? (
                <Alert variant="info">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  Currently using default rate of ₹{selectedService?.rate_per_day?.toLocaleString()}/day. 
                  Click "Use Custom Selection" to choose specific {selectedService?.service_name.toLowerCase()}s.
                </Alert>
              ) : (
                <div className="table-responsive">
                  <Table hover>
                    <thead>
                      <tr>
                        <th width="50">Select</th>
                        <th>Name</th>
                        <th>Rate per Day</th>
                        <th>Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedServiceItems.map(item => {
                        const isSelected = formData.services[selectedService?.id]?.selectedItems?.some(selected => selected.id === item.id);
                        const rate = parseFloat(item.rate) || selectedService?.rate_per_day || 0;
                        
                        return (
                          <tr key={item.id} className={isSelected ? 'table-success' : ''}>
                            <td>
                              <Form.Check
                                type="checkbox"
                                checked={isSelected}
                                onChange={(e) => handleItemSelection(item, e.target.checked)}
                              />
                            </td>
                            <td>
                              <div>
                                <strong>{item.name}</strong>
                                {item.is_default && (
                                  <Badge bg="primary" className="ms-2">
                                    <FontAwesomeIcon icon={faAward} className="me-1" />
                                    Default
                                  </Badge>
                                )}
                              </div>
                              {item.experience && (
                                <div className="small text-muted">
                                  Experience: {item.experience} years
                                </div>
                              )}
                              {item.location && (
                                <div className="small text-muted">
                                  <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1" />
                                  {item.location}
                                </div>
                              )}
                            </td>
                            <td>
                              <Badge bg="info">₹{rate.toLocaleString()}</Badge>
                            </td>
                            <td>
                              {item.specialization && (
                                <div className="small text-muted">{item.specialization}</div>
                              )}
                              {item.rating && item.rating > 0 && (
                                <div>
                                  {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon 
                                      key={i}
                                      icon={faStar} 
                                      className={i < item.rating ? 'text-warning' : 'text-light'}
                                    />
                                  ))}
                                </div>
                              )}
                              {item.profile_link && (
                                <div>
                                  <a 
                                    href={item.profile_link} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="small text-primary"
                                  >
                                    <FontAwesomeIcon icon={faLink} className="me-1" />
                                    Portfolio
                                  </a>
                                </div>
                              )}
                              {item.contact && (
                                <div className="small text-muted">
                                  Contact: {item.contact}
                                </div>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </Table>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-4">
              <FontAwesomeIcon icon={faInfoCircle} size="3x" className="text-muted mb-3" />
              <h6>No specific {selectedService?.service_name.toLowerCase()}s available</h6>
              <p className="text-muted">
                This service doesn't have individual options to choose from. 
                You can still add it with the quantity selector using the default rate.
              </p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
            Close
          </Button>
          {selectedServiceItems.length > 0 && formData.services[selectedService?.id]?.useDefault === false && (
            <Button 
              variant="primary" 
              onClick={() => setShowServiceModal(false)}
            >
              <FontAwesomeIcon icon={faCheck} className="me-2" />
              Confirm Selection ({formData.services[selectedService?.id]?.selectedItems?.length || 0} selected)
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Custom Styles */}
      <style jsx>{`
        .header {
          border-bottom: 1px solid #e9e9e9;
        }
        
        .text-purple {
          color: #8e24aa;
          font-size: 1.75rem;
          font-weight: 600;
        }
        
        .service-selection-container {
          max-height: none;
        }
        
        .category-header {
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .table tbody tr {
          transition: all 0.2s ease;
        }
        
        .table tbody tr:hover {
          background-color: rgba(13, 110, 253, 0.05) !important;
        }
        
        .table-success {
          background-color: rgba(40, 167, 69, 0.1) !important;
        }
        
        .summary-section {
          border: 1px solid #dee2e6;
        }
        
        .proposal-form-component .card {
          transition: box-shadow 0.3s ease;
        }

        @media (max-width: 768px) {
          .text-purple {
            font-size: 1.25rem;
          }
          
          .service-card {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </div>
  );
}

export default ProposalForm;