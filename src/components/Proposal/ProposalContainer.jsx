import React, { useState, useEffect } from 'react';
import ProposalForm from './Form';
import ProposalSummary from './Summary';
import { fetchServices } from '../../services/api';

function ProposalContainer() {
  const [showForm, setShowForm] = useState(true);
  const [proposalData, setProposalData] = useState(null);
  const [services, setServices] = useState([]);
  
  // Load services on component mount
  useEffect(() => {
    const loadServices = async () => {
      try {
        console.log('Fetching services from API...');
        const response = await fetchServices();
        const servicesWithStringIds = response.data.map(service => ({
          ...service,
          id: service.id.toString() // Ensure IDs are strings
        }));
        console.log('Services loaded:', servicesWithStringIds);
        setServices(servicesWithStringIds);
      } catch (error) {
        console.error('Error loading services:', error);
      }
    };
    loadServices();
  }, []);

  const handleFormSubmit = (formData) => {
    console.log('Form submitted with data:', formData);
    
    // Generate a quote ID
    const quoteId = `TSBI-Studios-${formData.client_name}-${new Date().getTime().toString().slice(-4)}`;
    
    // Calculate total from services
    let total = 0;
    formData.services.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        total += service.rate_per_day * formData.days;
      }
    });
    
    // Set complete proposal data
    setProposalData({
      ...formData,
      quoteId,
      total
    });
    
    // Show summary view
    setShowForm(false);
  };

  const handleAdminClick = () => {
    // Implementation of admin functionality
    console.log('Admin button clicked');
    // Navigate to admin page or show admin login
  };

  const handleBackToForm = () => {
    setShowForm(true);
  };

  return (
    <>
      {showForm ? (
        <ProposalForm 
          onSubmit={handleFormSubmit} 
          onAdminClick={handleAdminClick} 
        />
      ) : (
        <ProposalSummary 
          data={proposalData} 
          onBack={handleBackToForm} 
          servicesList={services} 
        />
      )}
    </>
  );
}

export default ProposalContainer;