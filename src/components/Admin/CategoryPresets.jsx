import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Form, 
  Button, 
  Alert, 
  Card, 
  Row, 
  Col, 
  Badge,
  Spinner,
  Modal,
  Accordion,
  ListGroup,
  InputGroup,
  OverlayTrigger,
  Tooltip,
  Pagination
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPencilAlt, 
  faTrash, 
  faCheck, 
  faTimes, 
  faInfoCircle,
  faFolder,
  faDownload,
  faEye,
  faList,
  faCopy,
  faChevronDown,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

// Import your API functions
import { 
  fetchServices, 
  fetchCategories, 
  createCategory, 
  updateCategory, 
  deleteCategory,
  duplicateCategory 
} from '../../services/api';
import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import Logo from '../../assets/Logo.png';

function CategoryPresets() {
  const [categories, setCategories] = useState([]);
  const [services, setServices] = useState([]);
  const [newCategory, setNewCategory] = useState({
    name: '',
    description: '',
    selectedServices: []
  });
  const [editingCategory, setEditingCategory] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [selectedCategoryForServices, setSelectedCategoryForServices] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [serviceSearchTerm, setServiceSearchTerm] = useState('');
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  
  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5);

  // Service categories for organization
  const SERVICE_CATEGORIES = {
    'pre-production': { name: 'Pre-Production' },
    'production': { name: 'Production' },
    'post-production': { name: 'Post Production' }
  };

  useEffect(() => {
    loadServices();
    loadCategories();
  }, []);

  // Load services from API
  const loadServices = async () => {
    try {
      setIsLoading(true);
      const response = await fetchServices();
      setServices(response.data);
    } catch (error) {
      console.error('Error loading services:', error);
      setError('Failed to load services');
    } finally {
      setIsLoading(false);
    }
  };

  // Load categories from API
  const loadCategories = async () => {
    try {
      setIsLoading(true);
      const response = await fetchCategories();
      console.log('Loaded categories:', response.data || response);
      setCategories(response.data || response);
    } catch (error) {
      console.error('Error loading categories:', error);
      setError('Failed to load categories');
    } finally {
      setIsLoading(false);
    }
  };
  
