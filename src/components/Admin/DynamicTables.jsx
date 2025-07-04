import React, { useState, useEffect } from 'react';
import { 
  Table, 
  Form, 
  Button, 
  Alert, 
  Card, 
  Row, 
  Col, 
  Modal,
  Badge,
  Spinner,
  InputGroup,
  OverlayTrigger,
  Tooltip,
  Pagination,
  Dropdown,
  Nav,
  Tab
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faPlus, 
  faPencilAlt, 
  faTrash, 
  faCheck, 
  faTimes, 
  faInfoCircle,
  faDatabase,
  faDownload,
  faColumns,
  faTable,
  faEdit,
  faStar,
  faEnvelope,
  faPhone,
  faLink,
  faCalendar,
  faHashtag,
  faAlignLeft
} from '@fortawesome/free-solid-svg-icons';

// Import API functions
import { 
  fetchTables, 
  createTable, 
  updateTable, 
  deleteTable,
  fetchTableColumns,
  createTableColumn,
  updateTableColumn,
  deleteTableColumn,
  fetchTableData,
  createTableRecord,
  updateTableRecord,
  deleteTableRecord,
  getTableSchema
} from '../../services/api';

const COLUMN_TYPES = {
  text: { icon: faAlignLeft, label: 'Text' },
  number: { icon: faHashtag, label: 'Number' },
  email: { icon: faEnvelope, label: 'Email' },
  phone: { icon: faPhone, label: 'Phone' },
  url: { icon: faLink, label: 'URL' },
  textarea: { icon: faAlignLeft, label: 'Long Text' },
  date: { icon: faCalendar, label: 'Date' },
  rating: { icon: faStar, label: 'Rating' }
};

function DynamicTables() {
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [tableData, setTableData] = useState([]);
  const [tableColumns, setTableColumns] = useState([]);
  const [activeView, setActiveView] = useState('tables'); // 'tables', 'columns', 'data'
  
  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  
  // Form states
  const [showTableModal, setShowTableModal] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showDataModal, setShowDataModal] = useState(false);
  const [editingTable, setEditingTable] = useState(null);
  const [editingColumn, setEditingColumn] = useState(null);
  const [editingRecord, setEditingRecord] = useState(null);
  
  // Form data
  const [newTable, setNewTable] = useState({ table_name: '', description: '' });
  const [newColumn, setNewColumn] = useState({ 
    column_name: '', 
    column_type: 'text', 
    is_required: false, 
    default_value: '' 
  });
  const [newRecord, setNewRecord] = useState({});
  
  // UI states
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadTables();
  }, []);

  useEffect(() => {
    if (selectedTable && activeView === 'columns') {
      loadTableColumns();
    } else if (selectedTable && activeView === 'data') {
      loadTableData();
    }
  }, [selectedTable, activeView, currentPage, searchTerm]);

const loadTables = async () => {
  try {
    console.log('🔄 Loading tables...');
    setIsLoading(true);
    setError('');
    
    const response = await fetchTables();
    console.log('✅ Full API response:', response);
    
    // The correct path is response.data.data (because your API returns {success: true, data: [...]})
    if (response.data && response.data.success && Array.isArray(response.data.data)) {
      console.log('✅ Setting tables with:', response.data.data);
      setTables(response.data.data);  // <- This is the fix!
    } else {
      console.error('❌ Invalid response format:', response.data);
      setTables([]);
      setError('Invalid response format from server');
    }
    
  } catch (error) {
    console.error('❌ Error loading tables:', error);
    setTables([]);
    setError(error.response?.data?.error || error.message || 'Failed to load tables');
  } finally {
    console.log('🏁 Setting loading to false');
    setIsLoading(false);
  }
};

//   const loadTableColumns = async () => {
//     if (!selectedTable) return;
//     try {
//       setIsLoading(true);
//       const response = await fetchTableColumns(selectedTable.id);
//       setTableColumns(response.data);
//     } catch (error) {
//       console.error('Error loading columns:', error);
//       setError('Failed to load columns');
//     } finally {
//       setIsLoading(false);
//     }
//   };
const loadTableColumns = async () => {
  if (!selectedTable) return;
  try {
    setIsLoading(true);
    const response = await fetchTableColumns(selectedTable.id);

    // Ensure it's set to an array
    const columns = response.data?.data || [];
    setTableColumns(columns);
  } catch (error) {
    console.error('Error loading columns:', error);
    setError('Failed to load columns');
    setTableColumns([]); // fallback to avoid undefined
  } finally {
    setIsLoading(false);
  }
};


