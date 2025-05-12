// // // // // // // import React from 'react';
// // // // // // // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // // // // // // import { downloadProposal } from '../../services/api';

// // // // // // // function ProposalSummary({ data, onBack }) {
// // // // // // //   const handleDownload = async () => {
// // // // // // //     try {
// // // // // // //       const response = await downloadProposal(data.quoteId);
// // // // // // //       const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // // // //       const link = document.createElement('a');
// // // // // // //       link.href = url;
// // // // // // //       link.setAttribute('download', `${data.quoteId}.pdf`);
// // // // // // //       document.body.appendChild(link);
// // // // // // //       link.click();
// // // // // // //     } catch (error) {
// // // // // // //       console.error('Error downloading proposal:', error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // // // //       <Card className="p-4 shadow">
// // // // // // //         <h2>Proposal Summary</h2>
// // // // // // //         <Card.Text><strong>Quote ID:</strong> {data.quoteId}</Card.Text>
// // // // // // //         <Card.Text><strong>Client:</strong> {data.client_name}</Card.Text>
// // // // // // //         <Card.Text><strong>Email:</strong> {data.your_email}</Card.Text>
// // // // // // //         <Card.Text><strong>Project Title:</strong> {data.project_title || 'N/A'}</Card.Text>
// // // // // // //         <Card.Text><strong>Shoot Dates:</strong> {data.shoot_dates}</Card.Text>
// // // // // // //         <Card.Text><strong>Number of Days:</strong> {data.days}</Card.Text>
// // // // // // //         <Card.Text><strong>Category:</strong> {data.category}</Card.Text>
// // // // // // //         <Card.Text><strong>Location:</strong> {data.location}</Card.Text>

// // // // // // //         <hr />

// // // // // // //         <h4>Services Breakdown:</h4>
// // // // // // //         <ListGroup>
// // // // // // //           {data.services.map((service, index) => (
// // // // // // //             <ListGroup.Item key={index}>
// // // // // // //               {service.service_name} – ₹{service.total.toLocaleString()}
// // // // // // //             </ListGroup.Item>
// // // // // // //           ))}
// // // // // // //         </ListGroup>
// // // // // // //         <hr />
// // // // // // //         <h4>Total Estimate: ₹{data.total.toLocaleString()}</h4>

// // // // // // //         <div className="d-flex justify-content-between mt-3">
// // // // // // //           <Button variant="secondary" onClick={onBack}>
// // // // // // //             Back to Form
// // // // // // //           </Button>
// // // // // // //           <Button variant="primary" onClick={handleDownload}>
// // // // // // //             Download PDF
// // // // // // //           </Button>
// // // // // // //         </div>
// // // // // // //       </Card>
// // // // // // //     </Container>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default ProposalSummary;

// // // // // // import React from 'react';
// // // // // // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // // // // // import { downloadProposal } from '../../services/api';

// // // // // // function ProposalSummary({ data, onBack, servicesList }) {
// // // // // //   const handleDownload = async () => {
// // // // // //     try {
// // // // // //       const response = await downloadProposal(data.quoteId);
// // // // // //       const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // // //       const link = document.createElement('a');
// // // // // //       link.href = url;
// // // // // //       link.setAttribute('download', `${data.quoteId}.pdf`);
// // // // // //       document.body.appendChild(link);
// // // // // //       link.click();
// // // // // //     } catch (error) {
// // // // // //       console.error('Error downloading proposal:', error);
// // // // // //     }
// // // // // //   };

// // // // // //   // Check if data.services exists and is an array before mapping
// // // // // //   const renderServices = () => {
// // // // // //     // If services is an array of IDs
// // // // // //     if (Array.isArray(data.services) && data.services.every(service => typeof service === 'string')) {
// // // // // //       if (servicesList && Array.isArray(servicesList)) {
// // // // // //         // Map service IDs to their details from servicesList
// // // // // //         return data.services.map((serviceId, index) => {
// // // // // //           const serviceDetails = servicesList.find(s => s.id.toString() === serviceId);
// // // // // //           return serviceDetails ? (
// // // // // //             <ListGroup.Item key={index}>
// // // // // //               {serviceDetails.service_name || serviceDetails.name} – 
// // // // // //               {serviceDetails.price ? `₹${Number(serviceDetails.price).toLocaleString()}` : 'Price not available'}
// // // // // //             </ListGroup.Item>
// // // // // //           ) : (
// // // // // //             <ListGroup.Item key={index}>Service ID: {serviceId} – Details not available</ListGroup.Item>
// // // // // //           );
// // // // // //         });
// // // // // //       } else {
// // // // // //         // Fallback if servicesList is not available
// // // // // //         return data.services.map((serviceId, index) => (
// // // // // //           <ListGroup.Item key={index}>Service ID: {serviceId}</ListGroup.Item>
// // // // // //         ));
// // // // // //       }
// // // // // //     } 
// // // // // //     // If services is already an array of objects with service_name and total
// // // // // //     else if (Array.isArray(data.services) && data.services.every(service => typeof service === 'object')) {
// // // // // //       return data.services.map((service, index) => (
// // // // // //         <ListGroup.Item key={index}>
// // // // // //           {service.service_name} – ₹{service.total.toLocaleString()}
// // // // // //         </ListGroup.Item>
// // // // // //       ));
// // // // // //     } 
// // // // // //     // Fallback if services doesn't exist or is in an unexpected format
// // // // // //     else {
// // // // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // // //       <Card className="p-4 shadow">
// // // // // //         <h2>Proposal Summary</h2>
// // // // // //         <Card.Text><strong>Quote ID:</strong> {data.quoteId || 'Pending'}</Card.Text>
// // // // // //         <Card.Text><strong>Client:</strong> {data.client_name}</Card.Text>
// // // // // //         <Card.Text><strong>Email:</strong> {data.your_email}</Card.Text>
// // // // // //         <Card.Text><strong>Project Title:</strong> {data.project_title || 'N/A'}</Card.Text>
// // // // // //         <Card.Text><strong>Shoot Dates:</strong> {data.shoot_dates}</Card.Text>
// // // // // //         <Card.Text><strong>Number of Days:</strong> {data.days}</Card.Text>
// // // // // //         <Card.Text><strong>Category:</strong> {data.category}</Card.Text>
// // // // // //         <Card.Text><strong>Location:</strong> {data.location}</Card.Text>

