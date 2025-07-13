// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { 
// // // // //   Table, 
// // // // //   Form, 
// // // // //   Button, 
// // // // //   Alert, 
// // // // //   Card, 
// // // // //   Row, 
// // // // //   Col, 
// // // // //   Modal,
// // // // //   Badge,
// // // // //   Spinner,
// // // // //   Nav,
// // // // //   Tab,
// // // // //   Dropdown,
// // // // //   ListGroup
// // // // // } from 'react-bootstrap';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { 
// // // // //   faPlus, 
// // // // //   faPencilAlt, 
// // // // //   faTrash, 
// // // // //   faCheck, 
// // // // //   faTimes, 
// // // // //   faInfoCircle,
// // // // //   faUsers,
// // // // //   faDownload,
// // // // //   faEdit,
// // // // //   faStar,
// // // // //   faEnvelope,
// // // // //   faPhone,
// // // // //   faLink,
// // // // //   faMapMarkerAlt,
// // // // //   faAward,
// // // // //   faChevronDown,
// // // // //   faGear
// // // // // } from '@fortawesome/free-solid-svg-icons';

// // // // // // Import API functions
// // // // // import { 
// // // // //   fetchServices,
// // // // //   createServiceData,
// // // // //   updateServiceData,
// // // // //   deleteServiceData,
// // // // //   fetchServiceData
// // // // // } from '../../services/api';

// // // // // function ServiceDataManagement() {
// // // // //   const [services, setServices] = useState([]);
// // // // //   const [selectedService, setSelectedService] = useState(null);
// // // // //   const [serviceData, setServiceData] = useState([]);
// // // // //   const [activeView, setActiveView] = useState('services');
  
// // // // //   // Form states
// // // // //   const [showDataModal, setShowDataModal] = useState(false);
// // // // //   const [editingData, setEditingData] = useState(null);
// // // // //   const [newData, setNewData] = useState({
// // // // //     name: '',
// // // // //     rate: '',
// // // // //     location: '',
// // // // //     experience: '',
// // // // //     contact: '',
// // // // //     profile_link: '',
// // // // //     rating: '',
// // // // //     specialization: '',
// // // // //     is_default: false
// // // // //   });
  
// // // // //   // Loading states
// // // // //   const [isLoading, setIsLoading] = useState(false);
// // // // //   const [error, setError] = useState('');
// // // // //   const [success, setSuccess] = useState('');

// // // // //   useEffect(() => {
// // // // //     loadServices();
// // // // //   }, []);

// // // // //   useEffect(() => {
// // // // //     if (selectedService) {
// // // // //       loadServiceData();
// // // // //     }
// // // // //   }, [selectedService]);

// // // // //   const loadServices = async () => {
// // // // //     try {
// // // // //       setIsLoading(true);
// // // // //       const response = await fetchServices();
// // // // //       console.log('Loaded services:', response.data);
      
// // // // //       setServices(response.data);
// // // // //     } catch (error) {
// // // // //       console.error('Error loading services:', error);
// // // // //       setError('Failed to load services');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const loadServiceData = async () => {
// // // // //     if (!selectedService) return;
// // // // //     try {
// // // // //       setIsLoading(true);
// // // // //       const response = await fetchServiceData(selectedService.id);
// // // // //         console.log('Loaded service data:', response.data);
// // // // //       setServiceData(response.data || []);
// // // // //     } catch (error) {
// // // // //       console.error('Error loading service data:', error);
// // // // //       setServiceData([]);
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleCreateData = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       setIsLoading(true);
      
// // // // //       // If setting as default, unset others
// // // // //       if (newData.is_default) {
// // // // //         await Promise.all(
// // // // //           serviceData.map(item => 
// // // // //             updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// // // // //           )
// // // // //         );
// // // // //       }
      
// // // // //       await createServiceData(selectedService.id, newData);
// // // // //       setNewData({
// // // // //         name: '',
// // // // //         rate: '',
// // // // //         location: '',
// // // // //         experience: '',
// // // // //         contact: '',
// // // // //         profile_link: '',
// // // // //         rating: '',
// // // // //         specialization: '',
// // // // //         is_default: false
// // // // //       });
// // // // //       setShowDataModal(false);
// // // // //       await loadServiceData();
// // // // //       setSuccess('Data added successfully!');
// // // // //       setTimeout(() => setSuccess(''), 3000);
// // // // //     } catch (error) {
// // // // //       setError(error.response?.data?.error || 'Failed to create data');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleUpdateData = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       setIsLoading(true);
      
// // // // //       // If setting as default, unset others
// // // // //       if (newData.is_default) {
// // // // //         await Promise.all(
// // // // //           serviceData
// // // // //             .filter(item => item.id !== editingData.id)
// // // // //             .map(item => 
// // // // //               updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// // // // //             )
// // // // //         );
// // // // //       }
      
// // // // //       await updateServiceData(selectedService.id, editingData.id, newData);
// // // // //       setEditingData(null);
// // // // //       setShowDataModal(false);
// // // // //       await loadServiceData();
// // // // //       setSuccess('Data updated successfully!');
// // // // //       setTimeout(() => setSuccess(''), 3000);
// // // // //     } catch (error) {
// // // // //       setError(error.response?.data?.error || 'Failed to update data');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleDeleteData = async (dataId) => {
// // // // //     if (window.confirm('Are you sure you want to delete this data?')) {
// // // // //       try {
// // // // //         setIsLoading(true);
// // // // //         await deleteServiceData(selectedService.id, dataId);
// // // // //         await loadServiceData();
// // // // //         setSuccess('Data deleted successfully!');
// // // // //         setTimeout(() => setSuccess(''), 3000);
// // // // //       } catch (error) {
// // // // //         setError(error.response?.data?.error || 'Failed to delete data');
// // // // //       } finally {
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const openDataModal = (data = null) => {
// // // // //     if (data) {
// // // // //       setEditingData(data);
// // // // //       setNewData({
// // // // //         name: data.name || '',
// // // // //         rate: data.rate || '',
// // // // //         location: data.location || '',
// // // // //         experience: data.experience || '',
// // // // //         contact: data.contact || '',
// // // // //         profile_link: data.profile_link || '',
// // // // //         rating: data.rating || '',
// // // // //         specialization: data.specialization || '',
// // // // //         is_default: data.is_default || false
// // // // //       });
// // // // //     } else {
// // // // //       setEditingData(null);
// // // // //       setNewData({
// // // // //         name: '',
// // // // //         rate: '',
// // // // //         location: '',
// // // // //         experience: '',
// // // // //         contact: '',
// // // // //         profile_link: '',
// // // // //         rating: '',
// // // // //         specialization: '',
// // // // //         is_default: false
// // // // //       });
// // // // //     }
// // // // //     setShowDataModal(true);
// // // // //   };

// // // // //   const selectService = (service) => {
// // // // //     setSelectedService(service);
// // // // //     setActiveView('data');
// // // // //   };

// // // // //   const getServicesWithData = () => {
// // // // //     return services.map(service => ({
// // // // //       ...service,
// // // // //       hasData: serviceData.length > 0 // This would need to be calculated differently in real implementation
// // // // //     }));
// // // // //   };

// // // // //   return (
// // // // //     <div className="service-data-management">
// // // // //       <div className="d-flex justify-content-between align-items-center mb-4">
// // // // //         <div>
// // // // //           <h4 className="mb-1">Service Data Management</h4>
// // // // //           <p className="text-muted mb-0">Add people and details for each service</p>
// // // // //         </div>
// // // // //         <Badge bg="info" className="py-2 px-3">
// // // // //           <FontAwesomeIcon icon={faUsers} className="me-1" />
// // // // //           {selectedService ? `${serviceData.length} items` : `${services.length} services`}
// // // // //         </Badge>
// // // // //       </div>

// // // // //       {error && (
// // // // //         <Alert variant="danger" dismissible onClose={() => setError('')}>
// // // // //           <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // // //           {error}
// // // // //         </Alert>
// // // // //       )}

// // // // //       {success && (
// // // // //         <Alert variant="success" dismissible onClose={() => setSuccess('')}>
// // // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // // //           {success}
// // // // //         </Alert>
// // // // //       )}

// // // // //       <Tab.Container activeKey={activeView} onSelect={setActiveView}>
// // // // //         <Card className="shadow-sm border-0">
// // // // //           <Card.Header className="bg-light">
// // // // //             <Nav variant="pills" className="flex-row">
// // // // //               <Nav.Item>
// // // // //                 <Nav.Link eventKey="services" className="text-decoration-none">
// // // // //                   <FontAwesomeIcon icon={faGear} className="me-2" />
// // // // //                   Services
// // // // //                   <Badge bg="secondary" className="ms-2">{services.length}</Badge>
// // // // //                 </Nav.Link>
// // // // //               </Nav.Item>
// // // // //               {selectedService && (
// // // // //                 <Nav.Item>
// // // // //                   <Nav.Link eventKey="data" className="text-decoration-none">
// // // // //                     <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // // //                     Data for {selectedService.service_name}
// // // // //                     <Badge bg="secondary" className="ms-2">{serviceData.length}</Badge>
// // // // //                   </Nav.Link>
// // // // //                 </Nav.Item>
// // // // //               )}
// // // // //             </Nav>
// // // // //           </Card.Header>

// // // // //           <Card.Body>
// // // // //             <Tab.Content>
// // // // //               {/* Services Selection Tab */}
// // // // //               <Tab.Pane eventKey="services">
// // // // //                 <div className="mb-3">
// // // // //                   <h5>Select a service to manage its data:</h5>
// // // // //                   <p className="text-muted">Choose which service you want to add people/items for</p>
// // // // //                 </div>

// // // // //                 {isLoading ? (
// // // // //                   <div className="text-center py-4">
// // // // //                     <Spinner animation="border" variant="primary" />
// // // // //                     <p className="mt-2">Loading services...</p>
// // // // //                   </div>
// // // // //                 ) : (
// // // // //                   <Row>
// // // // //                     {services.map(service => (
// // // // //                       <Col md={6} lg={4} key={service.id} className="mb-3">
// // // // //                         <Card 
// // // // //                           className="h-100 service-card"
// // // // //                           style={{ cursor: 'pointer' }}
// // // // //                           onClick={() => selectService(service)}
// // // // //                         >
// // // // //                           <Card.Body className="p-3">
// // // // //                             <div className="d-flex justify-content-between align-items-start mb-2">
// // // // //                               <h6 className="mb-1">{service.service_name}</h6>
// // // // //                               {/* This badge would show if service has data */}
// // // // //                               <Badge bg="success" className="small">
// // // // //                                 <FontAwesomeIcon icon={faStar} className="me-1" />
// // // // //                                 0 items
// // // // //                               </Badge>
// // // // //                             </div>
// // // // //                             <p className="small text-muted mb-2">
// // // // //                               Default rate: ₹{service.rate_per_day}/day
// // // // //                             </p>
// // // // //                             <p className="small text-muted mb-0">
// // // // //                               Category: {service.category}
// // // // //                             </p>
// // // // //                             <Button 
// // // // //                               variant="outline-primary" 
// // // // //                               size="sm" 
// // // // //                               className="w-100 mt-2"
// // // // //                               onClick={(e) => {
// // // // //                                 e.stopPropagation();
// // // // //                                 selectService(service);
// // // // //                               }}
// // // // //                             >
// // // // //                               <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // // //                               Manage Data
// // // // //                             </Button>
// // // // //                           </Card.Body>
// // // // //                         </Card>
// // // // //                       </Col>
// // // // //                     ))}
// // // // //                   </Row>
// // // // //                 )}
// // // // //               </Tab.Pane>

// // // // //               {/* Service Data Tab */}
// // // // //               <Tab.Pane eventKey="data">
// // // // //                 {selectedService ? (
// // // // //                   <>
// // // // //                     <div className="d-flex justify-content-between align-items-center mb-3">
// // // // //                       <div>
// // // // //                         <h5 className="mb-0">Data for {selectedService.service_name}</h5>
// // // // //                         <p className="text-muted mb-0">Add people, items, or options for this service</p>
// // // // //                       </div>
// // // // //                       <Button variant="success" onClick={() => openDataModal()}>
// // // // //                         <FontAwesomeIcon icon={faPlus} className="me-2" />
// // // // //                         Add New
// // // // //                       </Button>
// // // // //                     </div>

// // // // //                     {serviceData.length > 0 ? (
// // // // //                       <div className="table-responsive">
// // // // //                         <Table hover>
// // // // //                           <thead className="bg-light">
// // // // //                             <tr>
// // // // //                               <th>Name</th>
// // // // //                               <th>Rate</th>
// // // // //                               <th>Location</th>
// // // // //                               <th>Experience</th>
// // // // //                               <th>Rating</th>
// // // // //                               <th>Default</th>
// // // // //                               <th>Actions</th>
// // // // //                             </tr>
// // // // //                           </thead>
// // // // //                           <tbody>
// // // // //                             {serviceData.map(data => (
// // // // //                               <tr key={data.id} className={data.is_default ? 'table-success' : ''}>
// // // // //                                 <td>
// // // // //                                   <div>
// // // // //                                     <strong>{data.name}</strong>
// // // // //                                     {data.specialization && (
// // // // //                                       <div className="small text-muted">{data.specialization}</div>
// // // // //                                     )}
// // // // //                                     {data.profile_link && (
// // // // //                                       <div>
// // // // //                                         <a 
// // // // //                                           href={data.profile_link} 
// // // // //                                           target="_blank" 
// // // // //                                           rel="noopener noreferrer"
// // // // //                                           className="small text-primary"
// // // // //                                         >
// // // // //                                           <FontAwesomeIcon icon={faLink} className="me-1" />
// // // // //                                           Portfolio
// // // // //                                         </a>
// // // // //                                       </div>
// // // // //                                     )}
// // // // //                                   </div>
// // // // //                                 </td>
// // // // //                                 <td>
// // // // //                                   <Badge bg="success">
// // // // //                                     ₹{data.rate ? parseInt(data.rate).toLocaleString() : selectedService.rate_per_day}
// // // // //                                   </Badge>
// // // // //                                 </td>
// // // // //                                 <td>
// // // // //                                   <span className="small">
// // // // //                                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
// // // // //                                     {data.location || '-'}
// // // // //                                   </span>
// // // // //                                 </td>
// // // // //                                 <td>
// // // // //                                   <span className="small">
// // // // //                                     {data.experience ? `${data.experience} years` : '-'}
// // // // //                                   </span>
// // // // //                                 </td>
// // // // //                                 <td>
// // // // //                                   {data.rating && data.rating > 0 ? (
// // // // //                                     <div>
// // // // //                                       {[...Array(5)].map((_, i) => (
// // // // //                                         <FontAwesomeIcon 
// // // // //                                           key={i}
// // // // //                                           icon={faStar} 
// // // // //                                           className={i < data.rating ? 'text-warning' : 'text-light'}
// // // // //                                         />
// // // // //                                       ))}
// // // // //                                     </div>
// // // // //                                   ) : (
// // // // //                                     <span className="small text-muted">-</span>
// // // // //                                   )}
// // // // //                                 </td>
// // // // //                                 <td>
// // // // //                                   {data.is_default && (
// // // // //                                     <Badge bg="primary">
// // // // //                                       <FontAwesomeIcon icon={faAward} className="me-1" />
// // // // //                                       Default
// // // // //                                     </Badge>
// // // // //                                   )}
// // // // //                                 </td>
// // // // //                                 <td>
// // // // //                                   <div className="d-flex gap-2">
// // // // //                                     <Button 
// // // // //                                       variant="outline-primary" 
// // // // //                                       size="sm"
// // // // //                                       onClick={() => openDataModal(data)}
// // // // //                                     >
// // // // //                                       <FontAwesomeIcon icon={faPencilAlt} />
// // // // //                                     </Button>
// // // // //                                     <Button 
// // // // //                                       variant="outline-danger" 
// // // // //                                       size="sm"
// // // // //                                       onClick={() => handleDeleteData(data.id)}
// // // // //                                     >
// // // // //                                       <FontAwesomeIcon icon={faTrash} />
// // // // //                                     </Button>
// // // // //                                   </div>
// // // // //                                 </td>
// // // // //                               </tr>
// // // // //                             ))}
// // // // //                           </tbody>
// // // // //                         </Table>
// // // // //                       </div>
// // // // //                     ) : (
// // // // //                       <div className="text-center py-5">
// // // // //                         <FontAwesomeIcon icon={faUsers} size="3x" className="text-muted mb-3" />
// // // // //                         <h6>No data added for {selectedService.service_name}</h6>
// // // // //                         <p className="text-muted">
// // // // //                           Start by adding people, items, or options for this service
// // // // //                         </p>
// // // // //                         <Button variant="primary" onClick={() => openDataModal()}>
// // // // //                           <FontAwesomeIcon icon={faPlus} className="me-2" />
// // // // //                           Add First Item
// // // // //                         </Button>
// // // // //                       </div>
// // // // //                     )}
// // // // //                   </>
// // // // //                 ) : (
// // // // //                   <div className="text-center py-5">
// // // // //                     <p>Please select a service to manage its data.</p>
// // // // //                   </div>
// // // // //                 )}
// // // // //               </Tab.Pane>
// // // // //             </Tab.Content>
// // // // //           </Card.Body>
// // // // //         </Card>
// // // // //       </Tab.Container>

// // // // //       {/* Data Modal */}
// // // // //       <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="lg">
// // // // //         <Modal.Header closeButton>
// // // // //           <Modal.Title>
// // // // //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // // //             {editingData ? 'Edit' : 'Add'} {selectedService?.service_name} Data
// // // // //           </Modal.Title>
// // // // //         </Modal.Header>
// // // // //         <Form onSubmit={editingData ? handleUpdateData : handleCreateData}>
// // // // //           <Modal.Body>
// // // // //             <Row>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Name *</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="text"
// // // // //                     value={newData.name}
// // // // //                     onChange={(e) => setNewData({...newData, name: e.target.value})}
// // // // //                     placeholder="e.g., Amitabh Arora"
// // // // //                     required
// // // // //                   />
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Rate per Day</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="number"
// // // // //                     value={newData.rate}
// // // // //                     onChange={(e) => setNewData({...newData, rate: e.target.value})}
// // // // //                     placeholder={`Default: ${selectedService?.rate_per_day}`}
// // // // //                   />
// // // // //                   <Form.Text className="text-muted">
// // // // //                     Leave empty to use service default rate
// // // // //                   </Form.Text>
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //             </Row>
            
// // // // //             <Row>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Location</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="text"
// // // // //                     value={newData.location}
// // // // //                     onChange={(e) => setNewData({...newData, location: e.target.value})}
// // // // //                     placeholder="e.g., Mumbai"
// // // // //                   />
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Experience (years)</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="number"
// // // // //                     value={newData.experience}
// // // // //                     onChange={(e) => setNewData({...newData, experience: e.target.value})}
// // // // //                     placeholder="e.g., 5"
// // // // //                   />
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //             </Row>

// // // // //             <Row>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Contact</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="text"
// // // // //                     value={newData.contact}
// // // // //                     onChange={(e) => setNewData({...newData, contact: e.target.value})}
// // // // //                     placeholder="Phone or email"
// // // // //                   />
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Rating</Form.Label>
// // // // //                   <Form.Select
// // // // //                     value={newData.rating}
// // // // //                     onChange={(e) => setNewData({...newData, rating: e.target.value})}
// // // // //                   >
// // // // //                     <option value="">Select Rating</option>
// // // // //                     {[1,2,3,4,5].map(rating => (
// // // // //                       <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
// // // // //                     ))}
// // // // //                   </Form.Select>
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //             </Row>

// // // // //             <Row>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Profile/Portfolio Link</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="url"
// // // // //                     value={newData.profile_link}
// // // // //                     onChange={(e) => setNewData({...newData, profile_link: e.target.value})}
// // // // //                     placeholder="https://..."
// // // // //                   />
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //               <Col md={6}>
// // // // //                 <Form.Group className="mb-3">
// // // // //                   <Form.Label>Specialization</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="text"
// // // // //                     value={newData.specialization}
// // // // //                     onChange={(e) => setNewData({...newData, specialization: e.target.value})}
// // // // //                     placeholder="e.g., Commercial Films"
// // // // //                   />
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //             </Row>

// // // // //             <Form.Group className="mb-3">
// // // // //               <Form.Check
// // // // //                 type="checkbox"
// // // // //                 label="Set as default selection for proposals"
// // // // //                 checked={newData.is_default}
// // // // //                 onChange={(e) => setNewData({...newData, is_default: e.target.checked})}
// // // // //               />
// // // // //               <Form.Text className="text-muted">
// // // // //                 This will be auto-selected when users add this service to proposals
// // // // //               </Form.Text>
// // // // //             </Form.Group>
// // // // //           </Modal.Body>
// // // // //           <Modal.Footer>
// // // // //             <Button variant="secondary" onClick={() => setShowDataModal(false)}>
// // // // //               Cancel
// // // // //             </Button>
// // // // //             <Button type="submit" variant="primary" disabled={isLoading}>
// // // // //               {isLoading ? <Spinner size="sm" className="me-2" /> : null}
// // // // //               {editingData ? 'Update' : 'Add'} Data
// // // // //             </Button>
// // // // //           </Modal.Footer>
// // // // //         </Form>
// // // // //       </Modal>

// // // // //       <style jsx>{`
// // // // //         .service-card {
// // // // //           transition: all 0.2s ease;
// // // // //           border: 2px solid transparent;
// // // // //         }
        
// // // // //         .service-card:hover {
// // // // //           border-color: #0d6efd;
// // // // //           box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
// // // // //           transform: translateY(-2px);
// // // // //         }
        
// // // // //         .table-success {
// // // // //           background-color: rgba(40, 167, 69, 0.1) !important;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default ServiceDataManagement;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { 
// // // //   Table, 
// // // //   Form, 
// // // //   Button, 
// // // //   Alert, 
// // // //   Card, 
// // // //   Row, 
// // // //   Col, 
// // // //   Modal,
// // // //   Badge,
// // // //   Spinner,
// // // //   Nav,
// // // //   Tab,
// // // //   Dropdown,
// // // //   ListGroup
// // // // } from 'react-bootstrap';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { 
// // // //   faPlus, 
// // // //   faPencilAlt, 
// // // //   faTrash, 
// // // //   faCheck, 
// // // //   faTimes, 
// // // //   faInfoCircle,
// // // //   faUsers,
// // // //   faDownload,
// // // //   faEdit,
// // // //   faStar,
// // // //   faEnvelope,
// // // //   faPhone,
// // // //   faLink,
// // // //   faMapMarkerAlt,
// // // //   faAward,
// // // //   faChevronDown,
// // // //   faGear
// // // // } from '@fortawesome/free-solid-svg-icons';

// // // // // Import API functions
// // // // import { 
// // // //   fetchServices,
// // // //   createServiceData,
// // // //   updateServiceData,
// // // //   deleteServiceData,
// // // //   fetchServiceData,
// // // //   getServicesWithData
// // // // } from '../../services/api';

// // // // function ServiceDataManagement() {
// // // //   const [services, setServices] = useState([]);
// // // //   const [selectedService, setSelectedService] = useState(null);
// // // //   const [serviceData, setServiceData] = useState([]);
// // // //   const [activeView, setActiveView] = useState('services');
  
// // // //   // Form states
// // // //   const [showDataModal, setShowDataModal] = useState(false);
// // // //   const [editingData, setEditingData] = useState(null);
// // // //   const [newData, setNewData] = useState({
// // // //     name: '',
// // // //     rate: '',
// // // //     location: '',
// // // //     experience: '',
// // // //     contact: '',
// // // //     profile_link: '',
// // // //     rating: '',
// // // //     specialization: '',
// // // //     is_default: false
// // // //   });
  
// // // //   // Loading states
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [error, setError] = useState('');
// // // //   const [success, setSuccess] = useState('');

// // // //   useEffect(() => {
// // // //     loadServices();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     if (selectedService) {
// // // //       loadServiceData();
// // // //     }
// // // //   }, [selectedService]);

// // // //   // Load services and their data counts
// // // //   const loadServices = async () => {
// // // //     try {
// // // //       setIsLoading(true);
      
// // // //       // Load services
// // // //       const servicesResponse = await fetchServices();
// // // //       console.log('Loaded services:', servicesResponse.data);
      
// // // //       // Load services with data counts
// // // //       try {
// // // //         const servicesWithDataResponse = await getServicesWithData();
// // // //         console.log('Services with data:', servicesWithDataResponse.data);
        
// // // //         // Merge the data
// // // //         const servicesWithCounts = servicesResponse.data.map(service => {
// // // //           const serviceWithData = servicesWithDataResponse.data?.data?.find(s => s.id === service.id);
// // // //           return {
// // // //             ...service,
// // // //             data_count: serviceWithData?.data_count || 0,
// // // //             default_name: serviceWithData?.default_name || null
// // // //           };
// // // //         });
        
// // // //         setServices(servicesWithCounts);
// // // //       } catch (dataError) {
// // // //         console.log('Error loading service data counts, using basic services:', dataError);
// // // //         // If getServicesWithData fails, just use basic services
// // // //         setServices(servicesResponse.data.map(service => ({
// // // //           ...service,
// // // //           data_count: 0
// // // //         })));
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error loading services:', error);
// // // //       setError('Failed to load services');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const loadServiceData = async () => {
// // // //     if (!selectedService) return;
// // // //     try {
// // // //       setIsLoading(true);
// // // //       console.log('Loading data for service:', selectedService.id);
      
// // // //       const response = await fetchServiceData(selectedService.id);
// // // //       console.log('Raw API response:', response);
// // // //       console.log('Response data:', response.data);
      
// // // //       // The API returns { success: true, data: [...] }
// // // //       // So we need response.data.data, not just response.data
// // // //       const serviceDataArray = response.data?.data || [];
// // // //       console.log('Extracted service data:', serviceDataArray);
      
// // // //       setServiceData(serviceDataArray);
// // // //     } catch (error) {
// // // //       console.error('Error loading service data:', error);
// // // //       setError('Failed to load service data');
// // // //       setServiceData([]);
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleCreateData = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       setIsLoading(true);
      
// // // //       // If setting as default, unset others
// // // //       if (newData.is_default) {
// // // //         await Promise.all(
// // // //           serviceData.map(item => 
// // // //             updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// // // //           )
// // // //         );
// // // //       }
      
// // // //       await createServiceData(selectedService.id, newData);
// // // //       setNewData({
// // // //         name: '',
// // // //         rate: '',
// // // //         location: '',
// // // //         experience: '',
// // // //         contact: '',
// // // //         profile_link: '',
// // // //         rating: '',
// // // //         specialization: '',
// // // //         is_default: false
// // // //       });
// // // //       setShowDataModal(false);
// // // //       await loadServiceData();
// // // //       await loadServices(); // Refresh service counts
// // // //       setSuccess('Data added successfully!');
// // // //       setTimeout(() => setSuccess(''), 3000);
// // // //     } catch (error) {
// // // //       console.error('Create error:', error);
// // // //       setError(error.response?.data?.error || 'Failed to create data');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleUpdateData = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       setIsLoading(true);
      
// // // //       // If setting as default, unset others
// // // //       if (newData.is_default) {
// // // //         await Promise.all(
// // // //           serviceData
// // // //             .filter(item => item.id !== editingData.id)
// // // //             .map(item => 
// // // //               updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// // // //             )
// // // //         );
// // // //       }
      
// // // //       await updateServiceData(selectedService.id, editingData.id, newData);
// // // //       setEditingData(null);
// // // //       setShowDataModal(false);
// // // //       await loadServiceData();
// // // //       await loadServices(); // Refresh service counts
// // // //       setSuccess('Data updated successfully!');
// // // //       setTimeout(() => setSuccess(''), 3000);
// // // //     } catch (error) {
// // // //       console.error('Update error:', error);
// // // //       setError(error.response?.data?.error || 'Failed to update data');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleDeleteData = async (dataId) => {
// // // //     if (window.confirm('Are you sure you want to delete this data?')) {
// // // //       try {
// // // //         setIsLoading(true);
// // // //         await deleteServiceData(selectedService.id, dataId);
// // // //         await loadServiceData();
// // // //         await loadServices(); // Refresh service counts
// // // //         setSuccess('Data deleted successfully!');
// // // //         setTimeout(() => setSuccess(''), 3000);
// // // //       } catch (error) {
// // // //         console.error('Delete error:', error);
// // // //         setError(error.response?.data?.error || 'Failed to delete data');
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     }
// // // //   };

