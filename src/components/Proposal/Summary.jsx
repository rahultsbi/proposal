
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
        <Card.Text><strong>Delivery Dates:</strong> {formatDate(proposalData?.delivery_date)}</Card.Text>
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
            Create New Proposal
          </Button>
          {getDownloadButton()}
        </div>
      </Card>
    </Container>
  );
}

export default ProposalSummary;