// // // // // //         <hr />

// // // // // //         <h4>Services Breakdown:</h4>
// // // // // //         <ListGroup>
// // // // // //           {renderServices()}
// // // // // //         </ListGroup>
// // // // // //         <hr />
// // // // // //         <h4>Total Estimate: ₹{(data.total || 0).toLocaleString()}</h4>

// // // // // //         <div className="d-flex justify-content-between mt-3">
// // // // // //           <Button variant="secondary" onClick={onBack}>
// // // // // //             Back to Form
// // // // // //           </Button>
// // // // // //           <Button variant="primary" onClick={handleDownload}>
// // // // // //             Download PDF
// // // // // //           </Button>
// // // // // //         </div>
// // // // // //       </Card>
// // // // // //     </Container>
// // // // // //   );
// // // // // // }

// // // // // // export default ProposalSummary;

// // // // // // import React from 'react';
// // // // // // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // // // // // import { downloadProposal } from '../../services/api';

// // // // // // function ProposalSummary({ data, onBack, servicesList }) {
// // // // // //   // For debugging - log what data we're receiving
// // // // // //   console.log('ProposalSummary received data:', data);
// // // // // //   console.log('ProposalSummary received servicesList:', servicesList);

// // // // // //   const handleDownload = async () => {
// // // // // //     try {
// // // // // //       // Make sure we have a quoteId
// // // // // //       const quoteId = data.quoteId || `TSBI-Studios-${data.client_name}-${new Date().getTime()}`;
      
// // // // // //       const response = await downloadProposal(quoteId);
// // // // // //       const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // // //       const link = document.createElement('a');
// // // // // //       link.href = url;
// // // // // //       link.setAttribute('download', `${quoteId}.pdf`);
// // // // // //       document.body.appendChild(link);
// // // // // //       link.click();
// // // // // //     } catch (error) {
// // // // // //       console.error('Error downloading proposal:', error);
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

// // // // // //   // Calculate total if not provided
// // // // // //   const calculateTotal = () => {
// // // // // //     if (data.total) return data.total;
    
// // // // // //     let total = 0;
    
// // // // // //     // Make sure we have both services and servicesList
// // // // // //     if (Array.isArray(data.services) && Array.isArray(servicesList)) {
// // // // // //       data.services.forEach(serviceId => {
// // // // // //         const service = servicesList.find(s => s.id.toString() === serviceId);
// // // // // //         if (service) {
// // // // // //           total += service.rate_per_day * (data.days || 1);
// // // // // //         }
// // // // // //       });
// // // // // //     }
    
// // // // // //     return total;
// // // // // //   };

// // // // // //   // Render services with more robust handling
// // // // // //   const renderServices = () => {
// // // // // //     // If no services selected
// // // // // //     if (!data.services || !Array.isArray(data.services) || data.services.length === 0) {
// // // // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // // // //     }
    
// // // // // //     // If services is an array of IDs
// // // // // //     if (typeof data.services[0] === 'string' || typeof data.services[0] === 'number') {
// // // // // //       if (Array.isArray(servicesList)) {
// // // // // //         // Map service IDs to their details from servicesList
// // // // // //         return data.services.map((serviceId, index) => {
// // // // // //           const serviceDetails = servicesList.find(s => s.id.toString() === serviceId.toString());
          
// // // // // //           if (serviceDetails) {
// // // // // //             const dailyRate = serviceDetails.rate_per_day || 0;
// // // // // //             const days = data.days || 1;
// // // // // //             const serviceTotal = dailyRate * days;
            
// // // // // //             return (
// // // // // //               <ListGroup.Item key={index}>
// // // // // //                 {serviceDetails.service_name} – ₹{dailyRate.toLocaleString()}/day × {days} day{days > 1 ? 's' : ''} = ₹{serviceTotal.toLocaleString()}
// // // // // //               </ListGroup.Item>
// // // // // //             );
// // // // // //           } else {
// // // // // //             return (
// // // // // //               <ListGroup.Item key={index}>Service ID: {serviceId} – Details not available</ListGroup.Item>
// // // // // //             );
// // // // // //           }
// // // // // //         });
// // // // // //       } else {
// // // // // //         // Fallback if servicesList is not available
// // // // // //         return data.services.map((serviceId, index) => (
// // // // // //           <ListGroup.Item key={index}>Service ID: {serviceId}</ListGroup.Item>
// // // // // //         ));
// // // // // //       }
// // // // // //     } 
// // // // // //     // If services is already an array of objects
// // // // // //     else if (typeof data.services[0] === 'object') {
// // // // // //       return data.services.map((service, index) => {
// // // // // //         // Determine what properties are available on the service object
// // // // // //         const name = service.service_name || service.name || 'Unknown Service';
// // // // // //         const total = service.total || service.price || 0;
        