// // // //   const openDataModal = (data = null) => {
// // // //     if (data) {
// // // //       setEditingData(data);
// // // //       setNewData({
// // // //         name: data.name || '',
// // // //         rate: data.rate || '',
// // // //         location: data.location || '',
// // // //         experience: data.experience || '',
// // // //         contact: data.contact || '',
// // // //         profile_link: data.profile_link || '',
// // // //         rating: data.rating || '',
// // // //         specialization: data.specialization || '',
// // // //         is_default: data.is_default || false
// // // //       });
// // // //     } else {
// // // //       setEditingData(null);
// // // //       setNewData({
// // // //         name: '',
// // // //         rate: '',
// // // //         location: '',
// // // //         experience: '',
// // // //         contact: '',
// // // //         profile_link: '',
// // // //         rating: '',
// // // //         specialization: '',
// // // //         is_default: false
// // // //       });
// // // //     }
// // // //     setShowDataModal(true);
// // // //   };

// // // //   const selectService = (service) => {
// // // //     setSelectedService(service);
// // // //     setActiveView('data');
// // // //   };

// // // //   return (
// // // //     <div className="service-data-management">
// // // //       <div className="d-flex justify-content-between align-items-center mb-4">
// // // //         <div>
// // // //           <h4 className="mb-1">Service Data Management</h4>
// // // //           <p className="text-muted mb-0">Add people and details for each service</p>
// // // //         </div>
// // // //         <Badge bg="info" className="py-2 px-3">
// // // //           <FontAwesomeIcon icon={faUsers} className="me-1" />
// // // //           {selectedService ? `${serviceData.length} items` : `${services.length} services`}
// // // //         </Badge>
// // // //       </div>

// // // //       {error && (
// // // //         <Alert variant="danger" dismissible onClose={() => setError('')}>
// // // //           <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // //           {error}
// // // //         </Alert>
// // // //       )}

// // // //       {success && (
// // // //         <Alert variant="success" dismissible onClose={() => setSuccess('')}>
// // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // //           {success}
// // // //         </Alert>
// // // //       )}

// // // //       <Tab.Container activeKey={activeView} onSelect={setActiveView}>
// // // //         <Card className="shadow-sm border-0">
// // // //           <Card.Header className="bg-light">
// // // //             <Nav variant="pills" className="flex-row">
// // // //               <Nav.Item>
// // // //                 <Nav.Link eventKey="services" className="text-decoration-none">
// // // //                   <FontAwesomeIcon icon={faGear} className="me-2" />
// // // //                   Services
// // // //                   <Badge bg="secondary" className="ms-2">{services.length}</Badge>
// // // //                 </Nav.Link>
// // // //               </Nav.Item>
// // // //               {selectedService && (
// // // //                 <Nav.Item>
// // // //                   <Nav.Link eventKey="data" className="text-decoration-none">
// // // //                     <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // //                     Data for {selectedService.service_name}
// // // //                     <Badge bg="secondary" className="ms-2">{serviceData.length}</Badge>
// // // //                   </Nav.Link>
// // // //                 </Nav.Item>
// // // //               )}
// // // //             </Nav>
// // // //           </Card.Header>

// // // //           <Card.Body>
// // // //             <Tab.Content>
// // // //               {/* Services Selection Tab */}
// // // //               <Tab.Pane eventKey="services">
// // // //                 <div className="mb-3">
// // // //                   <h5>Select a service to manage its data:</h5>
// // // //                   <p className="text-muted">Choose which service you want to add people/items for</p>
// // // //                 </div>

// // // //                 {isLoading ? (
// // // //                   <div className="text-center py-4">
// // // //                     <Spinner animation="border" variant="primary" />
// // // //                     <p className="mt-2">Loading services...</p>
// // // //                   </div>
// // // //                 ) : (
// // // //                   <Row>
// // // //                     {services.map(service => (
// // // //                       <Col md={6} lg={4} key={service.id} className="mb-3">
// // // //                         <Card 
// // // //                           className="h-100 service-card"
// // // //                           style={{ cursor: 'pointer' }}
// // // //                           onClick={() => selectService(service)}
// // // //                         >
// // // //                           <Card.Body className="p-3">
// // // //                             <div className="d-flex justify-content-between align-items-start mb-2">
// // // //                               <h6 className="mb-1">{service.service_name}</h6>
// // // //                               <Badge bg={service.data_count > 0 ? "success" : "secondary"} className="small">
// // // //                                 <FontAwesomeIcon icon={faStar} className="me-1" />
// // // //                                 {service.data_count || 0} items
// // // //                               </Badge>
// // // //                             </div>
// // // //                             <p className="small text-muted mb-2">
// // // //                               Default rate: ₹{service.rate_per_day?.toLocaleString()}/day
// // // //                             </p>
// // // //                             <p className="small text-muted mb-0">
// // // //                               Category: {service.category}
// // // //                             </p>
// // // //                             <Button 
// // // //                               variant="outline-primary" 
// // // //                               size="sm" 
// // // //                               className="w-100 mt-2"
// // // //                               onClick={(e) => {
// // // //                                 e.stopPropagation();
// // // //                                 selectService(service);
// // // //                               }}
// // // //                             >
// // // //                               <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // //                               Manage Data
// // // //                             </Button>
// // // //                           </Card.Body>
// // // //                         </Card>
// // // //                       </Col>
// // // //                     ))}
// // // //                   </Row>
// // // //                 )}
// // // //               </Tab.Pane>

// // // //               {/* Service Data Tab */}
// // // //               <Tab.Pane eventKey="data">
// // // //                 {selectedService ? (
// // // //                   <>
// // // //                     <div className="d-flex justify-content-between align-items-center mb-3">
// // // //                       <div>
// // // //                         <h5 className="mb-0">Data for {selectedService.service_name}</h5>
// // // //                         <p className="text-muted mb-0">Add people, items, or options for this service</p>
// // // //                       </div>
// // // //                       <Button variant="success" onClick={() => openDataModal()}>
// // // //                         <FontAwesomeIcon icon={faPlus} className="me-2" />
// // // //                         Add New
// // // //                       </Button>
// // // //                     </div>

// // // //                     {/* Debug Info */}
// // // //                     <div className="mb-3 p-2 bg-light rounded">
// // // //                       <small className="text-muted">
// // // //                         Debug: Service ID = {selectedService.id}, Data Count = {serviceData.length}
// // // //                       </small>
// // // //                     </div>

// // // //                     {serviceData.length > 0 ? (
// // // //                       <div className="table-responsive">
// // // //                         <Table hover>
// // // //                           <thead className="bg-light">
// // // //                             <tr>
// // // //                               <th>Name</th>
// // // //                               <th>Rate</th>
// // // //                               <th>Location</th>
// // // //                               <th>Experience</th>
// // // //                               <th>Rating</th>
// // // //                               <th>Default</th>
// // // //                               <th>Actions</th>
// // // //                             </tr>
// // // //                           </thead>
// // // //                           <tbody>
// // // //                             {serviceData.map(data => (
// // // //                               <tr key={data.id} className={data.is_default ? 'table-success' : ''}>
// // // //                                 <td>
// // // //                                   <div>
// // // //                                     <strong>{data.name}</strong>
// // // //                                     {data.specialization && (
// // // //                                       <div className="small text-muted">{data.specialization}</div>
// // // //                                     )}
// // // //                                     {data.profile_link && (
// // // //                                       <div>
// // // //                                         <a 
// // // //                                           href={data.profile_link} 
// // // //                                           target="_blank" 
// // // //                                           rel="noopener noreferrer"
// // // //                                           className="small text-primary"
// // // //                                         >
// // // //                                           <FontAwesomeIcon icon={faLink} className="me-1" />
// // // //                                           Portfolio
// // // //                                         </a>
// // // //                                       </div>
// // // //                                     )}
// // // //                                   </div>
// // // //                                 </td>
// // // //                                 <td>
// // // //                                   <Badge bg="success">
// // // //                                     ₹{data.rate ? parseInt(data.rate).toLocaleString() : selectedService.rate_per_day?.toLocaleString()}
// // // //                                   </Badge>
// // // //                                 </td>
// // // //                                 <td>
// // // //                                   <span className="small">
// // // //                                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
// // // //                                     {data.location || '-'}
// // // //                                   </span>
// // // //                                 </td>
// // // //                                 <td>
// // // //                                   <span className="small">
// // // //                                     {data.experience ? `${data.experience} years` : '-'}
// // // //                                   </span>
// // // //                                 </td>
// // // //                                 <td>
// // // //                                   {data.rating && data.rating > 0 ? (
// // // //                                     <div>
// // // //                                       {[...Array(5)].map((_, i) => (
// // // //                                         <FontAwesomeIcon 
// // // //                                           key={i}
// // // //                                           icon={faStar} 
// // // //                                           className={i < data.rating ? 'text-warning' : 'text-light'}
// // // //                                         />
// // // //                                       ))}
// // // //                                     </div>
// // // //                                   ) : (
// // // //                                     <span className="small text-muted">-</span>
// // // //                                   )}
// // // //                                 </td>
// // // //                                 <td>
// // // //                                   {data.is_default && (
// // // //                                     <Badge bg="primary">
// // // //                                       <FontAwesomeIcon icon={faAward} className="me-1" />
// // // //                                       Default
// // // //                                     </Badge>
// // // //                                   )}
// // // //                                 </td>
// // // //                                 <td>
// // // //                                   <div className="d-flex gap-2">
// // // //                                     <Button 
// // // //                                       variant="outline-primary" 
// // // //                                       size="sm"
// // // //                                       onClick={() => openDataModal(data)}
// // // //                                       title="Edit"
// // // //                                     >
// // // //                                       <FontAwesomeIcon icon={faPencilAlt} />
// // // //                                     </Button>
// // // //                                     <Button 
// // // //                                       variant="outline-danger" 
// // // //                                       size="sm"
// // // //                                       onClick={() => handleDeleteData(data.id)}
// // // //                                       title="Delete"
// // // //                                     >
// // // //                                       <FontAwesomeIcon icon={faTrash} />
// // // //                                     </Button>
// // // //                                   </div>
// // // //                                 </td>
// // // //                               </tr>
// // // //                             ))}
// // // //                           </tbody>
// // // //                         </Table>
// // // //                       </div>
// // // //                     ) : (
// // // //                       <div className="text-center py-5">
// // // //                         <FontAwesomeIcon icon={faUsers} size="3x" className="text-muted mb-3" />
// // // //                         <h6>No data added for {selectedService.service_name}</h6>
// // // //                         <p className="text-muted">
// // // //                           Start by adding people, items, or options for this service
// // // //                         </p>
// // // //                         <Button variant="primary" onClick={() => openDataModal()}>
// // // //                           <FontAwesomeIcon icon={faPlus} className="me-2" />
// // // //                           Add First Item
// // // //                         </Button>
// // // //                       </div>
// // // //                     )}
// // // //                   </>
// // // //                 ) : (
// // // //                   <div className="text-center py-5">
// // // //                     <p>Please select a service to manage its data.</p>
// // // //                   </div>
// // // //                 )}
// // // //               </Tab.Pane>
// // // //             </Tab.Content>
// // // //           </Card.Body>
// // // //         </Card>
// // // //       </Tab.Container>

// // // //       {/* Data Modal */}
// // // //       <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="lg">
// // // //         <Modal.Header closeButton>
// // // //           <Modal.Title>
// // // //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// // // //             {editingData ? 'Edit' : 'Add'} {selectedService?.service_name} Data
// // // //           </Modal.Title>
// // // //         </Modal.Header>
// // // //         <Form onSubmit={editingData ? handleUpdateData : handleCreateData}>
// // // //           <Modal.Body>
// // // //             <Row>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Name *</Form.Label>
// // // //                   <Form.Control
// // // //                     type="text"
// // // //                     value={newData.name}
// // // //                     onChange={(e) => setNewData({...newData, name: e.target.value})}
// // // //                     placeholder="e.g., Amitabh Arora"
// // // //                     required
// // // //                   />
// // // //                 </Form.Group>
// // // //               </Col>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Rate per Day</Form.Label>
// // // //                   <Form.Control
// // // //                     type="number"
// // // //                     value={newData.rate}
// // // //                     onChange={(e) => setNewData({...newData, rate: e.target.value})}
// // // //                     placeholder={`Default: ${selectedService?.rate_per_day}`}
// // // //                   />
// // // //                   <Form.Text className="text-muted">
// // // //                     Leave empty to use service default rate
// // // //                   </Form.Text>
// // // //                 </Form.Group>
// // // //               </Col>
// // // //             </Row>
            
// // // //             <Row>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Location</Form.Label>
// // // //                   <Form.Control
// // // //                     type="text"
// // // //                     value={newData.location}
// // // //                     onChange={(e) => setNewData({...newData, location: e.target.value})}
// // // //                     placeholder="e.g., Mumbai"
// // // //                   />
// // // //                 </Form.Group>
// // // //               </Col>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Experience (years)</Form.Label>
// // // //                   <Form.Control
// // // //                     type="number"
// // // //                     value={newData.experience}
// // // //                     onChange={(e) => setNewData({...newData, experience: e.target.value})}
// // // //                     placeholder="e.g., 5"
// // // //                   />
// // // //                 </Form.Group>
// // // //               </Col>
// // // //             </Row>

// // // //             <Row>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Contact</Form.Label>
// // // //                   <Form.Control
// // // //                     type="text"
// // // //                     value={newData.contact}
// // // //                     onChange={(e) => setNewData({...newData, contact: e.target.value})}
// // // //                     placeholder="Phone or email"
// // // //                   />
// // // //                 </Form.Group>
// // // //               </Col>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Rating</Form.Label>
// // // //                   <Form.Select
// // // //                     value={newData.rating}
// // // //                     onChange={(e) => setNewData({...newData, rating: e.target.value})}
// // // //                   >
// // // //                     <option value="">Select Rating</option>
// // // //                     {[1,2,3,4,5].map(rating => (
// // // //                       <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
// // // //                     ))}
// // // //                   </Form.Select>
// // // //                 </Form.Group>
// // // //               </Col>
// // // //             </Row>

// // // //             <Row>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Profile/Portfolio Link</Form.Label>
// // // //                   <Form.Control
// // // //                     type="url"
// // // //                     value={newData.profile_link}
// // // //                     onChange={(e) => setNewData({...newData, profile_link: e.target.value})}
// // // //                     placeholder="https://..."
// // // //                   />
// // // //                 </Form.Group>
// // // //               </Col>
// // // //               <Col md={6}>
// // // //                 <Form.Group className="mb-3">
// // // //                   <Form.Label>Specialization</Form.Label>
// // // //                   <Form.Control
// // // //                     type="text"
// // // //                     value={newData.specialization}
// // // //                     onChange={(e) => setNewData({...newData, specialization: e.target.value})}
// // // //                     placeholder="e.g., Commercial Films"
// // // //                   />
// // // //                 </Form.Group>
// // // //               </Col>
// // // //             </Row>

// // // //             <Form.Group className="mb-3">
// // // //               <Form.Check
// // // //                 type="checkbox"
// // // //                 label="Set as default selection for proposals"
// // // //                 checked={newData.is_default}
// // // //                 onChange={(e) => setNewData({...newData, is_default: e.target.checked})}
// // // //               />
// // // //               <Form.Text className="text-muted">
// // // //                 This will be auto-selected when users add this service to proposals
// // // //               </Form.Text>
// // // //             </Form.Group>
// // // //           </Modal.Body>
// // // //           <Modal.Footer>
// // // //             <Button variant="secondary" onClick={() => setShowDataModal(false)}>
// // // //               Cancel
// // // //             </Button>
// // // //             <Button type="submit" variant="primary" disabled={isLoading}>
// // // //               {isLoading ? <Spinner size="sm" className="me-2" /> : null}
// // // //               {editingData ? 'Update' : 'Add'} Data
// // // //             </Button>
// // // //           </Modal.Footer>
// // // //         </Form>
// // // //       </Modal>

// // // //       <style jsx>{`
// // // //         .service-card {
// // // //           transition: all 0.2s ease;
// // // //           border: 2px solid transparent;
// // // //         }
        
// // // //         .service-card:hover {
// // // //           border-color: #0d6efd;
// // // //           box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
// // // //           transform: translateY(-2px);
// // // //         }
        
// // // //         .table-success {
// // // //           background-color: rgba(40, 167, 69, 0.1) !important;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default ServiceDataManagement;
// // // import React, { useState, useEffect } from 'react';
// // // import { 
// // //   Table, 
// // //   Form, 
// // //   Button, 
// // //   Alert, 
// // //   Card, 
// // //   Row, 
// // //   Col, 
// // //   Modal,
// // //   Badge,
// // //   Spinner,
// // //   Nav,
// // //   Tab,
// // //   Dropdown,
// // //   ListGroup,
// // //   ProgressBar
// // // } from 'react-bootstrap';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { 
// // //   faPlus, 
// // //   faPencilAlt, 
// // //   faTrash, 
// // //   faCheck, 
// // //   faTimes, 
// // //   faInfoCircle,
// // //   faUsers,
// // //   faDownload,
// // //   faEdit,
// // //   faStar,
// // //   faEnvelope,
// // //   faPhone,
// // //   faLink,
// // //   faMapMarkerAlt,
// // //   faAward,
// // //   faChevronDown,
// // //   faGear,
// // //   faUpload,
// // //   faFileExcel,
// // //   faExclamationTriangle
// // // } from '@fortawesome/free-solid-svg-icons';

// // // // Import API functions
// // // import { 
// // //   fetchServices,
// // //   createServiceData,
// // //   updateServiceData,
// // //   deleteServiceData,
// // //   fetchServiceData,
// // //   getServicesWithData
// // // } from '../../services/api';

// // // // Bulk Upload Modal Component
// // // const BulkUploadModal = ({ 
// // //   show, 
// // //   onHide, 
// // //   selectedService, 
// // //   onBulkUpload, 
// // //   isLoading 
// // // }) => {
// // //   const [uploadFile, setUploadFile] = useState(null);
// // //   const [excelData, setExcelData] = useState([]);
// // //   const [columnMapping, setColumnMapping] = useState({});
// // //   const [validationErrors, setValidationErrors] = useState([]);
// // //   const [uploadStep, setUploadStep] = useState(1);
// // //   const [processedData, setProcessedData] = useState([]);
// // //   const [uploadProgress, setUploadProgress] = useState(0);

// // //   const availableColumns = [
// // //     { key: 'name', label: 'Name', required: true },
// // //     { key: 'rate', label: 'Rate per Day', required: false },
// // //     { key: 'location', label: 'Location', required: false },
// // //     { key: 'experience', label: 'Experience (years)', required: false },
// // //     { key: 'contact', label: 'Contact', required: false },
// // //     { key: 'profile_link', label: 'Profile Link', required: false },
// // //     { key: 'rating', label: 'Rating (1-5)', required: false },
// // //     { key: 'specialization', label: 'Specialization', required: false },
// // //     { key: 'is_default', label: 'Is Default', required: false }
// // //   ];

// // //   const resetModal = () => {
// // //     setUploadFile(null);
// // //     setExcelData([]);
// // //     setColumnMapping({});
// // //     setValidationErrors([]);
// // //     setUploadStep(1);
// // //     setProcessedData([]);
// // //     setUploadProgress(0);
// // //   };

// // //   const handleFileUpload = async (event) => {
// // //     const file = event.target.files[0];
// // //     if (!file) return;

// // //     const fileType = file.name.split('.').pop().toLowerCase();
// // //     if (!['xlsx', 'xls', 'csv'].includes(fileType)) {
// // //       alert('Please upload an Excel file (.xlsx, .xls) or CSV file');
// // //       return;
// // //     }

// // //     setUploadFile(file);
    
// // //     // Dynamic import of xlsx
// // //     try {
// // //       const XLSX = await import('xlsx');
// // //       const reader = new FileReader();

// // //       reader.onload = (e) => {
// // //         try {
// // //           const data = new Uint8Array(e.target.result);
// // //           const workbook = XLSX.read(data, { type: 'array' });
// // //           const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
// // //           const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          
// // //           if (jsonData.length < 2) {
// // //             alert('Excel file must have at least a header row and one data row');
// // //             return;
// // //           }

// // //           const headers = jsonData[0];
// // //           const rows = jsonData.slice(1).filter(row => 
// // //             row.some(cell => cell !== undefined && cell !== '' && cell !== null)
// // //           );
          
// // //           setExcelData({ headers, rows });
// // //           setUploadStep(2);
          
// // //           // Auto-map common column names
// // //           const autoMapping = {};
// // //           headers.forEach((header, index) => {
// // //             const headerLower = header.toString().toLowerCase().trim();
// // //             const matchedColumn = availableColumns.find(col => {
// // //               const colKey = col.key.toLowerCase();
// // //               return headerLower.includes(colKey) || 
// // //                      headerLower.includes(col.label.toLowerCase()) ||
// // //                      (col.key === 'name' && (headerLower.includes('name') || headerLower.includes('person'))) ||
// // //                      (col.key === 'rate' && (headerLower.includes('rate') || headerLower.includes('price') || headerLower.includes('cost'))) ||
// // //                      (col.key === 'location' && (headerLower.includes('location') || headerLower.includes('city'))) ||
// // //                      (col.key === 'experience' && (headerLower.includes('experience') || headerLower.includes('exp'))) ||
// // //                      (col.key === 'contact' && (headerLower.includes('contact') || headerLower.includes('phone') || headerLower.includes('email'))) ||
// // //                      (col.key === 'rating' && (headerLower.includes('rating') || headerLower.includes('star'))) ||
// // //                      (col.key === 'specialization' && (headerLower.includes('special') || headerLower.includes('skill')));
// // //             });
            
// // //             if (matchedColumn) {
// // //               autoMapping[matchedColumn.key] = index;
// // //             }
// // //           });
          
// // //           setColumnMapping(autoMapping);
// // //         } catch (error) {
// // //           console.error('Error parsing Excel file:', error);
// // //           alert('Error parsing Excel file. Please check the file format.');
// // //         }
// // //       };

// // //       reader.readAsArrayBuffer(file);
// // //     } catch (error) {
// // //       console.error('Error loading XLSX library:', error);
// // //       alert('Error loading Excel parser. Please try again.');
// // //     }
// // //   };

// // //   const handleColumnMapping = (columnKey, excelColumnIndex) => {
// // //     setColumnMapping(prev => ({
// // //       ...prev,
// // //       [columnKey]: excelColumnIndex === '' ? undefined : parseInt(excelColumnIndex)
// // //     }));
// // //   };

// // //   const validateAndProcessData = () => {
// // //     const errors = [];
// // //     const processed = [];

// // //     const requiredFields = availableColumns.filter(col => col.required);
// // //     requiredFields.forEach(field => {
// // //       if (columnMapping[field.key] === undefined) {
// // //         errors.push(`Required field "${field.label}" must be mapped`);
// // //       }
// // //     });

// // //     if (errors.length > 0) {
// // //       setValidationErrors(errors);
// // //       return;
// // //     }

// // //     excelData.rows.forEach((row, index) => {
// // //       const rowData = {};
// // //       const rowErrors = [];

// // //       Object.keys(columnMapping).forEach(key => {
// // //         const columnIndex = columnMapping[key];
// // //         if (columnIndex !== undefined) {
// // //           let value = row[columnIndex];
          
// // //           if (value !== undefined && value !== null && value !== '') {
// // //             if (key === 'name') {
// // //               value = value.toString().trim();
// // //               if (!value) {
// // //                 rowErrors.push(`Row ${index + 2}: Name is required`);
// // //               }
// // //             } else if (key === 'rate' || key === 'experience' || key === 'rating') {
// // //               value = parseFloat(value);
// // //               if (isNaN(value)) {
// // //                 value = null;
// // //               } else if (key === 'rating' && (value < 1 || value > 5)) {
// // //                 rowErrors.push(`Row ${index + 2}: Rating must be between 1 and 5`);
// // //               }
// // //             } else if (key === 'is_default') {
// // //               value = ['true', '1', 'yes', 'y', 'default'].includes(
// // //                 value.toString().toLowerCase().trim()
// // //               );
// // //             } else if (key === 'profile_link') {
// // //               value = value.toString().trim();
// // //               if (value && !value.startsWith('http')) {
// // //                 value = 'https://' + value;
// // //               }
// // //             } else {
// // //               value = value.toString().trim();
// // //             }
// // //           } else {
// // //             value = key === 'is_default' ? false : null;
// // //           }
          
// // //           rowData[key] = value;
// // //         }
// // //       });

// // //       if (!rowData.name) {
// // //         return;
// // //       }

// // //       if (rowErrors.length > 0) {
// // //         errors.push(...rowErrors);
// // //       } else {
// // //         processed.push({
// // //           ...rowData,
// // //           rowNumber: index + 2
// // //         });
// // //       }
// // //     });

// // //     setValidationErrors(errors);
// // //     setProcessedData(processed);
// // //     setUploadStep(3);
// // //   };

// // //   const handleBulkUpload = async () => {
// // //     if (processedData.length === 0) return;

// // //     try {
// // //       setUploadProgress(0);
      
// // //       const hasDefault = processedData.some(item => item.is_default);
      
// // //       const results = [];
// // //       for (let i = 0; i < processedData.length; i++) {
// // //         const item = processedData[i];
// // //         try {
// // //           const { rowNumber, ...dataToSend } = item;
          
// // //           await onBulkUpload(dataToSend, hasDefault && i === 0);
// // //           results.push({ success: true, item, rowNumber });
// // //         } catch (error) {
// // //           results.push({ success: false, item, error: error.message, rowNumber });
// // //         }
        
// // //         setUploadProgress(((i + 1) / processedData.length) * 100);
// // //       }
      
// // //       const successCount = results.filter(r => r.success).length;
// // //       const errorCount = results.filter(r => !r.success).length;
      
// // //       if (errorCount === 0) {
// // //         alert(`Successfully uploaded ${successCount} items!`);
// // //         onHide();
// // //         resetModal();
// // //       } else {
// // //         const errorMessages = results
// // //           .filter(r => !r.success)
// // //           .map(r => `Row ${r.rowNumber}: ${r.error}`)
// // //           .join('\n');
// // //         alert(`Upload completed with ${successCount} successful and ${errorCount} failed items:\n\n${errorMessages}`);
// // //       }
// // //     } catch (error) {
// // //       console.error('Bulk upload error:', error);
// // //       alert('Error during bulk upload: ' + error.message);
// // //     }
// // //   };

// // //   const downloadTemplate = async () => {
// // //     try {
// // //       const XLSX = await import('xlsx');
// // //       const templateData = [
// // //         ['Name', 'Rate per Day', 'Location', 'Experience', 'Contact', 'Profile Link', 'Rating', 'Specialization', 'Is Default'],
// // //         ['John Doe', '5000', 'Mumbai', '5', 'john@example.com', 'https://johndoe.com', '4', 'Commercial Films', 'FALSE'],
// // //         ['Jane Smith', '7500', 'Delhi', '8', '+91 9876543210', '', '5', 'Wedding Photography', 'TRUE']
// // //       ];

// // //       const ws = XLSX.utils.aoa_to_sheet(templateData);
// // //       const wb = XLSX.utils.book_new();
// // //       XLSX.utils.book_append_sheet(wb, ws, 'Template');
// // //       XLSX.writeFile(wb, `${selectedService?.service_name || 'service'}_data_template.xlsx`);
// // //     } catch (error) {
// // //       console.error('Error downloading template:', error);
// // //       alert('Error downloading template. Please try again.');
// // //     }
// // //   };

// // //   if (!show) return null;

// // //   return (
// // //     <Modal show={show} onHide={() => { onHide(); resetModal(); }} size="xl">
// // //       <Modal.Header closeButton>
// // //         <Modal.Title>
// // //           <FontAwesomeIcon icon={faFileExcel} className="me-2" />
// // //           Bulk Upload - {selectedService?.service_name}
// // //         </Modal.Title>
// // //       </Modal.Header>
// // //       <Modal.Body>
// // //         {/* Step Indicator */}
// // //         <div className="mb-4">
// // //           <div className="d-flex justify-content-between align-items-center mb-2">
// // //             {[1, 2, 3, 4].map(step => (
// // //               <div key={step} className="text-center">
// // //                 <div className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
// // //                   uploadStep >= step ? 'bg-primary text-white' : 'bg-light text-muted'
// // //                 }`} style={{ width: '30px', height: '30px' }}>
// // //                   {step}
// // //                 </div>
// // //                 <div className="small mt-1">
// // //                   {step === 1 && 'Upload'}
// // //                   {step === 2 && 'Map'}
// // //                   {step === 3 && 'Validate'}
// // //                   {step === 4 && 'Confirm'}
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //           <ProgressBar now={(uploadStep - 1) * 33.33} className="mt-2" />
// // //         </div>

