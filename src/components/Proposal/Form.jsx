

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
// //   ListGroup
// // } from 'react-bootstrap';
// // import { fetchServices } from '../../services/api';
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
// //   faExclamationTriangle
// // } from '@fortawesome/free-solid-svg-icons';
// // import Logo from '../../assets/Logo.png';

// // function ProposalForm({ onSubmit, onAdminClick }) {
// //   const [services, setServices] = useState([]);
// //   const [formData, setFormData] = useState({
// //     client_name: '',
// //     your_email: '',
// //     project_title: '',
// //     category: '',
// //     location: '',
// //     services: [],
// //     days: 1,
// //     shoot_dates: ''
// //   });
// //   const [errors, setErrors] = useState({});
// //   const [total, setTotal] = useState(0);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [serviceError, setServiceError] = useState('');
// //   const [formSubmitting, setFormSubmitting] = useState(false);

// //   // Load services on component mount
// //   useEffect(() => {
// //     const loadServices = async () => {
// //       setIsLoading(true);
// //       try {
// //         console.log('Fetching services from API...');
// //         const response = await fetchServices();
// //         const servicesWithStringIds = response.data.map(service => ({
// //           ...service,
// //           id: service.id.toString() // Ensure IDs are strings
// //         }));
// //         console.log('Services loaded:', servicesWithStringIds);
// //         setServices(servicesWithStringIds);
// //       } catch (error) {
// //         console.error('Error loading services:', error);
// //         setServiceError('Failed to load services. Please refresh the page or contact support.');
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     };
// //     loadServices();
// //   }, []);

// //   // Calculate total when services or days change
// //   useEffect(() => {
// //     calculateTotal();
// //   }, [formData.services, formData.days, services]);

// //   const calculateTotal = () => {
// //     let calculatedTotal = 0;
// //     formData.services.forEach(serviceId => {
// //       const service = services.find(s => s.id === serviceId);
// //       if (service) {
// //         calculatedTotal += service.rate_per_day * formData.days;
// //       }
// //     });
// //     console.log('Calculated total:', calculatedTotal);
// //     setTotal(calculatedTotal);
// //   };

// //   const handleChange = (e) => {
// //     const { name, value, type, checked } = e.target;
// //     console.log('Input changed:', { name, value, type, checked });

// //     // Clear specific error when field is changed
// //     if (errors[name]) {
// //       setErrors(prev => {
// //         const newErrors = {...prev};
// //         delete newErrors[name];
// //         return newErrors;
// //       });
// //     }

// //     setFormData(prev => {
// //       if (type === 'checkbox') {
// //         const newServices = checked
// //           ? [...prev.services, value]
// //           : prev.services.filter(id => id !== value);
        
// //         console.log('Updated services selection:', newServices);
// //         return {
// //           ...prev,
// //           services: newServices
// //         };
// //       }
      
// //       return {
// //         ...prev,
// //         [name]: value
// //       };
// //     });
// //   };

// //   const validateForm = () => {
// //     const newErrors = {};
    
// //     // Client name validation
// //     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
// //       newErrors.client_name = 'Brand name must be 2–30 letters long';
// //     }
    
// //     // Email validation
// //     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
// //     if (!emailPattern.test(formData.your_email)) {
// //       newErrors.your_email = 'Only @tsbi.in emails allowed';
// //     }
    
// //     // Project title validation
// //     // if (!formData.project_title || formData.project_title.trim() === '') {
// //     //   newErrors.project_title = 'Project title is required';
// //     // }
// //     if (!formData.project_title || formData.project_title.trim() === '') {
// //       newErrors.project_title = 'Project title is required';
// //     } else if (formData.project_title.length > 100) {
// //       newErrors.project_title = 'Project title must be 1–100 characters long';
// //     }
    
// //     // Category validation
// //     if (!formData.category) {
// //       newErrors.category = 'Please select a category';
// //     }
    
// //     // Location validation
// //     if (!formData.location) {
// //       newErrors.location = 'Please select a location';
// //     }
    
// //     // Shoot date validation
// //     if (!formData.shoot_dates) {
// //       newErrors.shoot_dates = 'Shoot date is required';
// //     } else {
// //       const shootDate = new Date(formData.shoot_dates);
// //       const today = new Date();
// //       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// //       const fyStart = new Date(fyStartYear, 3, 1); // April 1
// //       // const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
// //       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

      
// //       if (shootDate < fyStart || shootDate > fyEnd) {
// //         newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
// //       }
// //     }
    
// //     // Services validation
// //     if (formData.services.length === 0) {
// //       newErrors.services = 'Please select at least one service';
// //     }
    
// //     console.log('Form validation errors:', newErrors);
// //     setErrors(newErrors);
// //     return Object.keys(newErrors).length === 0;
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log('Form submission attempted');
    
// //     if (validateForm()) {
// //       console.log('Form is valid, submitting:', formData);
// //       setFormSubmitting(true);
// //       try {
// //         await onSubmit(formData);
// //       } catch (error) {
// //         console.error('Form submission error:', error);
// //         setErrors({
// //           submission: 'An error occurred while generating the proposal. Please try again.'
// //         });
// //       } finally {
// //         setFormSubmitting(false);
// //       }
// //     } else {
// //       console.log('Form validation failed');
// //       // Scroll to the first error
// //       const firstErrorField = Object.keys(errors)[0];
// //       if (firstErrorField) {
// //         const element = document.getElementsByName(firstErrorField)[0];
// //         if (element) {
// //           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
// //         }
// //       }
// //     }
// //   };

// //   // Calculate fiscal year dates for min/max date inputs
// //   // const today = new Date();
// //   // const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// //   // const fyStart = new Date(fyStartYear, 3, 1); // April 1
// //   // const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
  
// //   // const minDate = fyStart.toISOString().split('T')[0];
// //   // const maxDate = fyEnd.toISOString().split('T')[0];
// //   const today = new Date();
// // const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
// // const fyStart = new Date(fyStartYear, 3, 1); // April 1
// // // const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
// // const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

// // // Choose today or fiscal start, whichever is later
// // const effectiveMinDate = today > fyStart ? today : fyStart;

// // const minDate = effectiveMinDate.toISOString().split('T')[0];
// // const maxDate = fyEnd.toISOString().split('T')[0];


// //   // Get selected services details for summary
// //   const selectedServicesDetails = formData.services.map(id => {
// //     const service = services.find(s => s.id === id);
// //     return service ? {
// //       name: service.service_name,
// //       rate: service.rate_per_day
// //     } : null;
// //   }).filter(Boolean);

// //   return (
// //     <div className="proposal-form-component">
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
// //             <Button 
// //               variant="outline-danger" 
// //               onClick={onAdminClick}
// //               className="px-3 py-1"
// //             >
// //               <FontAwesomeIcon icon={faUser} className="me-2" />
// //               Admin Login
// //             </Button>
// //           </div>
// //         </Container>
// //       </div>
      
// //       <Container className="py-4">
        
// //         <Row>
// //           <Col lg={8}>
// //             <Card className="shadow-sm border-0 mb-4">
// //               <Card.Body className="p-4">
// //                 <div className="d-flex justify-content-between align-items-center mb-4">
// //                   <div>
// //                     <h3 className="mb-1">Create Studio Proposal</h3>
// //                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
// //                   </div>
// //                   <Badge bg="info" className="py-2 px-3">
// //                     <FontAwesomeIcon icon={faFilePdf} className="me-1" />
// //                     New Quote
// //                   </Badge>
// //                 </div>

