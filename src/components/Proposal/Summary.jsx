
// // // // // // // import React, { useState } from 'react';
// // // // // // // import { Card, Button, ListGroup, Container, Spinner } from 'react-bootstrap';
// // // // // // // import { downloadProposal } from '../../services/api';
// // // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // // import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
// // // // // // // import './ProposalSummary.css'; // We'll create this CSS file for animations

// // // // // // // function ProposalSummary({ data, onBack }) {
// // // // // // //   // Add state for download button
// // // // // // //   const [isDownloading, setIsDownloading] = useState(false);
// // // // // // //   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
// // // // // // //   // Log received data for debugging
// // // // // // //   console.log('ProposalSummary received data:', data);
  
// // // // // // //   // Extract the actual proposal data from the API response
// // // // // // //   const responseData = data?.data || {};
// // // // // // //   const proposalData = responseData?.proposalData || {};
// // // // // // //   const quoteId = responseData?.quoteId || proposalData?.quote_id || 'Unknown';
  
// // // // // // //   console.log('Extracted proposalData:', proposalData);
// // // // // // //   console.log('Extracted quoteId:', quoteId);
  
// // // // // // //   // Handler for PDF download
// // // // // // //   const handleDownload = async () => {
// // // // // // //     try {
// // // // // // //       if (!quoteId || quoteId === 'Unknown') {
// // // // // // //         console.error('No quote ID available for download');
// // // // // // //         return;
// // // // // // //       }
      
// // // // // // //       // Set downloading state
// // // // // // //       setIsDownloading(true);
      
// // // // // // //       // Call the API to download the PDF
// // // // // // //       const response = await downloadProposal(quoteId);
      
// // // // // // //       // Create a blob URL from the response data
// // // // // // //       const blob = new Blob([response.data], { type: 'application/pdf' });
// // // // // // //       const url = window.URL.createObjectURL(blob);
      
// // // // // // //       // Create a link and simulate a click to trigger the download
// // // // // // //       const link = document.createElement('a');
// // // // // // //       link.href = url;
// // // // // // //       link.setAttribute('download', `${quoteId}.pdf`);
// // // // // // //       document.body.appendChild(link);
// // // // // // //       link.click();
      
// // // // // // //       // Clean up
// // // // // // //       document.body.removeChild(link);
// // // // // // //       window.URL.revokeObjectURL(url);
      
// // // // // // //       // Set success state and reset after animation completes
// // // // // // //       setIsDownloading(false);
// // // // // // //       setDownloadSuccess(true);
      
// // // // // // //       // Reset success state after animation duration
// // // // // // //       setTimeout(() => {
// // // // // // //         setDownloadSuccess(false);
// // // // // // //       }, 2000);
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error downloading proposal:', error);
// // // // // // //       setIsDownloading(false);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Format date for display
// // // // // // //   const formatDate = (dateString) => {
// // // // // // //     if (!dateString) return 'Not specified';
    
// // // // // // //     try {
// // // // // // //       const date = new Date(dateString);
// // // // // // //       return date.toLocaleDateString('en-IN', {
// // // // // // //         day: '2-digit',
// // // // // // //         month: '2-digit',
// // // // // // //         year: 'numeric'
// // // // // // //       });
// // // // // // //     } catch (e) {
// // // // // // //       return dateString;
// // // // // // //     }
// // // // // // //   };

// // // // // // //   // Format currency for display
// // // // // // //   const formatCurrency = (amount) => {
// // // // // // //     return Number(amount || 0).toLocaleString();
// // // // // // //   };

// // // // // // //   // Render services from the proposal data
// // // // // // //   const renderServices = () => {
// // // // // // //     // Get services from the proposal data
// // // // // // //     const services = proposalData?.services || [];
    
// // // // // // //     // Handle case where no services are selected
// // // // // // //     if (!Array.isArray(services) || services.length === 0) {
// // // // // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // // // // //     }
    
// // // // // // //     // Render services that are already objects with service details
// // // // // // //     return services.map((service, index) => (
// // // // // // //       <ListGroup.Item key={index}>
// // // // // // //         {service.service_name || 'Unknown Service'} – 
// // // // // // //         ₹{formatCurrency(service.rate_per_day)}/day × 
// // // // // // //         {service.days || proposalData.days || 1} day(s) = 
// // // // // // //         ₹{formatCurrency(service.total)}
// // // // // // //       </ListGroup.Item>
// // // // // // //     ));
// // // // // // //   };

// // // // // // //   // Get the total from the proposal data
// // // // // // //   const total = proposalData?.total || 0;
  
// // // // // // //   // Check if we have commission data
// // // // // // //   const servicesTotal = proposalData?.services_total || total;
// // // // // // //   const commissionRate = proposalData?.commission_rate || 0;
// // // // // // //   const commissionAmount = proposalData?.commission_amount || 0;
  
// // // // // // //   // Determine if we should show commission section
// // // // // // //   const showCommission = commissionRate > 0 && commissionAmount > 0;

// // // // // // //   // Determine download button class and content
// // // // // // //   const getDownloadButton = () => {
// // // // // // //     if (isDownloading) {
// // // // // // //       return (
// // // // // // //         <Button variant="primary" disabled className="download-btn">
// // // // // // //           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // // // //           Downloading...
// // // // // // //         </Button>
// // // // // // //       );
// // // // // // //     }
    
// // // // // // //     if (downloadSuccess) {
// // // // // // //       return (
// // // // // // //         <Button variant="success" className="download-btn success-animation">
// // // // // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // // // // //           Downloaded!
// // // // // // //         </Button>
// // // // // // //       );
// // // // // // //     }
    
// // // // // // //     return (
// // // // // // //       <Button variant="primary" onClick={handleDownload} className="download-btn pulse-animation">
// // // // // // //         <FontAwesomeIcon icon={faDownload} className="me-2" />
// // // // // // //         Download PDF
// // // // // // //       </Button>
// // // // // // //     );
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // // // //       <Card className="p-4 shadow">
// // // // // // //         <h2>Proposal Summary</h2>
// // // // // // //         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
// // // // // // //         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
// // // // // // //         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
// // // // // // //         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
// // // // // // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
// // // // // // //         <Card.Text><strong>Delivery Dates:</strong> {formatDate(proposalData?.delivery_date)}</Card.Text>
// // // // // // //         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
// // // // // // //         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
// // // // // // //         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

// // // // // // //         <hr />

// // // // // // //         <h4>Services Breakdown:</h4>
// // // // // // //         <ListGroup>
// // // // // // //           {renderServices()}
// // // // // // //         </ListGroup>
        
// // // // // // //         <div className="mt-3 py-2 px-3 bg-light rounded">
// // // // // // //           {/* Show services subtotal only if commission is present */}
// // // // // // //           {showCommission && (
// // // // // // //             <div className="d-flex justify-content-between align-items-center">
// // // // // // //               <span><strong>Services Total:</strong></span>
// // // // // // //               <span>₹{formatCurrency(servicesTotal)}</span>
// // // // // // //             </div>
// // // // // // //           )}
          
// // // // // // //           {/* Show commission if present */}
// // // // // // //           {showCommission && (
// // // // // // //             <div className="d-flex justify-content-between align-items-center mt-2">
// // // // // // //               <span><strong>Agency Commission ({commissionRate}%):</strong></span>
// // // // // // //               <span>₹{formatCurrency(commissionAmount)}</span>
// // // // // // //             </div>
// // // // // // //           )}
          
// // // // // // //           {/* Always show final total */}
// // // // // // //           <div className={`d-flex justify-content-between align-items-center ${showCommission ? 'mt-2 pt-2 border-top' : ''}`}>
// // // // // // //             <h5 className="mb-0"><strong>Total:</strong></h5>
// // // // // // //             <h5 className="mb-0">₹{formatCurrency(total)}</h5>
// // // // // // //           </div>
// // // // // // //         </div>

// // // // // // //         <div className="d-flex justify-content-between mt-4">
// // // // // // //           <Button variant="secondary" onClick={onBack}>
// // // // // // //             Create New Proposal
// // // // // // //           </Button>
// // // // // // //           {getDownloadButton()}
// // // // // // //         </div>
// // // // // // //       </Card>
// // // // // // //     </Container>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default ProposalSummary;
// // // // // // import React, { useState } from 'react';
// // // // // // import { Card, Button, ListGroup, Container, Spinner } from 'react-bootstrap';
// // // // // // import { downloadProposal } from '../../services/api';
// // // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // // import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
// // // // // // import './ProposalSummary.css'; // We'll create this CSS file for animations

// // // // // // function ProposalSummary({ data, onBack, servicesList = [] }) {
// // // // // //   // Add state for download button
// // // // // //   const [isDownloading, setIsDownloading] = useState(false);
// // // // // //   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
// // // // // //   // Log received data for debugging
// // // // // //   console.log('ProposalSummary received data:', data);
// // // // // //   console.log('ServicesList:', servicesList);
  
// // // // // //   // Extract the actual proposal data from the API response
// // // // // //   const responseData = data?.data || data || {};
// // // // // //   const proposalData = responseData?.proposalData || responseData;
// // // // // //   const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
// // // // // //   console.log('Extracted proposalData:', proposalData);
// // // // // //   console.log('Extracted quoteId:', quoteId);
// // // // // //   console.log('Services from proposalData:', proposalData?.services);
// // // // // //   console.log('ServicesBreakdown from proposalData:', proposalData?.servicesBreakdown);
  
// // // // // //   // Handler for PDF download
// // // // // //   const handleDownload = async () => {
// // // // // //     try {
// // // // // //       if (!quoteId || quoteId === 'Unknown') {
// // // // // //         console.error('No quote ID available for download');
// // // // // //         return;
// // // // // //       }
      
// // // // // //       // Set downloading state
// // // // // //       setIsDownloading(true);
      
// // // // // //       // Call the API to download the PDF
// // // // // //       const response = await downloadProposal(quoteId);
      
// // // // // //       // Create a blob URL from the response data
// // // // // //       const blob = new Blob([response.data], { type: 'application/pdf' });
// // // // // //       const url = window.URL.createObjectURL(blob);
      
// // // // // //       // Create a link and simulate a click to trigger the download
// // // // // //       const link = document.createElement('a');
// // // // // //       link.href = url;
// // // // // //       link.setAttribute('download', `${quoteId}.pdf`);
// // // // // //       document.body.appendChild(link);
// // // // // //       link.click();
      
// // // // // //       // Clean up
// // // // // //       document.body.removeChild(link);
// // // // // //       window.URL.revokeObjectURL(url);
      
// // // // // //       // Set success state and reset after animation completes
// // // // // //       setIsDownloading(false);
// // // // // //       setDownloadSuccess(true);
      
// // // // // //       // Reset success state after animation duration
// // // // // //       setTimeout(() => {
// // // // // //         setDownloadSuccess(false);
// // // // // //       }, 2000);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error downloading proposal:', error);
// // // // // //       setIsDownloading(false);
// // // // // //     }
// // // // // //   };

// // // // // //   // Format date for display
// // // // // //   const formatDate = (dateString) => {
// // // // // //     if (!dateString) return 'Not specified';
    
// // // // // //     try {
// // // // // //       const date = new Date(dateString);
// // // // // //       return date.toLocaleDateString('en-IN', {
// // // // // //         day: '2-digit',
// // // // // //         month: '2-digit',
// // // // // //         year: 'numeric'
// // // // // //       });
// // // // // //     } catch (e) {
// // // // // //       return dateString;
// // // // // //     }
// // // // // //   };

// // // // // //   // Format currency for display
// // // // // //   const formatCurrency = (amount) => {
// // // // // //     return Number(amount || 0).toLocaleString();
// // // // // //   };

// // // // // //   // FIXED: Render services from the proposal data with category/subcategory info
// // // // // //   const renderServices = () => {
// // // // // //     let services = [];
    
// // // // // //     // Try to get services from servicesBreakdown first (detailed format)
// // // // // //     if (proposalData?.servicesBreakdown && Array.isArray(proposalData.servicesBreakdown)) {
// // // // // //       console.log('Using servicesBreakdown');
// // // // // //       services = proposalData.servicesBreakdown;
// // // // // //     }
// // // // // //     // Try to build services from service IDs and servicesList
// // // // // //     else if (proposalData?.services && Array.isArray(proposalData.services) && servicesList.length > 0) {
// // // // // //       console.log('Building services from IDs and servicesList');
// // // // // //       const days = proposalData?.days || 1;
// // // // // //       services = proposalData.services.map(serviceId => {
// // // // // //         const service = servicesList.find(s => s.id.toString() === serviceId.toString());
// // // // // //         if (service) {
// // // // // //           return {
// // // // // //             service_name: service.service_name,
// // // // // //             rate_per_day: service.rate_per_day,
// // // // // //             category: service.category,
// // // // // //             subcategory: service.subcategory,
// // // // // //             days: days,
// // // // // //             total: service.rate_per_day * days
// // // // // //           };
// // // // // //         }
// // // // // //         return null;
// // // // // //       }).filter(Boolean);
// // // // // //     }
// // // // // //     // Try legacy format if services is already an array of objects
// // // // // //     else if (proposalData?.services && Array.isArray(proposalData.services) && proposalData.services[0]?.service_name) {
// // // // // //       console.log('Using services array directly');
// // // // // //       services = proposalData.services;
// // // // // //     }
// // // // // //     // Handle case where services is a string (legacy format)
// // // // // //     else if (proposalData?.services && typeof proposalData.services === 'string') {
// // // // // //       console.log('Parsing legacy string format');
// // // // // //       const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
// // // // // //       services = proposalData.services.split(',').map(item => {
// // // // // //         const match = item.trim().match(serviceRegex);
// // // // // //         if (match) {
// // // // // //           return {
// // // // // //             service_name: match[1].trim(),
// // // // // //             total: parseInt(match[2].replace(/,/g, '')),
// // // // // //             rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1),
// // // // // //             days: proposalData?.days || 1,
// // // // // //             category: 'legacy',
// // // // // //             subcategory: 'general'
// // // // // //           };
// // // // // //         }
// // // // // //         return null;
// // // // // //       }).filter(Boolean);
// // // // // //     }
    
// // // // // //     console.log('Final services for rendering:', services);
    
// // // // // //     // Handle case where no services are found
// // // // // //     if (!Array.isArray(services) || services.length === 0) {
// // // // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // // // //     }
    
// // // // // //     // Helper function to get category display name
// // // // // //     const getCategoryDisplayName = (category) => {
// // // // // //       const categoryMap = {
// // // // // //         'pre-production': 'Pre-Production',
// // // // // //         'production': 'Production',
// // // // // //         'post-production': 'Post Production',
// // // // // //         'legacy': 'General'
// // // // // //       };
// // // // // //       return categoryMap[category] || category;
// // // // // //     };
    
// // // // // //     // Helper function to get subcategory display name
// // // // // //     const getSubcategoryDisplayName = (category, subcategory) => {
// // // // // //       const subcategoryMap = {
// // // // // //         'pre-production': {
// // // // // //           'part-1': 'Part 1 - Creative Development',
// // // // // //           'part-1-shoot-location': 'Part 1 - Shoot Location',
// // // // // //           'legal-permits': 'Legal & Permits',
// // // // // //           'logistics': 'Logistics & Planning'
// // // // // //         },
// // // // // //         'production': {
// // // // // //           'creative-team': 'Part 2 - Creative Team',
// // // // // //           'production-team': 'Part 2 - Production Team',
// // // // // //           'production-design': 'Part 2 - Production Design',
// // // // // //           'talent': 'Part 2 - Talent',
// // // // // //           'hair-makeup': 'Part 2 - Hair & Make-UP',
// // // // // //           'wardrobe': 'Part 2 - Wardrobe',
// // // // // //           'camera-grip': 'Camera & Grip',
// // // // // //           'lights': 'Lights',
// // // // // //           'vehicles': 'Vehicles Hire',
// // // // // //           'catering': 'Catering',
// // // // // //           'miscellaneous': 'Miscellaneous'
// // // // // //         },
// // // // // //         'post-production': {
// // // // // //           'general': 'Post Production',
// // // // // //           'editing': 'Editing & Graphics',
// // // // // //           'audio': 'Audio Post Production',
// // // // // //           'delivery': 'Delivery & Distribution'
// // // // // //         }
// // // // // //       };
// // // // // //       return subcategoryMap[category]?.[subcategory] || subcategory;
// // // // // //     };
    
// // // // // //     // Render services with category/subcategory info
// // // // // //     return services.map((service, index) => (
// // // // // //       <ListGroup.Item key={index}>
// // // // // //         <div>
// // // // // //           <strong>{service.service_name || 'Unknown Service'}</strong>
// // // // // //           <br />
// // // // // //           <small className="text-muted">
// // // // // //             {getCategoryDisplayName(service.category || 'legacy')}
// // // // // //             {service.subcategory && service.subcategory !== 'general' && 
// // // // // //               ` → ${getSubcategoryDisplayName(service.category || 'legacy', service.subcategory)}`
// // // // // //             }
// // // // // //           </small>
// // // // // //           <br />
// // // // // //           <span>
// // // // // //             ₹{formatCurrency(service.rate_per_day)}/day × 
// // // // // //             {service.days || proposalData.days || 1} day(s) = 
// // // // // //             <strong> ₹{formatCurrency(service.total)}</strong>
// // // // // //           </span>
// // // // // //         </div>
// // // // // //       </ListGroup.Item>
// // // // // //     ));
// // // // // //   };

// // // // // //   // Get the total from the proposal data
// // // // // //   const total = proposalData?.total || 0;
  
// // // // // //   // Check if we have commission data
// // // // // //   const servicesTotal = proposalData?.services_total || total;
// // // // // //   const commissionRate = proposalData?.commission_rate || 0;
// // // // // //   const commissionAmount = proposalData?.commission_amount || 0;
  
// // // // // //   // Determine if we should show commission section
// // // // // //   const showCommission = commissionRate > 0 && commissionAmount > 0;

// // // // // //   // Determine download button class and content
// // // // // //   const getDownloadButton = () => {
// // // // // //     if (isDownloading) {
// // // // // //       return (
// // // // // //         <Button variant="primary" disabled className="download-btn">
// // // // // //           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // // //           Downloading...
// // // // // //         </Button>
// // // // // //       );
// // // // // //     }
    
// // // // // //     if (downloadSuccess) {
// // // // // //       return (
// // // // // //         <Button variant="success" className="download-btn success-animation">
// // // // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // // // //           Downloaded!
// // // // // //         </Button>
// // // // // //       );
// // // // // //     }
    
// // // // // //     return (
// // // // // //       <Button variant="primary" onClick={handleDownload} className="download-btn pulse-animation">
// // // // // //         <FontAwesomeIcon icon={faDownload} className="me-2" />
// // // // // //         Download PDF
// // // // // //       </Button>
// // // // // //     );
// // // // // //   };

// // // // // //   return (
// // // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // // //       <Card className="p-4 shadow">
// // // // // //         <h2>Proposal Summary</h2>
// // // // // //         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
// // // // // //         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
// // // // // //         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
// // // // // //         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
// // // // // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
// // // // // //         <Card.Text><strong>Delivery Dates:</strong> {formatDate(proposalData?.delivery_date)}</Card.Text>
// // // // // //         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
// // // // // //         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
// // // // // //         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

// // // // // //         <hr />

// // // // // //         <h4>Services Breakdown:</h4>
// // // // // //         <ListGroup>
// // // // // //           {renderServices()}
// // // // // //         </ListGroup>
        
// // // // // //         <div className="mt-3 py-2 px-3 bg-light rounded">
// // // // // //           {/* Show services subtotal only if commission is present */}
// // // // // //           {showCommission && (
// // // // // //             <div className="d-flex justify-content-between align-items-center">
// // // // // //               <span><strong>Services Total:</strong></span>
// // // // // //               <span>₹{formatCurrency(servicesTotal)}</span>
// // // // // //             </div>
// // // // // //           )}
          
// // // // // //           {/* Show commission if present */}
// // // // // //           {showCommission && (
// // // // // //             <div className="d-flex justify-content-between align-items-center mt-2">
// // // // // //               <span><strong>Agency Commission ({commissionRate}%):</strong></span>
// // // // // //               <span>₹{formatCurrency(commissionAmount)}</span>
// // // // // //             </div>
// // // // // //           )}
          
// // // // // //           {/* Always show final total */}
// // // // // //           <div className={`d-flex justify-content-between align-items-center ${showCommission ? 'mt-2 pt-2 border-top' : ''}`}>
// // // // // //             <h5 className="mb-0"><strong>Total:</strong></h5>
// // // // // //             <h5 className="mb-0">₹{formatCurrency(total)}</h5>
// // // // // //           </div>
// // // // // //         </div>

// // // // // //         <div className="d-flex justify-content-between mt-4">
// // // // // //           <Button variant="secondary" onClick={onBack}>
// // // // // //             Create New Proposal
// // // // // //           </Button>
// // // // // //           {getDownloadButton()}
// // // // // //         </div>
// // // // // //       </Card>
// // // // // //     </Container>
// // // // // //   );
// // // // // // }

// // // // // // export default ProposalSummary;
// // // // // import React, { useState } from 'react';
// // // // // import { Card, Button, ListGroup, Container, Spinner } from 'react-bootstrap';
// // // // // import { downloadProposal } from '../../services/api';
// // // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // // import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
// // // // // import './ProposalSummary.css'; // We'll create this CSS file for animations

// // // // // function ProposalSummary({ data, onBack, servicesList = [] }) {
// // // // //   // Add state for download button
// // // // //   const [isDownloading, setIsDownloading] = useState(false);
// // // // //   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
// // // // //   // Log received data for debugging
// // // // //   console.log('ProposalSummary received data:', data);
// // // // //   console.log('ServicesList:', servicesList);
  
// // // // //   // Extract the actual proposal data from the API response
// // // // //   const responseData = data?.data || data || {};
// // // // //   const proposalData = responseData?.proposalData || responseData;
// // // // //   const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
// // // // //   console.log('Extracted proposalData:', proposalData);
// // // // //   console.log('Extracted quoteId:', quoteId);
// // // // //   console.log('Services from proposalData:', proposalData?.services);
// // // // //   console.log('ServicesBreakdown from proposalData:', proposalData?.servicesBreakdown);
  
// // // // //   // Handler for PDF download
// // // // //   const handleDownload = async () => {
// // // // //     try {
// // // // //       if (!quoteId || quoteId === 'Unknown') {
// // // // //         console.error('No quote ID available for download');
// // // // //         return;
// // // // //       }
      
// // // // //       // Set downloading state
// // // // //       setIsDownloading(true);
      
// // // // //       // Call the API to download the PDF
// // // // //       const response = await downloadProposal(quoteId);
      
// // // // //       // Create a blob URL from the response data
// // // // //       const blob = new Blob([response.data], { type: 'application/pdf' });
// // // // //       const url = window.URL.createObjectURL(blob);
      
// // // // //       // Create a link and simulate a click to trigger the download
// // // // //       const link = document.createElement('a');
// // // // //       link.href = url;
// // // // //       link.setAttribute('download', `${quoteId}.pdf`);
// // // // //       document.body.appendChild(link);
// // // // //       link.click();
      
// // // // //       // Clean up
// // // // //       document.body.removeChild(link);
// // // // //       window.URL.revokeObjectURL(url);
      
// // // // //       // Set success state and reset after animation completes
// // // // //       setIsDownloading(false);
// // // // //       setDownloadSuccess(true);
      
// // // // //       // Reset success state after animation duration
// // // // //       setTimeout(() => {
// // // // //         setDownloadSuccess(false);
// // // // //       }, 2000);
// // // // //     } catch (error) {
// // // // //       console.error('Error downloading proposal:', error);
// // // // //       setIsDownloading(false);
// // // // //     }
// // // // //   };

// // // // //   // Format date for display
// // // // //   const formatDate = (dateString) => {
// // // // //     if (!dateString) return 'Not specified';
    
// // // // //     try {
// // // // //       const date = new Date(dateString);
// // // // //       return date.toLocaleDateString('en-IN', {
// // // // //         day: '2-digit',
// // // // //         month: '2-digit',
// // // // //         year: 'numeric'
// // // // //       });
// // // // //     } catch (e) {
// // // // //       return dateString;
// // // // //     }
// // // // //   };

// // // // //   // Format currency for display
// // // // //   const formatCurrency = (amount) => {
// // // // //     return Number(amount || 0).toLocaleString();
// // // // //   };

// // // // //   // Get services organized by category and subcategory (same logic as new version)
// // // // //   const getOrganizedServices = () => {
// // // // //     // Try to get services from servicesBreakdown first (new format)
// // // // //     let selectedServicesWithDetails = proposalData?.servicesBreakdown || [];
    
// // // // //     // If no servicesBreakdown, try to build from service IDs and servicesList
// // // // //     if (selectedServicesWithDetails.length === 0 && proposalData?.services && servicesList.length > 0) {
// // // // //       const selectedServiceIds = proposalData.services;
// // // // //       const days = proposalData?.days || 1;
      
