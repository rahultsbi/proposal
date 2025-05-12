// // // // import React, { useState, useEffect } from 'react';
// // // // import { Table, Form, Button, Alert } from 'react-bootstrap';
// // // // import { 
// // // //   fetchServices, 
// // // //   createService, 
// // // //   updateService, 
// // // //   deleteService 
// // // // } from '../../../services/api';

// // // // function Services() {
// // // //   const [services, setServices] = useState([]);
// // // //   const [newService, setNewService] = useState({
// // // //     service_name: '',
// // // //     rate_per_day: ''
// // // //   });
// // // //   const [editingId, setEditingId] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);

// // // //   useEffect(() => {
// // // //     const loadServices = async () => {
// // // //       try {
// // // //         const response = await fetchServices();
// // // //         setServices(response.data);
// // // //       } catch (error) {
// // // //         console.error('Error loading services:', error);
// // // //       }
// // // //     };
// // // //     loadServices();
// // // //   }, []);

// // // //   const handleCreate = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       await createService(newService);
// // // //       const response = await fetchServices();
// // // //       setServices(response.data);
// // // //       setNewService({ service_name: '', rate_per_day: '' });
// // // //       setError('');
// // // //     } catch (error) {
// // // //       setError(error.response?.data?.error || 'Failed to create service');
// // // //     }
// // // //   };

// // // //   const handleUpdate = async (id, updatedData) => {
// // // //     try {
// // // //       await updateService(id, updatedData);
// // // //       const response = await fetchServices();
// // // //       setServices(response.data);
// // // //       setEditingId(null);
// // // //       setShowUpdateNotice(false);
// // // //       setError('');
// // // //     } catch (error) {
// // // //       setError(error.response?.data?.error || 'Failed to update service');
// // // //     }
// // // //   };

// // // //   const handleDelete = async (id) => {
// // // //     if (window.confirm('Delete this service?')) {
// // // //       try {
// // // //         await deleteService(id);
// // // //         const response = await fetchServices();
// // // //         setServices(response.data);
// // // //         setError('');
// // // //       } catch (error) {
// // // //         setError(error.response?.data?.error || 'Failed to delete service');
// // // //       }
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div>
// // // //       <h4 className="mt-4">Manage Services</h4>

// // // //       {error && (
// // // //         <Alert variant="warning" dismissible onClose={() => setError('')}>
// // // //           {error}
// // // //         </Alert>
// // // //       )}

// // // //       {showUpdateNotice && (
// // // //         <Alert variant="info" className="text-center">
// // // //           You've made changes. Click <strong>Update</strong> to save.
// // // //         </Alert>
// // // //       )}

// // // //       <Form onSubmit={handleCreate} className="form-inline mb-3">
// // // //         <Form.Control
// // // //           type="text"
// // // //           name="service_name"
// // // //           value={newService.service_name}
// // // //           onChange={(e) => setNewService({...newService, service_name: e.target.value})}
// // // //           placeholder="Service Name"
// // // //           className="mr-2"
// // // //           required
// // // //         />
// // // //         <Form.Control
// // // //           type="number"
// // // //           name="rate_per_day"
// // // //           value={newService.rate_per_day}
// // // //           onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// // // //           placeholder="Rate per Day"
// // // //           className="mr-2"
// // // //           required
// // // //         />
// // // //         <Button type="submit" variant="success">
// // // //           Add Service
// // // //         </Button>
// // // //       </Form>

// // // //       <Table bordered className="table-sm">
// // // //         <thead className="thead-light">
// // // //           <tr>
// // // //             <th>Service</th>
// // // //             <th>Rate per Day</th>
// // // //             <th style={{ width: '150px' }}>Actions</th>
// // // //           </tr>
// // // //         </thead>
// // // //         <tbody>
// // // //           {services.map(service => (
// // // //             <tr key={service.id}>
// // // //               <td>
// // // //                 <Form.Control
// // // //                   type="text"
// // // //                   value={editingId === service.id ? service.service_name : service.service_name}
// // // //                   onChange={(e) => {
// // // //                     if (editingId === service.id) {
// // // //                       setServices(services.map(s => 
// // // //                         s.id === service.id ? {...s, service_name: e.target.value} : s
// // // //                       );
// // // //                       setShowUpdateNotice(true);
// // // //                     }
// // // //                   }}
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 <Form.Control
// // // //                   type="number"
// // // //                   value={editingId === service.id ? service.rate_per_day : service.rate_per_day}
// // // //                   onChange={(e) => {
// // // //                     if (editingId === service.id) {
// // // //                       setServices(services.map(s => 
// // // //                         s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// // // //                       ));
// // // //                       setShowUpdateNotice(true);
// // // //                     }
// // // //                   }}
// // // //                 />
// // // //               </td>
// // // //               <td>
// // // //                 {editingId === service.id ? (
// // // //                   <>
// // // //                     <Button 
// // // //                       variant="primary" 
// // // //                       size="sm" 
// // // //                       className="mr-1"
// // // //                       onClick={() => handleUpdate(service.id, {
// // // //                         service_name: service.service_name,
// // // //                         rate_per_day: service.rate_per_day
// // // //                       })}
// // // //                     >
// // // //                       Update
// // // //                     </Button>
// // // //                     <Button 
// // // //                       variant="secondary" 
// // // //                       size="sm"
// // // //                       onClick={() => {
// // // //                         setEditingId(null);
// // // //                         setShowUpdateNotice(false);
// // // //                         // Reload original data
// // // //                         fetchServices().then(response => setServices(response.data));
// // // //                       }}
// // // //                     >
// // // //                       Cancel
// // // //                     </Button>
// // // //                   </>
// // // //                 ) : (
// // // //                   <>
// // // //                     <Button 
// // // //                       variant="primary" 
// // // //                       size="sm" 
// // // //                       className="mr-1"
// // // //                       onClick={() => setEditingId(service.id)}
// // // //                     >
// // // //                       Edit
// // // //                     </Button>
// // // //                     <Button 
// // // //                       variant="danger" 
// // // //                       size="sm"
// // // //                       onClick={() => handleDelete(service.id)}
// // // //                     >
// // // //                       Delete
// // // //                     </Button>
// // // //                   </>
// // // //                 )}
// // // //               </td>
// // // //             </tr>
// // // //           ))}
// // // //         </tbody>
// // // //       </Table>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Services;