// // // // // //         return (
// // // // // //           <ListGroup.Item key={index}>
// // // // // //             {name} – ₹{Number(total).toLocaleString()}
// // // // // //           </ListGroup.Item>
// // // // // //         );
// // // // // //       });
// // // // // //     }
// // // // // //   };

// // // // // //   const totalAmount = calculateTotal();

// // // // // //   return (
// // // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // // //       <Card className="p-4 shadow">
// // // // // //         <h2>Proposal Summary</h2>
// // // // // //         <Card.Text><strong>Quote ID:</strong> {data.quoteId || `TSBI-Studios-${data.client_name}-${new Date().getTime().toString().slice(-4)}`}</Card.Text>
// // // // // //         <Card.Text><strong>Client:</strong> {data.client_name || 'Not specified'}</Card.Text>
// // // // // //         <Card.Text><strong>Email:</strong> {data.your_email || 'Not specified'}</Card.Text>
// // // // // //         <Card.Text><strong>Project Title:</strong> {data.project_title || 'N/A'}</Card.Text>
// // // // // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(data.shoot_dates)}</Card.Text>
// // // // // //         <Card.Text><strong>Number of Days:</strong> {data.days || 1}</Card.Text>
// // // // // //         <Card.Text><strong>Category:</strong> {data.category || 'Not specified'}</Card.Text>
// // // // // //         <Card.Text><strong>Location:</strong> {data.location || 'Not specified'}</Card.Text>

// // // // // //         <hr />

// // // // // //         <h4>Services Breakdown:</h4>
// // // // // //         <ListGroup>
// // // // // //           {renderServices()}
// // // // // //         </ListGroup>
// // // // // //         <hr />
// // // // // //         <h4>Total Estimate: ₹{totalAmount.toLocaleString()}</h4>

// // // // // //         <div className="d-flex justify-content-between mt-3">
// // // // // //           <Button variant="secondary" onClick={onBack}>
// // // // // //             Back to Form
// // // // // //           </Button>
// // // // // //           <Button variant="primary" onClick={handleDownload}>
// // // // // //             Download PDF
// // // // // //           </Button>
// // // // // //         </div>
// // // // // //       </Card>
// // // // // //     </Container>
// // // // // //   );
// // // // // // }

// // // // // // export default ProposalSummary;

// // // // // import React from 'react';
// // // // // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // // // // import { downloadProposal } from '../../services/api';

// // // // // function ProposalSummary({ data, onBack, servicesList }) {
// // // // //   // For debugging - log what data we're receiving
// // // // //   console.log('ProposalSummary received data:', data);
// // // // //   console.log('ProposalSummary received servicesList:', servicesList);

// // // // //   const handleDownload = async () => {
// // // // //     try {
// // // // //       // Make sure we have a quoteId
// // // // //       const quoteId = data.quoteId || `TSBI-Studios-${data.client_name}-${new Date().getTime()}`;
      
// // // // //       const response = await downloadProposal(quoteId);
// // // // //       const url = window.URL.createObjectURL(new Blob([response.data]));
// // // // //       const link = document.createElement('a');
// // // // //       link.href = url;
// // // // //       link.setAttribute('download', `${quoteId}.pdf`);
// // // // //       document.body.appendChild(link);
// // // // //       link.click();
// // // // //     } catch (error) {
// // // // //       console.error('Error downloading proposal:', error);
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

// // // // //   // Calculate total if not provided
// // // // //   const calculateTotal = () => {
// // // // //     if (data.total) return data.total;
    
// // // // //     let total = 0;
    
// // // // //     // Make sure we have both services and servicesList
// // // // //     if (Array.isArray(data.services) && Array.isArray(servicesList)) {
// // // // //       data.services.forEach(serviceId => {
// // // // //         const service = servicesList.find(s => s.id.toString() === serviceId);
// // // // //         if (service) {
// // // // //           total += service.rate_per_day * (data.days || 1);
// // // // //         }
// // // // //       });
// // // // //     }
    
// // // // //     return total;
// // // // //   };

// // // // //   // Render services with more robust handling
// // // // //   const renderServices = () => {
// // // // //     // If no services selected
// // // // //     if (!data.services || !Array.isArray(data.services) || data.services.length === 0) {
// // // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // // //     }
    
// // // // //     // If services is an array of IDs
// // // // //     if (typeof data.services[0] === 'string' || typeof data.services[0] === 'number') {
// // // // //       if (Array.isArray(servicesList)) {
// // // // //         // Map service IDs to their details from servicesList
// // // // //         return data.services.map((serviceId, index) => {
// // // // //           const serviceDetails = servicesList.find(s => s.id.toString() === serviceId.toString());
          
