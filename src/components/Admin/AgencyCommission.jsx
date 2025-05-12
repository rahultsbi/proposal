
import React, { useState, useEffect } from 'react';
import { Card, Form, Button, Spinner, Alert } from 'react-bootstrap';
import { getCommissionRate, updateCommissionRate } from '../../services/api'; // Update path if needed

function AgencyCommission() {
  const [commission, setCommission] = useState('0');
  const [currentCommission, setCurrentCommission] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch current commission rate when component mounts
  useEffect(() => {
    fetchCommissionRate();
  }, []);

  const fetchCommissionRate = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      console.log('Fetching commission rate...');
      
      // Use the API function instead of direct axios call
      const response = await getCommissionRate();
      console.log('Commission rate response:', response);
      
      // Safely extract commission rate from response
      let commissionRate = 0;
      
      if (response && response.data && typeof response.data.commissionRate !== 'undefined') {
        commissionRate = parseFloat(response.data.commissionRate);
        if (isNaN(commissionRate)) commissionRate = 0;
      }
      
      // Update state with the commission rate
      setCommission(commissionRate.toString());
      setCurrentCommission(commissionRate);
      
      console.log('Successfully set commission rate:', commissionRate);
    } catch (error) {
      console.error('Error fetching commission rate:', error);
      setError('Failed to load current commission rate. Please refresh the page.');
      // Set defaults in case of error
      setCommission('0');
      setCurrentCommission(0);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCommissionChange = (e) => {
    const value = e.target.value;
    // Only allow numbers and decimals
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setCommission(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate commission value
    let commissionValue;
    try {
      commissionValue = parseFloat(commission);
      if (isNaN(commissionValue) || commissionValue < 0 || commissionValue > 100) {
        setError('Please enter a valid percentage between 0 and 100');
        return;
      }
    } catch (err) {
      setError('Please enter a valid number');
      return;
    }

    try {
      setError('');
      setSuccess('');
      setIsSaving(true);

      console.log('Sending commission rate update:', commissionValue);
      
      // Use the API function instead of direct axios call
      const response = await updateCommissionRate(commissionValue);
      
      console.log('Update response:', response);

      // Update current commission and show success message
      setCurrentCommission(commissionValue);
      setSuccess('Agency commission rate updated successfully');
    } catch (error) {
      console.error('Error updating commission rate:', error);
      
      let errorMessage = 'Failed to update commission rate';
      if (error.response) {
        // Server responded with an error status
        errorMessage += error.response.status === 404 
          ? ': API endpoint not found' 
          : `: ${error.response.data?.error || error.message}`;
      } else if (error.request) {
        // No response received
        errorMessage += ': No response from server';
      } else {
        // Other error
        errorMessage += `: ${error.message}`;
      }
      
      setError(errorMessage);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="text-center p-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  return (
    <Card className="p-4 shadow-sm">
      <Card.Title className="mb-4">Agency Commission Settings</Card.Title>
      
      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">{success}</Alert>}
      
      <Card.Body>
        <p className="text-muted">
          Set the commission percentage that will be applied to all proposals. This amount will be 
          added to the total cost of services in the proposal summary.
        </p>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Commission Percentage (%)</Form.Label>
            <div className="d-flex align-items-center">
              <Form.Control
                type="text"
                value={commission}
                onChange={handleCommissionChange}
                placeholder="Enter percentage"
                style={{ maxWidth: '200px' }}
                disabled={isSaving}
                aria-describedby="commissionHelpBlock"
              />
              <span className="ms-2">%</span>
            </div>
            <Form.Text id="commissionHelpBlock" muted>
              Enter a value between 0 and 100
            </Form.Text>
          </Form.Group>
          
          <div className="mt-4">
            <Button 
              variant="primary" 
              type="submit"
              disabled={isSaving}
            >
              {isSaving ? (
                <>
                  <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
                  <span className="ms-2">Saving...</span>
                </>
              ) : (
                'Save Commission Rate'
              )}
            </Button>
          </div>
        </Form>
        
        <div className="mt-4 pt-3 border-top">
          <strong>Current Commission Rate:</strong> {currentCommission}%
        </div>
      </Card.Body>
    </Card>
  );
}

export default AgencyCommission;