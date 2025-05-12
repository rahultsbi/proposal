// import React, { useEffect, useState } from 'react';
// import api from '../services/api';

// const Form = () => {
//   const [services, setServices] = useState([]);
//   const [form, setForm] = useState({
//     client_name: '',
//     client_email: '',
//     project_title: '',
//     shoot_dates: '',
//     days: 1,
//     category: '',
//     location: '',
//     services: [],
//   });

//   const [total, setTotal] = useState(0);

//   useEffect(() => {
//     api.get('/services').then(res => setServices(res.data));
//   }, []);

//   useEffect(() => {
//     let total = 0;
//     form.services.forEach(id => {
//       const s = services.find(s => s.id === parseInt(id));
//       if (s) total += s.rate_per_day * form.days;
//     });
//     setTotal(total);
//   }, [form.services, form.days, services]);

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleCheckbox = id => {
//     setForm(prev => ({
//       ...prev,
//       services: prev.services.includes(id)
//         ? prev.services.filter(s => s !== id)
//         : [...prev.services, id],
//     }));
//   };

//   const handleSubmit = async e => {
//     e.preventDefault();
//     const res = await api.post('/quotes', form);
//     alert('Proposal submitted! Quote ID: ' + res.data.quote_id);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <h4>Create Proposal</h4>
//       <input type="text" name="client_name" placeholder="Brand Name" value={form.client_name} onChange={handleChange} className="form-control mb-2" required />
//       <input type="email" name="client_email" placeholder="Email" value={form.client_email} onChange={handleChange} className="form-control mb-2" required />
//       <input type="text" name="project_title" placeholder="Project Title" value={form.project_title} onChange={handleChange} className="form-control mb-2" />
//       <select name="category" className="form-control mb-2" onChange={handleChange} value={form.category}>
//         <option value="">Select Category</option>
//         <option value="Digital Bytes">Digital Bytes</option>
//         <option value="Piece to Camera">Piece to Camera</option>
//         <option value="Digital Video">Digital Video</option>
//         <option value="Behind the Scene">Behind the Scene</option>
//       </select>
//       <select name="location" className="form-control mb-2" onChange={handleChange} value={form.location}>
//         <option value="">Select Location</option>
//         <option value="Mumbai">Mumbai</option>
//         <option value="Outside Mumbai">Outside Mumbai</option>
//       </select>
//       <input type="date" name="shoot_dates" value={form.shoot_dates} onChange={handleChange} className="form-control mb-2" required />
//       <input type="number" name="days" value={form.days} min="1" max="100" onChange={handleChange} className="form-control mb-2" required />

//       <div className="row">
//         {services.map(s => (
//           <div key={s.id} className="col-md-4">
//             <label>
//               <input type="checkbox" checked={form.services.includes(s.id)} onChange={() => handleCheckbox(s.id)} /> {s.service_name} – ₹{s.rate_per_day}
//             </label>
//           </div>
//         ))}
//       </div>

//       <h5 className="mt-3">Total: ₹{total}</h5>
//       <button className="btn btn-success mt-2" type="submit">Generate Proposal</button>
//     </form>
//   );
// };

// export default Form;

import React, { useState, useEffect } from 'react';
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { fetchServices } from '../services/api';

function ProposalForm({ onSubmit, onAdminClick }) {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({
    client_name: '',
    your_email: '',
    project_title: '',
    category: '',
    location: '',
    services: [],
    days: 1,
    shoot_dates: ''
  });
  const [errors, setErrors] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadServices = async () => {
      try {
        const response = await fetchServices();
        setServices(response.data);
      } catch (error) {
        console.error('Error loading services:', error);
      }
    };
    loadServices();
  }, []);

  useEffect(() => {
    calculateTotal();
  }, [formData.services, formData.days]);

  const calculateTotal = () => {
    let calculatedTotal = 0;
    formData.services.forEach(serviceId => {
      const service = services.find(s => s.id === serviceId);
      if (service) {
        calculatedTotal += service.rate_per_day * formData.days;
      }
    });
    setTotal(calculatedTotal);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' 
        ? checked 
          ? [...prev.services, value]
          : prev.services.filter(id => id !== value)
        : value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Client name validation
    if (formData.client_name.length < 2 || formData.client_name.length > 10) {
      newErrors.client_name = 'Brand name must be 2–10 letters long';
    }
    
    // Email validation
    const emailPattern = /^[a-zA-Z0-9._]{3,}@tsbi\.in$/;
    if (!emailPattern.test(formData.your_email)) {
      newErrors.your_email = 'Only @tsbi.in emails allowed';
    }
    
    // Shoot date validation
    if (!formData.shoot_dates) {
      newErrors.shoot_dates = 'Shoot date is required';
    } else {
      const shootDate = new Date(formData.shoot_dates);
      const today = new Date();
      const fyStartYear = today.getMonth() >= 3 ? today.getFullYear() : today.getFullYear() - 1;
      const fyStart = new Date(fyStartYear, 3, 1); // April 1
      const fyEnd = new Date(fyStartYear + 1, 2, 31); // March 31
      
      if (shootDate < fyStart || shootDate > fyEnd) {
        newErrors.shoot_dates = `Date must be within FY ${fyStartYear}-${fyStartYear + 1}`;
      }
    }
    
    // Services validation
    if (formData.services.length === 0) {
      newErrors.services = 'Please select at least one service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <Container className="mt-5 mb-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <img 
          src="/assets/logo.png" 
          alt="Company Logo" 
          style={{ maxHeight: '80px', height: 'auto', width: 'auto', maxWidth: '170px' }} 
        />
      </div>
      
      <div className="text-center mt-4">
        <Button variant="outline-secondary" onClick={onAdminClick}>
          Admin Login
        </Button>
      </div>
      
      <Card className="shadow p-4 mt-5">
        <h2 className="mb-4 text-center">Create Studio Proposal</h2>
        <Form onSubmit={handleSubmit}>
          {/* Client Info */}
          <Form.Group className="mb-3">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control
              type="text"
              name="client_name"
              value={formData.client_name}
              onChange={handleChange}
              isInvalid={!!errors.client_name}
              placeholder="e.g. Zee TV, Colors"
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.client_name}
            </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Your Email</Form.Label>
            <Form.Control
              type="email"
              name="your_email"
              value={formData.your_email}
              onChange={handleChange}
              isInvalid={!!errors.your_email}
              placeholder="e.g. user@tsbi.in"
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.your_email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Project Title</Form.Label>
            <Form.Control
              type="text"
              name="project_title"
              value={formData.project_title}
              onChange={handleChange}
              placeholder="e.g. Product Launch Promo"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select 
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a option</option>
              <option value="Digital Bytes">Digital Bytes</option>
              <option value="Piece to Camera">Piece to Camera</option>
              <option value="Digital Video">Digital Video</option>
              <option value="Behind the Scene">Behind the Scene</option>
            </Form.Select>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Select 
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            >
              <option value="" disabled>Select a location</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Outside Mumbai">Outside Mumbai</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Select Required Services</Form.Label>
            <div className="pl-2">
              {services.map(service => (
                <Form.Check
                  key={service.id}
                  type="checkbox"
                  id={`service-${service.id}`}
                  label={`${service.service_name} (₹${service.rate_per_day}/day)`}
                  value={service.id}
                  checked={formData.services.includes(service.id)}
                  onChange={handleChange}
                  name="services"
                />
              ))}
            </div>
            {errors.services && (
              <div className="text-danger small">{errors.services}</div>
            )}
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Number of Days</Form.Label>
            <Form.Control
              type="number"
              name="days"
              value={formData.days}
              onChange={handleChange}
              min="1"
              max="100"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Shoot Dates</Form.Label>
            <Form.Control
              type="date"
              name="shoot_dates"
              value={formData.shoot_dates}
              onChange={handleChange}
              isInvalid={!!errors.shoot_dates}
              min={new Date().toISOString().split('T')[0]}
              required
            />
            <Form.Control.Feedback type="invalid">
              {errors.shoot_dates}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3">
            <h5>Total Estimate: <span id="totalDisplay">₹{total.toLocaleString()}</span></h5>
          </Form.Group>

          <Button variant="success" type="submit" className="btn-block">
            Generate Proposal
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default ProposalForm;