// // // // //           if (serviceDetails) {
// // // // //             const dailyRate = serviceDetails.rate_per_day || 0;
// // // // //             const days = data.days || 1;
// // // // //             const serviceTotal = dailyRate * days;
            
// // // // //             return (
// // // // //               <ListGroup.Item key={index}>
// // // // //                 {serviceDetails.service_name} – ₹{dailyRate.toLocaleString()}/day × {days} day{days > 1 ? 's' : ''} = ₹{serviceTotal.toLocaleString()}
// // // // //               </ListGroup.Item>
// // // // //             );
// // // // //           } else {
// // // // //             return (
// // // // //               <ListGroup.Item key={index}>Service ID: {serviceId} – Details not available</ListGroup.Item>
// // // // //             );
// // // // //           }
// // // // //         });
// // // // //       } else {
// // // // //         // Fallback if servicesList is not available
// // // // //         return data.services.map((serviceId, index) => (
// // // // //           <ListGroup.Item key={index}>Service ID: {serviceId}</ListGroup.Item>
// // // // //         ));
// // // // //       }
// // // // //     } 
// // // // //     // If services is already an array of objects
// // // // //     else if (typeof data.services[0] === 'object') {
// // // // //       return data.services.map((service, index) => {
// // // // //         // Determine what properties are available on the service object
// // // // //         const name = service.service_name || service.name || 'Unknown Service';
// // // // //         const total = service.total || service.price || 0;
        
// // // // //         return (
// // // // //           <ListGroup.Item key={index}>
// // // // //             {name} – ₹{Number(total).toLocaleString()}
// // // // //           </ListGroup.Item>
// // // // //         );
// // // // //       });
// // // // //     }
// // // // //   };

// // // // //   const totalAmount = calculateTotal();

// // // // //   return (
// // // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // // //       <Card className="p-4 shadow">
// // // // //         <h2>Proposal Summary</h2>
// // // // //         <Card.Text><strong>Quote ID:</strong> {data.quoteId || `TSBI-Studios-${data.client_name}-${new Date().getTime().toString().slice(-4)}`}</Card.Text>
// // // // //         <Card.Text><strong>Client:</strong> {data.client_name || 'Not specified'}</Card.Text>
// // // // //         <Card.Text><strong>Email:</strong> {data.your_email || 'Not specified'}</Card.Text>
// // // // //         <Card.Text><strong>Project Title:</strong> {data.project_title || 'N/A'}</Card.Text>
// // // // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(data.shoot_dates)}</Card.Text>
// // // // //         <Card.Text><strong>Number of Days:</strong> {data.days || 1}</Card.Text>
// // // // //         <Card.Text><strong>Category:</strong> {data.category || 'Not specified'}</Card.Text>
// // // // //         <Card.Text><strong>Location:</strong> {data.location || 'Not specified'}</Card.Text>

// // // // //         <hr />

// // // // //         <h4>Services Breakdown:</h4>
// // // // //         <ListGroup>
// // // // //           {renderServices()}
// // // // //         </ListGroup>
// // // // //         <hr />
// // // // //         <h4>Total Estimate: ₹{totalAmount.toLocaleString()}</h4>

// // // // //         <div className="d-flex justify-content-between mt-3">
// // // // //           <Button variant="secondary" onClick={onBack}>
// // // // //             Back to Form
// // // // //           </Button>
// // // // //           <Button variant="primary" onClick={handleDownload}>
// // // // //             Download PDF
// // // // //           </Button>
// // // // //         </div>
// // // // //       </Card>
// // // // //     </Container>
// // // // //   );
// // // // // }

// // // // // export default ProposalSummary;
// // // // import React from 'react';
// // // // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // // // import { downloadProposal } from '../../services/api';

// // // // function ProposalSummary({ data, onBack }) {
// // // //   // Log received data for debugging
// // // //   console.log('ProposalSummary received data:', data);
  
// // // //   // Extract the proposal data based on the API response structure
// // // //   const proposalData = data?.proposalData || {};
// // // //   const quoteId = data?.quoteId || proposalData?.quote_id || 'Unknown';
  
// // // //   // Handler for PDF download
// // // //   const handleDownload = async () => {
// // // //     try {
// // // //       if (!quoteId || quoteId === 'Unknown') {
// // // //         console.error('No quote ID available for download');
// // // //         return;
// // // //       }
      
// // // //       // Call the API to download the PDF
// // // //       const response = await downloadProposal(quoteId);
      
// // // //       // Create a blob URL from the response data
// // // //       const blob = new Blob([response.data], { type: 'application/pdf' });
// // // //       const url = window.URL.createObjectURL(blob);
      
// // // //       // Create a link and simulate a click to trigger the download
// // // //       const link = document.createElement('a');
// // // //       link.href = url;
// // // //       link.setAttribute('download', `${quoteId}.pdf`);
// // // //       document.body.appendChild(link);
// // // //       link.click();
      
// // // //       // Clean up
// // // //       document.body.removeChild(link);
// // // //       window.URL.revokeObjectURL(url);
// // // //     } catch (error) {
// // // //       console.error('Error downloading proposal:', error);
// // // //     }
// // // //   };

// // // //   // Format date for display
// // // //   const formatDate = (dateString) => {
// // // //     if (!dateString) return 'Not specified';
    