// //                 {errors.submission && (
// //                   <Alert 
// //                     variant="danger" 
// //                     dismissible 
// //                     onClose={() => setErrors(prev => {
// //                       const newErrors = {...prev};
// //                       delete newErrors.submission;
// //                       return newErrors;
// //                     })}
// //                     className="border-0 shadow-sm mb-4"
// //                   >
// //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// //                     {errors.submission}
// //                   </Alert>
// //                 )}

// //                 {serviceError && (
// //                   <Alert 
// //                     variant="danger" 
// //                     dismissible 
// //                     onClose={() => setServiceError('')}
// //                     className="border-0 shadow-sm mb-4"
// //                   >
// //                     <FontAwesomeIcon icon={faTimes} className="me-2" />
// //                     {serviceError}
// //                   </Alert>
// //                 )}

// //                 {Object.keys(errors).length > 0 && !errors.submission && (
// //                   <Alert 
// //                     variant="warning" 
// //                     dismissible 
// //                     className="border-0 shadow-sm mb-4"
// //                   >
// //                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// //                     Please fix the highlighted errors below to continue.
// //                   </Alert>
// //                 )}

// //                 <Form onSubmit={handleSubmit}>
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
// //                     Client Information
// //                   </h5>
                  
// //                   <Row>
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>
// //                           Brand Name <span className="text-danger">*</span>
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text className="bg-light">
// //                             <FontAwesomeIcon icon={faBuilding} />
// //                           </InputGroup.Text>
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
// //                         <Form.Label>
// //                           Your Email <span className="text-danger">*</span>
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text className="bg-light">
// //                             <FontAwesomeIcon icon={faEnvelope} />
// //                           </InputGroup.Text>
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
                  
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
// //                     Project Details
// //                   </h5>
                  
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>
// //                       Project Title <span className="text-danger">*</span>
// //                     </Form.Label>
// //                     <InputGroup hasValidation>
// //                       <InputGroup.Text className="bg-light">
// //                         <FontAwesomeIcon icon={faTag} />
// //                       </InputGroup.Text>
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
// //                           Category <span className="text-danger">*</span>
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text className="bg-light">
// //                             <FontAwesomeIcon icon={faTag} />
// //                           </InputGroup.Text>
// //                           <Form.Select 
// //                             name="category"
// //                             value={formData.category}
// //                             onChange={handleChange}
// //                             isInvalid={!!errors.category}
// //                             required
// //                           >
// //                             <option value="" disabled>Select a option</option>
// //                             <option value="Digital Bytes">Digital Bytes</option>
// //                             <option value="Piece to Camera">Piece to Camera</option>
// //                             <option value="Digital Video">Digital Video</option>
// //                             <option value="Behind the Scene">Behind the Scene</option>
// //                           </Form.Select>
// //                           <Form.Control.Feedback type="invalid">
// //                             {errors.category}
// //                           </Form.Control.Feedback>
// //                         </InputGroup>
// //                       </Form.Group>
// //                     </Col>
                    
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>
// //                           Location <span className="text-danger">*</span>
// //                         </Form.Label>
// //                         <InputGroup hasValidation>
// //                           <InputGroup.Text className="bg-light">
// //                             <FontAwesomeIcon icon={faMapMarkerAlt} />
// //                           </InputGroup.Text>
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
                  
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// //                     Services & Scheduling
// //                   </h5>
                  
// //                   <Form.Group className="mb-4">
// //                     <Form.Label>
// //                       Select Required Services <span className="text-danger">*</span>
// //                     </Form.Label>
// //                     {isLoading ? (
// //                       <div className="text-center py-4">
// //                         <Spinner animation="border" variant="primary" />
// //                         <p className="mt-2">Loading available services...</p>
// //                       </div>
// //                     ) : services.length > 0 ? (
// //                       <div className="service-selection p-3 border rounded bg-light">
// //                         <Row>
// //                           {services.map(service => (
// //                             <Col md={6} key={service.id}>
// //                               <Form.Check
// //                                 type="checkbox"
// //                                 id={`service-${service.id}`}
// //                                 className="mb-2 d-flex align-items-center"
// //                               >
// //                                 <Form.Check.Input
// //                                   type="checkbox"
// //                                   value={service.id}
// //                                   checked={formData.services.includes(service.id)}
// //                                   onChange={handleChange}
// //                                   name="services"
// //                                   isInvalid={!!errors.services && formData.services.length === 0}
// //                                 />
// //                                 <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
// //                                   <span>{service.service_name}</span>
// //                                   {/* <Badge bg="light" text="dark" className="ms-2 rate-display">
// //                                     ₹{service.rate_per_day.toLocaleString()}/day
// //                                   </Badge> */}
// //                                 </Form.Check.Label>
// //                               </Form.Check>
// //                             </Col>
// //                           ))}
// //                         </Row>
// //                         {errors.services && (
// //                           <div className="text-danger small mt-2">
// //                             <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
// //                             {errors.services}
// //                           </div>
// //                         )}
// //                       </div>
// //                     ) : (
// //                       <Alert variant="warning">
// //                         No services available. Please contact the administrator.
// //                       </Alert>
// //                     )}
// //                   </Form.Group>

// //                   <Row>
// //                     <Col md={6}>
// //                       <Form.Group className="mb-3">
// //                         <Form.Label>
// //                           Number of Days <span className="text-danger">*</span>
// //                         </Form.Label>
// //                         <InputGroup>
// //                           <InputGroup.Text className="bg-light">
// //                             <FontAwesomeIcon icon={faCalendarAlt} />
// //                           </InputGroup.Text>
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
                    
// //                     <Col md={6}>
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
// //                           <InputGroup.Text className="bg-light">
// //                             <FontAwesomeIcon icon={faCalendarAlt} />
// //                           </InputGroup.Text>
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
// //                   </Row>

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
// //                           Generate Proposal
// //                         </>
// //                       )}
// //                     </Button>
// //                   </div>
// //                 </Form>
// //               </Card.Body>
// //             </Card>
// //           </Col>

// //           <Col lg={4}>
// //             <div className="sticky-top" style={{ top: '20px' }}>
// //               <Card className="shadow-sm border-0 mb-4">
// //                 <Card.Body className="p-4">
// //                   <h5 className="mb-3">
// //                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
// //                     Quote Summary
// //                   </h5>
                  
// //                   {formData.client_name && (
// //                     <p>
// //                       <strong>Client:</strong> {formData.client_name}
// //                     </p>
// //                   )}
                  
// //                   {formData.project_title && (
// //                     <p>
// //                       <strong>Project:</strong> {formData.project_title}
// //                     </p>
// //                   )}
                  
// //                   {formData.days > 0 && (
// //                     <p>
// //                       <strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}
// //                     </p>
// //                   )}