// // // // //       console.log('Building services from IDs:', selectedServiceIds);
// // // // //       console.log('Available services:', servicesList);
      
// // // // //       selectedServicesWithDetails = selectedServiceIds.map(serviceId => {
// // // // //         const service = servicesList.find(s => s.id.toString() === serviceId.toString());
// // // // //         if (service) {
// // // // //           return {
// // // // //             ...service,
// // // // //             total: service.rate_per_day * days,
// // // // //             days: days
// // // // //           };
// // // // //         }
// // // // //         return null;
// // // // //       }).filter(Boolean);
// // // // //     }
    
// // // // //     // If still no services, try legacy format
// // // // //     if (selectedServicesWithDetails.length === 0 && proposalData?.services) {
// // // // //       // Handle case where services might be a string (legacy)
// // // // //       if (typeof proposalData.services === 'string') {
// // // // //         const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
// // // // //         selectedServicesWithDetails = proposalData.services.split(',').map(item => {
// // // // //           const match = item.trim().match(serviceRegex);
// // // // //           if (match) {
// // // // //             return {
// // // // //               service_name: match[1].trim(),
// // // // //               total: parseInt(match[2].replace(/,/g, '')),
// // // // //               category: 'legacy',
// // // // //               subcategory: 'general',
// // // // //               rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1)
// // // // //             };
// // // // //           }
// // // // //           return null;
// // // // //         }).filter(Boolean);
// // // // //       }
// // // // //     }
    
// // // // //     console.log('Selected services with details:', selectedServicesWithDetails);
    
// // // // //     // Organize services by category and subcategory
// // // // //     const organized = {};
    
// // // // //     selectedServicesWithDetails.forEach(service => {
// // // // //       const category = service.category || 'pre-production';
// // // // //       const subcategory = service.subcategory || 'part-1';
      
// // // // //       if (!organized[category]) {
// // // // //         organized[category] = {};
// // // // //       }
// // // // //       if (!organized[category][subcategory]) {
// // // // //         organized[category][subcategory] = [];
// // // // //       }
// // // // //       organized[category][subcategory].push(service);
// // // // //     });
    
// // // // //     console.log('Organized services:', organized);
// // // // //     return organized;
// // // // //   };

// // // // //   // UPDATED: Render organized services in simple ListGroup format
// // // // //   const renderServices = () => {
// // // // //     const organizedServices = getOrganizedServices();
// // // // //     const days = proposalData?.days || 1;
    
// // // // //     if (Object.keys(organizedServices).length === 0) {
// // // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // // //     }
    
// // // // //     // Helper function to get category display name
// // // // //     const getCategoryDisplayName = (categoryKey) => {
// // // // //       const categoryMap = {
// // // // //         'pre-production': 'Pre-Production',
// // // // //         'production': 'Production',
// // // // //         'post-production': 'Post Production',
// // // // //         'legacy': 'General'
// // // // //       };
// // // // //       return categoryMap[categoryKey] || categoryKey;
// // // // //     };
    
// // // // //     // Helper function to get subcategory display name
// // // // //     const getSubcategoryDisplayName = (categoryKey, subcategoryKey) => {
// // // // //       const subcategoryMap = {
// // // // //         'pre-production': {
// // // // //           'part-1': 'Part 1 - Creative Development',
// // // // //           'part-1-shoot-location': 'Part 1 - Shoot Location',
// // // // //           'legal-permits': 'Legal & Permits',
// // // // //           'logistics': 'Logistics & Planning'
// // // // //         },
// // // // //         'production': {
// // // // //           'creative-team': 'Part 2 - Creative Team',
// // // // //           'production-team': 'Part 2 - Production Team',
// // // // //           'production-design': 'Part 2 - Production Design',
// // // // //           'talent': 'Part 2 - Talent',
// // // // //           'hair-makeup': 'Part 2 - Hair & Make-UP',
// // // // //           'wardrobe': 'Part 2 - Wardrobe',
// // // // //           'camera-grip': 'Camera & Grip',
// // // // //           'lights': 'Lights',
// // // // //           'vehicles': 'Vehicles Hire',
// // // // //           'catering': 'Catering',
// // // // //           'miscellaneous': 'Miscellaneous'
// // // // //         },
// // // // //         'post-production': {
// // // // //           'general': 'Post Production',
// // // // //           'editing': 'Editing & Graphics',
// // // // //           'audio': 'Audio Post Production',
// // // // //           'delivery': 'Delivery & Distribution'
// // // // //         }
// // // // //       };
// // // // //       return subcategoryMap[categoryKey]?.[subcategoryKey] || subcategoryKey;
// // // // //     };

// // // // //     // Render services organized by category but in simple ListGroup format
// // // // //     const serviceItems = [];
    
// // // // //     Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
// // // // //       const categoryName = getCategoryDisplayName(categoryKey);
      
// // // // //       // Add category header
// // // // //       serviceItems.push(
// // // // //         <ListGroup.Item key={`category-${categoryKey}`} className="bg-primary text-white">
// // // // //           <strong>{categoryName}</strong>
// // // // //         </ListGroup.Item>
// // // // //       );
      
// // // // //       // Add services grouped by subcategory
// // // // //       Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
// // // // //         const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
        
// // // // //         // Add subcategory header (only if not "General Post Production")
// // // // //         if (subcategoryName !== 'General Post Production' && subcategoryName !== 'Post Production') {
// // // // //           serviceItems.push(
// // // // //             <ListGroup.Item key={`subcategory-${categoryKey}-${subcategoryKey}`} className="bg-light">
// // // // //               <small className="text-muted"><strong>{subcategoryName}</strong></small>
// // // // //             </ListGroup.Item>
// // // // //           );
// // // // //         }
        
// // // // //         // Add individual services
// // // // //         services.forEach((service, index) => {
// // // // //           serviceItems.push(
// // // // //             <ListGroup.Item key={`service-${categoryKey}-${subcategoryKey}-${index}`}>
// // // // //               <div>
// // // // //                 <strong>{service.service_name}</strong>
// // // // //                 <br />
// // // // //                 <span>
// // // // //                   ₹{formatCurrency(service.rate_per_day)}/day × 
// // // // //                   {service.days || days} day(s) = 
// // // // //                   <strong> ₹{formatCurrency(service.total)}</strong>
// // // // //                 </span>
// // // // //               </div>
// // // // //             </ListGroup.Item>
// // // // //           );
// // // // //         });
// // // // //       });
// // // // //     });
    
// // // // //     return serviceItems;
// // // // //   };

// // // // //   // Get the total from the proposal data
// // // // //   const total = proposalData?.total || 0;
  
// // // // //   // Check if we have commission data
// // // // //   const servicesTotal = proposalData?.services_total || total;
// // // // //   const commissionRate = proposalData?.commission_rate || 0;
// // // // //   const commissionAmount = proposalData?.commission_amount || 0;
  
// // // // //   // Determine if we should show commission section
// // // // //   const showCommission = commissionRate > 0 && commissionAmount > 0;

// // // // //   // Determine download button class and content
// // // // //   const getDownloadButton = () => {
// // // // //     if (isDownloading) {
// // // // //       return (
// // // // //         <Button variant="primary" disabled className="download-btn">
// // // // //           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // // //           Downloading...
// // // // //         </Button>
// // // // //       );
// // // // //     }
    
// // // // //     if (downloadSuccess) {
// // // // //       return (
// // // // //         <Button variant="success" className="download-btn success-animation">
// // // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // // //           Downloaded!
// // // // //         </Button>
// // // // //       );
// // // // //     }
    
// // // // //     return (
// // // // //       <Button variant="primary" onClick={handleDownload} className="download-btn pulse-animation">
// // // // //         <FontAwesomeIcon icon={faDownload} className="me-2" />
// // // // //         Download PDF
// // // // //       </Button>
// // // // //     );
// // // // //   };

// // // // //   return (
// // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // //       <Card className="p-4 shadow">
// // // // //         <h2>Proposal Summary</h2>
// // // // //         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
// // // // //         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
// // // // //         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
// // // // //         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
// // // // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
// // // // //         <Card.Text><strong>Delivery Dates:</strong> {formatDate(proposalData?.delivery_date)}</Card.Text>
// // // // //         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
// // // // //         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
// // // // //         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

// // // // //         <hr />

// // // // //         <h4>Services Breakdown:</h4>
// // // // //         <ListGroup>
// // // // //           {renderServices()}
// // // // //         </ListGroup>
        
// // // // //         <div className="mt-3 py-2 px-3 bg-light rounded">
// // // // //           {/* Show services subtotal only if commission is present */}
// // // // //           {showCommission && (
// // // // //             <div className="d-flex justify-content-between align-items-center">
// // // // //               <span><strong>Services Total:</strong></span>
// // // // //               <span>₹{formatCurrency(servicesTotal)}</span>
// // // // //             </div>
// // // // //           )}
          
// // // // //           {/* Show commission if present */}
// // // // //           {showCommission && (
// // // // //             <div className="d-flex justify-content-between align-items-center mt-2">
// // // // //               <span><strong>Agency Commission ({commissionRate}%):</strong></span>
// // // // //               <span>₹{formatCurrency(commissionAmount)}</span>
// // // // //             </div>
// // // // //           )}
          
// // // // //           {/* Always show final total */}
// // // // //           <div className={`d-flex justify-content-between align-items-center ${showCommission ? 'mt-2 pt-2 border-top' : ''}`}>
// // // // //             <h5 className="mb-0"><strong>Total:</strong></h5>
// // // // //             <h5 className="mb-0">₹{formatCurrency(total)}</h5>
// // // // //           </div>
// // // // //         </div>

// // // // //         <div className="d-flex justify-content-between mt-4">
// // // // //           <Button variant="secondary" onClick={onBack}>
// // // // //             Create New Proposal
// // // // //           </Button>
// // // // //           {getDownloadButton()}
// // // // //         </div>
// // // // //       </Card>
// // // // //     </Container>
// // // // //   );
// // // // // }

// // // // // export default ProposalSummary;
// // // // import React, { useState } from 'react';
// // // // import { Card, Button, Table, Container, Spinner } from 'react-bootstrap';
// // // // import { downloadProposal } from '../../services/api';
// // // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // // import { faDownload, faCheck, faFileExcel } from '@fortawesome/free-solid-svg-icons';
// // // // import * as XLSX from 'xlsx';
// // // // import './ProposalSummary.css';
// // // // import Logo from '../../assets/Logo.png';

// // // // function ProposalSummary({ data, onBack, servicesList = [] }) {
// // // //   const [isDownloading, setIsDownloading] = useState(false);
// // // //   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
// // // //   console.log('ProposalSummary received data:', data);
// // // //   console.log('ServicesList:', servicesList);
  
// // // //   // Extract the actual proposal data
// // // //   const responseData = data?.data || data || {};
// // // //   const proposalData = responseData?.proposalData || responseData;
// // // //   const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
// // // //   console.log('Extracted proposalData:', proposalData);
// // // //   console.log('Extracted quoteId:', quoteId);

// // // //   // Format date for display
// // // //   const formatDate = (dateString) => {
// // // //     if (!dateString) return 'Not specified';
    
// // // //     try {
// // // //       const date = new Date(dateString);
// // // //       return date.toLocaleDateString('en-IN', {
// // // //         day: '2-digit',
// // // //         month: 'long',
// // // //         year: 'numeric'
// // // //       });
// // // //     } catch (e) {
// // // //       return dateString;
// // // //     }
// // // //   };

// // // //   // Format currency for display
// // // //   const formatCurrency = (amount) => {
// // // //     return Number(amount || 0).toLocaleString();
// // // //   };

// // // //   // Get services organized by category and subcategory
// // // //   const getOrganizedServices = () => {
// // // //     let selectedServicesWithDetails = proposalData?.servicesBreakdown || [];
    
// // // //     if (selectedServicesWithDetails.length === 0 && proposalData?.services && servicesList.length > 0) {
// // // //       const selectedServiceIds = proposalData.services;
// // // //       const days = proposalData?.days || 1;
      
// // // //       selectedServicesWithDetails = selectedServiceIds.map(serviceId => {
// // // //         const service = servicesList.find(s => s.id.toString() === serviceId.toString());
// // // //         if (service) {
// // // //           return {
// // // //             ...service,
// // // //             total: service.rate_per_day * days,
// // // //             days: days
// // // //           };
// // // //         }
// // // //         return null;
// // // //       }).filter(Boolean);
// // // //     }
    
// // // //     if (selectedServicesWithDetails.length === 0 && proposalData?.services) {
// // // //       if (typeof proposalData.services === 'string') {
// // // //         const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
// // // //         selectedServicesWithDetails = proposalData.services.split(',').map(item => {
// // // //           const match = item.trim().match(serviceRegex);
// // // //           if (match) {
// // // //             return {
// // // //               service_name: match[1].trim(),
// // // //               total: parseInt(match[2].replace(/,/g, '')),
// // // //               category: 'legacy',
// // // //               subcategory: 'general',
// // // //               rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1)
// // // //             };
// // // //           }
// // // //           return null;
// // // //         }).filter(Boolean);
// // // //       }
// // // //     }
    
// // // //     const organized = {};
// // // //     selectedServicesWithDetails.forEach(service => {
// // // //       const category = service.category || 'pre-production';
// // // //       const subcategory = service.subcategory || 'part-1';
      
// // // //       if (!organized[category]) {
// // // //         organized[category] = {};
// // // //       }
// // // //       if (!organized[category][subcategory]) {
// // // //         organized[category][subcategory] = [];
// // // //       }
// // // //       organized[category][subcategory].push(service);
// // // //     });
    
// // // //     return organized;
// // // //   };

// // // //   // Helper functions for display names
// // // //   const getCategoryDisplayName = (categoryKey) => {
// // // //     const categoryMap = {
// // // //       'pre-production': 'Pre-Production',
// // // //       'production': 'Production',
// // // //       'post-production': 'Post Production',
// // // //       'legacy': 'General'
// // // //     };
// // // //     return categoryMap[categoryKey] || categoryKey;
// // // //   };

// // // //   const getSubcategoryDisplayName = (categoryKey, subcategoryKey) => {
// // // //     const subcategoryMap = {
// // // //       'pre-production': {
// // // //         'part-1': 'Part 1',
// // // //         'part-1-shoot-location': 'Part 1 - Shoot Location',
// // // //         'legal-permits': 'Legal & Permits',
// // // //         'logistics': 'Logistics & Planning'
// // // //       },
// // // //       'production': {
// // // //         'creative-team': 'Part 2 - Creative Team',
// // // //         'production-team': 'Part 2 - Production Team',
// // // //         'production-design': 'Part 2 - Production Design',
// // // //         'talent': 'Part 2 - Talent',
// // // //         'hair-makeup': 'Part 2 - Hair & Make-UP',
// // // //         'wardrobe': 'Part 2 - Wardrobe',
// // // //         'camera-grip': 'Part 2 - Camera & Grip',
// // // //         'lights': 'Part 2 - Lights',
// // // //         'vehicles': 'Part 2 - Vehicles Hire',
// // // //         'catering': 'Part 2 - Catering',
// // // //         'miscellaneous': 'Part 2 - Miscellaneous'
// // // //       },
// // // //       'post-production': {
// // // //         'general': 'Post Production',
// // // //         'editing': 'Editing & Graphics',
// // // //         'audio': 'Audio Post Production',
// // // //         'delivery': 'Delivery & Distribution'
// // // //       }
// // // //     };
// // // //     return subcategoryMap[categoryKey]?.[subcategoryKey] || subcategoryKey;
// // // //   };

// // // //   // Generate Excel and download
// // // //   const downloadExcel = () => {
// // // //     setIsDownloading(true);
    
// // // //     try {
// // // //       const organizedServices = getOrganizedServices();
// // // //       const days = proposalData?.days || 1;
      
// // // //       // Create Excel data structure
// // // //       const excelData = [];
      
// // // //       // Header information
// // // //       excelData.push([`Budget for - ${proposalData?.client_name || 'Client'}`]);
// // // //       excelData.push([`${days} day shoot (20hrs shift)`]);
// // // //       excelData.push(['Agency/Production House - The Small Big Idea (TSBI Studios)']);
// // // //       excelData.push([`Location - ${proposalData?.location || ''}`]);
// // // //       excelData.push([`Proposal Date - ${formatDate(new Date())}`]);
// // // //       excelData.push([]); // Empty row
      
// // // //       let grandTotal = 0;
      
// // // //       // Process each category
// // // //       Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
// // // //         const categoryName = getCategoryDisplayName(categoryKey);
        
// // // //         // Category header
// // // //         excelData.push([categoryName]);
        
// // // //         // Process each subcategory
// // // //         Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
// // // //           const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
// // // //           let subcategoryTotal = 0;
          
// // // //           // Subcategory header
// // // //           excelData.push([subcategoryName]);
// // // //           excelData.push(['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount']);
          
// // // //           // Services in this subcategory
// // // //           services.forEach((service, index) => {
// // // //             const amount = service.total || 0;
// // // //             subcategoryTotal += amount;
// // // //             grandTotal += amount;
            
// // // //             excelData.push([
// // // //               index + 1,
// // // //               service.service_name,
// // // //               service.rate_per_day || 0,
// // // //               1,
// // // //               days,
// // // //               amount
// // // //             ]);
// // // //           });
          
// // // //           // Subcategory total
// // // //           excelData.push(['Total', '', '', '', '', subcategoryTotal]);
// // // //           excelData.push([]); // Empty row
// // // //         });
// // // //       });
      
// // // //       // Grand totals
// // // //       excelData.push(['Grand Total', '', '', '', '', grandTotal]);
      
// // // //       const commissionRate = proposalData?.commission_rate || 10;
// // // //       const commissionAmount = (grandTotal * commissionRate) / 100;
// // // //       const finalTotal = grandTotal + commissionAmount;
      
// // // //       excelData.push([`Agency Commission ${commissionRate}%`, '', '', '', '', commissionAmount]);
// // // //       excelData.push(['Grand Total', '', '', '', '', finalTotal]);
      
// // // //       // Notes
// // // //       excelData.push([]);
// // // //       excelData.push(['NOTE -']);
// // // //       excelData.push(['If there is any additional requirement, a revised estimate will be shared.']);
// // // //       excelData.push(['A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.']);
// // // //       excelData.push(['Payment teams will be 50% advance on commercial approval & 50% after project delivery.']);
// // // //       excelData.push(['Lights & Camera will be arranged by client.']);
      
// // // //       // Create workbook
// // // //       const wb = XLSX.utils.book_new();
// // // //       const ws = XLSX.utils.aoa_to_sheet(excelData);
      
// // // //       // Set column widths
// // // //       ws['!cols'] = [
// // // //         { wch: 8 },  // Sr No
// // // //         { wch: 30 }, // Particular
// // // //         { wch: 12 }, // Rate
// // // //         { wch: 8 },  // Unit
// // // //         { wch: 8 },  // Days
// // // //         { wch: 15 }  // Amount
// // // //       ];
      
// // // //       XLSX.utils.book_append_sheet(wb, ws, 'Budget');
      
// // // //       // Generate and download
// // // //       XLSX.writeFile(wb, `${quoteId}_Budget.xlsx`);
      
// // // //       setIsDownloading(false);
// // // //       setDownloadSuccess(true);
      
// // // //       setTimeout(() => {
// // // //         setDownloadSuccess(false);
// // // //       }, 2000);
// // // //     } catch (error) {
// // // //       console.error('Error generating Excel:', error);
// // // //       setIsDownloading(false);
// // // //     }
// // // //   };

// // // //   // Render Excel-style table
// // // //   const renderExcelStyleTable = () => {
// // // //     const organizedServices = getOrganizedServices();
// // // //     const days = proposalData?.days || 1;
    
// // // //     if (Object.keys(organizedServices).length === 0) {
// // // //       return (
// // // //         <div className="text-center py-4">
// // // //           <span className="text-muted">No services selected</span>
// // // //         </div>
// // // //       );
// // // //     }
    
// // // //     let grandTotal = 0;
    
// // // //     return (
// // // //       <div>
// // // //         {Object.entries(organizedServices).map(([categoryKey, subcategories]) => {
// // // //           const categoryName = getCategoryDisplayName(categoryKey);
// // // //           const categoryColor = categoryKey === 'pre-production' ? '#fff2cc' : 
// // // //                                categoryKey === 'production' ? '#d5e8d4' : '#dae8fc';
          
// // // //           return (
// // // //             <div key={categoryKey} className="mb-4">
// // // //               {/* Category Header */}
// // // //               <Table bordered className="mb-2">
// // // //                 <thead>
// // // //                   <tr style={{ backgroundColor: categoryColor }}>
// // // //                     <th className="text-center" colSpan={6}>
// // // //                       <strong>{categoryName}</strong>
// // // //                     </th>
// // // //                   </tr>
// // // //                 </thead>
// // // //               </Table>
              
// // // //               {/* Subcategories */}
// // // //               {Object.entries(subcategories).map(([subcategoryKey, services]) => {
// // // //                 const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
// // // //                 let subcategoryTotal = 0;
                
// // // //                 return (
// // // //                   <div key={subcategoryKey} className="mb-3">
// // // //                     <Table bordered size="sm">
// // // //                       <thead>
// // // //                         <tr style={{ backgroundColor: categoryColor }}>
// // // //                           <th className="text-center" colSpan={6}>
// // // //                             <strong>{subcategoryName}</strong>
// // // //                           </th>
// // // //                         </tr>
// // // //                         <tr className="table-secondary">
// // // //                           <th style={{ width: '80px' }}>Sr No.</th>
// // // //                           <th>Particular</th>
// // // //                           <th style={{ width: '100px' }}>Rate</th>
// // // //                           <th style={{ width: '80px' }}>Unit</th>
// // // //                           <th style={{ width: '80px' }}>Days</th>
// // // //                           <th style={{ width: '120px' }}>Amount</th>
// // // //                         </tr>
// // // //                       </thead>
// // // //                       <tbody>
// // // //                         {services.map((service, index) => {
// // // //                           const amount = service.total || 0;
// // // //                           subcategoryTotal += amount;
// // // //                           grandTotal += amount;
                          
// // // //                           return (
// // // //                             <tr key={index}>
// // // //                               <td className="text-center">{index + 1}</td>
// // // //                               <td>{service.service_name}</td>
// // // //                               <td className="text-end">{formatCurrency(service.rate_per_day || 0)}</td>
// // // //                               <td className="text-center">1</td>
// // // //                               <td className="text-center">{days}</td>
// // // //                               <td className="text-end">{formatCurrency(amount)}</td>
// // // //                             </tr>
// // // //                           );
// // // //                         })}
// // // //                         <tr className="table-warning">
// // // //                           <td colSpan={5} className="text-center"><strong>Total</strong></td>
// // // //                           <td className="text-end"><strong>{formatCurrency(subcategoryTotal)}</strong></td>
// // // //                         </tr>
// // // //                       </tbody>
// // // //                     </Table>
// // // //                   </div>
// // // //                 );
// // // //               })}
// // // //             </div>
// // // //           );
// // // //         })}
        
// // // //         {/* Final Totals */}
// // // //         <Table bordered className="mt-4">
// // // //           <tbody>
// // // //             <tr className="table-info">
// // // //               <td colSpan={5} className="text-center"><strong>Grand Total</strong></td>
// // // //               <td className="text-end"><strong>₹{formatCurrency(grandTotal)}</strong></td>
// // // //             </tr>
// // // //             {proposalData?.commission_rate > 0 && (
// // // //               <>
// // // //                 <tr className="table-warning">
// // // //                   <td colSpan={5} className="text-center">
// // // //                     <strong>Agency Commission ({proposalData.commission_rate}%)</strong>
// // // //                   </td>
// // // //                   <td className="text-end">
// // // //                     <strong>₹{formatCurrency((grandTotal * proposalData.commission_rate) / 100)}</strong>
// // // //                   </td>
// // // //                 </tr>
// // // //                 <tr className="table-success">
// // // //                   <td colSpan={5} className="text-center"><strong>Final Total</strong></td>
// // // //                   <td className="text-end">
// // // //                     <strong>₹{formatCurrency(grandTotal + (grandTotal * proposalData.commission_rate) / 100)}</strong>
// // // //                   </td>
// // // //                 </tr>
// // // //               </>
// // // //             )}
// // // //           </tbody>
// // // //         </Table>
// // // //       </div>
// // // //     );
// // // //   };

// // // //   // Determine download button content
// // // //   const getDownloadButton = () => {
// // // //     if (isDownloading) {
// // // //       return (
// // // //         <Button variant="success" disabled className="download-btn">
// // // //           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // // //           Generating Excel...
// // // //         </Button>
// // // //       );
// // // //     }
    
// // // //     if (downloadSuccess) {
// // // //       return (
// // // //         <Button variant="success" className="download-btn success-animation">
// // // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // // //           Downloaded!
// // // //         </Button>
// // // //       );
// // // //     }
    