//   const loadTableData = async () => {
//     if (!selectedTable) return;
//     try {
//       setIsLoadingData(true);
//       const response = await fetchTableData(selectedTable.id, searchTerm, currentPage);
//       setTableData(response.data);
//       setTotalPages(response.pagination.totalPages);
//     } catch (error) {
//       console.error('Error loading table data:', error);
//       setError('Failed to load table data');
//     } finally {
//       setIsLoadingData(false);
//     }
//   };
const loadTableData = async () => {
  if (!selectedTable) return;
  try {
    setIsLoadingData(true);
    const response = await fetchTableData(selectedTable.id, searchTerm, currentPage);
    
    const records = response.data?.data || [];
    const pagination = response.data?.pagination || { totalPages: 1 };

    setTableData(records);
    setTotalPages(pagination.totalPages);
  } catch (error) {
    console.error('Error loading table data:', error);
    setError('Failed to load table data');
  } finally {
    setIsLoadingData(false);
  }
};


  const handleCreateTable = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await createTable(newTable);
      setNewTable({ table_name: '', description: '' });
      setShowTableModal(false);
      await loadTables();
      setSuccess('Table created successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create table');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateTable = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateTable(editingTable.id, newTable);
      setEditingTable(null);
      setShowTableModal(false);
      await loadTables();
      setSuccess('Table updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update table');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteTable = async (table) => {
    if (window.confirm(`Are you sure you want to delete "${table.table_name}"? This will delete all columns and data in this table.`)) {
      try {
        setIsLoading(true);
        await deleteTable(table.id);
        if (selectedTable?.id === table.id) {
          setSelectedTable(null);
          setActiveView('tables');
        }
        await loadTables();
        setSuccess('Table deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to delete table');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCreateColumn = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await createTableColumn(selectedTable.id, newColumn);
      setNewColumn({ column_name: '', column_type: 'text', is_required: false, default_value: '' });
      setShowColumnModal(false);
      await loadTableColumns();
      setSuccess('Column created successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create column');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateColumn = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateTableColumn(selectedTable.id, editingColumn.id, newColumn);
      setEditingColumn(null);
      setShowColumnModal(false);
      await loadTableColumns();
      setSuccess('Column updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update column');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteColumn = async (column) => {
    if (window.confirm(`Are you sure you want to delete column "${column.column_name}"? This will delete all data in this column.`)) {
      try {
        setIsLoading(true);
        await deleteTableColumn(selectedTable.id, column.id);
        await loadTableColumns();
        setSuccess('Column deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to delete column');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleCreateRecord = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await createTableRecord(selectedTable.id, newRecord);
      setNewRecord({});
      setShowDataModal(false);
      await loadTableData();
      setSuccess('Record created successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to create record');
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateRecord = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateTableRecord(selectedTable.id, editingRecord.id, newRecord);
      setEditingRecord(null);
      setShowDataModal(false);
      await loadTableData();
      setSuccess('Record updated successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update record');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteRecord = async (record) => {
    if (window.confirm('Are you sure you want to delete this record?')) {
      try {
        setIsLoading(true);
        await deleteTableRecord(selectedTable.id, record.id);
        await loadTableData();
        setSuccess('Record deleted successfully!');
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        setError(error.response?.data?.error || 'Failed to delete record');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const openTableModal = (table = null) => {
    if (table) {
      setEditingTable(table);
      setNewTable({ table_name: table.table_name, description: table.description || '' });
    } else {
      setEditingTable(null);
      setNewTable({ table_name: '', description: '' });
    }
    setShowTableModal(true);
  };

  const openColumnModal = (column = null) => {
    if (column) {
      setEditingColumn(column);
      setNewColumn({
        column_name: column.column_name,
        column_type: column.column_type,
        is_required: column.is_required,
        default_value: column.default_value || ''
      });
    } else {
      setEditingColumn(null);
      setNewColumn({ column_name: '', column_type: 'text', is_required: false, default_value: '' });
    }
    setShowColumnModal(true);
  };

  const openDataModal = (record = null) => {
    if (record) {
      setEditingRecord(record);
      setNewRecord(record.data_json);
    } else {
      setEditingRecord(null);
      const defaultRecord = {};
      tableColumns.forEach(col => {
        defaultRecord[col.column_name] = col.default_value || '';
      });
      setNewRecord(defaultRecord);
    }
    setShowDataModal(true);
  };

  const renderFieldInput = (column, value, onChange) => {
    const commonProps = {
      value: value || '',
      onChange: (e) => onChange(column.column_name, e.target.value),
      required: column.is_required
    };

    switch (column.column_type) {
      case 'textarea':
        return <Form.Control as="textarea" rows={3} {...commonProps} />;
      case 'number':
        return <Form.Control type="number" {...commonProps} />;
      case 'email':
        return <Form.Control type="email" {...commonProps} />;
      case 'phone':
        return <Form.Control type="tel" {...commonProps} />;
      case 'url':
        return <Form.Control type="url" {...commonProps} />;
      case 'date':
        return <Form.Control type="date" {...commonProps} />;
      case 'rating':
        return (
          <Form.Select {...commonProps}>
            <option value="">Select Rating</option>
            {[1,2,3,4,5].map(rating => (
              <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
            ))}
          </Form.Select>
        );
      default:
        return <Form.Control type="text" {...commonProps} />;
    }
  };

  const renderPagination = () => {
    if (totalPages <= 1) return null;

    return (
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev 
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          />
          
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            const isActive = pageNumber === currentPage;
            
            if (
              pageNumber === 1 || 
              pageNumber === totalPages || 
              (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
            ) {
              return (
                <Pagination.Item
                  key={pageNumber}
                  active={isActive}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  {pageNumber}
                </Pagination.Item>
              );
            }
            
            if (
              (pageNumber === currentPage - 2 && currentPage > 3) || 
              (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
            ) {
              return <Pagination.Ellipsis key={pageNumber} />;
            }
            
            return null;
          })}
          
          <Pagination.Next 
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    );
  };

  return (
    <div className="dynamic-tables-component">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h4 className="mb-1">Dynamic Tables Management</h4>
          <p className="text-muted mb-0">Create and manage custom data tables for your business needs</p>
        </div>
        <Badge bg="info" className="py-2 px-3">
          <FontAwesomeIcon icon={faDatabase} className="me-1" />
          {tables.length} Table{tables.length !== 1 ? 's' : ''}
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

      {/* Navigation Tabs */}
      <Tab.Container activeKey={activeView} onSelect={setActiveView}>
        <Card className="shadow-sm border-0">
          <Card.Header className="bg-light">
            <Nav variant="pills" className="flex-row">
              <Nav.Item>
                <Nav.Link eventKey="tables" className="text-decoration-none">
                  <FontAwesomeIcon icon={faTable} className="me-2" />
                  Tables
                  <Badge bg="secondary" className="ms-2">{tables.length}</Badge>
                </Nav.Link>
              </Nav.Item>
              {selectedTable && (
                <>
                  <Nav.Item>
                    <Nav.Link eventKey="columns" className="text-decoration-none">
                      <FontAwesomeIcon icon={faColumns} className="me-2" />
                      Columns ({selectedTable.table_name})
                      <Badge bg="secondary" className="ms-2">{tableColumns.length}</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="data" className="text-decoration-none">
                      <FontAwesomeIcon icon={faDatabase} className="me-2" />
                      Data ({selectedTable.table_name})
                      <Badge bg="secondary" className="ms-2">{selectedTable.record_count || 0}</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </>
              )}
            </Nav>
          </Card.Header>

          <Card.Body>
            <Tab.Content>
              {/* Tables Tab */}
              <Tab.Pane eventKey="tables">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Tables</h5>
                  <Button variant="success" onClick={() => openTableModal()}>
                    <FontAwesomeIcon icon={faPlus} className="me-2" />
                    Create Table
                  </Button>
                </div>

                {isLoading && !tables.length ? (
                  <div className="text-center py-5">
                    <Spinner animation="border" variant="primary" />
                    <p className="mt-3">Loading tables...</p>
                  </div>
                ) : tables.length > 0 ? (
                  <div className="table-responsive">
                    <Table hover>
                      <thead className="bg-light">
                        <tr>
                          <th>Table Name</th>
                          <th>Description</th>
                          <th>Columns</th>
                          <th>Records</th>
                          <th>Created</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tables.map(table => (
                          <tr key={table.id} className={selectedTable?.id === table.id ? 'table-active' : ''}>
                            <td>
                              <strong 
                                className="text-primary" 
                                style={{ cursor: 'pointer' }}
                                onClick={() => setSelectedTable(table)}
                              >
                                {table.table_name}
                              </strong>
                            </td>
                            <td>{table.description || '-'}</td>
                            <td><Badge bg="info">{table.column_count || 0}</Badge></td>
                            <td><Badge bg="success">{table.record_count || 0}</Badge></td>
                            <td>{new Date(table.created_at).toLocaleDateString()}</td>
                            <td>
                              <div className="d-flex gap-2">
                                <Button 
                                  variant="outline-primary" 
                                  size="sm"
                                  onClick={() => openTableModal(table)}
                                >
                                  <FontAwesomeIcon icon={faPencilAlt} />
                                </Button>
                                <Button 
                                  variant="outline-danger" 
                                  size="sm"
                                  onClick={() => handleDeleteTable(table)}
                                >
                                  <FontAwesomeIcon icon={faTrash} />
                                </Button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </Table>
                  </div>
                ) : (
                  <div className="text-center py-5">
                    <FontAwesomeIcon icon={faTable} size="3x" className="text-muted mb-3" />
                    <p>No tables created yet.</p>
                    <Button variant="primary" onClick={() => openTableModal()}>
                      Create Your First Table
                    </Button>
                  </div>
                )}
              </Tab.Pane>

              {/* Columns Tab */}
              <Tab.Pane eventKey="columns">
                {selectedTable ? (
                  <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">Columns for {selectedTable.table_name}</h5>
                      <Button variant="success" onClick={() => openColumnModal()}>
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        Add Column
                      </Button>
                    </div>

                    {isLoading ? (
                      <div className="text-center py-3">
                        <Spinner animation="border" variant="primary" />
                      </div>
                    ) : tableColumns.length > 0 ? (
                      <div className="table-responsive">
                        <Table hover>
                          <thead className="bg-light">
                            <tr>
                              <th>Column Name</th>
                              <th>Type</th>
                              <th>Required</th>
                              <th>Default Value</th>
                              <th>Order</th>
                              <th>Actions</th>
                            </tr>
                          </thead>
                          <tbody>
                            {tableColumns.map(column => (
                              <tr key={column.id}>
                                <td>
                                  <FontAwesomeIcon 
                                    icon={COLUMN_TYPES[column.column_type]?.icon || faAlignLeft} 
                                    className="me-2 text-muted" 
                                  />
                                  <strong>{column.column_name}</strong>
                                </td>
                                <td>
                                  <Badge bg="secondary">
                                    {COLUMN_TYPES[column.column_type]?.label || column.column_type}
                                  </Badge>
                                </td>
                                <td>
                                  {column.is_required ? (
                                    <Badge bg="danger">Required</Badge>
                                  ) : (
                                    <Badge bg="light" text="dark">Optional</Badge>
                                  )}
                                </td>
                                <td>{column.default_value || '-'}</td>
                                <td><Badge bg="info">{column.column_order}</Badge></td>
                                <td>
                                  <div className="d-flex gap-2">
                                    <Button 
                                      variant="outline-primary" 
                                      size="sm"
                                      onClick={() => openColumnModal(column)}
                                    >
                                      <FontAwesomeIcon icon={faPencilAlt} />
                                    </Button>
                                    <Button 
                                      variant="outline-danger" 
                                      size="sm"
                                      onClick={() => handleDeleteColumn(column)}
                                    >
                                      <FontAwesomeIcon icon={faTrash} />
                                    </Button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </Table>
                      </div>
                    ) : (
                      <div className="text-center py-5">
                        <FontAwesomeIcon icon={faColumns} size="3x" className="text-muted mb-3" />
                        <p>No columns defined for this table.</p>
                        <Button variant="primary" onClick={() => openColumnModal()}>
                          Add First Column
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-5">
                    <p>Please select a table to manage its columns.</p>
                  </div>
                )}
              </Tab.Pane>

              {/* Data Tab */}
              <Tab.Pane eventKey="data">
                {selectedTable ? (
                  <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <div>
                        <h5 className="mb-0">Data for {selectedTable.table_name}</h5>
                        {tableColumns.length === 0 && (
                          <small className="text-muted">Define columns first to add data</small>
                        )}
                      </div>
                      <div className="d-flex gap-2">
                        <Form.Control
                          type="text"
                          placeholder="Search records..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          style={{ maxWidth: '200px' }}
                        />
                        {tableColumns.length > 0 && (
                          <Button variant="success" onClick={() => openDataModal()}>
                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                            Add Record
                          </Button>
                        )}
                      </div>
                    </div>

                    {tableColumns.length === 0 ? (
                      <div className="text-center py-5">
                        <FontAwesomeIcon icon={faColumns} size="3x" className="text-muted mb-3" />
                        <p>No columns defined for this table.</p>
                        <Button 
                          variant="primary" 
                          onClick={() => setActiveView('columns')}
                        >
                          Define Columns First
                        </Button>
                      </div>
                    ) : isLoadingData ? (
                      <div className="text-center py-3">
                        <Spinner animation="border" variant="primary" />
                      </div>
                    ) : tableData.length > 0 ? (
                      <>
                        <div className="table-responsive">
                          <Table hover>
                            <thead className="bg-light">
                              <tr>
                                {tableColumns.map(column => (
                                  <th key={column.id}>
                                    <FontAwesomeIcon 
                                      icon={COLUMN_TYPES[column.column_type]?.icon || faAlignLeft} 
                                      className="me-2" 
                                    />
                                    {column.column_name}
                                    {column.is_required && <span className="text-danger">*</span>}
                                  </th>
                                ))}
                                <th>Actions</th>
                              </tr>
                            </thead>
                            <tbody>
                              {tableData.map(record => (
                                <tr key={record.id}>
                                  {tableColumns.map(column => (
                                    <td key={column.id}>
                                      {column.column_type === 'url' && record.data_json[column.column_name] ? (
                                        <a 
                                          href={record.data_json[column.column_name]} 
                                          target="_blank" 
                                          rel="noopener noreferrer"
                                          className="text-decoration-none"
                                        >
                                          <FontAwesomeIcon icon={faLink} className="me-1" />
                                          Link
                                        </a>
                                      ) : column.column_type === 'rating' ? (
                                        <div>
                                          {[...Array(5)].map((_, i) => (
                                            <FontAwesomeIcon 
                                              key={i}
                                              icon={faStar} 
                                              className={i < (record.data_json[column.column_name] || 0) ? 'text-warning' : 'text-light'}
                                            />
                                          ))}
                                        </div>
                                      ) : (
                                        record.data_json[column.column_name] || '-'
                                      )}
                                    </td>
                                  ))}
                                  <td>
                                    <div className="d-flex gap-2">
                                      <Button 
                                        variant="outline-primary" 
                                        size="sm"
                                        onClick={() => openDataModal(record)}
                                      >
                                        <FontAwesomeIcon icon={faPencilAlt} />
                                      </Button>
                                      <Button 
                                        variant="outline-danger" 
                                        size="sm"
                                        onClick={() => handleDeleteRecord(record)}
                                      >
                                        <FontAwesomeIcon icon={faTrash} />
                                      </Button>
                                    </div>
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </Table>
                        </div>
                        {renderPagination()}
                      </>
                    ) : (
                      <div className="text-center py-5">
                        <FontAwesomeIcon icon={faDatabase} size="3x" className="text-muted mb-3" />
                        <p>No records found for this table.</p>
                        <Button variant="primary" onClick={() => openDataModal()}>
                          Add First Record
                        </Button>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="text-center py-5">
                    <p>Please select a table to manage its data.</p>
                  </div>
                )}
              </Tab.Pane>
            </Tab.Content>
          </Card.Body>
        </Card>
      </Tab.Container>

      {/* Table Modal */}
      <Modal show={showTableModal} onHide={() => setShowTableModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingTable ? 'Edit Table' : 'Create New Table'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={editingTable ? handleUpdateTable : handleCreateTable}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Table Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={newTable.table_name}
                    onChange={(e) => setNewTable({...newTable, table_name: e.target.value})}
                    placeholder="e.g., Directors, Cinematographers"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={newTable.description}
                    onChange={(e) => setNewTable({...newTable, description: e.target.value})}
                    placeholder="Optional description for this table"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowTableModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? <Spinner size="sm" className="me-2" /> : null}
              {editingTable ? 'Update Table' : 'Create Table'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Column Modal */}
      <Modal show={showColumnModal} onHide={() => setShowColumnModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingColumn ? 'Edit Column' : 'Add New Column'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={editingColumn ? handleUpdateColumn : handleCreateColumn}>
          <Modal.Body>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Column Name *</Form.Label>
                  <Form.Control
                    type="text"
                    value={newColumn.column_name}
                    onChange={(e) => setNewColumn({...newColumn, column_name: e.target.value})}
                    placeholder="e.g., Name, Contact Number"
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Column Type</Form.Label>
                  <Form.Select
                    value={newColumn.column_type}
                    onChange={(e) => setNewColumn({...newColumn, column_type: e.target.value})}
                  >
                    {Object.entries(COLUMN_TYPES).map(([key, type]) => (
                      <option key={key} value={key}>{type.label}</option>
                    ))}
                  </Form.Select>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Label>Default Value</Form.Label>
                  <Form.Control
                    type="text"
                    value={newColumn.default_value}
                    onChange={(e) => setNewColumn({...newColumn, default_value: e.target.value})}
                    placeholder="Optional default value"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    label="Required field"
                    checked={newColumn.is_required}
                    onChange={(e) => setNewColumn({...newColumn, is_required: e.target.checked})}
                    className="mt-4"
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowColumnModal(false)}>
              Cancel
            </Button>
            <Button type="submit" variant="primary" disabled={isLoading}>
              {isLoading ? <Spinner size="sm" className="me-2" /> : null}
              {editingColumn ? 'Update Column' : 'Add Column'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>

      {/* Data Modal */}
      <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            {editingRecord ? 'Edit Record' : 'Add New Record'}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={editingRecord ? handleUpdateRecord : handleCreateRecord}>
          <Modal.Body>
            {tableColumns.length > 0 ? (
              <Row>
                {tableColumns.map((column, index) => (
                  <Col md={6} key={column.id}>
                    <Form.Group className="mb-3">
                      <Form.Label>
                        <FontAwesomeIcon 
                          icon={COLUMN_TYPES[column.column_type]?.icon || faAlignLeft} 
                          className="me-2" 
                        />
                        {column.column_name}
                        {column.is_required && <span className="text-danger">*</span>}
                      </Form.Label>
                      {renderFieldInput(
                        column, 
                        newRecord[column.column_name], 
                        (fieldName, value) => setNewRecord({...newRecord, [fieldName]: value})
                      )}
                      {column.default_value && (
                        <Form.Text className="text-muted">
                          Default: {column.default_value}
                        </Form.Text>
                      )}
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            ) : (
              <div className="text-center py-3">
                <p>No columns defined for this table. Please add columns first.</p>
              </div>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowDataModal(false)}>
              Cancel
            </Button>
            {tableColumns.length > 0 && (
              <Button type="submit" variant="primary" disabled={isLoading}>
                {isLoading ? <Spinner size="sm" className="me-2" /> : null}
                {editingRecord ? 'Update Record' : 'Add Record'}
              </Button>
            )}
          </Modal.Footer>
        </Form>
      </Modal>

      <style jsx>{`
        .dynamic-tables-component .nav-pills .nav-link {
          color: #6c757d;
          border-radius: 0.375rem;
          margin-right: 0.5rem;
          transition: all 0.2s ease;
        }
        
        .dynamic-tables-component .nav-pills .nav-link:hover {
          background-color: rgba(13, 110, 253, 0.1);
          color: #0d6efd;
        }
        
        .dynamic-tables-component .nav-pills .nav-link.active {
          background-color: #0d6efd;
          color: white;
        }
        
        .table tbody tr {
          transition: all 0.2s ease;
        }
        
        .table tbody tr:hover {
          background-color: rgba(13, 110, 253, 0.05) !important;
        }
        
        .table-active {
          background-color: rgba(13, 110, 253, 0.1) !important;
        }
        
        .dynamic-tables-component .card {
          transition: box-shadow 0.3s ease;
        }
      `}</style>
    </div>
  );
}

export default DynamicTables;