// // // import React, { useState, useEffect } from 'react';
// // // import { Table, Form, Button, Alert } from 'react-bootstrap';
// // // import { 
// // //   fetchServices, 
// // //   createService, 
// // //   updateService, 
// // //   deleteService 
// // // } from '../../services/api';

// // // function Services() {
// // //   const [services, setServices] = useState([]);
// // //   const [newService, setNewService] = useState({
// // //     service_name: '',
// // //     rate_per_day: ''
// // //   });
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);

// // //   useEffect(() => {
// // //     const loadServices = async () => {
// // //       try {
// // //         const response = await fetchServices();
// // //         setServices(response.data);
// // //       } catch (error) {
// // //         console.error('Error loading services:', error);
// // //       }
// // //     };
// // //     loadServices();
// // //   }, []);

// // //   const handleCreate = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       await createService(newService);
// // //       const response = await fetchServices();
// // //       setServices(response.data);
// // //       setNewService({ service_name: '', rate_per_day: '' });
// // //       setError('');
// // //     } catch (error) {
// // //       setError(error.response?.data?.error || 'Failed to create service');
// // //     }
// // //   };

// // //   const handleUpdate = async (id, updatedData) => {
// // //     try {
// // //       await updateService(id, updatedData);
// // //       const response = await fetchServices();
// // //       setServices(response.data);
// // //       setEditingId(null);
// // //       setShowUpdateNotice(false);
// // //       setError('');
// // //     } catch (error) {
// // //       setError(error.response?.data?.error || 'Failed to update service');
// // //     }
// // //   };

// // //   const handleDelete = async (id) => {
// // //     if (window.confirm('Delete this service?')) {
// // //       try {
// // //         await deleteService(id);
// // //         const response = await fetchServices();
// // //         setServices(response.data);
// // //         setError('');
// // //       } catch (error) {
// // //         setError(error.response?.data?.error || 'Failed to delete service');
// // //       }
// // //     }
// // //   };

// // //   return (
// // //     <div>
// // //       <h4 className="mt-4">Manage Services</h4>

// // //       {error && (
// // //         <Alert variant="warning" dismissible onClose={() => setError('')}>
// // //           {error}
// // //         </Alert>
// // //       )}

// // //       {showUpdateNotice && (
// // //         <Alert variant="info" className="text-center">
// // //           You've made changes. Click <strong>Update</strong> to save.
// // //         </Alert>
// // //       )}

// // //       <Form onSubmit={handleCreate} className="form-inline mb-3">
// // //         <Form.Control
// // //           type="text"
// // //           name="service_name"
// // //           value={newService.service_name}
// // //           onChange={(e) => setNewService({...newService, service_name: e.target.value})}
// // //           placeholder="Service Name"
// // //           className="mr-2"
// // //           required
// // //         />
// // //         <Form.Control
// // //           type="number"
// // //           name="rate_per_day"
// // //           value={newService.rate_per_day}
// // //           onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// // //           placeholder="Rate per Day"
// // //           className="mr-2"
// // //           required
// // //         />
// // //         <Button type="submit" variant="success">
// // //           Add Service
// // //         </Button>
// // //       </Form>

// // //       <Table bordered className="table-sm">
// // //         <thead className="thead-light">
// // //           <tr>
// // //             <th>Service</th>
// // //             <th>Rate per Day</th>
// // //             <th style={{ width: '150px' }}>Actions</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {services.map(service => (
// // //             <tr key={service.id}>
// // //               <td>
// // //                 <Form.Control
// // //                   type="text"
// // //                   value={editingId === service.id ? service.service_name : service.service_name}
// // //                   onChange={(e) => {
// // //                     if (editingId === service.id) {
// // //                       setServices(services.map(s => 
// // //                         s.id === service.id ? {...s, service_name: e.target.value} : s
// // //                       ));
// // //                       setShowUpdateNotice(true);
// // //                     }
// // //                   }}
// // //                   disabled={editingId !== service.id}
// // //                 />
// // //               </td>
// // //               <td>
// // //                 <Form.Control
// // //                   type="number"
// // //                   value={editingId === service.id ? service.rate_per_day : service.rate_per_day}
// // //                   onChange={(e) => {
// // //                     if (editingId === service.id) {
// // //                       setServices(services.map(s => 
// // //                         s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// // //                       ));
// // //                       setShowUpdateNotice(true);
// // //                     }
// // //                   }}
// // //                   disabled={editingId !== service.id}
// // //                 />
// // //               </td>
// // //               <td>
// // //                 {editingId === service.id ? (
// // //                   <>
// // //                     <Button 
// // //                       variant="primary" 
// // //                       size="sm" 
// // //                       className="mr-1"
// // //                       onClick={() => handleUpdate(service.id, {
// // //                         service_name: service.service_name,
// // //                         rate_per_day: service.rate_per_day
// // //                       })}
// // //                     >
// // //                       Update
// // //                     </Button>
// // //                     <Button 
// // //                       variant="secondary" 
// // //                       size="sm"
// // //                       onClick={() => {
// // //                         setEditingId(null);
// // //                         setShowUpdateNotice(false);
// // //                         // Reload original data
// // //                         fetchServices().then(response => setServices(response.data));
// // //                       }}
// // //                     >
// // //                       Cancel
// // //                     </Button>
// // //                   </>
// // //                 ) : (
// // //                   <>
// // //                     <Button 
// // //                       variant="primary" 
// // //                       size="sm" 
// // //                       className="mr-1"
// // //                       onClick={() => setEditingId(service.id)}
// // //                     >
// // //                       Edit
// // //                     </Button>
// // //                     <Button 
// // //                       variant="danger" 
// // //                       size="sm"
// // //                       onClick={() => handleDelete(service.id)}
// // //                     >
// // //                       Delete
// // //                     </Button>
// // //                   </>
// // //                 )}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </Table>
// // //     </div>
// // //   );
// // // }

// // // export default Services;