// // // //     try {
// // // //       const date = new Date(dateString);
// // // //       return date.toLocaleDateString('en-IN', {
// // // //         day: '2-digit',
// // // //         month: '2-digit',
// // // //         year: 'numeric'
// // // //       });
// // // //     } catch (e) {
// // // //       return dateString;
// // // //     }
// // // //   };

// // // //   // Render services from the proposal data
// // // //   const renderServices = () => {
// // // //     // Get services from the proposal data
// // // //     const services = proposalData?.services || [];
    
// // // //     // Handle case where no services are selected
// // // //     if (!Array.isArray(services) || services.length === 0) {
// // // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // // //     }
    
// // // //     // Render services that are already objects with service details
// // // //     return services.map((service, index) => (
// // // //       <ListGroup.Item key={index}>
// // // //         {service.service_name || 'Unknown Service'} – 
// // // //         ₹{Number(service.rate_per_day || 0).toLocaleString()}/day × 
// // // //         {service.days || proposalData.days || 1} day(s) = 
// // // //         ₹{Number(service.total || 0).toLocaleString()}
// // // //       </ListGroup.Item>
// // // //     ));
// // // //   };

// // // //   // Get the total from the proposal data
// // // //   const total = proposalData?.total || 0;

// // // //   return (
// // // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // // //       <Card className="p-4 shadow">
// // // //         <h2>Proposal Summary</h2>
// // // //         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
// // // //         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
// // // //         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
// // // //         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
// // // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
// // // //         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
// // // //         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
// // // //         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

// // // //         <hr />

// // // //         <h4>Services Breakdown:</h4>
// // // //         <ListGroup>
// // // //           {renderServices()}
// // // //         </ListGroup>
// // // //         <hr />
// // // //         <h4>Total Estimate: ₹{Number(total).toLocaleString()}</h4>

// // // //         <div className="d-flex justify-content-between mt-3">
// // // //           <Button variant="secondary" onClick={onBack}>
// // // //             Back to Form
// // // //           </Button>
// // // //           <Button variant="primary" onClick={handleDownload}>
// // // //             Download PDF
// // // //           </Button>
// // // //         </div>
// // // //       </Card>
// // // //     </Container>
// // // //   );
// // // // }

// // // // export default ProposalSummary;
// // // import React from 'react';
// // // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // // import { downloadProposal } from '../../services/api';

// // // function ProposalSummary({ data, onBack }) {
// // //   // Log received data for debugging
// // //   console.log('ProposalSummary received data:', data);
  
// // //   // Extract the actual proposal data from the Axios response
// // //   // The data is nested inside data.data
// // //   const responseData = data?.data || {};
// // //   const proposalData = responseData?.proposalData || {};
// // //   const quoteId = responseData?.quoteId || proposalData?.quote_id || 'Unknown';
  
// // //   console.log('Extracted proposalData:', proposalData);
// // //   console.log('Extracted quoteId:', quoteId);
  
// // //   // Handler for PDF download
// // //   const handleDownload = async () => {
// // //     try {
// // //       if (!quoteId || quoteId === 'Unknown') {
// // //         console.error('No quote ID available for download');
// // //         return;
// // //       }
      
// // //       // Call the API to download the PDF
// // //       const response = await downloadProposal(quoteId);
      
// // //       // Create a blob URL from the response data
// // //       const blob = new Blob([response.data], { type: 'application/pdf' });
// // //       const url = window.URL.createObjectURL(blob);
      
// // //       // Create a link and simulate a click to trigger the download
// // //       const link = document.createElement('a');
// // //       link.href = url;
// // //       link.setAttribute('download', `${quoteId}.pdf`);
// // //       document.body.appendChild(link);
// // //       link.click();
      
// // //       // Clean up
// // //       document.body.removeChild(link);
// // //       window.URL.revokeObjectURL(url);
// // //     } catch (error) {
// // //       console.error('Error downloading proposal:', error);
// // //     }
// // //   };

// // //   // Format date for display
// // //   const formatDate = (dateString) => {
// // //     if (!dateString) return 'Not specified';
    
// // //     try {
// // //       const date = new Date(dateString);
// // //       return date.toLocaleDateString('en-IN', {
// // //         day: '2-digit',
// // //         month: '2-digit',
// // //         year: 'numeric'
// // //       });
// // //     } catch (e) {
// // //       return dateString;
// // //     }
// // //   };

// // //   // Render services from the proposal data
// // //   const renderServices = () => {
// // //     // Get services from the proposal data
// // //     const services = proposalData?.services || [];
    
// // //     // Handle case where no services are selected
// // //     if (!Array.isArray(services) || services.length === 0) {
// // //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// // //     }
    
// // //     // Render services that are already objects with service details
// // //     return services.map((service, index) => (
// // //       <ListGroup.Item key={index}>
// // //         {service.service_name || 'Unknown Service '}  

// // //         {/* ₹{Number(service.rate_per_day || 0).toLocaleString()}/day ×  */}
// // //         {/* {service.days || proposalData.days || 1} day(s) =  */}
// // //            =  ₹{Number(service.total || 0).toLocaleString()}
// // //       </ListGroup.Item>
// // //     ));
// // //   };

// // //   // Get the total from the proposal data
// // //   const total = proposalData?.total || 0;

// // //   return (
// // //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// // //       <Card className="p-4 shadow">
// // //         <h2>Proposal Summary</h2>
// // //         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
// // //         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
// // //         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
// // //         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
// // //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
// // //         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
// // //         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
// // //         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