//         },
//         {
//           id: 2,
//           name: 'Premium Commercial Package',
//           description: 'Complete package for commercial video production',
//           selectedServices: [1, 2, 3, 4, 5, 6],
//           createdAt: new Date().toISOString()
//         }
//       ];
//       setCategories(mockCategories);
//     } catch (error) {
//       console.error('Error loading categories:', error);
//       setError('Failed to load categories');
//     } finally {
//       setIsLoading(false);
//     }
//   };

  // Create new category
  const handleCreateCategory = async (e) => {
    e.preventDefault();
    try {
      if (!newCategory.name.trim()) {
        setError('Category name cannot be empty');
        return;
      }
      
      if (newCategory.selectedServices.length === 0) {
        setError('Please select at least one service for this category');
        return;
      }

      setIsLoading(true);
      
      // Call real API
      const categoryData = {
        name: newCategory.name.trim(),
        description: newCategory.description.trim(),
        selectedServices: [...newCategory.selectedServices]
      };
      
      console.log('Creating category:', categoryData);
      
      await createCategory(categoryData);
      
      // Reload categories from database
      await loadCategories();
      
      setNewCategory({ name: '', description: '', selectedServices: [] });
      setSuccess('Category created successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      console.error('Error creating category:', error);
      setError(error.response?.data?.error || 'Failed to create category');
    } finally {
      setIsLoading(false);
    }
  };

  // Update category
  const handleUpdateCategory = async (categoryId, updatedData) => {
    try {
      if (!updatedData.name.trim()) {
        setError('Category name cannot be empty');
        return;
      }

      setIsLoading(true);
      
      // Call real API
      const categoryData = {
        name: updatedData.name.trim(),
        description: updatedData.description.trim(),
        selectedServices: [...updatedData.selectedServices]
      };
      
      console.log('Updating category:', categoryId, categoryData);
      
      await updateCategory(categoryId, categoryData);
      
      // Reload categories from database
      await loadCategories();
      
      setEditingCategory(null);
      setSuccess('Category updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      console.error('Error updating category:', error);
      setError(error.response?.data?.error || 'Failed to update category');
    } finally {
      setIsLoading(false);
    }
  };

  // Delete category
  const handleDeleteCategory = async (categoryId, categoryName) => {
    if (window.confirm(`Are you sure you want to delete "${categoryName}"? This action cannot be undone.`)) {
      try {
        setIsLoading(true);
        
        // Call real API
        console.log('Deleting category:', categoryId);
        
        await deleteCategory(categoryId);
        
        // Reload categories from database
        await loadCategories();
        
        setSuccess('Category deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
        
      } catch (error) {
        console.error('Error deleting category:', error);
        setError(error.response?.data?.error || 'Failed to delete category');
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Open service selection modal
  const openServiceModal = (category = null) => {
    if (category) {
      setSelectedCategoryForServices(category);
      setNewCategory({
        name: category.name,
        description: category.description,
        selectedServices: [...category.selectedServices]
      });
    } else {
      setSelectedCategoryForServices(null);
    }
    setShowServiceModal(true);
  };

  // Handle service selection
  const toggleServiceSelection = (serviceId) => {
    setNewCategory(prev => ({
      ...prev,
      selectedServices: prev.selectedServices.includes(serviceId)
        ? prev.selectedServices.filter(id => id !== serviceId)
        : [...prev.selectedServices, serviceId]
    }));
  };

  // Get services for a category
  const getCategoryServices = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    if (!category) return [];
    
    return services.filter(service => category.selectedServices.includes(service.id));
  };

  // Calculate total cost for a category
  const calculateCategoryTotal = (categoryId) => {
    const categoryServices = getCategoryServices(categoryId);
    return categoryServices.reduce((total, service) => total + (service.rate_per_day || 0), 0);
  };

  // Filter categories based on search
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Filter services for modal
  const filteredServices = services.filter(service =>
    service.service_name.toLowerCase().includes(serviceSearchTerm.toLowerCase())
  );

  // Group services by category for better organization in modal
  const groupedServices = filteredServices.reduce((groups, service) => {
    const category = service.category || 'other';
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(service);
    return groups;
  }, {});

  // Pagination logic
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);
  const totalPages = Math.ceil(filteredCategories.length / categoriesPerPage);

  // Toggle category expansion
  const toggleCategoryExpansion = (categoryId) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  // Download PDF
  const downloadCategoriesPDF = () => {
    setIsGeneratingPDF(true);
    
    try {
      const doc = new jsPDF();
      
      // Add logo
      const imgData = Logo;
      const pageWidth = doc.internal.pageSize.getWidth();
      const logoWidth = 50;
      const logoHeight = 50;
      const logoX = (pageWidth - logoWidth) / 2;
      doc.addImage(imgData, 'PNG', logoX, 10, logoWidth, logoHeight);
      
      // Add title
      doc.setFontSize(20);
      doc.setTextColor(40, 40, 40);
      doc.text('Category Presets Report', 14, 75);
      
      // Add current date
      const today = new Date();
      const dateStr = today.toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
      doc.setFontSize(10);
      doc.setTextColor(100, 100, 100);
      doc.text(`Generated on: ${dateStr}`, 14, 85);
      
      let yPosition = 100;
      
      filteredCategories.forEach((category, index) => {
        // Check if we need a new page
        if (yPosition > 250) {
          doc.addPage();
          yPosition = 20;
        }
        
        // Category header
        doc.setFontSize(14);
        doc.setTextColor(40, 40, 40);
        doc.text(`${index + 1}. ${category.name}`, 14, yPosition);
        yPosition += 10;
        
        // Description
        if (category.description) {
          doc.setFontSize(10);
          doc.setTextColor(100, 100, 100);
          doc.text(`Description: ${category.description}`, 20, yPosition);
          yPosition += 8;
        }
        
        // Services table
        const categoryServices = getCategoryServices(category.id);
        const tableData = categoryServices.map(service => [
          service.service_name,
          `₹${service.rate_per_day}`
        ]);
        
        // Add total row
        tableData.push(['Total', `₹${calculateCategoryTotal(category.id)}`]);
        
        autoTable(doc, {
          startY: yPosition,
          head: [['Service Name', 'Rate per Day']],
          body: tableData,
          theme: 'grid',
          styles: { fontSize: 8, cellPadding: 2 },
          headStyles: { fillColor: [66, 133, 244], textColor: 255 },
          alternateRowStyles: { fillColor: [240, 240, 240] },
          margin: { left: 20, right: 14 },
          tableWidth: 'auto'
        });
        
        yPosition = doc.lastAutoTable.finalY + 15;
      });
      
      // Add summary
      doc.setFontSize(12);
      doc.setTextColor(40, 40, 40);
      doc.text(`Total Categories: ${filteredCategories.length}`, 14, yPosition);
      
      doc.save('category-presets.pdf');
      
      setSuccess('Category presets report downloaded successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      console.error('Error generating PDF:', error);
      setError('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Duplicate category
  const duplicateCategory = async (category) => {
    try {
      setIsLoading(true);
      
      const newName = `${category.name} (Copy)`;
      
      // Call real API
      console.log('Duplicating category:', category.id, newName);
      
      await duplicateCategory(category.id, { newName });
      
      // Reload categories from database
      await loadCategories();
      
      setSuccess('Category duplicated successfully!');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      console.error('Error duplicating category:', error);
      setError(error.response?.data?.error || 'Failed to duplicate category');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="category-presets-component">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Category & Preset Management</h4>
          <p className="text-muted mb-0">Create and manage service categories with preset service combinations</p>
        </div>
        <Badge bg="info" className="py-2 px-3">
          <FontAwesomeIcon icon={faFolder} className="me-1" />
          {categories.length} Categories
        </Badge>
      </div>

      {error && (
        <Alert variant="danger" dismissible onClose={() => setError('')}>
          <FontAwesomeIcon icon={faTimes} className="me-2" />
          {error}
        </Alert>
      )}

      {success && (
        <Alert variant="success" dismissible onClose={() => setSuccess('')}>
          <FontAwesomeIcon icon={faCheck} className="me-2" />
          {success}
        </Alert>
      )}

      {/* Create New Category Form */}
      <Card className="mb-4 border shadow-sm">
        <Card.Body>
          <Card.Title className="mb-3">
            <FontAwesomeIcon icon={faPlus} className="me-2 text-success" />
            Create New Category
          </Card.Title>
          <Form onSubmit={handleCreateCategory}>
            <Row>
              <Col md={4}>
                <Form.Group className="mb-3">
                  <Form.Label>Category Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCategory.name}
                    onChange={(e) => setNewCategory({...newCategory, name: e.target.value})}
                    placeholder="Enter category name..."
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={5}>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text"
                    value={newCategory.description}
                    onChange={(e) => setNewCategory({...newCategory, description: e.target.value})}
                    placeholder="Brief description of this category..."
                  />
                </Form.Group>
              </Col>
              <Col md={2}>
                <Form.Group className="mb-3">
                  <Form.Label>Selected Services</Form.Label>
                  <Button 
                    variant="outline-primary" 
                    className="w-100"
                    onClick={() => openServiceModal()}
                  >
                    <FontAwesomeIcon icon={faList} className="me-2" />
                    {newCategory.selectedServices.length} Selected
                  </Button>
                </Form.Group>
              </Col>
              <Col md={1} className="d-flex align-items-end">
                <Button 
                  type="submit" 
                  variant="success" 
                  className="w-100"
                  disabled={isLoading || newCategory.selectedServices.length === 0}
                  style={{ marginBottom: '1rem' }}
                >
                  {isLoading ? (
                    <Spinner size="sm" />
                  ) : (
                    <FontAwesomeIcon icon={faPlus} />
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>

      {/* Categories List */}
      <Card className="shadow-sm border-0">
        <Card.Header className="bg-light">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0">
              Category Presets
              <Badge bg="info" className="ms-2">
                {filteredCategories.length} categories
              </Badge>
            </h5>
            <div className="d-flex align-items-center gap-2">
              <Form.Control
                type="text"
                placeholder="Search categories..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ maxWidth: '200px' }}
              />
              <Button 
                variant="outline-primary" 
                onClick={downloadCategoriesPDF}
                disabled={isGeneratingPDF}
                title="Download PDF Report"
              >
                {isGeneratingPDF ? (
                  <Spinner size="sm" />
                ) : (
                  <FontAwesomeIcon icon={faDownload} />
                )}
              </Button>
            </div>
          </div>
        </Card.Header>

        <Card.Body className="p-0">
          {isLoading && !categories.length ? (
            <div className="text-center py-5">
              <Spinner animation="border" variant="primary" />
              <p className="mt-3">Loading categories...</p>
            </div>
          ) : currentCategories.length > 0 ? (
            <Accordion>
              {currentCategories.map((category, index) => (
                <Accordion.Item key={category.id} eventKey={category.id.toString()}>
                  <Accordion.Header>
                    <div className="d-flex justify-content-between align-items-center w-100 me-3">
                      <div>
                        <h6 className="mb-1">{category.name}</h6>
                        {category.description && (
                          <small className="text-muted">{category.description}</small>
                        )}
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <Badge bg="primary">{getCategoryServices(category.id).length} services</Badge>
                        <Badge bg="success">₹{calculateCategoryTotal(category.id)}</Badge>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <Row>
                      <Col md={8}>
                        <h6>Services in this category:</h6>
                        <ListGroup variant="flush">
                          {getCategoryServices(category.id).map(service => (
                            <ListGroup.Item key={service.id} className="d-flex justify-content-between align-items-center py-2">
                              <div>
                                <strong>{service.service_name}</strong>
                                <div className="small text-muted">
                                  {SERVICE_CATEGORIES[service.category]?.name || service.category}
                                </div>
                              </div>
                              <Badge bg="outline-primary">₹{service.rate_per_day}</Badge>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                        <div className="mt-3 p-2 bg-light rounded">
                          <strong>Total Category Cost: ₹{calculateCategoryTotal(category.id)}</strong>
                        </div>
                      </Col>
                      <Col md={4}>
                        <h6>Actions:</h6>
                        <div className="d-grid gap-2">
                          <Button 
                            variant="outline-primary" 
                            size="sm"
                            onClick={() => openServiceModal(category)}
                          >
                            <FontAwesomeIcon icon={faPencilAlt} className="me-2" />
                            Edit Services
                          </Button>
                          <Button 
                            variant="outline-secondary" 
                            size="sm"
                            onClick={() => duplicateCategory(category)}
                          >
                            <FontAwesomeIcon icon={faCopy} className="me-2" />
                            Duplicate
                          </Button>
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => handleDeleteCategory(category.id, category.name)}
                          >
                            <FontAwesomeIcon icon={faTrash} className="me-2" />
                            Delete
                          </Button>
                        </div>
                        <div className="mt-3 small text-muted">
                          Created: {new Date(category.createdAt).toLocaleDateString()}
                          {category.updatedAt && (
                            <div>Updated: {new Date(category.updatedAt).toLocaleDateString()}</div>
                          )}
                        </div>
                      </Col>
                    </Row>
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          ) : (
            <div className="text-center py-5">
              <FontAwesomeIcon icon={faFolder} size="3x" className="text-muted mb-3" />
              {searchTerm.trim() ? (
                <div>
                  <p>No categories found matching "{searchTerm}"</p>
                  <p className="text-muted small">Try adjusting your search term</p>
                </div>
              ) : (
                <div>
                  <p>No categories created yet</p>
                  <p className="text-muted small">Use the form above to create your first category!</p>
                </div>
              )}
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="d-flex justify-content-center p-3">
              <Pagination>
                <Pagination.Prev 
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                
                {[...Array(totalPages)].map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <Pagination.Item
                      key={pageNumber}
                      active={pageNumber === currentPage}
                      onClick={() => setCurrentPage(pageNumber)}
                    >
                      {pageNumber}
                    </Pagination.Item>
                  );
                })}
                
                <Pagination.Next 
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === totalPages}
                />
              </Pagination>
            </div>
          )}
        </Card.Body>
      </Card>

      {/* Service Selection Modal */}
      <Modal 
        show={showServiceModal} 
        onHide={() => setShowServiceModal(false)}
        size="lg"
        backdrop="static"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faList} className="me-2" />
            Select Services for Category
          </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ maxHeight: '60vh', overflowY: 'auto' }}>
          <div className="mb-3">
            <Form.Control
              type="text"
              placeholder="Search services..."
              value={serviceSearchTerm}
              onChange={(e) => setServiceSearchTerm(e.target.value)}
            />
          </div>
          
          {Object.entries(groupedServices).map(([categoryKey, categoryServices]) => (
            <Card key={categoryKey} className="mb-3">
              <Card.Header>
                <h6 className="mb-0">
                  {SERVICE_CATEGORIES[categoryKey]?.name || categoryKey.toUpperCase()}
                  <Badge bg="secondary" className="ms-2">
                    {categoryServices.length} services
                  </Badge>
                </h6>
              </Card.Header>
              <Card.Body>
                <Row>
                  {categoryServices.map(service => (
                    <Col md={6} key={service.id} className="mb-2">
                      <Form.Check
                        type="checkbox"
                        id={`service-${service.id}`}
                        checked={newCategory.selectedServices.includes(service.id)}
                        onChange={() => toggleServiceSelection(service.id)}
                        label={
                          <div>
                            <strong>{service.service_name}</strong>
                            <div className="small text-muted">₹{service.rate_per_day}/day</div>
                          </div>
                        }
                      />
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          ))}
          
          {filteredServices.length === 0 && (
            <div className="text-center py-4">
              <p className="text-muted">No services found matching your search</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-between align-items-center w-100">
            <div>
              <Badge bg="info">
                {newCategory.selectedServices.length} services selected
              </Badge>
              {newCategory.selectedServices.length > 0 && (
                <Badge bg="success" className="ms-2">
                  Total: ₹{services
                    .filter(s => newCategory.selectedServices.includes(s.id))
                    .reduce((total, s) => total + (s.rate_per_day || 0), 0)
                  }
                </Badge>
              )}
            </div>
            <div>
              <Button variant="secondary" onClick={() => setShowServiceModal(false)}>
                Cancel
              </Button>
              <Button 
                variant="primary" 
                className="ms-2"
                onClick={() => {
                  if (selectedCategoryForServices) {
                    handleUpdateCategory(selectedCategoryForServices.id, {
                      name: newCategory.name,
                      description: newCategory.description,
                      selectedServices: newCategory.selectedServices
                    });
                  }
                  setShowServiceModal(false);
                }}
                disabled={newCategory.selectedServices.length === 0}
              >
                {selectedCategoryForServices ? 'Update Category' : 'Confirm Selection'}
              </Button>
            </div>
          </div>
        </Modal.Footer>
      </Modal>

      <style jsx>{`
        .category-presets-component .accordion-button:not(.collapsed) {
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
        }
        
        .category-presets-component .list-group-item {
          border-left: none;
          border-right: none;
        }
        
        .category-presets-component .list-group-item:first-child {
          border-top: none;
        }
        
        .category-presets-component .list-group-item:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
}

export default CategoryPresets;