// //                   <div className="mb-3">
// //                     <strong>Selected Services:</strong>
// //                     {selectedServicesDetails.length > 0 ? (
// //                       <ListGroup variant="flush" className="mt-2">
// //                         {selectedServicesDetails.map((service, index) => (
// //                           <ListGroup.Item key={index} className="px-0 py-2 d-flex justify-content-between align-items-center border-bottom">
// //                             <span>{service.name}</span>
// //                             <Badge bg="light" text="dark" className="rate-display">
// //                               ₹{service.rate * formData.days} 
// //                               <span className="ms-1 text-muted">
// //                                 (₹{service.rate}/day × {formData.days})
// //                               </span>
// //                             </Badge>
// //                           </ListGroup.Item>
// //                         ))}
// //                       </ListGroup>
// //                     ) : (
// //                       <p className="text-muted">No services selected</p>
// //                     )}
// //                   </div>

// //                   <hr />
                  
// //                   <div className="d-flex justify-content-between align-items-center">
// //                     <h4 className="mb-0">Total:</h4>
// //                     <h4 className="mb-0 rate-display">₹{total.toLocaleString()}</h4>
// //                   </div>
                  
// //                   {selectedServicesDetails.length > 0 && (
// //                     <div className="mt-3 text-center">
// //                       <small className="text-muted">
// //                         <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// //                         This is an estimate based on your selections
// //                       </small>
// //                     </div>
// //                   )}
// //                 </Card.Body>
// //               </Card>
              
// //               <Card className="shadow-sm border-0 bg-light">
// //                 <Card.Body className="p-3">
// //                   <div className="d-flex align-items-center">
// //                     <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
// //                     <small>
// //                       <strong>Need help?</strong> Contact the admin team at{' '}
// //                       <a href="mailto:admin@tsbi.in">tech@tsbi.in</a> for assistance.
// //                     </small>
// //                   </div>
// //                 </Card.Body>
// //               </Card>
// //             </div>
// //           </Col>
// //         </Row>
// //       </Container>

// //       {/* CSS for animation, hover effects, and rate display */}
// //       <style jsx>{`
// //         .header {
// //           border-bottom: 1px solid #e9e9e9;
// //         }
        
// //         .text-purple {
// //           color: #8e24aa;
// //           font-size: 1.75rem;
// //           font-weight: 600;
// //         }
        
// //         .proposal-form-component .card {
// //           transition: box-shadow 0.3s ease;
// //         }
        
// //         .proposal-form-component .card:hover {
// //           box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
// //         }
        
// //         .rate-display {
// //           font-family: monospace;
// //           white-space: nowrap;
// //         }
        
// //         .service-selection {
// //           max-height: 300px;
// //           overflow-y: auto;
// //         }
        
// //         .form-check {
// //           transition: background-color 0.2s ease;
// //         }
        
// //         .form-check:hover {
// //           background-color: rgba(13, 110, 253, 0.05);
// //         }
        
// //         .sticky-top {
// //           z-index: 100;
// //         }

// //         @media (max-width: 768px) {
// //           .text-purple {
// //             font-size: 1.25rem;
// //           }
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default ProposalForm;
// // Updated ProposalForm component with Delivery Date field

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
//   ListGroup
// } from 'react-bootstrap';
// import { fetchServices } from '../../services/api';
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
//   faTruck
// } from '@fortawesome/free-solid-svg-icons';
// import Logo from '../../assets/Logo.png';

// function ProposalForm({ onSubmit, onAdminClick }) {
//   const [services, setServices] = useState([]);
//   const [formData, setFormData] = useState({
//     client_name: '',
//     your_email: '',
//     project_title: '',
//     category: '',
//     location: '',
//     services: [],
//     days: 1,
//     shoot_dates: '',
//     delivery_date: '' // Add delivery_date field
//   });
//   const [errors, setErrors] = useState({});
//   const [total, setTotal] = useState(0);
//   const [isLoading, setIsLoading] = useState(true);
//   const [serviceError, setServiceError] = useState('');
//   const [formSubmitting, setFormSubmitting] = useState(false);

//   // Load services on component mount
//   useEffect(() => {
//     const loadServices = async () => {
//       setIsLoading(true);
//       try {
//         console.log('Fetching services from API...');
//         const response = await fetchServices();
//         const servicesWithStringIds = response.data.map(service => ({
//           ...service,
//           id: service.id.toString() // Ensure IDs are strings
//         }));
//         console.log('Services loaded:', servicesWithStringIds);
//         setServices(servicesWithStringIds);
//       } catch (error) {
//         console.error('Error loading services:', error);
//         setServiceError('Failed to load services. Please refresh the page or contact support.');
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     loadServices();
//   }, []);

//   // Calculate total when services or days change
//   useEffect(() => {
//     calculateTotal();
//   }, [formData.services, formData.days, services]);

//   // Update delivery date min when shoot date changes
//   useEffect(() => {
//     if (formData.shoot_dates && !formData.delivery_date) {
//       // Clear any delivery date errors since we'll be setting a new min date
//       if (errors.delivery_date) {
//         setErrors(prev => {
//           const newErrors = {...prev};
//           delete newErrors.delivery_date;
//           return newErrors;
//         });
//       }
//     }
//   }, [formData.shoot_dates]);

//   const calculateTotal = () => {
//     let calculatedTotal = 0;
//     formData.services.forEach(serviceId => {
//       const service = services.find(s => s.id === serviceId);
//       if (service) {
//         calculatedTotal += service.rate_per_day * formData.days;
//       }
//     });
//     console.log('Calculated total:', calculatedTotal);
//     setTotal(calculatedTotal);
//   };

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     console.log('Input changed:', { name, value, type, checked });

//     // Clear specific error when field is changed
//     if (errors[name]) {
//       setErrors(prev => {
//         const newErrors = {...prev};
//         delete newErrors[name];
//         return newErrors;
//       });
//     }

//     setFormData(prev => {
//       if (type === 'checkbox') {
//         const newServices = checked
//           ? [...prev.services, value]
//           : prev.services.filter(id => id !== value);
        
//         console.log('Updated services selection:', newServices);
//         return {
//           ...prev,
//           services: newServices
//         };
//       }
      
//       return {
//         ...prev,
//         [name]: value
//       };
//     });
//   };

//   const validateForm = () => {
//     const newErrors = {};
    
//     // Client name validation
//     if (formData.client_name.length < 2 || formData.client_name.length > 30) {
//       newErrors.client_name = 'Brand name must be 2–30 letters long';
//     }
    
//     // Email validation
//     const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
//     if (!emailPattern.test(formData.your_email)) {
//       newErrors.your_email = 'Only @tsbi.in emails allowed';
//     }
    
//     // Project title validation
//     if (!formData.project_title || formData.project_title.trim() === '') {
//       newErrors.project_title = 'Project title is required';
//     } else if (formData.project_title.length > 100) {
//       newErrors.project_title = 'Project title must be 1–100 characters long';
//     }
    
//     // Category validation
//     if (!formData.category) {
//       newErrors.category = 'Please select a category';
//     }
    
//     // Location validation
//     if (!formData.location) {
//       newErrors.location = 'Please select a location';
//     }
    
//     // Shoot date validation
//     if (!formData.shoot_dates) {
//       newErrors.shoot_dates = 'Shoot date is required';
//     } else {
//       const shootDate = new Date(formData.shoot_dates);
//       const today = new Date();
//       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
//       const fyStart = new Date(fyStartYear, 3, 1); // April 1
//       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

//       if (shootDate < fyStart || shootDate > fyEnd) {
//         newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
//       }
//     }
    