// // // //     return (
// // // //       <Button variant="success" onClick={downloadExcel} className="download-btn pulse-animation">
// // // //         <FontAwesomeIcon icon={faFileExcel} className="me-2" />
// // // //         Download Excel
// // // //       </Button>
// // // //     );
// // // //   };

// // // //   return (
// // // //     <Container className="mt-4 mb-5" style={{ maxWidth: '1000px' }}>
// // // //       <Card className="shadow-sm border-0">
// // // //         <Card.Header className="bg-primary text-white">
// // // //           <div className="d-flex justify-content-between align-items-center">
// // // //             <h4 className="mb-0">Budget for - {proposalData?.client_name || 'Client'}</h4>
// // // //             <small>{quoteId}</small>
// // // //             <image src={Logo} alt="TSBI Studios Logo" width={50} height={50} className="rounded-circle" />
// // // //           </div>
// // // //           <div className="mt-2">
// // // //             <div>{proposalData?.days || 1} day shoot (20hrs shift)</div>
// // // //             <div>Agency/Production House - The Small Big Idea (TSBI Studios)</div>
// // // //             <div>Location - {proposalData?.location || ''}</div>
// // // //             <div>Proposal Date - {formatDate(new Date())}</div>
// // // //           </div>
// // // //         </Card.Header>
        
// // // //         <Card.Body className="p-0">
// // // //           {renderExcelStyleTable()}
          
// // // //           {/* Notes Section */}
// // // //           <div className="p-3 bg-light border-top">
// // // //             <small>
// // // //               <strong>NOTE:</strong><br />
// // // //               If there is any additional requirement, a revised estimate will be shared.<br />
// // // //               A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.<br />
// // // //               Payment terms will be 50% advance on commercial approval & 50% after project delivery.<br />
// // // //               Lights & Camera will be arranged by client.
// // // //             </small>
// // // //           </div>
          
// // // //           {/* Action Buttons */}
// // // //           <div className="d-flex justify-content-between p-3 border-top">
// // // //             <Button variant="outline-secondary" onClick={onBack} size="lg">
// // // //               Create New Proposal
// // // //             </Button>
// // // //             {getDownloadButton()}
// // // //           </div>
// // // //         </Card.Body>
// // // //       </Card>
// // // //     </Container>
// // // //   );
// // // // }

// // // // export default ProposalSummary;
// // // import React, { useState } from 'react';
// // // import { Card, Button, Table, Container, Spinner } from 'react-bootstrap';
// // // import { downloadProposal } from '../../services/api';
// // // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // // import { faDownload, faCheck, faFileExcel } from '@fortawesome/free-solid-svg-icons';
// // // import * as XLSX from 'xlsx';
// // // import './ProposalSummary.css';
// // // import Logo from '../../assets/Logo.png';

// // // function ProposalSummary({ data, onBack, servicesList = [] }) {
// // //   const [isDownloading, setIsDownloading] = useState(false);
// // //   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
// // //   console.log('ProposalSummary received data:', data);
// // //   console.log('ServicesList:', servicesList);
  
// // //   // Extract the actual proposal data
// // //   const responseData = data?.data || data || {};
// // //   const proposalData = responseData?.proposalData || responseData;
// // //   const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
// // //   console.log('Extracted proposalData:', proposalData);
// // //   console.log('Extracted quoteId:', quoteId);

// // //   // Format date for display
// // //   const formatDate = (dateString) => {
// // //     if (!dateString) return 'Not specified';
    
// // //     try {
// // //       const date = new Date(dateString);
// // //       return date.toLocaleDateString('en-IN', {
// // //         day: '2-digit',
// // //         month: 'long',
// // //         year: 'numeric'
// // //       });
// // //     } catch (e) {
// // //       return dateString;
// // //     }
// // //   };

// // //   // Format currency for display
// // //   const formatCurrency = (amount) => {
// // //     return Number(amount || 0).toLocaleString();
// // //   };

// // //   // Get services organized by category and subcategory
// // //   const getOrganizedServices = () => {
// // //     let selectedServicesWithDetails = proposalData?.servicesBreakdown || [];
    
// // //     if (selectedServicesWithDetails.length === 0 && proposalData?.services && servicesList.length > 0) {
// // //       const selectedServiceIds = proposalData.services;
// // //       const days = proposalData?.days || 1;
      
// // //       selectedServicesWithDetails = selectedServiceIds.map(serviceId => {
// // //         const service = servicesList.find(s => s.id.toString() === serviceId.toString());
// // //         if (service) {
// // //           return {
// // //             ...service,
// // //             total: service.rate_per_day * days,
// // //             days: days
// // //           };
// // //         }
// // //         return null;
// // //       }).filter(Boolean);
// // //     }
    
// // //     if (selectedServicesWithDetails.length === 0 && proposalData?.services) {
// // //       if (typeof proposalData.services === 'string') {
// // //         const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
// // //         selectedServicesWithDetails = proposalData.services.split(',').map(item => {
// // //           const match = item.trim().match(serviceRegex);
// // //           if (match) {
// // //             return {
// // //               service_name: match[1].trim(),
// // //               total: parseInt(match[2].replace(/,/g, '')),
// // //               category: 'legacy',
// // //               subcategory: 'general',
// // //               rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1)
// // //             };
// // //           }
// // //           return null;
// // //         }).filter(Boolean);
// // //       }
// // //     }
    
// // //     const organized = {};
// // //     selectedServicesWithDetails.forEach(service => {
// // //       const category = service.category || 'pre-production';
// // //       const subcategory = service.subcategory || 'part-1';
      
// // //       if (!organized[category]) {
// // //         organized[category] = {};
// // //       }
// // //       if (!organized[category][subcategory]) {
// // //         organized[category][subcategory] = [];
// // //       }
// // //       organized[category][subcategory].push(service);
// // //     });
    
// // //     return organized;
// // //   };

// // //   // Helper functions for display names
// // //   const getCategoryDisplayName = (categoryKey) => {
// // //     const categoryMap = {
// // //       'pre-production': 'Pre-Production',
// // //       'production': 'Production',
// // //       'post-production': 'Post Production',
// // //       'legacy': 'General'
// // //     };
// // //     return categoryMap[categoryKey] || categoryKey;
// // //   };

// // //   const getSubcategoryDisplayName = (categoryKey, subcategoryKey) => {
// // //     const subcategoryMap = {
// // //       'pre-production': {
// // //         'part-1': 'Part 1',
// // //         'part-1-shoot-location': 'Part 1 - Shoot Location',
// // //         'legal-permits': 'Legal & Permits',
// // //         'logistics': 'Logistics & Planning'
// // //       },
// // //       'production': {
// // //         'creative-team': 'Part 2 - Creative Team',
// // //         'production-team': 'Part 2 - Production Team',
// // //         'production-design': 'Part 2 - Production Design',
// // //         'talent': 'Part 2 - Talent',
// // //         'hair-makeup': 'Part 2 - Hair & Make-UP',
// // //         'wardrobe': 'Part 2 - Wardrobe',
// // //         'camera-grip': 'Part 2 - Camera & Grip',
// // //         'lights': 'Part 2 - Lights',
// // //         'vehicles': 'Part 2 - Vehicles Hire',
// // //         'catering': 'Part 2 - Catering',
// // //         'miscellaneous': 'Part 2 - Miscellaneous'
// // //       },
// // //       'post-production': {
// // //         'general': 'Post Production',
// // //         'editing': 'Editing & Graphics',
// // //         'audio': 'Audio Post Production',
// // //         'delivery': 'Delivery & Distribution'
// // //       }
// // //     };
// // //     return subcategoryMap[categoryKey]?.[subcategoryKey] || subcategoryKey;
// // //   };

// // //   // Generate Excel and download with proper styling
// // //   const downloadExcel = () => {
// // //     setIsDownloading(true);
    
// // //     try {
// // //       const organizedServices = getOrganizedServices();
// // //       const days = proposalData?.days || 1;
      
// // //       // Create Excel data structure
// // //       const excelData = [];
      
// // //       // Header information with styling
// // //       excelData.push([`Budget for - ${proposalData?.client_name || 'Client'}`]);
// // //       excelData.push([`${days} day shoot (20hrs shift)`]);
// // //       excelData.push(['Agency/Production House - The Small Big Idea (TSBI Studios)']);
// // //       excelData.push([`Location - ${proposalData?.location || ''}`]);
// // //       excelData.push([`Proposal Date - ${formatDate(new Date())}`]);
// // //       excelData.push([]); // Empty row
      
// // //       let grandTotal = 0;
// // //       let currentRow = 6; // Starting row for data (0-indexed)
      
// // //       // Create workbook and worksheet
// // //       const wb = XLSX.utils.book_new();
// // //       const ws = XLSX.utils.aoa_to_sheet([]);
      
// // //       // Add header data
// // //       XLSX.utils.sheet_add_aoa(ws, excelData, { origin: 'A1' });
      
// // //       // Style the header
// // //       const headerStyle = {
// // //         font: { bold: true, sz: 12 },
// // //         alignment: { horizontal: 'left' },
// // //         fill: { fgColor: { rgb: 'E7E6E6' } }
// // //       };
      
// // //       // Apply header styling
// // //       for (let i = 0; i < 5; i++) {
// // //         const cellRef = XLSX.utils.encode_cell({ r: i, c: 0 });
// // //         if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
// // //         ws[cellRef].s = headerStyle;
// // //       }
      
// // //       // Process each category
// // //       Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
// // //         const categoryName = getCategoryDisplayName(categoryKey);
        
// // //         // Category colors
// // //         const categoryColors = {
// // //           'pre-production': 'FFF2CC',
// // //           'production': 'D5E8D4',
// // //           'post-production': 'DAE8FC',
// // //           'legacy': 'F0F0F0'
// // //         };
        
// // //         const categoryColor = categoryColors[categoryKey] || 'F0F0F0';
        
// // //         // Add category header
// // //         XLSX.utils.sheet_add_aoa(ws, [[categoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
// // //         // Style category header
// // //         const categoryHeaderStyle = {
// // //           font: { bold: true, sz: 14 },
// // //           alignment: { horizontal: 'center' },
// // //           fill: { fgColor: { rgb: categoryColor } },
// // //           border: {
// // //             top: { style: 'thin' },
// // //             bottom: { style: 'thin' },
// // //             left: { style: 'thin' },
// // //             right: { style: 'thin' }
// // //           }
// // //         };
        
// // //         // Apply category header styling across 6 columns
// // //         for (let col = 0; col < 6; col++) {
// // //           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //           if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? categoryName : '' };
// // //           ws[cellRef].s = categoryHeaderStyle;
// // //         }
        
// // //         // Merge category header cells
// // //         if (!ws['!merges']) ws['!merges'] = [];
// // //         ws['!merges'].push({
// // //           s: { r: currentRow, c: 0 },
// // //           e: { r: currentRow, c: 5 }
// // //         });
        
// // //         currentRow++;
        
// // //         // Process each subcategory
// // //         Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
// // //           const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
// // //           let subcategoryTotal = 0;
          
// // //           // Add subcategory header
// // //           XLSX.utils.sheet_add_aoa(ws, [[subcategoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
// // //           // Style subcategory header
// // //           const subcatStyle = {
// // //             font: { bold: true, sz: 12 },
// // //             alignment: { horizontal: 'center' },
// // //             fill: { fgColor: { rgb: categoryColor } },
// // //             border: {
// // //               top: { style: 'thin' },
// // //               bottom: { style: 'thin' },
// // //               left: { style: 'thin' },
// // //               right: { style: 'thin' }
// // //             }
// // //           };
          
// // //           // Apply subcategory styling across 6 columns
// // //           for (let col = 0; col < 6; col++) {
// // //             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //             if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? subcategoryName : '' };
// // //             ws[cellRef].s = subcatStyle;
// // //           }
          
// // //           // Merge subcategory header cells
// // //           ws['!merges'].push({
// // //             s: { r: currentRow, c: 0 },
// // //             e: { r: currentRow, c: 5 }
// // //           });
          
// // //           currentRow++;
          
// // //           // Add column headers
// // //           const colHeaders = ['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount'];
// // //           XLSX.utils.sheet_add_aoa(ws, [colHeaders], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
// // //           // Style column headers
// // //           const colHeaderStyle = {
// // //             font: { bold: true },
// // //             alignment: { horizontal: 'center' },
// // //             fill: { fgColor: { rgb: 'BFBFBF' } },
// // //             border: {
// // //               top: { style: 'thin' },
// // //               bottom: { style: 'thin' },
// // //               left: { style: 'thin' },
// // //               right: { style: 'thin' }
// // //             }
// // //           };
          
// // //           for (let col = 0; col < 6; col++) {
// // //             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //             ws[cellRef].s = colHeaderStyle;
// // //           }
          
// // //           currentRow++;
          
// // //           // Add service rows
// // //           services.forEach((service, index) => {
// // //             const amount = service.total || 0;
// // //             subcategoryTotal += amount;
// // //             grandTotal += amount;
            
// // //             const serviceRow = [
// // //               index + 1,
// // //               service.service_name,
// // //               service.rate_per_day || 0,
// // //               1,
// // //               days,
// // //               amount
// // //             ];
            
// // //             XLSX.utils.sheet_add_aoa(ws, [serviceRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
// // //             // Style service rows
// // //             const serviceStyle = {
// // //               border: {
// // //                 top: { style: 'thin' },
// // //                 bottom: { style: 'thin' },
// // //                 left: { style: 'thin' },
// // //                 right: { style: 'thin' }
// // //               }
// // //             };
            
// // //             for (let col = 0; col < 6; col++) {
// // //               const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //               ws[cellRef].s = serviceStyle;
              
// // //               // Right align numbers
// // //               if (col === 2 || col === 5) {
// // //                 ws[cellRef].s.alignment = { horizontal: 'right' };
// // //               } else if (col === 0 || col === 3 || col === 4) {
// // //                 ws[cellRef].s.alignment = { horizontal: 'center' };
// // //               }
// // //             }
            
// // //             currentRow++;
// // //           });
          
// // //           // Add subcategory total
// // //           const totalRow = ['Total', '', '', '', '', subcategoryTotal];
// // //           XLSX.utils.sheet_add_aoa(ws, [totalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
// // //           // Style total row
// // //           const totalStyle = {
// // //             font: { bold: true },
// // //             fill: { fgColor: { rgb: 'FFFF99' } },
// // //             border: {
// // //               top: { style: 'thin' },
// // //               bottom: { style: 'thin' },
// // //               left: { style: 'thin' },
// // //               right: { style: 'thin' }
// // //             }
// // //           };
          
// // //           for (let col = 0; col < 6; col++) {
// // //             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //             ws[cellRef].s = totalStyle;
// // //             if (col === 0 || col === 5) {
// // //               ws[cellRef].s.alignment = { horizontal: 'center' };
// // //             }
// // //           }
          
// // //           currentRow++;
// // //           currentRow++; // Empty row
// // //         });
// // //       });
      
// // //       // Add grand totals
// // //       const grandTotalRow = ['Grand Total', '', '', '', '', grandTotal];
// // //       XLSX.utils.sheet_add_aoa(ws, [grandTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
// // //       // Style grand total
// // //       const grandTotalStyle = {
// // //         font: { bold: true, sz: 14 },
// // //         fill: { fgColor: { rgb: 'ADD8E6' } },
// // //         border: {
// // //           top: { style: 'thick' },
// // //           bottom: { style: 'thick' },
// // //           left: { style: 'thick' },
// // //           right: { style: 'thick' }
// // //         },
// // //         alignment: { horizontal: 'center' }
// // //       };
      
// // //       for (let col = 0; col < 6; col++) {
// // //         const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //         ws[cellRef].s = grandTotalStyle;
// // //       }
      
// // //       currentRow++;
      
// // //       // Add commission if applicable
// // //       if (proposalData?.commission_rate > 0) {
// // //         const commissionRate = proposalData.commission_rate;
// // //         const commissionAmount = (grandTotal * commissionRate) / 100;
// // //         const finalTotal = grandTotal + commissionAmount;
        
// // //         // Commission row
// // //         const commissionRow = [`Agency Commission ${commissionRate}%`, '', '', '', '', commissionAmount];
// // //         XLSX.utils.sheet_add_aoa(ws, [commissionRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
// // //         // Style commission row
// // //         const commissionStyle = {
// // //           font: { bold: true },
// // //           fill: { fgColor: { rgb: 'FFFF99' } },
// // //           border: {
// // //             top: { style: 'thin' },
// // //             bottom: { style: 'thin' },
// // //             left: { style: 'thin' },
// // //             right: { style: 'thin' }
// // //           },
// // //           alignment: { horizontal: 'center' }
// // //         };
        
// // //         for (let col = 0; col < 6; col++) {
// // //           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //           ws[cellRef].s = commissionStyle;
// // //         }
        
// // //         currentRow++;
        
// // //         // Final total row
// // //         const finalTotalRow = ['Grand Total', '', '', '', '', finalTotal];
// // //         XLSX.utils.sheet_add_aoa(ws, [finalTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
// // //         // Style final total
// // //         const finalTotalStyle = {
// // //           font: { bold: true, sz: 14 },
// // //           fill: { fgColor: { rgb: '90EE90' } },
// // //           border: {
// // //             top: { style: 'thick' },
// // //             bottom: { style: 'thick' },
// // //             left: { style: 'thick' },
// // //             right: { style: 'thick' }
// // //           },
// // //           alignment: { horizontal: 'center' }
// // //         };
        
// // //         for (let col = 0; col < 6; col++) {
// // //           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// // //           ws[cellRef].s = finalTotalStyle;
// // //         }
        
// // //         currentRow++;
// // //       }
      
// // //       // Add notes
// // //       currentRow += 2;
// // //       const notes = [
// // //         ['NOTE -'],
// // //         ['If there is any additional requirement, a revised estimate will be shared.'],
// // //         ['A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.'],
// // //         ['Payment teams will be 50% advance on commercial approval & 50% after project delivery.'],
// // //         ['Lights & Camera will be arranged by client.']
// // //       ];
      
// // //       XLSX.utils.sheet_add_aoa(ws, notes, { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
// // //       // Style notes
// // //       const noteStyle = {
// // //         font: { sz: 10 },
// // //         fill: { fgColor: { rgb: 'F0F0F0' } },
// // //         border: {
// // //           top: { style: 'thin' },
// // //           bottom: { style: 'thin' },
// // //           left: { style: 'thin' },
// // //           right: { style: 'thin' }
// // //         }
// // //       };
      
// // //       for (let i = 0; i < notes.length; i++) {
// // //         for (let col = 0; col < 6; col++) {
// // //           const cellRef = XLSX.utils.encode_cell({ r: currentRow + i, c: col });
// // //           if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
// // //           ws[cellRef].s = noteStyle;
// // //         }
        
// // //         // Merge note cells
// // //         ws['!merges'].push({
// // //           s: { r: currentRow + i, c: 0 },
// // //           e: { r: currentRow + i, c: 5 }
// // //         });
// // //       }
      
// // //       // Set column widths
// // //       ws['!cols'] = [
// // //         { wch: 8 },  // Sr No
// // //         { wch: 35 }, // Particular
// // //         { wch: 12 }, // Rate
// // //         { wch: 8 },  // Unit
// // //         { wch: 8 },  // Days
// // //         { wch: 15 }  // Amount
// // //       ];
      
// // //       // Set row heights for better spacing
// // //       ws['!rows'] = [];
// // //       for (let i = 0; i < currentRow + notes.length; i++) {
// // //         ws['!rows'][i] = { hpt: 20 };
// // //       }
      
// // //       XLSX.utils.book_append_sheet(wb, ws, 'Budget');
      
// // //       // Generate and download
// // //       XLSX.writeFile(wb, `${quoteId}_Budget.xlsx`);
      
// // //       setIsDownloading(false);
// // //       setDownloadSuccess(true);
      
// // //       setTimeout(() => {
// // //         setDownloadSuccess(false);
// // //       }, 2000);
// // //     } catch (error) {
// // //       console.error('Error generating Excel:', error);
// // //       setIsDownloading(false);
// // //     }
// // //   };

// // //   // Render Excel-style table
// // //   const renderExcelStyleTable = () => {
// // //     const organizedServices = getOrganizedServices();
// // //     const days = proposalData?.days || 1;
    
// // //     if (Object.keys(organizedServices).length === 0) {
// // //       return (
// // //         <div className="text-center py-4">
// // //           <span className="text-muted">No services selected</span>
// // //         </div>
// // //       );
// // //     }
    
// // //     let grandTotal = 0;
    
// // //     return (
// // //       <div>
// // //         {Object.entries(organizedServices).map(([categoryKey, subcategories]) => {
// // //           const categoryName = getCategoryDisplayName(categoryKey);
// // //           const categoryColor = categoryKey === 'pre-production' ? '#fff2cc' : 
// // //                                categoryKey === 'production' ? '#d5e8d4' : '#dae8fc';
          
// // //           return (
// // //             <div key={categoryKey} className="mb-4">
// // //               {/* Category Header */}
// // //               <Table bordered className="mb-2">
// // //                 <thead>
// // //                   <tr style={{ backgroundColor: categoryColor }}>
// // //                     <th className="text-center" colSpan={6}>
// // //                       <strong>{categoryName}</strong>
// // //                     </th>
// // //                   </tr>
// // //                 </thead>
// // //               </Table>
              
// // //               {/* Subcategories */}
// // //               {Object.entries(subcategories).map(([subcategoryKey, services]) => {
// // //                 const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
// // //                 let subcategoryTotal = 0;
                
// // //                 return (
// // //                   <div key={subcategoryKey} className="mb-3">
// // //                     <Table bordered size="sm">
// // //                       <thead>
// // //                         <tr style={{ backgroundColor: categoryColor }}>
// // //                           <th className="text-center" colSpan={6}>
// // //                             <strong>{subcategoryName}</strong>
// // //                           </th>
// // //                         </tr>
// // //                         <tr className="table-secondary">
// // //                           <th style={{ width: '80px' }}>Sr No.</th>
// // //                           <th>Particular</th>
// // //                           <th style={{ width: '100px' }}>Rate</th>
// // //                           <th style={{ width: '80px' }}>Unit</th>
// // //                           <th style={{ width: '80px' }}>Days</th>
// // //                           <th style={{ width: '120px' }}>Amount</th>
// // //                         </tr>
// // //                       </thead>
// // //                       <tbody>
// // //                         {services.map((service, index) => {
// // //                           const amount = service.total || 0;
// // //                           subcategoryTotal += amount;
// // //                           grandTotal += amount;
                          
// // //                           return (
// // //                             <tr key={index}>
// // //                               <td className="text-center">{index + 1}</td>
// // //                               <td>{service.service_name}</td>
// // //                               <td className="text-end">{formatCurrency(service.rate_per_day || 0)}</td>
// // //                               <td className="text-center">1</td>
// // //                               <td className="text-center">{days}</td>
// // //                               <td className="text-end">{formatCurrency(amount)}</td>
// // //                             </tr>
// // //                           );
// // //                         })}
// // //                         <tr className="table-warning">
// // //                           <td colSpan={5} className="text-center"><strong>Total</strong></td>
// // //                           <td className="text-end"><strong>{formatCurrency(subcategoryTotal)}</strong></td>
// // //                         </tr>
// // //                       </tbody>
// // //                     </Table>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           );
// // //         })}
        
// // //         {/* Final Totals */}
// // //         <Table bordered className="mt-4">
// // //           <tbody>
// // //             <tr className="table-info">
// // //               <td colSpan={5} className="text-center"><strong>Grand Total</strong></td>
// // //               <td className="text-end"><strong>₹{formatCurrency(grandTotal)}</strong></td>
// // //             </tr>
// // //             {proposalData?.commission_rate > 0 && (
// // //               <>
// // //                 <tr className="table-warning">
// // //                   <td colSpan={5} className="text-center">
// // //                     <strong>Agency Commission ({proposalData.commission_rate}%)</strong>
// // //                   </td>
// // //                   <td className="text-end">
// // //                     <strong>₹{formatCurrency((grandTotal * proposalData.commission_rate) / 100)}</strong>
// // //                   </td>
// // //                 </tr>
// // //                 <tr className="table-success">
// // //                   <td colSpan={5} className="text-center"><strong>Final Total</strong></td>
// // //                   <td className="text-end">
// // //                     <strong>₹{formatCurrency(grandTotal + (grandTotal * proposalData.commission_rate) / 100)}</strong>
// // //                   </td>
// // //                 </tr>
// // //               </>
// // //             )}
// // //           </tbody>
// // //         </Table>
// // //       </div>
// // //     );
// // //   };

// // //   // Determine download button content
// // //   const getDownloadButton = () => {
// // //     if (isDownloading) {
// // //       return (
// // //         <Button variant="success" disabled className="download-btn">
// // //           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// // //           Generating Excel...
// // //         </Button>
// // //       );
// // //     }
    