// // //         <hr />

// // //         <h4>Services Breakdown:</h4>
// // //         <ListGroup>
// // //           {renderServices()}
// // //         </ListGroup>
// // //         <hr />
// // //         <h4>Total Estimate: ₹{Number(total).toLocaleString()}</h4>

// // //         <div className="d-flex justify-content-between mt-3">
// // //           <Button variant="secondary" onClick={onBack}>
// // //             Back to Form
// // //           </Button>
// // //           <Button variant="primary" onClick={handleDownload}>
// // //             Download PDF
// // //           </Button>
// // //         </div>
// // //       </Card>
// // //     </Container>
// // //   );
// // // }

// // // export default ProposalSummary;
// // import React from 'react';
// // import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// // import { downloadProposal } from '../../services/api';

// // function ProposalSummary({ data, onBack }) {
// //   // Log received data for debugging
// //   console.log('ProposalSummary received data:', data);
  
// //   // Extract the actual proposal data from the Axios response
// //   const responseData = data?.data || {};
// //   const proposalData = responseData?.proposalData || {};
// //   const quoteId = responseData?.quoteId || proposalData?.quote_id || 'Unknown';
  
// //   console.log('Extracted proposalData:', proposalData);
// //   console.log('Extracted quoteId:', quoteId);
  
// //   // Handler for PDF download
// //   const handleDownload = async () => {
// //     try {
// //       if (!quoteId || quoteId === 'Unknown') {
// //         console.error('No quote ID available for download');
// //         return;
// //       }
      
// //       // Call the API to download the PDF
// //       const response = await downloadProposal(quoteId);
      
// //       // Create a blob URL from the response data
// //       const blob = new Blob([response.data], { type: 'application/pdf' });
// //       const url = window.URL.createObjectURL(blob);
      
// //       // Create a link and simulate a click to trigger the download
// //       const link = document.createElement('a');
// //       link.href = url;
// //       link.setAttribute('download', `${quoteId}.pdf`);
// //       document.body.appendChild(link);
// //       link.click();
      
// //       // Clean up
// //       document.body.removeChild(link);
// //       window.URL.revokeObjectURL(url);
// //     } catch (error) {
// //       console.error('Error downloading proposal:', error);
// //     }
// //   };

// //   // Format date for display
// //   const formatDate = (dateString) => {
// //     if (!dateString) return 'Not specified';
    
// //     try {
// //       const date = new Date(dateString);
// //       return date.toLocaleDateString('en-IN', {
// //         day: '2-digit',
// //         month: '2-digit',
// //         year: 'numeric'
// //       });
// //     } catch (e) {
// //       return dateString;
// //     }
// //   };

// //   // Format currency
// //   const formatCurrency = (amount) => {
// //     return Number(amount || 0).toLocaleString();
// //   };

// //   // Render services from the proposal data
// //   const renderServices = () => {
// //     // Get services from the proposal data
// //     const services = proposalData?.services || [];
    
// //     // Handle case where no services are selected
// //     if (!Array.isArray(services) || services.length === 0) {
// //       return <ListGroup.Item>No services selected</ListGroup.Item>;
// //     }
    
// //     // Render services that are already objects with service details
// //     return services.map((service, index) => (
// //       <ListGroup.Item key={index}>
// //         {service.service_name || 'Unknown Service'} – 
// //         ₹{formatCurrency(service.rate_per_day)}/day × 
// //         {service.days || proposalData.days || 1} day(s) = 
// //         ₹{formatCurrency(service.total)}
// //       </ListGroup.Item>
// //     ));
// //   };

// //   // Get all the totals and rates from the proposal data
// //   const servicesTotal = proposalData?.services_total || 0;
// //   const commissionRate = proposalData?.commission_rate || 0;
// //   const commissionAmount = proposalData?.commission_amount || 0;
// //   const total = proposalData?.total || 0;

// //   return (
// //     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
// //       <Card className="p-4 shadow">
// //         <h2>Proposal Summary</h2>
// //         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
// //         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
// //         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
// //         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
// //         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
// //         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
// //         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
// //         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

// //         <hr />

// //         <h4>Services Breakdown:</h4>
// //         <ListGroup>
// //           {renderServices()}
// //         </ListGroup>
        
// //         <div className="mt-3 py-2 px-3 bg-light rounded">
// //           <div className="d-flex justify-content-between align-items-center">
// //             <span><strong>Services Total:</strong></span>
// //             <span>₹{formatCurrency(servicesTotal)}</span>
// //           </div>
          
// //           {commissionRate > 0 && (
// //             <div className="d-flex justify-content-between align-items-center mt-2">
// //               <span><strong>Agency Commission ({commissionRate}%):</strong></span>
// //               <span>₹{formatCurrency(commissionAmount)}</span>
// //             </div>
// //           )}
          
// //           <div className="d-flex justify-content-between align-items-center mt-2 pt-2 border-top">
// //             <h5 className="mb-0"><strong>Final Total:</strong></h5>
// //             <h5 className="mb-0">₹{formatCurrency(total)}</h5>
// //           </div>
// //         </div>

