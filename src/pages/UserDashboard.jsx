import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, Table, Badge, Nav, Alert, Spinner } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFileAlt, 
  faPlus, 
  faUser, 
  faDownload, 
  faEye,
  faSignOutAlt,
  faHistory,
  faHome,
  faCog,
  faEdit,
  faKey
} from '@fortawesome/free-solid-svg-icons';
import { useUserAuth } from '../contexts/UserAuthContext';
import { 
  getUserProfile, 
  getUserProposals, 
  downloadProposal,
  updateUserProfile,
  changeUserPassword 
} from '../services/api';

function UserDashboard() {
  const { user, logout } = useUserAuth();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [profile, setProfile] = useState(null);
  const [proposals, setProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchDashboardData();
    console.log(fetchDashboardData());
    

  }, []);

  const fetchDashboardData = async () => {
    try {
      setIsLoading(true);
      setError('');
      
      // Fetch user profile
      const profileResponse = await getUserProfile();
      if (profileResponse.data.success) {
        setProfile(profileResponse.data.user);
      }
      
      // Fetch user proposals
      const proposalsResponse = await getUserProposals('', 1);
      if (proposalsResponse.data.success) {
        setProposals(proposalsResponse.data.data.proposals || []);
        console.log('Fetched proposals:', proposalsResponse.data.data.proposals);
        
      }
      
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
      if (error.response?.status === 401) {
        // Token expired or invalid
        logout();
        navigate('/login');
      } else {
        setError('Failed to load dashboard data. Please try again.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  // const handleDownload = async (quoteId) => {
  //   try {
  //     const response = await downloadProposal(quoteId);
  //     const blob = new Blob([response.data], { type: 'application/pdf' });
  //     const url = window.URL.createObjectURL(blob);
  //     const link = document.createElement('a');
  //     link.href = url;
  //     link.download = `proposal-${quoteId}.pdf`;
  //     document.body.appendChild(link);
  //     link.click();
  //     document.body.removeChild(link);
  //     window.URL.revokeObjectURL(url);
  //   } catch (error) {
  //     console.error('Error downloading proposal:', error);
  //     setError('Failed to download proposal. Please try again.');
  //   }
  // };
// const handleDownload = async (quoteId) => {
//   try {
//     console.log('Attempting to download proposal:', quoteId);
//     setError(''); // Clear any existing errors
    
//     // Show loading state
//     setSuccess('Generating PDF, please wait...');
    
//     const response = await downloadProposal(quoteId);
    
//     console.log('Download response:', response);
//     console.log('Response headers:', response.headers);
//     console.log('Response data type:', typeof response.data);
//     console.log('Response data size:', response.data?.size);
    
//     // Check if response is a blob and has content
//     if (response.data instanceof Blob && response.data.size > 0) {
      
//       // Check the content type
//       const contentType = response.headers['content-type'] || response.data.type;
//       console.log('Content type:', contentType);
      
//       if (contentType && contentType.includes('application/pdf')) {
//         // Valid PDF blob
//         const blob = new Blob([response.data], { type: 'application/pdf' });
//         const url = window.URL.createObjectURL(blob);
//         const link = document.createElement('a');
//         link.href = url;
//         link.download = `proposal-${quoteId}.pdf`;
//         link.style.display = 'none';
        
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         window.URL.revokeObjectURL(url);
        
//         setSuccess('Proposal downloaded successfully!');
//         setTimeout(() => setSuccess(''), 3000);
        
//       } else if (contentType && contentType.includes('application/json')) {
//         // Server sent JSON error as blob
//         const text = await response.data.text();
//         try {
//           const errorData = JSON.parse(text);
//           setError(errorData.error || 'Server returned an error');
//         } catch (parseError) {
//           setError('Invalid response from server');
//         }
//       } else {
//         // Unknown content type
//         setError('Invalid file type received from server');
//       }
      
//     } else if (response.data && typeof response.data === 'object') {
//       // Direct JSON response (not blob)
//       if (response.data.error) {
//         setError(response.data.error);
//       } else {
//         setError('Invalid response format from server');
//       }
      
//     } else {
//       setError('Empty or invalid response from server');
//     }
    
//   } catch (error) {
//     console.error('Error downloading proposal:', error);
    
//     // Handle different error types
//     if (error.response) {
//       console.log('Error response:', error.response);
//       console.log('Error response data:', error.response.data);
      
//       // Check if error response has JSON data
//       if (error.response.data && typeof error.response.data === 'object') {
//         setError(error.response.data.error || 'Server error occurred');
//       } else if (error.response.status === 404) {
//         setError('Proposal not found');
//       } else if (error.response.status === 403) {
//         setError('Access denied - you can only download your own proposals');
//       } else if (error.response.status === 500) {
//         setError('Server error while generating PDF');
//       } else {
//         setError(`HTTP ${error.response.status}: ${error.response.statusText}`);
//       }
      
//     } else if (error.request) {
//       setError('Network error - please check your connection');
//     } else {
//       setError(error.message || 'Unknown error occurred');
//     }
    
//     // Clear success message on error
//     setSuccess('');
//   }
// };
// Replace your handleDownload function with this simple version:

// const handleDownload = (quoteId) => {
//   try {
//     console.log('Downloading proposal:', quoteId);
//     setError('');
//     setSuccess('Starting download...');
    
//     // Since you removed auth from the route, we can use direct window.open
//     const API_URL = 'http://localhost:5000/api'; // Your API base URL
//     const downloadUrl = `${API_URL}/proposals/${quoteId}/download`;
    
//     // Open in new tab/window - browser will handle as download
//     window.open(downloadUrl, '_blank');
    
//     setSuccess('Download started!');
//     setTimeout(() => setSuccess(''), 2000);
    
//   } catch (error) {
//     console.error('Error initiating download:', error);
//     setError('Failed to start download. Please try again.');
//     setSuccess('');
//   }
// };
const handleDownload = (quoteId) => {
  try {
    console.log('Downloading proposal:', quoteId);
    setError('');
    setSuccess('Starting download...');
    
    const API_URL = 'https://tsbi-proposal-backend.onrender.com/api';
    const downloadUrl = `${API_URL}/proposals/${quoteId}/download`;
    
    // Create a hidden anchor element and trigger click
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `proposal-${quoteId}.pdf`; // Force download with filename
    link.style.display = 'none'; // Hide the link
    link.target = '_self'; // Don't open new window
    
    // Add to DOM, click, then remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setSuccess('Download started!');
    setTimeout(() => setSuccess(''), 2000);
    
  } catch (error) {
    console.error('Error initiating download:', error);
    setError('Failed to start download. Please try again.');
    setSuccess('');
  }
};
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const getStatusBadge = (status) => {
    const variants = {
      'draft': 'secondary',
      'sent': 'primary',
      'viewed': 'info',
      'accepted': 'success',
      'rejected': 'danger'
    };
    return variants[status] || 'secondary';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const renderDashboardContent = () => {
    if (isLoading) {
      return (
        <div className="text-center py-5">
          <Spinner animation="border" variant="primary" />
          <div className="mt-2">Loading dashboard...</div>
        </div>
      );
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <>
            {/* Stats Cards */}
            <Row className="mb-4">
              <Col md={3} className="mb-3">
                <Card className="text-center h-100 border-0 shadow-sm">
                  <Card.Body>
                    <FontAwesomeIcon icon={faFileAlt} size="2x" className="text-primary mb-2" />
                    <h4 className="mb-1">{proposals.length}</h4>
                    <p className="text-muted mb-0">Total Proposals</p>
                  </Card.Body>
                </Card>
              </Col>
              {/* <Col md={3} className="mb-3">
                <Card className="text-center h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="text-success mb-2">
                      <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </div>
                    <h4 className="mb-1">
                      {proposals.filter(p => p.status === 'accepted').length}
                    </h4>
                    <p className="text-muted mb-0">Accepted</p>
                  </Card.Body>
                </Card>
              </Col> */}
              {/* <Col md={3} className="mb-3">
                <Card className="text-center h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="text-warning mb-2">
                      <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </div>
                    <h4 className="mb-1">
                      {proposals.filter(p => p.status === 'draft').length}
                    </h4>
                    <p className="text-muted mb-0">Drafts</p>
                  </Card.Body>
                </Card>
              </Col> */}
              {/* <Col md={3} className="mb-3">
                <Card className="text-center h-100 border-0 shadow-sm">
                  <Card.Body>
                    <div className="text-info mb-2">
                      <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </div>
                    <h4 className="mb-1">
                      {proposals.filter(p => p.status === 'sent').length}
                    </h4>
                    <p className="text-muted mb-0">Sent</p>
                  </Card.Body>
                </Card>
              </Col> */}
            </Row>

            {/* Quick Actions */}
            <Row className="mb-4">
              <Col>
                <Card className="border-0 shadow-sm">
                  <Card.Body>
                    <h5 className="card-title mb-3">Quick Actions</h5>
                    <div className="d-flex gap-2 flex-wrap">
                      <Button 
                        variant="primary" 
                        size="lg"
                        onClick={() => navigate('/proposal')}
                      >
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        Create New Proposal
                      </Button>
                      <Button 
                        variant="outline-primary"
                        onClick={() => setActiveTab('history')}
                      >
                        <FontAwesomeIcon icon={faHistory} className="me-2" />
                        View All Proposals
                      </Button>
                      <Button 
                        variant="outline-secondary"
                        onClick={() => setActiveTab('profile')}
                      >
                        <FontAwesomeIcon icon={faUser} className="me-2" />
                        Edit Profile
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* Recent Proposals */}
            <Row>
              <Col>
                <Card className="border-0 shadow-sm">
                  <Card.Header className="bg-white d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Recent Proposals</h5>
                    <Button 
                      variant="outline-primary" 
                      size="sm"
                      onClick={() => setActiveTab('history')}
                    >
                      View All
                    </Button>
                  </Card.Header>
                  <Card.Body className="p-0">
                    {proposals.length > 0 ? (
                      <Table responsive hover className="mb-0">
                        <thead className="table-light">
                          <tr>
                            <th>Quote ID</th>
                            <th>Client</th>
                            <th>Total</th>
                            {/* <th>Status</th> */}
                            <th>Created</th>
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {proposals.slice(0, 3).map((proposal) => (
                            <tr key={proposal.id}>
                              <td>
                                <code className="text-primary">{proposal.quote_id}</code>
                              </td>
                              <td>
                                <div>
                                  <div className="fw-bold">{proposal.client_name}</div>
                                  <small className="text-muted">{proposal.project_title || 'No project title'}</small>
                                </div>
                              </td>
                              <td>
                                <strong>₹{proposal.total?.toLocaleString()}</strong>
                              </td>
                              {/* <td>
                                <Badge bg={getStatusBadge(proposal.status)}>
                                  {proposal.status?.toUpperCase()}
                                </Badge>
                              </td> */}
                              <td>{formatDate(proposal.created_at)}</td>
                              <td>
                                <div className="d-flex gap-1">
                                  {/* <Button
                                    variant="outline-primary"
                                    size="sm"
                                    title="View"
                                    onClick={() => navigate(`/proposal/${proposal.id}`)}
                                  >
                                    <FontAwesomeIcon icon={faEye} />
                                  </Button> */}
                                  <Button
                                    variant="outline-success"
                                    size="sm"
                                    title="Download"
                                    onClick={() => handleDownload(proposal.quote_id)}
                                  >
                                    <FontAwesomeIcon icon={faDownload} />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </Table>
                    ) : (
                      <div className="text-center py-5">
                        <FontAwesomeIcon icon={faFileAlt} size="3x" className="text-muted mb-3" />
                        <h5 className="text-muted">No proposals yet</h5>
                        <p className="text-muted mb-3">Create your first proposal to get started</p>
                        <Button 
                          variant="primary"
                          onClick={() => navigate('/proposal')}
                        >
                          <FontAwesomeIcon icon={faPlus} className="me-2" />
                          Create Proposal
                        </Button>
                      </div>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </>
        );

      case 'history':
        return (
          <Card className="border-0 shadow-sm">
            <Card.Header className="bg-white d-flex justify-content-between align-items-center">
              <h5 className="mb-0">All Proposals</h5>
              <Button 
                variant="outline-primary" 
                size="sm"
                onClick={fetchDashboardData}
              >
                Refresh
              </Button>
            </Card.Header>
            <Card.Body>
              {proposals.length > 0 ? (
                <Table responsive hover>
                  <thead className="table-light">
                    <tr>
                      <th>Quote ID</th>
                      <th>Client</th>
                      <th>Project</th>
                      <th>Total</th>
                      <th>Status</th>
                      <th>Created</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {proposals.map((proposal) => (
                      <tr key={proposal.id}>
                        <td>
                          <code className="text-primary">{proposal.quote_id}</code>
                        </td>
                        <td>{proposal.client_name}</td>
                        <td>{proposal.project_title || 'N/A'}</td>
                        <td>
                          <strong>₹{proposal.total?.toLocaleString()}</strong>
                        </td>
                        <td>
                          <Badge bg={getStatusBadge(proposal.status)}>
                            {proposal.status?.toUpperCase()}
                          </Badge>
                        </td>
                        <td>{formatDate(proposal.created_at)}</td>
                        <td>
                          <div className="d-flex gap-1">
                            <Button 
                              variant="outline-primary" 
                              size="sm" 
                              title="View"
                              onClick={() => navigate(`/proposal/${proposal.id}`)}
                            >
                              <FontAwesomeIcon icon={faEye} />
                            </Button>
                            <Button
                              variant="outline-success"
                              size="sm"
                              title="Download"
                              onClick={() => handleDownload(proposal.quote_id)}
                            >
                              <FontAwesomeIcon icon={faDownload} />
                            </Button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              ) : (
                <div className="text-center py-5">
                  <FontAwesomeIcon icon={faFileAlt} size="3x" className="text-muted mb-3" />
                  <h5 className="text-muted">No proposals found</h5>
                  <Button 
                    variant="primary"
                    onClick={() => navigate('/proposal')}
                  >
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Create Your First Proposal
                  </Button>
                </div>
              )}
            </Card.Body>
          </Card>
        );

      case 'profile':
        return (
          <UserProfile 
            profile={profile} 
            onUpdate={fetchDashboardData}
            onSuccess={setSuccess}
            onError={setError}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="user-dashboard bg-light min-vh-100">
      <Container fluid className="py-4">
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h2 className="mb-1">Welcome back, {profile?.name || user?.name || 'User'}!</h2>
                <p className="text-muted mb-0">Manage your proposals and profile</p>
              </div>
              <div className="d-flex gap-2">
                <Link to="/" className="btn btn-outline-secondary">
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Home
                </Link>
                <Button 
                  variant="outline-danger" 
                  onClick={handleLogout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="me-2" />
                  Logout
                </Button>
              </div>
            </div>
          </Col>
        </Row>

        {/* Success/Error Messages */}
        {error && (
          <Alert variant="danger" dismissible onClose={() => setError('')}>
            {error}
          </Alert>
        )}

        {success && (
          <Alert variant="success" dismissible onClose={() => setSuccess('')}>
            {success}
          </Alert>
        )}

        {/* Navigation Tabs */}
        <Row className="mb-4">
          <Col>
            <Nav variant="pills" className="bg-white p-2 rounded shadow-sm">
              <Nav.Item>
                <Nav.Link 
                  active={activeTab === 'dashboard'}
                  onClick={() => setActiveTab('dashboard')}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faHome} className="me-2" />
                  Dashboard
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  active={activeTab === 'history'}
                  onClick={() => setActiveTab('history')}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faHistory} className="me-2" />
                  Proposal History
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link 
                  active={activeTab === 'profile'}
                  onClick={() => setActiveTab('profile')}
                  className="d-flex align-items-center"
                >
                  <FontAwesomeIcon icon={faUser} className="me-2" />
                  Profile
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>

        {/* Content */}
        {renderDashboardContent()}
      </Container>
    </div>
  );
}

// User Profile Component
function UserProfile({ profile, onUpdate, onSuccess, onError }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPassword, setIsChangingPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: profile?.name || '',
    email: profile?.email || '',
    phone: profile?.phone || ''
  });
  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData({
        name: profile.name || '',
        email: profile.email || '',
        phone: profile.phone || ''
      });
    }
  }, [profile]);

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await updateUserProfile({
        name: formData.name,
        phone: formData.phone
      });

      if (response.data.success) {
        onSuccess('Profile updated successfully!');
        setIsEditing(false);
        onUpdate();
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      onError('Failed to update profile. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      onError('New passwords do not match');
      return;
    }

    if (passwordData.newPassword.length < 6) {
      onError('New password must be at least 6 characters long');
      return;
    }

    setIsLoading(true);

    try {
      const response = await changeUserPassword({
        currentPassword: passwordData.currentPassword,
        newPassword: passwordData.newPassword
      });

      if (response.data.success) {
        onSuccess('Password changed successfully!');
        setIsChangingPassword(false);
        setPasswordData({
          currentPassword: '',
          newPassword: '',
          confirmPassword: ''
        });
      }
    } catch (error) {
      console.error('Error changing password:', error);
      onError(error.response?.data?.error || 'Failed to change password. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Row>
      <Col md={8}>
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white d-flex justify-content-between align-items-center">
            <h5 className="mb-0">Profile Information</h5>
            <Button 
              variant="outline-primary" 
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              disabled={isLoading}
            >
              <FontAwesomeIcon icon={faEdit} className="me-2" />
              {isEditing ? 'Cancel' : 'Edit Profile'}
            </Button>
          </Card.Header>
          <Card.Body>
            <form onSubmit={handleProfileSubmit}>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    {isEditing ? (
                      <input
                        type="text"
                        className="form-control"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    ) : (
                      <p className="form-control-plaintext">{formData.name}</p>
                    )}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Email Address</label>
                    <p className="form-control-plaintext">{formData.email}</p>
                    <small className="text-muted">Email cannot be changed</small>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    {isEditing ? (
                      <input
                        type="tel"
                        className="form-control"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />
                    ) : (
                      <p className="form-control-plaintext">{formData.phone || 'Not provided'}</p>
                    )}
                  </div>
                </Col>
                <Col md={6}>
                  <div className="mb-3">
                    <label className="form-label">Member Since</label>
                    <p className="form-control-plaintext">
                      {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      }) : 'N/A'}
                    </p>
                  </div>
                </Col>
              </Row>
              
              {isEditing && (
                <div className="d-flex gap-2">
                  <Button type="submit" disabled={isLoading}>
                    {isLoading ? 'Saving...' : 'Save Changes'}
                  </Button>
                  <Button 
                    variant="secondary" 
                    type="button"
                    onClick={() => setIsEditing(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              )}
            </form>
          </Card.Body>
        </Card>
      </Col>
      
      <Col md={4}>
        <Card className="border-0 shadow-sm">
          <Card.Header className="bg-white">
            <h6 className="mb-0">Account Actions</h6>
          </Card.Header>
          <Card.Body>
            <div className="d-grid gap-2">
              <Button 
                variant="outline-warning"
                onClick={() => setIsChangingPassword(!isChangingPassword)}
              >
                <FontAwesomeIcon icon={faKey} className="me-2" />
                Change Password
              </Button>
              <Button variant="outline-info">
                <FontAwesomeIcon icon={faCog} className="me-2" />
                Account Settings
              </Button>
            </div>
          </Card.Body>
        </Card>

        {/* Change Password Card */}
        {isChangingPassword && (
          <Card className="border-0 shadow-sm mt-3">
            <Card.Header className="bg-white">
              <h6 className="mb-0">Change Password</h6>
            </Card.Header>
            <Card.Body>
              <form onSubmit={handlePasswordSubmit}>
                <div className="mb-3">
                  <label className="form-label">Current Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={passwordData.currentPassword}
                    onChange={(e) => setPasswordData({...passwordData, currentPassword: e.target.value})}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={passwordData.newPassword}
                    onChange={(e) => setPasswordData({...passwordData, newPassword: e.target.value})}
                    required
                    minLength={6}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Confirm New Password</label>
                  <input
                    type="password"
                    className="form-control"
                    value={passwordData.confirmPassword}
                    onChange={(e) => setPasswordData({...passwordData, confirmPassword: e.target.value})}
                    required
                  />
                </div>
                <div className="d-grid gap-2">
                  <Button type="submit" size="sm" disabled={isLoading}>
                    {isLoading ? 'Changing...' : 'Change Password'}
                  </Button>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => setIsChangingPassword(false)}
                    disabled={isLoading}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        )}
      </Col>
    </Row>
  );
}

export default UserDashboard;