//     // Delivery date validation
//     if (!formData.delivery_date) {
//       newErrors.delivery_date = 'Delivery date is required';
//     } else {
//       const deliveryDate = new Date(formData.delivery_date);
//       const shootDate = formData.shoot_dates ? new Date(formData.shoot_dates) : null;
//       const today = new Date();
//       const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
//       const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

//       if (deliveryDate > fyEnd) {
//         newErrors.delivery_date = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
//       } else if (shootDate && deliveryDate < shootDate) {
//         newErrors.delivery_date = 'Delivery date must be on or after shoot date';
//       }
//     }
    
//     // Services validation
//     if (formData.services.length === 0) {
//       newErrors.services = 'Please select at least one service';
//     }
    
//     console.log('Form validation errors:', newErrors);
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log('Form submission attempted');
    
//     if (validateForm()) {
//       console.log('Form is valid, submitting:', formData);
//       setFormSubmitting(true);
//       try {
//         await onSubmit(formData);
//       } catch (error) {
//         console.error('Form submission error:', error);
//         setErrors({
//           submission: 'An error occurred while generating the proposal. Please try again.'
//         });
//       } finally {
//         setFormSubmitting(false);
//       }
//     } else {
//       console.log('Form validation failed');
//       // Scroll to the first error
//       const firstErrorField = Object.keys(errors)[0];
//       if (firstErrorField) {
//         const element = document.getElementsByName(firstErrorField)[0];
//         if (element) {
//           element.scrollIntoView({ behavior: 'smooth', block: 'center' });
//         }
//       }
//     }
//   };

//   // Calculate fiscal year dates for min/max date inputs
//   const today = new Date();
//   const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
//   const fyStart = new Date(fyStartYear, 3, 1); // April 1
//   const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

//   // Choose today or fiscal start, whichever is later
//   const effectiveMinDate = today > fyStart ? today : fyStart;

//   const minDate = effectiveMinDate.toISOString().split('T')[0];
//   const maxDate = fyEnd.toISOString().split('T')[0];

//   // Get min date for delivery date (should be shoot date or today, whichever is later)
//   const deliveryMinDate = formData.shoot_dates && formData.shoot_dates > minDate 
//     ? formData.shoot_dates 
//     : minDate;

//   // Get selected services details for summary
//   const selectedServicesDetails = formData.services.map(id => {
//     const service = services.find(s => s.id === id);
//     return service ? {
//       name: service.service_name,
//       rate: service.rate_per_day
//     } : null;
//   }).filter(Boolean);

//   return (
//     <div className="proposal-form-component">
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
//             <Button 
//               variant="outline-danger" 
//               onClick={onAdminClick}
//               className="px-3 py-1"
//             >
//               <FontAwesomeIcon icon={faUser} className="me-2" />
//               Admin Login
//             </Button>
//           </div>
//         </Container>
//       </div>
      
//       <Container className="py-4">
        
//         <Row>
//           <Col lg={8}>
//             <Card className="shadow-sm border-0 mb-4">
//               <Card.Body className="p-4">
//                 <div className="d-flex justify-content-between align-items-center mb-4">
//                   <div>
//                     <h3 className="mb-1">Create Studio Proposal</h3>
//                     <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
//                   </div>
//                   <Badge bg="info" className="py-2 px-3">
//                     <FontAwesomeIcon icon={faFilePdf} className="me-1" />
//                     New Quote
//                   </Badge>
//                 </div>

//                 {errors.submission && (
//                   <Alert 
//                     variant="danger" 
//                     dismissible 
//                     onClose={() => setErrors(prev => {
//                       const newErrors = {...prev};
//                       delete newErrors.submission;
//                       return newErrors;
//                     })}
//                     className="border-0 shadow-sm mb-4"
//                   >
//                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
//                     {errors.submission}
//                   </Alert>
//                 )}

//                 {serviceError && (
//                   <Alert 
//                     variant="danger" 
//                     dismissible 
//                     onClose={() => setServiceError('')}
//                     className="border-0 shadow-sm mb-4"
//                   >
//                     <FontAwesomeIcon icon={faTimes} className="me-2" />
//                     {serviceError}
//                   </Alert>
//                 )}

//                 {Object.keys(errors).length > 0 && !errors.submission && (
//                   <Alert 
//                     variant="warning" 
//                     dismissible 
//                     className="border-0 shadow-sm mb-4"
//                   >
//                     <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
//                     Please fix the highlighted errors below to continue.
//                   </Alert>
//                 )}

//                 <Form onSubmit={handleSubmit}>
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
//                     Client Information
//                   </h5>
                  
//                   <Row>
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>
//                           Brand Name <span className="text-danger">*</span>
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faBuilding} />
//                           </InputGroup.Text>
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
//                         <Form.Label>
//                           Your Email <span className="text-danger">*</span>
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faEnvelope} />
//                           </InputGroup.Text>
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
                  
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
//                     Project Details
//                   </h5>
                  
//                   <Form.Group className="mb-3">
//                     <Form.Label>
//                       Project Title <span className="text-danger">*</span>
//                     </Form.Label>
//                     <InputGroup hasValidation>
//                       <InputGroup.Text className="bg-light">
//                         <FontAwesomeIcon icon={faTag} />
//                       </InputGroup.Text>
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
//                           Category <span className="text-danger">*</span>
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faTag} />
//                           </InputGroup.Text>
//                           <Form.Select 
//                             name="category"
//                             value={formData.category}
//                             onChange={handleChange}
//                             isInvalid={!!errors.category}
//                             required
//                           >
//                             <option value="" disabled>Select a option</option>
//                             <option value="Digital Bytes">Digital Bytes</option>
//                             <option value="Piece to Camera">Piece to Camera</option>
//                             <option value="Digital Video">Digital Video</option>
//                             <option value="Behind the Scene">Behind the Scene</option>
//                           </Form.Select>
//                           <Form.Control.Feedback type="invalid">
//                             {errors.category}
//                           </Form.Control.Feedback>
//                         </InputGroup>
//                       </Form.Group>
//                     </Col>
                    
//                     <Col md={6}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>
//                           Location <span className="text-danger">*</span>
//                         </Form.Label>
//                         <InputGroup hasValidation>
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faMapMarkerAlt} />
//                           </InputGroup.Text>
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
                  
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
//                     Services & Scheduling
//                   </h5>
                  
//                   <Form.Group className="mb-4">
//                     <Form.Label>
//                       Select Required Services <span className="text-danger">*</span>
//                     </Form.Label>
//                     {isLoading ? (
//                       <div className="text-center py-4">
//                         <Spinner animation="border" variant="primary" />
//                         <p className="mt-2">Loading available services...</p>
//                       </div>
//                     ) : services.length > 0 ? (
//                       <div className="service-selection p-3 border rounded bg-light">
//                         <Row>
//                           {services.map(service => (
//                             <Col md={6} key={service.id}>
//                               <Form.Check
//                                 type="checkbox"
//                                 id={`service-${service.id}`}
//                                 className="mb-2 d-flex align-items-center"
//                               >
//                                 <Form.Check.Input
//                                   type="checkbox"
//                                   value={service.id}
//                                   checked={formData.services.includes(service.id)}
//                                   onChange={handleChange}
//                                   name="services"
//                                   isInvalid={!!errors.services && formData.services.length === 0}
//                                 />
//                                 <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
//                                   <span>{service.service_name}</span>
//                                 </Form.Check.Label>
//                               </Form.Check>
//                             </Col>
//                           ))}
//                         </Row>
//                         {errors.services && (
//                           <div className="text-danger small mt-2">
//                             <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
//                             {errors.services}
//                           </div>
//                         )}
//                       </div>
//                     ) : (
//                       <Alert variant="warning">
//                         No services available. Please contact the administrator.
//                       </Alert>
//                     )}
//                   </Form.Group>