// // //         {/* Step 1: File Upload */}
// // //         {uploadStep === 1 && (
// // //           <div>
// // //             <Card className="mb-3">
// // //               <Card.Body className="text-center">
// // //                 <FontAwesomeIcon icon={faDownload} size="2x" className="text-primary mb-3" />
// // //                 <h6>Download Template</h6>
// // //                 <p className="text-muted">Start with our template to ensure proper formatting</p>
// // //                 <Button variant="outline-primary" onClick={downloadTemplate}>
// // //                   <FontAwesomeIcon icon={faDownload} className="me-2" />
// // //                   Download Template
// // //                 </Button>
// // //               </Card.Body>
// // //             </Card>

// // //             <Card>
// // //               <Card.Body className="text-center">
// // //                 <FontAwesomeIcon icon={faUpload} size="2x" className="text-success mb-3" />
// // //                 <h6>Upload Excel File</h6>
// // //                 <p className="text-muted">Select an Excel file (.xlsx, .xls) or CSV file</p>
// // //                 <Form.Control
// // //                   type="file"
// // //                   accept=".xlsx,.xls,.csv"
// // //                   onChange={handleFileUpload}
// // //                   className="mb-3"
// // //                 />
// // //                 {uploadFile && (
// // //                   <Alert variant="info">
// // //                     <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// // //                     File selected: {uploadFile.name}
// // //                   </Alert>
// // //                 )}
// // //               </Card.Body>
// // //             </Card>
// // //           </div>
// // //         )}

// // //         {/* Step 2: Column Mapping */}
// // //         {uploadStep === 2 && (
// // //           <div>
// // //             <Alert variant="info">
// // //               <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// // //               Map your Excel columns to the service data fields. Required fields are marked with *.
// // //             </Alert>

// // //             <Row>
// // //               <Col md={6}>
// // //                 <h6>Your Excel Columns</h6>
// // //                 <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
// // //                   {excelData.headers?.map((header, index) => (
// // //                     <Badge key={index} bg="secondary" className="me-2 mb-2">
// // //                       {index}: {header}
// // //                     </Badge>
// // //                   ))}
// // //                 </div>
// // //               </Col>
// // //               <Col md={6}>
// // //                 <h6>Sample Data (First Row)</h6>
// // //                 <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
// // //                   {excelData.rows?.[0]?.map((cell, index) => (
// // //                     <div key={index} className="small mb-1">
// // //                       <strong>{index}:</strong> {cell}
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </Col>
// // //             </Row>

// // //             <h6>Column Mapping</h6>
// // //             <Table striped bordered size="sm">
// // //               <thead>
// // //                 <tr>
// // //                   <th>Field</th>
// // //                   <th>Required</th>
// // //                   <th>Excel Column</th>
// // //                   <th>Preview</th>
// // //                 </tr>
// // //               </thead>
// // //               <tbody>
// // //                 {availableColumns.map(column => (
// // //                   <tr key={column.key}>
// // //                     <td>
// // //                       {column.label}
// // //                       {column.required && <span className="text-danger">*</span>}
// // //                     </td>
// // //                     <td>
// // //                       {column.required ? (
// // //                         <Badge bg="danger">Required</Badge>
// // //                       ) : (
// // //                         <Badge bg="secondary">Optional</Badge>
// // //                       )}
// // //                     </td>
// // //                     <td>
// // //                       <Form.Select
// // //                         size="sm"
// // //                         value={columnMapping[column.key] || ''}
// // //                         onChange={(e) => handleColumnMapping(column.key, e.target.value)}
// // //                       >
// // //                         <option value="">Select column...</option>
// // //                         {excelData.headers?.map((header, index) => (
// // //                           <option key={index} value={index}>
// // //                             {index}: {header}
// // //                           </option>
// // //                         ))}
// // //                       </Form.Select>
// // //                     </td>
// // //                     <td>
// // //                       {columnMapping[column.key] !== undefined ? (
// // //                         <small className="text-muted">
// // //                           {excelData.rows?.[0]?.[columnMapping[column.key]] || 'Empty'}
// // //                         </small>
// // //                       ) : (
// // //                         <small className="text-muted">Not mapped</small>
// // //                       )}
// // //                     </td>
// // //                   </tr>
// // //                 ))}
// // //               </tbody>
// // //             </Table>

// // //             <div className="d-flex justify-content-between">
// // //               <Button variant="secondary" onClick={() => setUploadStep(1)}>
// // //                 Back
// // //               </Button>
// // //               <Button variant="primary" onClick={validateAndProcessData}>
// // //                 Validate Data
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Step 3: Validation */}
// // //         {uploadStep === 3 && (
// // //           <div>
// // //             {validationErrors.length > 0 ? (
// // //               <Alert variant="danger">
// // //                 <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // //                 <strong>Validation Errors:</strong>
// // //                 <ul className="mb-0 mt-2">
// // //                   {validationErrors.map((error, index) => (
// // //                     <li key={index}>{error}</li>
// // //                   ))}
// // //                 </ul>
// // //               </Alert>
// // //             ) : (
// // //               <Alert variant="success">
// // //                 <FontAwesomeIcon icon={faCheck} className="me-2" />
// // //                 Data validation successful! {processedData.length} records ready for upload.
// // //               </Alert>
// // //             )}

// // //             <h6>Data Preview</h6>
// // //             <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
// // //               <Table striped bordered size="sm">
// // //                 <thead>
// // //                   <tr>
// // //                     <th>Row</th>
// // //                     <th>Name</th>
// // //                     <th>Rate</th>
// // //                     <th>Location</th>
// // //                     <th>Experience</th>
// // //                     <th>Contact</th>
// // //                     <th>Rating</th>
// // //                     <th>Default</th>
// // //                   </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                   {processedData.map((item, index) => (
// // //                     <tr key={index}>
// // //                       <td>{item.rowNumber}</td>
// // //                       <td>{item.name}</td>
// // //                       <td>{item.rate ? `₹${item.rate}` : '-'}</td>
// // //                       <td>{item.location || '-'}</td>
// // //                       <td>{item.experience || '-'}</td>
// // //                       <td>{item.contact || '-'}</td>
// // //                       <td>{item.rating || '-'}</td>
// // //                       <td>{item.is_default ? '✓' : '-'}</td>
// // //                     </tr>
// // //                   ))}
// // //                 </tbody>
// // //               </Table>
// // //             </div>

// // //             <div className="d-flex justify-content-between">
// // //               <Button variant="secondary" onClick={() => setUploadStep(2)}>
// // //                 Back
// // //               </Button>
// // //               {validationErrors.length === 0 && (
// // //                 <Button variant="success" onClick={() => setUploadStep(4)}>
// // //                   Continue to Upload
// // //                 </Button>
// // //               )}
// // //             </div>
// // //           </div>
// // //         )}

// // //         {/* Step 4: Confirm Upload */}
// // //         {uploadStep === 4 && (
// // //           <div>
// // //             <Alert variant="warning">
// // //               <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// // //               <strong>Confirm Upload</strong>
// // //               <p className="mb-0 mt-2">
// // //                 You are about to upload {processedData.length} records to {selectedService?.service_name}. 
// // //                 This action cannot be undone.
// // //               </p>
// // //             </Alert>

// // //             {uploadProgress > 0 && (
// // //               <div className="mb-3">
// // //                 <div className="d-flex justify-content-between">
// // //                   <span>Upload Progress</span>
// // //                   <span>{Math.round(uploadProgress)}%</span>
// // //                 </div>
// // //                 <ProgressBar now={uploadProgress} />
// // //               </div>
// // //             )}

// // //             <div className="d-flex justify-content-between">
// // //               <Button variant="secondary" onClick={() => setUploadStep(3)} disabled={isLoading}>
// // //                 Back
// // //               </Button>
// // //               <Button variant="success" onClick={handleBulkUpload} disabled={isLoading}>
// // //                 {isLoading ? (
// // //                   <>
// // //                     <Spinner size="sm" className="me-2" />
// // //                     Uploading...
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <FontAwesomeIcon icon={faUpload} className="me-2" />
// // //                     Upload Data
// // //                   </>
// // //                 )}
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </Modal.Body>
// // //     </Modal>
// // //   );
// // // };

// // // function ServiceDataManagement() {
// // //   const [services, setServices] = useState([]);
// // //   const [selectedService, setSelectedService] = useState(null);
// // //   const [serviceData, setServiceData] = useState([]);
// // //   const [activeView, setActiveView] = useState('services');
  
// // //   // Form states
// // //   const [showDataModal, setShowDataModal] = useState(false);
// // //   const [showBulkUpload, setShowBulkUpload] = useState(false);
// // //   const [editingData, setEditingData] = useState(null);
// // //   const [newData, setNewData] = useState({
// // //     name: '',
// // //     rate: '',
// // //     location: '',
// // //     experience: '',
// // //     contact: '',
// // //     profile_link: '',
// // //     rating: '',
// // //     specialization: '',
// // //     is_default: false
// // //   });
  
// // //   // Loading states
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [error, setError] = useState('');
// // //   const [success, setSuccess] = useState('');

// // //   useEffect(() => {
// // //     loadServices();
// // //   }, []);

// // //   useEffect(() => {
// // //     if (selectedService) {
// // //       loadServiceData();
// // //     }
// // //   }, [selectedService]);

// // //   // API function for bulk upload
// // //   const bulkCreateServiceData = async (serviceId, dataArray, unsetDefaults = false) => {
// // //     const response = await fetch(`/api/service-data/${serviceId}/bulk`, {
// // //       method: 'POST',
// // //       headers: {
// // //         'Content-Type': 'application/json',
// // //         'Authorization': `Bearer ${localStorage.getItem('token')}`
// // //       },
// // //       body: JSON.stringify({ 
// // //         data: dataArray, 
// // //         unsetDefaults 
// // //       })
// // //     });
    
// // //     if (!response.ok) {
// // //       const error = await response.json();
// // //       throw new Error(error.error || 'Failed to bulk upload data');
// // //     }
    
// // //     return response.json();
// // //   };

// // //   // Handle bulk upload
// // //   const handleBulkUpload = async (itemData, unsetDefaults = false) => {
// // //     try {
// // //       await bulkCreateServiceData(selectedService.id, [itemData], unsetDefaults);
// // //     } catch (error) {
// // //       throw error;
// // //     }
// // //   };

// // //   // Load services and their data counts
// // //   const loadServices = async () => {
// // //     try {
// // //       setIsLoading(true);
      
// // //       // Load services
// // //       const servicesResponse = await fetchServices();
// // //       console.log('Loaded services:', servicesResponse.data);
      
// // //       // Load services with data counts
// // //       try {
// // //         const servicesWithDataResponse = await getServicesWithData();
// // //         console.log('Services with data:', servicesWithDataResponse.data);
        
// // //         // Merge the data
// // //         const servicesWithCounts = servicesResponse.data.map(service => {
// // //           const serviceWithData = servicesWithDataResponse.data?.data?.find(s => s.id === service.id);
// // //           return {
// // //             ...service,
// // //             data_count: serviceWithData?.data_count || 0,
// // //             default_name: serviceWithData?.default_name || null
// // //           };
// // //         });
        
// // //         setServices(servicesWithCounts);
// // //       } catch (dataError) {
// // //         console.log('Error loading service data counts, using basic services:', dataError);
// // //         // If getServicesWithData fails, just use basic services
// // //         setServices(servicesResponse.data.map(service => ({
// // //           ...service,
// // //           data_count: 0
// // //         })));
// // //       }
// // //     } catch (error) {
// // //       console.error('Error loading services:', error);
// // //       setError('Failed to load services');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const loadServiceData = async () => {
// // //     if (!selectedService) return;
// // //     try {
// // //       setIsLoading(true);
// // //       console.log('Loading data for service:', selectedService.id);
      
// // //       const response = await fetchServiceData(selectedService.id);
// // //       console.log('Raw API response:', response);
// // //       console.log('Response data:', response.data);
      
// // //       // The API returns { success: true, data: [...] }
// // //       // So we need response.data.data, not just response.data
// // //       const serviceDataArray = response.data?.data || [];
// // //       console.log('Extracted service data:', serviceDataArray);
      
// // //       setServiceData(serviceDataArray);
// // //     } catch (error) {
// // //       console.error('Error loading service data:', error);
// // //       setError('Failed to load service data');
// // //       setServiceData([]);
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleCreateData = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       setIsLoading(true);
      
// // //       // If setting as default, unset others
// // //       if (newData.is_default) {
// // //         await Promise.all(
// // //           serviceData.map(item => 
// // //             updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// // //           )
// // //         );
// // //       }
      
// // //       await createServiceData(selectedService.id, newData);
// // //       setNewData({
// // //         name: '',
// // //         rate: '',
// // //         location: '',
// // //         experience: '',
// // //         contact: '',
// // //         profile_link: '',
// // //         rating: '',
// // //         specialization: '',
// // //         is_default: false
// // //       });
// // //       setShowDataModal(false);
// // //       await loadServiceData();
// // //       await loadServices(); // Refresh service counts
// // //       setSuccess('Data added successfully!');
// // //       setTimeout(() => setSuccess(''), 3000);
// // //     } catch (error) {
// // //       console.error('Create error:', error);
// // //       setError(error.response?.data?.error || 'Failed to create data');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleUpdateData = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       setIsLoading(true);
      
// // //       // If setting as default, unset others
// // //       if (newData.is_default) {
// // //         await Promise.all(
// // //           serviceData
// // //             .filter(item => item.id !== editingData.id)
// // //             .map(item => 
// // //               updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// // //             )
// // //         );
// // //       }
      
// // //       await updateServiceData(selectedService.id, editingData.id, newData);
// // //       setEditingData(null);
// // //       setShowDataModal(false);
// // //       await loadServiceData();
// // //       await loadServices(); // Refresh service counts
// // //       setSuccess('Data updated successfully!');
// // //       setTimeout(() => setSuccess(''), 3000);
// // //     } catch (error) {
// // //       console.error('Update error:', error);
// // //       setError(error.response?.data?.error || 'Failed to update data');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   const handleDeleteData = async (dataId) => {
// // //     if (window.confirm('Are you sure you want to delete this data?')) {
// // //       try {
// // //         setIsLoading(true);
// // //         await deleteServiceData(selectedService.id, dataId);
// // //         await loadServiceData();
// // //         await loadServices(); // Refresh service counts
// // //         setSuccess('Data deleted successfully!');
// // //         setTimeout(() => setSuccess(''), 3000);
// // //       } catch (error) {
// // //         console.error('Delete error:', error);
// // //         setError(error.response?.data?.error || 'Failed to delete data');
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     }
// // //   };

// // //   const openDataModal = (data = null) => {
// // //     if (data) {
// // //       setEditingData(data);
// // //       setNewData({
// // //         name: data.name || '',
// // //         rate: data.rate || '',
// // //         location: data.location || '',
// // //         experience: data.experience || '',
// // //         contact: data.contact || '',
// // //         profile_link: data.profile_link || '',
// // //         rating: data.rating || '',
// // //         specialization: data.specialization || '',
// // //         is_default: data.is_default || false
// // //       });
// // //     } else {
// // //       setEditingData(null);
// // //       setNewData({
// // //         name: '',
// // //         rate: '',
// // //         location: '',
// // //         experience: '',
// // //         contact: '',
// // //         profile_link: '',
// // //         rating: '',
// // //         specialization: '',
// // //         is_default: false
// // //       });
// // //     }
// // //     setShowDataModal(true);
// // //   };

// // //   const selectService = (service) => {
// // //     setSelectedService(service);
// // //     setActiveView('data');
// // //   };

// // //   const handleBulkUploadComplete = async () => {
// // //     // Refresh data after bulk upload
// // //     await loadServiceData();
// // //     await loadServices();
// // //     setSuccess('Bulk upload completed successfully!');
// // //     setTimeout(() => setSuccess(''), 3000);
// // //   };

// // //   return (
// // //     <div className="service-data-management">
// // //       <div className="d-flex justify-content-between align-items-center mb-4">
// // //         <div>
// // //           <h4 className="mb-1">Service Data Management</h4>
// // //           <p className="text-muted mb-0">Add people and details for each service</p>
// // //         </div>
// // //         <Badge bg="info" className="py-2 px-3">
// // //           <FontAwesomeIcon icon={faUsers} className="me-1" />
// // //           {selectedService ? `${serviceData.length} items` : `${services.length} services`}
// // //         </Badge>
// // //       </div>

// // //       {error && (
// // //         <Alert variant="danger" dismissible onClose={() => setError('')}>
// // //           <FontAwesomeIcon icon={faTimes} className="me-2" />
// // //           {error}
// // //         </Alert>
// // //       )}

// // //       {success && (
// // //         <Alert variant="success" dismissible onClose={() => setSuccess('')}>
// // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // //           {success}
// // //         </Alert>
// // //       )}

// // //       <Tab.Container activeKey={activeView} onSelect={setActiveView}>
// // //         <Card className="shadow-sm border-0">
// // //           <Card.Header className="bg-light">
// // //             <Nav variant="pills" className="flex-row">
// // //               <Nav.Item>
// // //                 <Nav.Link eventKey="services" className="text-decoration-none">
// // //                   <FontAwesomeIcon icon={faGear} className="me-2" />
// // //                   Services
// // //                   <Badge bg="secondary" className="ms-2">{services.length}</Badge>
// // //                 </Nav.Link>
// // //               </Nav.Item>
// // //               {selectedService && (
// // //                 <Nav.Item>
// // //                   <Nav.Link eventKey="data" className="text-decoration-none">
// // //                     <FontAwesomeIcon icon={faUsers} className="me-2" />
// // //                     Data for {selectedService.service_name}
// // //                     <Badge bg="secondary" className="ms-2">{serviceData.length}</Badge>
// // //                   </Nav.Link>
// // //                 </Nav.Item>
// // //               )}
// // //             </Nav>
// // //           </Card.Header>

// // //           <Card.Body>
// // //             <Tab.Content>
// // //               {/* Services Selection Tab */}
// // //               {/* <Tab.Pane eventKey="services">
// // //                 <div className="mb-3">
// // //                   <h5>Select a service to manage its data:</h5>
// // //                   <p className="text-muted">Choose which service you want to add people/items for</p>
// // //                 </div>

// // //                 {isLoading ? (
// // //                   <div className="text-center py-4">
// // //                     <Spinner animation="border" variant="primary" />
// // //                     <p className="mt-2">Loading services...</p>
// // //                   </div>
// // //                 ) : (
// // //                   <Row>
// // //                     {services.map(service => (
// // //                       <Col md={6} lg={4} key={service.id} className="mb-3">
// // //                         <Card 
// // //                           className="h-100 service-card"
// // //                           style={{ cursor: 'pointer' }}
// // //                           onClick={() => selectService(service)}
// // //                         >
// // //                           <Card.Body className="p-3">
// // //                             <div className="d-flex justify-content-between align-items-start mb-2">
// // //                               <h6 className="mb-1">{service.service_name}</h6>
// // //                               <Badge bg={service.data_count > 0 ? "success" : "secondary"} className="small">
// // //                                 <FontAwesomeIcon icon={faStar} className="me-1" />
// // //                                 {service.data_count || 0} items
// // //                               </Badge>
// // //                             </div>
// // //                             <p className="small text-muted mb-2">
// // //                               Default rate: ₹{service.rate_per_day?.toLocaleString()}/day
// // //                             </p>
// // //                             <p className="small text-muted mb-0">
// // //                               Category: {service.category}
// // //                             </p>
// // //                             <Button 
// // //                               variant="outline-primary" 
// // //                               size="sm" 
// // //                               className="w-100 mt-2"
// // //                               onClick={(e) => {
// // //                                 e.stopPropagation();
// // //                                 selectService(service);
// // //                               }}
// // //                             >
// // //                               <FontAwesomeIcon icon={faUsers} className="me-2" />
// // //                               Manage Data
// // //                             </Button>
// // //                           </Card.Body>
// // //                         </Card>
// // //                       </Col>
// // //                     ))}
// // //                   </Row>
// // //                 )}
// // //               </Tab.Pane> */}
// // //               {/* Services Selection Tab */}
// // //               <Tab.Pane eventKey="services">
// // //                 <div className="mb-3">
// // //                   <h5>Select a service to manage its data:</h5>
// // //                   <p className="text-muted">Choose which service you want to add people/items for</p>
// // //                 </div>

// // //                 {isLoading ? (
// // //                   <div className="text-center py-4">
// // //                     <Spinner animation="border" variant="primary" />
// // //                     <p className="mt-2">Loading services...</p>
// // //                   </div>
// // //                 ) : (
// // //                   <div className="table-responsive">
// // //                     <Table hover className="align-middle">
// // //                       <thead className="bg-light">
// // //                         <tr>
// // //                           <th>Service Name</th>
// // //                           <th>Items</th>
// // //                           <th>Category</th>
// // //                           <th>Default Rate</th>
// // //                           <th>Default Item</th>
// // //                           <th>Action</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody>
// // //                         {services.map(service => (
// // //                           <tr key={service.id} className="service-row">
// // //                             <td>
// // //                               <div className="d-flex align-items-center">
// // //                                 <FontAwesomeIcon icon={faGear} className="text-muted me-2" />
// // //                                 <strong>{service.service_name}</strong>
// // //                               </div>
// // //                             </td>
// // //                             <td>
// // //                               <Badge bg={service.data_count > 0 ? "success" : "secondary"}>
// // //                                 <FontAwesomeIcon icon={faUsers} className="me-1" />
// // //                                 {service.data_count || 0} items
// // //                               </Badge>
// // //                             </td>
// // //                             <td>
// // //                               <span className="text-muted text-capitalize">{service.category}</span>
// // //                             </td>
// // //                             <td>
// // //                               <Badge bg="info" className="fw-normal">
// // //                                 ₹{service.rate_per_day?.toLocaleString()}/day
// // //                               </Badge>
// // //                             </td>
// // //                             <td>
// // //                               {service.default_name ? (
// // //                                 <span className="text-success">
// // //                                   <FontAwesomeIcon icon={faCheck} className="me-1" />
// // //                                   {service.default_name}
// // //                                 </span>
// // //                               ) : (
// // //                                 <span className="text-muted">-</span>
// // //                               )}
// // //                             </td>
// // //                             <td>
// // //                               <Button 
// // //                                 variant="primary" 
// // //                                 size="sm"
// // //                                 onClick={() => selectService(service)}
// // //                                 className="d-flex align-items-center"
// // //                               >
// // //                                 <FontAwesomeIcon icon={faUsers} className="me-2" />
// // //                                 Manage Data
// // //                               </Button>
// // //                             </td>
// // //                           </tr>
// // //                         ))}
// // //                       </tbody>
// // //                     </Table>
// // //                   </div>
// // //                 )}
// // //               </Tab.Pane>

// // //               {/* Service Data Tab */}
// // //               <Tab.Pane eventKey="data">
// // //                 {selectedService ? (
// // //                   <>
// // //                     <div className="d-flex justify-content-between align-items-center mb-3">
// // //                       <div>
// // //                         <h5 className="mb-0">Data for {selectedService.service_name}</h5>
// // //                         <p className="text-muted mb-0">Add people, items, or options for this service</p>
// // //                       </div>
// // //                       <div className="d-flex gap-2">
// // //                         <Button 
// // //                           variant="info" 
// // //                           onClick={() => setShowBulkUpload(true)}
// // //                           className="me-2"
// // //                         >
// // //                           <FontAwesomeIcon icon={faUpload} className="me-2" />
// // //                           Bulk Upload
// // //                         </Button>
// // //                         <Button variant="success" onClick={() => openDataModal()}>
// // //                           <FontAwesomeIcon icon={faPlus} className="me-2" />
// // //                           Add New
// // //                         </Button>
// // //                       </div>
// // //                     </div>

// // //                     {/* Debug Info */}
// // //                     <div className="mb-3 p-2 bg-light rounded">
// // //                       <small className="text-muted">
// // //                         Debug: Service ID = {selectedService.id}, Data Count = {serviceData.length}
// // //                       </small>
// // //                     </div>

// // //                     {serviceData.length > 0 ? (
// // //                       <div className="table-responsive">
// // //                         <Table hover>
// // //                           <thead className="bg-light">
// // //                             <tr>
// // //                               <th>Name</th>
// // //                               <th>Rate</th>
// // //                               <th>Location</th>
// // //                               <th>Experience</th>
// // //                               <th>Rating</th>
// // //                               <th>Default</th>
// // //                               <th>Actions</th>
// // //                             </tr>
// // //                           </thead>
// // //                           <tbody>
// // //                             {serviceData.map(data => (
// // //                               <tr key={data.id} className={data.is_default ? 'table-success' : ''}>
// // //                                 <td>
// // //                                   <div>
// // //                                     <strong>{data.name}</strong>
// // //                                     {data.specialization && (
// // //                                       <div className="small text-muted">{data.specialization}</div>
// // //                                     )}
// // //                                     {data.profile_link && (
// // //                                       <div>
// // //                                         <a 
// // //                                           href={data.profile_link} 
// // //                                           target="_blank" 
// // //                                           rel="noopener noreferrer"
// // //                                           className="small text-primary"
// // //                                         >
// // //                                           <FontAwesomeIcon icon={faLink} className="me-1" />
// // //                                           Portfolio
// // //                                         </a>
// // //                                       </div>
// // //                                     )}
// // //                                   </div>
// // //                                 </td>
// // //                                 <td>
// // //                                   <Badge bg="success">
// // //                                     ₹{data.rate ? parseInt(data.rate).toLocaleString() : selectedService.rate_per_day?.toLocaleString()}
// // //                                   </Badge>
// // //                                 </td>
// // //                                 <td>
// // //                                   <span className="small">
// // //                                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
// // //                                     {data.location || '-'}
// // //                                   </span>
// // //                                 </td>
// // //                                 <td>
// // //                                   <span className="small">
// // //                                     {data.experience ? `${data.experience} years` : '-'}
// // //                                   </span>
// // //                                 </td>
// // //                                 <td>
// // //                                   {data.rating && data.rating > 0 ? (
// // //                                     <div>
// // //                                       {[...Array(5)].map((_, i) => (
// // //                                         <FontAwesomeIcon 
// // //                                           key={i}
// // //                                           icon={faStar} 
// // //                                           className={i < data.rating ? 'text-warning' : 'text-light'}
// // //                                         />
// // //                                       ))}
// // //                                     </div>
// // //                                   ) : (
// // //                                     <span className="small text-muted">-</span>
// // //                                   )}
// // //                                 </td>
// // //                                 <td>
// // //                                   {data.is_default && (
// // //                                     <Badge bg="primary">
// // //                                       <FontAwesomeIcon icon={faAward} className="me-1" />
// // //                                       Default
// // //                                     </Badge>
// // //                                   )}
// // //                                 </td>
// // //                                 <td>
// // //                                   <div className="d-flex gap-2">
// // //                                     <Button 
// // //                                       variant="outline-primary" 
// // //                                       size="sm"
// // //                                       onClick={() => openDataModal(data)}
// // //                                       title="Edit"
// // //                                     >
// // //                                       <FontAwesomeIcon icon={faPencilAlt} />
// // //                                     </Button>
// // //                                     <Button 
// // //                                       variant="outline-danger" 
// // //                                       size="sm"
// // //                                       onClick={() => handleDeleteData(data.id)}
// // //                                       title="Delete"
// // //                                     >
// // //                                       <FontAwesomeIcon icon={faTrash} />
// // //                                     </Button>
// // //                                   </div>
// // //                                 </td>
// // //                               </tr>
// // //                             ))}
// // //                           </tbody>
// // //                         </Table>
// // //                       </div>
// // //                     ) : (
// // //                       <div className="text-center py-5">
// // //                         <FontAwesomeIcon icon={faUsers} size="3x" className="text-muted mb-3" />
// // //                         <h6>No data added for {selectedService.service_name}</h6>
// // //                         <p className="text-muted">
// // //                           Start by adding people, items, or options for this service
// // //                         </p>
// // //                         <div className="d-flex gap-2 justify-content-center">
// // //                           <Button variant="info" onClick={() => setShowBulkUpload(true)}>
// // //                             <FontAwesomeIcon icon={faUpload} className="me-2" />
// // //                             Bulk Upload
// // //                           </Button>
// // //                           <Button variant="primary" onClick={() => openDataModal()}>
// // //                             <FontAwesomeIcon icon={faPlus} className="me-2" />
// // //                             Add First Item
// // //                           </Button>
// // //                         </div>
// // //                       </div>
// // //                     )}
// // //                   </>
// // //                 ) : (
// // //                   <div className="text-center py-5">
// // //                     <p>Please select a service to manage its data.</p>
// // //                   </div>
// // //                 )}
// // //               </Tab.Pane>
// // //             </Tab.Content>
// // //           </Card.Body>
// // //         </Card>
// // //       </Tab.Container>