// // //     if (downloadSuccess) {
// // //       return (
// // //         <Button variant="success" className="download-btn success-animation">
// // //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// // //           Downloaded!
// // //         </Button>
// // //       );
// // //     }
    
// // //     return (
// // //       <Button variant="success" onClick={downloadExcel} className="download-btn pulse-animation">
// // //         <FontAwesomeIcon icon={faFileExcel} className="me-2" />
// // //         Download Excel
// // //       </Button>
// // //     );
// // //   };

// // //   return (
// // //     <Container className="mt-4 mb-5" style={{ maxWidth: '1000px' }}>
// // //       <Card className="shadow-sm border-0">
// // //         <Card.Header className="bg-primary text-white">
// // //           <div className="d-flex justify-content-between align-items-center">
// // //             <h4 className="mb-0">Budget for - {proposalData?.client_name || 'Client'}</h4>
// // //             <small>{quoteId}</small>
// // //             <img src={Logo} alt="TSBI Studios Logo" width={50} height={50} className="rounded-circle" />
// // //           </div>
// // //           <div className="mt-2">
// // //             <div>{proposalData?.days || 1} day shoot (20hrs shift)</div>
// // //             <div>Agency/Production House - The Small Big Idea (TSBI Studios)</div>
// // //             <div>Location - {proposalData?.location || ''}</div>
// // //             <div>Proposal Date - {formatDate(new Date())}</div>
// // //           </div>
// // //         </Card.Header>
        
// // //         <Card.Body className="p-0">
// // //           {renderExcelStyleTable()}
          
// // //           {/* Notes Section */}
// // //           <div className="p-3 bg-light border-top">
// // //             <small>
// // //               <strong>NOTE:</strong><br />
// // //               If there is any additional requirement, a revised estimate will be shared.<br />
// // //               A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.<br />
// // //               Payment terms will be 50% advance on commercial approval & 50% after project delivery.<br />
// // //               Lights & Camera will be arranged by client.
// // //             </small>
// // //           </div>
          
// // //           {/* Action Buttons */}
// // //           <div className="d-flex justify-content-between p-3 border-top">
// // //             <Button variant="outline-secondary" onClick={onBack} size="lg">
// // //               Create New Proposal
// // //             </Button>
// // //             {getDownloadButton()}
// // //           </div>
// // //         </Card.Body>
// // //       </Card>
// // //     </Container>
// // //   );
// // // }

// // // export default ProposalSummary;
// // import React, { useState } from 'react';
// // import { Card, Button, Table, Container, Spinner } from 'react-bootstrap';
// // import { downloadProposal } from '../../services/api';
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import { faDownload, faCheck, faFileExcel } from '@fortawesome/free-solid-svg-icons';
// // import * as XLSX from 'xlsx';
// // import './ProposalSummary.css';
// // import Logo from '../../assets/Logo.png';

// // function ProposalSummary({ data, onBack, servicesList = [] }) {
// //   const [isDownloading, setIsDownloading] = useState(false);
// //   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
// //   console.log('ProposalSummary received data:', data);
// //   console.log('ServicesList:', servicesList);
  
// //   // Extract the actual proposal data
// //   const responseData = data?.data || data || {};
// //   const proposalData = responseData?.proposalData || responseData;
// //   const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
// //   console.log('Extracted proposalData:', proposalData);
// //   console.log('Extracted quoteId:', quoteId);

// //   // Format date for display
// //   const formatDate = (dateString) => {
// //     if (!dateString) return 'Not specified';
    
// //     try {
// //       const date = new Date(dateString);
// //       return date.toLocaleDateString('en-IN', {
// //         day: '2-digit',
// //         month: 'long',
// //         year: 'numeric'
// //       });
// //     } catch (e) {
// //       return dateString;
// //     }
// //   };

// //   // Format currency for display
// //   const formatCurrency = (amount) => {
// //     return Number(amount || 0).toLocaleString();
// //   };

// //   // Get services organized by category and subcategory
// //   const getOrganizedServices = () => {
// //     let selectedServicesWithDetails = proposalData?.servicesBreakdown || [];
    
// //     if (selectedServicesWithDetails.length === 0 && proposalData?.services && servicesList.length > 0) {
// //       const selectedServiceIds = proposalData.services;
// //       const days = proposalData?.days || 1;
      
// //       selectedServicesWithDetails = selectedServiceIds.map(serviceId => {
// //         const service = servicesList.find(s => s.id.toString() === serviceId.toString());
// //         if (service) {
// //           return {
// //             ...service,
// //             total: service.rate_per_day * days,
// //             days: days
// //           };
// //         }
// //         return null;
// //       }).filter(Boolean);
// //     }
    
// //     if (selectedServicesWithDetails.length === 0 && proposalData?.services) {
// //       if (typeof proposalData.services === 'string') {
// //         const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
// //         selectedServicesWithDetails = proposalData.services.split(',').map(item => {
// //           const match = item.trim().match(serviceRegex);
// //           if (match) {
// //             return {
// //               service_name: match[1].trim(),
// //               total: parseInt(match[2].replace(/,/g, '')),
// //               category: 'legacy',
// //               subcategory: 'general',
// //               rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1)
// //             };
// //           }
// //           return null;
// //         }).filter(Boolean);
// //       }
// //     }
    
// //     const organized = {};
// //     selectedServicesWithDetails.forEach(service => {
// //       const category = service.category || 'pre-production';
// //       const subcategory = service.subcategory || 'part-1';
      
// //       if (!organized[category]) {
// //         organized[category] = {};
// //       }
// //       if (!organized[category][subcategory]) {
// //         organized[category][subcategory] = [];
// //       }
// //       organized[category][subcategory].push(service);
// //     });
    
// //     return organized;
// //   };

// //   // Helper functions for display names
// //   const getCategoryDisplayName = (categoryKey) => {
// //     const categoryMap = {
// //       'pre-production': 'Pre-Production',
// //       'production': 'Production',
// //       'post-production': 'Post Production',
// //       'legacy': 'General'
// //     };
// //     return categoryMap[categoryKey] || categoryKey;
// //   };

// //   const getSubcategoryDisplayName = (categoryKey, subcategoryKey) => {
// //     const subcategoryMap = {
// //       'pre-production': {
// //         'part-1': 'Part 1',
// //         'part-1-shoot-location': 'Part 1 - Shoot Location',
// //         'legal-permits': 'Legal & Permits',
// //         'logistics': 'Logistics & Planning'
// //       },
// //       'production': {
// //         'creative-team': 'Part 2 - Creative Team',
// //         'production-team': 'Part 2 - Production Team',
// //         'production-design': 'Part 2 - Production Design',
// //         'talent': 'Part 2 - Talent',
// //         'hair-makeup': 'Part 2 - Hair & Make-UP',
// //         'wardrobe': 'Part 2 - Wardrobe',
// //         'camera-grip': 'Part 2 - Camera & Grip',
// //         'lights': 'Part 2 - Lights',
// //         'vehicles': 'Part 2 - Vehicles Hire',
// //         'catering': 'Part 2 - Catering',
// //         'miscellaneous': 'Part 2 - Miscellaneous'
// //       },
// //       'post-production': {
// //         'general': 'Post Production',
// //         'editing': 'Editing & Graphics',
// //         'audio': 'Audio Post Production',
// //         'delivery': 'Delivery & Distribution'
// //       }
// //     };
// //     return subcategoryMap[categoryKey]?.[subcategoryKey] || subcategoryKey;
// //   };

// //   // Generate Excel and download with proper styling
// //   const downloadExcel = () => {
// //     setIsDownloading(true);
    
// //     try {
// //       const organizedServices = getOrganizedServices();
// //       const days = proposalData?.days || 1;
      
// //       // Create Excel data structure
// //       const excelData = [];
      
// //       // Header information with styling
// //       excelData.push([`Budget for - ${proposalData?.client_name || 'Client'}`]);
// //       excelData.push([`${days} day shoot (20hrs shift)`]);
// //       excelData.push(['Agency/Production House - The Small Big Idea (TSBI Studios)']);
// //       excelData.push([`Location - ${proposalData?.location || ''}`]);
// //       excelData.push([`Proposal Date - ${formatDate(new Date())}`]);
// //       excelData.push([]); // Empty row
      
// //       let grandTotal = 0;
// //       let currentRow = 6; // Starting row for data (0-indexed)
      
// //       // Create workbook and worksheet
// //       const wb = XLSX.utils.book_new();
// //       const ws = XLSX.utils.aoa_to_sheet([]);
      
// //       // Add header data
// //       XLSX.utils.sheet_add_aoa(ws, excelData, { origin: 'A1' });
      
// //       // Style the header
// //       const headerStyle = {
// //         font: { bold: true, sz: 12 },
// //         alignment: { horizontal: 'left' },
// //         fill: { fgColor: { rgb: 'E7E6E6' } }
// //       };
      
// //       // Apply header styling
// //       for (let i = 0; i < 5; i++) {
// //         const cellRef = XLSX.utils.encode_cell({ r: i, c: 0 });
// //         if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
// //         ws[cellRef].s = headerStyle;
// //       }
      
// //       // Process each category
// //       Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
// //         const categoryName = getCategoryDisplayName(categoryKey);
        
// //         // Category colors
// //         const categoryColors = {
// //           'pre-production': 'FFF2CC',
// //           'production': 'D5E8D4',
// //           'post-production': 'DAE8FC',
// //           'legacy': 'F0F0F0'
// //         };
        
// //         const categoryColor = categoryColors[categoryKey] || 'F0F0F0';
        
// //         // Add category header
// //         XLSX.utils.sheet_add_aoa(ws, [[categoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
// //         // Style category header
// //         const categoryHeaderStyle = {
// //           font: { bold: true, sz: 14 },
// //           alignment: { horizontal: 'center' },
// //           fill: { fgColor: { rgb: categoryColor } },
// //           border: {
// //             top: { style: 'thin' },
// //             bottom: { style: 'thin' },
// //             left: { style: 'thin' },
// //             right: { style: 'thin' }
// //           }
// //         };
        
// //         // Apply category header styling across 6 columns
// //         for (let col = 0; col < 6; col++) {
// //           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //           if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? categoryName : '' };
// //           ws[cellRef].s = categoryHeaderStyle;
// //         }
        
// //         // Merge category header cells
// //         if (!ws['!merges']) ws['!merges'] = [];
// //         ws['!merges'].push({
// //           s: { r: currentRow, c: 0 },
// //           e: { r: currentRow, c: 5 }
// //         });
        
// //         currentRow++;
        
// //         // Process each subcategory
// //         Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
// //           const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
// //           let subcategoryTotal = 0;
          
// //           // Add subcategory header
// //           XLSX.utils.sheet_add_aoa(ws, [[subcategoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
// //           // Style subcategory header
// //           const subcatStyle = {
// //             font: { bold: true, sz: 12 },
// //             alignment: { horizontal: 'center' },
// //             fill: { fgColor: { rgb: categoryColor } },
// //             border: {
// //               top: { style: 'thin' },
// //               bottom: { style: 'thin' },
// //               left: { style: 'thin' },
// //               right: { style: 'thin' }
// //             }
// //           };
          
// //           // Apply subcategory styling across 6 columns
// //           for (let col = 0; col < 6; col++) {
// //             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //             if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? subcategoryName : '' };
// //             ws[cellRef].s = subcatStyle;
// //           }
          
// //           // Merge subcategory header cells
// //           ws['!merges'].push({
// //             s: { r: currentRow, c: 0 },
// //             e: { r: currentRow, c: 5 }
// //           });
          
// //           currentRow++;
          
// //           // Add column headers
// //           const colHeaders = ['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount'];
// //           XLSX.utils.sheet_add_aoa(ws, [colHeaders], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
// //           // Style column headers
// //           const colHeaderStyle = {
// //             font: { bold: true },
// //             alignment: { horizontal: 'center' },
// //             fill: { fgColor: { rgb: 'BFBFBF' } },
// //             border: {
// //               top: { style: 'thin' },
// //               bottom: { style: 'thin' },
// //               left: { style: 'thin' },
// //               right: { style: 'thin' }
// //             }
// //           };
          
// //           for (let col = 0; col < 6; col++) {
// //             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //             ws[cellRef].s = colHeaderStyle;
// //           }
          
// //           currentRow++;
          
// //           // Add service rows
// //           services.forEach((service, index) => {
// //             const amount = service.total || 0;
// //             subcategoryTotal += amount;
// //             grandTotal += amount;
            
// //             const serviceRow = [
// //               index + 1,
// //               service.service_name,
// //               service.rate_per_day || 0,
// //               1,
// //               days,
// //               amount
// //             ];
            
// //             XLSX.utils.sheet_add_aoa(ws, [serviceRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
// //             // Style service rows
// //             const serviceStyle = {
// //               border: {
// //                 top: { style: 'thin' },
// //                 bottom: { style: 'thin' },
// //                 left: { style: 'thin' },
// //                 right: { style: 'thin' }
// //               }
// //             };
            
// //             for (let col = 0; col < 6; col++) {
// //               const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //               ws[cellRef].s = serviceStyle;
              
// //               // Right align numbers
// //               if (col === 2 || col === 5) {
// //                 ws[cellRef].s.alignment = { horizontal: 'right' };
// //               } else if (col === 0 || col === 3 || col === 4) {
// //                 ws[cellRef].s.alignment = { horizontal: 'center' };
// //               }
// //             }
            
// //             currentRow++;
// //           });
          
// //           // Add subcategory total
// //           const totalRow = ['Total', '', '', '', '', subcategoryTotal];
// //           XLSX.utils.sheet_add_aoa(ws, [totalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
// //           // Style total row
// //           const totalStyle = {
// //             font: { bold: true },
// //             fill: { fgColor: { rgb: 'FFFF99' } },
// //             border: {
// //               top: { style: 'thin' },
// //               bottom: { style: 'thin' },
// //               left: { style: 'thin' },
// //               right: { style: 'thin' }
// //             }
// //           };
          
// //           for (let col = 0; col < 6; col++) {
// //             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //             ws[cellRef].s = totalStyle;
// //             if (col === 0 || col === 5) {
// //               ws[cellRef].s.alignment = { horizontal: 'center' };
// //             }
// //           }
          
// //           currentRow++;
// //           currentRow++; // Empty row
// //         });
// //       });
      
// //       // Add grand totals
// //       const grandTotalRow = ['Grand Total', '', '', '', '', grandTotal];
// //       XLSX.utils.sheet_add_aoa(ws, [grandTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
// //       // Style grand total
// //       const grandTotalStyle = {
// //         font: { bold: true, sz: 14 },
// //         fill: { fgColor: { rgb: 'ADD8E6' } },
// //         border: {
// //           top: { style: 'thick' },
// //           bottom: { style: 'thick' },
// //           left: { style: 'thick' },
// //           right: { style: 'thick' }
// //         },
// //         alignment: { horizontal: 'center' }
// //       };
      
// //       for (let col = 0; col < 6; col++) {
// //         const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //         ws[cellRef].s = grandTotalStyle;
// //       }
      
// //       currentRow++;
      
// //       // Add commission if applicable
// //       if (proposalData?.commission_rate > 0) {
// //         const commissionRate = proposalData.commission_rate;
// //         const commissionAmount = (grandTotal * commissionRate) / 100;
// //         const finalTotal = grandTotal + commissionAmount;
        
// //         // Commission row
// //         const commissionRow = [`Agency Commission ${commissionRate}%`, '', '', '', '', commissionAmount];
// //         XLSX.utils.sheet_add_aoa(ws, [commissionRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
// //         // Style commission row
// //         const commissionStyle = {
// //           font: { bold: true },
// //           fill: { fgColor: { rgb: 'FFFF99' } },
// //           border: {
// //             top: { style: 'thin' },
// //             bottom: { style: 'thin' },
// //             left: { style: 'thin' },
// //             right: { style: 'thin' }
// //           },
// //           alignment: { horizontal: 'center' }
// //         };
        
// //         for (let col = 0; col < 6; col++) {
// //           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //           ws[cellRef].s = commissionStyle;
// //         }
        
// //         currentRow++;
        
// //         // Final total row
// //         const finalTotalRow = ['Grand Total', '', '', '', '', finalTotal];
// //         XLSX.utils.sheet_add_aoa(ws, [finalTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
// //         // Style final total
// //         const finalTotalStyle = {
// //           font: { bold: true, sz: 14 },
// //           fill: { fgColor: { rgb: '90EE90' } },
// //           border: {
// //             top: { style: 'thick' },
// //             bottom: { style: 'thick' },
// //             left: { style: 'thick' },
// //             right: { style: 'thick' }
// //           },
// //           alignment: { horizontal: 'center' }
// //         };
        
// //         for (let col = 0; col < 6; col++) {
// //           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
// //           ws[cellRef].s = finalTotalStyle;
// //         }
        
// //         currentRow++;
// //       }
      
// //       // Add notes
// //       currentRow += 2;
// //       const notes = [
// //         ['NOTE -'],
// //         ['If there is any additional requirement, a revised estimate will be shared.'],
// //         ['A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.'],
// //         ['Payment teams will be 50% advance on commercial approval & 50% after project delivery.'],
// //         ['Lights & Camera will be arranged by client.']
// //       ];
      
// //       XLSX.utils.sheet_add_aoa(ws, notes, { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
// //       // Style notes
// //       const noteStyle = {
// //         font: { sz: 10 },
// //         fill: { fgColor: { rgb: 'F0F0F0' } },
// //         border: {
// //           top: { style: 'thin' },
// //           bottom: { style: 'thin' },
// //           left: { style: 'thin' },
// //           right: { style: 'thin' }
// //         }
// //       };
      
// //       for (let i = 0; i < notes.length; i++) {
// //         for (let col = 0; col < 6; col++) {
// //           const cellRef = XLSX.utils.encode_cell({ r: currentRow + i, c: col });
// //           if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
// //           ws[cellRef].s = noteStyle;
// //         }
        
// //         // Merge note cells
// //         ws['!merges'].push({
// //           s: { r: currentRow + i, c: 0 },
// //           e: { r: currentRow + i, c: 5 }
// //         });
// //       }
      
// //       // Set column widths
// //       ws['!cols'] = [
// //         { wch: 8 },  // Sr No
// //         { wch: 35 }, // Particular
// //         { wch: 12 }, // Rate
// //         { wch: 8 },  // Unit
// //         { wch: 8 },  // Days
// //         { wch: 15 }  // Amount
// //       ];
      
// //       // Set row heights for better spacing
// //       ws['!rows'] = [];
// //       for (let i = 0; i < currentRow + notes.length; i++) {
// //         ws['!rows'][i] = { hpt: 20 };
// //       }
      
// //       XLSX.utils.book_append_sheet(wb, ws, 'Budget');
      
// //       // Generate and download
// //       XLSX.writeFile(wb, `${quoteId}_Budget.xlsx`);
      
// //       setIsDownloading(false);
// //       setDownloadSuccess(true);
      
// //       setTimeout(() => {
// //         setDownloadSuccess(false);
// //       }, 2000);
// //     } catch (error) {
// //       console.error('Error generating Excel:', error);
// //       setIsDownloading(false);
// //     }
// //   };

// //   // Render Excel-style table to match the reference image exactly
// //   const renderExcelStyleTable = () => {
// //     const organizedServices = getOrganizedServices();
// //     const days = proposalData?.days || 1;
    
// //     if (Object.keys(organizedServices).length === 0) {
// //       return (
// //         <div className="text-center py-4">
// //           <span className="text-muted">No services selected</span>
// //         </div>
// //       );
// //     }
    
// //     let grandTotal = 0;
    
// //     return (
// //       <div style={{ border: '2px solid #000', backgroundColor: '#fff' }}>
// //         {/* Header Section - exactly like Excel */}
// //         <Table bordered className="mb-0" style={{ marginBottom: '0 !important' }}>
// //           <tbody>
// //             <tr>
// //               <td 
// //                 colSpan={5} 
// //                 className="text-center fw-bold" 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   fontSize: '14px',
// //                   borderBottom: '1px solid #000'
// //                 }}
// //               >
// //                 Budget for - {proposalData?.client_name || 'Mothercare'}
// //               </td>
// //               <td 
// //                 rowSpan={5} 
// //                 className="text-center" 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   verticalAlign: 'middle',
// //                   width: '120px'
// //                 }}
// //               >
// //                 <img src={Logo} alt="TSBI Studios Logo" width={60} height={60} className="rounded" />
// //               </td>
// //             </tr>
// //             <tr>
// //               <td 
// //                 colSpan={5} 
// //                 className="text-center" 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   borderBottom: '1px solid #000'
// //                 }}
// //               >
// //                 {proposalData?.days || 1} day shoot (20hrs shift)
// //               </td>
// //             </tr>
// //             <tr>
// //               <td 
// //                 colSpan={5} 
// //                 className="text-center" 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   borderBottom: '1px solid #000'
// //                 }}
// //               >
// //                 Agency/Production House - The Small Big Idea (TSBI Studios)
// //               </td>
// //             </tr>
// //             <tr>
// //               <td 
// //                 colSpan={5} 
// //                 className="text-center" 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   borderBottom: '1px solid #000'
// //                 }}
// //               >
// //                 Location - {proposalData?.location || ''}
// //               </td>
// //             </tr>
// //             <tr>
// //               <td 
// //                 colSpan={5} 
// //                 className="text-center" 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   borderBottom: '2px solid #000'
// //                 }}
// //               >
// //                 Proposal Date - {formatDate(new Date())}
// //               </td>
// //             </tr>
// //           </tbody>
// //         </Table>

// //         {/* Services Section */}
// //         {Object.entries(organizedServices).map(([categoryKey, subcategories]) => {
// //           const categoryName = getCategoryDisplayName(categoryKey);
          
// //           // Category colors exactly like Excel
// //           const categoryColor = categoryKey === 'pre-production' ? '#FFFF00' : 
// //                                categoryKey === 'production' ? '#00FF00' : 'rgb(235, 94, 223)'; // Light Blue for post-production
          
// //           return (
// //             <div key={categoryKey}>
// //               {/* Category Header */}
// //               <Table bordered className="mb-0">
// //                 <tbody>
// //                   <tr style={{ backgroundColor: categoryColor }}>
// //                     <td 
// //                       colSpan={6} 
// //                       className="text-center fw-bold" 
// //                       style={{ 
// //                         border: '1px solid #000', 
// //                         padding: '8px',
// //                         fontSize: '18px',
// //                         backgroundColor: categoryColor
// //                       }}
// //                     >
// //                       {categoryName}
// //                     </td>
// //                   </tr>
// //                 </tbody>
// //               </Table>
              
// //               {/* Subcategories */}
// //               {Object.entries(subcategories).map(([subcategoryKey, services]) => {
// //                 const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
// //                 let subcategoryTotal = 0;
                
// //                 return (
// //                   <div key={subcategoryKey}>
// //                     <Table bordered className="mb-0">
// //                       <tbody>
// //                         {/* Subcategory Header */}
// //                         <tr style={{ backgroundColor: categoryColor }}>
// //                           <td 
// //                             colSpan={6} 
// //                             className="text-center fw-bold" 
// //                             style={{ 
// //                               border: '1px solid #000', 
// //                               padding: '6px',
// //                               fontSize: '16px',
// //                               backgroundColor: categoryColor
// //                             }}
// //                           >
// //                             {subcategoryName}
// //                           </td>
// //                         </tr>
                        
// //                         {/* Column Headers */}
// //                         <tr style={{ backgroundColor: '#E0E0E0' }}>
// //                           <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Sr No.</td>
// //                           <td className=" fw-bold" style={{ border: '1px solid #000', padding: '4px' }}>Particular</td>
// //                           <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '80px' }}>Rate</td>
// //                           <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Unit</td>
// //                           <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Days</td>
// //                           <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '100px' }}>Amount</td>
// //                         </tr>
                        
// //                         {/* Service Rows */}
// //                         {services.map((service, index) => {
// //                           const amount = service.total || 0;
// //                           subcategoryTotal += amount;
// //                           grandTotal += amount;
                          
// //                           return (
// //                             <tr key={index}>
// //                               <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{index + 1}</td>
// //                               <td className=""  style={{ border: '1px solid #000', padding: '4px' }}>{service.service_name}</td>
// //                               <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(service.rate_per_day || 0)}</td>
// //                               <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>1</td>
// //                               <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{days}</td>
// //                               <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(amount)}</td>
// //                             </tr>
// //                           );
// //                         })}
                        
// //                         {/* Subcategory Total */}
// //                         <tr>
// //                           <td 
// //                             colSpan={5} 
// //                             className="text-center fw-bold" 
// //                             style={{ border: '1px solid #000', padding: '4px' }}
// //                           >
// //                             Total
// //                           </td>
// //                           <td 
// //                             className="text-center fw-bold" 
// //                             style={{ border: '1px solid #000', padding: '4px' }}
// //                           >
// //                             {formatCurrency(subcategoryTotal)}
// //                           </td>
// //                         </tr>
// //                       </tbody>
// //                     </Table>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           );
// //         })}
        