//                   <Row>
//                     <Col md={4}>
//                       <Form.Group className="mb-3">
//                         <Form.Label>
//                           Number of Days <span className="text-danger">*</span>
//                         </Form.Label>
//                         <InputGroup>
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faCalendarAlt} />
//                           </InputGroup.Text>
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
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faCalendarAlt} />
//                           </InputGroup.Text>
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
                    
//                     {/* New Delivery Date Field */}
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
//                           <InputGroup.Text className="bg-light">
//                             <FontAwesomeIcon icon={faTruck} />
//                           </InputGroup.Text>
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
//                           Generate Proposal
//                         </>
//                       )}
//                     </Button>
//                   </div>
//                 </Form>
//               </Card.Body>
//             </Card>
//           </Col>

//           <Col lg={4}>
//             <div className="sticky-top" style={{ top: '20px' }}>
//               <Card className="shadow-sm border-0 mb-4">
//                 <Card.Body className="p-4">
//                   <h5 className="mb-3">
//                     <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
//                     Quote Summary
//                   </h5>
                  
//                   {formData.client_name && (
//                     <p>
//                       <strong>Client:</strong> {formData.client_name}
//                     </p>
//                   )}
                  
//                   {formData.project_title && (
//                     <p>
//                       <strong>Project:</strong> {formData.project_title}
//                     </p>
//                   )}
                  
//                   {formData.days > 0 && (
//                     <p>
//                       <strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}
//                     </p>
//                   )}
                  
//                   {formData.shoot_dates && (
//                     <p>
//                       <strong>Shoot Date:</strong> {new Date(formData.shoot_dates).toLocaleDateString()}
//                     </p>
//                   )}
                  
//                   {formData.delivery_date && (
//                     <p>
//                       <strong>Delivery Date:</strong> {new Date(formData.delivery_date).toLocaleDateString()}
//                     </p>
//                   )}

//                   <div className="mb-3">
//                     <strong>Selected Services:</strong>
//                     {selectedServicesDetails.length > 0 ? (
//                       <ListGroup variant="flush" className="mt-2">
//                         {selectedServicesDetails.map((service, index) => (
//                           <ListGroup.Item key={index} className="px-0 py-2 d-flex justify-content-between align-items-center border-bottom">
//                             <span>{service.name}</span>
//                             <Badge bg="light" text="dark" className="rate-display">
//                               ₹{service.rate * formData.days} 
//                               <span className="ms-1 text-muted">
//                                 (₹{service.rate}/day × {formData.days})
//                               </span>
//                             </Badge>
//                           </ListGroup.Item>
//                         ))}
//                       </ListGroup>
//                     ) : (
//                       <p className="text-muted">No services selected</p>
//                     )}
//                   </div>

//                   <hr />
                  
//                   <div className="d-flex justify-content-between align-items-center">
//                     <h4 className="mb-0">Total:</h4>
//                     <h4 className="mb-0 rate-display">₹{total.toLocaleString()}</h4>
//                   </div>
                  
//                   {selectedServicesDetails.length > 0 && (
//                     <div className="mt-3 text-center">
//                       <small className="text-muted">
//                         <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
//                         This is an estimate based on your selections
//                       </small>
//                     </div>
//                   )}
//                 </Card.Body>
//               </Card>
              
//               <Card className="shadow-sm border-0 bg-light">
//                 <Card.Body className="p-3">
//                   <div className="d-flex align-items-center">
//                     <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
//                     <small>
//                       <strong>Need help?</strong> Contact the admin team at{' '}
//                       <a href="mailto:admin@tsbi.in">tech@tsbi.in</a> for assistance.
//                     </small>
//                   </div>
//                 </Card.Body>
//               </Card>
//             </div>
//           </Col>
//         </Row>
//       </Container>

//       {/* CSS for animation, hover effects, and rate display */}
//       <style jsx>{`
//         .header {
//           border-bottom: 1px solid #e9e9e9;
//         }
        
//         .text-purple {
//           color: #8e24aa;
//           font-size: 1.75rem;
//           font-weight: 600;
//         }
        
//         .proposal-form-component .card {
//           transition: box-shadow 0.3s ease;
//         }
        
//         .proposal-form-component .card:hover {
//           box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
//         }
        
//         .rate-display {
//           font-family: monospace;
//           white-space: nowrap;
//         }
        
//         .service-selection {
//           max-height: 300px;
//           overflow-y: auto;
//         }
        
//         .form-check {
//           transition: background-color 0.2s ease;
//         }
        
//         .form-check:hover {
//           background-color: rgba(13, 110, 253, 0.05);
//         }
        
//         .sticky-top {
//           z-index: 100;
//         }

//         @media (max-width: 768px) {
//           .text-purple {
//             font-size: 1.25rem;
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
  Accordion,
  Nav,
  Tab
} from 'react-bootstrap';
import { fetchServices } from '../../services/api';
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
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import Logo from '../../assets/Logo.png';

// Service categories structure
const SERVICE_CATEGORIES = {
  'pre-production': {
    name: 'Pre-Production',
    icon: faEdit,
    subcategories: {
      'part-1': {
        name: 'Part 1 - Creative Development'
      },
      'part-1-shoot-location': {
        name: 'Part 1 - Shoot Location'
      },
      'legal-permits': {
        name: 'Legal & Permits'
      },
      'logistics': {
        name: 'Logistics & Planning'
      }
    }
  },
  'production': {
    name: 'Production',
    icon: faCamera,
    subcategories: {
      'creative-team': {
        name: 'Part 2 - Creative Team'
      },
      'production-team': {
        name: 'Part 2 - Production Team'
      },
      'production-design': {
        name: 'Part 2 - Production Design'
      },
      'talent': {
        name: 'Part 2 - Talent'
      },
      'hair-makeup': {
        name: 'Part 2 - Hair & Make-UP'
      },
      'wardrobe': {
        name: 'Part 2 - Wardrobe'
      },
      'camera-grip': {
        name: 'Camera & Grip'
      },
      'lights': {
        name: 'Lights'
      },
      'vehicles': {
        name: 'Vehicles Hire'
      },
      'catering': {
        name: 'Catering'
      },
      'miscellaneous': {
        name: 'Miscellaneous'
      }
    }
  },
  // 'post-production': {
  //   name: 'Post Production',
  //   icon: faVideo,
  //   subcategories: {
  //     'general': {
  //       name: 'General Post Production'
  //     }
  //   }
  // }
   'post-production': {
    name: 'Post Production',
    icon: faVideo,
    // No subcategories for post-production
    subcategories: {}
  }
};