// // //       {/* Bulk Upload Modal */}
// // //       <BulkUploadModal
// // //         show={showBulkUpload}
// // //         onHide={() => setShowBulkUpload(false)}
// // //         selectedService={selectedService}
// // //         onBulkUpload={handleBulkUpload}
// // //         isLoading={isLoading}
// // //       />

// // //       {/* Data Modal */}
// // //       <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="lg">
// // //         <Modal.Header closeButton>
// // //           <Modal.Title>
// // //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// // //             {editingData ? 'Edit' : 'Add'} {selectedService?.service_name} Data
// // //           </Modal.Title>
// // //         </Modal.Header>
// // //         <Form onSubmit={editingData ? handleUpdateData : handleCreateData}>
// // //           <Modal.Body>
// // //             <Row>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Name *</Form.Label>
// // //                   <Form.Control
// // //                     type="text"
// // //                     value={newData.name}
// // //                     onChange={(e) => setNewData({...newData, name: e.target.value})}
// // //                     placeholder="e.g., Amitabh Arora"
// // //                     required
// // //                   />
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Rate per Day</Form.Label>
// // //                   <Form.Control
// // //                     type="number"
// // //                     value={newData.rate}
// // //                     onChange={(e) => setNewData({...newData, rate: e.target.value})}
// // //                     placeholder={`Default: ${selectedService?.rate_per_day}`}
// // //                   />
// // //                   <Form.Text className="text-muted">
// // //                     Leave empty to use service default rate
// // //                   </Form.Text>
// // //                 </Form.Group>
// // //               </Col>
// // //             </Row>
            
// // //             <Row>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Location</Form.Label>
// // //                   <Form.Control
// // //                     type="text"
// // //                     value={newData.location}
// // //                     onChange={(e) => setNewData({...newData, location: e.target.value})}
// // //                     placeholder="e.g., Mumbai"
// // //                   />
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Experience (years)</Form.Label>
// // //                   <Form.Control
// // //                     type="number"
// // //                     value={newData.experience}
// // //                     onChange={(e) => setNewData({...newData, experience: e.target.value})}
// // //                     placeholder="e.g., 5"
// // //                   />
// // //                 </Form.Group>
// // //               </Col>
// // //             </Row>

// // //             <Row>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Contact</Form.Label>
// // //                   <Form.Control
// // //                     type="text"
// // //                     value={newData.contact}
// // //                     onChange={(e) => setNewData({...newData, contact: e.target.value})}
// // //                     placeholder="Phone or email"
// // //                   />
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Rating</Form.Label>
// // //                   <Form.Select
// // //                     value={newData.rating}
// // //                     onChange={(e) => setNewData({...newData, rating: e.target.value})}
// // //                   >
// // //                     <option value="">Select Rating</option>
// // //                     {[1,2,3,4,5].map(rating => (
// // //                       <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
// // //                     ))}
// // //                   </Form.Select>
// // //                 </Form.Group>
// // //               </Col>
// // //             </Row>

// // //             <Row>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Profile/Portfolio Link</Form.Label>
// // //                   <Form.Control
// // //                     type="url"
// // //                     value={newData.profile_link}
// // //                     onChange={(e) => setNewData({...newData, profile_link: e.target.value})}
// // //                     placeholder="https://..."
// // //                   />
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={6}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Specialization</Form.Label>
// // //                   <Form.Control
// // //                     type="text"
// // //                     value={newData.specialization}
// // //                     onChange={(e) => setNewData({...newData, specialization: e.target.value})}
// // //                     placeholder="e.g., Commercial Films"
// // //                   />
// // //                 </Form.Group>
// // //               </Col>
// // //             </Row>

// // //             <Form.Group className="mb-3">
// // //               <Form.Check
// // //                 type="checkbox"
// // //                 label="Set as default selection for proposals"
// // //                 checked={newData.is_default}
// // //                 onChange={(e) => setNewData({...newData, is_default: e.target.checked})}
// // //               />
// // //               <Form.Text className="text-muted">
// // //                 This will be auto-selected when users add this service to proposals
// // //               </Form.Text>
// // //             </Form.Group>
// // //           </Modal.Body>
// // //           <Modal.Footer>
// // //             <Button variant="secondary" onClick={() => setShowDataModal(false)}>
// // //               Cancel
// // //             </Button>
// // //             <Button type="submit" variant="primary" disabled={isLoading}>
// // //               {isLoading ? <Spinner size="sm" className="me-2" /> : null}
// // //               {editingData ? 'Update' : 'Add'} Data
// // //             </Button>
// // //           </Modal.Footer>
// // //         </Form>
// // //       </Modal>

// // //       <style jsx>{`
// // //         .service-card {
// // //           transition: all 0.2s ease;
// // //           border: 2px solid transparent;
// // //         }
        
// // //         .service-card:hover {
// // //           border-color: #0d6efd;
// // //           box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
// // //           transform: translateY(-2px);
// // //         }
        
// // //         .table-success {
// // //           background-color: rgba(40, 167, 69, 0.1) !important;
// // //         }
// // //       `}</style>
// // //     </div>
// // //   );
// // // }

// // // export default ServiceDataManagement;

// // import React, { useState, useEffect } from 'react';
// // import { 
// //   Table, 
// //   Form, 
// //   Button, 
// //   Alert, 
// //   Card, 
// //   Row, 
// //   Col, 
// //   Modal,
// //   Badge,
// //   Spinner,
// //   Nav,
// //   Tab,
// //   Dropdown,
// //   ListGroup,
// //   ProgressBar
// // } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { 
// //   faPlus, 
// //   faPencilAlt, 
// //   faTrash, 
// //   faCheck, 
// //   faTimes, 
// //   faInfoCircle,
// //   faUsers,
// //   faDownload,
// //   faEdit,
// //   faStar,
// //   faEnvelope,
// //   faPhone,
// //   faLink,
// //   faMapMarkerAlt,
// //   faAward,
// //   faChevronDown,
// //   faGear,
// //   faUpload,
// //   faFileExcel,
// //   faExclamationTriangle
// // } from '@fortawesome/free-solid-svg-icons';

// // // Import API functions
// // import { 
// //   fetchServices,
// //   createServiceData,
// //   updateServiceData,
// //   deleteServiceData,
// //   fetchServiceData,
// //   getServicesWithData
// // } from '../../services/api';

// // // Bulk Upload Modal Component with Extended Fields
// // const BulkUploadModal = ({ 
// //   show, 
// //   onHide, 
// //   selectedService, 
// //   onBulkUpload, 
// //   isLoading 
// // }) => {
// //   const [uploadFile, setUploadFile] = useState(null);
// //   const [excelData, setExcelData] = useState([]);
// //   const [columnMapping, setColumnMapping] = useState({});
// //   const [validationErrors, setValidationErrors] = useState([]);
// //   const [uploadStep, setUploadStep] = useState(1);
// //   const [processedData, setProcessedData] = useState([]);
// //   const [uploadProgress, setUploadProgress] = useState(0);

// //   // Updated available columns with all the extended fields
// //   const availableColumns = [
// //     // Required field
// //     { key: 'name', label: 'Name', required: true },
    
// //     // Extended fields from Excel template
// //     { key: 'contact_number', label: 'Contact Number', required: false },
// //     { key: 'contact_person', label: 'Contact Person', required: false },
// //     { key: 'mail_id', label: 'Mail Id', required: false },
// //     { key: 'profile_worklinks', label: 'Profile/Worklinks', required: false },
// //     { key: 'current_job', label: 'Current Job', required: false },
// //     { key: 'designation', label: 'Designation', required: false },
// //     { key: 'assistant', label: 'Assistant', required: false },
// //     { key: 'location_address', label: 'Location/Address', required: false },
// //     { key: 'experience_years', label: 'Experience in Years', required: false },
// //     { key: 'price_rate_rent', label: 'Price/Rate/Rent', required: false },
// //     { key: 'studio_size', label: 'Studio Size', required: false },
// //     { key: 'shift_time', label: 'Shift Time', required: false },
// //     { key: 'dismantle_setting', label: 'Dismantle/Setting', required: false },
// //     { key: 'generator_specification', label: 'Generator Specification', required: false },
// //     { key: 'remarks_rating', label: 'Remarks/Rating', required: false },
    
// //     // Legacy fields for backward compatibility
// //     { key: 'rate', label: 'Rate per Day (Legacy)', required: false },
// //     { key: 'location', label: 'Location (Legacy)', required: false },
// //     { key: 'experience', label: 'Experience (Legacy)', required: false },
// //     { key: 'contact', label: 'Contact (Legacy)', required: false },
// //     { key: 'profile_link', label: 'Profile Link (Legacy)', required: false },
// //     { key: 'rating', label: 'Rating 1-5 (Legacy)', required: false },
// //     { key: 'specialization', label: 'Specialization (Legacy)', required: false },
// //     { key: 'is_default', label: 'Is Default', required: false }
// //   ];

// //   const resetModal = () => {
// //     setUploadFile(null);
// //     setExcelData([]);
// //     setColumnMapping({});
// //     setValidationErrors([]);
// //     setUploadStep(1);
// //     setProcessedData([]);
// //     setUploadProgress(0);
// //   };

// //   const handleFileUpload = async (event) => {
// //     const file = event.target.files[0];
// //     if (!file) return;

// //     const fileType = file.name.split('.').pop().toLowerCase();
// //     if (!['xlsx', 'xls', 'csv'].includes(fileType)) {
// //       alert('Please upload an Excel file (.xlsx, .xls) or CSV file');
// //       return;
// //     }

// //     setUploadFile(file);
    
// //     try {
// //       const XLSX = await import('xlsx');
// //       const reader = new FileReader();

// //       reader.onload = (e) => {
// //         try {
// //           const data = new Uint8Array(e.target.result);
// //           const workbook = XLSX.read(data, { type: 'array' });
// //           const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
// //           const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          
// //           if (jsonData.length < 2) {
// //             alert('Excel file must have at least a header row and one data row');
// //             return;
// //           }

// //           const headers = jsonData[0];
// //           const rows = jsonData.slice(1).filter(row => 
// //             row.some(cell => cell !== undefined && cell !== '' && cell !== null)
// //           );
          
// //           setExcelData({ headers, rows });
// //           setUploadStep(2);
          
// //           // Enhanced auto-mapping for all fields
// //           const autoMapping = {};
// //           headers.forEach((header, index) => {
// //             const headerLower = header.toString().toLowerCase().trim();
// //             const matchedColumn = availableColumns.find(col => {
// //               const colKey = col.key.toLowerCase();
// //               const colLabel = col.label.toLowerCase();
              
// //               // Exact matches first
// //               if (headerLower === colKey || headerLower === colLabel) return true;
              
// //               // Enhanced pattern matching
// //               const patterns = {
// //                 'name': ['name', 'person name', 'full name'],
// //                 'contact_number': ['contact number', 'phone', 'mobile', 'contact no', 'phone number'],
// //                 'contact_person': ['contact person', 'person', 'contact name'],
// //                 'mail_id': ['mail id', 'email', 'email id', 'mail', 'e-mail'],
// //                 'profile_worklinks': ['profile', 'worklinks', 'portfolio', 'website', 'work links'],
// //                 'current_job': ['current job', 'job', 'occupation', 'profession'],
// //                 'designation': ['designation', 'title', 'position', 'role'],
// //                 'assistant': ['assistant', 'helper', 'support'],
// //                 'location_address': ['location', 'address', 'location address', 'place'],
// //                 'experience_years': ['experience', 'exp', 'years', 'experience years', 'years of experience'],
// //                 'price_rate_rent': ['price', 'rate', 'rent', 'cost', 'pricing', 'fee'],
// //                 'studio_size': ['studio size', 'size', 'studio'],
// //                 'shift_time': ['shift time', 'time', 'hours', 'duration'],
// //                 'dismantle_setting': ['dismantle', 'setting', 'setup', 'dismantle setting'],
// //                 'generator_specification': ['generator', 'specification', 'gen spec', 'power'],
// //                 'remarks_rating': ['remarks', 'rating', 'notes', 'comments', 'review'],
// //                 'is_default': ['default', 'is default', 'primary']
// //               };
              
// //               const fieldPatterns = patterns[col.key] || [];
// //               return fieldPatterns.some(pattern => headerLower.includes(pattern));
// //             });
            
// //             if (matchedColumn && !Object.values(autoMapping).includes(index)) {
// //               autoMapping[matchedColumn.key] = index;
// //             }
// //           });
          
// //           setColumnMapping(autoMapping);
// //         } catch (error) {
// //           console.error('Error parsing Excel file:', error);
// //           alert('Error parsing Excel file. Please check the file format.');
// //         }
// //       };

// //       reader.readAsArrayBuffer(file);
// //     } catch (error) {
// //       console.error('Error loading XLSX library:', error);
// //       alert('Error loading Excel parser. Please try again.');
// //     }
// //   };

// //   const handleColumnMapping = (columnKey, excelColumnIndex) => {
// //     setColumnMapping(prev => ({
// //       ...prev,
// //       [columnKey]: excelColumnIndex === '' ? undefined : parseInt(excelColumnIndex)
// //     }));
// //   };

// //   const validateAndProcessData = () => {
// //     const errors = [];
// //     const processed = [];

// //     const requiredFields = availableColumns.filter(col => col.required);
// //     requiredFields.forEach(field => {
// //       if (columnMapping[field.key] === undefined) {
// //         errors.push(`Required field "${field.label}" must be mapped`);
// //       }
// //     });

// //     if (errors.length > 0) {
// //       setValidationErrors(errors);
// //       return;
// //     }

// //     excelData.rows.forEach((row, index) => {
// //       const rowData = {};

// //       Object.keys(columnMapping).forEach(key => {
// //         const columnIndex = columnMapping[key];
// //         if (columnIndex !== undefined) {
// //           let value = row[columnIndex];
          
// //           if (value !== undefined && value !== null && value !== '') {
// //             if (key === 'name') {
// //               value = value.toString().trim();
// //             } else if (['experience_years', 'experience', 'rating'].includes(key)) {
// //               value = parseInt(value) || null;
// //             } else if (['price_rate_rent', 'rate'].includes(key)) {
// //               value = parseFloat(value) || null;
// //             } else if (key === 'is_default') {
// //               value = ['true', '1', 'yes', 'y', 'default'].includes(
// //                 value.toString().toLowerCase().trim()
// //               );
// //             } else if (['profile_worklinks', 'profile_link'].includes(key)) {
// //               value = value.toString().trim();
// //               if (value && !value.startsWith('http')) {
// //                 value = 'https://' + value;
// //               }
// //             } else {
// //               value = value.toString().trim();
// //             }
// //           } else {
// //             value = key === 'is_default' ? false : null;
// //           }
          
// //           rowData[key] = value;
// //         }
// //       });

// //       if (!rowData.name) {
// //         return;
// //       }

// //       processed.push({
// //         ...rowData,
// //         rowNumber: index + 2
// //       });
// //     });

// //     setValidationErrors(errors);
// //     setProcessedData(processed);
// //     setUploadStep(3);
// //   };

// //   const handleBulkUpload = async () => {
// //     if (processedData.length === 0) return;

// //     try {
// //       setUploadProgress(0);
      
// //       const hasDefault = processedData.some(item => item.is_default);
      
// //       const results = [];
// //       for (let i = 0; i < processedData.length; i++) {
// //         const item = processedData[i];
// //         try {
// //           const { rowNumber, ...dataToSend } = item;
          
// //           await onBulkUpload(dataToSend, hasDefault && i === 0);
// //           results.push({ success: true, item, rowNumber });
// //         } catch (error) {
// //           results.push({ success: false, item, error: error.message, rowNumber });
// //         }
        
// //         setUploadProgress(((i + 1) / processedData.length) * 100);
// //       }
      
// //       const successCount = results.filter(r => r.success).length;
// //       const errorCount = results.filter(r => !r.success).length;
      
// //       if (errorCount === 0) {
// //         alert(`Successfully uploaded ${successCount} items!`);
// //         onHide();
// //         resetModal();
// //       } else {
// //         const errorMessages = results
// //           .filter(r => !r.success)
// //           .map(r => `Row ${r.rowNumber}: ${r.error}`)
// //           .join('\n');
// //         alert(`Upload completed with ${successCount} successful and ${errorCount} failed items:\n\n${errorMessages}`);
// //       }
// //     } catch (error) {
// //       console.error('Bulk upload error:', error);
// //       alert('Error during bulk upload: ' + error.message);
// //     }
// //   };

// //   const downloadTemplate = async () => {
// //     try {
// //       const XLSX = await import('xlsx');
// //       // Updated template with all the extended fields
// //       const templateData = [
// //         // Header row with all columns from your Excel template
// //         [
// //           'Name', 'Contact Number', 'Contact Person', 'Mail Id', 'Profile/Worklinks', 
// //           'Current Job', 'Designation', 'Assistant', 'Location/Address', 'Experience in Years',
// //           'Price/Rate/Rent', 'Studio Size', 'Shift Time', 'Dismantle/Setting', 
// //           'Generator Specification', 'Remarks/Rating', 'Is Default'
// //         ],
// //         // // Sample data row 1
// //         // [
// //         //   'John Doe', '+91 9876543210', 'John Doe', 'john@example.com', 'https://johndoe.com',
// //         //   'Photographer', 'Senior Photographer', 'Assistant Name', 'Mumbai, Maharashtra', '5',
// //         //   '5000', 'Medium Studio', '8 Hours', 'Fast Setup', 'Generator 5KVA', 'Excellent work quality - 5 stars', 'FALSE'
// //         // ],
// //         // // Sample data row 2
// //         // [
// //         //   'Jane Smith', '+91 9876543211', 'Jane Smith', 'jane@example.com', 'https://janesmith.portfolio.com',
// //         //   'Videographer', 'Lead Videographer', 'Jane Assistant', 'Delhi, India', '8',
// //         //   '7500', 'Large Studio', '10 Hours', 'Quick Setup', 'Generator 10KVA', 'Top rated professional - 5 stars', 'TRUE'
// //         // ],
// //         // // Sample data row 3
// //         // [
// //         //   'Mike Johnson', '+91 9876543212', 'Mike Johnson', 'mike@example.com', '',
// //         //   'Event Coordinator', 'Event Manager', 'Mike Helper', 'Bangalore, Karnataka', '3',
// //         //   '3500', 'Small Studio', '6 Hours', 'Standard Setup', 'Generator 3KVA', 'Good performance - 4 stars', 'FALSE'
// //         // ]
// //       ];

// //       const ws = XLSX.utils.aoa_to_sheet(templateData);
      
// //       // Set column widths for better readability
// //       ws['!cols'] = [
// //         { wch: 15 }, // Name
// //         { wch: 18 }, // Contact Number
// //         { wch: 15 }, // Contact Person
// //         { wch: 25 }, // Mail Id
// //         { wch: 30 }, // Profile/Worklinks
// //         { wch: 20 }, // Current Job
// //         { wch: 20 }, // Designation
// //         { wch: 15 }, // Assistant
// //         { wch: 25 }, // Location/Address
// //         { wch: 12 }, // Experience in Years
// //         { wch: 15 }, // Price/Rate/Rent
// //         { wch: 15 }, // Studio Size
// //         { wch: 12 }, // Shift Time
// //         { wch: 18 }, // Dismantle/Setting
// //         { wch: 20 }, // Generator Specification
// //         { wch: 30 }, // Remarks/Rating
// //         { wch: 10 }  // Is Default
// //       ];

// //       const wb = XLSX.utils.book_new();
// //       XLSX.utils.book_append_sheet(wb, ws, 'Service Data Template');
// //       XLSX.writeFile(wb, `${selectedService?.service_name || 'service'}_data_template.xlsx`);
// //     } catch (error) {
// //       console.error('Error downloading template:', error);
// //       alert('Error downloading template. Please try again.');
// //     }
// //   };

// //   if (!show) return null;

// //   return (
// //     <Modal show={show} onHide={() => { onHide(); resetModal(); }} size="xl">
// //       <Modal.Header closeButton>
// //         <Modal.Title>
// //           <FontAwesomeIcon icon={faFileExcel} className="me-2" />
// //           Bulk Upload - {selectedService?.service_name}
// //         </Modal.Title>
// //       </Modal.Header>
// //       <Modal.Body>
// //         {/* Step Indicator */}
// //         <div className="mb-4">
// //           <div className="d-flex justify-content-between align-items-center mb-2">
// //             {[1, 2, 3, 4].map(step => (
// //               <div key={step} className="text-center">
// //                 <div className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
// //                   uploadStep >= step ? 'bg-primary text-white' : 'bg-light text-muted'
// //                 }`} style={{ width: '30px', height: '30px' }}>
// //                   {step}
// //                 </div>
// //                 <div className="small mt-1">
// //                   {step === 1 && 'Upload'}
// //                   {step === 2 && 'Map'}
// //                   {step === 3 && 'Validate'}
// //                   {step === 4 && 'Confirm'}
// //                 </div>
// //               </div>
// //             ))}
// //           </div>
// //           <ProgressBar now={(uploadStep - 1) * 33.33} className="mt-2" />
// //         </div>

// //         {/* Step 1: File Upload */}
// //         {uploadStep === 1 && (
// //           <div>
// //             <Card className="mb-3">
// //               <Card.Body className="text-center">
// //                 <FontAwesomeIcon icon={faDownload} size="2x" className="text-primary mb-3" />
// //                 <h6>Download Template</h6>
// //                 <p className="text-muted">Start with our template to ensure proper formatting</p>
// //                 <Button variant="outline-primary" onClick={downloadTemplate}>
// //                   <FontAwesomeIcon icon={faDownload} className="me-2" />
// //                   Download Template
// //                 </Button>
// //               </Card.Body>
// //             </Card>

// //             <Card>
// //               <Card.Body className="text-center">
// //                 <FontAwesomeIcon icon={faUpload} size="2x" className="text-success mb-3" />
// //                 <h6>Upload Excel File</h6>
// //                 <p className="text-muted">Select an Excel file (.xlsx, .xls) or CSV file</p>
// //                 <Form.Control
// //                   type="file"
// //                   accept=".xlsx,.xls,.csv"
// //                   onChange={handleFileUpload}
// //                   className="mb-3"
// //                 />
// //                 {uploadFile && (
// //                   <Alert variant="info">
// //                     <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// //                     File selected: {uploadFile.name}
// //                   </Alert>
// //                 )}
// //               </Card.Body>
// //             </Card>
// //           </div>
// //         )}

// //         {/* Step 2: Column Mapping */}
// //         {uploadStep === 2 && (
// //           <div>
// //             <Alert variant="info">
// //               <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// //               Map your Excel columns to the service data fields. Required fields are marked with *.
// //             </Alert>

// //             <Row>
// //               <Col md={6}>
// //                 <h6>Your Excel Columns</h6>
// //                 <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
// //                   {excelData.headers?.map((header, index) => (
// //                     <Badge key={index} bg="secondary" className="me-2 mb-2">
// //                       {index}: {header}
// //                     </Badge>
// //                   ))}
// //                 </div>
// //               </Col>
// //               <Col md={6}>
// //                 <h6>Sample Data (First Row)</h6>
// //                 <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
// //                   {excelData.rows?.[0]?.map((cell, index) => (
// //                     <div key={index} className="small mb-1">
// //                       <strong>{index}:</strong> {cell}
// //                     </div>
// //                   ))}
// //                 </div>
// //               </Col>
// //             </Row>

// //             <h6>Column Mapping</h6>
// //             <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
// //               <Table striped bordered size="sm">
// //                 <thead>
// //                   <tr>
// //                     <th>Field</th>
// //                     <th>Required</th>
// //                     <th>Excel Column</th>
// //                     <th>Preview</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {availableColumns.map(column => (
// //                     <tr key={column.key}>
// //                       <td>
// //                         {column.label}
// //                         {column.required && <span className="text-danger">*</span>}
// //                       </td>
// //                       <td>
// //                         {column.required ? (
// //                           <Badge bg="danger">Required</Badge>
// //                         ) : (
// //                           <Badge bg="secondary">Optional</Badge>
// //                         )}
// //                       </td>
// //                       <td>
// //                         <Form.Select
// //                           size="sm"
// //                           value={columnMapping[column.key] || ''}
// //                           onChange={(e) => handleColumnMapping(column.key, e.target.value)}
// //                         >
// //                           <option value="">Select column...</option>
// //                           {excelData.headers?.map((header, index) => (
// //                             <option key={index} value={index}>
// //                               {index}: {header}
// //                             </option>
// //                           ))}
// //                         </Form.Select>
// //                       </td>
// //                       <td>
// //                         {columnMapping[column.key] !== undefined ? (
// //                           <small className="text-muted">
// //                             {excelData.rows?.[0]?.[columnMapping[column.key]] || 'Empty'}
// //                           </small>
// //                         ) : (
// //                           <small className="text-muted">Not mapped</small>
// //                         )}
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </Table>
// //             </div>

// //             <div className="d-flex justify-content-between">
// //               <Button variant="secondary" onClick={() => setUploadStep(1)}>
// //                 Back
// //               </Button>
// //               <Button variant="primary" onClick={validateAndProcessData}>
// //                 Validate Data
// //               </Button>
// //             </div>
// //           </div>
// //         )}

// //         {/* Step 3: Validation */}
// //         {uploadStep === 3 && (
// //           <div>
// //             {validationErrors.length > 0 ? (
// //               <Alert variant="danger">
// //                 <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// //                 <strong>Validation Errors:</strong>
// //                 <ul className="mb-0 mt-2">
// //                   {validationErrors.map((error, index) => (
// //                     <li key={index}>{error}</li>
// //                   ))}
// //                 </ul>
// //               </Alert>
// //             ) : (
// //               <Alert variant="success">
// //                 <FontAwesomeIcon icon={faCheck} className="me-2" />
// //                 Data validation successful! {processedData.length} records ready for upload.
// //               </Alert>
// //             )}

// //             <h6>Data Preview</h6>
// //             <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
// //               <Table striped bordered size="sm">
// //                 <thead>
// //                   <tr>
// //                     <th>Row</th>
// //                     <th>Name</th>
// //                     <th>Contact</th>
// //                     <th>Email</th>
// //                     <th>Location</th>
// //                     <th>Experience</th>
// //                     <th>Price/Rate</th>
// //                     <th>Default</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {processedData.map((item, index) => (
// //                     <tr key={index}>
// //                       <td>{item.rowNumber}</td>
// //                       <td>{item.name}</td>
// //                       <td>{item.contact_number || item.contact || '-'}</td>
// //                       <td>{item.mail_id || '-'}</td>
// //                       <td>{item.location_address || item.location || '-'}</td>
// //                       <td>{item.experience_years || item.experience || '-'}</td>
// //                       <td>{item.price_rate_rent || item.rate ? `₹${(item.price_rate_rent || item.rate)}` : '-'}</td>
// //                       <td>{item.is_default ? '✓' : '-'}</td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </Table>
// //             </div>

// //             <div className="d-flex justify-content-between">
// //               <Button variant="secondary" onClick={() => setUploadStep(2)}>
// //                 Back
// //               </Button>
// //               {validationErrors.length === 0 && (
// //                 <Button variant="success" onClick={() => setUploadStep(4)}>
// //                   Continue to Upload
// //                 </Button>
// //               )}
// //             </div>
// //           </div>
// //         )}

// //         {/* Step 4: Confirm Upload */}
// //         {uploadStep === 4 && (
// //           <div>
// //             <Alert variant="warning">
// //               <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
// //               <strong>Confirm Upload</strong>
// //               <p className="mb-0 mt-2">
// //                 You are about to upload {processedData.length} records to {selectedService?.service_name}. 
// //                 This action cannot be undone.
// //               </p>
// //             </Alert>

// //             {uploadProgress > 0 && (
// //               <div className="mb-3">
// //                 <div className="d-flex justify-content-between">
// //                   <span>Upload Progress</span>
// //                   <span>{Math.round(uploadProgress)}%</span>
// //                 </div>
// //                 <ProgressBar now={uploadProgress} />
// //               </div>
// //             )}