// // import React, { useState, useEffect } from 'react';
// // import { 
// //   Table, 
// //   Form, 
// //   Button, 
// //   Alert, 
// //   Card, 
// //   Row, 
// //   Col, 
// //   InputGroup, 
// //   Badge,
// //   Spinner,
// //   OverlayTrigger,
// //   Tooltip
// // } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { 
// //   faPlus, 
// //   faPencilAlt, 
// //   faTrash, 
// //   faCheck, 
// //   faTimes, 
// //   faInfoCircle,
// //   faCoins
// // } from '@fortawesome/free-solid-svg-icons';
// // import { 
// //   fetchServices, 
// //   createService, 
// //   updateService, 
// //   deleteService 
// // } from '../../services/api';

// // function Services() {
// //   const [services, setServices] = useState([]);
// //   const [newService, setNewService] = useState({
// //     service_name: '',
// //     rate_per_day: ''
// //   });
// //   const [editingId, setEditingId] = useState(null);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState('');

// //   useEffect(() => {
// //     loadServices();
// //   }, []);

// //   const loadServices = async () => {
// //     try {
// //       setIsLoading(true);
// //       const response = await fetchServices();
// //       setServices(response.data);
// //       setIsLoading(false);
// //     } catch (error) {
// //       console.error('Error loading services:', error);
// //       setError('Failed to load services. Please try again.');
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleCreate = async (e) => {
// //     e.preventDefault();
// //     try {
// //       if (!newService.service_name.trim()) {
// //         setError('Service name cannot be empty');
// //         return;
// //       }
      
// //       if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
// //         setError('Rate per day must be a positive number');
// //         return;
// //       }
      
// //       setIsLoading(true);
// //       await createService(newService);
// //       await loadServices();
      
// //       setNewService({ service_name: '', rate_per_day: '' });
// //       setError('');
// //       setSuccess('Service created successfully!');
      
// //       // Auto-hide success message after 3 seconds
// //       setTimeout(() => setSuccess(''), 3000);
// //     } catch (error) {
// //       setError(error.response?.data?.error || 'Failed to create service');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleUpdate = async (id, updatedData) => {
// //     try {
// //       if (!updatedData.service_name.trim()) {
// //         setError('Service name cannot be empty');
// //         return;
// //       }
      
// //       if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
// //         setError('Rate per day must be a positive number');
// //         return;
// //       }
      
// //       setIsLoading(true);
// //       await updateService(id, updatedData);
// //       await loadServices();
      
// //       setEditingId(null);
// //       setShowUpdateNotice(false);
// //       setError('');
// //       setSuccess('Service updated successfully!');
      
// //       // Auto-hide success message after 3 seconds
// //       setTimeout(() => setSuccess(''), 3000);
// //     } catch (error) {
// //       setError(error.response?.data?.error || 'Failed to update service');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   const handleDelete = async (id, serviceName) => {
// //     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
// //       try {
// //         setIsLoading(true);
// //         await deleteService(id);
// //         await loadServices();
        
// //         setError('');
// //         setSuccess('Service deleted successfully!');
        
// //         // Auto-hide success message after 3 seconds
// //         setTimeout(() => setSuccess(''), 3000);
// //       } catch (error) {
// //         setError(error.response?.data?.error || 'Failed to delete service');
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }
// //   };

// //   // Filter services based on search term
// //   const filteredServices = services.filter(service => 
// //     service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
// //   );

// //   return (
// //     <div className="services-component">
// //       <div className="d-flex justify-content-between align-items-center mb-4">
// //         <div>
// //           <h4 className="mb-1">Service Management</h4>
// //           <p className="text-muted mb-0">Manage studio services and their daily rates</p>
// //         </div>
// //         <Badge bg="info" className="py-2 px-3">
// //           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// //           {services.length} Service{services.length !== 1 ? 's' : ''}
// //         </Badge>
// //       </div>

// //       {error && (
// //         <Alert 
// //           variant="danger" 
// //           dismissible 
// //           onClose={() => setError('')}
// //           className="border-0 shadow-sm"
// //         >
// //           <FontAwesomeIcon icon={faTimes} className="me-2" />
// //           {error}
// //         </Alert>
// //       )}

// //       {success && (
// //         <Alert 
// //           variant="success" 
// //           dismissible 
// //           onClose={() => setSuccess('')}
// //           className="border-0 shadow-sm"
// //         >
// //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// //           {success}
// //         </Alert>
// //       )}

// //       {showUpdateNotice && (
// //         <Alert variant="info" className="text-center border-0 shadow-sm">
// //           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// //           You've made changes. Click <strong>Update</strong> to save.
// //         </Alert>
// //       )}

// //       <Card className="shadow-sm border-0 mb-4">
// //         <Card.Body>
// //           <Card.Title className="mb-3">Add New Service</Card.Title>
// //           <Form onSubmit={handleCreate}>
// //             <Row>
// //               <Col md={5}>
// //                 <Form.Group className="mb-3 mb-md-0">
// //                   <Form.Label>Service Name</Form.Label>
// //                   <Form.Control
// //                     type="text"
// //                     name="service_name"
// //                     value={newService.service_name}
// //                     onChange={(e) => setNewService({...newService, service_name: e.target.value})}
// //                     placeholder="e.g., Camera Operator"
// //                     required
// //                   />
// //                 </Form.Group>
// //               </Col>
// //               <Col md={4}>
// //                 <Form.Group className="mb-3 mb-md-0">
// //                   <Form.Label>Rate per Day</Form.Label>
// //                   <InputGroup>
// //                     <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
// //                     <Form.Control
// //                       type="number"
// //                       name="rate_per_day"
// //                       value={newService.rate_per_day}
// //                       onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// //                       placeholder="e.g., 5000"
// //                       required
// //                     />
// //                   </InputGroup>
// //                 </Form.Group>
// //               </Col>
// //               <Col md={3} className="d-flex align-items-end">
// //                 <Button 
// //                   type="submit" 
// //                   variant="success" 
// //                   className="w-100"
// //                   disabled={isLoading}
// //                 >
// //                   {isLoading ? (
// //                     <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
// //                   ) : (
// //                     <>
// //                       <FontAwesomeIcon icon={faPlus} className="me-2" />
// //                       Add Service
// //                     </>
// //                   )}
// //                 </Button>
// //               </Col>
// //             </Row>
// //           </Form>
// //         </Card.Body>
// //       </Card>