function ProposalForm({ onSubmit, onAdminClick }) {
  const [services, setServices] = useState([]);
  const [organizedServices, setOrganizedServices] = useState({});
  const [formData, setFormData] = useState({
    client_name: '',
    your_email: '',
    project_title: '',
    category: '',
    location: '',
    services: [],
    days: 1,
    shoot_dates: '',
    delivery_date: ''
  });
  const [errors, setErrors] = useState({});
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [serviceError, setServiceError] = useState('');
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [activeServiceCategory, setActiveServiceCategory] = useState('pre-production');
  const [expandedCategories, setExpandedCategories] = useState({});

  // Load services on component mount
  // useEffect(() => {
  //   const loadServices = async () => {
  //     setIsLoading(true);
  //     try {
  //       console.log('Fetching services from API...');
  //       const response = await fetchServices();
  //       const servicesWithStringIds = response.data.map(service => ({
  //         ...service,
  //         id: service.id.toString()
  //       }));
  //       console.log('Services loaded:', servicesWithStringIds);
  //       setServices(servicesWithStringIds);
        
  //       // Organize services by category and subcategory
  //       const organized = {};
  //       servicesWithStringIds.forEach(service => {
  //         const category = service.category || 'pre-production';
  //         const subcategory = service.subcategory || 'part-1';
          
  //         if (!organized[category]) {
  //           organized[category] = {};
  //         }
  //         if (!organized[category][subcategory]) {
  //           organized[category][subcategory] = [];
  //         }
  //         organized[category][subcategory].push(service);
  //       });
        
  //       console.log('Organized services:', organized);
  //       setOrganizedServices(organized);
        
  //     } catch (error) {
  //       console.error('Error loading services:', error);
  //       setServiceError('Failed to load services. Please refresh the page or contact support.');
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   loadServices();
  // }, []);
  // Load services on component mount
  useEffect(() => {
    const loadServices = async () => {
      setIsLoading(true);
      try {
        console.log('Fetching services from API...');
        const response = await fetchServices();
        const servicesWithStringIds = response.data.map(service => ({
          ...service,
          id: service.id.toString()
        }));
        console.log('Services loaded:', servicesWithStringIds);
        setServices(servicesWithStringIds);
        
        // Organize services by category and subcategory
        const organized = {};
        servicesWithStringIds.forEach(service => {
          const category = service.category || 'pre-production';
          
          if (!organized[category]) {
            organized[category] = {};
          }
          
          // Handle post-production differently (no subcategories)
          if (category === 'post-production') {
            if (!organized[category]['all']) {
              organized[category]['all'] = [];
            }
            organized[category]['all'].push(service);
          } else {
            // For other categories, use subcategories
            const subcategory = service.subcategory || 'part-1';
            if (!organized[category][subcategory]) {
              organized[category][subcategory] = [];
            }
            organized[category][subcategory].push(service);
          }
        });
        
        console.log('Organized services:', organized);
        setOrganizedServices(organized);
        
      } catch (error) {
        console.error('Error loading services:', error);
        setServiceError('Failed to load services. Please refresh the page or contact support.');
      } finally {
        setIsLoading(false);
      }
    };
    loadServices();
  }, []);

  // Calculate total when services or days change
  useEffect(() => {
    calculateTotal();
  }, [formData.services, formData.days, services]);

  // Update delivery date min when shoot date changes
  useEffect(() => {
    if (formData.shoot_dates && !formData.delivery_date) {
      if (errors.delivery_date) {
        setErrors(prev => {
          const newErrors = {...prev};
          delete newErrors.delivery_date;
          return newErrors;
        });
      }
    }
  }, [formData.shoot_dates]);

  const calculateTotal = () => {
    let calculatedTotal = 0;
    formData.services.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        calculatedTotal += service.rate_per_day * formData.days;
      }
    });
    console.log('Calculated total:', calculatedTotal);
    setTotal(calculatedTotal);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    console.log('Input changed:', { name, value, type, checked });

    // Clear specific error when field is changed
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = {...prev};
        delete newErrors[name];
        return newErrors;
      });
    }

    setFormData(prev => {
      if (type === 'checkbox') {
        const newServices = checked
          ? [...prev.services, value]
          : prev.services.filter(id => id !== value);
        
        console.log('Updated services selection:', newServices);
        return {
          ...prev,
          services: newServices
        };
      }
      
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const toggleCategoryExpansion = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  // Get selected services with their category/subcategory info
  // const getSelectedServicesWithDetails = () => {
  //   return formData.services.map(id => {
  //     const service = services.find(s => s.id === id);
  //     if (service) {
  //       const categoryInfo = SERVICE_CATEGORIES[service.category];
  //       const subcategoryInfo = categoryInfo?.subcategories[service.subcategory];
        
  //       return {
  //         ...service,
  //         categoryName: categoryInfo?.name || service.category,
  //         subcategoryName: subcategoryInfo?.name || service.subcategory
  //       };
  //     }
  //     return null;
  //   }).filter(Boolean);
  // };
   const getSelectedServicesWithDetails = () => {
    return formData.services.map(id => {
      const service = services.find(s => s.id === id);
      if (service) {
        const categoryInfo = SERVICE_CATEGORIES[service.category];
        let subcategoryInfo = null;
        let subcategoryName = '';
        
        // Handle post-production differently
        if (service.category === 'post-production') {
          subcategoryName = 'Post Production Services';
        } else {
          subcategoryInfo = categoryInfo?.subcategories[service.subcategory];
          subcategoryName = subcategoryInfo?.name || service.subcategory;
        }
        
        return {
          ...service,
          categoryName: categoryInfo?.name || service.category,
          subcategoryName: subcategoryName
        };
      }
      return null;
    }).filter(Boolean);
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Client name validation
    if (formData.client_name.length < 2 || formData.client_name.length > 30) {
      newErrors.client_name = 'Brand name must be 2–30 letters long';
    }
    
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
    if (!emailPattern.test(formData.your_email)) {
      newErrors.your_email = 'Only @tsbi.in emails allowed';
    }
    
    // Project title validation
    if (!formData.project_title || formData.project_title.trim() === '') {
      newErrors.project_title = 'Project title is required';
    } else if (formData.project_title.length > 100) {
      newErrors.project_title = 'Project title must be 1–100 characters long';
    }
    
    // Category validation
    if (!formData.category) {
      newErrors.category = 'Please select a category';
    }
    
    // Location validation
    if (!formData.location) {
      newErrors.location = 'Please select a location';
    }
    
    // Shoot date validation
    if (!formData.shoot_dates) {
      newErrors.shoot_dates = 'Shoot date is required';
    } else {
      const shootDate = new Date(formData.shoot_dates);
      const today = new Date();
      const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
      const fyStart = new Date(fyStartYear, 3, 1);
      const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

      if (shootDate < fyStart || shootDate > fyEnd) {
        newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
      }
    }
    
    // Delivery date validation
    if (!formData.delivery_date) {
      newErrors.delivery_date = 'Delivery date is required';
    } else {
      const deliveryDate = new Date(formData.delivery_date);
      const shootDate = formData.shoot_dates ? new Date(formData.shoot_dates) : null;
      const today = new Date();
      const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
      const fyEnd = new Date(`${fyStartYear + 1}-03-31T23:59:59`);

      if (deliveryDate > fyEnd) {
        newErrors.delivery_date = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
      } else if (shootDate && deliveryDate < shootDate) {
        newErrors.delivery_date = 'Delivery date must be on or after shoot date';
      }
    }
    
    // Services validation
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }
    
    console.log('Form validation errors:', newErrors);
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submission attempted');
    
    if (validateForm()) {
      console.log('Form is valid, submitting:', formData);
      setFormSubmitting(true);
      try {
        await onSubmit(formData);
      } catch (error) {
        console.error('Form submission error:', error);
        setErrors({
          submission: 'An error occurred while generating the proposal. Please try again.'
        });
      } finally {
        setFormSubmitting(false);
      }
    } else {
      console.log('Form validation failed');
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.getElementsByName(firstErrorField)[0];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  // Calculate fiscal year dates for min/max date inputs
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

  const selectedServicesDetails = getSelectedServicesWithDetails();

  return (
    <div className="proposal-form-component">
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
            <Button 
              variant="outline-danger" 
              onClick={onAdminClick}
              className="px-3 py-1"
            >
              <FontAwesomeIcon icon={faUser} className="me-2" />
              Admin Login
            </Button>
          </div>
        </Container>
      </div>
      
      <Container className="py-4">
        <Row>
          <Col lg={8}>
            <Card className="shadow-sm border-0 mb-4">
              <Card.Body className="p-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <div>
                    <h3 className="mb-1">Create Studio Proposal</h3>
                    <p className="text-muted mb-0">Fill in the details to generate a new quote</p>
                  </div>
                  <Badge bg="info" className="py-2 px-3">
                    <FontAwesomeIcon icon={faFilePdf} className="me-1" />
                    New Quote
                  </Badge>
                </div>

                {errors.submission && (
                  <Alert 
                    variant="danger" 
                    dismissible 
                    onClose={() => setErrors(prev => {
                      const newErrors = {...prev};
                      delete newErrors.submission;
                      return newErrors;
                    })}
                    className="border-0 shadow-sm mb-4"
                  >
                    <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                    {errors.submission}
                  </Alert>
                )}

                {serviceError && (
                  <Alert 
                    variant="danger" 
                    dismissible 
                    onClose={() => setServiceError('')}
                    className="border-0 shadow-sm mb-4"
                  >
                    <FontAwesomeIcon icon={faTimes} className="me-2" />
                    {serviceError}
                  </Alert>
                )}

                {Object.keys(errors).length > 0 && !errors.submission && (
                  <Alert 
                    variant="warning" 
                    dismissible 
                    className="border-0 shadow-sm mb-4"
                  >
                    <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                    Please fix the highlighted errors below to continue.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faBuilding} className="me-2 text-primary" />
                    Client Information
                  </h5>
                  
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Brand Name <span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faBuilding} />
                          </InputGroup.Text>
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
                        <Form.Label>
                          Your Email <span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faEnvelope} />
                          </InputGroup.Text>
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
                  
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faClipboardList} className="me-2 text-primary" />
                    Project Details
                  </h5>
                  
                  <Form.Group className="mb-3">
                    <Form.Label>
                      Project Title <span className="text-danger">*</span>
                    </Form.Label>
                    <InputGroup hasValidation>
                      <InputGroup.Text className="bg-light">
                        <FontAwesomeIcon icon={faTag} />
                      </InputGroup.Text>
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
                          Category <span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faTag} />
                          </InputGroup.Text>
                          <Form.Select 
                            name="category"
                            value={formData.category}
                            onChange={handleChange}
                            isInvalid={!!errors.category}
                            required
                          >
                            <option value="" disabled>Select a option</option>
                            <option value="Digital Bytes">Digital Bytes</option>
                            <option value="Piece to Camera">Piece to Camera</option>
                            <option value="Digital Video">Digital Video</option>
                            <option value="Behind the Scene">Behind the Scene</option>
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            {errors.category}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                    
                    <Col md={6}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Location <span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup hasValidation>
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                          </InputGroup.Text>
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
                  
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
                    Particular Selection
                  </h5>
                  
                  <Form.Group className="mb-4">
                    <Form.Label>
                      Select Required Particular <span className="text-danger">*</span>
                      <Badge bg="secondary" className="ms-2">
                        {formData.services.length} selected
                      </Badge>
                    </Form.Label>
                    
                     {isLoading ? (
                      <div className="text-center py-4">
                        <Spinner animation="border" variant="primary" />
                        <p className="mt-2">Loading available services...</p>
                      </div>
                    ) : Object.keys(organizedServices).length > 0 ? (
                      <div className="service-selection border rounded bg-light">
                        <Tab.Container activeKey={activeServiceCategory} onSelect={setActiveServiceCategory}>
                          {/* Category Tabs */}
                          <div className="border-bottom bg-white p-3">
                            <Nav variant="pills" className="justify-content-center">
                              {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
                                <Nav.Item key={key}>
                                  <Nav.Link eventKey={key} className="text-decoration-none">
                                    <FontAwesomeIcon icon={category.icon} className="me-2" />
                                    {category.name}
                                    {organizedServices[key] && (
                                      <Badge bg="secondary" className="ms-2">
                                        {key === 'post-production' 
                                          ? (organizedServices[key]['all'] || []).length
                                          : Object.values(organizedServices[key]).flat().length
                                        }
                                      </Badge>
                                    )}
                                  </Nav.Link>
                                </Nav.Item>
                              ))}
                            </Nav>
                          </div>

                          {/* Services Content */}
                           <Tab.Content className="p-3">
                            {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
                              <Tab.Pane key={categoryKey} eventKey={categoryKey}>
                                {organizedServices[categoryKey] ? (
                                  categoryKey === 'post-production' ? (
                                    // Special handling for post-production (no subcategories)
                                    <div>
                                      <h6 className="mb-3 text-primary">Post Production Particulars</h6>
                                      <Row>
                                        {(organizedServices[categoryKey]['all'] || []).map(service => (
                                          <Col md={6} key={service.id}>
                                            <Form.Check
                                              type="checkbox"
                                              id={`service-${service.id}`}
                                              className="mb-2 service-checkbox"
                                            >
                                              <Form.Check.Input
                                                type="checkbox"
                                                value={service.id}
                                                checked={formData.services.includes(service.id)}
                                                onChange={handleChange}
                                                name="services"
                                              />
                                              <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
                                                <span>{service.service_name}</span>
                                                <span className="rate-display text-muted">
                                                  ₹{service.rate_per_day}/day
                                                </span>
                                              </Form.Check.Label>
                                            </Form.Check>
                                          </Col>
                                        ))}
                                      </Row>
                                      {(organizedServices[categoryKey]['all'] || []).length === 0 && (
                                        <div className="text-center py-4">
                                          <p className="text-muted">No services available in this category</p>
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                    // Regular accordion handling for other categories
                                    <Accordion flush>
                                      {Object.entries(organizedServices[categoryKey]).map(([subcategoryKey, subcategoryServices]) => {
                                        const subcategoryInfo = category.subcategories[subcategoryKey];
                                        const subcategoryName = subcategoryInfo?.name || subcategoryKey;
                                        
                                        return (
                                          <Accordion.Item key={subcategoryKey} eventKey={subcategoryKey}>
                                            <Accordion.Header>
                                              <div className="d-flex justify-content-between align-items-center w-100 me-3">
                                                <span>{subcategoryName}</span>
                                                <Badge bg="info">
                                                  {subcategoryServices.length} service{subcategoryServices.length !== 1 ? 's' : ''}
                                                </Badge>
                                              </div>
                                            </Accordion.Header>
                                            <Accordion.Body>
                                              <Row>
                                                {subcategoryServices.map(service => (
                                                  <Col md={6} key={service.id}>
                                                    <Form.Check
                                                      type="checkbox"
                                                      id={`service-${service.id}`}
                                                      className="mb-2 service-checkbox"
                                                    >
                                                      <Form.Check.Input
                                                        type="checkbox"
                                                        value={service.id}
                                                        checked={formData.services.includes(service.id)}
                                                        onChange={handleChange}
                                                        name="services"
                                                      />
                                                      <Form.Check.Label className="ms-2 d-flex justify-content-between w-100">
                                                        <span>{service.service_name}</span>
                                                        <span className="rate-display text-muted">
                                                          ₹{service.rate_per_day}/day
                                                        </span>
                                                      </Form.Check.Label>
                                                    </Form.Check>
                                                  </Col>
                                                ))}
                                              </Row>
                                            </Accordion.Body>
                                          </Accordion.Item>
                                        );
                                      })}
                                    </Accordion>
                                  )
                                ) : (
                                  <div className="text-center py-4">
                                    <p className="text-muted">No services available in this category</p>
                                  </div>
                                )}
                              </Tab.Pane>
                            ))}
                          </Tab.Content>
                        </Tab.Container>
                        
                        {errors.services && (
                          <div className="text-danger small mt-2 px-3 pb-2">
                            <FontAwesomeIcon icon={faExclamationTriangle} className="me-1" />
                            {errors.services}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Alert variant="warning">
                        No services available. Please contact the administrator.
                      </Alert>
                    )}
                  </Form.Group>

                  <Row>
                    <Col md={4}>
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Number of Days <span className="text-danger">*</span>
                        </Form.Label>
                        <InputGroup>
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </InputGroup.Text>
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
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faCalendarAlt} />
                          </InputGroup.Text>
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
                          <InputGroup.Text className="bg-light">
                            <FontAwesomeIcon icon={faTruck} />
                          </InputGroup.Text>
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
                          Generate Proposal
                        </>
                      )}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={4}>
            <div className="sticky-top" style={{ top: '20px' }}>
              <Card className="shadow-sm border-0 mb-4">
                <Card.Body className="p-4">
                  <h5 className="mb-3">
                    <FontAwesomeIcon icon={faMoneyBillWave} className="me-2 text-primary" />
                    Quote Summary
                  </h5>
                  
                  {formData.client_name && (
                    <p>
                      <strong>Client:</strong> {formData.client_name}
                    </p>
                  )}
                  
                  {formData.project_title && (
                    <p>
                      <strong>Project:</strong> {formData.project_title}
                    </p>
                  )}
                  
                  {formData.days > 0 && (
                    <p>
                      <strong>Duration:</strong> {formData.days} day{formData.days !== 1 ? 's' : ''}
                    </p>
                  )}
                  
                  {formData.shoot_dates && (
                    <p>
                      <strong>Shoot Date:</strong> {new Date(formData.shoot_dates).toLocaleDateString()}
                    </p>
                  )}
                  
                  {formData.delivery_date && (
                    <p>
                      <strong>Delivery Date:</strong> {new Date(formData.delivery_date).toLocaleDateString()}
                    </p>
                  )}

                  <div className="mb-3">
                    <strong>Selected Particulars:</strong>
                    {selectedServicesDetails.length > 0 ? (
                      <div className="mt-2">
                        {/* Group services by category */}
                        {Object.entries(
                          selectedServicesDetails.reduce((groups, service) => {
                            const category = service.categoryName;
                            if (!groups[category]) {
                              groups[category] = {};
                            }
                            const subcategory = service.subcategoryName;
                            if (!groups[category][subcategory]) {
                              groups[category][subcategory] = [];
                            }
                            groups[category][subcategory].push(service);
                            return groups;
                          }, {})
                        ).map(([categoryName, subcategories]) => (
                          <div key={categoryName} className="mb-3">
                            <div className="d-flex align-items-center mb-2">
                              <FontAwesomeIcon 
                                icon={
                                  categoryName.includes('Pre-Production') ? faEdit :
                                  categoryName.includes('Production') ? faCamera : faVideo
                                } 
                                className="me-2 text-primary" 
                              />
                              <strong className="text-primary">{categoryName}</strong>
                            </div>
                            {Object.entries(subcategories).map(([subcategoryName, services]) => (
                              <div key={subcategoryName} className="ms-3 mb-2">
                                {/* Only show subcategory if it's not "Post Production Services" */}
                                {subcategoryName !== 'Post Production Particulars' && (
                                  <div className="fw-bold text-muted small mb-1">{subcategoryName}</div>
                                )}
                                {services.map((service, index) => (
                                  <div key={service.id} className="d-flex justify-content-between align-items-center border-bottom py-1">
                                    <span className="small">{service.service_name}</span>
                                    <Badge bg="light" text="dark" className="rate-display">
                                      ₹{service.rate_per_day * formData.days}
                                      <span className="ms-1 text-muted">
                                        (₹{service.rate_per_day}/day × {formData.days})
                                      </span>
                                    </Badge>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted mt-2">No services selected</p>
                    )}
                  </div>

                  <hr />
                  
                  <div className="d-flex justify-content-between align-items-center">
                    <h4 className="mb-0">Total:</h4>
                    <h4 className="mb-0 rate-display">₹{total.toLocaleString()}</h4>
                  </div>
                  
                  {selectedServicesDetails.length > 0 && (
                    <div className="mt-3 text-center">
                      <small className="text-muted">
                        <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
                        This is an estimate based on your selections
                      </small>
                    </div>
                  )}
                </Card.Body>
              </Card>
              
              <Card className="shadow-sm border-0 bg-light">
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center">
                    <FontAwesomeIcon icon={faInfoCircle} className="me-3 text-primary fa-lg" />
                    <small>
                      <strong>Need help?</strong> Contact the admin team at{' '}
                      <a href="mailto:admin@tsbi.in">tech@tsbi.in</a> for assistance.
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Row>
      </Container>

      {/* CSS for styling */}
      <style jsx>{`
        .header {
          border-bottom: 1px solid #e9e9e9;
        }
        
        .text-purple {
          color: #8e24aa;
          font-size: 1.75rem;
          font-weight: 600;
        }
        
        .proposal-form-component .card {
          transition: box-shadow 0.3s ease;
        }
        
        .proposal-form-component .card:hover {
          box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.08) !important;
        }
        
        .rate-display {
          font-family: monospace;
          white-space: nowrap;
        }
        
        .service-selection {
          max-height: 500px;
          overflow-y: auto;
        }
        
        .service-checkbox {
          transition: background-color 0.2s ease;
          padding: 8px;
          border-radius: 4px;
        }
        
        .service-checkbox:hover {
          background-color: rgba(13, 110, 253, 0.05);
        }
        
        .nav-pills .nav-link {
          color: #6c757d;
          border-radius: 0.375rem;
          margin-right: 0.5rem;
          transition: all 0.2s ease;
        }
        
        .nav-pills .nav-link:hover {
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
        }
        
        .nav-pills .nav-link.active {
          background-color: #0d6efd;
          color: white;
        }
        
        .accordion-button:not(.collapsed) {
          background-color: #e7f1ff;
          color: #0d6efd;
        }
        
        .sticky-top {
          z-index: 100;
        }

        @media (max-width: 768px) {
          .text-purple {
            font-size: 1.25rem;
          }
          
          .service-selection {
            max-height: 400px;
          }
        }
      `}</style>
    </div>
  );
}

export default ProposalForm;