// //             <div className="d-flex justify-content-between">
// //               <Button variant="secondary" onClick={() => setUploadStep(3)} disabled={isLoading}>
// //                 Back
// //               </Button>
// //               <Button variant="success" onClick={handleBulkUpload} disabled={isLoading}>
// //                 {isLoading ? (
// //                   <>
// //                     <Spinner size="sm" className="me-2" />
// //                     Uploading...
// //                   </>
// //                 ) : (
// //                   <>
// //                     <FontAwesomeIcon icon={faUpload} className="me-2" />
// //                     Upload Data
// //                   </>
// //                 )}
// //               </Button>
// //             </div>
// //           </div>
// //         )}
// //       </Modal.Body>
// //     </Modal>
// //   );
// // };

// // function ServiceDataManagement() {
// //   const [services, setServices] = useState([]);
// //   const [selectedService, setSelectedService] = useState(null);
// //   const [serviceData, setServiceData] = useState([]);
// //   const [activeView, setActiveView] = useState('services');
  
// //   // Form states - Updated with extended fields
// //   const [showDataModal, setShowDataModal] = useState(false);
// //   const [showBulkUpload, setShowBulkUpload] = useState(false);
// //   const [editingData, setEditingData] = useState(null);
// //   const [newData, setNewData] = useState({
// //     // Basic fields
// //     name: '',
// //     // Extended fields
// //     contact_number: '',
// //     contact_person: '',
// //     mail_id: '',
// //     profile_worklinks: '',
// //     current_job: '',
// //     designation: '',
// //     assistant: '',
// //     location_address: '',
// //     experience_years: '',
// //     price_rate_rent: '',
// //     studio_size: '',
// //     shift_time: '',
// //     dismantle_setting: '',
// //     generator_specification: '',
// //     remarks_rating: '',
// //     // Legacy fields
// //     rate: '',
// //     location: '',
// //     experience: '',
// //     contact: '',
// //     profile_link: '',
// //     rating: '',
// //     specialization: '',
// //     is_default: false
// //   });
  
// //   // Loading states
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');

// //   useEffect(() => {
// //     loadServices();
// //   }, []);

// //   useEffect(() => {
// //     if (selectedService) {
// //       loadServiceData();
// //     }
// //   }, [selectedService]);

// //   // API function for bulk upload
// //   const bulkCreateServiceData = async (serviceId, dataArray, unsetDefaults = false) => {
// //     const response = await fetch(`/api/service-data/${serviceId}/bulk`, {
// //       method: 'POST',
// //       headers: {
// //         'Content-Type': 'application/json',
// //         'Authorization': `Bearer ${localStorage.getItem('token')}`
// //       },
// //       body: JSON.stringify({ 
// //         data: dataArray, 
// //         unsetDefaults 
// //       })
// //     });
    
// //     if (!response.ok) {
// //       const error = await response.json();
// //       throw new Error(error.error || 'Failed to bulk upload data');
// //     }
    
// //     return response.json();
// //   };

// //   // Handle bulk upload
// //   const handleBulkUpload = async (itemData, unsetDefaults = false) => {
// //     try {
// //       await bulkCreateServiceData(selectedService.id, [itemData], unsetDefaults);
// //     } catch (error) {
// //       throw error;
// //     }
// //   };

// //   // Load services and their data counts
// //   const loadServices = async () => {
// //     try {
// //       setIsLoading(true);
      
// //       const servicesResponse = await fetchServices();
// //       console.log('Loaded services:', servicesResponse.data);
      
// //       try {
// //         const servicesWithDataResponse = await getServicesWithData();
// //         console.log('Services with data:', servicesWithDataResponse.data);
        
// //         const servicesWithCounts = servicesResponse.data.map(service => {
// //           const serviceWithData = servicesWithDataResponse.data?.data?.find(s => s.id === service.id);
// //           return {
// //             ...service,
// //             data_count: serviceWithData?.data_count || 0,
// //             default_name: serviceWithData?.default_name || null
// //           };
// //         });
        
// //         setServices(servicesWithCounts);
// //       } catch (dataError) {
// //         console.log('Error loading service data counts, using basic services:', dataError);
// //         setServices(servicesResponse.data.map(service => ({
// //           ...service,
// //           data_count: 0
// //         })));
// //       }
// //     } catch (error) {
// //       console.error('Error loading services:', error);
// //       setError('Failed to load services');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const loadServiceData = async () => {
// //     if (!selectedService) return;
// //     try {
// //       setIsLoading(true);
// //       console.log('Loading data for service:', selectedService.id);
      
// //       const response = await fetchServiceData(selectedService.id);
// //       console.log('Raw API response:', response);
// //       console.log('Response data:', response.data);
      
// //       const serviceDataArray = response.data?.data || [];
// //       console.log('Extracted service data:', serviceDataArray);
      
// //       setServiceData(serviceDataArray);
// //     } catch (error) {
// //       console.error('Error loading service data:', error);
// //       setError('Failed to load service data');
// //       setServiceData([]);
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleCreateData = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setIsLoading(true);
      
// //       if (newData.is_default) {
// //         await Promise.all(
// //           serviceData.map(item => 
// //             updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// //           )
// //         );
// //       }
      
// //       await createServiceData(selectedService.id, newData);
      
// //       // Reset form with all extended fields
// //       setNewData({
// //         name: '', contact_number: '', contact_person: '', mail_id: '', profile_worklinks: '',
// //         current_job: '', designation: '', assistant: '', location_address: '', experience_years: '',
// //         price_rate_rent: '', studio_size: '', shift_time: '', dismantle_setting: '',
// //         generator_specification: '', remarks_rating: '', rate: '', location: '', experience: '',
// //         contact: '', profile_link: '', rating: '', specialization: '', is_default: false
// //       });
      
// //       setShowDataModal(false);
// //       await loadServiceData();
// //       await loadServices();
// //       setSuccess('Data added successfully!');
// //       setTimeout(() => setSuccess(''), 3000);
// //     } catch (error) {
// //       console.error('Create error:', error);
// //       setError(error.response?.data?.error || 'Failed to create data');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleUpdateData = async (e) => {
// //     e.preventDefault();
// //     try {
// //       setIsLoading(true);
      
// //       if (newData.is_default) {
// //         await Promise.all(
// //           serviceData
// //             .filter(item => item.id !== editingData.id)
// //             .map(item => 
// //               updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
// //             )
// //         );
// //       }
      
// //       await updateServiceData(selectedService.id, editingData.id, newData);
// //       setEditingData(null);
// //       setShowDataModal(false);
// //       await loadServiceData();
// //       await loadServices();
// //       setSuccess('Data updated successfully!');
// //       setTimeout(() => setSuccess(''), 3000);
// //     } catch (error) {
// //       console.error('Update error:', error);
// //       setError(error.response?.data?.error || 'Failed to update data');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleDeleteData = async (dataId) => {
// //     if (window.confirm('Are you sure you want to delete this data?')) {
// //       try {
// //         setIsLoading(true);
// //         await deleteServiceData(selectedService.id, dataId);
// //         await loadServiceData();
// //         await loadServices();
// //         setSuccess('Data deleted successfully!');
// //         setTimeout(() => setSuccess(''), 3000);
// //       } catch (error) {
// //         console.error('Delete error:', error);
// //         setError(error.response?.data?.error || 'Failed to delete data');
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }
// //   };

// //   const openDataModal = (data = null) => {
// //     if (data) {
// //       setEditingData(data);
// //       setNewData({
// //         // Basic fields
// //         name: data.name || '',
// //         // Extended fields
// //         contact_number: data.contact_number || '',
// //         contact_person: data.contact_person || '',
// //         mail_id: data.mail_id || '',
// //         profile_worklinks: data.profile_worklinks || '',
// //         current_job: data.current_job || '',
// //         designation: data.designation || '',
// //         assistant: data.assistant || '',
// //         location_address: data.location_address || '',
// //         experience_years: data.experience_years || '',
// //         price_rate_rent: data.price_rate_rent || '',
// //         studio_size: data.studio_size || '',
// //         shift_time: data.shift_time || '',
// //         dismantle_setting: data.dismantle_setting || '',
// //         generator_specification: data.generator_specification || '',
// //         remarks_rating: data.remarks_rating || '',
// //         // Legacy fields
// //         rate: data.rate || '',
// //         location: data.location || '',
// //         experience: data.experience || '',
// //         contact: data.contact || '',
// //         profile_link: data.profile_link || '',
// //         rating: data.rating || '',
// //         specialization: data.specialization || '',
// //         is_default: data.is_default || false
// //       });
// //     } else {
// //       setEditingData(null);
// //       setNewData({
// //         name: '', contact_number: '', contact_person: '', mail_id: '', profile_worklinks: '',
// //         current_job: '', designation: '', assistant: '', location_address: '', experience_years: '',
// //         price_rate_rent: '', studio_size: '', shift_time: '', dismantle_setting: '',
// //         generator_specification: '', remarks_rating: '', rate: '', location: '', experience: '',
// //         contact: '', profile_link: '', rating: '', specialization: '', is_default: false
// //       });
// //     }
// //     setShowDataModal(true);
// //   };

// //   const selectService = (service) => {
// //     setSelectedService(service);
// //     setActiveView('data');
// //   };

// //   return (
// //     <div className="service-data-management">
// //       <div className="d-flex justify-content-between align-items-center mb-4">
// //         <div>
// //           <h4 className="mb-1">Service Data Management</h4>
// //           <p className="text-muted mb-0">Add people and details for each service</p>
// //         </div>
// //         <Badge bg="info" className="py-2 px-3">
// //           <FontAwesomeIcon icon={faUsers} className="me-1" />
// //           {selectedService ? `${serviceData.length} items` : `${services.length} services`}
// //         </Badge>
// //       </div>

// //       {error && (
// //         <Alert variant="danger" dismissible onClose={() => setError('')}>
// //           <FontAwesomeIcon icon={faTimes} className="me-2" />
// //           {error}
// //         </Alert>
// //       )}

// //       {success && (
// //         <Alert variant="success" dismissible onClose={() => setSuccess('')}>
// //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// //           {success}
// //         </Alert>
// //       )}

// //       <Tab.Container activeKey={activeView} onSelect={setActiveView}>
// //         <Card className="shadow-sm border-0">
// //           <Card.Header className="bg-light">
// //             <Nav variant="pills" className="flex-row">
// //               <Nav.Item>
// //                 <Nav.Link eventKey="services" className="text-decoration-none">
// //                   <FontAwesomeIcon icon={faGear} className="me-2" />
// //                   Services
// //                   <Badge bg="secondary" className="ms-2">{services.length}</Badge>
// //                 </Nav.Link>
// //               </Nav.Item>
// //               {selectedService && (
// //                 <Nav.Item>
// //                   <Nav.Link eventKey="data" className="text-decoration-none">
// //                     <FontAwesomeIcon icon={faUsers} className="me-2" />
// //                     Data for {selectedService.service_name}
// //                     <Badge bg="secondary" className="ms-2">{serviceData.length}</Badge>
// //                   </Nav.Link>
// //                 </Nav.Item>
// //               )}
// //             </Nav>
// //           </Card.Header>

// //           <Card.Body>
// //             <Tab.Content>
// //               {/* Services Selection Tab */}
// //               <Tab.Pane eventKey="services">
// //                 <div className="mb-3">
// //                   <h5>Select a service to manage its data:</h5>
// //                   <p className="text-muted">Choose which service you want to add people/items for</p>
// //                 </div>

// //                 {isLoading ? (
// //                   <div className="text-center py-4">
// //                     <Spinner animation="border" variant="primary" />
// //                     <p className="mt-2">Loading services...</p>
// //                   </div>
// //                 ) : (
// //                   <div className="table-responsive">
// //                     <Table hover className="align-middle">
// //                       <thead className="bg-light">
// //                         <tr>
// //                           <th>Service Name</th>
// //                           <th>Items</th>
// //                           <th>Category</th>
// //                           <th>Default Rate</th>
// //                           <th>Default Item</th>
// //                           <th>Action</th>
// //                         </tr>
// //                       </thead>
// //                       <tbody>
// //                         {services.map(service => (
// //                           <tr key={service.id} className="service-row">
// //                             <td>
// //                               <div className="d-flex align-items-center">
// //                                 <FontAwesomeIcon icon={faGear} className="text-muted me-2" />
// //                                 <strong>{service.service_name}</strong>
// //                               </div>
// //                             </td>
// //                             <td>
// //                               <Badge bg={service.data_count > 0 ? "success" : "secondary"}>
// //                                 <FontAwesomeIcon icon={faUsers} className="me-1" />
// //                                 {service.data_count || 0} items
// //                               </Badge>
// //                             </td>
// //                             <td>
// //                               <span className="text-muted text-capitalize">{service.category}</span>
// //                             </td>
// //                             <td>
// //                               <Badge bg="info" className="fw-normal">
// //                                 ₹{service.rate_per_day?.toLocaleString()}/day
// //                               </Badge>
// //                             </td>
// //                             <td>
// //                               {service.default_name ? (
// //                                 <span className="text-success">
// //                                   <FontAwesomeIcon icon={faCheck} className="me-1" />
// //                                   {service.default_name}
// //                                 </span>
// //                               ) : (
// //                                 <span className="text-muted">-</span>
// //                               )}
// //                             </td>
// //                             <td>
// //                               <Button 
// //                                 variant="primary" 
// //                                 size="sm"
// //                                 onClick={() => selectService(service)}
// //                                 className="d-flex align-items-center"
// //                               >
// //                                 <FontAwesomeIcon icon={faUsers} className="me-2" />
// //                                 Manage Data
// //                               </Button>
// //                             </td>
// //                           </tr>
// //                         ))}
// //                       </tbody>
// //                     </Table>
// //                   </div>
// //                 )}
// //               </Tab.Pane>

// //               {/* Service Data Tab */}
// //               <Tab.Pane eventKey="data">
// //                 {selectedService ? (
// //                   <>
// //                     <div className="d-flex justify-content-between align-items-center mb-3">
// //                       <div>
// //                         <h5 className="mb-0">Data for {selectedService.service_name}</h5>
// //                         <p className="text-muted mb-0">Add people, items, or options for this service</p>
// //                       </div>
// //                       <div className="d-flex gap-2">
// //                         <Button 
// //                           variant="info" 
// //                           onClick={() => setShowBulkUpload(true)}
// //                           className="me-2"
// //                         >
// //                           <FontAwesomeIcon icon={faUpload} className="me-2" />
// //                           Bulk Upload
// //                         </Button>
// //                         <Button variant="success" onClick={() => openDataModal()}>
// //                           <FontAwesomeIcon icon={faPlus} className="me-2" />
// //                           Add New
// //                         </Button>
// //                       </div>
// //                     </div>

// //                     {serviceData.length > 0 ? (
// //                       <div className="table-responsive">
// //                         <Table hover>
// //                           <thead className="bg-light">
// //                             <tr>
// //                               <th>Name</th>
// //                               <th>Contact</th>
// //                               <th>Email</th>
// //                               <th>Location</th>
// //                               <th>Experience</th>
// //                               <th>Rate</th>
// //                               <th>Default</th>
// //                               <th>Actions</th>
// //                             </tr>
// //                           </thead>
// //                           <tbody>
// //                             {serviceData.map(data => (
// //                               <tr key={data.id} className={data.is_default ? 'table-success' : ''}>
// //                                 <td>
// //                                   <div>
// //                                     <strong>{data.name}</strong>
// //                                     {data.designation && (
// //                                       <div className="small text-muted">{data.designation}</div>
// //                                     )}
// //                                     {(data.profile_worklinks || data.profile_link) && (
// //                                       <div>
// //                                         <a 
// //                                           href={data.profile_worklinks || data.profile_link} 
// //                                           target="_blank" 
// //                                           rel="noopener noreferrer"
// //                                           className="small text-primary"
// //                                         >
// //                                           <FontAwesomeIcon icon={faLink} className="me-1" />
// //                                           Portfolio
// //                                         </a>
// //                                       </div>
// //                                     )}
// //                                   </div>
// //                                 </td>
// //                                 <td>
// //                                   <span className="small">
// //                                     <FontAwesomeIcon icon={faPhone} className="me-1 text-muted" />
// //                                     {data.contact_number || data.contact || '-'}
// //                                   </span>
// //                                 </td>
// //                                 <td>
// //                                   <span className="small">
// //                                     <FontAwesomeIcon icon={faEnvelope} className="me-1 text-muted" />
// //                                     {data.mail_id || '-'}
// //                                   </span>
// //                                 </td>
// //                                 <td>
// //                                   <span className="small">
// //                                     <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
// //                                     {data.location_address || data.location || '-'}
// //                                   </span>
// //                                 </td>
// //                                 <td>
// //                                   <span className="small">
// //                                     {(data.experience_years || data.experience) ? 
// //                                       `${data.experience_years || data.experience} years` : '-'}
// //                                   </span>
// //                                 </td>
// //                                 <td>
// //                                   <Badge bg="success">
// //                                     ₹{(data.price_rate_rent || data.rate) ? 
// //                                       parseInt(data.price_rate_rent || data.rate).toLocaleString() : 
// //                                       selectedService.rate_per_day?.toLocaleString()}
// //                                   </Badge>
// //                                 </td>
// //                                 <td>
// //                                   {data.is_default && (
// //                                     <Badge bg="primary">
// //                                       <FontAwesomeIcon icon={faAward} className="me-1" />
// //                                       Default
// //                                     </Badge>
// //                                   )}
// //                                 </td>
// //                                 <td>
// //                                   <div className="d-flex gap-2">
// //                                     <Button 
// //                                       variant="outline-primary" 
// //                                       size="sm"
// //                                       onClick={() => openDataModal(data)}
// //                                       title="Edit"
// //                                     >
// //                                       <FontAwesomeIcon icon={faPencilAlt} />
// //                                     </Button>
// //                                     <Button 
// //                                       variant="outline-danger" 
// //                                       size="sm"
// //                                       onClick={() => handleDeleteData(data.id)}
// //                                       title="Delete"
// //                                     >
// //                                       <FontAwesomeIcon icon={faTrash} />
// //                                     </Button>
// //                                   </div>
// //                                 </td>
// //                               </tr>
// //                             ))}
// //                           </tbody>
// //                         </Table>
// //                       </div>
// //                     ) : (
// //                       <div className="text-center py-5">
// //                         <FontAwesomeIcon icon={faUsers} size="3x" className="text-muted mb-3" />
// //                         <h6>No data added for {selectedService.service_name}</h6>
// //                         <p className="text-muted">
// //                           Start by adding people, items, or options for this service
// //                         </p>
// //                         <div className="d-flex gap-2 justify-content-center">
// //                           <Button variant="info" onClick={() => setShowBulkUpload(true)}>
// //                             <FontAwesomeIcon icon={faUpload} className="me-2" />
// //                             Bulk Upload
// //                           </Button>
// //                           <Button variant="primary" onClick={() => openDataModal()}>
// //                             <FontAwesomeIcon icon={faPlus} className="me-2" />
// //                             Add First Item
// //                           </Button>
// //                         </div>
// //                       </div>
// //                     )}
// //                   </>
// //                 ) : (
// //                   <div className="text-center py-5">
// //                     <p>Please select a service to manage its data.</p>
// //                   </div>
// //                 )}
// //               </Tab.Pane>
// //             </Tab.Content>
// //           </Card.Body>
// //         </Card>
// //       </Tab.Container>

// //       {/* Bulk Upload Modal */}
// //       <BulkUploadModal
// //         show={showBulkUpload}
// //         onHide={() => setShowBulkUpload(false)}
// //         selectedService={selectedService}
// //         onBulkUpload={handleBulkUpload}
// //         isLoading={isLoading}
// //       />

// //       {/* Enhanced Data Modal with Extended Fields */}
// //       <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="xl">
// //         <Modal.Header closeButton>
// //           <Modal.Title>
// //             <FontAwesomeIcon icon={faUsers} className="me-2" />
// //             {editingData ? 'Edit' : 'Add'} {selectedService?.service_name} Data
// //           </Modal.Title>
// //         </Modal.Header>
// //         <Form onSubmit={editingData ? handleUpdateData : handleCreateData}>
// //           <Modal.Body>
// //             <Nav variant="tabs" className="mb-3">
// //               <Nav.Item>
// //                 <Nav.Link href="#basic" active>Basic Information</Nav.Link>
// //               </Nav.Item>
// //             </Nav>

// //             {/* Basic Information Tab */}
// //             <div>
// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Name *</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.name}
// //                       onChange={(e) => setNewData({...newData, name: e.target.value})}
// //                       placeholder="e.g., Amitabh Arora"
// //                       required
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Contact Person</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.contact_person}
// //                       onChange={(e) => setNewData({...newData, contact_person: e.target.value})}
// //                       placeholder="e.g., John Doe"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Contact Number</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.contact_number}
// //                       onChange={(e) => setNewData({...newData, contact_number: e.target.value})}
// //                       placeholder="e.g., +91 9876543210"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Email Address</Form.Label>
// //                     <Form.Control
// //                       type="email"
// //                       value={newData.mail_id}
// //                       onChange={(e) => setNewData({...newData, mail_id: e.target.value})}
// //                       placeholder="e.g., john@example.com"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Current Job</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.current_job}
// //                       onChange={(e) => setNewData({...newData, current_job: e.target.value})}
// //                       placeholder="e.g., Photographer"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Designation</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.designation}
// //                       onChange={(e) => setNewData({...newData, designation: e.target.value})}
// //                       placeholder="e.g., Senior Photographer"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Location/Address</Form.Label>
// //                     <Form.Control
// //                       as="textarea"
// //                       rows={2}
// //                       value={newData.location_address}
// //                       onChange={(e) => setNewData({...newData, location_address: e.target.value})}
// //                       placeholder="e.g., Mumbai, Maharashtra"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Assistant</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.assistant}
// //                       onChange={(e) => setNewData({...newData, assistant: e.target.value})}
// //                       placeholder="e.g., Assistant Name"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Experience (Years)</Form.Label>
// //                     <Form.Control
// //                       type="number"
// //                       value={newData.experience_years}
// //                       onChange={(e) => setNewData({...newData, experience_years: e.target.value})}
// //                       placeholder="e.g., 5"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Price/Rate/Rent</Form.Label>
// //                     <Form.Control
// //                       type="number"
// //                       value={newData.price_rate_rent}
// //                       onChange={(e) => setNewData({...newData, price_rate_rent: e.target.value})}
// //                       placeholder={`Default: ${selectedService?.rate_per_day}`}
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Studio Size</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.studio_size}
// //                       onChange={(e) => setNewData({...newData, studio_size: e.target.value})}
// //                       placeholder="e.g., Medium Studio"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Shift Time</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.shift_time}
// //                       onChange={(e) => setNewData({...newData, shift_time: e.target.value})}
// //                       placeholder="e.g., 8 Hours"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Dismantle/Setting</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.dismantle_setting}
// //                       onChange={(e) => setNewData({...newData, dismantle_setting: e.target.value})}
// //                       placeholder="e.g., Fast Setup"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Generator Specification</Form.Label>
// //                     <Form.Control
// //                       type="text"
// //                       value={newData.generator_specification}
// //                       onChange={(e) => setNewData({...newData, generator_specification: e.target.value})}
// //                       placeholder="e.g., Generator 5KVA"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Row>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Profile/Work Links</Form.Label>
// //                     <Form.Control
// //                       type="url"
// //                       value={newData.profile_worklinks}
// //                       onChange={(e) => setNewData({...newData, profile_worklinks: e.target.value})}
// //                       placeholder="https://..."
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //                 <Col md={6}>
// //                   <Form.Group className="mb-3">
// //                     <Form.Label>Remarks/Rating</Form.Label>
// //                     <Form.Control
// //                       as="textarea"
// //                       rows={2}
// //                       value={newData.remarks_rating}
// //                       onChange={(e) => setNewData({...newData, remarks_rating: e.target.value})}
// //                       placeholder="e.g., Excellent work quality - 5 stars"
// //                     />
// //                   </Form.Group>
// //                 </Col>
// //               </Row>

// //               <Form.Group className="mb-3">
// //                 <Form.Check
// //                   type="checkbox"
// //                   label="Set as default selection for proposals"
// //                   checked={newData.is_default}
// //                   onChange={(e) => setNewData({...newData, is_default: e.target.checked})}
// //                 />
// //                 <Form.Text className="text-muted">
// //                   This will be auto-selected when users add this service to proposals
// //                 </Form.Text>
// //               </Form.Group>
// //             </div>
// //           </Modal.Body>
// //           <Modal.Footer>
// //             <Button variant="secondary" onClick={() => setShowDataModal(false)}>
// //               Cancel
// //             </Button>
// //             <Button type="submit" variant="primary" disabled={isLoading}>
// //               {isLoading ? <Spinner size="sm" className="me-2" /> : null}
// //               {editingData ? 'Update' : 'Add'} Data
// //             </Button>
// //           </Modal.Footer>
// //         </Form>
// //       </Modal>

// //       <style jsx>{`
// //         .service-card {
// //           transition: all 0.2s ease;
// //           border: 2px solid transparent;
// //         }
        
// //         .service-card:hover {
// //           border-color: #0d6efd;
// //           box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
// //           transform: translateY(-2px);
// //         }
        
// //         .table-success {
// //           background-color: rgba(40, 167, 69, 0.1) !important;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default ServiceDataManagement;
// import React, { useState, useEffect } from 'react';
// import { 
//   Table, 
//   Form, 
//   Button, 
//   Alert, 
//   Card, 
//   Row, 
//   Col, 
//   Modal,
//   Badge,
//   Spinner,
//   Nav,
//   Tab,
//   Dropdown,
//   ListGroup,
//   ProgressBar
// } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faPlus, 
//   faPencilAlt, 
//   faTrash, 
//   faCheck, 
//   faTimes, 
//   faInfoCircle,
//   faUsers,
//   faDownload,
//   faEdit,
//   faStar,
//   faEnvelope,
//   faPhone,
//   faLink,
//   faMapMarkerAlt,
//   faAward,
//   faChevronDown,
//   faGear,
//   faUpload,
//   faFileExcel,
//   faExclamationTriangle
// } from '@fortawesome/free-solid-svg-icons';

// // Import API functions
// import { 
//   fetchServices,
//   createServiceData,
//   updateServiceData,
//   deleteServiceData,
//   fetchServiceData,
//   getServicesWithData
// } from '../../services/api';

// // Enhanced Bulk Upload Modal Component
// const BulkUploadModal = ({ 
//   show, 
//   onHide, 
//   selectedService, 
//   onBulkUpload, 
//   isLoading 
// }) => {
//   const [uploadFile, setUploadFile] = useState(null);
//   const [excelData, setExcelData] = useState([]);
//   const [columnMapping, setColumnMapping] = useState({});
//   const [validationErrors, setValidationErrors] = useState([]);
//   const [uploadStep, setUploadStep] = useState(1);
//   const [processedData, setProcessedData] = useState([]);
//   const [uploadProgress, setUploadProgress] = useState(0);

//   // Clean, extended columns only (no legacy fields)
//   const availableColumns = [
//     // Required field
//     { key: 'name', label: 'Name', required: true },
    
//     // Extended fields from Excel template
//     { key: 'contact_number', label: 'Contact Number', required: false },
//     { key: 'contact_person', label: 'Contact Person', required: false },
//     { key: 'mail_id', label: 'Mail Id', required: false },
//     { key: 'profile_worklinks', label: 'Profile/Worklinks', required: false },
//     { key: 'current_job', label: 'Current Job', required: false },
//     { key: 'designation', label: 'Designation', required: false },
//     { key: 'assistant', label: 'Assistant', required: false },
//     { key: 'location_address', label: 'Location/Address', required: false },
//     { key: 'experience_years', label: 'Experience in Years', required: false },
//     { key: 'price_rate_rent', label: 'Price/Rate/Rent', required: false },
//     { key: 'studio_size', label: 'Studio Size', required: false },
//     { key: 'shift_time', label: 'Shift Time', required: false },
//     { key: 'dismantle_setting', label: 'Dismantle/Setting', required: false },
//     { key: 'generator_specification', label: 'Generator Specification', required: false },
//     { key: 'remarks_rating', label: 'Remarks/Rating', required: false },
//     { key: 'is_default', label: 'Is Default', required: false }
//   ];

//   const resetModal = () => {
//     setUploadFile(null);
//     setExcelData([]);
//     setColumnMapping({});
//     setValidationErrors([]);
//     setUploadStep(1);
//     setProcessedData([]);
//     setUploadProgress(0);
//   };

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];
//     if (!file) return;

//     const fileType = file.name.split('.').pop().toLowerCase();
//     if (!['xlsx', 'xls', 'csv'].includes(fileType)) {
//       alert('Please upload an Excel file (.xlsx, .xls) or CSV file');
//       return;
//     }