// //       <Card className="shadow-sm border-0">
// //         <Card.Body>
// //           <div className="d-flex justify-content-between align-items-center mb-3">
// //             <Card.Title className="mb-0">Services List</Card.Title>
// //             <Form.Control
// //               type="text"
// //               placeholder="Search services..."
// //               value={searchTerm}
// //               onChange={(e) => setSearchTerm(e.target.value)}
// //               className="ms-auto"
// //               style={{ maxWidth: '250px' }}
// //             />
// //           </div>

// //           {isLoading && !services.length ? (
// //             <div className="text-center py-5">
// //               <Spinner animation="border" variant="primary" />
// //               <p className="mt-3">Loading services...</p>
// //             </div>
// //           ) : filteredServices.length > 0 ? (
// //             <div className="table-responsive">
// //               <Table bordered hover className="mb-0 bg-white">
// //                 <thead className="bg-light">
// //                   <tr>
// //                     <th>Service Name</th>
// //                     <th>Rate per Day</th>
// //                     <th style={{ width: '180px' }}>Actions</th>
// //                   </tr>
// //                 </thead>
// //                 <tbody>
// //                   {filteredServices.map(service => (
// //                     <tr key={service.id}>
// //                       <td>
// //                         <Form.Control
// //                           type="text"
// //                           value={service.service_name}
// //                           onChange={(e) => {
// //                             if (editingId === service.id) {
// //                               setServices(services.map(s => 
// //                                 s.id === service.id ? {...s, service_name: e.target.value} : s
// //                               ));
// //                               setShowUpdateNotice(true);
// //                             }
// //                           }}
// //                           disabled={editingId !== service.id}
// //                           className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
// //                         />
// //                       </td>
// //                       <td>
// //                         {editingId === service.id ? (
// //                           <InputGroup>
// //                             <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
// //                             <Form.Control
// //                               type="number"
// //                               value={service.rate_per_day}
// //                               onChange={(e) => {
// //                                 if (editingId === service.id) {
// //                                   setServices(services.map(s => 
// //                                     s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// //                                   ));
// //                                   setShowUpdateNotice(true);
// //                                 }
// //                               }}
// //                               className="border-primary"
// //                             />
// //                           </InputGroup>
// //                         ) : (
// //                           <div className="rate-display">₹{service.rate_per_day}</div>
// //                         )}
// //                       </td>
// //                       <td>
// //                         {editingId === service.id ? (
// //                           <div className="d-flex gap-2">
// //                             <Button 
// //                               variant="primary" 
// //                               size="sm" 
// //                               onClick={() => handleUpdate(service.id, {
// //                                 service_name: service.service_name,
// //                                 rate_per_day: service.rate_per_day
// //                               })}
// //                               disabled={isLoading}
// //                             >
// //                               {isLoading ? (
// //                                 <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
// //                               ) : (
// //                                 <>
// //                                   <FontAwesomeIcon icon={faCheck} className="me-1" />
// //                                   Update
// //                                 </>
// //                               )}
// //                             </Button>
// //                             <Button 
// //                               variant="secondary" 
// //                               size="sm"
// //                               onClick={() => {
// //                                 setEditingId(null);
// //                                 setShowUpdateNotice(false);
// //                                 // Reload original data
// //                                 loadServices();
// //                               }}
// //                             >
// //                               <FontAwesomeIcon icon={faTimes} className="me-1" />
// //                               Cancel
// //                             </Button>
// //                           </div>
// //                         ) : (
// //                           <div className="d-flex gap-2">
// //                             <OverlayTrigger
// //                               placement="top"
// //                               overlay={<Tooltip>Edit Service</Tooltip>}
// //                             >
// //                               <Button 
// //                                 variant="outline-primary" 
// //                                 size="sm" 
// //                                 onClick={() => setEditingId(service.id)}
// //                               >
// //                                 <FontAwesomeIcon icon={faPencilAlt} />
// //                               </Button>
// //                             </OverlayTrigger>
// //                             <OverlayTrigger
// //                               placement="top"
// //                               overlay={<Tooltip>Delete Service</Tooltip>}
// //                             >
// //                               <Button 
// //                                 variant="outline-danger" 
// //                                 size="sm"
// //                                 onClick={() => handleDelete(service.id, service.service_name)}
// //                               >
// //                                 <FontAwesomeIcon icon={faTrash} />
// //                               </Button>
// //                             </OverlayTrigger>
// //                           </div>
// //                         )}
// //                       </td>
// //                     </tr>
// //                   ))}
// //                 </tbody>
// //               </Table>
// //             </div>
// //           ) : (
// //             <div className="text-center py-5">
// //               <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
// //               {searchTerm ? (
// //                 <p>No services found matching "{searchTerm}"</p>
// //               ) : (
// //                 <p>No services available. Add your first service above!</p>
// //               )}
// //             </div>
// //           )}
// //         </Card.Body>
// //       </Card>

// //       {/* CSS for animation, hover effects, and rate display */}
// //       <style jsx>{`
// //         .table-responsive {
// //           overflow-x: auto;
// //           -webkit-overflow-scrolling: touch;
// //         }
        
// //         .table tbody tr {
// //           transition: all 0.2s ease;
// //         }
        
// //         .table tbody tr:hover {
// //           background-color: rgba(13, 110, 253, 0.05) !important;
// //         }
        
// //         .services-component .card {
// //           transition: box-shadow 0.3s ease;
// //         }
        
// //         .services-component .card:hover {
// //           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
// //         }
        
// //         .rate-display {
// //           font-family: monospace;
// //           white-space: nowrap;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Services;

// import React, { useState, useEffect } from 'react';
// import { 
//   Table, 
//   Form, 
//   Button, 
//   Alert, 
//   Card, 
//   Row, 
//   Col, 
//   InputGroup, 
//   Badge,
//   Spinner,
//   OverlayTrigger,
//   Tooltip
// } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faPlus, 
//   faPencilAlt, 
//   faTrash, 
//   faCheck, 
//   faTimes, 
//   faInfoCircle,
//   faCoins,
//   faDownload
// } from '@fortawesome/free-solid-svg-icons';
// import { 
//   fetchServices, 
//   createService, 
//   updateService, 
//   deleteService 
// } from '../../services/api';
// import { jsPDF } from "jspdf";
// import autoTable from 'jspdf-autotable';
// import Logo from '../../assets/Logo.png';

