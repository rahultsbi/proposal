import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

function HomePage() {
  return (
    <Container className="text-center" style={{ marginTop: '100px', maxWidth: '500px' }}>
      <Card className="p-4" style={{ 
        borderRadius: '12px',
        boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h3 className="mb-4">Welcome to TSBI Studios</h3>
        <Link to="/proposal" className="btn btn-success btn-block mb-2">
          Create a Studio Proposal
        </Link>
        <Link to="/admin/login" className="btn btn-outline-primary btn-block">
          Admin Dashboard
        </Link>
      </Card>
    </Container>
  );
}

export default HomePage;