// //         {/* Final Totals Section */}
// //         <Table bordered className="mb-0">
// //           <tbody>
// //             <tr style={{ backgroundColor: '#ADD8E6' }}>
// //               <td 
// //                 colSpan={5} 
// //                 className="text-center fw-bold" 
// //                 style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' }}
// //               >
// //                 Grand Total
// //               </td>
// //               <td 
// //                 className="text-center fw-bold" 
// //                 style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' }}
// //               >
// //                 ₹{formatCurrency(grandTotal)}
// //               </td>
// //             </tr>
            
// //             {proposalData?.commission_rate > 0 && (
// //               <>
// //                 <tr style={{ backgroundColor: '#FFFF99' }}>
// //                   <td 
// //                     colSpan={5} 
// //                     className="text-center fw-bold" 
// //                     style={{ border: '1px solid #000', padding: '8px' }}
// //                   >
// //                     Agency Commission ({proposalData.commission_rate}%)
// //                   </td>
// //                   <td 
// //                     className="text-center fw-bold" 
// //                     style={{ border: '1px solid #000', padding: '8px' }}
// //                   >
// //                     ₹{formatCurrency((grandTotal * proposalData.commission_rate) / 100)}
// //                   </td>
// //                 </tr>
// //                 <tr style={{ backgroundColor: '#90EE90' }}>
// //                   <td 
// //                     colSpan={5} 
// //                     className="text-center fw-bold" 
// //                     style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' }}
// //                   >
// //                     Grand Total
// //                   </td>
// //                   <td 
// //                     className="text-center fw-bold" 
// //                     style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' }}
// //                   >
// //                     ₹{formatCurrency(grandTotal + (grandTotal * proposalData.commission_rate) / 100)}
// //                   </td>
// //                 </tr>
// //               </>
// //             )}
// //           </tbody>
// //         </Table>

// //         {/* Notes Section */}
// //         <Table bordered className="mb-0">
// //           <tbody>
// //             <tr>
// //               <td 
// //                 colSpan={6} 
// //                 style={{ 
// //                   border: '1px solid #000', 
// //                   padding: '8px',
// //                   backgroundColor: '#F5F5F5',
// //                   fontSize: '11px'
// //                 }}
// //               >
// //                 <strong>NOTE:</strong><br />
// //                 If there is any additional requirement, a revised estimate will be shared.<br />
// //                 A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.<br />
// //                 Payment teams will be 50% advance on commercial approval & 50% after project delivery.<br />
// //                 <strong>Lights & Camera will be arranged by client.</strong>
// //               </td>
// //             </tr>
// //           </tbody>
// //         </Table>
// //       </div>
// //     );
// //   };

// //   // Determine download button content
// //   const getDownloadButton = () => {
// //     if (isDownloading) {
// //       return (
// //         <Button variant="success" disabled className="download-btn">
// //           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
// //           Generating Excel...
// //         </Button>
// //       );
// //     }
    
// //     if (downloadSuccess) {
// //       return (
// //         <Button variant="success" className="download-btn success-animation">
// //           <FontAwesomeIcon icon={faCheck} className="me-2" />
// //           Downloaded!
// //         </Button>
// //       );
// //     }
    
// //     return (
// //       <Button variant="success" onClick={downloadExcel} className="download-btn pulse-animation">
// //         <FontAwesomeIcon icon={faFileExcel} className="me-2" />
// //         Download Excel
// //       </Button>
// //     );
// //   };

// //   return (
// //     <Container className="mt-4 mb-5" style={{ maxWidth: '1000px' }}>
// //       <Card className="shadow-sm border-0">
// //         <Card.Body className="p-0">
// //           {renderExcelStyleTable()}
          
// //           {/* Action Buttons */}
// //           <div className="d-flex justify-content-between p-3 border-top">
// //             <Button variant="outline-secondary" onClick={onBack} size="lg">
// //               Create New Proposal
// //             </Button>
// //             {getDownloadButton()}
// //           </div>
// //         </Card.Body>
// //       </Card>
// //     </Container>
// //   );
// // }

// // export default ProposalSummary;
// import React, { useState } from 'react';
// import { Card, Button, Table, Container, Spinner } from 'react-bootstrap';
// import { downloadProposal } from '../../services/api';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faDownload, faCheck, faFileExcel } from '@fortawesome/free-solid-svg-icons';
// import * as XLSX from 'xlsx';
// import './ProposalSummary.css';
// import Logo from '../../assets/Logo.png';

// function ProposalSummary({ data, onBack, servicesList = [] }) {
//   const [isDownloading, setIsDownloading] = useState(false);
//   const [downloadSuccess, setDownloadSuccess] = useState(false);
  
//   console.log('ProposalSummary received data:', data);
//   console.log('ServicesList:', servicesList);
  
//   // Extract the actual proposal data
//   const responseData = data?.data || data || {};
//   const proposalData = responseData?.proposalData || responseData;
//   const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
//   console.log('Extracted proposalData:', proposalData);
//   console.log('Extracted quoteId:', quoteId);

//   // Format date for display
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Not specified';
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-IN', {
//         day: '2-digit',
//         month: 'long',
//         year: 'numeric'
//       });
//     } catch (e) {
//       return dateString;
//     }
//   };

//   // Format currency for display
//   const formatCurrency = (amount) => {
//     return Number(amount || 0).toLocaleString();
//   };

//   // Get services organized by category and subcategory
//   const getOrganizedServices = () => {
//     let selectedServicesWithDetails = proposalData?.servicesBreakdown || [];
    
//     if (selectedServicesWithDetails.length === 0 && proposalData?.services && servicesList.length > 0) {
//       const selectedServiceIds = proposalData.services;
//       const days = proposalData?.days || 1;
      
//       selectedServicesWithDetails = selectedServiceIds.map(serviceId => {
//         const service = servicesList.find(s => s.id.toString() === serviceId.toString());
//         if (service) {
//           return {
//             ...service,
//             total: service.rate_per_day * days,
//             days: days
//           };
//         }
//         return null;
//       }).filter(Boolean);
//     }
    
//     if (selectedServicesWithDetails.length === 0 && proposalData?.services) {
//       if (typeof proposalData.services === 'string') {
//         const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
//         selectedServicesWithDetails = proposalData.services.split(',').map(item => {
//           const match = item.trim().match(serviceRegex);
//           if (match) {
//             return {
//               service_name: match[1].trim(),
//               total: parseInt(match[2].replace(/,/g, '')),
//               category: 'legacy',
//               subcategory: 'general',
//               rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1)
//             };
//           }
//           return null;
//         }).filter(Boolean);
//       }
//     }
    
//     const organized = {};
//     selectedServicesWithDetails.forEach(service => {
//       const category = service.category || 'pre-production';
      
//       if (!organized[category]) {
//         organized[category] = {};
//       }
      
//       // Handle post-production differently (no subcategories)
//       if (category === 'post-production') {
//         if (!organized[category]['all']) {
//           organized[category]['all'] = [];
//         }
//         organized[category]['all'].push(service);
//       } else {
//         // For other categories, use subcategories
//         const subcategory = service.subcategory || 'part-1';
//         if (!organized[category][subcategory]) {
//           organized[category][subcategory] = [];
//         }
//         organized[category][subcategory].push(service);
//       }
//     });
    
//     return organized;
//   };

//   // Helper functions for display names
//   const getCategoryDisplayName = (categoryKey) => {
//     const categoryMap = {
//       'pre-production': 'Pre-Production',
//       'production': 'Production',
//       'post-production': 'Part 3 - Post Production',
//       'legacy': 'General'
//     };
//     return categoryMap[categoryKey] || categoryKey;
//   };

//   const getSubcategoryDisplayName = (categoryKey, subcategoryKey) => {
//     const subcategoryMap = {
//       'pre-production': {
//         'part-1': 'Part 1',
//         'part-1-shoot-location': 'Part 1 - Shoot Location',
//         'legal-permits': 'Legal & Permits',
//         'logistics': 'Logistics & Planning'
//       },
//       'production': {
//         'creative-team': 'Part 2 - Creative Team',
//         'production-team': 'Part 2 - Production Team',
//         'production-design': 'Part 2 - Production Design',
//         'talent': 'Part 2 - Talent',
//         'hair-makeup': 'Part 2 - Hair & Make-UP',
//         'wardrobe': 'Part 2 - Wardrobe',
//         'camera-grip': 'Part 2 - Camera & Grip',
//         'lights': 'Part 2 - Lights',
//         'vehicles': 'Part 2 - Vehicles Hire',
//         'catering': 'Part 2 - Catering',
//         'miscellaneous': 'Part 2 - Miscellaneous'
//       },
//       'post-production': {
//         'general': 'Post Production',
//         'editing': 'Editing & Graphics',
//         'audio': 'Audio Post Production',
//         'delivery': 'Delivery & Distribution'
//       }
//     };
//     return subcategoryMap[categoryKey]?.[subcategoryKey] || subcategoryKey;
//   };

//   // Generate Excel and download with proper styling
//   const downloadExcel = () => {
//     setIsDownloading(true);
    
//     try {
//       const organizedServices = getOrganizedServices();
//       const days = proposalData?.days || 1;
      
//       // Create Excel data structure
//       const excelData = [];
      
//       // Header information with styling
//       excelData.push([`Budget for - ${proposalData?.client_name || 'Client'}`]);
//       excelData.push([`${days} day shoot (20hrs shift)`]);
//       excelData.push(['Agency/Production House - The Small Big Idea (TSBI Studios)']);
//       excelData.push([`Location - ${proposalData?.location || ''}`]);
//       excelData.push([`Proposal Date - ${formatDate(new Date())}`]);
//       excelData.push([]); // Empty row
      
//       let grandTotal = 0;
//       let currentRow = 6; // Starting row for data (0-indexed)
      
//       // Create workbook and worksheet
//       const wb = XLSX.utils.book_new();
//       const ws = XLSX.utils.aoa_to_sheet([]);
      
//       // Add header data
//       XLSX.utils.sheet_add_aoa(ws, excelData, { origin: 'A1' });
      
//       // Style the header
//       const headerStyle = {
//         font: { bold: true, sz: 12 },
//         alignment: { horizontal: 'left' },
//         fill: { fgColor: { rgb: 'E7E6E6' } }
//       };
      
//       // Apply header styling
//       for (let i = 0; i < 5; i++) {
//         const cellRef = XLSX.utils.encode_cell({ r: i, c: 0 });
//         if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
//         ws[cellRef].s = headerStyle;
//       }
      
//       // Process each category
//       Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
//         const categoryName = getCategoryDisplayName(categoryKey);
        
//         // Category colors
//         const categoryColors = {
//           'pre-production': 'FFF2CC',
//           'production': 'D5E8D4',
//           'post-production': 'C0C0C0',
//           'legacy': 'F0F0F0'
//         };
        
//         const categoryColor = categoryColors[categoryKey] || 'F0F0F0';
        
//         // Add category header
//         XLSX.utils.sheet_add_aoa(ws, [[categoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
//         // Style category header
//         const categoryHeaderStyle = {
//           font: { bold: true, sz: 14 },
//           alignment: { horizontal: 'center' },
//           fill: { fgColor: { rgb: categoryColor } },
//           border: {
//             top: { style: 'thin' },
//             bottom: { style: 'thin' },
//             left: { style: 'thin' },
//             right: { style: 'thin' }
//           }
//         };
        
//         // Apply category header styling across 6 columns
//         for (let col = 0; col < 6; col++) {
//           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//           if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? categoryName : '' };
//           ws[cellRef].s = categoryHeaderStyle;
//         }
        
//         // Merge category header cells
//         if (!ws['!merges']) ws['!merges'] = [];
//         ws['!merges'].push({
//           s: { r: currentRow, c: 0 },
//           e: { r: currentRow, c: 5 }
//         });
        
//         currentRow++;
        
//         // Handle post-production differently (no subcategories)
//         if (categoryKey === 'post-production') {
//           const services = subcategories.all || [];
//           let categoryTotal = 0;
          
//           // Add column headers directly
//           const colHeaders = ['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount'];
//           XLSX.utils.sheet_add_aoa(ws, [colHeaders], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
//           // Style column headers
//           const colHeaderStyle = {
//             font: { bold: true },
//             alignment: { horizontal: 'center' },
//             fill: { fgColor: { rgb: 'BFBFBF' } },
//             border: {
//               top: { style: 'thin' },
//               bottom: { style: 'thin' },
//               left: { style: 'thin' },
//               right: { style: 'thin' }
//             }
//           };
          
//           for (let col = 0; col < 6; col++) {
//             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//             ws[cellRef].s = colHeaderStyle;
//           }
          
//           currentRow++;
          
//           // Add service rows directly
//           services.forEach((service, index) => {
//             const amount = service.total || 0;
//             categoryTotal += amount;
//             grandTotal += amount;
            
//             const serviceRow = [
//               index + 1,
//               service.service_name,
//               service.rate_per_day || 0,
//               1,
//               days,
//               amount
//             ];
            
//             XLSX.utils.sheet_add_aoa(ws, [serviceRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
//             // Style service rows
//             const serviceStyle = {
//               border: {
//                 top: { style: 'thin' },
//                 bottom: { style: 'thin' },
//                 left: { style: 'thin' },
//                 right: { style: 'thin' }
//               }
//             };
            
//             for (let col = 0; col < 6; col++) {
//               const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//               ws[cellRef].s = serviceStyle;
              
//               // Right align numbers
//               if (col === 2 || col === 5) {
//                 ws[cellRef].s.alignment = { horizontal: 'right' };
//               } else if (col === 0 || col === 3 || col === 4) {
//                 ws[cellRef].s.alignment = { horizontal: 'center' };
//               }
//             }
            
//             currentRow++;
//           });
          
//           // Add category total
//           const totalRow = ['Total', '', '', '', '', categoryTotal];
//           XLSX.utils.sheet_add_aoa(ws, [totalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
//           // Style total row
//           const totalStyle = {
//             font: { bold: true },
//             fill: { fgColor: { rgb: 'FFFF99' } },
//             border: {
//               top: { style: 'thin' },
//               bottom: { style: 'thin' },
//               left: { style: 'thin' },
//               right: { style: 'thin' }
//             }
//           };
          
//           for (let col = 0; col < 6; col++) {
//             const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//             ws[cellRef].s = totalStyle;
//             if (col === 0 || col === 5) {
//               ws[cellRef].s.alignment = { horizontal: 'center' };
//             }
//           }
          
//           currentRow++;
//           currentRow++; // Empty row
//         } else {
//           // Process subcategories for other categories
//           Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
//             const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
//             let subcategoryTotal = 0;
            
//             // Add subcategory header
//             XLSX.utils.sheet_add_aoa(ws, [[subcategoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
//             // Style subcategory header
//             const subcatStyle = {
//               font: { bold: true, sz: 12 },
//               alignment: { horizontal: 'center' },
//               fill: { fgColor: { rgb: categoryColor } },
//               border: {
//                 top: { style: 'thin' },
//                 bottom: { style: 'thin' },
//                 left: { style: 'thin' },
//                 right: { style: 'thin' }
//               }
//             };
            
//             // Apply subcategory styling across 6 columns
//             for (let col = 0; col < 6; col++) {
//               const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//               if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? subcategoryName : '' };
//               ws[cellRef].s = subcatStyle;
//             }
            
//             // Merge subcategory header cells
//             ws['!merges'].push({
//               s: { r: currentRow, c: 0 },
//               e: { r: currentRow, c: 5 }
//             });
            
//             currentRow++;
            
//             // Add column headers
//             const colHeaders = ['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount'];
//             XLSX.utils.sheet_add_aoa(ws, [colHeaders], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
//             // Style column headers
//             const colHeaderStyle = {
//               font: { bold: true },
//               alignment: { horizontal: 'center' },
//               fill: { fgColor: { rgb: 'BFBFBF' } },
//               border: {
//                 top: { style: 'thin' },
//                 bottom: { style: 'thin' },
//                 left: { style: 'thin' },
//                 right: { style: 'thin' }
//               }
//             };
            
//             for (let col = 0; col < 6; col++) {
//               const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//               ws[cellRef].s = colHeaderStyle;
//             }
            
//             currentRow++;
            
//             // Add service rows
//             services.forEach((service, index) => {
//               const amount = service.total || 0;
//               subcategoryTotal += amount;
//               grandTotal += amount;
              
//               const serviceRow = [
//                 index + 1,
//                 service.service_name,
//                 service.rate_per_day || 0,
//                 1,
//                 days,
//                 amount
//               ];
              
//               XLSX.utils.sheet_add_aoa(ws, [serviceRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
              
//               // Style service rows
//               const serviceStyle = {
//                 border: {
//                   top: { style: 'thin' },
//                   bottom: { style: 'thin' },
//                   left: { style: 'thin' },
//                   right: { style: 'thin' }
//                 }
//               };
              
//               for (let col = 0; col < 6; col++) {
//                 const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//                 ws[cellRef].s = serviceStyle;
                
//                 // Right align numbers
//                 if (col === 2 || col === 5) {
//                   ws[cellRef].s.alignment = { horizontal: 'right' };
//                 } else if (col === 0 || col === 3 || col === 4) {
//                   ws[cellRef].s.alignment = { horizontal: 'center' };
//                 }
//               }
              
//               currentRow++;
//             });
            
//             // Add subcategory total
//             const totalRow = ['Total', '', '', '', '', subcategoryTotal];
//             XLSX.utils.sheet_add_aoa(ws, [totalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
//             // Style total row
//             const totalStyle = {
//               font: { bold: true },
//               fill: { fgColor: { rgb: 'FFFF99' } },
//               border: {
//                 top: { style: 'thin' },
//                 bottom: { style: 'thin' },
//                 left: { style: 'thin' },
//                 right: { style: 'thin' }
//               }
//             };
            
//             for (let col = 0; col < 6; col++) {
//               const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//               ws[cellRef].s = totalStyle;
//               if (col === 0 || col === 5) {
//                 ws[cellRef].s.alignment = { horizontal: 'center' };
//               }
//             }
            
//             currentRow++;
//             currentRow++; // Empty row
//           });
//         }
//       });
      
//       // Add grand totals
//       const grandTotalRow = ['Grand Total', '', '', '', '', grandTotal];
//       XLSX.utils.sheet_add_aoa(ws, [grandTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
//       // Style grand total
//       const grandTotalStyle = {
//         font: { bold: true, sz: 14 },
//         fill: { fgColor: { rgb: 'ADD8E6' } },
//         border: {
//           top: { style: 'thick' },
//           bottom: { style: 'thick' },
//           left: { style: 'thick' },
//           right: { style: 'thick' }
//         },
//         alignment: { horizontal: 'center' }
//       };
      
//       for (let col = 0; col < 6; col++) {
//         const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//         ws[cellRef].s = grandTotalStyle;
//       }
      
//       currentRow++;
      
//       // Add commission if applicable
//       if (proposalData?.commission_rate > 0) {
//         const commissionRate = proposalData.commission_rate;
//         const commissionAmount = (grandTotal * commissionRate) / 100;
//         const finalTotal = grandTotal + commissionAmount;
        
//         // Commission row
//         const commissionRow = [`Agency Commission ${commissionRate}%`, '', '', '', '', commissionAmount];
//         XLSX.utils.sheet_add_aoa(ws, [commissionRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
//         // Style commission row
//         const commissionStyle = {
//           font: { bold: true },
//           fill: { fgColor: { rgb: 'FFFF99' } },
//           border: {
//             top: { style: 'thin' },
//             bottom: { style: 'thin' },
//             left: { style: 'thin' },
//             right: { style: 'thin' }
//           },
//           alignment: { horizontal: 'center' }
//         };
        
//         for (let col = 0; col < 6; col++) {
//           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//           ws[cellRef].s = commissionStyle;
//         }
        
//         currentRow++;
        
//         // Final total row
//         const finalTotalRow = ['Grand Total', '', '', '', '', finalTotal];
//         XLSX.utils.sheet_add_aoa(ws, [finalTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
//         // Style final total
//         const finalTotalStyle = {
//           font: { bold: true, sz: 14 },
//           fill: { fgColor: { rgb: '90EE90' } },
//           border: {
//             top: { style: 'thick' },
//             bottom: { style: 'thick' },
//             left: { style: 'thick' },
//             right: { style: 'thick' }
//           },
//           alignment: { horizontal: 'center' }
//         };
        
//         for (let col = 0; col < 6; col++) {
//           const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
//           ws[cellRef].s = finalTotalStyle;
//         }
        
//         currentRow++;
//       }
      
//       // Add notes
//       currentRow += 2;
//       const notes = [
//         ['NOTE -'],
//         ['If there is any additional requirement, a revised estimate will be shared.'],
//         ['A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.'],
//         ['Payment teams will be 50% advance on commercial approval & 50% after project delivery.'],
//         ['Lights & Camera will be arranged by client.']
//       ];
      
//       XLSX.utils.sheet_add_aoa(ws, notes, { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
//       // Style notes
//       const noteStyle = {
//         font: { sz: 10 },
//         fill: { fgColor: { rgb: 'F0F0F0' } },
//         border: {
//           top: { style: 'thin' },
//           bottom: { style: 'thin' },
//           left: { style: 'thin' },
//           right: { style: 'thin' }
//         }
//       };
      
//       for (let i = 0; i < notes.length; i++) {
//         for (let col = 0; col < 6; col++) {
//           const cellRef = XLSX.utils.encode_cell({ r: currentRow + i, c: col });
//           if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
//           ws[cellRef].s = noteStyle;
//         }
        
//         // Merge note cells
//         ws['!merges'].push({
//           s: { r: currentRow + i, c: 0 },
//           e: { r: currentRow + i, c: 5 }
//         });
//       }
      
//       // Set column widths
//       ws['!cols'] = [
//         { wch: 8 },  // Sr No
//         { wch: 35 }, // Particular
//         { wch: 12 }, // Rate
//         { wch: 8 },  // Unit
//         { wch: 8 },  // Days
//         { wch: 15 }  // Amount
//       ];
      
//       // Set row heights for better spacing
//       ws['!rows'] = [];
//       for (let i = 0; i < currentRow + notes.length; i++) {
//         ws['!rows'][i] = { hpt: 20 };
//       }
      
//       XLSX.utils.book_append_sheet(wb, ws, 'Budget');
      
//       // Generate and download
//       XLSX.writeFile(wb, `${quoteId}_Budget.xlsx`);
      
//       setIsDownloading(false);
//       setDownloadSuccess(true);
      
//       setTimeout(() => {
//         setDownloadSuccess(false);
//       }, 2000);
//     } catch (error) {
//       console.error('Error generating Excel:', error);
//       setIsDownloading(false);
//     }
//   };

//   // Render Excel-style table to match the reference image exactly
//   const renderExcelStyleTable = () => {
//     const organizedServices = getOrganizedServices();
//     const days = proposalData?.days || 1;
    
//     if (Object.keys(organizedServices).length === 0) {
//       return (
//         <div className="text-center py-4">
//           <span className="text-muted">No services selected</span>
//         </div>
//       );
//     }
    
//     let grandTotal = 0;
    
//     return (
//       <div style={{ border: '2px solid #000', backgroundColor: '#fff' }}>
//         {/* Header Section - exactly like Excel */}
//         <Table bordered className="mb-0" style={{ marginBottom: '0 !important' }}>
//           <tbody>
//             <tr>
//               {/* <td 
//                 colSpan={5} 
//                 className="text-center fw-bold" 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   fontSize: '14px',
//                   borderBottom: '1px solid #000'
//                 }}
//               >
//                 Budget for - {proposalData?.client_name || 'Client'}
//               </td> */}
//               <td 
//   colSpan={5} 
//   className="text-center fw-bold" 
//   style={{ 
//     border: '1px solid #000', 
//     padding: '8px',
//     fontSize: '14px',
//     borderBottom: '1px solid #000'
//   }}
// >
//   Budget for - {(proposalData?.client_name?.charAt(0).toUpperCase() + proposalData?.client_name?.slice(1)) || 'Client'}
// </td>

//               <td 
//                 rowSpan={5} 
//                 className="text-center" 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   verticalAlign: 'middle',
//                   width: '120px'
//                 }}
//               >
//                 <img src={Logo} alt="TSBI Studios Logo" width={150} height={150} className="rounded" />
//               </td>
//             </tr>
//             <tr>
//               <td 
//                 colSpan={5} 
//                 className="text-center" 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   borderBottom: '1px solid #000'
//                 }}
//               >
//                 {proposalData?.days || 1} day shoot (20hrs shift)
//               </td>
//             </tr>
//             <tr>
//               <td 
//                 colSpan={5} 
//                 className="text-center" 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   borderBottom: '1px solid #000'
//                 }}
//               >
//                 Agency/Production House - The Small Big Idea (TSBI Studios)
//               </td>
//             </tr>
//             <tr>
//               <td 
//                 colSpan={5} 
//                 className="text-center" 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   borderBottom: '1px solid #000'
//                 }}
//               >
//                 Location - {proposalData?.location || ''}
//               </td>
//             </tr>
//             <tr>
//               <td 
//                 colSpan={5} 
//                 className="text-center" 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   borderBottom: '2px solid #000'
//                 }}
//               >
//                 Proposal Date - {formatDate(new Date())}
//               </td>
//             </tr>
//           </tbody>
//         </Table>