// function Services() {
//   const [services, setServices] = useState([]);
//   const [newService, setNewService] = useState({
//     service_name: '',
//     rate_per_day: ''
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

//   useEffect(() => {
//     loadServices();
//   }, []);

//   const loadServices = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetchServices();
//       setServices(response.data);
//       setIsLoading(false);
//     } catch (error) {
//       console.error('Error loading services:', error);
//       setError('Failed to load services. Please try again.');
//       setIsLoading(false);
//     }
//   };

//   const validateServiceName = (name) => {
//     // Only allow letters, spaces and some punctuation like hyphens, no numbers or special characters
//     const regex = /^[a-zA-Z\s\-_()&]+$/;
//     return regex.test(name);
//   };

//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       if (!newService.service_name.trim()) {
//         setError('Service name cannot be empty');
//         return;
//       }
      
//       if (!validateServiceName(newService.service_name)) {
//         setError('Service name can only contain letters, spaces, and hyphens. No numbers or special characters allowed.');
//         return;
//       }
      
//       if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
//         setError('Rate per day must be a positive number');
//         return;
//       }
      
//       setIsLoading(true);
//       await createService(newService);
//       await loadServices();
      
//       setNewService({ service_name: '', rate_per_day: '' });
//       setError('');
//       setSuccess('Service created successfully!');
      
//       // Auto-hide success message after 3 seconds
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to create service');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUpdate = async (id, updatedData) => {
//     try {
//       if (!updatedData.service_name.trim()) {
//         setError('Service name cannot be empty');
//         return;
//       }
      
//       if (!validateServiceName(updatedData.service_name)) {
//         setError('Service name can only contain letters, spaces, and hyphens. No numbers or special characters allowed.');
//         return;
//       }
      
//       if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
//         setError('Rate per day must be a positive number');
//         return;
//       }
      
//       setIsLoading(true);
//       await updateService(id, updatedData);
//       await loadServices();
      
//       setEditingId(null);
//       setShowUpdateNotice(false);
//       setError('');
//       setSuccess('Service updated successfully!');
      
//       // Auto-hide success message after 3 seconds
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to update service');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id, serviceName) => {
//     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
//       try {
//         setIsLoading(true);
//         await deleteService(id);
//         await loadServices();
        
//         setError('');
//         setSuccess('Service deleted successfully!');
        
//         // Auto-hide success message after 3 seconds
//         setTimeout(() => setSuccess(''), 3000);
//       } catch (error) {
//         setError(error.response?.data?.error || 'Failed to delete service');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleServiceNameChange = (e) => {
//     setNewService({...newService, service_name: e.target.value});
//   };

//   // Download PDF function
//   const downloadServicesPDF = () => {
//     setIsGeneratingPDF(true);
    
//     try {
//       const doc = new jsPDF();
      
//       // Add logo at the top - centered with bigger size
//       const imgData = Logo;
//       const pageWidth = doc.internal.pageSize.getWidth();
//       const logoWidth = 50;
//       const logoHeight = 50;
//       const logoX = (pageWidth - logoWidth) / 2; // Center the logo horizontally
//       doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
//       // Add title
//       doc.setFontSize(20);
//       doc.setTextColor(40, 40, 40);
//       doc.text('Services List', 14, 45);
      
//       // Add current date
//       const today = new Date();
//       const dateStr = today.toLocaleDateString('en-IN', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//       doc.setFontSize(10);
//       doc.setTextColor(100, 100, 100);
//       doc.text(`Generated on: ${dateStr}`, 14, 53);
      
//       // Create table with services data
//       const tableColumn = ['Service Name', 'Rate per Day (Rs.)'];
//       const tableRows = [];
      
//       filteredServices.forEach(service => {
//         const serviceData = [
//           service.service_name,
//           service.rate_per_day.toString()
//         ];
//         tableRows.push(serviceData);
//       });
      
//       // Generate the PDF table
//       autoTable(doc, {
//         head: [tableColumn],
//         body: tableRows,
//         startY: 58,
//         theme: 'grid',
//         styles: { fontSize: 10, cellPadding: 4 },
//         headStyles: { fillColor: [66, 133, 244], textColor: 255 },
//         alternateRowStyles: { fillColor: [240, 240, 240] }
//       });
      
//       // Add total count at the bottom
//       const finalY = (doc.lastAutoTable?.finalY) || 35;
//       doc.setFontSize(10);
//       doc.setTextColor(100, 100, 100);
//       doc.text(`Total Services: ${filteredServices.length}`, 14, finalY + 10);
      
//       // Save the PDF
//       doc.save('services-list.pdf');
      
//       setSuccess('Services list downloaded successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       console.error('Error generating PDF:', error);
//       setError('Failed to generate PDF. Please try again.');
//     } finally {
//       setIsGeneratingPDF(false);
//     }
//   };

//   // Filter services based on search term
//   const filteredServices = services.filter(service => 
//     service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="services-component">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h4 className="mb-1">Service Management</h4>
//           <p className="text-muted mb-0">Manage studio services and their daily rates</p>
//         </div>
//         <Badge bg="info" className="py-2 px-3">
//           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
//           {services.length} Service{services.length !== 1 ? 's' : ''}
//         </Badge>
//       </div>

//       {error && (
//         <Alert 
//           variant="danger" 
//           dismissible 
//           onClose={() => setError('')}
//           className="border-0 shadow-sm"
//         >
//           <FontAwesomeIcon icon={faTimes} className="me-2" />
//           {error}
//         </Alert>
//       )}

//       {success && (
//         <Alert 
//           variant="success" 
//           dismissible 
//           onClose={() => setSuccess('')}
//           className="border-0 shadow-sm"
//         >
//           <FontAwesomeIcon icon={faCheck} className="me-2" />
//           {success}
//         </Alert>
//       )}

//       {showUpdateNotice && (
//         <Alert variant="info" className="text-center border-0 shadow-sm">
//           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//           You've made changes. Click <strong>Update</strong> to save.
//         </Alert>
//       )}

