
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { 
// // // // //   Table, 
// // // // //   Form, 
// // // // //   Button, 
// // // // //   Alert, 
// // // // //   Card, 
// // // // //   Row, 
// // // // //   Col, 
// // // // //   InputGroup, 
// // // // //   Badge,
// // // // //   Spinner,
// // // // //   OverlayTrigger,
// // // // //   Tooltip,
// // // // //   Pagination
// // // // // } from 'react-bootstrap';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { 
// // // // //   faPlus, 
// // // // //   faPencilAlt, 
// // // // //   faTrash, 
// // // // //   faCheck, 
// // // // //   faTimes, 
// // // // //   faInfoCircle,
// // // // //   faCoins,
// // // // //   faDownload
// // // // // } from '@fortawesome/free-solid-svg-icons';
// // // // // import { 
// // // // //   fetchServices, 
// // // // //   createService, 
// // // // //   updateService, 
// // // // //   deleteService 
// // // // // } from '../../services/api';
// // // // // import { jsPDF } from "jspdf";
// // // // // import autoTable from 'jspdf-autotable';
// // // // // import Logo from '../../assets/Logo.png';
// // // // // import './Services.css'; // We'll create this CSS file for animations

// // // // // function Services() {
// // // // //   const [services, setServices] = useState([]);
// // // // //   const [newService, setNewService] = useState({
// // // // //     service_name: '',
// // // // //     rate_per_day: ''
// // // // //   });
// // // // //   const [editingId, setEditingId] = useState(null);
// // // // //   const [error, setError] = useState('');
// // // // //   const [success, setSuccess] = useState('');
// // // // //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
// // // // //   const [isLoading, setIsLoading] = useState(true);
// // // // //   const [searchTerm, setSearchTerm] = useState('');
// // // // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  
// // // // //   // Pagination states
// // // // //   const [currentPage, setCurrentPage] = useState(1);
// // // // //   const [servicesPerPage] = useState(10);

// // // // //   useEffect(() => {
// // // // //     loadServices();
// // // // //   }, []);

// // // // //   // Reset to first page when search term changes
// // // // //   useEffect(() => {
// // // // //     setCurrentPage(1);
// // // // //   }, [searchTerm]);

// // // // //   const loadServices = async () => {
// // // // //     try {
// // // // //       setIsLoading(true);
// // // // //       const response = await fetchServices();
// // // // //       setServices(response.data);
// // // // //       setIsLoading(false);
// // // // //     } catch (error) {
// // // // //       console.error('Error loading services:', error);
// // // // //       setError('Failed to load services. Please try again.');
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

  
// // // // //   const validateServiceName = (name) => {
// // // // //     return name.trim().length > 0;
// // // // //   };
  

// // // // //   const handleCreate = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       if (!newService.service_name.trim()) {
// // // // //         setError('Service name cannot be empty');
// // // // //         return;
// // // // //       }
      
// // // // //       if (!validateServiceName(newService.service_name)) {
// // // // //         setError('Service name can only contain letters, spaces, and hyphens. No numbers or special characters allowed.');
// // // // //         return;
// // // // //       }
      
// // // // //       if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
// // // // //         setError('Rate per day must be a positive number');
// // // // //         return;
// // // // //       }
      
// // // // //       setIsLoading(true);
// // // // //       await createService(newService);
// // // // //       await loadServices();
      
// // // // //       setNewService({ service_name: '', rate_per_day: '' });
// // // // //       setError('');
// // // // //       setSuccess('Service created successfully!');
      
// // // // //       // Auto-hide success message after 3 seconds
// // // // //       setTimeout(() => setSuccess(''), 3000);
// // // // //     } catch (error) {
// // // // //       setError(error.response?.data?.error || 'Failed to create service');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleUpdate = async (id, updatedData) => {
// // // // //     try {
// // // // //       if (!updatedData.service_name.trim()) {
// // // // //         setError('Service name cannot be empty');
// // // // //         return;
// // // // //       }
      
// // // // //       if (!validateServiceName(updatedData.service_name)) {
// // // // //         setError('Service name can only contain letters, spaces, and hyphens. No numbers or special characters allowed.');
// // // // //         return;
// // // // //       }
      
// // // // //       if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
// // // // //         setError('Rate per day must be a positive number');
// // // // //         return;
// // // // //       }
      
// // // // //       setIsLoading(true);
// // // // //       await updateService(id, updatedData);
// // // // //       await loadServices();
      
// // // // //       setEditingId(null);
// // // // //       setShowUpdateNotice(false);
// // // // //       setError('');
// // // // //       setSuccess('Service updated successfully!');
      
// // // // //       // Auto-hide success message after 3 seconds
// // // // //       setTimeout(() => setSuccess(''), 3000);
// // // // //     } catch (error) {
// // // // //       setError(error.response?.data?.error || 'Failed to update service');
// // // // //     } finally {
// // // // //       setIsLoading(false);
// // // // //     }
// // // // //   };

// // // // //   const handleDelete = async (id, serviceName) => {
// // // // //     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
// // // // //       try {
// // // // //         setIsLoading(true);
// // // // //         await deleteService(id);
// // // // //         await loadServices();
        
// // // // //         setError('');
// // // // //         setSuccess('Service deleted successfully!');
        
// // // // //         // Auto-hide success message after 3 seconds
// // // // //         setTimeout(() => setSuccess(''), 3000);
// // // // //       } catch (error) {
// // // // //         setError(error.response?.data?.error || 'Failed to delete service');
// // // // //       } finally {
// // // // //         setIsLoading(false);
// // // // //       }
// // // // //     }
// // // // //   };

// // // // //   const handleServiceNameChange = (e) => {
// // // // //     setNewService({...newService, service_name: e.target.value});
// // // // //   };

// // // // //   // Download PDF function
// // // // //   const downloadServicesPDF = () => {
// // // // //     setIsGeneratingPDF(true);
    
// // // // //     try {
// // // // //       const doc = new jsPDF();
      
// // // // //       // Add logo at the top - centered with bigger size
// // // // //       const imgData = Logo;
// // // // //       const pageWidth = doc.internal.pageSize.getWidth();
// // // // //       const logoWidth = 50;
// // // // //       const logoHeight = 50;
// // // // //       const logoX = (pageWidth - logoWidth) / 2; // Center the logo horizontally
// // // // //       doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
// // // // //       // Add title
// // // // //       doc.setFontSize(20);
// // // // //       doc.setTextColor(40, 40, 40);
// // // // //       doc.text('Services List', 14, 45);
      
// // // // //       // Add current date
// // // // //       const today = new Date();
// // // // //       const dateStr = today.toLocaleDateString('en-IN', {
// // // // //         year: 'numeric',
// // // // //         month: 'long',
// // // // //         day: 'numeric'
// // // // //       });
// // // // //       doc.setFontSize(10);
// // // // //       doc.setTextColor(100, 100, 100);
// // // // //       doc.text(`Generated on: ${dateStr}`, 14, 53);
      
// // // // //       // Create table with services data
// // // // //       const tableColumn = ['Service Name', 'Rate per Day (Rs.)'];
// // // // //       const tableRows = [];
      
// // // // //       // Use all filtered services for PDF, not just the current page
// // // // //       filteredServices.forEach(service => {
// // // // //         const serviceData = [
// // // // //           service.service_name,
// // // // //           service.rate_per_day.toString()
// // // // //         ];
// // // // //         tableRows.push(serviceData);
// // // // //       });
      
// // // // //       // Generate the PDF table
// // // // //       autoTable(doc, {
// // // // //         head: [tableColumn],
// // // // //         body: tableRows,
// // // // //         startY: 58,
// // // // //         theme: 'grid',
// // // // //         styles: { fontSize: 10, cellPadding: 4 },
// // // // //         headStyles: { fillColor: [66, 133, 244], textColor: 255 },
// // // // //         alternateRowStyles: { fillColor: [240, 240, 240] }
// // // // //       });
      
// // // // //       // Add total count at the bottom
// // // // //       const finalY = (doc.lastAutoTable?.finalY) || 35;
// // // // //       doc.setFontSize(10);
// // // // //       doc.setTextColor(100, 100, 100);
// // // // //       doc.text(`Total Services: ${filteredServices.length}`, 14, finalY + 10);
      
// // // // //       // Save the PDF
// // // // //       doc.save('services-list.pdf');
      
// // // // //       setSuccess('Services list downloaded successfully!');
// // // // //       setTimeout(() => setSuccess(''), 3000);
// // // // //     } catch (error) {
// // // // //       console.error('Error generating PDF:', error);
// // // // //       setError('Failed to generate PDF. Please try again.');
// // // // //     } finally {
// // // // //       setIsGeneratingPDF(false);
// // // // //     }
// // // // //   };

// // // // //   // Filter services based on search term
// // // // //   const filteredServices = services.filter(service => 
// // // // //     service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
// // // // //   );

// // // // //   // Pagination logic
// // // // //   const indexOfLastService = currentPage * servicesPerPage;
// // // // //   const indexOfFirstService = indexOfLastService - servicesPerPage;
// // // // //   const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
// // // // //   const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

// // // // //   // Change page
// // // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // // //   // Render pagination components
// // // // //   const renderPagination = () => {
// // // // //     if (totalPages <= 1) return null;

// // // // //     return (
// // // // //       <div className="d-flex justify-content-center mt-4">
// // // // //         <Pagination className="pagination-animated">
// // // // //           <Pagination.Prev 
// // // // //             onClick={() => paginate(currentPage - 1)}
// // // // //             disabled={currentPage === 1}
// // // // //             className="pagination-nav-btn"
// // // // //           />
          
// // // // //           {/* Display page numbers */}
// // // // //           {[...Array(totalPages)].map((_, index) => {
// // // // //             const pageNumber = index + 1;
// // // // //             const isActive = pageNumber === currentPage;
            
// // // // //             // Show first page, last page, current page, and pages around current
// // // // //             if (
// // // // //               pageNumber === 1 || 
// // // // //               pageNumber === totalPages || 
// // // // //               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
// // // // //             ) {
// // // // //               return (
// // // // //                 <Pagination.Item
// // // // //                   key={pageNumber}
// // // // //                   active={isActive}
// // // // //                   onClick={() => paginate(pageNumber)}
// // // // //                   className={isActive ? 'active-page' : ''}
// // // // //                 >
// // // // //                   {pageNumber}
// // // // //                 </Pagination.Item>
// // // // //               );
// // // // //             }
            
// // // // //             // Show ellipsis instead of all page numbers
// // // // //             if (
// // // // //               (pageNumber === currentPage - 2 && currentPage > 3) || 
// // // // //               (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
// // // // //             ) {
// // // // //               return <Pagination.Ellipsis key={pageNumber} />;
// // // // //             }
            
// // // // //             return null;
// // // // //           })}
          
// // // // //           <Pagination.Next 
// // // // //             onClick={() => paginate(currentPage + 1)}
// // // // //             disabled={currentPage === totalPages}
// // // // //             className="pagination-nav-btn"
// // // // //           />
// // // // //         </Pagination>
// // // // //       </div>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <div className="services-component">
// // // // //       <div className="d-flex justify-content-between align-items-center mb-4">
// // // // //         <div>
// // // // //           <h4 className="mb-1">Service Management</h4>
// // // // //           <p className="text-muted mb-0">Manage studio services and their daily rates</p>
// // // // //         </div>
// // // // //         <Badge bg="info" className="py-2 px-3">
// // // // //           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // // // //           {services.length} Service{services.length !== 1 ? 's' : ''}
// // // // //         </Badge>
// // // // //       </div>

// // // // //       {error && (
// // // // //         <Alert 
// // // // //           variant="danger" 
// // // // //           dismissible 
// // // // //           onClose={() => setError('')}
// // // // //           className="border-0 shadow-sm"
// // // // //         >
// // // // //           <FontAwesomeIcon icon={faTimes} className="me-2" />
// // // // //           {error}
// // // // //         </Alert>
// // // // //       )}

// // // // //       {success && (
// // // // //         <Alert 
// // // // //           variant="success" 
// // // // //           dismissible 
// // // // //           onClose={() => setSuccess('')}
// // // // //           className="border-0 shadow-sm"
// // // // //         >
// // // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // // //           {success}
// // // // //         </Alert>
// // // // //       )}

// // // // //       {showUpdateNotice && (
// // // // //         <Alert variant="info" className="text-center border-0 shadow-sm">
// // // // //           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// // // // //           You've made changes. Click <strong>Update</strong> to save.
// // // // //         </Alert>
// // // // //       )}

// // // // //       <Card className="shadow-sm border-0 mb-4">
// // // // //         <Card.Body>
// // // // //           <Card.Title className="mb-3">Add New Service</Card.Title>
// // // // //           <Form onSubmit={handleCreate}>
// // // // //             <Row>
// // // // //               <Col md={5}>
// // // // //                 <Form.Group className="mb-3 mb-md-0">
// // // // //                   <Form.Label>Service Name</Form.Label>
// // // // //                   <Form.Control
// // // // //                     type="text"
// // // // //                     name="service_name"
// // // // //                     value={newService.service_name}
// // // // //                     onChange={handleServiceNameChange}
// // // // //                     placeholder="e.g., Camera Operator"
// // // // //                     required
// // // // //                   />
// // // // //                   {/* <Form.Text style={{fontSize:'7px'}} className="text-muted ">
// // // // //                     Only letters, spaces, and hyphens allowed. No numbers or special characters.
// // // // //                   </Form.Text> */}
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //               <Col md={4}>
// // // // //                 <Form.Group className="mb-3 mb-md-0">
// // // // //                   <Form.Label>Rate per Day</Form.Label>
// // // // //                   <InputGroup>
// // // // //                     <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
// // // // //                     <Form.Control
// // // // //                       type="number"
// // // // //                       name="rate_per_day"
// // // // //                       value={newService.rate_per_day}
// // // // //                       onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// // // // //                       placeholder="e.g., 5000"
// // // // //                       required
// // // // //                     />
// // // // //                   </InputGroup>
// // // // //                 </Form.Group>
// // // // //               </Col>
// // // // //               <Col md={3} className="d-flex align-items-end">
// // // // //                 <Button 
// // // // //                   type="submit" 
// // // // //                   variant="success" 
// // // // //                   className="w-100 btn-animated"
// // // // //                   disabled={isLoading}
// // // // //                 >
// // // // //                   {isLoading ? (
// // // // //                     <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
// // // // //                   ) : (
// // // // //                     <>
// // // // //                       <FontAwesomeIcon icon={faPlus} className="me-2" />
// // // // //                       Add Service
// // // // //                     </>
// // // // //                   )}
// // // // //                 </Button>
// // // // //               </Col>
// // // // //             </Row>
// // // // //           </Form>
// // // // //         </Card.Body>
// // // // //       </Card>

// // // // //       <Card className="shadow-sm border-0">
// // // // //         <Card.Body>
// // // // //           <div className="d-flex justify-content-between align-items-center mb-3">
// // // // //             <Card.Title className="mb-0">Services List</Card.Title>
// // // // //             <div className="d-flex align-items-center">
// // // // //               <Form.Control
// // // // //                 type="text"
// // // // //                 placeholder="Search services..."
// // // // //                 value={searchTerm}
// // // // //                 onChange={(e) => setSearchTerm(e.target.value)}
// // // // //                 className="ms-auto me-2"
// // // // //                 style={{ maxWidth: '250px' }}
// // // // //               />
// // // // //               <Button 
// // // // //                 variant="outline-primary" 
// // // // //                 onClick={downloadServicesPDF}
// // // // //                 disabled={isGeneratingPDF || services.length === 0}
// // // // //                 title="Download services list as PDF"
// // // // //                 className="download-btn"
// // // // //               >
// // // // //                 {isGeneratingPDF ? (
// // // // //                   <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
// // // // //                 ) : (
// // // // //                   <FontAwesomeIcon icon={faDownload} />
// // // // //                 )}
// // // // //               </Button>
// // // // //             </div>
// // // // //           </div>

// // // // //           {isLoading && !services.length ? (
// // // // //             <div className="text-center py-5">
// // // // //               <Spinner animation="border" variant="primary" />
// // // // //               <p className="mt-3">Loading services...</p>
// // // // //             </div>
// // // // //           ) : filteredServices.length > 0 ? (
// // // // //             <>
// // // // //               <div className="table-responsive">
// // // // //                 <Table bordered hover className="mb-0 bg-white">
// // // // //                   <thead className="bg-light">
// // // // //                     <tr>
// // // // //                       <th>Service Name</th>
// // // // //                       <th>Rate per Day</th>
// // // // //                       <th style={{ width: '180px' }}>Actions</th>
// // // // //                     </tr>
// // // // //                   </thead>
// // // // //                   <tbody>
// // // // //                     {currentServices.map(service => (
// // // // //                       <tr key={service.id}>
// // // // //                         <td>
// // // // //                           <Form.Control
// // // // //                             type="text"
// // // // //                             value={service.service_name}
// // // // //                             onChange={(e) => {
// // // // //                               if (editingId === service.id) {
// // // // //                                 setServices(services.map(s => 
// // // // //                                   s.id === service.id ? {...s, service_name: e.target.value} : s
// // // // //                                 ));
// // // // //                                 setShowUpdateNotice(true);
// // // // //                               }
// // // // //                             }}
// // // // //                             disabled={editingId !== service.id}
// // // // //                             className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
// // // // //                           />
// // // // //                         </td>
// // // // //                         <td>
// // // // //                           {editingId === service.id ? (
// // // // //                             <InputGroup>
// // // // //                               <InputGroup.Text className="py-0 px-2">₹</InputGroup.Text>
// // // // //                               <Form.Control
// // // // //                                 type="number"
// // // // //                                 value={service.rate_per_day}
// // // // //                                 onChange={(e) => {
// // // // //                                   if (editingId === service.id) {
// // // // //                                     setServices(services.map(s => 
// // // // //                                       s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// // // // //                                     ));
// // // // //                                     setShowUpdateNotice(true);
// // // // //                                   }
// // // // //                                 }}
// // // // //                                 className="border-primary"
// // // // //                               />
// // // // //                             </InputGroup>
// // // // //                           ) : (
// // // // //                             <div className="rate-display">₹{service.rate_per_day}</div>
// // // // //                           )}
// // // // //                         </td>
// // // // //                         <td>
// // // // //                           {editingId === service.id ? (
// // // // //                             <div className="d-flex gap-2">
// // // // //                               <Button 
// // // // //                                 variant="primary" 
// // // // //                                 size="sm" 
// // // // //                                 onClick={() => handleUpdate(service.id, {
// // // // //                                   service_name: service.service_name,
// // // // //                                   rate_per_day: service.rate_per_day
// // // // //                                 })}
// // // // //                                 disabled={isLoading}
// // // // //                                 className="btn-animated"
// // // // //                               >
// // // // //                                 {isLoading ? (
// // // // //                                   <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
// // // // //                                 ) : (
// // // // //                                   <>
// // // // //                                     <FontAwesomeIcon icon={faCheck} className="me-1" />
// // // // //                                     Update
// // // // //                                   </>
// // // // //                                 )}
// // // // //                               </Button>
// // // // //                               <Button 
// // // // //                                 variant="secondary" 
// // // // //                                 size="sm"
// // // // //                                 onClick={() => {
// // // // //                                   setEditingId(null);
// // // // //                                   setShowUpdateNotice(false);
// // // // //                                   // Reload original data
// // // // //                                   loadServices();
// // // // //                                 }}
// // // // //                               >
// // // // //                                 <FontAwesomeIcon icon={faTimes} className="me-1" />
// // // // //                                 Cancel
// // // // //                               </Button>
// // // // //                             </div>
// // // // //                           ) : (
// // // // //                             <div className="d-flex gap-2">
// // // // //                               <OverlayTrigger
// // // // //                                 placement="top"
// // // // //                                 overlay={<Tooltip>Edit Service</Tooltip>}
// // // // //                               >
// // // // //                                 <Button 
// // // // //                                   variant="outline-primary" 
// // // // //                                   size="sm" 
// // // // //                                   onClick={() => setEditingId(service.id)}
// // // // //                                   className="action-btn"
// // // // //                                 >
// // // // //                                   <FontAwesomeIcon icon={faPencilAlt} />
// // // // //                                 </Button>
// // // // //                               </OverlayTrigger>
// // // // //                               <OverlayTrigger
// // // // //                                 placement="top"
// // // // //                                 overlay={<Tooltip>Delete Service</Tooltip>}
// // // // //                               >
// // // // //                                 <Button 
// // // // //                                   variant="outline-danger" 
// // // // //                                   size="sm"
// // // // //                                   onClick={() => handleDelete(service.id, service.service_name)}
// // // // //                                   className="action-btn"
// // // // //                                 >
// // // // //                                   <FontAwesomeIcon icon={faTrash} />
// // // // //                                 </Button>
// // // // //                               </OverlayTrigger>
// // // // //                             </div>
// // // // //                           )}
// // // // //                         </td>
// // // // //                       </tr>
// // // // //                     ))}
// // // // //                   </tbody>
// // // // //                 </Table>
// // // // //               </div>
              
// // // // //               {/* Pagination */}
// // // // //               {renderPagination()}
              
// // // // //               {/* Pagination info */}
// // // // //               {totalPages > 1 && (
// // // // //                 <div className="text-center mt-2 text-muted small">
// // // // //                   Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
// // // // //                 </div>
// // // // //               )}
// // // // //             </>
// // // // //           ) : (
// // // // //             <div className="text-center py-5">
// // // // //               <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
// // // // //               {searchTerm ? (
// // // // //                 <p>No services found matching "{searchTerm}"</p>
// // // // //               ) : (
// // // // //                 <p>No services available. Add your first service above!</p>
// // // // //               )}
// // // // //             </div>
// // // // //           )}
// // // // //         </Card.Body>
// // // // //       </Card>

// // // // //       {/* CSS for animation, hover effects, and rate display */}
// // // // //       <style jsx>{`
// // // // //         .table-responsive {
// // // // //           overflow-x: auto;
// // // // //           -webkit-overflow-scrolling: touch;
// // // // //         }
        
// // // // //         .table tbody tr {
// // // // //           transition: all 0.2s ease;
// // // // //         }
        
// // // // //         .table tbody tr:hover {
// // // // //           background-color: rgba(13, 110, 253, 0.05) !important;
// // // // //         }
        
// // // // //         .services-component .card {
// // // // //           transition: box-shadow 0.3s ease;
// // // // //         }
        
// // // // //         .services-component .card:hover {
// // // // //           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
// // // // //         }
        
// // // // //         .rate-display {
// // // // //           font-family: monospace;
// // // // //           white-space: nowrap;
// // // // //         }
// // // // //       `}</style>
// // // // //     </div>
// // // // //   );
// // // // // }

// // // // // export default Services;
// // // // import React, { useState, useEffect } from 'react';
// // // // import { 
// // // //   Table, 
// // // //   Form, 
// // // //   Button, 
// // // //   Alert, 
// // // //   Card, 
// // // //   Row, 
// // // //   Col, 
// // // //   InputGroup, 
// // // //   Badge,
// // // //   Spinner,
// // // //   OverlayTrigger,
// // // //   Tooltip,
// // // //   Pagination,
// // // //   Accordion,
// // // //   Nav,
// // // //   Tab
// // // // } from 'react-bootstrap';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { 
// // // //   faPlus, 
// // // //   faPencilAlt, 
// // // //   faTrash, 
// // // //   faCheck, 
// // // //   faTimes, 
// // // //   faInfoCircle,
// // // //   faCoins,
// // // //   faDownload,
// // // //   faVideo,
// // // //   faCamera,
// // // //   faEdit
// // // // } from '@fortawesome/free-solid-svg-icons';

// // // // // Service categories and subcategories structure
// // // // const SERVICE_CATEGORIES = {
// // // //   'pre-production': {
// // // //     name: 'Pre-Production',
// // // //     icon: faEdit,
// // // //     subcategories: {
// // // //       'part-1': {
// // // //         name: 'Part 1',
// // // //         services: ['Script', 'StoryBoard', 'Auditions', 'Recce', 'Research', 'PPM', 'Admin']
// // // //       },
// // // //       'part-1-shoot-location': {
// // // //         name: 'Part 1 - Shoot Location',
// // // //         services: ['Bunglow/Studio', 'Bunglow Staff/Electricity']
// // // //       }
// // // //     }
// // // //   },
// // // //   'production': {
// // // //     name: 'Production',
// // // //     icon: faCamera,
// // // //     subcategories: {
// // // //       'creative-team': {
// // // //         name: 'Part 2 - Creative Team',
// // // //         services: ['Director', 'Cinematographer', 'Executive Producer', 'Director\'s Assistant', '1st Assistant Director', '2nd Assistant Director', 'Assistant Cinematographer', 'Sound Recordist', 'Telepromter', 'BTS videographer']
// // // //       },
// // // //       'production-team': {
// // // //         name: 'Part 2 - Production Team',
// // // //         services: ['Production Manager', 'Production Assistant', 'Location Manager', 'Spot Boy']
// // // //       },
// // // //       'production-design': {
// // // //         name: 'Part 2 - Production Design',
// // // //         services: ['Art Director (Location Dressing, Props)']
// // // //       },
// // // //       'talent': {
// // // //         name: 'Part 2 - Talent',
// // // //         services: ['Casting Agency/Director', 'Kids', 'Cast', 'Extra']
// // // //       },
// // // //       'hair-makeup': {
// // // //         name: 'Part 2 - Hair & Make-UP',
// // // //         services: ['Make-Up Artist', 'Assistant HMU', 'Hair Dresser']
// // // //       },
// // // //       'wardrobe': {
// // // //         name: 'Part 2 - Wardrobe',
// // // //         services: ['Costume Stylist', 'Costume Sourcing', 'Press', 'Tailor']
// // // //       },
// // // //       'camera-grip': {
// // // //         name: 'Camera & Grip',
// // // //         services: ['Camera & Lenses', 'Focus Puller', 'Track Trolly', 'Dolly Panther', 'DIT']
// // // //       },
// // // //       'lights': {
// // // //         name: 'Lights',
// // // //         services: ['Gaffer', 'Best Boys/Light Man', 'BestBoy/Electrician', 'Lights', 'Gen Set+Diesel (125KVA)']
// // // //       },
// // // //       'vehicles': {
// // // //         name: 'Vehicles Hire',
// // // //         services: ['Production Vehicle', 'Production Tempo', 'Camera Equipment Van', 'Light Equipment Tempo', 'Vanity']
// // // //       },
// // // //       'catering': {
// // // //         name: 'Catering',
// // // //         services: ['Catering', 'Catering Transport']
// // // //       },
// // // //       'miscellaneous': {
// // // //         name: 'Miscellaneous',
// // // //         services: ['Miscellaneous/Novelty/Spotpurchase', 'HardDrive', 'Extra on set purchase', 'Tent, Chair, Walkie, PA System', 'Conveyance Fees']
// // // //       }
// // // //     }
// // // //   },
// // // //   'post-production': {
// // // //     name: 'Post Production',
// // // //     icon: faVideo,
// // // //     subcategories: {
// // // //       'post-production': {
// // // //         name: 'Post Production',
// // // //         services: ['Offline Editor', 'Adapts', 'Graphics', 'Online', 'Grade (all edits including)', 'Music Composer', 'Sound Studio', 'Sound Engg', 'Voice Over', 'Audio Edit']
// // // //       }
// // // //     }
// // // //   }
// // // // };

// // // // function Services() {
// // // //   const [services, setServices] = useState([]);
// // // //   const [newService, setNewService] = useState({
// // // //     service_name: '',
// // // //     rate_per_day: '',
// // // //     category: 'pre-production',
// // // //     subcategory: 'part-1'
// // // //   });
// // // //   const [editingId, setEditingId] = useState(null);
// // // //   const [error, setError] = useState('');
// // // //   const [success, setSuccess] = useState('');
// // // //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
// // // //   const [isLoading, setIsLoading] = useState(false);
// // // //   const [searchTerm, setSearchTerm] = useState('');
// // // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// // // //   const [activeCategory, setActiveCategory] = useState('pre-production');
// // // //   const [selectedSubcategory, setSelectedSubcategory] = useState('');
  
// // // //   // Pagination states
// // // //   const [currentPage, setCurrentPage] = useState(1);
// // // //   const [servicesPerPage] = useState(10);

// // // //   // Initialize with some sample data for demonstration
// // // //   useEffect(() => {
// // // //     loadServices();
// // // //   }, []);

// // // //   // Reset to first page when search term changes
// // // //   useEffect(() => {
// // // //     setCurrentPage(1);
// // // //   }, [searchTerm]);

// // // //   // Update subcategory when category changes
// // // //   useEffect(() => {
// // // //     const firstSubcategory = Object.keys(SERVICE_CATEGORIES[activeCategory]?.subcategories || {})[0];
// // // //     setNewService(prev => ({
// // // //       ...prev,
// // // //       category: activeCategory,
// // // //       subcategory: firstSubcategory || ''
// // // //     }));
// // // //   }, [activeCategory]);

// // // //   const loadServices = async () => {
// // // //     try {
// // // //       setIsLoading(true);
// // // //       // Simulate API call - replace with actual API call
// // // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // // //       // Sample data with categories
// // // //       const sampleServices = [
// // // //         { id: 1, service_name: 'Director', rate_per_day: '15000', category: 'production', subcategory: 'creative-team' },
// // // //         { id: 2, service_name: 'Cinematographer', rate_per_day: '12000', category: 'production', subcategory: 'creative-team' },
// // // //         { id: 3, service_name: 'Script', rate_per_day: '5000', category: 'pre-production', subcategory: 'part-1' },
// // // //         { id: 4, service_name: 'Offline Editor', rate_per_day: '8000', category: 'post-production', subcategory: 'post-production' },
// // // //       ];
// // // //       setServices(sampleServices);
// // // //       setIsLoading(false);
// // // //     } catch (error) {
// // // //       console.error('Error loading services:', error);
// // // //       setError('Failed to load services. Please try again.');
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleCreate = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       if (!newService.service_name.trim()) {
// // // //         setError('Service name cannot be empty');
// // // //         return;
// // // //       }
      
// // // //       if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
// // // //         setError('Rate per day must be a positive number');
// // // //         return;
// // // //       }
      
// // // //       setIsLoading(true);
      
// // // //       // Simulate API call - replace with actual API call
// // // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // // //       const newServiceData = {
// // // //         id: Date.now(), // Replace with actual ID from API
// // // //         ...newService,
// // // //         rate_per_day: parseFloat(newService.rate_per_day)
// // // //       };
      
// // // //       setServices(prev => [...prev, newServiceData]);
// // // //       setNewService({ 
// // // //         service_name: '', 
// // // //         rate_per_day: '', 
// // // //         category: activeCategory,
// // // //         subcategory: Object.keys(SERVICE_CATEGORIES[activeCategory]?.subcategories || {})[0] || ''
// // // //       });
// // // //       setError('');
// // // //       setSuccess('Service created successfully!');
      
// // // //       setTimeout(() => setSuccess(''), 3000);
// // // //     } catch (error) {
// // // //       setError('Failed to create service');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleUpdate = async (id, updatedData) => {
// // // //     try {
// // // //       if (!updatedData.service_name.trim()) {
// // // //         setError('Service name cannot be empty');
// // // //         return;
// // // //       }
      
// // // //       if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
// // // //         setError('Rate per day must be a positive number');
// // // //         return;
// // // //       }
      
// // // //       setIsLoading(true);
      
// // // //       // Simulate API call - replace with actual API call
// // // //       await new Promise(resolve => setTimeout(resolve, 1000));
      
// // // //       setServices(prev => prev.map(s => 
// // // //         s.id === id ? { ...s, ...updatedData } : s
// // // //       ));
      
// // // //       setEditingId(null);
// // // //       setShowUpdateNotice(false);
// // // //       setError('');
// // // //       setSuccess('Service updated successfully!');
      
// // // //       setTimeout(() => setSuccess(''), 3000);
// // // //     } catch (error) {
// // // //       setError('Failed to update service');
// // // //     } finally {
// // // //       setIsLoading(false);
// // // //     }
// // // //   };

// // // //   const handleDelete = async (id, serviceName) => {
// // // //     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
// // // //       try {
// // // //         setIsLoading(true);
        
// // // //         // Simulate API call - replace with actual API call
// // // //         await new Promise(resolve => setTimeout(resolve, 1000));
        
// // // //         setServices(prev => prev.filter(s => s.id !== id));
// // // //         setError('');
// // // //         setSuccess('Service deleted successfully!');
        
// // // //         setTimeout(() => setSuccess(''), 3000);
// // // //       } catch (error) {
// // // //         setError('Failed to delete service');
// // // //       } finally {
// // // //         setIsLoading(false);
// // // //       }
// // // //     }
// // // //   };

// // // //   const handleQuickAdd = (serviceName) => {
// // // //     setNewService(prev => ({
// // // //       ...prev,
// // // //       service_name: serviceName
// // // //     }));
// // // //   };

// // // //   // Filter services based on search term and selected subcategory
// // // //   const filteredServices = services.filter(service => {
// // // //     const matchesSearch = service.service_name.toLowerCase().includes(searchTerm.toLowerCase());
// // // //     const matchesCategory = !selectedSubcategory || 
// // // //       (service.category === activeCategory && service.subcategory === selectedSubcategory);
// // // //     return matchesSearch && matchesCategory;
// // // //   });

// // // //   // Pagination logic
// // // //   const indexOfLastService = currentPage * servicesPerPage;
// // // //   const indexOfFirstService = indexOfLastService - servicesPerPage;
// // // //   const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
// // // //   const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

// // // //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // // //   const renderPagination = () => {
// // // //     if (totalPages <= 1) return null;

// // // //     return (
// // // //       <div className="d-flex justify-content-center mt-4">
// // // //         <Pagination>
// // // //           <Pagination.Prev 
// // // //             onClick={() => paginate(currentPage - 1)}
// // // //             disabled={currentPage === 1}
// // // //           />
          
// // // //           {[...Array(totalPages)].map((_, index) => {
// // // //             const pageNumber = index + 1;
// // // //             const isActive = pageNumber === currentPage;
            
// // // //             if (
// // // //               pageNumber === 1 || 
// // // //               pageNumber === totalPages || 
// // // //               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
// // // //             ) {
// // // //               return (
// // // //                 <Pagination.Item
// // // //                   key={pageNumber}
// // // //                   active={isActive}
// // // //                   onClick={() => paginate(pageNumber)}
// // // //                 >
// // // //                   {pageNumber}
// // // //                 </Pagination.Item>
// // // //               );
// // // //             }
            
// // // //             if (
// // // //               (pageNumber === currentPage - 2 && currentPage > 3) || 
// // // //               (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
// // // //             ) {
// // // //               return <Pagination.Ellipsis key={pageNumber} />;
// // // //             }
            
// // // //             return null;
// // // //           })}
          
// // // //           <Pagination.Next 
// // // //             onClick={() => paginate(currentPage + 1)}
// // // //             disabled={currentPage === totalPages}
// // // //           />
// // // //         </Pagination>
// // // //       </div>
// // // //     );
// // // //   };

// // // //   const downloadServicesPDF = () => {
// // // //     setIsGeneratingPDF(true);
// // // //     setTimeout(() => {
// // // //       setSuccess('PDF download feature will be implemented with actual data!');
// // // //       setIsGeneratingPDF(false);
// // // //       setTimeout(() => setSuccess(''), 3000);
// // // //     }, 2000);
// // // //   };

// // // //   return (
// // // //     <div className="services-component">
// // // //       <div className="d-flex justify-content-between align-items-center mb-4">
// // // //         <div>
// // // //           <h4 className="mb-1">Service Management</h4>
// // // //           <p className="text-muted mb-0">Manage studio services organized by production categories</p>
// // // //         </div>
// // // //         <Badge bg="info" className="py-2 px-3">
// // // //           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // // //           {services.length} Service{services.length !== 1 ? 's' : ''}
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

// // // //       {showUpdateNotice && (
// // // //         <Alert variant="info" className="text-center">
// // // //           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// // // //           You've made changes. Click <strong>Update</strong> to save.
// // // //         </Alert>
// // // //       )}

// // // //       {/* Category Tabs */}
// // // //       <Tab.Container activeKey={activeCategory} onSelect={setActiveCategory}>
// // // //         <Card className="shadow-sm border-0 mb-4">
// // // //           <Card.Header className="bg-light">
// // // //             <Nav variant="pills" className="flex-row">
// // // //               {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// // // //                 <Nav.Item key={key}>
// // // //                   <Nav.Link eventKey={key} className="text-decoration-none">
// // // //                     <FontAwesomeIcon icon={category.icon} className="me-2" />
// // // //                     {category.name}
// // // //                   </Nav.Link>
// // // //                 </Nav.Item>
// // // //               ))}
// // // //             </Nav>
// // // //           </Card.Header>

// // // //           <Card.Body>
// // // //             <Tab.Content>
// // // //               {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
// // // //                 <Tab.Pane key={categoryKey} eventKey={categoryKey}>
// // // //                   {/* Add New Service Form */}
// // // //                   <Card className="mb-4 border">
// // // //                     <Card.Body>
// // // //                       <Card.Title className="mb-3">Add New {category.name} Service</Card.Title>
// // // //                       <Form onSubmit={handleCreate}>
// // // //                         <Row>
// // // //                           <Col md={3}>
// // // //                             <Form.Group className="mb-3">
// // // //                               <Form.Label>Subcategory</Form.Label>
// // // //                               <Form.Select
// // // //                                 value={newService.subcategory}
// // // //                                 onChange={(e) => setNewService({...newService, subcategory: e.target.value})}
// // // //                                 required
// // // //                               >
// // // //                                 {Object.entries(category.subcategories || {}).map(([subKey, subcategory]) => (
// // // //                                   <option key={subKey} value={subKey}>
// // // //                                     {subcategory.name}
// // // //                                   </option>
// // // //                                 ))}
// // // //                               </Form.Select>
// // // //                             </Form.Group>
// // // //                           </Col>
// // // //                           <Col md={4}>
// // // //                             <Form.Group className="mb-3">
// // // //                               <Form.Label>Service Name</Form.Label>
// // // //                               <Form.Control
// // // //                                 type="text"
// // // //                                 value={newService.service_name}
// // // //                                 onChange={(e) => setNewService({...newService, service_name: e.target.value})}
// // // //                                 placeholder="Enter service name"
// // // //                                 required
// // // //                               />
// // // //                             </Form.Group>
// // // //                           </Col>
// // // //                           <Col md={3}>
// // // //                             <Form.Group className="mb-3">
// // // //                               <Form.Label>Rate per Day</Form.Label>
// // // //                               <InputGroup>
// // // //                                 <InputGroup.Text>₹</InputGroup.Text>
// // // //                                 <Form.Control
// // // //                                   type="number"
// // // //                                   value={newService.rate_per_day}
// // // //                                   onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// // // //                                   placeholder="0"
// // // //                                   required
// // // //                                 />
// // // //                               </InputGroup>
// // // //                             </Form.Group>
// // // //                           </Col>
// // // //                           <Col md={2} className="d-flex align-items-end">
// // // //                             <Button 
// // // //                               type="submit" 
// // // //                               variant="success" 
// // // //                               className="w-100"
// // // //                               disabled={isLoading}
// // // //                             >
// // // //                               {isLoading ? (
// // // //                                 <Spinner size="sm" />
// // // //                               ) : (
// // // //                                 <>
// // // //                                   <FontAwesomeIcon icon={faPlus} className="me-1" />
// // // //                                   Add
// // // //                                 </>
// // // //                               )}
// // // //                             </Button>
// // // //                           </Col>
// // // //                         </Row>
// // // //                       </Form>

// // // //                       {/* Quick Add Suggestions */}
// // // //                       {newService.subcategory && (
// // // //                         <div className="mt-3">
// // // //                           <small className="text-muted d-block mb-2">Quick add common services:</small>
// // // //                           <div className="d-flex flex-wrap gap-2">
// // // //                             {SERVICE_CATEGORIES[categoryKey].subcategories[newService.subcategory]?.services.map((serviceName) => (
// // // //                               <Button
// // // //                                 key={serviceName}
// // // //                                 variant="outline-secondary"
// // // //                                 size="sm"
// // // //                                 onClick={() => handleQuickAdd(serviceName)}
// // // //                                 className="quick-add-btn"
// // // //                               >
// // // //                                 {serviceName}
// // // //                               </Button>
// // // //                             ))}
// // // //                           </div>
// // // //                         </div>
// // // //                       )}
// // // //                     </Card.Body>
// // // //                   </Card>

// // // //                   {/* Services List */}
// // // //                   <Card className="shadow-sm border-0">
// // // //                     <Card.Body>
// // // //                       <div className="d-flex justify-content-between align-items-center mb-3">
// // // //                         <Card.Title className="mb-0">{category.name} Services</Card.Title>
// // // //                         <div className="d-flex align-items-center gap-2">
// // // //                           <Form.Select
// // // //                             value={selectedSubcategory}
// // // //                             onChange={(e) => setSelectedSubcategory(e.target.value)}
// // // //                             style={{ maxWidth: '200px' }}
// // // //                           >
// // // //                             <option value="">All Subcategories</option>
// // // //                             {Object.entries(category.subcategories || {}).map(([subKey, subcategory]) => (
// // // //                               <option key={subKey} value={subKey}>
// // // //                                 {subcategory.name}
// // // //                               </option>
// // // //                             ))}
// // // //                           </Form.Select>
// // // //                           <Form.Control
// // // //                             type="text"
// // // //                             placeholder="Search services..."
// // // //                             value={searchTerm}
// // // //                             onChange={(e) => setSearchTerm(e.target.value)}
// // // //                             style={{ maxWidth: '200px' }}
// // // //                           />
// // // //                           <Button 
// // // //                             variant="outline-primary" 
// // // //                             onClick={downloadServicesPDF}
// // // //                             disabled={isGeneratingPDF}
// // // //                           >
// // // //                             {isGeneratingPDF ? (
// // // //                               <Spinner size="sm" />
// // // //                             ) : (
// // // //                               <FontAwesomeIcon icon={faDownload} />
// // // //                             )}
// // // //                           </Button>
// // // //                         </div>
// // // //                       </div>

// // // //                       {isLoading && !services.length ? (
// // // //                         <div className="text-center py-5">
// // // //                           <Spinner animation="border" variant="primary" />
// // // //                           <p className="mt-3">Loading services...</p>
// // // //                         </div>
// // // //                       ) : filteredServices.length > 0 ? (
// // // //                         <>
// // // //                           <div className="table-responsive">
// // // //                             <Table hover className="mb-0">
// // // //                               <thead className="bg-light">
// // // //                                 <tr>
// // // //                                   <th>Subcategory</th>
// // // //                                   <th>Service Name</th>
// // // //                                   <th>Rate per Day</th>
// // // //                                   <th style={{ width: '180px' }}>Actions</th>
// // // //                                 </tr>
// // // //                               </thead>
// // // //                               <tbody>
// // // //                                 {currentServices.map(service => (
// // // //                                   <tr key={service.id}>
// // // //                                     <td>
// // // //                                       <Badge bg="secondary" className="text-wrap">
// // // //                                         {SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory}
// // // //                                       </Badge>
// // // //                                     </td>
// // // //                                     <td>
// // // //                                       <Form.Control
// // // //                                         type="text"
// // // //                                         value={service.service_name}
// // // //                                         onChange={(e) => {
// // // //                                           if (editingId === service.id) {
// // // //                                             setServices(services.map(s => 
// // // //                                               s.id === service.id ? {...s, service_name: e.target.value} : s
// // // //                                             ));
// // // //                                             setShowUpdateNotice(true);
// // // //                                           }
// // // //                                         }}
// // // //                                         disabled={editingId !== service.id}
// // // //                                         className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
// // // //                                       />
// // // //                                     </td>
// // // //                                     <td>
// // // //                                       {editingId === service.id ? (
// // // //                                         <InputGroup>
// // // //                                           <InputGroup.Text>₹</InputGroup.Text>
// // // //                                           <Form.Control
// // // //                                             type="number"
// // // //                                             value={service.rate_per_day}
// // // //                                             onChange={(e) => {
// // // //                                               setServices(services.map(s => 
// // // //                                                 s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// // // //                                               ));
// // // //                                               setShowUpdateNotice(true);
// // // //                                             }}
// // // //                                             className="border-primary"
// // // //                                           />
// // // //                                         </InputGroup>
// // // //                                       ) : (
// // // //                                         <span className="fw-bold">₹{service.rate_per_day}</span>
// // // //                                       )}
// // // //                                     </td>
// // // //                                     <td>
// // // //                                       {editingId === service.id ? (
// // // //                                         <div className="d-flex gap-2">
// // // //                                           <Button 
// // // //                                             variant="primary" 
// // // //                                             size="sm" 
// // // //                                             onClick={() => handleUpdate(service.id, {
// // // //                                               service_name: service.service_name,
// // // //                                               rate_per_day: service.rate_per_day
// // // //                                             })}
// // // //                                             disabled={isLoading}
// // // //                                           >
// // // //                                             {isLoading ? <Spinner size="sm" /> : <><FontAwesomeIcon icon={faCheck} /> Update</>}
// // // //                                           </Button>
// // // //                                           <Button 
// // // //                                             variant="secondary" 
// // // //                                             size="sm"
// // // //                                             onClick={() => {
// // // //                                               setEditingId(null);
// // // //                                               setShowUpdateNotice(false);
// // // //                                               loadServices();
// // // //                                             }}
// // // //                                           >
// // // //                                             <FontAwesomeIcon icon={faTimes} /> Cancel
// // // //                                           </Button>
// // // //                                         </div>
// // // //                                       ) : (
// // // //                                         <div className="d-flex gap-2">
// // // //                                           <OverlayTrigger
// // // //                                             placement="top"
// // // //                                             overlay={<Tooltip>Edit Service</Tooltip>}
// // // //                                           >
// // // //                                             <Button 
// // // //                                               variant="outline-primary" 
// // // //                                               size="sm" 
// // // //                                               onClick={() => setEditingId(service.id)}
// // // //                                             >
// // // //                                               <FontAwesomeIcon icon={faPencilAlt} />
// // // //                                             </Button>
// // // //                                           </OverlayTrigger>
// // // //                                           <OverlayTrigger
// // // //                                             placement="top"
// // // //                                             overlay={<Tooltip>Delete Service</Tooltip>}
// // // //                                           >
// // // //                                             <Button 
// // // //                                               variant="outline-danger" 
// // // //                                               size="sm"
// // // //                                               onClick={() => handleDelete(service.id, service.service_name)}
// // // //                                             >
// // // //                                               <FontAwesomeIcon icon={faTrash} />
// // // //                                             </Button>
// // // //                                           </OverlayTrigger>
// // // //                                         </div>
// // // //                                       )}
// // // //                                     </td>
// // // //                                   </tr>
// // // //                                 ))}
// // // //                               </tbody>
// // // //                             </Table>
// // // //                           </div>
                          
// // // //                           {renderPagination()}
                          
// // // //                           {totalPages > 1 && (
// // // //                             <div className="text-center mt-2 text-muted small">
// // // //                               Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
// // // //                             </div>
// // // //                           )}
// // // //                         </>
// // // //                       ) : (
// // // //                         <div className="text-center py-5">
// // // //                           <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
// // // //                           {searchTerm || selectedSubcategory ? (
// // // //                             <p>No services found matching your filters</p>
// // // //                           ) : (
// // // //                             <p>No {category.name.toLowerCase()} services available. Add your first service above!</p>
// // // //                           )}
// // // //                         </div>
// // // //                       )}
// // // //                     </Card.Body>
// // // //                   </Card>
// // // //                 </Tab.Pane>
// // // //               ))}
// // // //             </Tab.Content>
// // // //           </Card.Body>
// // // //         </Card>
// // // //       </Tab.Container>

// // // //       <style jsx>{`
// // // //         .services-component .nav-pills .nav-link {
// // // //           color: #6c757d;
// // // //           border-radius: 0.375rem;
// // // //           margin-right: 0.5rem;
// // // //           transition: all 0.2s ease;
// // // //         }
        
// // // //         .services-component .nav-pills .nav-link:hover {
// // // //           background-color: rgba(13, 110, 253, 0.1);
// // // //           color: #0d6efd;
// // // //         }
        
// // // //         .services-component .nav-pills .nav-link.active {
// // // //           background-color: #0d6efd;
// // // //           color: white;
// // // //         }
        
// // // //         .quick-add-btn {
// // // //           transition: all 0.2s ease;
// // // //         }
        
// // // //         .quick-add-btn:hover {
// // // //           transform: translateY(-1px);
// // // //           box-shadow: 0 2px 4px rgba(0,0,0,0.1);
// // // //         }
        
// // // //         .table tbody tr {
// // // //           transition: all 0.2s ease;
// // // //         }
        
// // // //         .table tbody tr:hover {
// // // //           background-color: rgba(13, 110, 253, 0.05) !important;
// // // //         }
        
// // // //         .services-component .card {
// // // //           transition: box-shadow 0.3s ease;
// // // //         }
        
// // // //         .services-component .card:hover {
// // // //           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
// // // //         }
// // // //       `}</style>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default Services;
// // // import React, { useState, useEffect } from 'react';
// // // import { 
// // //   Table, 
// // //   Form, 
// // //   Button, 
// // //   Alert, 
// // //   Card, 
// // //   Row, 
// // //   Col, 
// // //   InputGroup, 
// // //   Badge,
// // //   Spinner,
// // //   OverlayTrigger,
// // //   Tooltip,
// // //   Pagination,
// // //   Nav,
// // //   Tab
// // // } from 'react-bootstrap';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { 
// // //   faPlus, 
// // //   faPencilAlt, 
// // //   faTrash, 
// // //   faCheck, 
// // //   faTimes, 
// // //   faInfoCircle,
// // //   faCoins,
// // //   faDownload,
// // //   faVideo,
// // //   faCamera,
// // //   faEdit
// // // } from '@fortawesome/free-solid-svg-icons';

// // // // Import your API functions
// // // import { fetchServices, createService, updateService, deleteService } from '../../services/api';
// // // import { jsPDF } from "jspdf";
// // // import autoTable from 'jspdf-autotable';
// // // import Logo from '../../assets/Logo.png';

// // // // Service categories and subcategories structure (for organization only)
// // // const SERVICE_CATEGORIES = {
// // //   'pre-production': {
// // //     name: 'Pre-Production',
// // //     icon: faEdit,
// // //     subcategories: {
// // //       'part-1': {
// // //         name: 'Part 1 - Creative Development'
// // //       },
// // //       'part-1-shoot-location': {
// // //         name: 'Part 1 - Shoot Location'
// // //       },
// // //       'legal-permits': {
// // //         name: 'Legal & Permits'
// // //       },
// // //       'logistics': {
// // //         name: 'Logistics & Planning'
// // //       }
// // //     }
// // //   },
// // //   'production': {
// // //     name: 'Production',
// // //     icon: faCamera,
// // //     subcategories: {
// // //       'creative-team': {
// // //         name: 'Part 2 - Creative Team'
// // //       },
// // //       'production-team': {
// // //         name: 'Part 2 - Production Team'
// // //       },
// // //       'production-design': {
// // //         name: 'Part 2 - Production Design'
// // //       },
// // //       'talent': {
// // //         name: 'Part 2 - Talent'
// // //       },
// // //       'hair-makeup': {
// // //         name: 'Part 2 - Hair & Make-UP'
// // //       },
// // //       'wardrobe': {
// // //         name: 'Part 2 - Wardrobe'
// // //       },
// // //       'camera-grip': {
// // //         name: 'Camera & Grip'
// // //       },
// // //       'lights': {
// // //         name: 'Lights'
// // //       },
// // //       'vehicles': {
// // //         name: 'Vehicles Hire'
// // //       },
// // //       'catering': {
// // //         name: 'Catering'
// // //       },
// // //       'miscellaneous': {
// // //         name: 'Miscellaneous'
// // //       }
// // //     }
// // //   },
// // //   'post-production': {
// // //     name: 'Post Production',
// // //     icon: faVideo,
// // //     subcategories: {
// // //       'editing': {
// // //         name: 'Editing & Graphics'
// // //       },
// // //       'audio': {
// // //         name: 'Audio Post Production'
// // //       },
// // //       'delivery': {
// // //         name: 'Delivery & Distribution'
// // //       }
// // //     }
// // //   }
// // // };

// // // function Services() {
// // //   const [services, setServices] = useState([]);
// // //   const [newService, setNewService] = useState({
// // //     service_name: '',
// // //     rate_per_day: '',
// // //     category: 'pre-production',
// // //     subcategory: 'part-1'
// // //   });
// // //   const [editingId, setEditingId] = useState(null);
// // //   const [error, setError] = useState('');
// // //   const [success, setSuccess] = useState('');
// // //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
// // //   const [isLoading, setIsLoading] = useState(false);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// // //   const [activeCategory, setActiveCategory] = useState('pre-production');
// // //   const [selectedSubcategory, setSelectedSubcategory] = useState('');
  
// // //   // Pagination states
// // //   const [currentPage, setCurrentPage] = useState(1);
// // //   const [servicesPerPage] = useState(10);

// // //   // Load services on component mount
// // //   useEffect(() => {
// // //     loadServices();
// // //   }, []);

// // //   // Reset to first page when search term changes
// // //   useEffect(() => {
// // //     setCurrentPage(1);
// // //   }, [searchTerm]);

// // //   // Update subcategory when category changes in form
// // //   useEffect(() => {
// // //     const firstSubcategory = Object.keys(SERVICE_CATEGORIES[newService.category]?.subcategories || {})[0];
// // //     setNewService(prev => ({
// // //       ...prev,
// // //       subcategory: firstSubcategory || ''
// // //     }));
// // //   }, [newService.category]);

// // //   // Load services from real API
// // //   const loadServices = async () => {
// // //     try {
// // //       setIsLoading(true);
// // //       const response = await fetchServices();
// // //       setServices(response.data);
// // //       setError('');
// // //     } catch (error) {
// // //       console.error('Error loading services:', error);
// // //       setError('Failed to load services. Please try again.');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Create service using real API
// // //   const handleCreate = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       if (!newService.service_name.trim()) {
// // //         setError('Service name cannot be empty');
// // //         return;
// // //       }
      
// // //       if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
// // //         setError('Rate per day must be a positive number');
// // //         return;
// // //       }
      
// // //       setIsLoading(true);
      
// // //       // Create service data to send to API
// // //       const serviceData = {
// // //         service_name: newService.service_name.trim(),
// // //         rate_per_day: parseFloat(newService.rate_per_day),
// // //         category: newService.category,
// // //         subcategory: newService.subcategory
// // //       };
      
// // //       // Call real API
// // //       await createService(serviceData);
      
// // //       // Reset form but keep category/subcategory for convenience
// // //       setNewService({ 
// // //         service_name: '', 
// // //         rate_per_day: '', 
// // //         category: newService.category,
// // //         subcategory: newService.subcategory
// // //       });
      
// // //       // Reload services from database
// // //       await loadServices();
      
// // //       setError('');
// // //       setSuccess('Service created successfully!');
// // //       setTimeout(() => setSuccess(''), 3000);
      
// // //     } catch (error) {
// // //       console.error('Error creating service:', error);
// // //       setError(error.response?.data?.error || 'Failed to create service');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Update service using real API
// // //   const handleUpdate = async (id, updatedData) => {
// // //     try {
// // //       if (!updatedData.service_name.trim()) {
// // //         setError('Service name cannot be empty');
// // //         return;
// // //       }
      
// // //       if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
// // //         setError('Rate per day must be a positive number');
// // //         return;
// // //       }
      
// // //       setIsLoading(true);
      
// // //       // Call real API
// // //       await updateService(id, {
// // //         service_name: updatedData.service_name.trim(),
// // //         rate_per_day: parseFloat(updatedData.rate_per_day),
// // //         category: updatedData.category,
// // //         subcategory: updatedData.subcategory
// // //       });
      
// // //       // Reload services from database
// // //       await loadServices();
      
// // //       setEditingId(null);
// // //       setShowUpdateNotice(false);
// // //       setError('');
// // //       setSuccess('Service updated successfully!');
// // //       setTimeout(() => setSuccess(''), 3000);
      
// // //     } catch (error) {
// // //       console.error('Error updating service:', error);
// // //       setError(error.response?.data?.error || 'Failed to update service');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   // Delete service using real API
// // //   const handleDelete = async (id, serviceName) => {
// // //     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
// // //       try {
// // //         setIsLoading(true);
        
// // //         // Call real API
// // //         await deleteService(id);
        
// // //         // Reload services from database
// // //         await loadServices();
        
// // //         setError('');
// // //         setSuccess('Service deleted successfully!');
// // //         setTimeout(() => setSuccess(''), 3000);
        
// // //       } catch (error) {
// // //         console.error('Error deleting service:', error);
// // //         setError(error.response?.data?.error || 'Failed to delete service');
// // //       } finally {
// // //         setIsLoading(false);
// // //       }
// // //     }
// // //   };

// // //   // Download PDF function
// // //   const downloadServicesPDF = () => {
// // //     setIsGeneratingPDF(true);
    
// // //     try {
// // //       const doc = new jsPDF();
      
// // //       // Add logo
// // //       const imgData = Logo;
// // //       const pageWidth = doc.internal.pageSize.getWidth();
// // //       const logoWidth = 50;
// // //       const logoHeight = 50;
// // //       const logoX = (pageWidth - logoWidth) / 2;
// // //       doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
// // //       // Add title
// // //       doc.setFontSize(20);
// // //       doc.setTextColor(40, 40, 40);
// // //       doc.text('Services List', 14, 75);
      
// // //       // Add current date
// // //       const today = new Date();
// // //       const dateStr = today.toLocaleDateString('en-IN', {
// // //         year: 'numeric',
// // //         month: 'long',
// // //         day: 'numeric'
// // //       });
// // //       doc.setFontSize(10);
// // //       doc.setTextColor(100, 100, 100);
// // //       doc.text(`Generated on: ${dateStr}`, 14, 85);
      
// // //       // Create table with services data
// // //       const tableColumn = ['Service Name', 'Rate per Day (Rs.)', 'Category', 'Subcategory'];
// // //       const tableRows = [];
      
// // //       filteredServices.forEach(service => {
// // //         const serviceData = [
// // //           service.service_name,
// // //           service.rate_per_day.toString(),
// // //           SERVICE_CATEGORIES[service.category]?.name || service.category,
// // //           SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory
// // //         ];
// // //         tableRows.push(serviceData);
// // //       });
      
// // //       // Generate the PDF table
// // //       autoTable(doc, {
// // //         head: [tableColumn],
// // //         body: tableRows,
// // //         startY: 90,
// // //         theme: 'grid',
// // //         styles: { fontSize: 8, cellPadding: 3 },
// // //         headStyles: { fillColor: [66, 133, 244], textColor: 255 },
// // //         alternateRowStyles: { fillColor: [240, 240, 240] }
// // //       });
      
// // //       // Add total count at the bottom
// // //       const finalY = doc.lastAutoTable?.finalY || 95;
// // //       doc.setFontSize(10);
// // //       doc.setTextColor(100, 100, 100);
// // //       doc.text(`Total Services: ${filteredServices.length}`, 14, finalY + 10);
      
// // //       // Save the PDF
// // //       doc.save('services-list.pdf');
      
// // //       setSuccess('Services list downloaded successfully!');
// // //       setTimeout(() => setSuccess(''), 3000);
// // //     } catch (error) {
// // //       console.error('Error generating PDF:', error);
// // //       setError('Failed to generate PDF. Please try again.');
// // //     } finally {
// // //       setIsGeneratingPDF(false);
// // //     }
// // //   };

// // //   // Filter services based on search term and selected subcategory
// // //   const filteredServices = services.filter(service => {
// // //     const matchesSearch = service.service_name.toLowerCase().includes(searchTerm.toLowerCase());
// // //     const matchesCategory = !selectedSubcategory || 
// // //       (service.category === activeCategory && service.subcategory === selectedSubcategory);
// // //     return matchesSearch && matchesCategory;
// // //   });

// // //   // Pagination logic
// // //   const indexOfLastService = currentPage * servicesPerPage;
// // //   const indexOfFirstService = indexOfLastService - servicesPerPage;
// // //   const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
// // //   const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

// // //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // //   const renderPagination = () => {
// // //     if (totalPages <= 1) return null;

// // //     return (
// // //       <div className="d-flex justify-content-center mt-4">
// // //         <Pagination>
// // //           <Pagination.Prev 
// // //             onClick={() => paginate(currentPage - 1)}
// // //             disabled={currentPage === 1}
// // //           />
          
// // //           {[...Array(totalPages)].map((_, index) => {
// // //             const pageNumber = index + 1;
// // //             const isActive = pageNumber === currentPage;
            
// // //             if (
// // //               pageNumber === 1 || 
// // //               pageNumber === totalPages || 
// // //               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
// // //             ) {
// // //               return (
// // //                 <Pagination.Item
// // //                   key={pageNumber}
// // //                   active={isActive}
// // //                   onClick={() => paginate(pageNumber)}
// // //                 >
// // //                   {pageNumber}
// // //                 </Pagination.Item>
// // //               );
// // //             }
            
// // //             if (
// // //               (pageNumber === currentPage - 2 && currentPage > 3) || 
// // //               (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
// // //             ) {
// // //               return <Pagination.Ellipsis key={pageNumber} />;
// // //             }
            
// // //             return null;
// // //           })}
          
// // //           <Pagination.Next 
// // //             onClick={() => paginate(currentPage + 1)}
// // //             disabled={currentPage === totalPages}
// // //           />
// // //         </Pagination>
// // //       </div>
// // //     );
// // //   };

// // //   return (
// // //     <div className="services-component">
// // //       <div className="d-flex justify-content-between align-items-center mb-4">
// // //         <div>
// // //           <h4 className="mb-1">Service Management</h4>
// // //           <p className="text-muted mb-0">Manage studio services organized by production categories</p>
// // //         </div>
// // //         <Badge bg="info" className="py-2 px-3">
// // //           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// // //           {services.length} Service{services.length !== 1 ? 's' : ''}
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

// // //       {showUpdateNotice && (
// // //         <Alert variant="info" className="text-center">
// // //           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// // //           You've made changes. Click <strong>Update</strong> to save.
// // //         </Alert>
// // //       )}

// // //       {/* Add New Service Form */}
// // //       <Card className="mb-4 border shadow-sm">
// // //         <Card.Body>
// // //           <Card.Title className="mb-3">
// // //             <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />
// // //             Add New Service
// // //           </Card.Title>
// // //           <Form onSubmit={handleCreate}>
// // //             <Row>
// // //               <Col md={3}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Category</Form.Label>
// // //                   <Form.Select
// // //                     value={newService.category}
// // //                     onChange={(e) => setNewService({...newService, category: e.target.value})}
// // //                     required
// // //                   >
// // //                     {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// // //                       <option key={key} value={key}>
// // //                         {category.name}
// // //                       </option>
// // //                     ))}
// // //                   </Form.Select>
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={3}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Subcategory</Form.Label>
// // //                   <Form.Select
// // //                     value={newService.subcategory}
// // //                     onChange={(e) => setNewService({...newService, subcategory: e.target.value})}
// // //                     required
// // //                   >
// // //                     {Object.entries(SERVICE_CATEGORIES[newService.category]?.subcategories || {}).map(([subKey, subcategory]) => (
// // //                       <option key={subKey} value={subKey}>
// // //                         {subcategory.name}
// // //                       </option>
// // //                     ))}
// // //                   </Form.Select>
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={3}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Service Name</Form.Label>
// // //                   <Form.Control
// // //                     type="text"
// // //                     value={newService.service_name}
// // //                     onChange={(e) => setNewService({...newService, service_name: e.target.value})}
// // //                     placeholder="Enter any service name..."
// // //                     required
// // //                   />
// // //                   <Form.Text className="text-muted">
// // //                     Type any service name for this category
// // //                   </Form.Text>
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={2}>
// // //                 <Form.Group className="mb-3">
// // //                   <Form.Label>Rate per Day</Form.Label>
// // //                   <InputGroup>
// // //                     <InputGroup.Text>₹</InputGroup.Text>
// // //                     <Form.Control
// // //                       type="number"
// // //                       value={newService.rate_per_day}
// // //                       onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// // //                       placeholder="0"
// // //                       required
// // //                     />
// // //                   </InputGroup>
// // //                 </Form.Group>
// // //               </Col>
// // //               <Col md={1} className="d-flex align-items-end">
// // //                 <Button 
// // //                   type="submit" 
// // //                   variant="success" 
// // //                   className="w-100"
// // //                   disabled={isLoading}
// // //                   style={{ marginBottom: '1.5rem' }}
// // //                 >
// // //                   {isLoading ? (
// // //                     <Spinner size="sm" />
// // //                   ) : (
// // //                     <FontAwesomeIcon icon={faPlus} />
// // //                   )}
// // //                 </Button>
// // //               </Col>
// // //             </Row>
// // //           </Form>
// // //         </Card.Body>
// // //       </Card>

// // //       {/* Category Tabs */}
// // //       <Tab.Container activeKey={activeCategory} onSelect={setActiveCategory}>
// // //         <Card className="shadow-sm border-0">
// // //           <Card.Header className="bg-light">
// // //             <Nav variant="pills" className="flex-row">
// // //               {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// // //                 <Nav.Item key={key}>
// // //                   <Nav.Link eventKey={key} className="text-decoration-none">
// // //                     <FontAwesomeIcon icon={category.icon} className="me-2" />
// // //                     {category.name}
// // //                   </Nav.Link>
// // //                 </Nav.Item>
// // //               ))}
// // //             </Nav>
// // //           </Card.Header>

// // //           <Card.Body>
// // //             <Tab.Content>
// // //               {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
// // //                 <Tab.Pane key={categoryKey} eventKey={categoryKey}>
// // //                   <div className="d-flex justify-content-between align-items-center mb-3">
// // //                     <Card.Title className="mb-0">{category.name} Services</Card.Title>
// // //                     <div className="d-flex align-items-center gap-2">
// // //                       <Form.Select
// // //                         value={selectedSubcategory}
// // //                         onChange={(e) => setSelectedSubcategory(e.target.value)}
// // //                         style={{ maxWidth: '200px' }}
// // //                       >
// // //                         <option value="">All Subcategories</option>
// // //                         {Object.entries(category.subcategories || {}).map(([subKey, subcategory]) => (
// // //                           <option key={subKey} value={subKey}>
// // //                             {subcategory.name}
// // //                           </option>
// // //                         ))}
// // //                       </Form.Select>
// // //                       <Form.Control
// // //                         type="text"
// // //                         placeholder="Search services..."
// // //                         value={searchTerm}
// // //                         onChange={(e) => setSearchTerm(e.target.value)}
// // //                         style={{ maxWidth: '200px' }}
// // //                       />
// // //                       <Button 
// // //                         variant="outline-primary" 
// // //                         onClick={downloadServicesPDF}
// // //                         disabled={isGeneratingPDF}
// // //                         title="Download PDF"
// // //                       >
// // //                         {isGeneratingPDF ? (
// // //                           <Spinner size="sm" />
// // //                         ) : (
// // //                           <FontAwesomeIcon icon={faDownload} />
// // //                         )}
// // //                       </Button>
// // //                     </div>
// // //                   </div>

// // //                   {isLoading && !services.length ? (
// // //                     <div className="text-center py-5">
// // //                       <Spinner animation="border" variant="primary" />
// // //                       <p className="mt-3">Loading services...</p>
// // //                     </div>
// // //                   ) : filteredServices.length > 0 ? (
// // //                     <>
// // //                       <div className="table-responsive">
// // //                         <Table hover className="mb-0">
// // //                           <thead className="bg-light">
// // //                             <tr>
// // //                               <th>Subcategory</th>
// // //                               <th>Service Name</th>
// // //                               <th>Rate per Day</th>
// // //                               <th style={{ width: '180px' }}>Actions</th>
// // //                             </tr>
// // //                           </thead>
// // //                           <tbody>
// // //                             {currentServices.map(service => (
// // //                               <tr key={service.id}>
// // //                                 <td>
// // //                                   <Badge bg="secondary" className="text-wrap">
// // //                                     {SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory}
// // //                                   </Badge>
// // //                                 </td>
// // //                                 <td>
// // //                                   <Form.Control
// // //                                     type="text"
// // //                                     value={service.service_name}
// // //                                     onChange={(e) => {
// // //                                       if (editingId === service.id) {
// // //                                         setServices(services.map(s => 
// // //                                           s.id === service.id ? {...s, service_name: e.target.value} : s
// // //                                         ));
// // //                                         setShowUpdateNotice(true);
// // //                                       }
// // //                                     }}
// // //                                     disabled={editingId !== service.id}
// // //                                     className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
// // //                                   />
// // //                                 </td>
// // //                                 <td>
// // //                                   {editingId === service.id ? (
// // //                                     <InputGroup>
// // //                                       <InputGroup.Text>₹</InputGroup.Text>
// // //                                       <Form.Control
// // //                                         type="number"
// // //                                         value={service.rate_per_day}
// // //                                         onChange={(e) => {
// // //                                           setServices(services.map(s => 
// // //                                             s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// // //                                           ));
// // //                                           setShowUpdateNotice(true);
// // //                                         }}
// // //                                         className="border-primary"
// // //                                       />
// // //                                     </InputGroup>
// // //                                   ) : (
// // //                                     <span className="fw-bold">₹{service.rate_per_day}</span>
// // //                                   )}
// // //                                 </td>
// // //                                 <td>
// // //                                   {editingId === service.id ? (
// // //                                     <div className="d-flex gap-2">
// // //                                       <Button 
// // //                                         variant="primary" 
// // //                                         size="sm" 
// // //                                         onClick={() => handleUpdate(service.id, {
// // //                                           service_name: service.service_name,
// // //                                           rate_per_day: service.rate_per_day,
// // //                                           category: service.category,
// // //                                           subcategory: service.subcategory
// // //                                         })}
// // //                                         disabled={isLoading}
// // //                                       >
// // //                                         {isLoading ? <Spinner size="sm" /> : <><FontAwesomeIcon icon={faCheck} /> Update</>}
// // //                                       </Button>
// // //                                       <Button 
// // //                                         variant="secondary" 
// // //                                         size="sm"
// // //                                         onClick={() => {
// // //                                           setEditingId(null);
// // //                                           setShowUpdateNotice(false);
// // //                                           loadServices();
// // //                                         }}
// // //                                       >
// // //                                         <FontAwesomeIcon icon={faTimes} /> Cancel
// // //                                       </Button>
// // //                                     </div>
// // //                                   ) : (
// // //                                     <div className="d-flex gap-2">
// // //                                       <OverlayTrigger
// // //                                         placement="top"
// // //                                         overlay={<Tooltip>Edit Service</Tooltip>}
// // //                                       >
// // //                                         <Button 
// // //                                           variant="outline-primary" 
// // //                                           size="sm" 
// // //                                           onClick={() => setEditingId(service.id)}
// // //                                         >
// // //                                           <FontAwesomeIcon icon={faPencilAlt} />
// // //                                         </Button>
// // //                                       </OverlayTrigger>
// // //                                       <OverlayTrigger
// // //                                         placement="top"
// // //                                         overlay={<Tooltip>Delete Service</Tooltip>}
// // //                                       >
// // //                                         <Button 
// // //                                           variant="outline-danger" 
// // //                                           size="sm"
// // //                                           onClick={() => handleDelete(service.id, service.service_name)}
// // //                                         >
// // //                                           <FontAwesomeIcon icon={faTrash} />
// // //                                         </Button>
// // //                                       </OverlayTrigger>
// // //                                     </div>
// // //                                   )}
// // //                                 </td>
// // //                               </tr>
// // //                             ))}
// // //                           </tbody>
// // //                         </Table>
// // //                       </div>
                      
// // //                       {renderPagination()}
                      
// // //                       {totalPages > 1 && (
// // //                         <div className="text-center mt-2 text-muted small">
// // //                           Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
// // //                         </div>
// // //                       )}
// // //                     </>
// // //                   ) : (
// // //                     <div className="text-center py-5">
// // //                       <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
// // //                       {searchTerm || selectedSubcategory ? (
// // //                         <div>
// // //                           <p>No services found matching your filters</p>
// // //                           <p className="text-muted small">Try adjusting your search or filter criteria</p>
// // //                         </div>
// // //                       ) : (
// // //                         <div>
// // //                           <p>No {category.name.toLowerCase()} services available.</p>
// // //                           <p className="text-muted small">Use the form above to add your first service!</p>
// // //                         </div>
// // //                       )}
// // //                     </div>
// // //                   )}
// // //                 </Tab.Pane>
// // //               ))}
// // //             </Tab.Content>
// // //           </Card.Body>
// // //         </Card>
// // //       </Tab.Container>

// // //       <style jsx>{`
// // //         .services-component .nav-pills .nav-link {
// // //           color: #6c757d;
// // //           border-radius: 0.375rem;
// // //           margin-right: 0.5rem;
// // //           transition: all 0.2s ease;
// // //         }
        
// // //         .services-component .nav-pills .nav-link:hover {
// // //           background-color: rgba(13, 110, 253, 0.1);
// // //           color: #0d6efd;
// // //         }
        
// // //         .services-component .nav-pills .nav-link.active {
// // //           background-color: #0d6efd;
// // //           color: white;
// // //         }
        
// // //         .table tbody tr {
// // //           transition: all 0.2s ease;
// // //         }
        
// // //         .table tbody tr:hover {
// // //           background-color: rgba(13, 110, 253, 0.05) !important;
// // //         }
        
// // //         .services-component .card {
// // //           transition: box-shadow 0.3s ease;
// // //         }
        
// // //         .services-component .card:hover {
// // //           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
// // //         }
// // //       `}</style>
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
// //   Tooltip,
// //   Pagination,
// //   Nav,
// //   Tab
// // } from 'react-bootstrap';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { 
// //   faPlus, 
// //   faPencilAlt, 
// //   faTrash, 
// //   faCheck, 
// //   faTimes, 
// //   faInfoCircle,
// //   faCoins,
// //   faDownload,
// //   faVideo,
// //   faCamera,
// //   faEdit
// // } from '@fortawesome/free-solid-svg-icons';

// // // Import your API functions
// // import { fetchServices, createService, updateService, deleteService } from '../../services/api';
// // import { jsPDF } from "jspdf";
// // import autoTable from 'jspdf-autotable';
// // import Logo from '../../assets/Logo.png';

// // // Service categories and subcategories structure (for organization only)
// // const SERVICE_CATEGORIES = {
// //   'pre-production': {
// //     name: 'Pre-Production',
// //     icon: faEdit,
// //     subcategories: {
// //       'part-1': {
// //         name: 'Part 1 - Creative Development'
// //       },
// //       'part-1-shoot-location': {
// //         name: 'Part 1 - Shoot Location'
// //       },
// //       // 'legal-permits': {
// //       //   name: 'Legal & Permits'
// //       // },
// //       // 'logistics': {
// //       //   name: 'Logistics & Planning'
// //       // }
// //     }
// //   },
// //   'production': {
// //     name: 'Production',
// //     icon: faCamera,
// //     subcategories: {
// //       'creative-team': {
// //         name: 'Part 2 - Creative Team'
// //       },
// //       'production-team': {
// //         name: 'Part 2 - Production Team'
// //       },
// //       'production-design': {
// //         name: 'Part 2 - Production Design'
// //       },
// //       'talent': {
// //         name: 'Part 2 - Talent'
// //       },
// //       'hair-makeup': {
// //         name: 'Part 2 - Hair & Make-UP'
// //       },
// //       'wardrobe': {
// //         name: 'Part 2 - Wardrobe'
// //       },
// //       'camera-grip': {
// //         name: 'Camera & Grip'
// //       },
// //       'lights': {
// //         name: 'Lights'
// //       },
// //       'vehicles': {
// //         name: 'Vehicles Hire'
// //       },
// //       'catering': {
// //         name: 'Catering'
// //       },
// //       'miscellaneous': {
// //         name: 'Miscellaneous'
// //       }
// //     }
// //   },
// //   'post-production': {
// //     name: 'Post Production',
// //     icon: faVideo,
// //     subcategories: {
// //       'editing': {
// //         name: 'Editing & Graphics'
// //       },
// //       'audio': {
// //         name: 'Audio Post Production'
// //       },
// //       'delivery': {
// //         name: 'Delivery & Distribution'
// //       }
// //     }
// //   }
// // };

// // function Services() {
// //   const [services, setServices] = useState([]);
// //   const [newService, setNewService] = useState({
// //     service_name: '',
// //     rate_per_day: '',
// //     category: 'pre-production',
// //     subcategory: 'part-1'
// //   });
// //   const [editingId, setEditingId] = useState(null);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState('');
// //   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
// //   const [activeCategory, setActiveCategory] = useState('pre-production');
// //   const [selectedSubcategory, setSelectedSubcategory] = useState('');
  
// //   // Pagination states
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [servicesPerPage] = useState(10);

// //   // Load services on component mount
// //   useEffect(() => {
// //     loadServices();
// //   }, []);

// //   // Reset to first page when search term changes
// //   useEffect(() => {
// //     setCurrentPage(1);
// //   }, [searchTerm, activeCategory, selectedSubcategory]);

// //   // Reset subcategory filter when active category changes
// //   useEffect(() => {
// //     setSelectedSubcategory('');
// //   }, [activeCategory]);

// //   // Update subcategory when category changes in form
// //   useEffect(() => {
// //     const firstSubcategory = Object.keys(SERVICE_CATEGORIES[newService.category]?.subcategories || {})[0];
// //     setNewService(prev => ({
// //       ...prev,
// //       subcategory: firstSubcategory || ''
// //     }));
// //   }, [newService.category]);

// //   // Load services from real API
// //   const loadServices = async () => {
// //     try {
// //       setIsLoading(true);
// //       const response = await fetchServices();
// //       console.log('Loaded services:', response.data); // Debug log
// //       setServices(response.data);
// //       setError('');
// //     } catch (error) {
// //       console.error('Error loading services:', error);
// //       setError('Failed to load services. Please try again.');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Create service using real API
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
      
// //       // Create service data to send to API
// //       const serviceData = {
// //         service_name: newService.service_name.trim(),
// //         rate_per_day: parseFloat(newService.rate_per_day),
// //         category: newService.category,
// //         subcategory: newService.subcategory
// //       };
      
// //       console.log('Creating service:', serviceData); // Debug log
      
// //       // Call real API
// //       await createService(serviceData);
      
// //       // Reset form but keep category/subcategory for convenience
// //       setNewService({ 
// //         service_name: '', 
// //         rate_per_day: '', 
// //         category: newService.category,
// //         subcategory: newService.subcategory
// //       });
      
// //       // Reload services from database
// //       await loadServices();
      
// //       setError('');
// //       setSuccess('Service created successfully!');
// //       setTimeout(() => setSuccess(''), 3000);
      
// //     } catch (error) {
// //       console.error('Error creating service:', error);
// //       setError(error.response?.data?.error || 'Failed to create service');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Update service using real API
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
      
// //       // Call real API
// //       await updateService(id, {
// //         service_name: updatedData.service_name.trim(),
// //         rate_per_day: parseFloat(updatedData.rate_per_day),
// //         category: updatedData.category,
// //         subcategory: updatedData.subcategory
// //       });
      
// //       // Reload services from database
// //       await loadServices();
      
// //       setEditingId(null);
// //       setShowUpdateNotice(false);
// //       setError('');
// //       setSuccess('Service updated successfully!');
// //       setTimeout(() => setSuccess(''), 3000);
      
// //     } catch (error) {
// //       console.error('Error updating service:', error);
// //       setError(error.response?.data?.error || 'Failed to update service');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   // Delete service using real API
// //   const handleDelete = async (id, serviceName) => {
// //     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
// //       try {
// //         setIsLoading(true);
        
// //         // Call real API
// //         await deleteService(id);
        
// //         // Reload services from database
// //         await loadServices();
        
// //         setError('');
// //         setSuccess('Service deleted successfully!');
// //         setTimeout(() => setSuccess(''), 3000);
        
// //       } catch (error) {
// //         console.error('Error deleting service:', error);
// //         setError(error.response?.data?.error || 'Failed to delete service');
// //       } finally {
// //         setIsLoading(false);
// //       }
// //     }
// //   };

// //   // Download PDF function
// //   const downloadServicesPDF = () => {
// //     setIsGeneratingPDF(true);
    
// //     try {
// //       const doc = new jsPDF();
      
// //       // Add logo
// //       const imgData = Logo;
// //       const pageWidth = doc.internal.pageSize.getWidth();
// //       const logoWidth = 50;
// //       const logoHeight = 50;
// //       const logoX = (pageWidth - logoWidth) / 2;
// //       doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
// //       // Add title
// //       doc.setFontSize(20);
// //       doc.setTextColor(40, 40, 40);
// //       doc.text('Services List', 14, 75);
      
// //       // Add current date
// //       const today = new Date();
// //       const dateStr = today.toLocaleDateString('en-IN', {
// //         year: 'numeric',
// //         month: 'long',
// //         day: 'numeric'
// //       });
// //       doc.setFontSize(10);
// //       doc.setTextColor(100, 100, 100);
// //       doc.text(`Generated on: ${dateStr}`, 14, 85);
      
// //       // Create table with services data
// //       const tableColumn = ['Service Name', 'Rate per Day (Rs.)', 'Category', 'Subcategory'];
// //       const tableRows = [];
      
// //       filteredServices.forEach(service => {
// //         const serviceData = [
// //           service.service_name,
// //           service.rate_per_day.toString(),
// //           SERVICE_CATEGORIES[service.category]?.name || service.category,
// //           SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory
// //         ];
// //         tableRows.push(serviceData);
// //       });
      
// //       // Generate the PDF table
// //       autoTable(doc, {
// //         head: [tableColumn],
// //         body: tableRows,
// //         startY: 90,
// //         theme: 'grid',
// //         styles: { fontSize: 8, cellPadding: 3 },
// //         headStyles: { fillColor: [66, 133, 244], textColor: 255 },
// //         alternateRowStyles: { fillColor: [240, 240, 240] }
// //       });
      
// //       // Add total count at the bottom
// //       const finalY = doc.lastAutoTable?.finalY || 95;
// //       doc.setFontSize(10);
// //       doc.setTextColor(100, 100, 100);
// //       doc.text(`Total Services: ${filteredServices.length}`, 14, finalY + 10);
      
// //       // Save the PDF
// //       doc.save('services-list.pdf');
      
// //       setSuccess('Services list downloaded successfully!');
// //       setTimeout(() => setSuccess(''), 3000);
// //     } catch (error) {
// //       console.error('Error generating PDF:', error);
// //       setError('Failed to generate PDF. Please try again.');
// //     } finally {
// //       setIsGeneratingPDF(false);
// //     }
// //   };

// //   // FIXED: Filter services based on search term, active category, and selected subcategory
// //   const filteredServices = services.filter(service => {
// //     console.log('Filtering service:', service, 'activeCategory:', activeCategory); // Debug log
    
// //     // First filter by search term
// //     const matchesSearch = service.service_name.toLowerCase().includes(searchTerm.toLowerCase());
    
// //     // Then filter by active category (this is the main fix)
// //     const matchesActiveCategory = service.category === activeCategory;
    
// //     // Finally filter by subcategory if one is selected
// //     const matchesSubcategory = !selectedSubcategory || service.subcategory === selectedSubcategory;
    
// //     return matchesSearch && matchesActiveCategory && matchesSubcategory;
// //   });

// //   console.log('Filtered services for', activeCategory, ':', filteredServices); // Debug log

// //   // Pagination logic
// //   const indexOfLastService = currentPage * servicesPerPage;
// //   const indexOfFirstService = indexOfLastService - servicesPerPage;
// //   const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
// //   const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   const renderPagination = () => {
// //     if (totalPages <= 1) return null;

// //     return (
// //       <div className="d-flex justify-content-center mt-4">
// //         <Pagination>
// //           <Pagination.Prev 
// //             onClick={() => paginate(currentPage - 1)}
// //             disabled={currentPage === 1}
// //           />
          
// //           {[...Array(totalPages)].map((_, index) => {
// //             const pageNumber = index + 1;
// //             const isActive = pageNumber === currentPage;
            
// //             if (
// //               pageNumber === 1 || 
// //               pageNumber === totalPages || 
// //               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
// //             ) {
// //               return (
// //                 <Pagination.Item
// //                   key={pageNumber}
// //                   active={isActive}
// //                   onClick={() => paginate(pageNumber)}
// //                 >
// //                   {pageNumber}
// //                 </Pagination.Item>
// //               );
// //             }
            
// //             if (
// //               (pageNumber === currentPage - 2 && currentPage > 3) || 
// //               (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
// //             ) {
// //               return <Pagination.Ellipsis key={pageNumber} />;
// //             }
            
// //             return null;
// //           })}
          
// //           <Pagination.Next 
// //             onClick={() => paginate(currentPage + 1)}
// //             disabled={currentPage === totalPages}
// //           />
// //         </Pagination>
// //       </div>
// //     );
// //   };

// //   return (
// //     <div className="services-component">
// //       <div className="d-flex justify-content-between align-items-center mb-4">
// //         <div>
// //           <h4 className="mb-1">Service Management</h4>
// //           <p className="text-muted mb-0">Manage studio services organized by production categories</p>
// //         </div>
// //         <Badge bg="info" className="py-2 px-3">
// //           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
// //           {services.length} Total Service{services.length !== 1 ? 's' : ''}
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

// //       {showUpdateNotice && (
// //         <Alert variant="info" className="text-center">
// //           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
// //           You've made changes. Click <strong>Update</strong> to save.
// //         </Alert>
// //       )}

// //       {/* Add New Service Form */}
// //       <Card className="mb-4 border shadow-sm">
// //         <Card.Body>
// //           <Card.Title className="mb-3">
// //             <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />
// //             Add New Service
// //           </Card.Title>
// //           <Form onSubmit={handleCreate}>
// //             <Row>
// //               <Col md={3}>
// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Category</Form.Label>
// //                   <Form.Select
// //                     value={newService.category}
// //                     onChange={(e) => setNewService({...newService, category: e.target.value})}
// //                     required
// //                   >
// //                     {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// //                       <option key={key} value={key}>
// //                         {category.name}
// //                       </option>
// //                     ))}
// //                   </Form.Select>
// //                 </Form.Group>
// //               </Col>
// //               <Col md={3}>
// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Subcategory</Form.Label>
// //                   <Form.Select
// //                     value={newService.subcategory}
// //                     onChange={(e) => setNewService({...newService, subcategory: e.target.value})}
// //                     required
// //                   >
// //                     {Object.entries(SERVICE_CATEGORIES[newService.category]?.subcategories || {}).map(([subKey, subcategory]) => (
// //                       <option key={subKey} value={subKey}>
// //                         {subcategory.name}
// //                       </option>
// //                     ))}
// //                   </Form.Select>
// //                 </Form.Group>
// //               </Col>
// //               <Col md={3}>
// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Service Name</Form.Label>
// //                   <Form.Control
// //                     type="text"
// //                     value={newService.service_name}
// //                     onChange={(e) => setNewService({...newService, service_name: e.target.value})}
// //                     placeholder="Enter any service name..."
// //                     required
// //                   />
// //                   <Form.Text className="text-muted">
// //                     Type any service name for this category
// //                   </Form.Text>
// //                 </Form.Group>
// //               </Col>
// //               <Col md={2}>
// //                 <Form.Group className="mb-3">
// //                   <Form.Label>Rate per Day</Form.Label>
// //                   <InputGroup>
// //                     <InputGroup.Text>₹</InputGroup.Text>
// //                     <Form.Control
// //                       type="number"
// //                       value={newService.rate_per_day}
// //                       onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
// //                       placeholder="0"
// //                       required
// //                     />
// //                   </InputGroup>
// //                 </Form.Group>
// //               </Col>
// //               <Col md={1} className="d-flex align-items-end">
// //                 <Button 
// //                   type="submit" 
// //                   variant="success" 
// //                   className="w-100"
// //                   disabled={isLoading}
// //                   style={{ marginBottom: '1.5rem' }}
// //                 >
// //                   {isLoading ? (
// //                     <Spinner size="sm" />
// //                   ) : (
// //                     <FontAwesomeIcon icon={faPlus} />
// //                   )}
// //                 </Button>
// //               </Col>
// //             </Row>
// //           </Form>
// //         </Card.Body>
// //       </Card>

// //       {/* Category Tabs */}
// //       <Tab.Container activeKey={activeCategory} onSelect={setActiveCategory}>
// //         <Card className="shadow-sm border-0">
// //           <Card.Header className="bg-light">
// //             <Nav variant="pills" className="flex-row">
// //               {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
// //                 <Nav.Item key={key}>
// //                   <Nav.Link eventKey={key} className="text-decoration-none">
// //                     <FontAwesomeIcon icon={category.icon} className="me-2" />
// //                     {category.name}
// //                     <Badge bg="secondary" className="ms-2">
// //                       {services.filter(s => s.category === key).length}
// //                     </Badge>
// //                   </Nav.Link>
// //                 </Nav.Item>
// //               ))}
// //             </Nav>
// //           </Card.Header>

// //           <Card.Body>
// //             <Tab.Content>
// //               {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
// //                 <Tab.Pane key={categoryKey} eventKey={categoryKey}>
// //                   <div className="d-flex justify-content-between align-items-center mb-3">
// //                     <Card.Title className="mb-0">
// //                       {category.name} Services 
// //                       <Badge bg="info" className="ms-2">
// //                         {filteredServices.length} service{filteredServices.length !== 1 ? 's' : ''}
// //                       </Badge>
// //                     </Card.Title>
// //                     <div className="d-flex align-items-center gap-2">
// //                       <Form.Select
// //                         value={selectedSubcategory}
// //                         onChange={(e) => setSelectedSubcategory(e.target.value)}
// //                         style={{ maxWidth: '200px' }}
// //                       >
// //                         <option value="">All Subcategories</option>
// //                         {Object.entries(category.subcategories || {}).map(([subKey, subcategory]) => (
// //                           <option key={subKey} value={subKey}>
// //                             {subcategory.name}
// //                           </option>
// //                         ))}
// //                       </Form.Select>
// //                       <Form.Control
// //                         type="text"
// //                         placeholder="Search services..."
// //                         value={searchTerm}
// //                         onChange={(e) => setSearchTerm(e.target.value)}
// //                         style={{ maxWidth: '200px' }}
// //                       />
// //                       <Button 
// //                         variant="outline-primary" 
// //                         onClick={downloadServicesPDF}
// //                         disabled={isGeneratingPDF}
// //                         title="Download PDF"
// //                       >
// //                         {isGeneratingPDF ? (
// //                           <Spinner size="sm" />
// //                         ) : (
// //                           <FontAwesomeIcon icon={faDownload} />
// //                         )}
// //                       </Button>
// //                     </div>
// //                   </div>

// //                   {isLoading && !services.length ? (
// //                     <div className="text-center py-5">
// //                       <Spinner animation="border" variant="primary" />
// //                       <p className="mt-3">Loading services...</p>
// //                     </div>
// //                   ) : filteredServices.length > 0 ? (
// //                     <>
// //                       <div className="table-responsive">
// //                         <Table hover className="mb-0">
// //                           <thead className="bg-light">
// //                             <tr>
// //                               <th>Subcategory</th>
// //                               <th>Service Name</th>
// //                               <th>Rate per Day</th>
// //                               <th style={{ width: '180px' }}>Actions</th>
// //                             </tr>
// //                           </thead>
// //                           <tbody>
// //                             {currentServices.map(service => (
// //                               <tr key={service.id}>
// //                                 <td>
// //                                   <Badge bg="secondary" className="text-wrap">
// //                                     {SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory}
// //                                   </Badge>
// //                                 </td>
// //                                 <td>
// //                                   <Form.Control
// //                                     type="text"
// //                                     value={service.service_name}
// //                                     onChange={(e) => {
// //                                       if (editingId === service.id) {
// //                                         setServices(services.map(s => 
// //                                           s.id === service.id ? {...s, service_name: e.target.value} : s
// //                                         ));
// //                                         setShowUpdateNotice(true);
// //                                       }
// //                                     }}
// //                                     disabled={editingId !== service.id}
// //                                     className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
// //                                   />
// //                                 </td>
// //                                 <td>
// //                                   {editingId === service.id ? (
// //                                     <InputGroup>
// //                                       <InputGroup.Text>₹</InputGroup.Text>
// //                                       <Form.Control
// //                                         type="number"
// //                                         value={service.rate_per_day}
// //                                         onChange={(e) => {
// //                                           setServices(services.map(s => 
// //                                             s.id === service.id ? {...s, rate_per_day: e.target.value} : s
// //                                           ));
// //                                           setShowUpdateNotice(true);
// //                                         }}
// //                                         className="border-primary"
// //                                       />
// //                                     </InputGroup>
// //                                   ) : (
// //                                     <span className="fw-bold">₹{service.rate_per_day}</span>
// //                                   )}
// //                                 </td>
// //                                 <td>
// //                                   {editingId === service.id ? (
// //                                     <div className="d-flex gap-2">
// //                                       <Button 
// //                                         variant="primary" 
// //                                         size="sm" 
// //                                         onClick={() => handleUpdate(service.id, {
// //                                           service_name: service.service_name,
// //                                           rate_per_day: service.rate_per_day,
// //                                           category: service.category,
// //                                           subcategory: service.subcategory
// //                                         })}
// //                                         disabled={isLoading}
// //                                       >
// //                                         {isLoading ? <Spinner size="sm" /> : <><FontAwesomeIcon icon={faCheck} /> Update</>}
// //                                       </Button>
// //                                       <Button 
// //                                         variant="secondary" 
// //                                         size="sm"
// //                                         onClick={() => {
// //                                           setEditingId(null);
// //                                           setShowUpdateNotice(false);
// //                                           loadServices();
// //                                         }}
// //                                       >
// //                                         <FontAwesomeIcon icon={faTimes} /> Cancel
// //                                       </Button>
// //                                     </div>
// //                                   ) : (
// //                                     <div className="d-flex gap-2">
// //                                       <OverlayTrigger
// //                                         placement="top"
// //                                         overlay={<Tooltip>Edit Service</Tooltip>}
// //                                       >
// //                                         <Button 
// //                                           variant="outline-primary" 
// //                                           size="sm" 
// //                                           onClick={() => setEditingId(service.id)}
// //                                         >
// //                                           <FontAwesomeIcon icon={faPencilAlt} />
// //                                         </Button>
// //                                       </OverlayTrigger>
// //                                       <OverlayTrigger
// //                                         placement="top"
// //                                         overlay={<Tooltip>Delete Service</Tooltip>}
// //                                       >
// //                                         <Button 
// //                                           variant="outline-danger" 
// //                                           size="sm"
// //                                           onClick={() => handleDelete(service.id, service.service_name)}
// //                                         >
// //                                           <FontAwesomeIcon icon={faTrash} />
// //                                         </Button>
// //                                       </OverlayTrigger>
// //                                     </div>
// //                                   )}
// //                                 </td>
// //                               </tr>
// //                             ))}
// //                           </tbody>
// //                         </Table>
// //                       </div>
                      
// //                       {renderPagination()}
                      
// //                       {totalPages > 1 && (
// //                         <div className="text-center mt-2 text-muted small">
// //                           Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
// //                         </div>
// //                       )}
// //                     </>
// //                   ) : (
// //                     <div className="text-center py-5">
// //                       <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
// //                       {searchTerm || selectedSubcategory ? (
// //                         <div>
// //                           <p>No services found matching your filters</p>
// //                           <p className="text-muted small">Try adjusting your search or filter criteria</p>
// //                         </div>
// //                       ) : (
// //                         <div>
// //                           <p>No {category.name.toLowerCase()} services available.</p>
// //                           <p className="text-muted small">Use the form above to add your first service!</p>
// //                         </div>
// //                       )}
// //                     </div>
// //                   )}
// //                 </Tab.Pane>
// //               ))}
// //             </Tab.Content>
// //           </Card.Body>
// //         </Card>
// //       </Tab.Container>

// //       <style jsx>{`
// //         .services-component .nav-pills .nav-link {
// //           color: #6c757d;
// //           border-radius: 0.375rem;
// //           margin-right: 0.5rem;
// //           transition: all 0.2s ease;
// //         }
        
// //         .services-component .nav-pills .nav-link:hover {
// //           background-color: rgba(13, 110, 253, 0.1);
// //           color: #0d6efd;
// //         }
        
// //         .services-component .nav-pills .nav-link.active {
// //           background-color: #0d6efd;
// //           color: white;
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
//   Tooltip,
//   Pagination,
//   Nav,
//   Tab
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
//   faDownload,
//   faVideo,
//   faCamera,
//   faEdit
// } from '@fortawesome/free-solid-svg-icons';

// // Import your API functions
// import { fetchServices, createService, updateService, deleteService } from '../../services/api';
// import { jsPDF } from "jspdf";
// import autoTable from 'jspdf-autotable';
// import Logo from '../../assets/Logo.png';

// // Service categories and subcategories structure (for organization only)
// const SERVICE_CATEGORIES = {
//   'pre-production': {
//     name: 'Pre-Production',
//     icon: faEdit,
//     subcategories: {
//       'part-1': {
//         name: 'Part 1 - Creative Development'
//       },
//       'part-1-shoot-location': {
//         name: 'Part 1 - Shoot Location'
//       },
//       'legal-permits': {
//         name: 'Legal & Permits'
//       },
//       'logistics': {
//         name: 'Logistics & Planning'
//       }
//     }
//   },
//   'production': {
//     name: 'Production',
//     icon: faCamera,
//     subcategories: {
//       'creative-team': {
//         name: 'Part 2 - Creative Team'
//       },
//       'production-team': {
//         name: 'Part 2 - Production Team'
//       },
//       'production-design': {
//         name: 'Part 2 - Production Design'
//       },
//       'talent': {
//         name: 'Part 2 - Talent'
//       },
//       'hair-makeup': {
//         name: 'Part 2 - Hair & Make-UP'
//       },
//       'wardrobe': {
//         name: 'Part 2 - Wardrobe'
//       },
//       'camera-grip': {
//         name: 'Camera & Grip'
//       },
//       'lights': {
//         name: 'Lights'
//       },
//       'vehicles': {
//         name: 'Vehicles Hire'
//       },
//       'catering': {
//         name: 'Catering'
//       },
//       'miscellaneous': {
//         name: 'Miscellaneous'
//       }
//     }
//   },
//   'post-production': {
//     name: 'Post Production',
//     icon: faVideo,
//     subcategories: {
//       'editing': {
//         name: 'Editing & Graphics'
//       },
//       'audio': {
//         name: 'Audio Post Production'
//       },
//       'delivery': {
//         name: 'Delivery & Distribution'
//       }
//     }
//   }
// };

// function Services() {
//   const [services, setServices] = useState([]);
//   const [newService, setNewService] = useState({
//     service_name: '',
//     rate_per_day: '',
//     category: 'pre-production',
//     subcategory: 'part-1'
//   });
//   const [editingId, setEditingId] = useState(null);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showUpdateNotice, setShowUpdateNotice] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
//   const [activeCategory, setActiveCategory] = useState('pre-production');
//   const [selectedSubcategory, setSelectedSubcategory] = useState('');
  
//   // Pagination states
//   const [currentPage, setCurrentPage] = useState(1);
//   const [servicesPerPage] = useState(10);

//   // Load services on component mount
//   useEffect(() => {
//     loadServices();
//   }, []);

//   // Reset to first page when search term changes
//   useEffect(() => {
//     setCurrentPage(1);
//   }, [searchTerm, activeCategory, selectedSubcategory]);

//   // Reset subcategory filter when active category changes
//   useEffect(() => {
//     setSelectedSubcategory('');
//   }, [activeCategory]);

//   // Update subcategory when category changes in form
//   useEffect(() => {
//     const firstSubcategory = Object.keys(SERVICE_CATEGORIES[newService.category]?.subcategories || {})[0];
//     setNewService(prev => ({
//       ...prev,
//       subcategory: firstSubcategory || ''
//     }));
//   }, [newService.category]);

//   // Load services from real API
//   const loadServices = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetchServices();
//       console.log('Loaded services:', response.data); // Debug log
//       setServices(response.data);
//       setError('');
//     } catch (error) {
//       console.error('Error loading services:', error);
//       setError('Failed to load services. Please try again.');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Create service using real API
//   const handleCreate = async (e) => {
//     e.preventDefault();
//     try {
//       if (!newService.service_name.trim()) {
//         setError('Service name cannot be empty');
//         return;
//       }
      
//       if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
//         setError('Rate per day must be a positive number');
//         return;
//       }
      
//       setIsLoading(true);
      
//       // Create service data to send to API
//       const serviceData = {
//         service_name: newService.service_name.trim(),
//         rate_per_day: parseFloat(newService.rate_per_day),
//         category: newService.category,
//         subcategory: newService.subcategory
//       };
      
//       console.log('Creating service:', serviceData); // Debug log
      
//       // Call real API
//       await createService(serviceData);
      
//       // Reset form but keep category/subcategory for convenience
//       setNewService({ 
//         service_name: '', 
//         rate_per_day: '', 
//         category: newService.category,
//         subcategory: newService.subcategory
//       });
      
//       // Reload services from database
//       await loadServices();
      
//       setError('');
//       setSuccess('Service created successfully!');
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       console.error('Error creating service:', error);
//       setError(error.response?.data?.error || 'Failed to create service');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Update service using real API
//   const handleUpdate = async (id, updatedData) => {
//     try {
//       if (!updatedData.service_name.trim()) {
//         setError('Service name cannot be empty');
//         return;
//       }
      
//       if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
//         setError('Rate per day must be a positive number');
//         return;
//       }
      
//       setIsLoading(true);
      
//       // Call real API
//       await updateService(id, {
//         service_name: updatedData.service_name.trim(),
//         rate_per_day: parseFloat(updatedData.rate_per_day),
//         category: updatedData.category,
//         subcategory: updatedData.subcategory
//       });
      
//       // Reload services from database
//       await loadServices();
      
//       setEditingId(null);
//       setShowUpdateNotice(false);
//       setError('');
//       setSuccess('Service updated successfully!');
//       setTimeout(() => setSuccess(''), 3000);
      
//     } catch (error) {
//       console.error('Error updating service:', error);
//       setError(error.response?.data?.error || 'Failed to update service');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   // Delete service using real API
//   const handleDelete = async (id, serviceName) => {
//     if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
//       try {
//         setIsLoading(true);
        
//         // Call real API
//         await deleteService(id);
        
//         // Reload services from database
//         await loadServices();
        
//         setError('');
//         setSuccess('Service deleted successfully!');
//         setTimeout(() => setSuccess(''), 3000);
        
//       } catch (error) {
//         console.error('Error deleting service:', error);
//         setError(error.response?.data?.error || 'Failed to delete service');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   // Download PDF function
//   const downloadServicesPDF = () => {
//     setIsGeneratingPDF(true);
    
//     try {
//       const doc = new jsPDF();
      
//       // Add logo
//       const imgData = Logo;
//       const pageWidth = doc.internal.pageSize.getWidth();
//       const logoWidth = 50;
//       const logoHeight = 50;
//       const logoX = (pageWidth - logoWidth) / 2;
//       doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
//       // Add title
//       doc.setFontSize(20);
//       doc.setTextColor(40, 40, 40);
//       doc.text('Services List', 14, 75);
      
//       // Add current date
//       const today = new Date();
//       const dateStr = today.toLocaleDateString('en-IN', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });
//       doc.setFontSize(10);
//       doc.setTextColor(100, 100, 100);
//       doc.text(`Generated on: ${dateStr}`, 14, 85);
      
//       // Create table with ALL services data (not just filtered)
//       const tableColumn = ['Service Name', 'Rate per Day (Rs.)', 'Category', 'Subcategory'];
//       const tableRows = [];
      
//       // Use ALL services for PDF (or filtered by search if search is active)
//       const servicesToDownload = searchTerm.trim() ? allServicesForPDF : services;
      
//       servicesToDownload.forEach(service => {
//         const serviceData = [
//           service.service_name,
//           service.rate_per_day.toString(),
//           SERVICE_CATEGORIES[service.category]?.name || service.category,
//           SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory
//         ];
//         tableRows.push(serviceData);
//       });
      
//       // Generate the PDF table
//       autoTable(doc, {
//         head: [tableColumn],
//         body: tableRows,
//         startY: 90,
//         theme: 'grid',
//         styles: { fontSize: 8, cellPadding: 3 },
//         headStyles: { fillColor: [66, 133, 244], textColor: 255 },
//         alternateRowStyles: { fillColor: [240, 240, 240] }
//       });
      
//       // Add total count at the bottom
//       const finalY = doc.lastAutoTable?.finalY || 95;
//       doc.setFontSize(10);
//       doc.setTextColor(100, 100, 100);
//       doc.text(`Total Services: ${servicesToDownload.length}`, 14, finalY + 10);
      
//       if (searchTerm.trim()) {
//         doc.text(`Search Results for: "${searchTerm}"`, 14, finalY + 20);
//       }
      
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

//   // Filter services for display in current tab
//   const filteredServices = services.filter(service => {
//     // First filter by active category
//     const matchesActiveCategory = service.category === activeCategory;
    
//     // Then filter by subcategory if one is selected
//     const matchesSubcategory = !selectedSubcategory || service.subcategory === selectedSubcategory;
    
//     // Finally filter by search term (searches across ALL categories if search is active)
//     const matchesSearch = service.service_name.toLowerCase().includes(searchTerm.toLowerCase());
    
//     // If user is searching, show results from ALL categories
//     if (searchTerm.trim()) {
//       return matchesSearch; // Global search - ignore category filters
//     }
    
//     // If no search, filter by current tab's category and subcategory
//     return matchesActiveCategory && matchesSubcategory;
//   });

//   // For PDF download - always use ALL services (global)
//   const allServicesForPDF = services.filter(service => 
//     service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   // Pagination logic
//   const indexOfLastService = currentPage * servicesPerPage;
//   const indexOfFirstService = indexOfLastService - servicesPerPage;
//   const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
//   const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;

//     return (
//       <div className="d-flex justify-content-center mt-4">
//         <Pagination>
//           <Pagination.Prev 
//             onClick={() => paginate(currentPage - 1)}
//             disabled={currentPage === 1}
//           />
          
//           {[...Array(totalPages)].map((_, index) => {
//             const pageNumber = index + 1;
//             const isActive = pageNumber === currentPage;
            
//             if (
//               pageNumber === 1 || 
//               pageNumber === totalPages || 
//               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
//             ) {
//               return (
//                 <Pagination.Item
//                   key={pageNumber}
//                   active={isActive}
//                   onClick={() => paginate(pageNumber)}
//                 >
//                   {pageNumber}
//                 </Pagination.Item>
//               );
//             }
            
//             if (
//               (pageNumber === currentPage - 2 && currentPage > 3) || 
//               (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
//             ) {
//               return <Pagination.Ellipsis key={pageNumber} />;
//             }
            
//             return null;
//           })}
          
//           <Pagination.Next 
//             onClick={() => paginate(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           />
//         </Pagination>
//       </div>
//     );
//   };

//   return (
//     <div className="services-component">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h4 className="mb-1">Service Management</h4>
//           <p className="text-muted mb-0">Manage studio services organized by production categories</p>
//         </div>
//         <Badge bg="info" className="py-2 px-3">
//           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
//           {services.length} Total Service{services.length !== 1 ? 's' : ''}
//         </Badge>
//       </div>

//       {error && (
//         <Alert variant="danger" dismissible onClose={() => setError('')}>
//           <FontAwesomeIcon icon={faTimes} className="me-2" />
//           {error}
//         </Alert>
//       )}

//       {success && (
//         <Alert variant="success" dismissible onClose={() => setSuccess('')}>
//           <FontAwesomeIcon icon={faCheck} className="me-2" />
//           {success}
//         </Alert>
//       )}

//       {showUpdateNotice && (
//         <Alert variant="info" className="text-center">
//           <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
//           You've made changes. Click <strong>Update</strong> to save.
//         </Alert>
//       )}

//       {/* Add New Service Form */}
//       <Card className="mb-4 border shadow-sm">
//         <Card.Body>
//           <Card.Title className="mb-3">
//             <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />
//             Add New Service
//           </Card.Title>
//           <Form onSubmit={handleCreate}>
//             <Row>
//               <Col md={3}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Category</Form.Label>
//                   <Form.Select
//                     value={newService.category}
//                     onChange={(e) => setNewService({...newService, category: e.target.value})}
//                     required
//                   >
//                     {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
//                       <option key={key} value={key}>
//                         {category.name}
//                       </option>
//                     ))}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Subcategory</Form.Label>
//                   <Form.Select
//                     value={newService.subcategory}
//                     onChange={(e) => setNewService({...newService, subcategory: e.target.value})}
//                     required
//                   >
//                     {Object.entries(SERVICE_CATEGORIES[newService.category]?.subcategories || {}).map(([subKey, subcategory]) => (
//                       <option key={subKey} value={subKey}>
//                         {subcategory.name}
//                       </option>
//                     ))}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//               <Col md={3}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Service Name</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={newService.service_name}
//                     onChange={(e) => setNewService({...newService, service_name: e.target.value})}
//                     placeholder="Enter any service name..."
//                     required
//                   />
//                   <Form.Text className="text-muted">
//                     Type any service name for this category
//                   </Form.Text>
//                 </Form.Group>
//               </Col>
//               <Col md={2}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Rate per Day</Form.Label>
//                   <InputGroup>
//                     <InputGroup.Text>₹</InputGroup.Text>
//                     <Form.Control
//                       type="number"
//                       value={newService.rate_per_day}
//                       onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
//                       placeholder="0"
//                       required
//                     />
//                   </InputGroup>
//                 </Form.Group>
//               </Col>
//               <Col md={1} className="d-flex align-items-end">
//                 <Button 
//                   type="submit" 
//                   variant="success" 
//                   className="w-100"
//                   disabled={isLoading}
//                   style={{ marginBottom: '1.5rem' }}
//                 >
//                   {isLoading ? (
//                     <Spinner size="sm" />
//                   ) : (
//                     <FontAwesomeIcon icon={faPlus} />
//                   )}
//                 </Button>
//               </Col>
//             </Row>
//           </Form>
//         </Card.Body>
//       </Card>

//       {/* Category Tabs */}
//       <Tab.Container activeKey={activeCategory} onSelect={setActiveCategory}>
//         <Card className="shadow-sm border-0">
//           <Card.Header className="bg-light">
//             <Nav variant="pills" className="flex-row">
//               {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
//                 <Nav.Item key={key}>
//                   <Nav.Link eventKey={key} className="text-decoration-none">
//                     <FontAwesomeIcon icon={category.icon} className="me-2" />
//                     {category.name}
//                     <Badge bg="secondary" className="ms-2">
//                       {services.filter(s => s.category === key).length}
//                     </Badge>
//                   </Nav.Link>
//                 </Nav.Item>
//               ))}
//             </Nav>
//           </Card.Header>

//           <Card.Body>
//             <Tab.Content>
//               {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
//                 <Tab.Pane key={categoryKey} eventKey={categoryKey}>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <Card.Title className="mb-0">
//                       {category.name} Services 
//                       <Badge bg="info" className="ms-2">
//                         {searchTerm.trim() ? 
//                           `${filteredServices.length} result${filteredServices.length !== 1 ? 's' : ''}` :
//                           `${filteredServices.length} service${filteredServices.length !== 1 ? 's' : ''}`
//                         }
//                       </Badge>
//                       {searchTerm.trim() && (
//                         <Badge bg="warning" className="ms-2 text-dark">
//                           Global Search: "{searchTerm}"
//                         </Badge>
//                       )}
//                     </Card.Title>
//                     <div className="d-flex align-items-center gap-2">
//                       <Form.Select
//                         value={selectedSubcategory}
//                         onChange={(e) => setSelectedSubcategory(e.target.value)}
//                         style={{ maxWidth: '200px' }}
//                       >
//                         <option value="">All Subcategories</option>
//                         {Object.entries(category.subcategories || {}).map(([subKey, subcategory]) => (
//                           <option key={subKey} value={subKey}>
//                             {subcategory.name}
//                           </option>
//                         ))}
//                       </Form.Select>
//                       <Form.Control
//                         type="text"
//                         placeholder="Search services..."
//                         value={searchTerm}
//                         onChange={(e) => setSearchTerm(e.target.value)}
//                         style={{ maxWidth: '200px' }}
//                       />
//                       <Button 
//                         variant="outline-primary" 
//                         onClick={downloadServicesPDF}
//                         disabled={isGeneratingPDF}
//                         title="Download PDF"
//                       >
//                         {isGeneratingPDF ? (
//                           <Spinner size="sm" />
//                         ) : (
//                           <FontAwesomeIcon icon={faDownload} />
//                         )}
//                       </Button>
//                     </div>
//                   </div>

//                   {isLoading && !services.length ? (
//                     <div className="text-center py-5">
//                       <Spinner animation="border" variant="primary" />
//                       <p className="mt-3">Loading services...</p>
//                     </div>
//                   ) : filteredServices.length > 0 ? (
//                     <>
//                       <div className="table-responsive">
//                         <Table hover className="mb-0">
//                           <thead className="bg-light">
//                             <tr>
//                               <th>Subcategory</th>
//                               <th>Service Name</th>
//                               <th>Rate per Day</th>
//                               <th style={{ width: '180px' }}>Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {currentServices.map(service => (
//                               <tr key={service.id}>
//                                 <td>
//                                   <Badge bg="secondary" className="text-wrap">
//                                     {SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory}
//                                   </Badge>
//                                   {/* Show category badge if global search is active */}
//                                   {searchTerm.trim() && (
//                                     <div className="mt-1">
//                                       <Badge bg="primary" size="sm">
//                                         {SERVICE_CATEGORIES[service.category]?.name || service.category}
//                                       </Badge>
//                                     </div>
//                                   )}
//                                 </td>
//                                 <td>
//                                   <Form.Control
//                                     type="text"
//                                     value={service.service_name}
//                                     onChange={(e) => {
//                                       if (editingId === service.id) {
//                                         setServices(services.map(s => 
//                                           s.id === service.id ? {...s, service_name: e.target.value} : s
//                                         ));
//                                         setShowUpdateNotice(true);
//                                       }
//                                     }}
//                                     disabled={editingId !== service.id}
//                                     className={editingId === service.id ? 'border-primary' : 'border-0 bg-transparent'}
//                                   />
//                                 </td>
//                                 <td>
//                                   {editingId === service.id ? (
//                                     <InputGroup>
//                                       <InputGroup.Text>₹</InputGroup.Text>
//                                       <Form.Control
//                                         type="number"
//                                         value={service.rate_per_day}
//                                         onChange={(e) => {
//                                           setServices(services.map(s => 
//                                             s.id === service.id ? {...s, rate_per_day: e.target.value} : s
//                                           ));
//                                           setShowUpdateNotice(true);
//                                         }}
//                                         className="border-primary"
//                                       />
//                                     </InputGroup>
//                                   ) : (
//                                     <span className="fw-bold">₹{service.rate_per_day}</span>
//                                   )}
//                                 </td>
//                                 <td>
//                                   {editingId === service.id ? (
//                                     <div className="d-flex gap-2">
//                                       <Button 
//                                         variant="primary" 
//                                         size="sm" 
//                                         onClick={() => handleUpdate(service.id, {
//                                           service_name: service.service_name,
//                                           rate_per_day: service.rate_per_day,
//                                           category: service.category,
//                                           subcategory: service.subcategory
//                                         })}
//                                         disabled={isLoading}
//                                       >
//                                         {isLoading ? <Spinner size="sm" /> : <><FontAwesomeIcon icon={faCheck} /> Update</>}
//                                       </Button>
//                                       <Button 
//                                         variant="secondary" 
//                                         size="sm"
//                                         onClick={() => {
//                                           setEditingId(null);
//                                           setShowUpdateNotice(false);
//                                           loadServices();
//                                         }}
//                                       >
//                                         <FontAwesomeIcon icon={faTimes} /> Cancel
//                                       </Button>
//                                     </div>
//                                   ) : (
//                                     <div className="d-flex gap-2">
//                                       <OverlayTrigger
//                                         placement="top"
//                                         overlay={<Tooltip>Edit Service</Tooltip>}
//                                       >
//                                         <Button 
//                                           variant="outline-primary" 
//                                           size="sm" 
//                                           onClick={() => setEditingId(service.id)}
//                                         >
//                                           <FontAwesomeIcon icon={faPencilAlt} />
//                                         </Button>
//                                       </OverlayTrigger>
//                                       <OverlayTrigger
//                                         placement="top"
//                                         overlay={<Tooltip>Delete Service</Tooltip>}
//                                       >
//                                         <Button 
//                                           variant="outline-danger" 
//                                           size="sm"
//                                           onClick={() => handleDelete(service.id, service.service_name)}
//                                         >
//                                           <FontAwesomeIcon icon={faTrash} />
//                                         </Button>
//                                       </OverlayTrigger>
//                                     </div>
//                                   )}
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </Table>
//                       </div>
                      
//                       {renderPagination()}
                      
//                       {totalPages > 1 && (
//                         <div className="text-center mt-2 text-muted small">
//                           Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
//                         </div>
//                       )}
//                     </>
//                   ) : (
//                     <div className="text-center py-5">
//                       <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
//                       {searchTerm.trim() ? (
//                         <div>
//                           <p>No services found matching "{searchTerm}" across all categories</p>
//                           <p className="text-muted small">Try adjusting your search term</p>
//                         </div>
//                       ) : searchTerm || selectedSubcategory ? (
//                         <div>
//                           <p>No services found matching your filters in {category.name.toLowerCase()}</p>
//                           <p className="text-muted small">Try adjusting your search or filter criteria</p>
//                         </div>
//                       ) : (
//                         <div>
//                           <p>No {category.name.toLowerCase()} services available.</p>
//                           <p className="text-muted small">Use the form above to add your first service!</p>
//                         </div>
//                       )}
//                     </div>
//                   )}
//                 </Tab.Pane>
//               ))}
//             </Tab.Content>
//           </Card.Body>
//         </Card>
//       </Tab.Container>

//       <style jsx>{`
//         .services-component .nav-pills .nav-link {
//           color: #6c757d;
//           border-radius: 0.375rem;
//           margin-right: 0.5rem;
//           transition: all 0.2s ease;
//         }
        
//         .services-component .nav-pills .nav-link:hover {
//           background-color: rgba(13, 110, 253, 0.1);
//           color: #0d6efd;
//         }
        
//         .services-component .nav-pills .nav-link.active {
//           background-color: #0d6efd;
//           color: white;
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
  Pagination,
  Nav,
  Tab
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
  faDownload,
  faVideo,
  faCamera,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

// Import your API functions
import { fetchServices, createService, updateService, deleteService } from '../../services/api';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import Logo from '../../assets/Logo.png';

// Service categories and subcategories structure (for organization only)
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
  'post-production': {
    name: 'Post Production',
    icon: faVideo,
    subcategories: {
      'general': {
        name: 'General Post Production'
      }
    }
  }
};

function Services() {
  const [services, setServices] = useState([]);
  const [newService, setNewService] = useState({
    service_name: '',
    rate_per_day: '',
    category: 'pre-production',
    subcategory: 'part-1'
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showUpdateNotice, setShowUpdateNotice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [activeCategory, setActiveCategory] = useState('pre-production');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  
  // Pagination states
  const [currentPage, setCurrentPage] = useState(1);
  const [servicesPerPage] = useState(10);

  // Load services on component mount
  useEffect(() => {
    loadServices();
  }, []);

  // Reset to first page when search term changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, activeCategory, selectedSubcategory]);

  // Reset subcategory filter when active category changes
  useEffect(() => {
    setSelectedSubcategory('');
  }, [activeCategory]);

  // Update subcategory when category changes in form
  useEffect(() => {
    const firstSubcategory = Object.keys(SERVICE_CATEGORIES[newService.category]?.subcategories || {})[0];
    setNewService(prev => ({
      ...prev,
      subcategory: newService.category === 'post-production' ? 'general' : (firstSubcategory || '')
    }));
  }, [newService.category]);

  // Load services from real API
  const loadServices = async () => {
    try {
      setIsLoading(true);
      const response = await fetchServices();
      console.log('Loaded services:', response.data); // Debug log
      setServices(response.data);
      setError('');
    } catch (error) {
      console.error('Error loading services:', error);
      setError('Failed to load services. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  // Create service using real API
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      if (!newService.service_name.trim()) {
        setError('Service name cannot be empty');
        return;
      }
      
      if (isNaN(parseFloat(newService.rate_per_day)) || parseFloat(newService.rate_per_day) <= 0) {
        setError('Rate per day must be a positive number');
        return;
      }
      
      setIsLoading(true);
      
      // Create service data to send to API
      const serviceData = {
        service_name: newService.service_name.trim(),
        rate_per_day: parseFloat(newService.rate_per_day),
        category: newService.category,
        subcategory: newService.subcategory
      };
      
      console.log('Creating service:', serviceData); // Debug log
      
      // Call real API
      await createService(serviceData);
      
      // Reset form but keep category/subcategory for convenience
      setNewService({ 
        service_name: '', 
        rate_per_day: '', 
        category: newService.category,
        subcategory: newService.subcategory
      });
      
      // Reload services from database
      await loadServices();
      
      setError('');
      setSuccess('Service created successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      console.error('Error creating service:', error);
      setError(error.response?.data?.error || 'Failed to create service');
    } finally {
      setIsLoading(false);
    }
  };

  // Update service using real API
  const handleUpdate = async (id, updatedData) => {
    try {
      if (!updatedData.service_name.trim()) {
        setError('Service name cannot be empty');
        return;
      }
      
      if (isNaN(parseFloat(updatedData.rate_per_day)) || parseFloat(updatedData.rate_per_day) <= 0) {
        setError('Rate per day must be a positive number');
        return;
      }
      
      setIsLoading(true);
      
      // Call real API
      await updateService(id, {
        service_name: updatedData.service_name.trim(),
        rate_per_day: parseFloat(updatedData.rate_per_day),
        category: updatedData.category,
        subcategory: updatedData.subcategory
      });
      
      // Reload services from database
      await loadServices();
      
      setEditingId(null);
      setShowUpdateNotice(false);
      setError('');
      setSuccess('Service updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      console.error('Error updating service:', error);
      setError(error.response?.data?.error || 'Failed to update service');
    } finally {
      setIsLoading(false);
    }
  };

  // Delete service using real API
  const handleDelete = async (id, serviceName) => {
    if (window.confirm(`Are you sure you want to delete "${serviceName}"? This action cannot be undone.`)) {
      try {
        setIsLoading(true);
        
        // Call real API
        await deleteService(id);
        
        // Reload services from database
        await loadServices();
        
        setError('');
        setSuccess('Service deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
        
      } catch (error) {
        console.error('Error deleting service:', error);
        setError(error.response?.data?.error || 'Failed to delete service');
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Download PDF function
  const downloadServicesPDF = () => {
    setIsGeneratingPDF(true);
    
    try {
      const doc = new jsPDF();
      
      // Add logo
      const imgData = Logo;
      const pageWidth = doc.internal.pageSize.getWidth();
      const logoWidth = 50;
      const logoHeight = 50;
      const logoX = (pageWidth - logoWidth) / 2;
      doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
      // Add title
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text('Services List', 14, 75);
      
      // Add current date
      const today = new Date();
      const dateStr = today.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${dateStr}`, 14, 85);
      
      // Create table with ALL services data (not just filtered)
      const tableColumn = ['Service Name', 'Rate per Day (Rs.)', 'Category', 'Subcategory'];
      const tableRows = [];
      
      // Use ALL services for PDF (or filtered by search if search is active)
      const servicesToDownload = searchTerm.trim() ? allServicesForPDF : services;
      
      servicesToDownload.forEach(service => {
        const serviceData = [
          service.service_name,
          service.rate_per_day.toString(),
          SERVICE_CATEGORIES[service.category]?.name || service.category,
          SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory
        ];
        tableRows.push(serviceData);
      });
      
      // Generate the PDF table
      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 90,
        theme: 'grid',
        styles: { fontSize: 8, cellPadding: 3 },
        headStyles: { fillColor: [66, 133, 244], textColor: 255 },
        alternateRowStyles: { fillColor: [240, 240, 240] }
      });
      
      // Add total count at the bottom
      const finalY = doc.lastAutoTable?.finalY || 95;
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Total Services: ${servicesToDownload.length}`, 14, finalY + 10);
      
      if (searchTerm.trim()) {
        doc.text(`Search Results for: "${searchTerm}"`, 14, finalY + 20);
      }
      
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

  // Filter services for display in current tab
  const filteredServices = services.filter(service => {
    // First filter by active category
    const matchesActiveCategory = service.category === activeCategory;
    
    // Then filter by subcategory if one is selected
    const matchesSubcategory = !selectedSubcategory || service.subcategory === selectedSubcategory;
    
    // Finally filter by search term (searches across ALL categories if search is active)
    const matchesSearch = service.service_name.toLowerCase().includes(searchTerm.toLowerCase());
    
    // If user is searching, show results from ALL categories
    if (searchTerm.trim()) {
      return matchesSearch; // Global search - ignore category filters
    }
    
    // If no search, filter by current tab's category and subcategory
    return matchesActiveCategory && matchesSubcategory;
  });

  // For PDF download - always use ALL services (global)
  const allServicesForPDF = services.filter(service => 
    service.service_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastService = currentPage * servicesPerPage;
  const indexOfFirstService = indexOfLastService - servicesPerPage;
  const currentServices = filteredServices.slice(indexOfFirstService, indexOfLastService);
  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev 
            onClick={() => paginate(currentPage - 1)}
            disabled={currentPage === 1}
          />
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === currentPage;
            
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
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
            
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
          />
        </Pagination>
      </div>
    );
  };

  return (
    <div className="services-component">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Particular Management</h4>
          <p className="text-muted mb-0">Manage studio Particular organized by production categories</p>
        </div>
        <Badge bg="info" className="py-2 px-3">
          <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
          {services.length} Total Service{services.length !== 1 ? 's' : ''}
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

      {showUpdateNotice && (
        <Alert variant="info" className="text-center">
          <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
          You've made changes. Click <strong>Update</strong> to save.
        </Alert>
      )}

      {/* Add New Service Form */}
      <Card className="mb-4 border shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">
            <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />
            Add New Particular
          </Card.Title>
          <Form onSubmit={handleCreate}>
            <Row>
              <Col md={newService.category === 'post-production' ? 4 : 3}>
                <Form.Group className="mb-3">
                  <Form.Label>Category</Form.Label>
                  <Form.Select
                    value={newService.category}
                    onChange={(e) => setNewService({...newService, category: e.target.value})}
                    required
                  >
                    {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
                      <option key={key} value={key}>
                        {category.name}
                      </option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
              {/* Only show subcategory for non-post-production categories */}
              {newService.category !== 'post-production' && (
                <Col md={3}>
                  <Form.Group className="mb-3">
                    <Form.Label>Subcategory</Form.Label>
                    <Form.Select
                      value={newService.subcategory}
                      onChange={(e) => setNewService({...newService, subcategory: e.target.value})}
                      required
                    >
                      {Object.entries(SERVICE_CATEGORIES[newService.category]?.subcategories || {}).map(([subKey, subcategory]) => (
                        <option key={subKey} value={subKey}>
                          {subcategory.name}
                        </option>
                      ))}
                    </Form.Select>
                  </Form.Group>
                </Col>
              )}
              <Col md={newService.category === 'post-production' ? 4 : 3}>
                <Form.Group className="mb-3">
                  <Form.Label>Particular Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newService.service_name}
                    onChange={(e) => setNewService({...newService, service_name: e.target.value})}
                    placeholder="Enter any Particular name..."
                    required
                  />
                  {/* <Form.Text className="text-muted">
                    Type any Particular name for this category
                  </Form.Text> */}
                </Form.Group>
              </Col>
              <Col md={newService.category === 'post-production' ? 3 : 2}>
                <Form.Group className="mb-3">
                  <Form.Label>Rate per Day</Form.Label>
                  <InputGroup>
                    <InputGroup.Text>₹</InputGroup.Text>
                    <Form.Control
                      type="number"
                      value={newService.rate_per_day}
                      onChange={(e) => setNewService({...newService, rate_per_day: e.target.value})}
                      placeholder="0"
                      required
                    />
                  </InputGroup>
                </Form.Group>
              </Col>
              <Col md={1} className="d-flex align-items-end">
                <Button 
                  type="submit" 
                  variant="success" 
                  className="w-100"
                  disabled={isLoading}
                  style={{ marginBottom: '1.5rem' }}
                >
                  {isLoading ? (
                    <Spinner size="sm" />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Category Tabs */}
      <Tab.Container activeKey={activeCategory} onSelect={setActiveCategory}>
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-light">
            <Nav variant="pills" className="flex-row">
              {Object.entries(SERVICE_CATEGORIES).map(([key, category]) => (
                <Nav.Item key={key}>
                  <Nav.Link eventKey={key} className="text-decoration-none">
                    <FontAwesomeIcon icon={category.icon} className="me-2" />
                    {category.name}
                    <Badge bg="secondary" className="ms-2">
                      {services.filter(s => s.category === key).length}
                    </Badge>
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Card.Header>

          <Card.Body>
            <Tab.Content>
              {Object.entries(SERVICE_CATEGORIES).map(([categoryKey, category]) => (
                <Tab.Pane key={categoryKey} eventKey={categoryKey}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <Card.Title className="mb-0">
                      {category.name} Particulars 
                      <Badge bg="info" className="ms-2">
                        {searchTerm.trim() ? 
                          `${filteredServices.length} result${filteredServices.length !== 1 ? 's' : ''}` :
                          `${filteredServices.length} service${filteredServices.length !== 1 ? 's' : ''}`
                        }
                      </Badge>
                      {searchTerm.trim() && (
                        <Badge bg="warning" className="ms-2 text-dark">
                          Global Search: "{searchTerm}"
                        </Badge>
                      )}
                    </Card.Title>
                    <div className="d-flex align-items-center gap-2">
                      <Form.Select
                        value={selectedSubcategory}
                        onChange={(e) => setSelectedSubcategory(e.target.value)}
                        style={{ maxWidth: '200px' }}
                      >
                        <option value="">All Subcategories</option>
                        {Object.entries(category.subcategories || {}).map(([subKey, subcategory]) => (
                          <option key={subKey} value={subKey}>
                            {subcategory.name}
                          </option>
                        ))}
                      </Form.Select>
                      <Form.Control
                        type="text"
                        placeholder="Search Particular..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ maxWidth: '200px' }}
                      />
                      <Button 
                        variant="outline-primary" 
                        onClick={downloadServicesPDF}
                        disabled={isGeneratingPDF}
                        title="Download PDF"
                      >
                        {isGeneratingPDF ? (
                          <Spinner size="sm" />
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
                        <Table hover className="mb-0">
                          <thead className="bg-light">
                            <tr>
                              {/* Hide subcategory column for post-production */}
                              {categoryKey !== 'post-production' && <th>Subcategory</th>}
                              <th>Particular Name</th>
                              <th>Rate per Day</th>
                              <th style={{ width: '180px' }}>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {currentServices.map(service => (
                              <tr key={service.id}>
                                {/* Hide subcategory cell for post-production */}
                                {categoryKey !== 'post-production' && (
                                  <td>
                                    <Badge bg="secondary" className="text-wrap">
                                      {SERVICE_CATEGORIES[service.category]?.subcategories[service.subcategory]?.name || service.subcategory}
                                    </Badge>
                                    {/* Show category badge if global search is active */}
                                    {searchTerm.trim() && (
                                      <div className="mt-1">
                                        <Badge bg="primary" size="sm">
                                          {SERVICE_CATEGORIES[service.category]?.name || service.category}
                                        </Badge>
                                      </div>
                                    )}
                                  </td>
                                )}
                                {/* For post-production, show category badge in service name cell if searching */}
                                <td>
                                  {categoryKey === 'post-production' && searchTerm.trim() && (
                                    <div className="mb-1">
                                      <Badge bg="primary" size="sm">
                                        {SERVICE_CATEGORIES[service.category]?.name || service.category}
                                      </Badge>
                                    </div>
                                  )}
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
                                      <InputGroup.Text>₹</InputGroup.Text>
                                      <Form.Control
                                        type="number"
                                        value={service.rate_per_day}
                                        onChange={(e) => {
                                          setServices(services.map(s => 
                                            s.id === service.id ? {...s, rate_per_day: e.target.value} : s
                                          ));
                                          setShowUpdateNotice(true);
                                        }}
                                        className="border-primary"
                                      />
                                    </InputGroup>
                                  ) : (
                                    <span className="fw-bold">₹{service.rate_per_day}</span>
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
                                          rate_per_day: service.rate_per_day,
                                          category: service.category,
                                          subcategory: service.subcategory
                                        })}
                                        disabled={isLoading}
                                      >
                                        {isLoading ? <Spinner size="sm" /> : <><FontAwesomeIcon icon={faCheck} /> Update</>}
                                      </Button>
                                      <Button 
                                        variant="secondary" 
                                        size="sm"
                                        onClick={() => {
                                          setEditingId(null);
                                          setShowUpdateNotice(false);
                                          loadServices();
                                        }}
                                      >
                                        <FontAwesomeIcon icon={faTimes} /> Cancel
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
                      
                      {renderPagination()}
                      
                      {totalPages > 1 && (
                        <div className="text-center mt-2 text-muted small">
                          Showing {indexOfFirstService + 1} to {Math.min(indexOfLastService, filteredServices.length)} of {filteredServices.length} services
                        </div>
                      )}
                    </>
                  ) : (
                    <div className="text-center py-5">
                      <FontAwesomeIcon icon={faCoins} size="3x" className="text-muted mb-3" />
                      {searchTerm.trim() ? (
                        <div>
                          <p>No services found matching "{searchTerm}" across all categories</p>
                          <p className="text-muted small">Try adjusting your search term</p>
                        </div>
                      ) : searchTerm || selectedSubcategory ? (
                        <div>
                          <p>No services found matching your filters in {category.name.toLowerCase()}</p>
                          <p className="text-muted small">Try adjusting your search or filter criteria</p>
                        </div>
                      ) : (
                        <div>
                          <p>No {category.name.toLowerCase()} services available.</p>
                          <p className="text-muted small">Use the form above to add your first service!</p>
                        </div>
                      )}
                    </div>
                  )}
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>

      <style jsx>{`
        .services-component .nav-pills .nav-link {
          color: #6c757d;
          border-radius: 0.375rem;
          margin-right: 0.5rem;
          transition: all 0.2s ease;
        }
        
        .services-component .nav-pills .nav-link:hover {
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
        }
        
        .services-component .nav-pills .nav-link.active {
          background-color: #0d6efd;
          color: white;
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
      `}</style>
    </div>
  );
}

export default Services;