// //         <div className="d-flex justify-content-between mt-4">
// //           <Button variant="secondary" onClick={onBack}>
// //             Back to Form
// //           </Button>
// //           <Button variant="primary" onClick={handleDownload}>
// //             Download PDF
// //           </Button>
// //         </div>
// //       </Card>
// //     </Container>
// //   );
// // }

// // export default ProposalSummary;


// import React from 'react';
// import { Card, Button, ListGroup, Container } from 'react-bootstrap';
// import { downloadProposal } from '../../services/api';

// function ProposalSummary({ data, onBack }) {
//   // Log received data for debugging
//   console.log('ProposalSummary received data:', data);
  
//   // Extract the actual proposal data from the API response
//   const responseData = data?.data || {};
//   const proposalData = responseData?.proposalData || {};
//   const quoteId = responseData?.quoteId || proposalData?.quote_id || 'Unknown';
  
//   console.log('Extracted proposalData:', proposalData);
//   console.log('Extracted quoteId:', quoteId);
  
//   // Handler for PDF download
//   const handleDownload = async () => {
//     try {
//       if (!quoteId || quoteId === 'Unknown') {
//         console.error('No quote ID available for download');
//         return;
//       }
      
//       // Call the API to download the PDF
//       const response = await downloadProposal(quoteId);
      
//       // Create a blob URL from the response data
//       const blob = new Blob([response.data], { type: 'application/pdf' });
//       const url = window.URL.createObjectURL(blob);
      
