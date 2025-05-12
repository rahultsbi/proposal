import React, { useState } from 'react';
import { Form, Button, Card, Container } from 'react-bootstrap';
import { adminLogin } from '../../services/api';
import { login } from '../../services/auth';
import { useNavigate } from 'react-router-dom';

function AdminLogin({ onLoginSuccess }) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const history = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminLogin(credentials);
      if (response.data.success) {
        login(response.data.token);
        onLoginSuccess();
      }
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <Container className="mt-5">
      <div className="text-center mt-4">
        <Button 
          variant="outline-secondary" 
          onClick={() => navigate('/')}
        >
          Back
        </Button>
      </div>
      
      <Card className="shadow p-4 mt-5" style={{ maxWidth: '500px', margin: '0 auto' }}>
        <h3 className="mb-4 text-center">Admin Login</h3>
        {error && <div className="alert alert-danger">{error}</div>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              name="username"
              value={credentials.username}
              onChange={(e) => setCredentials({...credentials, username: e.target.value})}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={credentials.password}
              onChange={(e) => setCredentials({...credentials, password: e.target.value})}
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" className="w-100">
            Login
          </Button>
        </Form>
      </Card>
    </Container>
  );
}

export default AdminLogin;