//         {/* Services Section */}
//         {Object.entries(organizedServices).map(([categoryKey, subcategories]) => {
//           const categoryName = getCategoryDisplayName(categoryKey);
          
//           // Category colors exactly like Excel
//           const categoryColor = categoryKey === 'pre-production' ? '#FFFF00' : 
//                                categoryKey === 'production' ? '#00FF00' : 'rgb(246, 105, 220)'; // Gray for post-production
          
//           return (
//             <div key={categoryKey}>
//               {/* Category Header */}
//               <Table bordered className="mb-0">
//                 <tbody>
//                   <tr style={{ backgroundColor: categoryColor }}>
//                     <td 
//                       colSpan={6} 
//                       className="text-center fw-bold" 
//                       style={{ 
//                         border: '1px solid #000', 
//                         padding: '8px',
//                         fontSize: '18px',
//                         backgroundColor: categoryColor
//                       }}
//                     >
//                       {categoryName}
//                     </td>
//                   </tr>
//                 </tbody>
//               </Table>
              
//               {/* Handle post-production without subcategories */}
//               {categoryKey === 'post-production' ? (
//                 <div>
//                   <Table bordered className="mb-0">
//                     <tbody>
//                       {/* Column Headers */}
//                       <tr style={{ backgroundColor: '#E0E0E0' }}>
//                         <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Sr No.</td>
//                         <td className="fw-bold" style={{ border: '1px solid #000', padding: '4px' }}>Particular</td>
//                         <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '80px' }}>Rate</td>
//                         <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Unit</td>
//                         <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Days</td>
//                         <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '100px' }}>Amount</td>
//                       </tr>
                      
//                       {/* Service Rows */}
//                       {(subcategories.all || []).map((service, index) => {
//                         const amount = service.total || 0;
//                         grandTotal += amount;
                        
//                         return (
//                           <tr key={index}>
//                             <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{index + 1}</td>
//                             {/* <td style={{ border: '1px solid #000', padding: '4px' }}>{service.service_name}</td> */}
//                             <td style={{ border: '1px solid #000', padding: '4px' }}>
//   {service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1)}
// </td>

//                             <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(service.rate_per_day || 0)}</td>
//                             <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>1</td>
//                             <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{days}</td>
//                             <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(amount)}</td>
//                           </tr>
//                         );
//                       })}
                      
//                       {/* Category Total */}
//                       <tr>
//                         <td 
//                           colSpan={5} 
//                           className="text-center fw-bold" 
//                           style={{ border: '1px solid #000', padding: '4px' }}
//                         >
//                           Total
//                         </td>
//                         <td 
//                           className="text-center fw-bold" 
//                           style={{ border: '1px solid #000', padding: '4px' }}
//                         >
//                           {formatCurrency((subcategories.all || []).reduce((sum, service) => sum + (service.total || 0), 0))}
//                         </td>
//                       </tr>
//                     </tbody>
//                   </Table>
//                 </div>
//               ) : (
//                 /* Regular subcategory handling for other categories */
//                 Object.entries(subcategories).map(([subcategoryKey, services]) => {
//                   const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
//                   let subcategoryTotal = 0;
                  
//                   return (
//                     <div key={subcategoryKey}>
//                       <Table bordered className="mb-0">
//                         <tbody>
//                           {/* Subcategory Header */}
//                           <tr style={{ backgroundColor: categoryColor }}>
//                             <td 
//                               colSpan={6} 
//                               className="text-center fw-bold" 
//                               style={{ 
//                                 border: '1px solid #000', 
//                                 padding: '6px',
//                                 fontSize: '15px',
//                                 backgroundColor: categoryColor
//                               }}
//                             >
//                               {subcategoryName}
//                             </td>
//                           </tr>
                          
//                           {/* Column Headers */}
//                           <tr style={{ backgroundColor: '#E0E0E0' }}>
//                             <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Sr No.</td>
//                             <td className=" fw-bold" style={{ border: '1px solid #000', padding: '4px' }}>Particular</td>
//                             <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '80px' }}>Rate</td>
//                             <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Unit</td>
//                             <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Days</td>
//                             <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '100px' }}>Amount</td>
//                           </tr>
                          
//                           {/* Service Rows */}
//                           {services.map((service, index) => {
//                             const amount = service.total || 0;
//                             subcategoryTotal += amount;
//                             grandTotal += amount;
                            
//                             return (
//                               <tr key={index}>
//                                 <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{index + 1}</td>
//                                 {/* <td style={{ border: '1px solid #000', padding: '4px' }}>{service.service_name}</td> */}
//                                 <td style={{ border: '1px solid #000', padding: '4px' }}>
//   {service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1)}
// </td>

//                                 <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(service.rate_per_day || 0)}</td>
//                                 <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>1</td>
//                                 <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{days}</td>
//                                 <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(amount)}</td>
//                               </tr>
//                             );
//                           })}
                          
//                           {/* Subcategory Total */}
//                           <tr>
//                             <td 
//                               colSpan={5} 
//                               className="text-center fw-bold" 
//                               style={{ border: '1px solid #000', padding: '4px' }}
//                             >
//                               Total
//                             </td>
//                             <td 
//                               className="text-center fw-bold" 
//                               style={{ border: '1px solid #000', padding: '4px' }}
//                             >
//                               {formatCurrency(subcategoryTotal)}
//                             </td>
//                           </tr>
//                         </tbody>
//                       </Table>
//                     </div>
//                   );
//                 })
//               )}
//             </div>
//           );
//         })}
        
//         {/* Final Totals Section */}
//         <Table bordered className="mb-0">
//           <tbody>
//             <tr style={{ backgroundColor: '#ADD8E6' }}>
//               <td 
//                 colSpan={5} 
//                 className="text-center fw-bold" 
//                 style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' ,backgroundColor: 'rgb(59, 164, 229)'}}
//               >
//                 Grand Total
//               </td>
//               <td 
//                 className="text-center fw-bold" 
//                 style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' ,backgroundColor: 'rgb(216, 229, 70)'}}
//               >
//                 ₹{formatCurrency(grandTotal)}
//               </td>
//             </tr>
            
//             {proposalData?.commission_rate > 0 && (
//               <>
//                 <tr style={{ backgroundColor: '#FFFF99' }}>
//                   <td 
//                     colSpan={5} 
//                     className="text-center fw-bold" 
//                     style={{ border: '1px solid #000', padding: '8px',backgroundColor: 'rgb(59, 164, 229)' }}
//                   >
//                     Agency Commission ({proposalData.commission_rate}%)
//                   </td>
//                   <td 
//                     className="text-center fw-bold" 
//                     style={{ border: '1px solid #000', padding: '8px',backgroundColor: 'rgb(59, 164, 229)' }}
//                   >
//                     ₹{formatCurrency((grandTotal * proposalData.commission_rate) / 100)}
//                   </td>
//                 </tr>
//                 <tr style={{ backgroundColor: '#90EE90' }}>
//                   <td 
//                     colSpan={5} 
//                     className="text-center fw-bold" 
//                     style={{ border: '1px solid #000', padding: '8px', fontSize: '14px',backgroundColor: 'rgb(59, 164, 229)' }}
//                   >
//                     Grand Total
//                   </td>
//                   <td 
//                     className="text-center fw-bold" 
//                     style={{ border: '1px solid #000', padding: '8px', fontSize: '14px',backgroundColor: 'rgb(59, 164, 229)' }}
//                   >
//                     ₹{formatCurrency(grandTotal + (grandTotal * proposalData.commission_rate) / 100)}
//                   </td>
//                 </tr>
//               </>
//             )}
//           </tbody>
//         </Table>

//         {/* Notes Section */}
//         <Table bordered className="mb-0">
//           <tbody>
//             <tr>
//               <td 
//                 colSpan={6} 
//                 style={{ 
//                   border: '1px solid #000', 
//                   padding: '8px',
//                   backgroundColor: '#F5F5F5',
//                   fontSize: '11px'
//                 }}
//               >
//                 <strong>NOTE:</strong><br />
//                 If there is any additional requirement, a revised estimate will be shared.<br />
//                 A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.<br />
//                 Payment teams will be 50% advance on commercial approval & 50% after project delivery.<br />
//                 <strong>Lights & Camera will be arranged by client.</strong>
//               </td>
//             </tr>
//           </tbody>
//         </Table>
//       </div>
//     );
//   };

//   // Determine download button content
//   const getDownloadButton = () => {
//     if (isDownloading) {
//       return (
//         <Button variant="success" disabled className="download-btn">
//           <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
//           Generating Excel...
//         </Button>
//       );
//     }
    
//     if (downloadSuccess) {
//       return (
//         <Button variant="success" className="download-btn success-animation">
//           <FontAwesomeIcon icon={faCheck} className="me-2" />
//           Downloaded!
//         </Button>
//       );
//     }
    
//     return (
//       <Button variant="success" onClick={downloadExcel} className="download-btn pulse-animation">
//         <FontAwesomeIcon icon={faFileExcel} className="me-2" />
//         Download Excel
//       </Button>
//     );
//   };

//   return (
//     <Container className="mt-4 mb-5" style={{ maxWidth: '1000px' }}>
//       <Card className="shadow-sm border-0">
//         <Card.Body className="p-0">
//           {renderExcelStyleTable()}
          
//           {/* Action Buttons */}
//           <div className="d-flex justify-content-between p-3 border-top">
//             <Button variant="outline-secondary" onClick={onBack} size="lg">
//               Create New Proposal
//             </Button>
//             {getDownloadButton()}
//           </div>
//         </Card.Body>
//       </Card>
//     </Container>
//   );
// }

// export default ProposalSummary;
import React, { useState } from 'react';
import { Card, Button, Table, Container, Spinner, Modal,OverlayTrigger,Tooltip } from 'react-bootstrap';
import { downloadProposal } from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck, faFileExcel, faFilePdf, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import * as XLSX from 'xlsx';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';
import './ProposalSummary.css';
import Logo from '../../assets/Logo.png';

function ProposalSummary({ data, onBack, servicesList = [] }) {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPdfDownloading, setIsPdfDownloading] = useState(false);
  const [pdfDownloadSuccess, setPdfDownloadSuccess] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  
  console.log('ProposalSummary received data:', data);
  console.log('ServicesList:', servicesList);
  
  // Extract the actual proposal data
  const responseData = data?.data || data || {};
  const proposalData = responseData?.proposalData || responseData;
  const quoteId = responseData?.quoteId || proposalData?.quote_id || proposalData?.quoteId || 'Unknown';
  
  console.log('Extracted proposalData:', proposalData);
  console.log('Extracted quoteId:', quoteId);

  // Handle create new proposal with confirmation
  const handleCreateNewProposal = () => {
    setShowConfirmModal(true);
  };

  const confirmCreateNewProposal = () => {
    setShowConfirmModal(false);
    onBack();
  };

  const cancelCreateNewProposal = () => {
    setShowConfirmModal(false);
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch (e) {
      return dateString;
    }
  };

  // Format currency for display
  const formatCurrency = (amount) => {
    return Number(amount || 0).toLocaleString();
  };

  // Get services organized by category and subcategory
  const getOrganizedServices = () => {
    let selectedServicesWithDetails = proposalData?.servicesBreakdown || [];
    
    if (selectedServicesWithDetails.length === 0 && proposalData?.services && servicesList.length > 0) {
      const selectedServiceIds = proposalData.services;
      const days = proposalData?.days || 1;
      
      selectedServicesWithDetails = selectedServiceIds.map(serviceId => {
        const service = servicesList.find(s => s.id.toString() === serviceId.toString());
        if (service) {
          return {
            ...service,
            total: service.rate_per_day * days,
            days: days
          };
        }
        return null;
      }).filter(Boolean);
    }
    
    if (selectedServicesWithDetails.length === 0 && proposalData?.services) {
      if (typeof proposalData.services === 'string') {
        const serviceRegex = /^(.*?) – ₹([\d,]+)$/;
        selectedServicesWithDetails = proposalData.services.split(',').map(item => {
          const match = item.trim().match(serviceRegex);
          if (match) {
            return {
              service_name: match[1].trim(),
              total: parseInt(match[2].replace(/,/g, '')),
              category: 'legacy',
              subcategory: 'general',
              rate_per_day: parseInt(match[2].replace(/,/g, '')) / (proposalData?.days || 1)
            };
          }
          return null;
        }).filter(Boolean);
      }
    }
    
    const organized = {};
    selectedServicesWithDetails.forEach(service => {
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
    
    return organized;
  };

  // Helper functions for display names
  const getCategoryDisplayName = (categoryKey) => {
    const categoryMap = {
      'pre-production': 'Pre-Production',
      'production': 'Production',
      'post-production': 'Part 3 - Post Production',
      'legacy': 'General'
    };
    return categoryMap[categoryKey] || categoryKey;
  };

  const getSubcategoryDisplayName = (categoryKey, subcategoryKey) => {
    const subcategoryMap = {
      'pre-production': {
        'part-1': 'Part 1',
        'part-1-shoot-location': 'Part 1 - Shoot Location',
        'legal-permits': 'Legal & Permits',
        'logistics': 'Logistics & Planning'
      },
      'production': {
        'creative-team': 'Part 2 - Creative Team',
        'production-team': 'Part 2 - Production Team',
        'production-design': 'Part 2 - Production Design',
        'talent': 'Part 2 - Talent',
        'hair-makeup': 'Part 2 - Hair & Make-UP',
        'wardrobe': 'Part 2 - Wardrobe',
        'camera-grip': 'Part 2 - Camera & Grip',
        'lights': 'Part 2 - Lights',
        'vehicles': 'Part 2 - Vehicles Hire',
        'catering': 'Part 2 - Catering',
        'miscellaneous': 'Part 2 - Miscellaneous'
      },
      'post-production': {
        'general': 'Post Production',
        'editing': 'Editing & Graphics',
        'audio': 'Audio Post Production',
        'delivery': 'Delivery & Distribution'
      }
    };
    return subcategoryMap[categoryKey]?.[subcategoryKey] || subcategoryKey;
  };

  const convertImageToBase64 = (imagePath) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      const dataURL = canvas.toDataURL('image/png');
      resolve(dataURL);
    };
    img.onerror = reject;
    img.src = imagePath;
  });
};

  // Generate PDF and download
  // const downloadPdf = () => {
  //   setIsPdfDownloading(true);
    
  //   try {
  //     const organizedServices = getOrganizedServices();
  //     const days = proposalData?.days || 1;
      
  //     // Create new PDF document
  //     const doc = new jsPDF('p', 'mm', 'a4');
  //     const pageWidth = doc.internal.pageSize.width;
  //     const pageHeight = doc.internal.pageSize.height;
  //     let currentY = 20;
      
  //     // Header section
  //     doc.setFontSize(16);
  //     doc.setFont('helvetica', 'bold');
      
  //     const clientName = proposalData?.client_name ? 
  //       proposalData.client_name.charAt(0).toUpperCase() + proposalData.client_name.slice(1) : 
  //       'Client';
      
  //     doc.text(`Budget for - ${clientName}`, pageWidth / 2, currentY, { align: 'center' });
  //     currentY += 10;
      
  //     doc.setFontSize(12);
  //     doc.setFont('helvetica', 'normal');
  //     doc.text(`${days} day shoot (20hrs shift)`, pageWidth / 2, currentY, { align: 'center' });
  //     currentY += 8;
      
  //     doc.text('Agency/Production House - The Small Big Idea (TSBI Studios)', pageWidth / 2, currentY, { align: 'center' });
  //     currentY += 8;
      
  //     doc.text(`Location - ${proposalData?.location || ''}`, pageWidth / 2, currentY, { align: 'center' });
  //     currentY += 8;
      
  //     doc.text(`Proposal Date - ${formatDate(new Date())}`, pageWidth / 2, currentY, { align: 'center' });
  //     currentY += 15;
      
  //     let grandTotal = 0;
      
  //     // Process each category
  //     Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
  //       const categoryName = getCategoryDisplayName(categoryKey);
        
  //       // Check if we need a new page
  //       if (currentY > pageHeight - 50) {
  //         doc.addPage();
  //         currentY = 20;
  //       }
        
  //       // Category header
  //       doc.setFontSize(14);
  //       doc.setFont('helvetica', 'bold');
  //       doc.setFillColor(255, 255, 0); // Yellow background for categories
  //       if (categoryKey === 'production') {
  //         doc.setFillColor(0, 255, 0); // Green for production
  //       } else if (categoryKey === 'post-production') {
  //         doc.setFillColor(246, 105, 220); // Pink for post-production
  //       }
        
  //       doc.rect(20, currentY - 5, pageWidth - 40, 10, 'F');
  //       doc.setTextColor(0, 0, 0);
  //       doc.text(categoryName, pageWidth / 2, currentY, { align: 'center' });
  //       currentY += 15;

  //       // Handle post-production without subcategories
  //       if (categoryKey === 'post-production') {
  //         const services = subcategories.all || [];
  //         let categoryTotal = 0;
          
  //         // Table headers
  //         const headers = [['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount']];
  //         const tableData = services.map((service, index) => {
  //           const amount = service.total || 0;
  //           categoryTotal += amount;
  //           grandTotal += amount;
            
  //           const serviceName = service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1);
            
  //           return [
  //             (index + 1).toString(),
  //             serviceName,
  //             formatCurrency(service.rate_per_day || 0),
  //             '1',
  //             days.toString(),
  //             formatCurrency(amount)
  //           ];
  //         });
          
  //         // Add total row
  //         tableData.push(['Total', '', '', '', '', formatCurrency(categoryTotal)]);
          
  //         autoTable(doc, {
  //           startY: currentY,
  //           head: headers,
  //           body: tableData,
  //           theme: 'grid',
  //           styles: {
  //             fontSize: 10,
  //             cellPadding: 2,
  //             halign: 'center'
  //           },
  //           headStyles: {
  //             fillColor: [224, 224, 224],
  //             textColor: [0, 0, 0],
  //             fontStyle: 'bold'
  //           },
  //           columnStyles: {
  //             1: { halign: 'left' }, // Particular column left aligned
  //             2: { halign: 'right' }, // Rate column right aligned
  //             5: { halign: 'right' }  // Amount column right aligned
  //           },
  //           didParseCell: function(data) {
  //             // Style total row
  //             if (data.row.index === tableData.length - 1) {
  //               data.cell.styles.fontStyle = 'bold';
  //               data.cell.styles.fillColor = [255, 255, 153]; // Light yellow
  //             }
  //           }
  //         });
          
  //         currentY = doc.lastAutoTable.finalY + 10;
  //       } else {
  //         // Process subcategories for other categories
  //         Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
  //           const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
  //           let subcategoryTotal = 0;
            
  //           // Check if we need a new page
  //           if (currentY > pageHeight - 60) {
  //             doc.addPage();
  //             currentY = 20;
  //           }
            
  //           // Subcategory header
  //           doc.setFontSize(12);
  //           doc.setFont('helvetica', 'bold');
  //           doc.setFillColor(255, 255, 0); // Yellow background
  //           if (categoryKey === 'production') {
  //             doc.setFillColor(0, 255, 0); // Green for production
  //           }
            
  //           doc.rect(20, currentY - 5, pageWidth - 40, 8, 'F');
  //           doc.text(subcategoryName, pageWidth / 2, currentY, { align: 'center' });
  //           currentY += 12;
            
  //           // Table headers
  //           const headers = [['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount']];
  //           const tableData = services.map((service, index) => {
  //             const amount = service.total || 0;
  //             subcategoryTotal += amount;
  //             grandTotal += amount;
              
  //             const serviceName = service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1);
              
  //             return [
  //               (index + 1).toString(),
  //               serviceName,
  //               formatCurrency(service.rate_per_day || 0),
  //               '1',
  //               days.toString(),
  //               formatCurrency(amount)
  //             ];
  //           });
            
  //           // Add total row
  //           tableData.push(['Total', '', '', '', '', formatCurrency(subcategoryTotal)]);
            
  //           autoTable(doc, {
  //             startY: currentY,
  //             head: headers,
  //             body: tableData,
  //             theme: 'grid',
  //             styles: {
  //               fontSize: 10,
  //               cellPadding: 2,
  //               halign: 'center'
  //             },
  //             headStyles: {
  //               fillColor: [224, 224, 224],
  //               textColor: [0, 0, 0],
  //               fontStyle: 'bold'
  //             },
  //             columnStyles: {
  //               1: { halign: 'left' }, // Particular column left aligned
  //               2: { halign: 'right' }, // Rate column right aligned
  //               5: { halign: 'right' }  // Amount column right aligned
  //             },
  //             didParseCell: function(data) {
  //               // Style total row
  //               if (data.row.index === tableData.length - 1) {
  //                 data.cell.styles.fontStyle = 'bold';
  //                 data.cell.styles.fillColor = [255, 255, 153]; // Light yellow
  //               }
  //             }
  //           });
            
  //           currentY = doc.lastAutoTable.finalY + 10;
  //         });
  //       }
  //     });
      
  //     // Check if we need a new page for totals
  //     if (currentY > pageHeight - 50) {
  //       doc.addPage();
  //       currentY = 20;
  //     }
      
  //     // Grand Total section
  //     const totalData = [['Grand Total', '', '', '', '', `₹${formatCurrency(grandTotal)}`]];
      
  //     // Add commission if applicable
  //     if (proposalData?.commission_rate > 0) {
  //       const commissionRate = proposalData.commission_rate;
  //       const commissionAmount = (grandTotal * commissionRate) / 100;
  //       const finalTotal = grandTotal + commissionAmount;
        
  //       totalData.push([`Agency Commission (${commissionRate}%)`, '', '', '', '', `₹${formatCurrency(commissionAmount)}`]);
  //       totalData.push(['Grand Total', '', '', '', '', `₹${formatCurrency(finalTotal)}`]);
  //     }
      
  //     autoTable(doc, {
  //       startY: currentY,
  //       body: totalData,
  //       theme: 'grid',
  //       styles: {
  //         fontSize: 12,
  //         cellPadding: 3,
  //         halign: 'center',
  //         fontStyle: 'bold'
  //       },
  //       didParseCell: function(data) {
  //         if (data.row.index === 0) {
  //           data.cell.styles.fillColor = [173, 216, 230]; // Light blue
  //         } else if (data.row.index === 1 && proposalData?.commission_rate > 0) {
  //           data.cell.styles.fillColor = [59, 164, 229]; // Blue
  //         } else if (data.row.index === totalData.length - 1) {
  //           data.cell.styles.fillColor = [59, 164, 229]; // Blue for final total
  //         }
  //       },
  //       columnStyles: {
  //         5: { halign: 'right' } // Amount column right aligned
  //       }
  //     });
      
  //     currentY = doc.lastAutoTable.finalY + 15;
      
  //     // Notes section
  //     doc.setFontSize(10);
  //     doc.setFont('helvetica', 'bold');
  //     doc.text('NOTE:', 20, currentY);
  //     currentY += 5;
      
  //     doc.setFont('helvetica', 'normal');
  //     const notes = [
  //       'If there is any additional requirement, a revised estimate will be shared.',
  //       'A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.',
  //       'Payment teams will be 50% advance on commercial approval & 50% after project delivery.',
  //       'Lights & Camera will be arranged by client.'
  //     ];
      
  //     notes.forEach(note => {
  //       const splitNote = doc.splitTextToSize(note, pageWidth - 40);
  //       splitNote.forEach(line => {
  //         if (currentY > pageHeight - 20) {
  //           doc.addPage();
  //           currentY = 20;
  //         }
  //         doc.text(line, 20, currentY);
  //         currentY += 5;
  //       });
  //       currentY += 2;
  //     });
      
  //     // Save the PDF
  //     doc.save(`${quoteId}_Budget.pdf`);
      
  //     setIsPdfDownloading(false);
  //     setPdfDownloadSuccess(true);
      
  //     setTimeout(() => {
  //       setPdfDownloadSuccess(false);
  //     }, 2000);
  //   } catch (error) {
  //     console.error('Error generating PDF:', error);
  //     setIsPdfDownloading(false);
  //   }
  // };
  
// Remove lines from logo area - clean header
// const downloadPdf = async () => {
//   setIsPdfDownloading(true);
  