//     setUploadFile(file);
    
//     try {
//       const XLSX = await import('xlsx');
//       const reader = new FileReader();

//       reader.onload = (e) => {
//         try {
//           const data = new Uint8Array(e.target.result);
//           const workbook = XLSX.read(data, { type: 'array' });
//           const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
//           const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          
//           if (jsonData.length < 2) {
//             alert('Excel file must have at least a header row and one data row');
//             return;
//           }

//           const headers = jsonData[0];
//           const rows = jsonData.slice(1).filter(row => 
//             row.some(cell => cell !== undefined && cell !== '' && cell !== null)
//           );
          
//           setExcelData({ headers, rows });
//           setUploadStep(2);
          
//           // Enhanced auto-mapping for all fields
//           const autoMapping = {};
//           headers.forEach((header, index) => {
//             const headerLower = header.toString().toLowerCase().trim();
//             const matchedColumn = availableColumns.find(col => {
//               const colKey = col.key.toLowerCase();
//               const colLabel = col.label.toLowerCase();
              
//               // Exact matches first
//               if (headerLower === colKey || headerLower === colLabel) return true;
              
//               // Enhanced pattern matching
//               const patterns = {
//                 'name': ['name', 'person name', 'full name'],
//                 'contact_number': ['contact number', 'phone', 'mobile', 'contact no', 'phone number'],
//                 'contact_person': ['contact person', 'person', 'contact name'],
//                 'mail_id': ['mail id', 'email', 'email id', 'mail', 'e-mail'],
//                 'profile_worklinks': ['profile', 'worklinks', 'portfolio', 'website', 'work links', 'profile/worklinks'],
//                 'current_job': ['current job', 'job', 'occupation', 'profession'],
//                 'designation': ['designation', 'title', 'position', 'role'],
//                 'assistant': ['assistant', 'helper', 'support'],
//                 'location_address': ['location', 'address', 'location address', 'place', 'location/address'],
//                 'experience_years': ['experience', 'exp', 'years', 'experience years', 'years of experience', 'experience in years'],
//                 'price_rate_rent': ['price', 'rate', 'rent', 'cost', 'pricing', 'fee', 'price/rate/rent'],
//                 'studio_size': ['studio size', 'size', 'studio'],
//                 'shift_time': ['shift time', 'time', 'hours', 'duration'],
//                 'dismantle_setting': ['dismantle', 'setting', 'setup', 'dismantle setting', 'dismantle/setting'],
//                 'generator_specification': ['generator', 'specification', 'gen spec', 'power', 'generator specification'],
//                 'remarks_rating': ['remarks', 'rating', 'notes', 'comments', 'review', 'remarks/rating'],
//                 'is_default': ['default', 'is default', 'primary']
//               };
              
//               const fieldPatterns = patterns[col.key] || [];
//               return fieldPatterns.some(pattern => headerLower.includes(pattern));
//             });
            
//             if (matchedColumn && !Object.values(autoMapping).includes(index)) {
//               autoMapping[matchedColumn.key] = index;
//             }
//           });
          
//           setColumnMapping(autoMapping);
//         } catch (error) {
//           console.error('Error parsing Excel file:', error);
//           alert('Error parsing Excel file. Please check the file format.');
//         }
//       };

//       reader.readAsArrayBuffer(file);
//     } catch (error) {
//       console.error('Error loading XLSX library:', error);
//       alert('Error loading Excel parser. Please try again.');
//     }
//   };

//   const handleColumnMapping = (columnKey, excelColumnIndex) => {
//     setColumnMapping(prev => ({
//       ...prev,
//       [columnKey]: excelColumnIndex === '' ? undefined : parseInt(excelColumnIndex)
//     }));
//   };

//   const validateAndProcessData = () => {
//     const errors = [];
//     const processed = [];

//     const requiredFields = availableColumns.filter(col => col.required);
//     requiredFields.forEach(field => {
//       if (columnMapping[field.key] === undefined) {
//         errors.push(`Required field "${field.label}" must be mapped`);
//       }
//     });

//     if (errors.length > 0) {
//       setValidationErrors(errors);
//       return;
//     }

//     excelData.rows.forEach((row, index) => {
//       const rowData = {};

//       Object.keys(columnMapping).forEach(key => {
//         const columnIndex = columnMapping[key];
//         if (columnIndex !== undefined) {
//           let value = row[columnIndex];
          
//           if (value !== undefined && value !== null && value !== '') {
//             if (key === 'name') {
//               value = value.toString().trim();
//             } else if (['experience_years'].includes(key)) {
//               value = parseInt(value) || null;
//             } else if (['price_rate_rent'].includes(key)) {
//               value = parseFloat(value) || null;
//             } else if (key === 'is_default') {
//               value = ['true', '1', 'yes', 'y', 'default'].includes(
//                 value.toString().toLowerCase().trim()
//               );
//             } else if (key === 'profile_worklinks') {
//               value = value.toString().trim();
//               if (value && !value.startsWith('http')) {
//                 value = 'https://' + value;
//               }
//             } else {
//               value = value.toString().trim();
//             }
//           } else {
//             value = key === 'is_default' ? false : null;
//           }
          
//           rowData[key] = value;
//         }
//       });

//       if (!rowData.name) {
//         return;
//       }

//       processed.push({
//         ...rowData,
//         rowNumber: index + 2
//       });
//     });

//     setValidationErrors(errors);
//     setProcessedData(processed);
//     setUploadStep(3);
//   };

//   const handleBulkUpload = async () => {
//     if (processedData.length === 0) return;

//     try {
//       setUploadProgress(0);
      
//       const hasDefault = processedData.some(item => item.is_default);
      
//       const results = [];
//       for (let i = 0; i < processedData.length; i++) {
//         const item = processedData[i];
//         try {
//           const { rowNumber, ...dataToSend } = item;
          
//           await onBulkUpload(dataToSend, hasDefault && i === 0);
//           results.push({ success: true, item, rowNumber });
//         } catch (error) {
//           results.push({ success: false, item, error: error.message, rowNumber });
//         }
        
//         setUploadProgress(((i + 1) / processedData.length) * 100);
//       }
      
//       const successCount = results.filter(r => r.success).length;
//       const errorCount = results.filter(r => !r.success).length;
      
//       if (errorCount === 0) {
//         alert(`Successfully uploaded ${successCount} items!`);
//         onHide();
//         resetModal();
//       } else {
//         const errorMessages = results
//           .filter(r => !r.success)
//           .map(r => `Row ${r.rowNumber}: ${r.error}`)
//           .join('\n');
//         alert(`Upload completed with ${successCount} successful and ${errorCount} failed items:\n\n${errorMessages}`);
//       }
//     } catch (error) {
//       console.error('Bulk upload error:', error);
//       alert('Error during bulk upload: ' + error.message);
//     }
//   };

//   const downloadTemplate = async () => {
//     try {
//       const XLSX = await import('xlsx');
//       // Updated template with all the extended fields
//       const templateData = [
//         // Header row with all columns from your Excel template
//         [
//           'Name', 'Contact Number', 'Contact Person', 'Mail Id', 'Profile/Worklinks', 
//           'Current Job', 'Designation', 'Assistant', 'Location/Address', 'Experience in Years',
//           'Price/Rate/Rent', 'Studio Size', 'Shift Time', 'Dismantle/Setting', 
//           'Generator Specification', 'Remarks/Rating', 'Is Default'
//         ],
//         // Sample data row 1
//         [
//           'John Doe', '+91 9876543210', 'John Doe', 'john@example.com', 'https://johndoe.com',
//           'Photographer', 'Senior Photographer', 'Assistant Name', 'Mumbai, Maharashtra', '5',
//           '5000', 'Medium Studio', '8 Hours', 'Fast Setup', 'Generator 5KVA', 'Excellent work quality - 5 stars', 'FALSE'
//         ],
//         // Sample data row 2
//         [
//           'Jane Smith', '+91 9876543211', 'Jane Smith', 'jane@example.com', 'https://janesmith.portfolio.com',
//           'Videographer', 'Lead Videographer', 'Jane Assistant', 'Delhi, India', '8',
//           '7500', 'Large Studio', '10 Hours', 'Quick Setup', 'Generator 10KVA', 'Top rated professional - 5 stars', 'TRUE'
//         ],
//         // Sample data row 3
//         [
//           'Mike Johnson', '+91 9876543212', 'Mike Johnson', 'mike@example.com', '',
//           'Event Coordinator', 'Event Manager', 'Mike Helper', 'Bangalore, Karnataka', '3',
//           '3500', 'Small Studio', '6 Hours', 'Standard Setup', 'Generator 3KVA', 'Good performance - 4 stars', 'FALSE'
//         ]
//       ];

//       const ws = XLSX.utils.aoa_to_sheet(templateData);
      
//       // Set column widths for better readability
//       ws['!cols'] = [
//         { wch: 15 }, // Name
//         { wch: 18 }, // Contact Number
//         { wch: 15 }, // Contact Person
//         { wch: 25 }, // Mail Id
//         { wch: 30 }, // Profile/Worklinks
//         { wch: 20 }, // Current Job
//         { wch: 20 }, // Designation
//         { wch: 15 }, // Assistant
//         { wch: 25 }, // Location/Address
//         { wch: 12 }, // Experience in Years
//         { wch: 15 }, // Price/Rate/Rent
//         { wch: 15 }, // Studio Size
//         { wch: 12 }, // Shift Time
//         { wch: 18 }, // Dismantle/Setting
//         { wch: 20 }, // Generator Specification
//         { wch: 30 }, // Remarks/Rating
//         { wch: 10 }  // Is Default
//       ];

//       const wb = XLSX.utils.book_new();
//       XLSX.utils.book_append_sheet(wb, ws, 'Service Data Template');
//       XLSX.writeFile(wb, `${selectedService?.service_name || 'service'}_data_template.xlsx`);
//     } catch (error) {
//       console.error('Error downloading template:', error);
//       alert('Error downloading template. Please try again.');
//     }
//   };

//   if (!show) return null;

//   return (
//     <Modal show={show} onHide={() => { onHide(); resetModal(); }} size="xl">
//       <Modal.Header closeButton>
//         <Modal.Title>
//           <FontAwesomeIcon icon={faFileExcel} className="me-2" />
//           Bulk Upload - {selectedService?.service_name}
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {/* Step Indicator */}
//         <div className="mb-4">
//           <div className="d-flex justify-content-between align-items-center mb-2">
//             {[1, 2, 3, 4].map(step => (
//               <div key={step} className="text-center">
//                 <div className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
//                   uploadStep >= step ? 'bg-primary text-white' : 'bg-light text-muted'
//                 }`} style={{ width: '30px', height: '30px' }}>
//                   {step}
//                 </div>
//                 <div className="small mt-1">
//                   {step === 1 && 'Upload'}
//                   {step === 2 && 'Map'}
//                   {step === 3 && 'Validate'}
//                   {step === 4 && 'Confirm'}
//                 </div>
//               </div>
//             ))}
//           </div>
//           <ProgressBar now={(uploadStep - 1) * 33.33} className="mt-2" />
//         </div>

//         {/* Step 1: File Upload */}
//         {uploadStep === 1 && (
//           <div>
//             <Card className="mb-3">
//               <Card.Body className="text-center">
//                 <FontAwesomeIcon icon={faDownload} size="2x" className="text-primary mb-3" />
//                 <h6>Download Template</h6>
//                 <p className="text-muted">Start with our template to ensure proper formatting</p>
//                 <Button variant="outline-primary" onClick={downloadTemplate}>
//                   <FontAwesomeIcon icon={faDownload} className="me-2" />
//                   Download Template
//                 </Button>
//               </Card.Body>
//             </Card>

//             <Card>
//               <Card.Body className="text-center">
//                 <FontAwesomeIcon icon={faUpload} size="2x" className="text-success mb-3" />
//                 <h6>Upload Excel File</h6>
//                 <p className="text-muted">Select an Excel file (.xlsx, .xls) or CSV file</p>
//                 <Form.Control
//                   type="file"
//                   accept=".xlsx,.xls,.csv"
//                   onChange={handleFileUpload}
//                   className="mb-3"
//                 />
//                 {uploadFile && (
//                   <Alert variant="info">
//                     <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//                     File selected: {uploadFile.name}
//                   </Alert>
//                 )}
//               </Card.Body>
//             </Card>
//           </div>
//         )}

//         {/* Step 2: Column Mapping */}
//         {uploadStep === 2 && (
//           <div>
//             <Alert variant="info">
//               <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//               Map your Excel columns to the service data fields. Required fields are marked with *.
//             </Alert>

//             <Row>
//               <Col md={6}>
//                 <h6>Your Excel Columns</h6>
//                 <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                   {excelData.headers?.map((header, index) => (
//                     <Badge key={index} bg="secondary" className="me-2 mb-2">
//                       {index}: {header}
//                     </Badge>
//                   ))}
//                 </div>
//               </Col>
//               <Col md={6}>
//                 <h6>Sample Data (First Row)</h6>
//                 <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
//                   {excelData.rows?.[0]?.map((cell, index) => (
//                     <div key={index} className="small mb-1">
//                       <strong>{index}:</strong> {cell}
//                     </div>
//                   ))}
//                 </div>
//               </Col>
//             </Row>

//             <h6>Column Mapping</h6>
//             <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
//               <Table striped bordered size="sm">
//                 <thead>
//                   <tr>
//                     <th>Field</th>
//                     <th>Required</th>
//                     <th>Excel Column</th>
//                     <th>Preview</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {availableColumns.map(column => (
//                     <tr key={column.key}>
//                       <td>
//                         {column.label}
//                         {column.required && <span className="text-danger">*</span>}
//                       </td>
//                       <td>
//                         {column.required ? (
//                           <Badge bg="danger">Required</Badge>
//                         ) : (
//                           <Badge bg="secondary">Optional</Badge>
//                         )}
//                       </td>
//                       <td>
//                         <Form.Select
//                           size="sm"
//                           value={columnMapping[column.key] || ''}
//                           onChange={(e) => handleColumnMapping(column.key, e.target.value)}
//                         >
//                           <option value="">Select column...</option>
//                           {excelData.headers?.map((header, index) => (
//                             <option key={index} value={index}>
//                               {index}: {header}
//                             </option>
//                           ))}
//                         </Form.Select>
//                       </td>
//                       <td>
//                         {columnMapping[column.key] !== undefined ? (
//                           <small className="text-muted">
//                             {excelData.rows?.[0]?.[columnMapping[column.key]] || 'Empty'}
//                           </small>
//                         ) : (
//                           <small className="text-muted">Not mapped</small>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>

//             <div className="d-flex justify-content-between">
//               <Button variant="secondary" onClick={() => setUploadStep(1)}>
//                 Back
//               </Button>
//               <Button variant="primary" onClick={validateAndProcessData}>
//                 Validate Data
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Step 3: Enhanced Validation with More Columns */}
//         {uploadStep === 3 && (
//           <div>
//             {validationErrors.length > 0 ? (
//               <Alert variant="danger">
//                 <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
//                 <strong>Validation Errors:</strong>
//                 <ul className="mb-0 mt-2">
//                   {validationErrors.map((error, index) => (
//                     <li key={index}>{error}</li>
//                   ))}
//                 </ul>
//               </Alert>
//             ) : (
//               <Alert variant="success">
//                 <FontAwesomeIcon icon={faCheck} className="me-2" />
//                 Data validation successful! {processedData.length} records ready for upload.
//               </Alert>
//             )}

//             <h6>Data Preview</h6>
//             <div style={{ maxHeight: '400px', overflowX: 'auto', overflowY: 'auto' }}>
//               <Table striped bordered size="sm" style={{ minWidth: '1200px' }}>
//                 <thead className="bg-light">
//                   <tr>
//                     <th>Row</th>
//                     <th>Name</th>
//                     <th>Contact Number</th>
//                     <th>Email</th>
//                     <th>Current Job</th>
//                     <th>Designation</th>
//                     <th>Location</th>
//                     <th>Experience</th>
//                     <th>Price/Rate</th>
//                     <th>Studio Size</th>
//                     <th>Generator</th>
//                     <th>Default</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {processedData.map((item, index) => (
//                     <tr key={index}>
//                       <td>{item.rowNumber}</td>
//                       <td className="fw-bold">{item.name}</td>
//                       <td>{item.contact_number || '-'}</td>
//                       <td>{item.mail_id || '-'}</td>
//                       <td>{item.current_job || '-'}</td>
//                       <td>{item.designation || '-'}</td>
//                       <td>{item.location_address || '-'}</td>
//                       <td>{item.experience_years ? `${item.experience_years} years` : '-'}</td>
//                       <td>{item.price_rate_rent ? `₹${parseInt(item.price_rate_rent).toLocaleString()}` : '-'}</td>
//                       <td>{item.studio_size || '-'}</td>
//                       <td>{item.generator_specification || '-'}</td>
//                       <td>
//                         {item.is_default ? (
//                           <Badge bg="success">✓</Badge>
//                         ) : (
//                           <span className="text-muted">-</span>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>

//             <div className="d-flex justify-content-between">
//               <Button variant="secondary" onClick={() => setUploadStep(2)}>
//                 Back
//               </Button>
//               {validationErrors.length === 0 && (
//                 <Button variant="success" onClick={() => setUploadStep(4)}>
//                   Continue to Upload
//                 </Button>
//               )}
//             </div>
//           </div>
//         )}

//         {/* Step 4: Confirm Upload */}
//         {uploadStep === 4 && (
//           <div>
//             <Alert variant="warning">
//               <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
//               <strong>Confirm Upload</strong>
//               <p className="mb-0 mt-2">
//                 You are about to upload {processedData.length} records to {selectedService?.service_name}. 
//                 This action cannot be undone.
//               </p>
//             </Alert>

//             {uploadProgress > 0 && (
//               <div className="mb-3">
//                 <div className="d-flex justify-content-between">
//                   <span>Upload Progress</span>
//                   <span>{Math.round(uploadProgress)}%</span>
//                 </div>
//                 <ProgressBar now={uploadProgress} />
//               </div>
//             )}

//             <div className="d-flex justify-content-between">
//               <Button variant="secondary" onClick={() => setUploadStep(3)} disabled={isLoading}>
//                 Back
//               </Button>
//               <Button variant="success" onClick={handleBulkUpload} disabled={isLoading}>
//                 {isLoading ? (
//                   <>
//                     <Spinner size="sm" className="me-2" />
//                     Uploading...
//                   </>
//                 ) : (
//                   <>
//                     <FontAwesomeIcon icon={faUpload} className="me-2" />
//                     Upload Data
//                   </>
//                 )}
//               </Button>
//             </div>
//           </div>
//         )}
//       </Modal.Body>
//     </Modal>
//   );
// };

// function ServiceDataManagement() {
//   const [services, setServices] = useState([]);
//   const [selectedService, setSelectedService] = useState(null);
//   const [serviceData, setServiceData] = useState([]);
//   const [activeView, setActiveView] = useState('services');
  
//   // Form states - Updated with only extended fields
//   const [showDataModal, setShowDataModal] = useState(false);
//   const [showBulkUpload, setShowBulkUpload] = useState(false);
//   const [editingData, setEditingData] = useState(null);
//   const [newData, setNewData] = useState({
//     // Extended fields only
//     name: '',
//     contact_number: '',
//     contact_person: '',
//     mail_id: '',
//     profile_worklinks: '',
//     current_job: '',
//     designation: '',
//     assistant: '',
//     location_address: '',
//     experience_years: '',
//     price_rate_rent: '',
//     studio_size: '',
//     shift_time: '',
//     dismantle_setting: '',
//     generator_specification: '',
//     remarks_rating: '',
//     is_default: false
//   });
  