//       <Card className="shadow-sm border-0 mb-4">
//         <Card.Body>
//           <Card.Title className="mb-3">Add New Service</Card.Title>
//           <Form onSubmit={handleCreate}>
//             <Row>
//               <Col md={5}>
//                 <Form.Group className="mb-3 mb-md-0">
//                   <Form.Label>Service Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     name="service_name"
//                     value={newService.service_name}
//                     onChange={handleServiceNameChange}
//                     placeholder="e.g., Camera Operator"
//                     required
//                   />
//                   {/* <Form.Text style={{fontSize:'7px'}} className="text-muted ">
//                     Only letters, spaces, and hyphens allowed. No numbers or special characters.
//                   </Form.Text> */}
//                 </Form.Group>
//               </Col>
//               <Col md={4}>
//                 <Form.Group className="mb-3 mb-md-0">
//                   <Form.Label>Rate per Day</Form.Label>
//                   <InputGroup>
//                     <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
//                     <Form.Control
//                       type="number"
//                       name="rate_per_day"
//                       value={newService.rate_per_day}
//                       onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
//                       placeholder="e.g., 5000"
//                       required
//                     />
//                   </InputGroup>
//                 </Form.Group>
//               </Col>
//               <Col md={3} className="d-flex align-items-end">
//                 <Button 
//                   type="submit" 
//                   variant="success" 
//                   className="w-100"
//                   disabled={isLoading}
//                 >
//                   {isLoading ? (
//                     <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//                   ) : (
//                     <>
//                       <FontAwesomeIcon icon={faPlus} className="me-2" />
//                       Add Service
//                     </>
//                   )}
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </Card.Body>
//       </Card>

//       <Card className="shadow-sm border-0">
//         <Card.Body>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <Card.Title className="mb-0">Services List</Card.Title>
//             <div className="d-flex align-items-center">
//               <Form.Control
//                 type="text"
//                 placeholder="Search services..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="ms-auto me-2"
//                 style={{ maxWidth: '250px' }}
//               />
//               <Button 
//                 variant="outline-primary" 
//                 onClick={downloadServicesPDF}
//                 disabled={isGeneratingPDF || services.length === 0}
//                 title="Download services list as PDF"
//               >
//                 {isGeneratingPDF ? (
//                   <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//                 ) : (
//                   <FontAwesomeIcon icon={faDownload} />
//                 )}
//               </Button>
//             </div>
//           </div>

//           {isLoading && !services.length ? (
//             <div className="text-center py-5">
//               <Spinner animation="border" variant="primary" />
//               <p className="mt-3">Loading services...</p>
//             </div>
//           ) : filteredServices.length > 0 ? (
//             <div className="table-responsive">
//               <Table bordered hover className="mb-0 bg-white">
//                 <thead className="bg-light">
//                   <tr>
//                     <th>Service Name</th>
//                     <th>Rate per Day</th>
//                     <th style={{ width: '180px' }}>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredServices.map(service => (
//                     <tr key={service.id}>
//                       <td>
//                         <Form.Control
//                           type="text"
//                           value={service.service_name}
//                           onChange={(e) => {
//                             if (editingId === service.id) {
//                               setServices(services.map(s => 
//                                 s.id === service.id ? {...s, service_name: e.target.value} : s
//                               ));
//                               setShowUpdateNotice(true);
//                             }
//                           }}
//                           disabled={editingId !== service.id}
//                           className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
//                         />
//                       </td>
//                       <td>
//                         {editingId === service.id ? (
//                           <InputGroup>
//                             <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
//                             <Form.Control
//                               type="number"
//                               value={service.rate_per_day}
//                               onChange={(e) => {
//                                 if (editingId === service.id) {
//                                   setServices(services.map(s => 
//                                     s.id === service.id ? {...s, rate_per_day: e.target.value} : s
//                                   ));
//                                   setShowUpdateNotice(true);
//                                 }
//                               }}
//                               className="border-primary"
//                             />
//                           </InputGroup>
//                         ) : (
//                           <div className="rate-display">₹{service.rate_per_day}</div>
//                         )}
//                       </td>
//                       <td>
//                         {editingId === service.id ? (
//                           <div className="d-flex gap-2">
//                             <Button 
//                               variant="primary" 
//                               size="sm" 
//                               onClick={() => handleUpdate(service.id, {
//                                 service_name: service.service_name,
//                                 rate_per_day: service.rate_per_day
//                               })}
//                               disabled={isLoading}
//                             >
//                               {isLoading ? (
//                                 <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//                               ) : (
//                                 <>
//                                   <FontAwesomeIcon icon={faCheck} className="me-1" />
//                                   Update
//                                 </>
//                               )}
//                             </Button>
//                             <Button 
//                               variant="secondary" 
//                               size="sm"
//                               onClick={() => {
//                                 setEditingId(null);
//                                 setShowUpdateNotice(false);
//                                 // Reload original data
//                                 loadServices();
//                               }}
//                             >
//                               <FontAwesomeIcon icon={faTimes} className="me-1" />
//                               Cancel
//                             </Button>
//                           </div>
//                         ) : (
//                           <div className="d-flex gap-2">
//                             <OverlayTrigger
//                               placement="top"
//                               overlay={<Tooltip>Edit Service</Tooltip>}
//                             >
//                               <Button 
//                                 variant="outline-primary" 
//                                 size="sm" 
//                                 onClick={() => setEditingId(service.id)}
//                               >
//                                 <FontAwesomeIcon icon={faPencilAlt} />
//                               </Button>
//                             </OverlayTrigger>
//                             <OverlayTrigger
//                               placement="top"
//                               overlay={<Tooltip>Delete Service</Tooltip>}
//                             >
//                               <Button 
//                                 variant="outline-danger" 
//                                 size="sm"
//                                 onClick={() => handleDelete(service.id, service.service_name)}
//                               >
//                                 <FontAwesomeIcon icon={faTrash} />
//                               </Button>
//                             </OverlayTrigger>
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//           ) : (
//             <div className="text-center py-5">
//               <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
//               {searchTerm ? (
//                 <p>No services found matching "{searchTerm}"</p>
//               ) : (
//                 <p>No services available. Add your first service above!</p>
//               )}
//             </div>
//           )}
//         </Card.Body>
//       </Card>