//   try {
//     // Better logo conversion approach
//     let logoBase64;
//     // let logoBase64;
//     try {
//       logoBase64 = await convertImageToBase64(Logo);
//     } catch (error) {
//       console.log('Could not load logo, proceeding without it');
//     }
//     // try {
//     //   logoBase64 = await new Promise((resolve, reject) => {
//     //     const img = new Image();
//     //     img.crossOrigin = 'anonymous';
//     //     img.onload = () => {
//     //       try {
//     //         const canvas = document.createElement('canvas');
//     //         const ctx = canvas.getContext('2d');
//     //         canvas.width = img.naturalWidth;
//     //         canvas.height = img.naturalHeight;
//     //         ctx.drawImage(img, 0, 0);
//     //         const dataURL = canvas.toDataURL('image/png');
//     //         console.log('Logo converted to base64 successfully');
//     //         resolve(dataURL);
//     //       } catch (error) {
//     //         console.error('Error converting logo to base64:', error);
//     //         reject(error);
//     //       }
//     //     };
//     //     img.onerror = (error) => {
//     //       console.error('Error loading logo image:', error);
//     //       reject(error);
//     //     };
//     //     img.src = Logo;
//     //   });
//     // } catch (error) {
//     //   console.log('Could not load logo, proceeding without it');
//     // }
    
//     const organizedServices = getOrganizedServices();
//     const days = proposalData?.days || 1;
    
//     // Create new PDF document
//     const doc = new jsPDF('p', 'mm', 'a4');
//     const pageWidth = doc.internal.pageSize.width;
//     let currentY = 20;
    
//     const clientName = proposalData?.client_name ? 
//       proposalData.client_name.charAt(0).toUpperCase() + proposalData.client_name.slice(1) : 
//       'Client';
    
//     // Create header table with logo area having no internal borders
//     const headerTableData = [
//       [`Budget for - ${clientName}`, ''],
//       [`${days} day shoot (20hrs shift)`, ''],
//       ['Agency/Production House - The Small Big Idea (TSBI Studios)', ''],
//       [`Location - ${proposalData?.location || ''}`, ''],
//       [`Proposal Date - ${formatDate(new Date())}`, '']
//     ];
    
//     autoTable(doc, {
//       startY: currentY,
//       body: headerTableData,
//       theme: 'grid',
//       styles: {
//         fontSize: 10,
//         cellPadding: 4,
//         halign: 'center',
//         fontStyle: 'bold',
//         lineColor: [0, 0, 0],
//         lineWidth: 0.5,
//         fillColor: [255, 255, 255]
//       },
//       columnStyles: {
//         0: { cellWidth: 140, halign: 'center' },
//         1: { 
//           cellWidth: 50, 
//           halign: 'center',
//           // Remove internal borders for logo column
//           lineColor: [255, 255, 255], // Make lines white (invisible)
//           lineWidth: 0
//         }
//       },
//       didParseCell: function(data) {
//         // Clear text from logo column
//         if (data.column.index === 1) {
//           data.cell.text = [''];
//           // Remove borders for logo cells except outer border
//           if (data.row.index > 0) {
//             data.cell.styles.lineColor = [255, 255, 255]; // Make internal lines invisible
//             data.cell.styles.lineWidth = 0;
//           }
//         }
//       },
//       didDrawPage: function(data) {
//         // Add logo after the table is drawn
//         if (logoBase64) {
//           try {
//             // Calculate logo position relative to the header table
//             const logoX = pageWidth - 55; // Right side position
//             const logoY = currentY + 5;   // Top of header + small margin
//             const logoWidth = 40;
//             const logoHeight = 40;
            
//             doc.addImage(logoBase64, 'PNG', logoX, logoY, logoWidth, logoHeight);
            
//             // Draw clean border around logo area (only outer border)
//             doc.setLineWidth(0.5);
//             doc.setDrawColor(0, 0, 0);
//             // Right border of logo area
//             doc.line(pageWidth - 20, currentY, pageWidth - 20, currentY + 50);
//             // Top border of logo area
//             doc.line(pageWidth - 70, currentY, pageWidth - 20, currentY);
//             // Bottom border of logo area  
//             doc.line(pageWidth - 70, currentY + 50, pageWidth - 20, currentY + 50);
            
//             console.log('Logo successfully added to PDF with clean borders');
//           } catch (error) {
//             console.error('Error adding logo to PDF:', error);
//           }
//         }
//       }
//     });
    
//     currentY = doc.lastAutoTable.finalY + 5;
//     let grandTotal = 0;
    
//     // Process each category exactly like before
//     Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
//       const categoryName = getCategoryDisplayName(categoryKey);
      
//       // Get category color based on type
//       let categoryColor;
//       if (categoryKey === 'pre-production') {
//         categoryColor = [255, 255, 0]; // Yellow
//       } else if (categoryKey === 'production') {
//         categoryColor = [0, 255, 0]; // Green
//       } else if (categoryKey === 'post-production') {
//         categoryColor = [255, 105, 180]; // Pink/Magenta
//       } else {
//         categoryColor = [255, 255, 0]; // Default yellow
//       }
      
//       // Category header - FULL WIDTH spanning all table columns
//       autoTable(doc, {
//         startY: currentY,
//         body: [[categoryName]],
//         theme: 'grid',
//         styles: {
//           fontSize: 12,
//           cellPadding: 6,
//           halign: 'center',
//           fontStyle: 'bold',
//           fillColor: categoryColor,
//           textColor: [0, 0, 0],
//           lineColor: [0, 0, 0],
//           lineWidth: 0.5
//         },
//         columnStyles: {
//           0: { cellWidth: 190 } // Full width of all 6 columns combined
//         }
//       });
      
//       currentY = doc.lastAutoTable.finalY;
      
//       // Process subcategories
//       Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
//         const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
//         let subcategoryTotal = 0;
        
//         // Subcategory header - FULL WIDTH spanning all table columns
//         autoTable(doc, {
//           startY: currentY,
//           body: [[subcategoryName]],
//           theme: 'grid',
//           styles: {
//             fontSize: 10,
//             cellPadding: 4,
//             halign: 'center',
//             fontStyle: 'bold',
//             fillColor: categoryColor,
//             textColor: [0, 0, 0],
//             lineColor: [0, 0, 0],
//             lineWidth: 0.5
//           },
//           columnStyles: {
//             0: { cellWidth: 190 } // Full width of all 6 columns combined
//           }
//         });
        
//         currentY = doc.lastAutoTable.finalY;
        
//         // Service table with WIDER AMOUNT COLUMN
//         const serviceTableData = [];
        
//         // Add table headers
//         serviceTableData.push(['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount']);
        
//         // Add service rows
//         services.forEach((service, index) => {
//           const amount = service.total || 0;
//           subcategoryTotal += amount;
//           grandTotal += amount;
          
//           serviceTableData.push([
//             (index + 1).toString(),
//             service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1),
//             `Rs ${formatCurrency(service.rate_per_day || 0)}`,
//             '1',
//             days.toString(),
//             `Rs ${formatCurrency(amount)}`
//           ]);
//         });
        
//         // Add subcategory total row
//         serviceTableData.push(['', 'Total', '', '', '', `Rs ${formatCurrency(subcategoryTotal)}`]);
        
//         autoTable(doc, {
//           startY: currentY,
//           head: [serviceTableData[0]],
//           body: serviceTableData.slice(1),
//           theme: 'grid',
//           styles: {
//             fontSize: 9,
//             cellPadding: 3,
//             halign: 'center',
//             lineColor: [0, 0, 0],
//             lineWidth: 0.5,
//             fillColor: [255, 255, 255]
//           },
//           headStyles: {
//             fillColor: [224, 224, 224],
//             textColor: [0, 0, 0],
//             fontStyle: 'bold',
//             halign: 'center'
//           },
//           columnStyles: {
//             0: { cellWidth: 18, halign: 'center' },     // Sr No. - slightly smaller
//             1: { cellWidth: 75, halign: 'left' },       // Particular - slightly smaller
//             2: { cellWidth: 22, halign: 'center' },     // Rate - slightly smaller  
//             3: { cellWidth: 18, halign: 'center' },     // Unit - slightly smaller
//             4: { cellWidth: 18, halign: 'center' },     // Days - slightly smaller
//             5: { cellWidth: 39, halign: 'center' }      // Amount - MUCH WIDER for large numbers
//           },
//           didParseCell: function(data) {
//             // Style the total row (last row in body)
//             if (data.section === 'body' && data.row.index === serviceTableData.length - 2) {
//               data.cell.styles.fontStyle = 'bold';
//               data.cell.styles.fillColor = [255, 255, 255];
//             }
//           }
//         });
        
//         currentY = doc.lastAutoTable.finalY + 2;
//       });
//     });
    
//     // Grand Total section - with WIDER amount column
//     const grandTotalData = [['Grand Total', `Rs ${formatCurrency(grandTotal)}`]];
    
//     autoTable(doc, {
//       startY: currentY,
//       body: grandTotalData,
//       theme: 'grid',
//       styles: {
//         fontSize: 12,
//         cellPadding: 6,
//         halign: 'center',
//         fontStyle: 'bold',
//         lineColor: [0, 0, 0],
//         lineWidth: 0.5
//       },
//       columnStyles: {
//         0: { 
//           cellWidth: 151,  // Reduced to make room for wider amount column
//           fillColor: [59, 164, 229], // Blue background
//           textColor: [255, 255, 255] // White text
//         },
//         1: { 
//           cellWidth: 39,   // WIDER amount column to fit large numbers
//           fillColor: [216, 229, 70], // Yellow-green background
//           textColor: [0, 0, 0] // Black text
//         }
//       }
//     });
    
//     currentY = doc.lastAutoTable.finalY;
    
//     // Commission section if applicable
//     if (proposalData?.commission_rate > 0) {
//       const commissionRate = proposalData.commission_rate;
//       const commissionAmount = (grandTotal * commissionRate) / 100;
//       const finalTotal = grandTotal + commissionAmount;
      
//       // Agency Commission row
//       const commissionData = [[`Agency Commission (${commissionRate}%)`, `Rs ${formatCurrency(commissionAmount)}`]];
      
//       autoTable(doc, {
//         startY: currentY,
//         body: commissionData,
//         theme: 'grid',
//         styles: {
//           fontSize: 12,
//           cellPadding: 6,
//           halign: 'center',
//           fontStyle: 'bold',
//           lineColor: [0, 0, 0],
//           lineWidth: 0.5
//         },
//         columnStyles: {
//           0: { 
//             cellWidth: 151,  // Consistent with Grand Total
//             fillColor: [59, 164, 229], // Blue background
//             textColor: [255, 255, 255] // White text
//           },
//           1: { 
//             cellWidth: 39,   // WIDER amount column
//             fillColor: [216, 229, 70], // Yellow-green background
//             textColor: [0, 0, 0] // Black text
//           }
//         }
//       });
      
//       currentY = doc.lastAutoTable.finalY;
      
//       // Final Grand Total row
//       const finalTotalData = [['Grand Total', `Rs ${formatCurrency(finalTotal)}`]];
      
//       autoTable(doc, {
//         startY: currentY,
//         body: finalTotalData,
//         theme: 'grid',
//         styles: {
//           fontSize: 12,
//           cellPadding: 6,
//           halign: 'center',
//           fontStyle: 'bold',
//           lineColor: [0, 0, 0],
//           lineWidth: 0.5
//         },
//         columnStyles: {
//           0: { 
//             cellWidth: 151,  // Consistent with other totals
//             fillColor: [59, 164, 229], // Blue background
//             textColor: [255, 255, 255] // White text
//           },
//           1: { 
//             cellWidth: 39,   // WIDER amount column
//             fillColor: [216, 229, 70], // Yellow-green background
//             textColor: [0, 0, 0] // Black text
//           }
//         }
//       });
      
//       currentY = doc.lastAutoTable.finalY + 10;
//     } else {
//       currentY += 10;
//     }
    
//     // Notes section exactly like the web design
//     doc.setFontSize(10);
//     doc.setFont('helvetica', 'bold');
//     doc.text('NOTE:', 20, currentY);
//     currentY += 5;
    
//     doc.setFontSize(8);
//     doc.setFont('helvetica', 'normal');
//     const notes = [
//       'If there is any additional requirement, a revised estimate will be shared.',
//       'A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.',
//       'Payment teams will be 50% advance on commercial approval & 50% after project delivery.',
//       'Lights & Camera will be arranged by client.'
//     ];
    
//     notes.forEach(note => {
//       const splitNote = doc.splitTextToSize(note, pageWidth - 40);
//       splitNote.forEach(line => {
//         if (currentY > doc.internal.pageSize.height - 20) {
//           doc.addPage();
//           currentY = 20;
//         }
//         doc.text(line, 20, currentY);
//         currentY += 4;
//       });
//       currentY += 2;
//     });
    
//     // Save the PDF
//     doc.save(`${quoteId}_Budget.pdf`);
    
//     setIsPdfDownloading(false);
//     setPdfDownloadSuccess(true);
    