//   // Loading states
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   useEffect(() => {
//     loadServices();
//   }, []);

//   useEffect(() => {
//     if (selectedService) {
//       loadServiceData();
//     }
//   }, [selectedService]);

//   // API function for bulk upload
//   const bulkCreateServiceData = async (serviceId, dataArray, unsetDefaults = false) => {
//     const response = await fetch(`/api/service-data/${serviceId}/bulk`, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${localStorage.getItem('token')}`
//       },
//       body: JSON.stringify({ 
//         data: dataArray, 
//         unsetDefaults 
//       })
//     });
    
//     if (!response.ok) {
//       const error = await response.json();
//       throw new Error(error.error || 'Failed to bulk upload data');
//     }
    
//     return response.json();
//   };

//   // Handle bulk upload
//   const handleBulkUpload = async (itemData, unsetDefaults = false) => {
//     try {
//       await bulkCreateServiceData(selectedService.id, [itemData], unsetDefaults);
//     } catch (error) {
//       throw error;
//     }
//   };
// // Load services and their data counts
//  const loadServices = async () => {
//    try {
//      setIsLoading(true);
     
//      const servicesResponse = await fetchServices();
//      console.log('Loaded services:', servicesResponse.data);
     
//      try {
//        const servicesWithDataResponse = await getServicesWithData();
//        console.log('Services with data:', servicesWithDataResponse.data);
       
//        const servicesWithCounts = servicesResponse.data.map(service => {
//          const serviceWithData = servicesWithDataResponse.data?.data?.find(s => s.id === service.id);
//          return {
//            ...service,
//            data_count: serviceWithData?.data_count || 0,
//            default_name: serviceWithData?.default_name || null
//          };
//        });
       
//        setServices(servicesWithCounts);
//      } catch (dataError) {
//        console.log('Error loading service data counts, using basic services:', dataError);
//        setServices(servicesResponse.data.map(service => ({
//          ...service,
//          data_count: 0
//        })));
//      }
//    } catch (error) {
//      console.error('Error loading services:', error);
//      setError('Failed to load services');
//    } finally {
//      setIsLoading(false);
//    }
//  };

//  const loadServiceData = async () => {
//    if (!selectedService) return;
//    try {
//      setIsLoading(true);
//      console.log('Loading data for service:', selectedService.id);
     
//      const response = await fetchServiceData(selectedService.id);
//      console.log('Raw API response:', response);
//      console.log('Response data:', response.data);
     
//      const serviceDataArray = response.data?.data || [];
//      console.log('Extracted service data:', serviceDataArray);
     
//      setServiceData(serviceDataArray);
//    } catch (error) {
//      console.error('Error loading service data:', error);
//      setError('Failed to load service data');
//      setServiceData([]);
//    } finally {
//      setIsLoading(false);
//    }
//  };

//  const handleCreateData = async (e) => {
//    e.preventDefault();
//    try {
//      setIsLoading(true);
     
//      if (newData.is_default) {
//        await Promise.all(
//          serviceData.map(item => 
//            updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
//          )
//        );
//      }
     
//      await createServiceData(selectedService.id, newData);
     
//      // Reset form with extended fields
//      setNewData({
//        name: '', contact_number: '', contact_person: '', mail_id: '', profile_worklinks: '',
//        current_job: '', designation: '', assistant: '', location_address: '', experience_years: '',
//        price_rate_rent: '', studio_size: '', shift_time: '', dismantle_setting: '',
//        generator_specification: '', remarks_rating: '', is_default: false
//      });
     
//      setShowDataModal(false);
//      await loadServiceData();
//      await loadServices();
//      setSuccess('Data added successfully!');
//      setTimeout(() => setSuccess(''), 3000);
//    } catch (error) {
//      console.error('Create error:', error);
//      setError(error.response?.data?.error || 'Failed to create data');
//    } finally {
//      setIsLoading(false);
//    }
//  };

//  const handleUpdateData = async (e) => {
//    e.preventDefault();
//    try {
//      setIsLoading(true);
     
//      if (newData.is_default) {
//        await Promise.all(
//          serviceData
//            .filter(item => item.id !== editingData.id)
//            .map(item => 
//              updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
//            )
//        );
//      }
     
//      await updateServiceData(selectedService.id, editingData.id, newData);
//      setEditingData(null);
//      setShowDataModal(false);
//      await loadServiceData();
//      await loadServices();
//      setSuccess('Data updated successfully!');
//      setTimeout(() => setSuccess(''), 3000);
//    } catch (error) {
//      console.error('Update error:', error);
//      setError(error.response?.data?.error || 'Failed to update data');
//    } finally {
//      setIsLoading(false);
//    }
//  };

//  const handleDeleteData = async (dataId) => {
//    if (window.confirm('Are you sure you want to delete this data?')) {
//      try {
//        setIsLoading(true);
//        await deleteServiceData(selectedService.id, dataId);
//        await loadServiceData();
//        await loadServices();
//        setSuccess('Data deleted successfully!');
//        setTimeout(() => setSuccess(''), 3000);
//      } catch (error) {
//        console.error('Delete error:', error);
//        setError(error.response?.data?.error || 'Failed to delete data');
//      } finally {
//        setIsLoading(false);
//      }
//    }
//  };

//  const openDataModal = (data = null) => {
//    if (data) {
//      setEditingData(data);
//      setNewData({
//        // Extended fields with fallback to legacy fields
//        name: data.name || '',
//        contact_number: data.contact_number || data.contact || '',
//        contact_person: data.contact_person || '',
//        mail_id: data.mail_id || '',
//        profile_worklinks: data.profile_worklinks || data.profile_link || '',
//        current_job: data.current_job || '',
//        designation: data.designation || '',
//        assistant: data.assistant || '',
//        location_address: data.location_address || data.location || '',
//        experience_years: data.experience_years || data.experience || '',
//        price_rate_rent: data.price_rate_rent || data.rate || '',
//        studio_size: data.studio_size || '',
//        shift_time: data.shift_time || '',
//        dismantle_setting: data.dismantle_setting || '',
//        generator_specification: data.generator_specification || '',
//        remarks_rating: data.remarks_rating || data.specialization || '',
//        is_default: data.is_default || false
//      });
//    } else {
//      setEditingData(null);
//      setNewData({
//        name: '', contact_number: '', contact_person: '', mail_id: '', profile_worklinks: '',
//        current_job: '', designation: '', assistant: '', location_address: '', experience_years: '',
//        price_rate_rent: '', studio_size: '', shift_time: '', dismantle_setting: '',
//        generator_specification: '', remarks_rating: '', is_default: false
//      });
//    }
//    setShowDataModal(true);
//  };

//  const selectService = (service) => {
//    setSelectedService(service);
//    setActiveView('data');
//  };

//  return (
//    <div className="service-data-management">
//      <div className="d-flex justify-content-between align-items-center mb-4">
//        <div>
//          <h4 className="mb-1">Service Data Management</h4>
//          <p className="text-muted mb-0">Add people and details for each service</p>
//        </div>
//        <Badge bg="info" className="py-2 px-3">
//          <FontAwesomeIcon icon={faUsers} className="me-1" />
//          {selectedService ? `${serviceData.length} items` : `${services.length} services`}
//        </Badge>
//      </div>

//      {error && (
//        <Alert variant="danger" dismissible onClose={() => setError('')}>
//          <FontAwesomeIcon icon={faTimes} className="me-2" />
//          {error}
//        </Alert>
//      )}

//      {success && (
//        <Alert variant="success" dismissible onClose={() => setSuccess('')}>
//          <FontAwesomeIcon icon={faCheck} className="me-2" />
//          {success}
//        </Alert>
//      )}

//      <Tab.Container activeKey={activeView} onSelect={setActiveView}>
//        <Card className="shadow-sm border-0">
//          <Card.Header className="bg-light">
//            <Nav variant="pills" className="flex-row">
//              <Nav.Item>
//                <Nav.Link eventKey="services" className="text-decoration-none">
//                  <FontAwesomeIcon icon={faGear} className="me-2" />
//                  Services
//                  <Badge bg="secondary" className="ms-2">{services.length}</Badge>
//                </Nav.Link>
//              </Nav.Item>
//              {selectedService && (
//                <Nav.Item>
//                  <Nav.Link eventKey="data" className="text-decoration-none">
//                    <FontAwesomeIcon icon={faUsers} className="me-2" />
//                    Data for {selectedService.service_name}
//                    <Badge bg="secondary" className="ms-2">{serviceData.length}</Badge>
//                  </Nav.Link>
//                </Nav.Item>
//              )}
//            </Nav>
//          </Card.Header>

//          <Card.Body>
//            <Tab.Content>
//              {/* Services Selection Tab */}
//              <Tab.Pane eventKey="services">
//                <div className="mb-3">
//                  <h5>Select a service to manage its data:</h5>
//                  <p className="text-muted">Choose which service you want to add people/items for</p>
//                </div>

//                {isLoading ? (
//                  <div className="text-center py-4">
//                    <Spinner animation="border" variant="primary" />
//                    <p className="mt-2">Loading services...</p>
//                  </div>
//                ) : (
//                  <div className="table-responsive">
//                    <Table hover className="align-middle">
//                      <thead className="bg-light">
//                        <tr>
//                          <th>Service Name</th>
//                          <th>Items</th>
//                          <th>Category</th>
//                          <th>Default Rate</th>
//                          <th>Default Item</th>
//                          <th>Action</th>
//                        </tr>
//                      </thead>
//                      <tbody>
//                        {services.map(service => (
//                          <tr key={service.id} className="service-row">
//                            <td>
//                              <div className="d-flex align-items-center">
//                                <FontAwesomeIcon icon={faGear} className="text-muted me-2" />
//                                <strong>{service.service_name}</strong>
//                              </div>
//                            </td>
//                            <td>
//                              <Badge bg={service.data_count > 0 ? "success" : "secondary"}>
//                                <FontAwesomeIcon icon={faUsers} className="me-1" />
//                                {service.data_count || 0} items
//                              </Badge>
//                            </td>
//                            <td>
//                              <span className="text-muted text-capitalize">{service.category}</span>
//                            </td>
//                            <td>
//                              <Badge bg="info" className="fw-normal">
//                                ₹{service.rate_per_day?.toLocaleString()}/day
//                              </Badge>
//                            </td>
//                            <td>
//                              {service.default_name ? (
//                                <span className="text-success">
//                                  <FontAwesomeIcon icon={faCheck} className="me-1" />
//                                  {service.default_name}
//                                </span>
//                              ) : (
//                                <span className="text-muted">-</span>
//                              )}
//                            </td>
//                            <td>
//                              <Button 
//                                variant="primary" 
//                                size="sm"
//                                onClick={() => selectService(service)}
//                                className="d-flex align-items-center"
//                              >
//                                <FontAwesomeIcon icon={faUsers} className="me-2" />
//                                Manage Data
//                              </Button>
//                            </td>
//                          </tr>
//                        ))}
//                      </tbody>
//                    </Table>
//                  </div>
//                )}
//              </Tab.Pane>

//              {/* Enhanced Service Data Tab */}
//              <Tab.Pane eventKey="data">
//                {selectedService ? (
//                  <>
//                    <div className="d-flex justify-content-between align-items-center mb-3">
//                      <div>
//                        <h5 className="mb-0">Data for {selectedService.service_name}</h5>
//                        <p className="text-muted mb-0">Add people, items, or options for this service</p>
//                      </div>
//                      <div className="d-flex gap-2">
//                        <Button 
//                          variant="info" 
//                          onClick={() => setShowBulkUpload(true)}
//                          className="me-2"
//                        >
//                          <FontAwesomeIcon icon={faUpload} className="me-2" />
//                          Bulk Upload
//                        </Button>
//                        <Button variant="success" onClick={() => openDataModal()}>
//                          <FontAwesomeIcon icon={faPlus} className="me-2" />
//                          Add New
//                        </Button>
//                      </div>
//                    </div>

//                    {serviceData.length > 0 ? (
//                      <div className="table-responsive">
//                        <Table hover style={{ minWidth: '1200px' }}>
//                          <thead className="bg-light">
//                            <tr>
//                              <th>Name & Details</th>
//                              <th>Contact Info</th>
//                              <th>Job & Location</th>
//                              <th>Experience & Rate</th>
//                              <th>Technical Details</th>
//                              <th>Status</th>
//                              <th>Actions</th>
//                            </tr>
//                          </thead>
//                          <tbody>
//                            {serviceData.map(data => (
//                              <tr key={data.id} className={data.is_default ? 'table-success' : ''}>
//                                <td>
//                                  <div>
//                                    <strong className="d-block">{data.name}</strong>
//                                    {(data.designation || data.current_job) && (
//                                      <small className="text-muted d-block">
//                                        {data.designation || data.current_job}
//                                      </small>
//                                    )}
//                                    {(data.profile_worklinks || data.profile_link) && (
//                                      <a 
//                                        href={data.profile_worklinks || data.profile_link} 
//                                        target="_blank" 
//                                        rel="noopener noreferrer"
//                                        className="small text-primary"
//                                      >
//                                        <FontAwesomeIcon icon={faLink} className="me-1" />
//                                        Portfolio
//                                      </a>
//                                    )}
//                                  </div>
//                                </td>
//                                <td>
//                                  <div className="small">
//                                    {(data.contact_number || data.contact) && (
//                                      <div className="mb-1">
//                                        <FontAwesomeIcon icon={faPhone} className="me-1 text-muted" />
//                                        {data.contact_number || data.contact}
//                                      </div>
//                                    )}
//                                    {data.mail_id && (
//                                      <div>
//                                        <FontAwesomeIcon icon={faEnvelope} className="me-1 text-muted" />
//                                        {data.mail_id}
//                                      </div>
//                                    )}
//                                  </div>
//                                </td>
//                                <td>
//                                  <div className="small">
//                                    {(data.current_job || data.specialization) && (
//                                      <div className="mb-1 fw-bold">
//                                        {data.current_job || data.specialization}
//                                      </div>
//                                    )}
//                                    {(data.location_address || data.location) && (
//                                      <div>
//                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
//                                        {data.location_address || data.location}
//                                      </div>
//                                    )}
//                                  </div>
//                                </td>
//                                <td>
//                                  <div className="small">
//                                    {(data.experience_years || data.experience) && (
//                                      <div className="mb-1">
//                                        <strong>{data.experience_years || data.experience}</strong> years
//                                      </div>
//                                    )}
//                                    <Badge bg="success">
//                                      ₹{(data.price_rate_rent || data.rate) ? 
//                                        parseInt(data.price_rate_rent || data.rate).toLocaleString() : 
//                                        selectedService.rate_per_day?.toLocaleString()}
//                                    </Badge>
//                                  </div>
//                                </td>
//                                <td>
//                                  <div className="small">
//                                    {data.studio_size && (
//                                      <div className="mb-1">
//                                        <strong>Studio:</strong> {data.studio_size}
//                                      </div>
//                                    )}
//                                    {data.generator_specification && (
//                                      <div className="mb-1">
//                                        <strong>Generator:</strong> {data.generator_specification}
//                                      </div>
//                                    )}
//                                    {data.shift_time && (
//                                      <div>
//                                        <strong>Hours:</strong> {data.shift_time}
//                                      </div>
//                                    )}
//                                  </div>
//                                </td>
//                                <td>
//                                  <div>
//                                    {data.is_default && (
//                                      <Badge bg="primary" className="mb-1">
//                                        <FontAwesomeIcon icon={faAward} className="me-1" />
//                                        Default
//                                      </Badge>
//                                    )}
//                                    {(data.remarks_rating || data.rating) && (
//                                      <div className="small text-muted">
//                                        {data.remarks_rating || (data.rating && `${data.rating} stars`)}
//                                      </div>
//                                    )}
//                                  </div>
//                                </td>
//                                <td>
//                                  <div className="d-flex gap-2">
//                                    <Button 
//                                      variant="outline-primary" 
//                                      size="sm"
//                                      onClick={() => openDataModal(data)}
//                                      title="Edit"
//                                    >
//                                      <FontAwesomeIcon icon={faPencilAlt} />
//                                    </Button>
//                                    <Button 
//                                      variant="outline-danger" 
//                                      size="sm"
//                                      onClick={() => handleDeleteData(data.id)}
//                                      title="Delete"
//                                    >
//                                      <FontAwesomeIcon icon={faTrash} />
//                                    </Button>
//                                  </div>
//                                </td>
//                              </tr>
//                            ))}
//                          </tbody>
//                        </Table>
//                      </div>
//                    ) : (
//                      <div className="text-center py-5">
//                        <FontAwesomeIcon icon={faUsers} size="3x" className="text-muted mb-3" />
//                        <h6>No data added for {selectedService.service_name}</h6>
//                        <p className="text-muted">
//                          Start by adding people, items, or options for this service
//                        </p>
//                        <div className="d-flex gap-2 justify-content-center">
//                          <Button variant="info" onClick={() => setShowBulkUpload(true)}>
//                            <FontAwesomeIcon icon={faUpload} className="me-2" />
//                            Bulk Upload
//                          </Button>
//                          <Button variant="primary" onClick={() => openDataModal()}>
//                            <FontAwesomeIcon icon={faPlus} className="me-2" />
//                            Add First Item
//                          </Button>
//                        </div>
//                      </div>
//                    )}
//                  </>
//                ) : (
//                  <div className="text-center py-5">
//                    <p>Please select a service to manage its data.</p>
//                  </div>
//                )}
//              </Tab.Pane>
//            </Tab.Content>
//          </Card.Body>
//        </Card>
//      </Tab.Container>

//      {/* Bulk Upload Modal */}
//      <BulkUploadModal
//        show={showBulkUpload}
//        onHide={() => setShowBulkUpload(false)}
//        selectedService={selectedService}
//        onBulkUpload={handleBulkUpload}
//        isLoading={isLoading}
//      />

//      {/* Enhanced Data Modal with All Extended Fields */}
//      <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="xl">
//        <Modal.Header closeButton>
//          <Modal.Title>
//            <FontAwesomeIcon icon={faUsers} className="me-2" />
//            {editingData ? 'Edit' : 'Add'} {selectedService?.service_name} Data
//          </Modal.Title>
//        </Modal.Header>
//        <Form onSubmit={editingData ? handleUpdateData : handleCreateData}>
//          <Modal.Body>
//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Name *</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.name}
//                    onChange={(e) => setNewData({...newData, name: e.target.value})}
//                    placeholder="e.g., John Doe"
//                    required
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Contact Person</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.contact_person}
//                    onChange={(e) => setNewData({...newData, contact_person: e.target.value})}
//                    placeholder="e.g., John Doe"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Contact Number</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.contact_number}
//                    onChange={(e) => setNewData({...newData, contact_number: e.target.value})}
//                    placeholder="e.g., +91 9876543210"
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Email Address</Form.Label>
//                  <Form.Control
//                    type="email"
//                    value={newData.mail_id}
//                    onChange={(e) => setNewData({...newData, mail_id: e.target.value})}
//                    placeholder="e.g., john@example.com"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Current Job</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.current_job}
//                    onChange={(e) => setNewData({...newData, current_job: e.target.value})}
//                    placeholder="e.g., Photographer"
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Designation</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.designation}
//                    onChange={(e) => setNewData({...newData, designation: e.target.value})}
//                    placeholder="e.g., Senior Photographer"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Location/Address</Form.Label>
//                  <Form.Control
//                    as="textarea"
//                    rows={2}
//                    value={newData.location_address}
//                    onChange={(e) => setNewData({...newData, location_address: e.target.value})}
//                    placeholder="e.g., Mumbai, Maharashtra"
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Assistant</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.assistant}
//                    onChange={(e) => setNewData({...newData, assistant: e.target.value})}
//                    placeholder="e.g., Assistant Name"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Experience (Years)</Form.Label>
//                  <Form.Control
//                    type="number"
//                    value={newData.experience_years}
//                    onChange={(e) => setNewData({...newData, experience_years: e.target.value})}
//                    placeholder="e.g., 5"
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Price/Rate/Rent</Form.Label>
//                  <Form.Control
//                    type="number"
//                    value={newData.price_rate_rent}
//                    onChange={(e) => setNewData({...newData, price_rate_rent: e.target.value})}
//                    placeholder={`Default: ${selectedService?.rate_per_day}`}
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Studio Size</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.studio_size}
//                    onChange={(e) => setNewData({...newData, studio_size: e.target.value})}
//                    placeholder="e.g., Medium Studio"
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Shift Time</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.shift_time}
//                    onChange={(e) => setNewData({...newData, shift_time: e.target.value})}
//                    placeholder="e.g., 8 Hours"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Dismantle/Setting</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.dismantle_setting}
//                    onChange={(e) => setNewData({...newData, dismantle_setting: e.target.value})}
//                    placeholder="e.g., Fast Setup"
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Generator Specification</Form.Label>
//                  <Form.Control
//                    type="text"
//                    value={newData.generator_specification}
//                    onChange={(e) => setNewData({...newData, generator_specification: e.target.value})}
//                    placeholder="e.g., Generator 5KVA"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Row>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Profile/Work Links</Form.Label>
//                  <Form.Control
//                    type="url"
//                    value={newData.profile_worklinks}
//                    onChange={(e) => setNewData({...newData, profile_worklinks: e.target.value})}
//                    placeholder="https://..."
//                  />
//                </Form.Group>
//              </Col>
//              <Col md={6}>
//                <Form.Group className="mb-3">
//                  <Form.Label>Remarks/Rating</Form.Label>
//                  <Form.Control
//                    as="textarea"
//                    rows={2}
//                    value={newData.remarks_rating}
//                    onChange={(e) => setNewData({...newData, remarks_rating: e.target.value})}
//                    placeholder="e.g., Excellent work quality - 5 stars"
//                  />
//                </Form.Group>
//              </Col>
//            </Row>

//            <Form.Group className="mb-3">
//              <Form.Check
//                type="checkbox"
//                label="Set as default selection for proposals"
//                checked={newData.is_default}
//                onChange={(e) => setNewData({...newData, is_default: e.target.checked})}
//              />
//              <Form.Text className="text-muted">
//                This will be auto-selected when users add this service to proposals
//              </Form.Text>
//            </Form.Group>
//          </Modal.Body>
//          <Modal.Footer>
//            <Button variant="secondary" onClick={() => setShowDataModal(false)}>
//              Cancel
//            </Button>
//            <Button type="submit" variant="primary" disabled={isLoading}>
//              {isLoading ? <Spinner size="sm" className="me-2" /> : null}
//              {editingData ? 'Update' : 'Add'} Data
//            </Button>
//          </Modal.Footer>
//        </Form>
//      </Modal>

//      <style jsx>{`
//        .service-card {
//          transition: all 0.2s ease;
//          border: 2px solid transparent;
//        }
       
//        .service-card:hover {
//          border-color: #0d6efd;
//          box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
//          transform: translateY(-2px);
//        }
       
//        .table-success {
//          background-color: rgba(40, 167, 69, 0.1) !important;
//        }
//      `}</style>
//    </div>
//  );
// }

// export default ServiceDataManagement;
import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Form, 
  Button, 
  Alert, 
  Card, 
  Row, 
  Col, 
  Modal,
  Badge,
  Spinner,
  Nav,
  Tab,
  ProgressBar
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPencilAlt, 
  faTrash, 
  faCheck, 
  faTimes, 
  faInfoCircle,
  faUsers,
  faDownload,
  faEdit,
  faStar,
  faEnvelope,
  faPhone,
  faLink,
  faMapMarkerAlt,
  faAward,
  faChevronDown,
  faGear,
  faUpload,
  faFileExcel,
  faExclamationTriangle
} from '@fortawesome/free-solid-svg-icons';

// Import API functions
import { 
  fetchServices,
  createServiceData,
  updateServiceData,
  deleteServiceData,
  fetchServiceData,
  getServicesWithData
} from '../../services/api';

