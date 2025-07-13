// import React, { useState, useEffect } from 'react';
// import ProposalForm from './Form';
// import ProposalSummary from './Summary';
// import { fetchServices } from '../../services/api';

// function ProposalContainer() {
//   const [showForm, setShowForm] = useState(true);
//   const [proposalData, setProposalData] = useState(null);
//   const [services, setServices] = useState([]);
  
//   // Load services on component mount
//   useEffect(() => {
//     const loadServices = async () => {
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
//       }
//     };
//     loadServices();
//   }, []);

//   const handleFormSubmit = (formData) => {
//     console.log('Form submitted with data:', formData);
    
//     // Generate a quote ID
//     const quoteId = `TSBI-Studios-${formData.client_name}-${new Date().getTime().toString().slice(-4)}`;
    
//     // Calculate total from services
//     let total = 0;
//     formData.services.forEach(serviceId => {
//       const service = services.find(s => s.id === serviceId);
//       if (service) {
//         total += service.rate_per_day * formData.days;
//       }
//     });
    
//     // Set complete proposal data
//     setProposalData({
//       ...formData,
//       quoteId,
//       total
//     });
    
//     // Show summary view
//     setShowForm(false);
//   };

//   const handleAdminClick = () => {
//     // Implementation of admin functionality
//     console.log('Admin button clicked');
//     // Navigate to admin page or show admin login
//   };

//   const handleBackToForm = () => {
//     setShowForm(true);
//   };

//   return (
//     <>
//       {showForm ? (
//         <ProposalForm 
//           onSubmit={handleFormSubmit} 
//           onAdminClick={handleAdminClick} 
//         />
//       ) : (
//         <ProposalSummary 
//           data={proposalData} 
//           onBack={handleBackToForm} 
//           servicesList={services} 
//         />
//       )}
//     </>
//   );
// }

// export default ProposalContainer;
import React, { useState, useEffect } from 'react';
import ProposalForm from './Form';
import ProposalSummary from './Summary';
import { fetchServices, createProposal } from '../../services/api';

function ProposalContainer() {
  const [showForm, setShowForm] = useState(true);
  const [proposalData, setProposalData] = useState(null);
  const [services, setServices] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

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

  const handleFormSubmit = async (formData) => {
    console.log('🚀 Form submitted with enhanced data:', formData);
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      // Prepare the data for backend API
      const submissionData = {
        client_name: formData.client_name,
        your_email: formData.your_email,
        project_title: formData.project_title,
        shoot_dates: formData.shoot_dates,
        delivery_date: formData.delivery_date,
        days: parseInt(formData.days),
        category_id: formData.category_id,
        selectedCategory: formData.selectedCategory,
        location: formData.location,
        services: formData.services, // Object with service IDs as keys
        serviceDetails: formData.serviceDetails, // Enhanced service details
        baseTotal: formData.baseTotal || 0,
        adjustments: formData.adjustments || [],
        finalTotal: formData.finalTotal || formData.total || 0
      };

      console.log('📤 Sending to backend:', submissionData);

      // Call the backend API
      const response = await createProposal(submissionData);
      
      console.log('✅ Backend response:', response);

      if (response.success) {
        // Set the complete proposal data for summary
        setProposalData(response); // Pass the entire response including data wrapper

        // Show summary view
        setShowForm(false);
      } else {
        throw new Error(response.error || 'Failed to create proposal');
      }

    } catch (error) {
      console.error('❌ Error submitting proposal:', error);
      setSubmitError(error.message || 'Failed to create proposal. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAdminClick = () => {
    // Implementation of admin functionality
    console.log('Admin button clicked');
    // Navigate to admin page or show admin login
  };

  const handleHomeClick = () => {
    console.log('Home button clicked');
    // Navigate to home page
  };

  const handleDashboardClick = () => {
    console.log('Dashboard button clicked');
    // Navigate to dashboard
  };

  const handleBackToForm = () => {
    setShowForm(true);
    setProposalData(null);
    setSubmitError(null);
  };

  return (
    <>
      {showForm ? (
        <ProposalForm 
          onSubmit={handleFormSubmit}
          onAdminClick={handleAdminClick}
          onHomeClick={handleHomeClick}
          onDashboardClick={handleDashboardClick}
          isSubmitting={isSubmitting}
          submitError={submitError}
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