//     setTimeout(() => {
//       setPdfDownloadSuccess(false);
//     }, 2000);
//   } catch (error) {
//     console.error('Error generating PDF:', error);
//     setIsPdfDownloading(false);
//   }
// };
const downloadPdf = async () => {
  setIsPdfDownloading(true);
  
  try {
    // Better logo conversion approach
    let logoBase64;
    try {
      logoBase64 = await convertImageToBase64(Logo);
    } catch (error) {
      console.log('Could not load logo, proceeding without it');
    }
    
    const organizedServices = getOrganizedServices();
    const days = proposalData?.days || 1;
    
    // Create new PDF document
    const doc = new jsPDF('p', 'mm', 'a4');
    const pageWidth = doc.internal.pageSize.width;
    let currentY = 20;
    
    const clientName = proposalData?.client_name ? 
      proposalData.client_name.charAt(0).toUpperCase() + proposalData.client_name.slice(1) : 
      'Client';
    
    // Create header table with logo area having no internal borders
    const headerTableData = [
      [`Budget for - ${clientName}`, ''],
      [`${days} day shoot (20hrs shift)`, ''],
      ['Agency/Production House - The Small Big Idea (TSBI Studios)', ''],
      [`Location - ${proposalData?.location || ''}`, ''],
      [`Proposal Date - ${formatDate(new Date())}`, '']
    ];
    
    autoTable(doc, {
      startY: currentY,
      body: headerTableData,
      theme: 'grid',
      styles: {
        fontSize: 10,
        cellPadding: 4,
        halign: 'center',
        fontStyle: 'bold',
        lineColor: [0, 0, 0],
        lineWidth: 0.5,
        fillColor: [255, 255, 255]
      },
      columnStyles: {
        0: { cellWidth: 140, halign: 'center' },
        1: { 
          cellWidth: 50, 
          halign: 'center'
        }
      },
      didParseCell: function(data) {
        // Clear text from logo column and remove internal horizontal lines
        if (data.column.index === 1) {
          data.cell.text = [''];
          // Remove horizontal borders for logo column cells (except first and last)
          if (data.row.index > 0 && data.row.index < headerTableData.length - 1) {
            // Remove bottom border of current cell
            data.cell.styles.lineColor = [255, 255, 255]; // Make lines white (invisible)
            data.cell.styles.lineColor = [255, 255, 255]; // Make lines white (invisible)
            data.cell.styles.lineWidth = 0;
            data.cell.styles.lineWidth = 0;
          }
        }
      },
      didDrawPage: function(data) {
        // Add logo after the table is drawn
        if (logoBase64) {
          try {
            // Position logo in the center of the logo column area
            const logoX = pageWidth - 40; // Center in the 50-width logo column
            const logoY = currentY + 15;  // Center vertically in the table
            const logoWidth = 30;
            const logoHeight = 30;
            
            doc.addImage(logoBase64, 'PNG', logoX, logoY, logoWidth, logoHeight);
            
            // Remove internal horizontal lines in logo column area
            doc.setDrawColor(255, 255, 255); // White color to "erase" lines
            doc.setLineWidth(0.7); // Slightly thicker to ensure coverage
            
            const logoColumnStartX = pageWidth - 50; // Start of logo column
            const logoColumnEndX = pageWidth; // End of logo column
            
            // Remove horizontal lines between rows in logo column only
            for (let i = 1; i < headerTableData.length; i++) {
              const lineY = currentY + (i * 10); // Approximate row height
              doc.line(logoColumnStartX + 0.5, lineY, logoColumnEndX - 0.5, lineY);
            }
            
            console.log('Logo successfully added to PDF');
          } catch (error) {
            console.error('Error adding logo to PDF:', error);
          }
        }
      }
    });
    
    currentY = doc.lastAutoTable.finalY + 5;
    let grandTotal = 0;
    
    // Process each category exactly like before
    Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
      const categoryName = getCategoryDisplayName(categoryKey);
      
      // Get category color based on type
      let categoryColor;
      if (categoryKey === 'pre-production') {
        categoryColor = [255, 255, 0]; // Yellow
      } else if (categoryKey === 'production') {
        categoryColor = [0, 255, 0]; // Green
      } else if (categoryKey === 'post-production') {
        categoryColor = [255, 105, 180]; // Pink/Magenta
      } else {
        categoryColor = [255, 255, 0]; // Default yellow
      }
      
      // Category header - FULL WIDTH spanning all table columns
      autoTable(doc, {
        startY: currentY,
        body: [[categoryName]],
        theme: 'grid',
        styles: {
          fontSize: 12,
          cellPadding: 6,
          halign: 'center',
          fontStyle: 'bold',
          fillColor: categoryColor,
          textColor: [0, 0, 0],
          lineColor: [0, 0, 0],
          lineWidth: 0.5
        },
        columnStyles: {
          0: { cellWidth: 190 } // Full width of all 6 columns combined
        }
      });
      
      currentY = doc.lastAutoTable.finalY;
      
      // Process subcategories
      Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
        const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
        let subcategoryTotal = 0;
        
        // Subcategory header - FULL WIDTH spanning all table columns
        autoTable(doc, {
          startY: currentY,
          body: [[subcategoryName]],
          theme: 'grid',
          styles: {
            fontSize: 10,
            cellPadding: 4,
            halign: 'center',
            fontStyle: 'bold',
            fillColor: categoryColor,
            textColor: [0, 0, 0],
            lineColor: [0, 0, 0],
            lineWidth: 0.5
          },
          columnStyles: {
            0: { cellWidth: 190 } // Full width of all 6 columns combined
          }
        });
        
        currentY = doc.lastAutoTable.finalY;
        
        // Service table with WIDER AMOUNT COLUMN
        const serviceTableData = [];
        
        // Add table headers
        serviceTableData.push(['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount']);
        
        // Add service rows
        services.forEach((service, index) => {
          const amount = service.total || 0;
          subcategoryTotal += amount;
          grandTotal += amount;
          
          serviceTableData.push([
            (index + 1).toString(),
            service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1),
            `Rs ${formatCurrency(service.rate_per_day || 0)}`,
            '1',
            days.toString(),
            `Rs ${formatCurrency(amount)}`
          ]);
        });
        
        // Add subcategory total row
        serviceTableData.push(['', 'Total', '', '', '', `Rs ${formatCurrency(subcategoryTotal)}`]);
        
        autoTable(doc, {
          startY: currentY,
          head: [serviceTableData[0]],
          body: serviceTableData.slice(1),
          theme: 'grid',
          styles: {
            fontSize: 9,
            cellPadding: 3,
            halign: 'center',
            lineColor: [0, 0, 0],
            lineWidth: 0.5,
            fillColor: [255, 255, 255]
          },
          headStyles: {
            fillColor: [224, 224, 224],
            textColor: [0, 0, 0],
            fontStyle: 'bold',
            halign: 'center'
          },
          columnStyles: {
            0: { cellWidth: 18, halign: 'center' },     // Sr No. - slightly smaller
            1: { cellWidth: 75, halign: 'left' },       // Particular - slightly smaller
            2: { cellWidth: 22, halign: 'center' },     // Rate - slightly smaller  
            3: { cellWidth: 18, halign: 'center' },     // Unit - slightly smaller
            4: { cellWidth: 18, halign: 'center' },     // Days - slightly smaller
            5: { cellWidth: 39, halign: 'center' }      // Amount - MUCH WIDER for large numbers
          },
          didParseCell: function(data) {
            // Style the total row (last row in body)
            if (data.section === 'body' && data.row.index === serviceTableData.length - 2) {
              data.cell.styles.fontStyle = 'bold';
              data.cell.styles.fillColor = [255, 255, 255];
            }
          }
        });
        
        currentY = doc.lastAutoTable.finalY + 2;
      });
    });
    
    // Grand Total section - with WIDER amount column
    const grandTotalData = [['Grand Total', `Rs ${formatCurrency(grandTotal)}`]];
    
    autoTable(doc, {
      startY: currentY,
      body: grandTotalData,
      theme: 'grid',
      styles: {
        fontSize: 12,
        cellPadding: 6,
        halign: 'center',
        fontStyle: 'bold',
        lineColor: [0, 0, 0],
        lineWidth: 0.5
      },
      columnStyles: {
        0: { 
          cellWidth: 151,  // Reduced to make room for wider amount column
          fillColor: [59, 164, 229], // Blue background
          textColor: [255, 255, 255] // White text
        },
        1: { 
          cellWidth: 39,   // WIDER amount column to fit large numbers
          fillColor: [216, 229, 70], // Yellow-green background
          textColor: [0, 0, 0] // Black text
        }
      }
    });
    
    currentY = doc.lastAutoTable.finalY;
    
    // Commission section if applicable
    if (proposalData?.commission_rate > 0) {
      const commissionRate = proposalData.commission_rate;
      const commissionAmount = (grandTotal * commissionRate) / 100;
      const finalTotal = grandTotal + commissionAmount;
      
      // Agency Commission row
      const commissionData = [[`Agency Commission (${commissionRate}%)`, `Rs ${formatCurrency(commissionAmount)}`]];
      
      autoTable(doc, {
        startY: currentY,
        body: commissionData,
        theme: 'grid',
        styles: {
          fontSize: 12,
          cellPadding: 6,
          halign: 'center',
          fontStyle: 'bold',
          lineColor: [0, 0, 0],
          lineWidth: 0.5
        },
        columnStyles: {
          0: { 
            cellWidth: 151,  // Consistent with Grand Total
            fillColor: [59, 164, 229], // Blue background
            textColor: [255, 255, 255] // White text
          },
          1: { 
            cellWidth: 39,   // WIDER amount column
            fillColor: [216, 229, 70], // Yellow-green background
            textColor: [0, 0, 0] // Black text
          }
        }
      });
      
      currentY = doc.lastAutoTable.finalY;
      
      // Final Grand Total row
      const finalTotalData = [['Grand Total', `Rs ${formatCurrency(finalTotal)}`]];
      
      autoTable(doc, {
        startY: currentY,
        body: finalTotalData,
        theme: 'grid',
        styles: {
          fontSize: 12,
          cellPadding: 6,
          halign: 'center',
          fontStyle: 'bold',
          lineColor: [0, 0, 0],
          lineWidth: 0.5
        },
        columnStyles: {
          0: { 
            cellWidth: 151,  // Consistent with other totals
            fillColor: [59, 164, 229], // Blue background
            textColor: [255, 255, 255] // White text
          },
          1: { 
            cellWidth: 39,   // WIDER amount column
            fillColor: [216, 229, 70], // Yellow-green background
            textColor: [0, 0, 0] // Black text
          }
        }
      });
      
      currentY = doc.lastAutoTable.finalY + 10;
    } else {
      currentY += 10;
    }
    
    // Notes section exactly like the web design
    doc.setFontSize(10);
    doc.setFont('helvetica', 'bold');
    doc.text('NOTE:', 20, currentY);
    currentY += 5;
    
    doc.setFontSize(8);
    doc.setFont('helvetica', 'normal');
    const notes = [
      'If there is any additional requirement, a revised estimate will be shared.',
      'A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.',
      'Payment teams will be 50% advance on commercial approval & 50% after project delivery.',
      'Lights & Camera will be arranged by client.'
    ];
    
    notes.forEach(note => {
      const splitNote = doc.splitTextToSize(note, pageWidth - 40);
      splitNote.forEach(line => {
        if (currentY > doc.internal.pageSize.height - 20) {
          doc.addPage();
          currentY = 20;
        }
        doc.text(line, 20, currentY);
        currentY += 4;
      });
      currentY += 2;
    });
    
    // Save the PDF
    doc.save(`${quoteId}_Budget.pdf`);
    
    setIsPdfDownloading(false);
    setPdfDownloadSuccess(true);
    
    setTimeout(() => {
      setPdfDownloadSuccess(false);
    }, 2000);
  } catch (error) {
    console.error('Error generating PDF:', error);
    setIsPdfDownloading(false);
  }
};
  

  // Generate Excel and download with proper styling
  const downloadExcel = () => {
    setIsDownloading(true);
    
    try {
      const organizedServices = getOrganizedServices();
      const days = proposalData?.days || 1;
      
      // Create Excel data structure
      const excelData = [];
      
      // Header information with styling
      excelData.push([`Budget for - ${proposalData?.client_name || 'Client'}`]);
      excelData.push([`${days} day shoot (20hrs shift)`]);
      excelData.push(['Agency/Production House - The Small Big Idea (TSBI Studios)']);
      excelData.push([`Location - ${proposalData?.location || ''}`]);
      excelData.push([`Proposal Date - ${formatDate(new Date())}`]);
      excelData.push([]); // Empty row
      
      let grandTotal = 0;
      let currentRow = 6; // Starting row for data (0-indexed)
      
      // Create workbook and worksheet
      const wb = XLSX.utils.book_new();
      const ws = XLSX.utils.aoa_to_sheet([]);
      
      // Add header data
      XLSX.utils.sheet_add_aoa(ws, excelData, { origin: 'A1' });
      
      // Style the header
      const headerStyle = {
        font: { bold: true, sz: 12 },
        alignment: { horizontal: 'left' },
        fill: { fgColor: { rgb: 'E7E6E6' } }
      };
      
      // Apply header styling
      for (let i = 0; i < 5; i++) {
        const cellRef = XLSX.utils.encode_cell({ r: i, c: 0 });
        if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
        ws[cellRef].s = headerStyle;
      }
      
      // Process each category
      Object.entries(organizedServices).forEach(([categoryKey, subcategories]) => {
        const categoryName = getCategoryDisplayName(categoryKey);
        
        // Category colors
        const categoryColors = {
          'pre-production': 'FFF2CC',
          'production': 'D5E8D4',
          'post-production': 'C0C0C0',
          'legacy': 'F0F0F0'
        };
        
        const categoryColor = categoryColors[categoryKey] || 'F0F0F0';
        
        // Add category header
        XLSX.utils.sheet_add_aoa(ws, [[categoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
        // Style category header
        const categoryHeaderStyle = {
          font: { bold: true, sz: 14 },
          alignment: { horizontal: 'center' },
          fill: { fgColor: { rgb: categoryColor } },
          border: {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
          }
        };
        
        // Apply category header styling across 6 columns
        for (let col = 0; col < 6; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
          if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? categoryName : '' };
          ws[cellRef].s = categoryHeaderStyle;
        }
        
        // Merge category header cells
        if (!ws['!merges']) ws['!merges'] = [];
        ws['!merges'].push({
          s: { r: currentRow, c: 0 },
          e: { r: currentRow, c: 5 }
        });
        
        currentRow++;
        
        // Handle post-production differently (no subcategories)
        if (categoryKey === 'post-production') {
          const services = subcategories.all || [];
          let categoryTotal = 0;
          
          // Add column headers directly
          const colHeaders = ['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount'];
          XLSX.utils.sheet_add_aoa(ws, [colHeaders], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
          // Style column headers
          const colHeaderStyle = {
            font: { bold: true },
            alignment: { horizontal: 'center' },
            fill: { fgColor: { rgb: 'BFBFBF' } },
            border: {
              top: { style: 'thin' },
              bottom: { style: 'thin' },
              left: { style: 'thin' },
              right: { style: 'thin' }
            }
          };
          
          for (let col = 0; col < 6; col++) {
            const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
            ws[cellRef].s = colHeaderStyle;
          }
          
          currentRow++;
          
          // Add service rows directly
          services.forEach((service, index) => {
            const amount = service.total || 0;
            categoryTotal += amount;
            grandTotal += amount;
            
            const serviceRow = [
              index + 1,
              service.service_name,
              service.rate_per_day || 0,
              1,
              days,
              amount
            ];
            
            XLSX.utils.sheet_add_aoa(ws, [serviceRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
            // Style service rows
            const serviceStyle = {
              border: {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' }
              }
            };
            
            for (let col = 0; col < 6; col++) {
              const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
              ws[cellRef].s = serviceStyle;
              
              // Right align numbers
              if (col === 2 || col === 5) {
                ws[cellRef].s.alignment = { horizontal: 'right' };
              } else if (col === 0 || col === 3 || col === 4) {
                ws[cellRef].s.alignment = { horizontal: 'center' };
              }
            }
            
            currentRow++;
          });
          
          // Add category total
          const totalRow = ['Total', '', '', '', '', categoryTotal];
          XLSX.utils.sheet_add_aoa(ws, [totalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
          
          // Style total row
          const totalStyle = {
            font: { bold: true },
            fill: { fgColor: { rgb: 'FFFF99' } },
            border: {
              top: { style: 'thin' },
              bottom: { style: 'thin' },
              left: { style: 'thin' },
              right: { style: 'thin' }
            }
          };
          
          for (let col = 0; col < 6; col++) {
            const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
            ws[cellRef].s = totalStyle;
            if (col === 0 || col === 5) {
              ws[cellRef].s.alignment = { horizontal: 'center' };
            }
          }
          
          currentRow++;
          currentRow++; // Empty row
        } else {
          // Process subcategories for other categories
          Object.entries(subcategories).forEach(([subcategoryKey, services]) => {
            const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
            let subcategoryTotal = 0;
            
            // Add subcategory header
            XLSX.utils.sheet_add_aoa(ws, [[subcategoryName]], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
            // Style subcategory header
            const subcatStyle = {
              font: { bold: true, sz: 12 },
              alignment: { horizontal: 'center' },
              fill: { fgColor: { rgb: categoryColor } },
              border: {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' }
              }
            };
            
            // Apply subcategory styling across 6 columns
            for (let col = 0; col < 6; col++) {
              const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
              if (!ws[cellRef]) ws[cellRef] = { t: 's', v: col === 0 ? subcategoryName : '' };
              ws[cellRef].s = subcatStyle;
            }
            
            // Merge subcategory header cells
            ws['!merges'].push({
              s: { r: currentRow, c: 0 },
              e: { r: currentRow, c: 5 }
            });
            
            currentRow++;
            
            // Add column headers
            const colHeaders = ['Sr No.', 'Particular', 'Rate', 'Unit', 'Days', 'Amount'];
            XLSX.utils.sheet_add_aoa(ws, [colHeaders], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
            // Style column headers
            const colHeaderStyle = {
              font: { bold: true },
              alignment: { horizontal: 'center' },
              fill: { fgColor: { rgb: 'BFBFBF' } },
              border: {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' }
              }
            };
            
            for (let col = 0; col < 6; col++) {
              const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
              ws[cellRef].s = colHeaderStyle;
            }
            
            currentRow++;
            
            // Add service rows
            services.forEach((service, index) => {
              const amount = service.total || 0;
              subcategoryTotal += amount;
              grandTotal += amount;
              
              const serviceRow = [
                index + 1,
                service.service_name,
                service.rate_per_day || 0,
                1,
                days,
                amount
              ];
              
              XLSX.utils.sheet_add_aoa(ws, [serviceRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
              
              // Style service rows
              const serviceStyle = {
                border: {
                  top: { style: 'thin' },
                  bottom: { style: 'thin' },
                  left: { style: 'thin' },
                  right: { style: 'thin' }
                }
              };
              
              for (let col = 0; col < 6; col++) {
                const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
                ws[cellRef].s = serviceStyle;
                
                // Right align numbers
                if (col === 2 || col === 5) {
                  ws[cellRef].s.alignment = { horizontal: 'right' };
                } else if (col === 0 || col === 3 || col === 4) {
                  ws[cellRef].s.alignment = { horizontal: 'center' };
                }
              }
              
              currentRow++;
            });
            
            // Add subcategory total
            const totalRow = ['Total', '', '', '', '', subcategoryTotal];
            XLSX.utils.sheet_add_aoa(ws, [totalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
            
            // Style total row
            const totalStyle = {
              font: { bold: true },
              fill: { fgColor: { rgb: 'FFFF99' } },
              border: {
                top: { style: 'thin' },
                bottom: { style: 'thin' },
                left: { style: 'thin' },
                right: { style: 'thin' }
              }
            };
            
            for (let col = 0; col < 6; col++) {
              const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
              ws[cellRef].s = totalStyle;
              if (col === 0 || col === 5) {
                ws[cellRef].s.alignment = { horizontal: 'center' };
              }
            }
            
            currentRow++;
            currentRow++; // Empty row
          });
        }
      });
      
      // Add grand totals
      const grandTotalRow = ['Grand Total', '', '', '', '', grandTotal];
      XLSX.utils.sheet_add_aoa(ws, [grandTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
      // Style grand total
      const grandTotalStyle = {
        font: { bold: true, sz: 14 },
        fill: { fgColor: { rgb: 'ADD8E6' } },
        border: {
          top: { style: 'thick' },
          bottom: { style: 'thick' },
          left: { style: 'thick' },
          right: { style: 'thick' }
        },
        alignment: { horizontal: 'center' }
      };
      
      for (let col = 0; col < 6; col++) {
        const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
        ws[cellRef].s = grandTotalStyle;
      }
      
      currentRow++;
      
      // Add commission if applicable
      if (proposalData?.commission_rate > 0) {
        const commissionRate = proposalData.commission_rate;
        const commissionAmount = (grandTotal * commissionRate) / 100;
        const finalTotal = grandTotal + commissionAmount;
        
        // Commission row
        const commissionRow = [`Agency Commission ${commissionRate}%`, '', '', '', '', commissionAmount];
        XLSX.utils.sheet_add_aoa(ws, [commissionRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
        // Style commission row
        const commissionStyle = {
          font: { bold: true },
          fill: { fgColor: { rgb: 'FFFF99' } },
          border: {
            top: { style: 'thin' },
            bottom: { style: 'thin' },
            left: { style: 'thin' },
            right: { style: 'thin' }
          },
          alignment: { horizontal: 'center' }
        };
        
        for (let col = 0; col < 6; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
          ws[cellRef].s = commissionStyle;
        }
        
        currentRow++;
        
        // Final total row
        const finalTotalRow = ['Grand Total', '', '', '', '', finalTotal];
        XLSX.utils.sheet_add_aoa(ws, [finalTotalRow], { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
        
        // Style final total
        const finalTotalStyle = {
          font: { bold: true, sz: 14 },
          fill: { fgColor: { rgb: '90EE90' } },
          border: {
            top: { style: 'thick' },
            bottom: { style: 'thick' },
            left: { style: 'thick' },
            right: { style: 'thick' }
          },
          alignment: { horizontal: 'center' }
        };
        
        for (let col = 0; col < 6; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: currentRow, c: col });
          ws[cellRef].s = finalTotalStyle;
        }
        
        currentRow++;
      }
      
      // Add notes
      currentRow += 2;
      const notes = [
        ['NOTE -'],
        ['If there is any additional requirement, a revised estimate will be shared.'],
        ['A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.'],
        ['Payment teams will be 50% advance on commercial approval & 50% after project delivery.'],
        ['Lights & Camera will be arranged by client.']
      ];
      
      XLSX.utils.sheet_add_aoa(ws, notes, { origin: XLSX.utils.encode_cell({ r: currentRow, c: 0 }) });
      
      // Style notes
      const noteStyle = {
        font: { sz: 10 },
        fill: { fgColor: { rgb: 'F0F0F0' } },
        border: {
          top: { style: 'thin' },
          bottom: { style: 'thin' },
          left: { style: 'thin' },
          right: { style: 'thin' }
        }
      };
      
      for (let i = 0; i < notes.length; i++) {
        for (let col = 0; col < 6; col++) {
          const cellRef = XLSX.utils.encode_cell({ r: currentRow + i, c: col });
          if (!ws[cellRef]) ws[cellRef] = { t: 's', v: '' };
          ws[cellRef].s = noteStyle;
        }
        
        // Merge note cells
        ws['!merges'].push({
          s: { r: currentRow + i, c: 0 },
          e: { r: currentRow + i, c: 5 }
        });
      }
      
      // Set column widths
      ws['!cols'] = [
        { wch: 8 },  // Sr No
        { wch: 35 }, // Particular
        { wch: 12 }, // Rate
        { wch: 8 },  // Unit
        { wch: 8 },  // Days
        { wch: 15 }  // Amount
      ];
      
      // Set row heights for better spacing
      ws['!rows'] = [];
      for (let i = 0; i < currentRow + notes.length; i++) {
        ws['!rows'][i] = { hpt: 20 };
      }
      
      XLSX.utils.book_append_sheet(wb, ws, 'Budget');
      
      // Generate and download
      XLSX.writeFile(wb, `${quoteId}_Budget.xlsx`);
      
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error generating Excel:', error);
      setIsDownloading(false);
    }
  };

  // Render Excel-style table to match the reference image exactly
  const renderExcelStyleTable = () => {
    const organizedServices = getOrganizedServices();
    const days = proposalData?.days || 1;
    
    if (Object.keys(organizedServices).length === 0) {
      return (
        <div className="text-center py-4">
          <span className="text-muted">No services selected</span>
        </div>
      );
    }
    
    let grandTotal = 0;
    
    return (
      <div style={{ border: '2px solid #000', backgroundColor: '#fff' }}>
        {/* Header Section - exactly like Excel */}
        <Table bordered className="mb-0" style={{ marginBottom: '0 !important' }}>
          <tbody>
            <tr>
              <td 
                colSpan={5} 
                className="text-center fw-bold" 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  fontSize: '14px',
                  borderBottom: '1px solid #000'
                }}
              >
                Budget for - {(proposalData?.client_name?.charAt(0).toUpperCase() + proposalData?.client_name?.slice(1)) || 'Client'}
              </td>
              <td 
                rowSpan={5} 
                className="text-center" 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  verticalAlign: 'middle',
                  width: '120px'
                }}
              >
                <img src={Logo} alt="TSBI Studios Logo" width={150} height={150} className="rounded" />
              </td>
            </tr>
            <tr>
              <td 
                colSpan={5} 
                className="text-center" 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  borderBottom: '1px solid #000'
                }}
              >
                {proposalData?.days || 1} day shoot (20hrs shift)
              </td>
            </tr>
            <tr>
              <td 
                colSpan={5} 
                className="text-center" 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  borderBottom: '1px solid #000'
                }}
              >
                Agency/Production House - The Small Big Idea (TSBI Studios)
              </td>
            </tr>
            <tr>
              <td 
                colSpan={5} 
                className="text-center" 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  borderBottom: '1px solid #000'
                }}
              >
                Location - {proposalData?.location || ''}
              </td>
            </tr>
            <tr>
              <td 
                colSpan={5} 
                className="text-center" 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  borderBottom: '2px solid #000'
                }}
              >
                Proposal Date - {formatDate(new Date())}
              </td>
            </tr>
          </tbody>
        </Table>

        {/* Services Section */}
        {Object.entries(organizedServices).map(([categoryKey, subcategories]) => {
          const categoryName = getCategoryDisplayName(categoryKey);
          
          // Category colors exactly like Excel
          const categoryColor = categoryKey === 'pre-production' ? '#FFFF00' : 
                               categoryKey === 'production' ? '#00FF00' : 'rgb(246, 105, 220)'; // Gray for post-production
          
          return (
            <div key={categoryKey}>
              {/* Category Header */}
              <Table bordered className="mb-0">
                <tbody>
                  <tr style={{ backgroundColor: categoryColor }}>
                    <td 
                      colSpan={6} 
                      className="text-center fw-bold" 
                      style={{ 
                        border: '1px solid #000', 
                        padding: '8px',
                        fontSize: '18px',
                        backgroundColor: categoryColor
                      }}
                    >
                      {categoryName}
                    </td>
                  </tr>
                </tbody>
              </Table>
              
              {/* Handle post-production without subcategories */}
              {categoryKey === 'post-production' ? (
                <div>
                  <Table bordered className="mb-0">
                    <tbody>
                      {/* Column Headers */}
                      <tr style={{ backgroundColor: '#E0E0E0' }}>
                        <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Sr No.</td>
                        <td className="fw-bold" style={{ border: '1px solid #000', padding: '4px' }}>Particular</td>
                        <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '80px' }}>Rate</td>
                        <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Unit</td>
                        <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Days</td>
                        <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '100px' }}>Amount</td>
                      </tr>
                      
                      {/* Service Rows */}
                      {(subcategories.all || []).map((service, index) => {
                        const amount = service.total || 0;
                        grandTotal += amount;
                        
                        return (
                          <tr key={index}>
                            <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{index + 1}</td>
                            <td style={{ border: '1px solid #000', padding: '4px' }}>
                              {service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1)}
                            </td>
                            <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(service.rate_per_day || 0)}</td>
                            <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>1</td>
                            <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{days}</td>
                            <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(amount)}</td>
                          </tr>
                        );
                      })}
                      
                      {/* Category Total */}
                      <tr>
                        <td 
                          colSpan={5} 
                          className="text-center fw-bold" 
                          style={{ border: '1px solid #000', padding: '4px' }}
                        >
                          Total
                        </td>
                        <td 
                          className="text-center fw-bold" 
                          style={{ border: '1px solid #000', padding: '4px' }}
                        >
                          {formatCurrency((subcategories.all || []).reduce((sum, service) => sum + (service.total || 0), 0))}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
              ) : (
                /* Regular subcategory handling for other categories */
                Object.entries(subcategories).map(([subcategoryKey, services]) => {
                  const subcategoryName = getSubcategoryDisplayName(categoryKey, subcategoryKey);
                  let subcategoryTotal = 0;
                  
                  return (
                    <div key={subcategoryKey}>
                      <Table bordered className="mb-0">
                        <tbody>
                          {/* Subcategory Header */}
                          <tr style={{ backgroundColor: categoryColor }}>
                            <td 
                              colSpan={6} 
                              className="text-center fw-bold" 
                              style={{ 
                                border: '1px solid #000', 
                                padding: '6px',
                                fontSize: '15px',
                                backgroundColor: categoryColor
                              }}
                            >
                              {subcategoryName}
                            </td>
                          </tr>
                          
                          {/* Column Headers */}
                          <tr style={{ backgroundColor: '#E0E0E0' }}>
                            <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Sr No.</td>
                            <td className=" fw-bold" style={{ border: '1px solid #000', padding: '4px' }}>Particular</td>
                            <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '80px' }}>Rate</td>
                            <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Unit</td>
                            <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '60px' }}>Days</td>
                            <td className="text-center fw-bold" style={{ border: '1px solid #000', padding: '4px', width: '100px' }}>Amount</td>
                          </tr>
                          
                          {/* Service Rows */}
                          {services.map((service, index) => {
                            const amount = service.total || 0;
                            subcategoryTotal += amount;
                            grandTotal += amount;
                            
                            return (
                              <tr key={index}>
                                <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{index + 1}</td>
                                <td style={{ border: '1px solid #000', padding: '4px' }}>
                                  {service.service_name.charAt(0).toUpperCase() + service.service_name.slice(1)}
                                </td>
                                <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(service.rate_per_day || 0)}</td>
                                <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>1</td>
                                <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{days}</td>
                                <td className="text-center" style={{ border: '1px solid #000', padding: '4px' }}>{formatCurrency(amount)}</td>
                              </tr>
                            );
                          })}
                          
                          {/* Subcategory Total */}
                          <tr>
                            <td 
                              colSpan={5} 
                              className="text-center fw-bold" 
                              style={{ border: '1px solid #000', padding: '4px' }}
                            >
                              Total
                            </td>
                            <td 
                              className="text-center fw-bold" 
                              style={{ border: '1px solid #000', padding: '4px' }}
                            >
                              {formatCurrency(subcategoryTotal)}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  );
                })
              )}
            </div>
          );
        })}
        
        {/* Final Totals Section */}
        <Table bordered className="mb-0">
          <tbody>
            <tr style={{ backgroundColor: '#ADD8E6' }}>
              <td 
                colSpan={5} 
                className="text-center fw-bold" 
                style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' ,backgroundColor: 'rgb(59, 164, 229)'}}
              >
                Grand Total
              </td>
              <td 
                className="text-center fw-bold" 
                style={{ border: '1px solid #000', padding: '8px', fontSize: '14px' ,backgroundColor: 'rgb(216, 229, 70)'}}
              >
                ₹{formatCurrency(grandTotal)}
              </td>
            </tr>
            
            {proposalData?.commission_rate > 0 && (
              <>
                <tr style={{ backgroundColor: '#FFFF99' }}>
                  <td 
                    colSpan={5} 
                    className="text-center fw-bold" 
                    style={{ border: '1px solid #000', padding: '8px',backgroundColor: 'rgb(59, 164, 229)' }}
                  >
                    Agency Commission ({proposalData.commission_rate}%)
                  </td>
                  <td 
                    className="text-center fw-bold" 
                    style={{ border: '1px solid #000', padding: '8px',backgroundColor: 'rgb(59, 164, 229)' }}
                  >
                    ₹{formatCurrency((grandTotal * proposalData.commission_rate) / 100)}
                  </td>
                </tr>
                <tr style={{ backgroundColor: '#90EE90' }}>
                  <td 
                    colSpan={5} 
                    className="text-center fw-bold" 
                    style={{ border: '1px solid #000', padding: '8px', fontSize: '14px',backgroundColor: 'rgb(59, 164, 229)' }}
                  >
                    Grand Total
                  </td>
                  <td 
                    className="text-center fw-bold" 
                    style={{ border: '1px solid #000', padding: '8px', fontSize: '14px',backgroundColor: 'rgb(59, 164, 229)' }}
                  >
                    ₹{formatCurrency(grandTotal + (grandTotal * proposalData.commission_rate) / 100)}
                  </td>
                </tr>
              </>
            )}
          </tbody>
        </Table>

        {/* Notes Section */}
        <Table bordered className="mb-0">
          <tbody>
            <tr>
              <td 
                colSpan={6} 
                style={{ 
                  border: '1px solid #000', 
                  padding: '8px',
                  backgroundColor: '#F5F5F5',
                  fontSize: '11px'
                }}
              >
                <strong>NOTE:</strong><br />
                If there is any additional requirement, a revised estimate will be shared.<br />
                A hard copy of the PO corresponding to this estimate has to be submitted in order to commence work on the project.<br />
                Payment teams will be 50% advance on commercial approval & 50% after project delivery.<br />
                <strong>Lights & Camera will be arranged by client.</strong>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  };

  // Determine download button content for Excel
  // const getDownloadButton = () => {
  //   if (isDownloading) {
  //     return (
  //       <Button variant="success" disabled className="download-btn">
  //         <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
  //         Generating Excel...
  //       </Button>
  //     );
  //   }
    
  //   if (downloadSuccess) {
  //     return (
  //       <Button variant="success" className="download-btn success-animation">
  //         <FontAwesomeIcon icon={faCheck} className="me-2" />
  //         Downloaded!
  //       </Button>
  //     );
  //   }
    
  //   return (
  //     <Button variant="success" onClick={downloadExcel} className="download-btn pulse-animation">
  //       <FontAwesomeIcon icon={faFileExcel} className="me-2" />
  //       Download Excel
  //     </Button>
  //   );
  // };
  const getDownloadButton = () => {
  return (
    <OverlayTrigger
    // style={{height: '40px', border: '1px solid #ccc', borderRadius: '4px', padding: '0 10px'}}
      placement="top"
      overlay={
        <Tooltip id="excel-coming-soon-tooltip">
          Excel download coming soon
        </Tooltip>
      }
    >
      <span className="d-inline-block" style={{height: '40px', borderRadius: '4px', }}>
        <Button
          variant="secondary"
          disabled
          className="download-btn"
          style={{ pointerEvents: 'none', opacity: 0.65, height: '47px' }}
        >
          <FontAwesomeIcon icon={faFileExcel} className="me-2" />
          Download Excel
        </Button>
      </span>
    </OverlayTrigger>
  );
};


  // Determine download button content for PDF
  const getPdfDownloadButton = () => {
    if (isPdfDownloading) {
      return (
        <Button variant="danger" disabled className="download-btn ms-2">
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
          Generating PDF...
        </Button>
      );
    }
    
    if (pdfDownloadSuccess) {
      return (
        <Button variant="danger" className="download-btn success-animation ms-2">
          <FontAwesomeIcon icon={faCheck} className="me-2" />
          Downloaded!
        </Button>
      );
    }
    
    return (
      <Button variant="danger" onClick={downloadPdf} className="download-btn pulse-animation ms-2">
        <FontAwesomeIcon icon={faFilePdf} className="me-2" />
        Download PDF
      </Button>
    );
  };

  return (
    <Container className="mt-4 mb-5" style={{ maxWidth: '1000px' }}>
      <Card className="shadow-sm border-0">
        <Card.Body className="p-0">
          {renderExcelStyleTable()}
          
          {/* Action Buttons */}
          <div className="d-flex justify-content-between p-3 border-top">
            <Button variant="outline-secondary" onClick={handleCreateNewProposal} size="lg">
              Create New Proposal
            </Button>
            <div className="d-flex">
              {getDownloadButton()}
              {getPdfDownloadButton()}
            </div>
          </div>
        </Card.Body>
      </Card>

      {/* Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={cancelCreateNewProposal} centered>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <FontAwesomeIcon icon={faExclamationTriangle} className="text-warning me-2" />
            Confirm Action
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">
            Are you sure you want to create a new proposal? 
            <br />
            <strong className="text-danger">This will clear all current data and you'll lose any unsaved changes.</strong>
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={cancelCreateNewProposal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmCreateNewProposal}>
            Yes, Create New Proposal
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default ProposalSummary;