// Enhanced Bulk Upload Modal Component
const BulkUploadModal = ({ 
  show, 
  onHide, 
  selectedService, 
  onBulkUpload, 
  isLoading 
}) => {
  const [uploadFile, setUploadFile] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [columnMapping, setColumnMapping] = useState({});
  const [validationErrors, setValidationErrors] = useState([]);
  const [uploadStep, setUploadStep] = useState(1);
  const [processedData, setProcessedData] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  // Clean, extended columns only (no legacy fields)
  const availableColumns = [
    // Required field
    { key: 'name', label: 'Name', required: true },
    
    // Extended fields from Excel template
    { key: 'contact_number', label: 'Contact Number', required: false },
    { key: 'contact_person', label: 'Contact Person', required: false },
    { key: 'mail_id', label: 'Mail Id', required: false },
    { key: 'profile_worklinks', label: 'Profile/Worklinks', required: false },
    { key: 'current_job', label: 'Current Job', required: false },
    { key: 'designation', label: 'Designation', required: false },
    { key: 'assistant', label: 'Assistant', required: false },
    { key: 'location_address', label: 'Location/Address', required: false },
    { key: 'experience_years', label: 'Experience in Years', required: false },
    { key: 'price_rate_rent', label: 'Price/Rate/Rent', required: false },
    { key: 'studio_size', label: 'Studio Size', required: false },
    { key: 'shift_time', label: 'Shift Time', required: false },
    { key: 'dismantle_setting', label: 'Dismantle/Setting', required: false },
    { key: 'generator_specification', label: 'Generator Specification', required: false },
    { key: 'remarks_rating', label: 'Remarks/Rating', required: false },
    { key: 'is_default', label: 'Is Default', required: false }
  ];

  const resetModal = () => {
    setUploadFile(null);
    setExcelData([]);
    setColumnMapping({});
    setValidationErrors([]);
    setUploadStep(1);
    setProcessedData([]);
    setUploadProgress(0);
  };

  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const fileType = file.name.split('.').pop().toLowerCase();
    if (!['xlsx', 'xls', 'csv'].includes(fileType)) {
      alert('Please upload an Excel file (.xlsx, .xls) or CSV file');
      return;
    }

    setUploadFile(file);
    
    try {
      const XLSX = await import('xlsx');
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          const data = new Uint8Array(e.target.result);
          const workbook = XLSX.read(data, { type: 'array' });
          const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
          const jsonData = XLSX.utils.sheet_to_json(firstSheet, { header: 1 });
          
          if (jsonData.length < 2) {
            alert('Excel file must have at least a header row and one data row');
            return;
          }

          const headers = jsonData[0];
          const rows = jsonData.slice(1).filter(row => 
            row.some(cell => cell !== undefined && cell !== '' && cell !== null)
          );
          
          setExcelData({ headers, rows });
          setUploadStep(2);
          
          // Enhanced auto-mapping for all fields
          const autoMapping = {};
          headers.forEach((header, index) => {
            const headerLower = header.toString().toLowerCase().trim();
            const matchedColumn = availableColumns.find(col => {
              const colKey = col.key.toLowerCase();
              const colLabel = col.label.toLowerCase();
              
              // Exact matches first
              if (headerLower === colKey || headerLower === colLabel) return true;
              
              // Enhanced pattern matching
              const patterns = {
                'name': ['name', 'person name', 'full name'],
                'contact_number': ['contact number', 'phone', 'mobile', 'contact no', 'phone number'],
                'contact_person': ['contact person', 'person', 'contact name'],
                'mail_id': ['mail id', 'email', 'email id', 'mail', 'e-mail'],
                'profile_worklinks': ['profile', 'worklinks', 'portfolio', 'website', 'work links', 'profile/worklinks'],
                'current_job': ['current job', 'job', 'occupation', 'profession'],
                'designation': ['designation', 'title', 'position', 'role'],
                'assistant': ['assistant', 'helper', 'support'],
                'location_address': ['location', 'address', 'location address', 'place', 'location/address'],
                'experience_years': ['experience', 'exp', 'years', 'experience years', 'years of experience', 'experience in years'],
                'price_rate_rent': ['price', 'rate', 'rent', 'cost', 'pricing', 'fee', 'price/rate/rent'],
                'studio_size': ['studio size', 'size', 'studio'],
                'shift_time': ['shift time', 'time', 'hours', 'duration'],
                'dismantle_setting': ['dismantle', 'setting', 'setup', 'dismantle setting', 'dismantle/setting'],
                'generator_specification': ['generator', 'specification', 'gen spec', 'power', 'generator specification'],
                'remarks_rating': ['remarks', 'rating', 'notes', 'comments', 'review', 'remarks/rating'],
                'is_default': ['default', 'is default', 'primary']
              };
              
              const fieldPatterns = patterns[col.key] || [];
              return fieldPatterns.some(pattern => headerLower.includes(pattern));
            });
            
            if (matchedColumn && !Object.values(autoMapping).includes(index)) {
              autoMapping[matchedColumn.key] = index;
            }
          });
          
          setColumnMapping(autoMapping);
        } catch (error) {
          console.error('Error parsing Excel file:', error);
          alert('Error parsing Excel file. Please check the file format.');
        }
      };

      reader.readAsArrayBuffer(file);
    } catch (error) {
      console.error('Error loading XLSX library:', error);
      alert('Error loading Excel parser. Please try again.');
    }
  };

  const handleColumnMapping = (columnKey, excelColumnIndex) => {
    setColumnMapping(prev => ({
      ...prev,
      [columnKey]: excelColumnIndex === '' ? undefined : parseInt(excelColumnIndex)
    }));
  };

  const validateAndProcessData = () => {
    const errors = [];
    const processed = [];

    const requiredFields = availableColumns.filter(col => col.required);
    requiredFields.forEach(field => {
      if (columnMapping[field.key] === undefined) {
        errors.push(`Required field "${field.label}" must be mapped`);
      }
    });

    if (errors.length > 0) {
      setValidationErrors(errors);
      return;
    }

    excelData.rows.forEach((row, index) => {
      const rowData = {};

      Object.keys(columnMapping).forEach(key => {
        const columnIndex = columnMapping[key];
        if (columnIndex !== undefined) {
          let value = row[columnIndex];
          
          if (value !== undefined && value !== null && value !== '') {
            if (key === 'name') {
              value = value.toString().trim();
            } else if (['experience_years'].includes(key)) {
              value = parseInt(value) || null;
            } else if (['price_rate_rent'].includes(key)) {
              value = parseFloat(value) || null;
            } else if (key === 'is_default') {
              value = ['true', '1', 'yes', 'y', 'default'].includes(
                value.toString().toLowerCase().trim()
              );
            } else if (key === 'profile_worklinks') {
              value = value.toString().trim();
              if (value && !value.startsWith('http')) {
                value = 'https://' + value;
              }
            } else {
              value = value.toString().trim();
            }
          } else {
            value = key === 'is_default' ? false : null;
          }
          
          rowData[key] = value;
        }
      });

      if (!rowData.name) {
        return; // Skip empty rows
      }

      // ALWAYS set rowNumber to prevent undefined error
      processed.push({
        ...rowData,
        rowNumber: index + 2 // Excel row number (accounting for header)
      });
    });

    setValidationErrors(errors);
    setProcessedData(processed);
    setUploadStep(3);
  };

  // FIXED: handleBulkUpload function with proper rowNumber handling
  const handleBulkUpload = async () => {
    if (processedData.length === 0) return;

    try {
      setUploadProgress(0);
      
      const hasDefault = processedData.some(item => item.is_default);
      
      const results = [];
      for (let i = 0; i < processedData.length; i++) {
        const item = processedData[i];
        const currentRowNumber = item.rowNumber || (i + 2); // Store rowNumber before destructuring
        
        try {
          // Remove rowNumber from the data before sending to API
          const { rowNumber, ...dataToSend } = item;
          
          await onBulkUpload(dataToSend, hasDefault && i === 0);
          results.push({ 
            success: true, 
            item: dataToSend, 
            rowNumber: currentRowNumber 
          });
        } catch (error) {
          results.push({ 
            success: false, 
            item: item, 
            error: error.message, 
            rowNumber: currentRowNumber 
          });
        }
        
        setUploadProgress(((i + 1) / processedData.length) * 100);
      }
      
      const successCount = results.filter(r => r.success).length;
      const errorCount = results.filter(r => !r.success).length;
      
      if (errorCount === 0) {
        alert(`Successfully uploaded ${successCount} items!`);
        onHide();
        resetModal();
      } else {
        const errorMessages = results
          .filter(r => !r.success)
          .map(r => `Row ${r.rowNumber}: ${r.error}`)
          .join('\n');
        alert(`Upload completed with ${successCount} successful and ${errorCount} failed items:\n\n${errorMessages}`);
      }
    } catch (error) {
      console.error('Bulk upload error:', error);
      alert('Error during bulk upload: ' + error.message);
    }
  };

  const downloadTemplate = async () => {
    try {
      const XLSX = await import('xlsx');
      // Updated template with all the extended fields
      const templateData = [
        // Header row with all columns from your Excel template
        [
          'Name', 'Contact Number', 'Contact Person', 'Mail Id', 'Profile/Worklinks', 
          'Current Job', 'Designation', 'Assistant', 'Location/Address', 'Experience in Years',
          'Price/Rate/Rent', 'Studio Size', 'Shift Time', 'Dismantle/Setting', 
          'Generator Specification', 'Remarks/Rating', 'Is Default'
        ],
        // Sample data row 1
        [
          'John Doe', '+91 9876543210', 'John Doe', 'john@example.com', 'https://johndoe.com',
          'Photographer', 'Senior Photographer', 'Assistant Name', 'Mumbai, Maharashtra', '5',
          '5000', 'Medium Studio', '8 Hours', 'Fast Setup', 'Generator 5KVA', 'Excellent work quality - 5 stars', 'FALSE'
        ],
        // Sample data row 2
        [
          'Jane Smith', '+91 9876543211', 'Jane Smith', 'jane@example.com', 'https://janesmith.portfolio.com',
          'Videographer', 'Lead Videographer', 'Jane Assistant', 'Delhi, India', '8',
          '7500', 'Large Studio', '10 Hours', 'Quick Setup', 'Generator 10KVA', 'Top rated professional - 5 stars', 'TRUE'
        ],
        // Sample data row 3
        [
          'Mike Johnson', '+91 9876543212', 'Mike Johnson', 'mike@example.com', '',
          'Event Coordinator', 'Event Manager', 'Mike Helper', 'Bangalore, Karnataka', '3',
          '3500', 'Small Studio', '6 Hours', 'Standard Setup', 'Generator 3KVA', 'Good performance - 4 stars', 'FALSE'
        ]
      ];

      const ws = XLSX.utils.aoa_to_sheet(templateData);
      
      // Set column widths for better readability
      ws['!cols'] = [
        { wch: 15 }, // Name
        { wch: 18 }, // Contact Number
        { wch: 15 }, // Contact Person
        { wch: 25 }, // Mail Id
        { wch: 30 }, // Profile/Worklinks
        { wch: 20 }, // Current Job
        { wch: 20 }, // Designation
        { wch: 15 }, // Assistant
        { wch: 25 }, // Location/Address
        { wch: 12 }, // Experience in Years
        { wch: 15 }, // Price/Rate/Rent
        { wch: 15 }, // Studio Size
        { wch: 12 }, // Shift Time
        { wch: 18 }, // Dismantle/Setting
        { wch: 20 }, // Generator Specification
        { wch: 30 }, // Remarks/Rating
        { wch: 10 }  // Is Default
      ];

      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, 'Service Data Template');
      XLSX.writeFile(wb, `${selectedService?.service_name || 'service'}_data_template.xlsx`);
    } catch (error) {
      console.error('Error downloading template:', error);
      alert('Error downloading template. Please try again.');
    }
  };

  if (!show) return null;

  return (
    <Modal show={show} onHide={() => { onHide(); resetModal(); }} size="xl">
      <Modal.Header closeButton>
        <Modal.Title>
          <FontAwesomeIcon icon={faFileExcel} className="me-2" />
          Bulk Upload - {selectedService?.service_name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* Step Indicator */}
        <div className="mb-4">
          <div className="d-flex justify-content-between align-items-center mb-2">
            {[1, 2, 3, 4].map(step => (
              <div key={step} className="text-center">
                <div className={`rounded-circle d-inline-flex align-items-center justify-content-center ${
                  uploadStep >= step ? 'bg-primary text-white' : 'bg-light text-muted'
                }`} style={{ width: '30px', height: '30px' }}>
                  {step}
                </div>
                <div className="small mt-1">
                  {step === 1 && 'Upload'}
                  {step === 2 && 'Map'}
                  {step === 3 && 'Validate'}
                  {step === 4 && 'Confirm'}
                </div>
              </div>
            ))}
          </div>
          <ProgressBar now={(uploadStep - 1) * 33.33} className="mt-2" />
        </div>

        {/* Step 1: File Upload */}
        {uploadStep === 1 && (
          <div>
            <Card className="mb-3">
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faDownload} size="2x" className="text-primary mb-3" />
                <h6>Download Template</h6>
                <p className="text-muted">Start with our template to ensure proper formatting</p>
                <Button variant="outline-primary" onClick={downloadTemplate}>
                  <FontAwesomeIcon icon={faDownload} className="me-2" />
                  Download Template
                </Button>
              </Card.Body>
            </Card>

            <Card>
              <Card.Body className="text-center">
                <FontAwesomeIcon icon={faUpload} size="2x" className="text-success mb-3" />
                <h6>Upload Excel File</h6>
                <p className="text-muted">Select an Excel file (.xlsx, .xls) or CSV file</p>
                <Form.Control
                  type="file"
                  accept=".xlsx,.xls,.csv"
                  onChange={handleFileUpload}
                  className="mb-3"
                />
                {uploadFile && (
                  <Alert variant="info">
                    <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                    File selected: {uploadFile.name}
                  </Alert>
                )}
              </Card.Body>
            </Card>
          </div>
        )}

        {/* Step 2: Column Mapping */}
        {uploadStep === 2 && (
          <div>
            <Alert variant="info">
              <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
              Map your Excel columns to the service data fields. Required fields are marked with *.
            </Alert>

            <Row>
              <Col md={6}>
                <h6>Your Excel Columns</h6>
                <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {excelData.headers?.map((header, index) => (
                    <Badge key={index} bg="secondary" className="me-2 mb-2">
                      {index}: {header}
                    </Badge>
                  ))}
                </div>
              </Col>
              <Col md={6}>
                <h6>Sample Data (First Row)</h6>
                <div className="border rounded p-3 mb-3" style={{ maxHeight: '200px', overflowY: 'auto' }}>
                  {excelData.rows?.[0]?.map((cell, index) => (
                    <div key={index} className="small mb-1">
                      <strong>{index}:</strong> {cell}
                    </div>
                  ))}
                </div>
              </Col>
            </Row>

            <h6>Column Mapping</h6>
            <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
              <Table striped bordered size="sm">
                <thead>
                  <tr>
                    <th>Field</th>
                    <th>Required</th>
                    <th>Excel Column</th>
                    <th>Preview</th>
                  </tr>
                </thead>
                <tbody>
                  {availableColumns.map(column => (
                    <tr key={column.key}>
                      <td>
                        {column.label}
                        {column.required && <span className="text-danger">*</span>}
                      </td>
                      <td>
                        {column.required ? (
                          <Badge bg="danger">Required</Badge>
                        ) : (
                          <Badge bg="secondary">Optional</Badge>
                        )}
                      </td>
                      <td>
                        <Form.Select
                          size="sm"
                          value={columnMapping[column.key] || ''}
                          onChange={(e) => handleColumnMapping(column.key, e.target.value)}
                        >
                          <option value="">Select column...</option>
                          {excelData.headers?.map((header, index) => (
                            <option key={index} value={index}>
                              {index}: {header}
                            </option>
                          ))}
                        </Form.Select>
                      </td>
                      <td>
                        {columnMapping[column.key] !== undefined ? (
                          <small className="text-muted">
                            {excelData.rows?.[0]?.[columnMapping[column.key]] || 'Empty'}
                          </small>
                        ) : (
                          <small className="text-muted">Not mapped</small>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => setUploadStep(1)}>
                Back
              </Button>
              <Button variant="primary" onClick={validateAndProcessData}>
                Validate Data
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Enhanced Validation with More Columns */}
        {uploadStep === 3 && (
          <div>
            {validationErrors.length > 0 ? (
              <Alert variant="danger">
                <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
                <strong>Validation Errors:</strong>
                <ul className="mb-0 mt-2">
                  {validationErrors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </Alert>
            ) : (
              <Alert variant="success">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                Data validation successful! {processedData.length} records ready for upload.
              </Alert>
            )}

            <h6>Data Preview</h6>
            <div style={{ maxHeight: '400px', overflowX: 'auto', overflowY: 'auto' }}>
              <Table striped bordered size="sm" style={{ minWidth: '1200px' }}>
                <thead className="bg-light">
                  <tr>
                    <th>Row</th>
                    <th>Name</th>
                    <th>Contact Number</th>
                    <th>Email</th>
                    <th>Current Job</th>
                    <th>Designation</th>
                    <th>Location</th>
                    <th>Experience</th>
                    <th>Price/Rate</th>
                    <th>Studio Size</th>
                    <th>Generator</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  {processedData.map((item, index) => (
                    <tr key={index}>
                      <td>{item.rowNumber}</td>
                      <td className="fw-bold">{item.name}</td>
                      <td>{item.contact_number || '-'}</td>
                      <td>{item.mail_id || '-'}</td>
                      <td>{item.current_job || '-'}</td>
                      <td>{item.designation || '-'}</td>
                      <td>{item.location_address || '-'}</td>
                      <td>{item.experience_years ? `${item.experience_years} years` : '-'}</td>
                      <td>{item.price_rate_rent ? `₹${parseInt(item.price_rate_rent).toLocaleString()}` : '-'}</td>
                      <td>{item.studio_size || '-'}</td>
                      <td>{item.generator_specification || '-'}</td>
                      <td>
                        {item.is_default ? (
                          <Badge bg="success">✓</Badge>
                        ) : (
                          <span className="text-muted">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>

            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => setUploadStep(2)}>
                Back
              </Button>
              {validationErrors.length === 0 && (
                <Button variant="success" onClick={() => setUploadStep(4)}>
                  Continue to Upload
                </Button>
              )}
            </div>
          </div>
        )}

        {/* Step 4: Confirm Upload */}
        {uploadStep === 4 && (
          <div>
            <Alert variant="warning">
              <FontAwesomeIcon icon={faExclamationTriangle} className="me-2" />
              <strong>Confirm Upload</strong>
              <p className="mb-0 mt-2">
                You are about to upload {processedData.length} records to {selectedService?.service_name}. 
                This action cannot be undone.
              </p>
            </Alert>

            {uploadProgress > 0 && (
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>Upload Progress</span>
                  <span>{Math.round(uploadProgress)}%</span>
                </div>
                <ProgressBar now={uploadProgress} />
              </div>
            )}

            <div className="d-flex justify-content-between">
              <Button variant="secondary" onClick={() => setUploadStep(3)} disabled={isLoading}>
                Back
              </Button>
              <Button variant="success" onClick={handleBulkUpload} disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Spinner size="sm" className="me-2" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faUpload} className="me-2" />
                    Upload Data
                  </>
                )}
              </Button>
            </div>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

function ServiceDataManagement() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [serviceData, setServiceData] = useState([]);
  const [activeView, setActiveView] = useState('services');
  
  // Form states - Updated with only extended fields
  const [showDataModal, setShowDataModal] = useState(false);
  const [showBulkUpload, setShowBulkUpload] = useState(false);
  const [editingData, setEditingData] = useState(null);
  const [newData, setNewData] = useState({
    // Extended fields only
    name: '',
    contact_number: '',
    contact_person: '',
    mail_id: '',
    profile_worklinks: '',
    current_job: '',
    designation: '',
    assistant: '',
    location_address: '',
    experience_years: '',
    price_rate_rent: '',
    studio_size: '',
    shift_time: '',
    dismantle_setting: '',
    generator_specification: '',
    remarks_rating: '',
    is_default: false
  });
  
  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    loadServices();
  }, []);

  useEffect(() => {
    if (selectedService) {
      loadServiceData();
    }
  }, [selectedService]);

  // FIXED: API function for bulk upload
  const bulkCreateServiceData = async (serviceId, dataArray, unsetDefaults = false) => {
    try {
      const API_URL = import.meta.env?.VITE_API_URL ||
                     window.env?.REACT_APP_API_URL ||
                     'http://localhost:5000/api';
                     
      const response = await fetch(`${API_URL}/service-data/${serviceId}/bulk`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // No Authorization header needed since you removed auth
        },
        body: JSON.stringify({ 
          data: dataArray, 
          unsetDefaults 
        })
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
      }
      
      return response.json();
    } catch (error) {
      console.error('Bulk upload API error:', error);
      throw error;
    }
  };

  // FIXED: Handle bulk upload with proper error handling
  const handleBulkUpload = async (itemData, unsetDefaults = false) => {
    try {
      console.log('Sending bulk upload for service:', selectedService.id);
      console.log('Item data:', itemData);
      
      // Send as array even for single item
      const result = await bulkCreateServiceData(selectedService.id, [itemData], unsetDefaults);
      console.log('Bulk upload result:', result);
      
      // Refresh data after successful upload
      await loadServiceData();
      await loadServices();
      
      return result;
    } catch (error) {
      console.error('Bulk upload error:', error);
      throw error;
    }
  };

  // Load services and their data counts
  const loadServices = async () => {
   try {
     setIsLoading(true);
     
     const servicesResponse = await fetchServices();
     console.log('Loaded services:', servicesResponse.data);
     
     try {
       const servicesWithDataResponse = await getServicesWithData();
       console.log('Services with data:', servicesWithDataResponse.data);
       
       const servicesWithCounts = servicesResponse.data.map(service => {
         const serviceWithData = servicesWithDataResponse.data?.data?.find(s => s.id === service.id);
         return {
           ...service,
           data_count: serviceWithData?.data_count || 0,
           default_name: serviceWithData?.default_name || null
         };
       });
       
       setServices(servicesWithCounts);
     } catch (dataError) {
       console.log('Error loading service data counts, using basic services:', dataError);
       setServices(servicesResponse.data.map(service => ({
         ...service,
         data_count: 0
       })));
     }
   } catch (error) {
     console.error('Error loading services:', error);
     setError('Failed to load services');
   } finally {
     setIsLoading(false);
   }
 };

 const loadServiceData = async () => {
   if (!selectedService) return;
   try {
     setIsLoading(true);
     console.log('Loading data for service:', selectedService.id);
     
     const response = await fetchServiceData(selectedService.id);
     console.log('Raw API response:', response);
     console.log('Response data:', response.data);
     
     const serviceDataArray = response.data?.data || [];
     console.log('Extracted service data:', serviceDataArray);
     
     setServiceData(serviceDataArray);
   } catch (error) {
     console.error('Error loading service data:', error);
     setError('Failed to load service data');
     setServiceData([]);
   } finally {
     setIsLoading(false);
   }
 };

 const handleCreateData = async (e) => {
   e.preventDefault();
   try {
     setIsLoading(true);
     
     if (newData.is_default) {
       await Promise.all(
         serviceData.map(item => 
           updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
         )
       );
     }
     
     await createServiceData(selectedService.id, newData);
     
     // Reset form with extended fields
     setNewData({
       name: '', contact_number: '', contact_person: '', mail_id: '', profile_worklinks: '',
       current_job: '', designation: '', assistant: '', location_address: '', experience_years: '',
       price_rate_rent: '', studio_size: '', shift_time: '', dismantle_setting: '',
       generator_specification: '', remarks_rating: '', is_default: false
     });
     
     setShowDataModal(false);
     await loadServiceData();
     await loadServices();
     setSuccess('Data added successfully!');
     setTimeout(() => setSuccess(''), 3000);
   } catch (error) {
     console.error('Create error:', error);
     setError(error.response?.data?.error || 'Failed to create data');
   } finally {
     setIsLoading(false);
   }
 };

 const handleUpdateData = async (e) => {
   e.preventDefault();
   try {
     setIsLoading(true);
     
     if (newData.is_default) {
       await Promise.all(
         serviceData
           .filter(item => item.id !== editingData.id)
           .map(item => 
             updateServiceData(selectedService.id, item.id, { ...item, is_default: false })
           )
       );
     }
     
     await updateServiceData(selectedService.id, editingData.id, newData);
     setEditingData(null);
     setShowDataModal(false);
     await loadServiceData();
     await loadServices();
     setSuccess('Data updated successfully!');
     setTimeout(() => setSuccess(''), 3000);
   } catch (error) {
     console.error('Update error:', error);
     setError(error.response?.data?.error || 'Failed to update data');
   } finally {
     setIsLoading(false);
   }
 };

 const handleDeleteData = async (dataId) => {
   if (window.confirm('Are you sure you want to delete this data?')) {
     try {
       setIsLoading(true);
       await deleteServiceData(selectedService.id, dataId);
       await loadServiceData();
       await loadServices();
       setSuccess('Data deleted successfully!');
       setTimeout(() => setSuccess(''), 3000);
     } catch (error) {
       console.error('Delete error:', error);
       setError(error.response?.data?.error || 'Failed to delete data');
     } finally {
       setIsLoading(false);
     }
   }
 };

 const openDataModal = (data = null) => {
   if (data) {
     setEditingData(data);
     setNewData({
       // Extended fields with fallback to legacy fields
       name: data.name || '',
       contact_number: data.contact_number || data.contact || '',
       contact_person: data.contact_person || '',
       mail_id: data.mail_id || '',
       profile_worklinks: data.profile_worklinks || data.profile_link || '',
       current_job: data.current_job || '',
       designation: data.designation || '',
       assistant: data.assistant || '',
       location_address: data.location_address || data.location || '',
       experience_years: data.experience_years || data.experience || '',
       price_rate_rent: data.price_rate_rent || data.rate || '',
       studio_size: data.studio_size || '',
       shift_time: data.shift_time || '',
       dismantle_setting: data.dismantle_setting || '',
       generator_specification: data.generator_specification || '',
       remarks_rating: data.remarks_rating || data.specialization || '',
       is_default: data.is_default || false
     });
   } else {
     setEditingData(null);
     setNewData({
       name: '', contact_number: '', contact_person: '', mail_id: '', profile_worklinks: '',
       current_job: '', designation: '', assistant: '', location_address: '', experience_years: '',
       price_rate_rent: '', studio_size: '', shift_time: '', dismantle_setting: '',
       generator_specification: '', remarks_rating: '', is_default: false
     });
   }
   setShowDataModal(true);
 };

 const selectService = (service) => {
   setSelectedService(service);
   setActiveView('data');
 };

 return (
   <div className="service-data-management">
     <div className="d-flex justify-content-between align-items-center mb-4">
       <div>
         <h4 className="mb-1">Service Data Management</h4>
         <p className="text-muted mb-0">Add people and details for each service</p>
       </div>
       <Badge bg="info" className="py-2 px-3">
         <FontAwesomeIcon icon={faUsers} className="me-1" />
         {selectedService ? `${serviceData.length} items` : `${services.length} services`}
       </Badge>
     </div>

     {error && (
       <Alert variant="danger" dismissible onClose={() => setError('')}>
         <FontAwesomeIcon icon={faTimes} className="me-2" />
         {error}
       </Alert>
     )}

     {success && (
       <Alert variant="success" dismissible onClose={() => setSuccess('')}>
         <FontAwesomeIcon icon={faCheck} className="me-2" />
         {success}
       </Alert>
     )}

     <Tab.Container activeKey={activeView} onSelect={setActiveView}>
       <Card className="shadow-sm border-0">
         <Card.Header className="bg-light">
           <Nav variant="pills" className="flex-row">
             <Nav.Item>
               <Nav.Link eventKey="services" className="text-decoration-none">
                 <FontAwesomeIcon icon={faGear} className="me-2" />
                 Services
                 <Badge bg="secondary" className="ms-2">{services.length}</Badge>
               </Nav.Link>
             </Nav.Item>
             {selectedService && (
               <Nav.Item>
                 <Nav.Link eventKey="data" className="text-decoration-none">
                   <FontAwesomeIcon icon={faUsers} className="me-2" />
                   Data for {selectedService.service_name}
                   <Badge bg="secondary" className="ms-2">{serviceData.length}</Badge>
                 </Nav.Link>
               </Nav.Item>
             )}
           </Nav>
         </Card.Header>

         <Card.Body>
           <Tab.Content>
             {/* Services Selection Tab */}
             <Tab.Pane eventKey="services">
               <div className="mb-3">
                 <h5>Select a service to manage its data:</h5>
                 <p className="text-muted">Choose which service you want to add people/items for</p>
               </div>

               {isLoading ? (
                 <div className="text-center py-4">
                   <Spinner animation="border" variant="primary" />
                   <p className="mt-2">Loading services...</p>
                 </div>
               ) : (
                 <div className="table-responsive">
                   <Table hover className="align-middle">
                     <thead className="bg-light">
                       <tr>
                         <th>Service Name</th>
                         <th>Items</th>
                         <th>Category</th>
                         <th>Default Rate</th>
                         <th>Default Item</th>
                         <th>Action</th>
                       </tr>
                     </thead>
                     <tbody>
                       {services.map(service => (
                         <tr key={service.id} className="service-row">
                           <td>
                             <div className="d-flex align-items-center">
                               <FontAwesomeIcon icon={faGear} className="text-muted me-2" />
                               <strong>{service.service_name}</strong>
                             </div>
                           </td>
                           <td>
                             <Badge bg={service.data_count > 0 ? "success" : "secondary"}>
                               <FontAwesomeIcon icon={faUsers} className="me-1" />
                               {service.data_count || 0} items
                             </Badge>
                           </td>
                           <td>
                             <span className="text-muted text-capitalize">{service.category}</span>
                           </td>
                           <td>
                             <Badge bg="info" className="fw-normal">
                               ₹{service.rate_per_day?.toLocaleString()}/day
                             </Badge>
                           </td>
                           <td>
                             {service.default_name ? (
                               <span className="text-success">
                                 <FontAwesomeIcon icon={faCheck} className="me-1" />
                                 {service.default_name}
                               </span>
                             ) : (
                               <span className="text-muted">-</span>
                             )}
                           </td>
                           <td>
                             <Button 
                               variant="primary" 
                               size="sm"
                               onClick={() => selectService(service)}
                               className="d-flex align-items-center"
                             >
                               <FontAwesomeIcon icon={faUsers} className="me-2" />
                               Manage Data
                             </Button>
                           </td>
                         </tr>
                       ))}
                     </tbody>
                   </Table>
                 </div>
               )}
             </Tab.Pane>

             {/* Enhanced Service Data Tab */}
             <Tab.Pane eventKey="data">
               {selectedService ? (
                 <>
                   <div className="d-flex justify-content-between align-items-center mb-3">
                     <div>
                       <h5 className="mb-0">Data for {selectedService.service_name}</h5>
                       <p className="text-muted mb-0">Add people, items, or options for this service</p>
                     </div>
                     <div className="d-flex gap-2">
                       <Button 
                         variant="info" 
                         onClick={() => setShowBulkUpload(true)}
                         className="me-2"
                       >
                         <FontAwesomeIcon icon={faUpload} className="me-2" />
                         Bulk Upload
                       </Button>
                       <Button variant="success" onClick={() => openDataModal()}>
                         <FontAwesomeIcon icon={faPlus} className="me-2" />
                         Add New
                       </Button>
                     </div>
                   </div>

                   {serviceData.length > 0 ? (
                     <div className="table-responsive">
                       <Table hover style={{ minWidth: '1200px' }}>
                         <thead className="bg-light">
                           <tr>
                             <th>Name & Details</th>
                             <th>Contact Info</th>
                             <th>Job & Location</th>
                             <th>Experience & Rate</th>
                             <th>Technical Details</th>
                             <th>Status</th>
                             <th>Actions</th>
                           </tr>
                         </thead>
                         <tbody>
                           {serviceData.map(data => (
                             <tr key={data.id} className={data.is_default ? 'table-success' : ''}>
                               <td>
                                 <div>
                                   <strong className="d-block">{data.name}</strong>
                                   {(data.designation || data.current_job) && (
                                     <small className="text-muted d-block">
                                       {data.designation || data.current_job}
                                     </small>
                                   )}
                                   {(data.profile_worklinks || data.profile_link) && (
                                     <a 
                                       href={data.profile_worklinks || data.profile_link} 
                                       target="_blank" 
                                       rel="noopener noreferrer"
                                       className="small text-primary"
                                     >
                                       <FontAwesomeIcon icon={faLink} className="me-1" />
                                       Portfolio
                                     </a>
                                   )}
                                 </div>
                               </td>
                               <td>
                                 <div className="small">
                                   {(data.contact_number || data.contact) && (
                                     <div className="mb-1">
                                       <FontAwesomeIcon icon={faPhone} className="me-1 text-muted" />
                                       {data.contact_number || data.contact}
                                     </div>
                                   )}
                                   {data.mail_id && (
                                     <div>
                                       <FontAwesomeIcon icon={faEnvelope} className="me-1 text-muted" />
                                       {data.mail_id}
                                     </div>
                                   )}
                                 </div>
                               </td>
                               <td>
                                 <div className="small">
                                   {(data.current_job || data.specialization) && (
                                     <div className="mb-1 fw-bold">
                                       {data.current_job || data.specialization}
                                     </div>
                                   )}
                                   {(data.location_address || data.location) && (
                                     <div>
                                       <FontAwesomeIcon icon={faMapMarkerAlt} className="me-1 text-muted" />
                                       {data.location_address || data.location}
                                     </div>
                                   )}
                                 </div>
                               </td>
                               <td>
                                 <div className="small">
                                   {(data.experience_years || data.experience) && (
                                     <div className="mb-1">
                                       <strong>{data.experience_years || data.experience}</strong> years
                                     </div>
                                   )}
                                   <Badge bg="success">
                                     ₹{(data.price_rate_rent || data.rate) ? 
                                       parseInt(data.price_rate_rent || data.rate).toLocaleString() : 
                                       selectedService.rate_per_day?.toLocaleString()}
                                   </Badge>
                                 </div>
                               </td>
                               <td>
                                 <div className="small">
                                   {data.studio_size && (
                                     <div className="mb-1">
                                       <strong>Studio:</strong> {data.studio_size}
                                     </div>
                                   )}
                                   {data.generator_specification && (
                                     <div className="mb-1">
                                       <strong>Generator:</strong> {data.generator_specification}
                                     </div>
                                   )}
                                   {data.shift_time && (
                                     <div>
                                       <strong>Hours:</strong> {data.shift_time}
                                     </div>
                                   )}
                                 </div>
                               </td>
                               <td>
                                 <div>
                                   {data.is_default && (
                                     <Badge bg="primary" className="mb-1">
                                       <FontAwesomeIcon icon={faAward} className="me-1" />
                                       Default
                                     </Badge>
                                   )}
                                   {(data.remarks_rating || data.rating) && (
                                     <div className="small text-muted">
                                       {data.remarks_rating || (data.rating && `${data.rating} stars`)}
                                     </div>
                                   )}
                                 </div>
                               </td>
                               <td>
                                 <div className="d-flex gap-2">
                                   <Button 
                                     variant="outline-primary" 
                                     size="sm"
                                     onClick={() => openDataModal(data)}
                                     title="Edit"
                                   >
                                     <FontAwesomeIcon icon={faPencilAlt} />
                                   </Button>
                                   <Button 
                                     variant="outline-danger" 
                                     size="sm"
                                     onClick={() => handleDeleteData(data.id)}
                                     title="Delete"
                                   >
                                     <FontAwesomeIcon icon={faTrash} />
                                   </Button>
                                 </div>
                               </td>
                             </tr>
                           ))}
                         </tbody>
                       </Table>
                     </div>
                   ) : (
                     <div className="text-center py-5">
                       <FontAwesomeIcon icon={faUsers} size="3x" className="text-muted mb-3" />
                       <h6>No data added for {selectedService.service_name}</h6>
                       <p className="text-muted">
                         Start by adding people, items, or options for this service
                       </p>
                       <div className="d-flex gap-2 justify-content-center">
                         <Button variant="info" onClick={() => setShowBulkUpload(true)}>
                           <FontAwesomeIcon icon={faUpload} className="me-2" />
                           Bulk Upload
                         </Button>
                         <Button variant="primary" onClick={() => openDataModal()}>
                           <FontAwesomeIcon icon={faPlus} className="me-2" />
                           Add First Item
                         </Button>
                       </div>
                     </div>
                   )}
                 </>
               ) : (
                 <div className="text-center py-5">
                   <p>Please select a service to manage its data.</p>
                 </div>
               )}
             </Tab.Pane>
           </Tab.Content>
         </Card.Body>
       </Card>
     </Tab.Container>

     {/* Bulk Upload Modal */}
     <BulkUploadModal
       show={showBulkUpload}
       onHide={() => setShowBulkUpload(false)}
       selectedService={selectedService}
       onBulkUpload={handleBulkUpload}
       isLoading={isLoading}
     />

     {/* Enhanced Data Modal with All Extended Fields */}
     <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="xl">
       <Modal.Header closeButton>
         <Modal.Title>
           <FontAwesomeIcon icon={faUsers} className="me-2" />
           {editingData ? 'Edit' : 'Add'} {selectedService?.service_name} Data
         </Modal.Title>
       </Modal.Header>
       <Form onSubmit={editingData ? handleUpdateData : handleCreateData}>
         <Modal.Body>
           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Name *</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.name}
                   onChange={(e) => setNewData({...newData, name: e.target.value})}
                   placeholder="e.g., John Doe"
                   required
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Contact Person</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.contact_person}
                   onChange={(e) => setNewData({...newData, contact_person: e.target.value})}
                   placeholder="e.g., John Doe"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Contact Number</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.contact_number}
                   onChange={(e) => setNewData({...newData, contact_number: e.target.value})}
                   placeholder="e.g., +91 9876543210"
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Email Address</Form.Label>
                 <Form.Control
                   type="email"
                   value={newData.mail_id}
                   onChange={(e) => setNewData({...newData, mail_id: e.target.value})}
                   placeholder="e.g., john@example.com"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Current Job</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.current_job}
                   onChange={(e) => setNewData({...newData, current_job: e.target.value})}
                   placeholder="e.g., Photographer"
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Designation</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.designation}
                   onChange={(e) => setNewData({...newData, designation: e.target.value})}
                   placeholder="e.g., Senior Photographer"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Location/Address</Form.Label>
                 <Form.Control
                   as="textarea"
                   rows={2}
                   value={newData.location_address}
                   onChange={(e) => setNewData({...newData, location_address: e.target.value})}
                   placeholder="e.g., Mumbai, Maharashtra"
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Assistant</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.assistant}
                   onChange={(e) => setNewData({...newData, assistant: e.target.value})}
                   placeholder="e.g., Assistant Name"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Experience (Years)</Form.Label>
                 <Form.Control
                   type="number"
                   value={newData.experience_years}
                   onChange={(e) => setNewData({...newData, experience_years: e.target.value})}
                   placeholder="e.g., 5"
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Price/Rate/Rent</Form.Label>
                 <Form.Control
                   type="number"
                   value={newData.price_rate_rent}
                   onChange={(e) => setNewData({...newData, price_rate_rent: e.target.value})}
                   placeholder={`Default: ${selectedService?.rate_per_day}`}
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Studio Size</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.studio_size}
                   onChange={(e) => setNewData({...newData, studio_size: e.target.value})}
                   placeholder="e.g., Medium Studio"
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Shift Time</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.shift_time}
                   onChange={(e) => setNewData({...newData, shift_time: e.target.value})}
                   placeholder="e.g., 8 Hours"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Dismantle/Setting</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.dismantle_setting}
                   onChange={(e) => setNewData({...newData, dismantle_setting: e.target.value})}
                   placeholder="e.g., Fast Setup"
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Generator Specification</Form.Label>
                 <Form.Control
                   type="text"
                   value={newData.generator_specification}
                   onChange={(e) => setNewData({...newData, generator_specification: e.target.value})}
                   placeholder="e.g., Generator 5KVA"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Row>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Profile/Work Links</Form.Label>
                 <Form.Control
                   type="url"
                   value={newData.profile_worklinks}
                   onChange={(e) => setNewData({...newData, profile_worklinks: e.target.value})}
                   placeholder="https://..."
                 />
               </Form.Group>
             </Col>
             <Col md={6}>
               <Form.Group className="mb-3">
                 <Form.Label>Remarks/Rating</Form.Label>
                 <Form.Control
                   as="textarea"
                   rows={2}
                   value={newData.remarks_rating}
                   onChange={(e) => setNewData({...newData, remarks_rating: e.target.value})}
                   placeholder="e.g., Excellent work quality - 5 stars"
                 />
               </Form.Group>
             </Col>
           </Row>

           <Form.Group className="mb-3">
             <Form.Check
               type="checkbox"
               label="Set as default selection for proposals"
               checked={newData.is_default}
               onChange={(e) => setNewData({...newData, is_default: e.target.checked})}
             />
             <Form.Text className="text-muted">
               This will be auto-selected when users add this service to proposals
             </Form.Text>
           </Form.Group>
         </Modal.Body>
         <Modal.Footer>
           <Button variant="secondary" onClick={() => setShowDataModal(false)}>
             Cancel
           </Button>
           <Button type="submit" variant="primary" disabled={isLoading}>
             {isLoading ? <Spinner size="sm" className="me-2" /> : null}
             {editingData ? 'Update' : 'Add'} Data
           </Button>
         </Modal.Footer>
       </Form>
     </Modal>

     <style jsx>{`
       .service-card {
         transition: all 0.2s ease;
         border: 2px solid transparent;
       }
       
       .service-card:hover {
         border-color: #0d6efd;
         box-shadow: 0 4px 12px rgba(13, 110, 253, 0.15);
         transform: translateY(-2px);
       }
       
       .table-success {
         background-color: rgba(40, 167, 69, 0.1) !important;
       }
     `}</style>
   </div>
 );
}

export default ServiceDataManagement;