//       // Create a link and simulate a click to trigger the download
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${quoteId}.pdf`);
//       document.body.appendChild(link);
//       link.click();
      
//       // Clean up
//       document.body.removeChild(link);
//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error('Error downloading proposal:', error);
//     }
//   };

//   // Format date for display
//   const formatDate = (dateString) => {
//     if (!dateString) return 'Not specified';
    
//     try {
//       const date = new Date(dateString);
//       return date.toLocaleDateString('en-IN', {
//         day: '2-digit',
//         month: '2-digit',
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

//   // Render services from the proposal data
//   const renderServices = () => {
//     // Get services from the proposal data
//     const services = proposalData?.services || [];
    
//     // Handle case where no services are selected
//     if (!Array.isArray(services) || services.length === 0) {
//       return <ListGroup.Item>No services selected</ListGroup.Item>;
//     }
    
//     // Render services that are already objects with service details
//     return services.map((service, index) => (
//       <ListGroup.Item key={index}>
//         {service.service_name || 'Unknown Service'} – 
//         ₹{formatCurrency(service.rate_per_day)}/day × 
//         {service.days || proposalData.days || 1} day(s) = 
//         ₹{formatCurrency(service.total)}
//       </ListGroup.Item>
//     ));
//   };

//   // Get the total from the proposal data
//   const total = proposalData?.total || 0;
  
//   // Check if we have commission data
//   const servicesTotal = proposalData?.services_total || total;
//   const commissionRate = proposalData?.commission_rate || 0;
//   const commissionAmount = proposalData?.commission_amount || 0;
  
//   // Determine if we should show commission section
//   const showCommission = commissionRate > 0 && commissionAmount > 0;

//   return (
//     <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
//       <Card className="p-4 shadow">
//         <h2>Proposal Summary</h2>
//         <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
//         <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
//         <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
//         <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
//         <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
//         <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
//         <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
//         <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

//         <hr />

//         <h4>Services Breakdown:</h4>
//         <ListGroup>
//           {renderServices()}
//         </ListGroup>
        
//         <div className="mt-3 py-2 px-3 bg-light rounded">
//           {/* Show services subtotal only if commission is present */}
//           {showCommission && (
//             <div className="d-flex justify-content-between align-items-center">
//               <span><strong>Services Total:</strong></span>
//               <span>₹{formatCurrency(servicesTotal)}</span>
//             </div>
//           )}
          
//           {/* Show commission if present */}
//           {showCommission && (
//             <div className="d-flex justify-content-between align-items-center mt-2">
//               <span><strong>Agency Commission ({commissionRate}%):</strong></span>
//               <span>₹{formatCurrency(commissionAmount)}</span>
//             </div>
//           )}
          
//           {/* Always show final total */}
//           <div className={`d-flex justify-content-between align-items-center ${showCommission ? 'mt-2 pt-2 border-top' : ''}`}>
//             <h5 className="mb-0"><strong>Total:</strong></h5>
//             <h5 className="mb-0">₹{formatCurrency(total)}</h5>
//           </div>
//         </div>

//         <div className="d-flex justify-content-between mt-4">
//           <Button variant="secondary" onClick={onBack}>
//             Back to Form
//           </Button>
//           <Button variant="primary" onClick={handleDownload}>
//             Download PDF
//           </Button>
//         </div>
//       </Card>
//     </Container>
//   );
// }

// export default ProposalSummary;
import React, { useState } from 'react';
import { Card, Button, ListGroup, Container, Spinner } from 'react-bootstrap';
import { downloadProposal } from '../../services/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload, faCheck } from '@fortawesome/free-solid-svg-icons';
import './ProposalSummary.css'; // We'll create this CSS file for animations

function ProposalSummary({ data, onBack }) {
  // Add state for download button
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  
  // Log received data for debugging
  console.log('ProposalSummary received data:', data);
  
  // Extract the actual proposal data from the API response
  const responseData = data?.data || {};
  const proposalData = responseData?.proposalData || {};
  const quoteId = responseData?.quoteId || proposalData?.quote_id || 'Unknown';
  
  console.log('Extracted proposalData:', proposalData);
  console.log('Extracted quoteId:', quoteId);
  
  // Handler for PDF download
  const handleDownload = async () => {
    try {
      if (!quoteId || quoteId === 'Unknown') {
        console.error('No quote ID available for download');
        return;
      }
      
      // Set downloading state
      setIsDownloading(true);
      
      // Call the API to download the PDF
      const response = await downloadProposal(quoteId);
      
      // Create a blob URL from the response data
      const blob = new Blob([response.data], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      
      // Create a link and simulate a click to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${quoteId}.pdf`);
      document.body.appendChild(link);
      link.click();
      
      // Clean up
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      // Set success state and reset after animation completes
      setIsDownloading(false);
      setDownloadSuccess(true);
      
      // Reset success state after animation duration
      setTimeout(() => {
        setDownloadSuccess(false);
      }, 2000);
    } catch (error) {
      console.error('Error downloading proposal:', error);
      setIsDownloading(false);
    }
  };

  // Format date for display
  const formatDate = (dateString) => {
    if (!dateString) return 'Not specified';
    
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: '2-digit',
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

  // Render services from the proposal data
  const renderServices = () => {
    // Get services from the proposal data
    const services = proposalData?.services || [];
    
    // Handle case where no services are selected
    if (!Array.isArray(services) || services.length === 0) {
      return <ListGroup.Item>No services selected</ListGroup.Item>;
    }
    
    // Render services that are already objects with service details
    return services.map((service, index) => (
      <ListGroup.Item key={index}>
        {service.service_name || 'Unknown Service'} – 
        ₹{formatCurrency(service.rate_per_day)}/day × 
        {service.days || proposalData.days || 1} day(s) = 
        ₹{formatCurrency(service.total)}
      </ListGroup.Item>
    ));
  };

  // Get the total from the proposal data
  const total = proposalData?.total || 0;
  
  // Check if we have commission data
  const servicesTotal = proposalData?.services_total || total;
  const commissionRate = proposalData?.commission_rate || 0;
  const commissionAmount = proposalData?.commission_amount || 0;
  
  // Determine if we should show commission section
  const showCommission = commissionRate > 0 && commissionAmount > 0;

  // Determine download button class and content
  const getDownloadButton = () => {
    if (isDownloading) {
      return (
        <Button variant="primary" disabled className="download-btn">
          <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" className="me-2" />
          Downloading...
        </Button>
      );
    }
    
    if (downloadSuccess) {
      return (
        <Button variant="success" className="download-btn success-animation">
          <FontAwesomeIcon icon={faCheck} className="me-2" />
          Downloaded!
        </Button>
      );
    }
    
    return (
      <Button variant="primary" onClick={handleDownload} className="download-btn pulse-animation">
        <FontAwesomeIcon icon={faDownload} className="me-2" />
        Download PDF
      </Button>
    );
  };

  return (
    <Container className="mt-5 mb-5" style={{ maxWidth: '800px' }}>
      <Card className="p-4 shadow">
        <h2>Proposal Summary</h2>
        <Card.Text><strong>Quote ID:</strong> {quoteId}</Card.Text>
        <Card.Text><strong>Client:</strong> {proposalData?.client_name || 'Not specified'}</Card.Text>
        <Card.Text><strong>Email:</strong> {proposalData?.your_email || 'Not specified'}</Card.Text>
        <Card.Text><strong>Project Title:</strong> {proposalData?.project_title || 'N/A'}</Card.Text>
        <Card.Text><strong>Shoot Dates:</strong> {formatDate(proposalData?.shoot_dates)}</Card.Text>
        <Card.Text><strong>Number of Days:</strong> {proposalData?.days || 1}</Card.Text>
        <Card.Text><strong>Category:</strong> {proposalData?.category || 'Not specified'}</Card.Text>
        <Card.Text><strong>Location:</strong> {proposalData?.location || 'Not specified'}</Card.Text>

        <hr />

        <h4>Services Breakdown:</h4>
        <ListGroup>
          {renderServices()}
        </ListGroup>
        
        <div className="mt-3 py-2 px-3 bg-light rounded">
          {/* Show services subtotal only if commission is present */}
          {showCommission && (
            <div className="d-flex justify-content-between align-items-center">
              <span><strong>Services Total:</strong></span>
              <span>₹{formatCurrency(servicesTotal)}</span>
            </div>
          )}
          
          {/* Show commission if present */}
          {showCommission && (
            <div className="d-flex justify-content-between align-items-center mt-2">
              <span><strong>Agency Commission ({commissionRate}%):</strong></span>
              <span>₹{formatCurrency(commissionAmount)}</span>
            </div>
          )}
          
          {/* Always show final total */}
          <div className={`d-flex justify-content-between align-items-center ${showCommission ? 'mt-2 pt-2 border-top' : ''}`}>
            <h5 className="mb-0"><strong>Total:</strong></h5>
            <h5 className="mb-0">₹{formatCurrency(total)}</h5>
          </div>
        </div>

        <div className="d-flex justify-content-between mt-4">
          <Button variant="secondary" onClick={onBack}>
            Back to Form
          </Button>
          {getDownloadButton()}
        </div>
      </Card>
    </Container>
  );
}

export default ProposalSummary;