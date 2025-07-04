
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ProposalForm from '../components/Proposal/Form';
import ProposalSummary from '../components/Proposal/Summary';
import { createProposal } from '../services/api';

function ProposalPage() {
  // State to track the current step (form or summary)
  const [step, setStep] = useState('form');
  
  // State to store the API response with proposal data
  const [proposalData, setProposalData] = useState(null);
  
  // React Router navigation hook
  const navigate = useNavigate();
  
  // Handler for form submission
  const handleSubmit = async (data) => {
    try {
      console.log('Submitting form data:', data);
      
      // Show loading indicator or toast (optional)
      toast.info('Generating proposal...');
      
      // Call the API to create the proposal
      const response = await createProposal(data);
      console.log('API response:', response);
      
      // Store the complete response (not just response.data)
      // This ensures we have access to the entire API response structure
      setProposalData(response);
      
      // Switch to summary view
      setStep('summary');
      
      // Show success message
      toast.success('Proposal generated successfully!');
    } catch (error) {
      // Log the error details
      console.error('Error creating proposal:', error);
      
      // Show error message to the user
      toast.error('Failed to generate proposal. Please try again.');
    }
  };
  
  // Handler for going back to the form
  const handleBackToForm = () => {
    setStep('form');
  };
  
  // Handler for admin button click
  const handleAdminClick = () => {
    navigate('/admin/login');
  };
  const handleHomeClick = () => {
    navigate('/');
  };
  
  // Render summary if we're on the summary step and have proposal data
  if (step === 'summary' && proposalData) {
    return (
      <ProposalSummary 
        data={proposalData} 
        onBack={handleBackToForm} 
      />
    );
  }
  
  // Otherwise render the form
  return (
    <ProposalForm
      onSubmit={handleSubmit}
      onAdminClick={handleAdminClick}
      onHomeClick={handleHomeClick}
      onDashboardClick={() => navigate('/dashboard')}
    />
  );
}

export default ProposalPage;