//       {/* CSS for animation, hover effects, and rate display */}
//       <style jsx>{`
//         .table-responsive {
//           overflow-x: auto;
//           -webkit-overflow-scrolling: touch;
//         }
        
//         .table tbody tr {
//           transition: all 0.2s ease;
//         }
        
//         .table tbody tr:hover {
//           background-color: rgba(13, 110, 253, 0.05) !important;
//         }
        
//         .services-component .card {
//           transition: box-shadow 0.3s ease;
//         }
        
//         .services-component .card:hover {
//           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
//         }
        
//         .rate-display {
//           font-family: monospace;
//           white-space: nowrap;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Services;
import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Form, 
  Button, 
  Alert, 
  Card, 
  Row, 
  Col, 
  InputGroup, 
  Badge,
  Spinner,
  OverlayTrigger,
  Tooltip,
  Pagination
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPencilAlt, 
  faTrash, 
  faCheck, 
  faTimes, 
  faInfoCircle,
  faCoins,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import { 
  fetchServices, 
  createService, 
  updateService, 
  deleteService 
} from '../../services/api';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import Logo from '../../assets/Logo.png';
import './Services.css'; // We'll create this CSS file for animations

function Services() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    service_name: '',
    rate_per_day: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(10);

  useEffect(() => {
    loadServices();
  }, []);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  const loadServices = async () => {
    try {
      setIsLoading(true);
      const response = await fetchServices();
      setServices(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error loading services:', error);
      setError('Failed to load services. Please try again.');
      setIsLoading(false);
    }
  };

  const validateServiceName = (name) => {
    // Only allow letters, spaces and some punctuation like hyphens, no numbers or special characters
    const regex = /^[a-zA-Z\s\-_()&]+$/;
    return regex.test(name);
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      if (!newService.service_name.trim()) {
        setError('Service name cannot be empty');
        return;
      }
      
      if (!validateServiceName(newService.service_name)) {
        setError('Service name can only contain letters, spaces, and hyphens. No numbers or special characters allowed.');
        return;
      }
      
      if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
        setError('Rate per day must be a positive number');
        return;
      }
      
      setIsLoading(true);
      await createService(newService);
      await loadServices();
      
      setNewService({ service_name: '', rate_per_day: '' });
      setError('');
      setSuccess('Service created successfully!');
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create service');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdate = async (id, updatedData) => {
    try {
      if (!updatedData.service_name.trim()) {
        setError('Service name cannot be empty');
        return;
      }
      
      if (!validateServiceName(updatedData.service_name)) {
        setError('Service name can only contain letters, spaces, and hyphens. No numbers or special characters allowed.');
        return;
      }
      
      if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
        setError('Rate per day must be a positive number');
        return;
      }
      
      setIsLoading(true);
      await updateService(id, updatedData);
      await loadServices();
      
      setEditingId(null);
      setShowUpdateNotice(false);
      setError('');
      setSuccess('Service updated successfully!');
      
      // Auto-hide success message after 3 seconds
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update service');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id, serviceName) => {
    if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
      try {
        setIsLoading(true);
        await deleteService(id);
        await loadServices();
        
        setError('');
        setSuccess('Service deleted successfully!');
        
        // Auto-hide success message after 3 seconds
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to delete service');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleServiceNameChange = (e) => {
    setNewService({...newService, service_name: e.target.value});
  };

  // Download PDF function
  const downloadServicesPDF = () => {
    setIsGeneratingPDF(true);
    
    try {
      const doc = new jsPDF();
      
      // Add logo at the top - centered with bigger size
      const imgData = Logo;
      const pageWidth = doc.internal.pageSize.getWidth();
      const logoWidth = 50;
      const logoHeight = 50;
      const logoX = (pageWidth - logoWidth) / 2; // Center the logo horizontally
      doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
      // Add title
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text('Services List', 14, 45);
      
      // Add current date
      const today = new Date();
      const dateStr = today.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${dateStr}`, 14, 53);
      
      // Create table with services data
      const tableColumn = ['Service Name', 'Rate per Day (Rs.)'];
      const tableRows = [];
      
      // Use all filtered services for PDF, not just the current page
      filteredServices.forEach(service => {
        const serviceData = [
          service.service_name,
          service.rate_per_day.toString()
        ];
        tableRows.push(serviceData);
      });
      
      // Generate the PDF table
      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 58,
        theme: 'grid',
        styles: { fontSize: 10, cellPadding: 4 },
        headStyles: { fillColor: [66, 133, 244], textColor: 255 },
        alternateRowStyles: { fillColor: [240, 240, 240] }
      });
      
      // Add total count at the bottom
      const finalY = (doc.lastAutoTable?.finalY) || 35;
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Total Services: ${filteredServices.length}`, 14, finalY + 10);
      
      // Save the PDF
      doc.save('services-list.pdf');
      
      setSuccess('Services list downloaded successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setError('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Filter services based on search term
  const filteredServices = services.filter(service => 
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Render pagination components
  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="d-flex justify-content-center mt-4">
        <Pagination className="pagination-animated">
          <Pagination.Prev 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
            className="pagination-nav-btn"
          />
          
          {/* Display page numbers */}
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === currentPage;
            
            // Show first page, last page, current page, and pages around current
            if (
              pageNumber === 1 || 
              pageNumber === totalPages || 
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={isActive}
                  onClick={() => paginate(pageNumber)}
                  className={isActive ? 'active-page' : ''}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
            
            // Show ellipsis instead of all page numbers
            if (
              (pageNumber === currentPage - 2 && currentPage > 3) || 
              (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return <Pagination.Ellipsis key={pageNumber} />;
            }
            
            return null;
          })}
          
          <Pagination.Next 
            onClick={() => paginate(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="pagination-nav-btn"
          />
        </Pagination>
      </div>
    );
  };

  return (
    <div className="services-component">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Service Management</h4>
          <p className="text-muted mb-0">Manage studio services and their daily rates</p>
        </div>
        <Badge bg="info" className="py-2 px-3">
          <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
          {services.length} Service{services.length !== 1 ? 's' : ''}
        </Badge>
      </div>

      {error && (
        <Alert 
          variant="danger" 
          dismissible 
          onClose={() => setError('')}
          className="border-0 shadow-sm"
        >
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          {error}
        </Alert>
      )}

      {success && (
        <Alert 
          variant="success" 
          dismissible 
          onClose={() => setSuccess('')}
          className="border-0 shadow-sm"
        >
          <FontAwesomeIcon icon={faCheck} className="me-2" />
          {success}
        </Alert>
      )}

      {showUpdateNotice && (
        <Alert variant="info" className="text-center border-0 shadow-sm">
          <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
          You've made changes. Click <strong>Update</strong> to save.
        </Alert>
      )}

      <Card className="shadow-sm border-0 mb-4">
        <Card.Body>
          <Card.Title className="mb-3">Add New Service</Card.Title>
          <Form onSubmit={handleCreate}>
            <Row>
              <Col md={5}>
                <Form.Group className="mb-3 mb-md-0">
                  <Form.Label>Service Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="service_name"
                    value={newService.service_name}
                    onChange={handleServiceNameChange}
                    placeholder="e.g., Camera Operator"
                    required
                  />
                  {/* <Form.Text style={{fontSize:'7px'}} className="text-muted ">
                    Only letters, spaces, and hyphens allowed. No numbers or special characters.
                  </Form.Text> */}
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group className="mb-3 mb-md-0">
                  <Form.Label>Rate per Day</Form.Label>
                  <InputGroup>
                    <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      name="rate_per_day"
                      value={newService.rate_per_day}
                      onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
                      placeholder="e.g., 5000"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={3} className="d-flex align-items-end">
                <Button 
                  type="submit" 
                  variant="success" 
                  className="w-100 btn-animated"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  ) : (
                    <>
                      <FontAwesomeIcon icon={faPlus} className="me-2" />
                      Add Service
                    </>
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      <Card className="shadow-sm border-0">
        <Card.Body>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <Card.Title className="mb-0">Services List</Card.Title>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                placeholder="Search services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="ms-auto me-2"
                style={{ maxWidth: '250px' }}
              />
              <Button 
                variant="outline-primary" 
                onClick={downloadServicesPDF}
                disabled={isGeneratingPDF || services.length === 0}
                title="Download services list as PDF"
                className="download-btn"
              >
                {isGeneratingPDF ? (
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                ) : (
                  <FontAwesomeIcon icon={faDownload} />
                )}
              </Button>
            </div>
          </div>

          {isLoading && !services.length ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-3">Loading services...</p>
            </div>
          ) : filteredServices.length > 0 ? (
            <>
              <div className="table-responsive">
                <Table bordered hover className="mb-0 bg-white">
                  <thead className="bg-light">
                    <tr>
                      <th>Service Name</th>
                      <th>Rate per Day</th>
                      <th style={{ width: '180px' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentServices.map(service => (
                      <tr key={service.id}>
                        <td>
                          <Form.Control
                            type="text"
                            value={service.service_name}
                            onChange={(e) => {
                              if (editingId === service.id) {
                                setServices(services.map(s => 
                                  s.id === service.id ? {...s, service_name: e.target.value} : s
                                ));
                                setShowUpdateNotice(true);
                              }
                            }}
                            disabled={editingId !== service.id}
                            className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
                          />
                        </td>
                        <td>
                          {editingId === service.id ? (
                            <InputGroup>
                              <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
                              <Form.Control
                                type="number"
                                value={service.rate_per_day}
                                onChange={(e) => {
                                  if (editingId === service.id) {
                                    setServices(services.map(s => 
                                      s.id === service.id ? {...s, rate_per_day: e.target.value} : s
                                    ));
                                    setShowUpdateNotice(true);
                                  }
                                }}
                                className="border-primary"
                              />
                            </InputGroup>
                          ) : (
                            <div className="rate-display">₹{service.rate_per_day}</div>
                          )}
                        </td>
                        <td>
                          {editingId === service.id ? (
                            <div className="d-flex gap-2">
                              <Button 
                                variant="primary" 
                                size="sm" 
                                onClick={() => handleUpdate(service.id, {
                                  service_name: service.service_name,
                                  rate_per_day: service.rate_per_day
                                })}
                                disabled={isLoading}
                                className="btn-animated"
                              >
                                {isLoading ? (
                                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                                ) : (
                                  <>
                                    <FontAwesomeIcon icon={faCheck} className="me-1" />
                                    Update
                                  </>
                                )}
                              </Button>
                              <Button 
                                variant="secondary" 
                                size="sm"
                                onClick={() => {
                                  setEditingId(null);
                                  setShowUpdateNotice(false);
                                  // Reload original data
                                  loadServices();
                                }}
                              >
                                <FontAwesomeIcon icon={faTimes} className="me-1" />
                                Cancel
                              </Button>
                            </div>
                          ) : (
                            <div className="d-flex gap-2">
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Edit Service</Tooltip>}
                              >
                                <Button 
                                  variant="outline-primary" 
                                  size="sm" 
                                  onClick={() => setEditingId(service.id)}
                                  className="action-btn"
                                >
                                  <FontAwesomeIcon icon={faPencilAlt} />
                                </Button>
                              </OverlayTrigger>
                              <OverlayTrigger
                                placement="top"
                                overlay={<Tooltip>Delete Service</Tooltip>}
                              >
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDelete(service.id, service.service_name)}
                                  className="action-btn"
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </Button>
                              </OverlayTrigger>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </div>
              
              {/* Pagination */}
              {renderPagination()}
              
              {/* Pagination info */}
              {totalPages > 1 && (
                <div className="text-center mt-2 text-muted small">
                  Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-5">
              <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
              {searchTerm ? (
                <p>No services found matching "{searchTerm}"</p>
              ) : (
                <p>No services available. Add your first service above!</p>
              )}
            </div>
          )}
        </Card.Body>
      </Card>

      {/* CSS for animation, hover effects, and rate display */}
      <style jsx>{`
        .table-responsive {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
        }
        
        .table tbody tr {
          transition: all 0.2s ease;
        }
        
        .table tbody tr:hover {
          background-color: rgba(13, 110, 253, 0.05) !important;
        }
        
        .services-component .card {
          transition: box-shadow 0.3s ease;
        }
        
        .services-component .card:hover {
          box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
        }
        
        .rate-display {
          font-family: monospace;
          white-space: nowrap;
        }
      `}</style>
    </div>
  );
}

export default Services;