// import React, { useState, useEffect } from 'react';
// import { 
//   Table, 
//   Form, 
//   Button, 
//   Alert, 
//   Card, 
//   Row, 
//   Col, 
//   Modal,
//   Badge,
//   Spinner,
//   InputGroup,
//   OverlayTrigger,
//   Tooltip,
//   Pagination,
//   Dropdown,
//   Nav,
//   Tab
// } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faPlus, 
//   faPencilAlt, 
//   faTrash, 
//   faCheck, 
//   faTimes, 
//   faInfoCircle,
//   faDatabase,
//   faDownload,
//   faColumns,
//   faTable,
//   faEdit,
//   faStar,
//   faEnvelope,
//   faPhone,
//   faLink,
//   faCalendar,
//   faHashtag,
//   faAlignLeft
// } from '@fortawesome/free-solid-svg-icons';

// // Import API functions
// import { 
//   fetchTables, 
//   createTable, 
//   updateTable, 
//   deleteTable,
//   fetchTableColumns,
//   createTableColumn,
//   updateTableColumn,
//   deleteTableColumn,
//   fetchTableData,
//   createTableRecord,
//   updateTableRecord,
//   deleteTableRecord,
//   getTableSchema
// } from '../../services/api';

// const COLUMN_TYPES = {
//   text: { icon: faAlignLeft, label: 'Text' },
//   number: { icon: faHashtag, label: 'Number' },
//   email: { icon: faEnvelope, label: 'Email' },
//   phone: { icon: faPhone, label: 'Phone' },
//   url: { icon: faLink, label: 'URL' },
//   textarea: { icon: faAlignLeft, label: 'Long Text' },
//   date: { icon: faCalendar, label: 'Date' },
//   rating: { icon: faStar, label: 'Rating' }
// };

// function DynamicTables() {
//   const [tables, setTables] = useState([]);
//   const [selectedTable, setSelectedTable] = useState(null);
//   const [tableData, setTableData] = useState([]);
//   const [tableColumns, setTableColumns] = useState([]);
//   const [activeView, setActiveView] = useState('tables'); // 'tables', 'columns', 'data'
  
//   // Loading states
//   const [isLoading, setIsLoading] = useState(false);
//   const [isLoadingData, setIsLoadingData] = useState(false);
  
//   // Form states
//   const [showTableModal, setShowTableModal] = useState(false);
//   const [showColumnModal, setShowColumnModal] = useState(false);
//   const [showDataModal, setShowDataModal] = useState(false);
//   const [editingTable, setEditingTable] = useState(null);
//   const [editingColumn, setEditingColumn] = useState(null);
//   const [editingRecord, setEditingRecord] = useState(null);
  
//   // Form data
//   const [newTable, setNewTable] = useState({ table_name: '', description: '' });
//   const [newColumn, setNewColumn] = useState({ 
//     column_name: '', 
//     column_type: 'text', 
//     is_required: false, 
//     default_value: '' 
//   });
//   const [newRecord, setNewRecord] = useState({});
  
//   // UI states
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [searchTerm, setSearchTerm] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     loadTables();
//   }, []);

//   useEffect(() => {
//     if (selectedTable && activeView === 'columns') {
//       loadTableColumns();
//     } else if (selectedTable && activeView === 'data') {
//       loadTableData();
//     }
//   }, [selectedTable, activeView, currentPage, searchTerm]);

// const loadTables = async () => {
//   try {
//     console.log('🔄 Loading tables...');
//     setIsLoading(true);
//     setError('');
    
//     const response = await fetchTables();
//     console.log('✅ Full API response:', response);
    
//     // The correct path is response.data.data (because your API returns {success: true, data: [...]})
//     if (response.data && response.data.success && Array.isArray(response.data.data)) {
//       console.log('✅ Setting tables with:', response.data.data);
//       setTables(response.data.data);  // <- This is the fix!
//     } else {
//       console.error('❌ Invalid response format:', response.data);
//       setTables([]);
//       setError('Invalid response format from server');
//     }
    
//   } catch (error) {
//     console.error('❌ Error loading tables:', error);
//     setTables([]);
//     setError(error.response?.data?.error || error.message || 'Failed to load tables');
//   } finally {
//     console.log('🏁 Setting loading to false');
//     setIsLoading(false);
//   }
// };


// const loadTableColumns = async () => {
//   if (!selectedTable) return;
//   try {
//     setIsLoading(true);
//     const response = await fetchTableColumns(selectedTable.id);

//     // Ensure it's set to an array
//     const columns = response.data?.data || [];
//     setTableColumns(columns);
//   } catch (error) {
//     console.error('Error loading columns:', error);
//     setError('Failed to load columns');
//     setTableColumns([]); // fallback to avoid undefined
//   } finally {
//     setIsLoading(false);
//   }
// };



// const loadTableData = async () => {
//   if (!selectedTable) return;
//   try {
//     setIsLoadingData(true);
//     const response = await fetchTableData(selectedTable.id, searchTerm, currentPage);
    
//     const records = response.data?.data || [];
//     const pagination = response.data?.pagination || { totalPages: 1 };

//     setTableData(records);
//     setTotalPages(pagination.totalPages);
//   } catch (error) {
//     console.error('Error loading table data:', error);
//     setError('Failed to load table data');
//   } finally {
//     setIsLoadingData(false);
//   }
// };


//   const handleCreateTable = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       await createTable(newTable);
//       setNewTable({ table_name: '', description: '' });
//       setShowTableModal(false);
//       await loadTables();
//       setSuccess('Table created successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to create table');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUpdateTable = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       await updateTable(editingTable.id, newTable);
//       setEditingTable(null);
//       setShowTableModal(false);
//       await loadTables();
//       setSuccess('Table updated successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to update table');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteTable = async (table) => {
//     if (window.confirm(`Are you sure you want to delete "${table.table_name}"? This will delete all columns and data in this table.`)) {
//       try {
//         setIsLoading(true);
//         await deleteTable(table.id);
//         if (selectedTable?.id === table.id) {
//           setSelectedTable(null);
//           setActiveView('tables');
//         }
//         await loadTables();
//         setSuccess('Table deleted successfully!');
//         setTimeout(() => setSuccess(''), 3000);
//       } catch (error) {
//         setError(error.response?.data?.error || 'Failed to delete table');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleCreateColumn = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       await createTableColumn(selectedTable.id, newColumn);
//       setNewColumn({ column_name: '', column_type: 'text', is_required: false, default_value: '' });
//       setShowColumnModal(false);
//       await loadTableColumns();
//       setSuccess('Column created successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to create column');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUpdateColumn = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       await updateTableColumn(selectedTable.id, editingColumn.id, newColumn);
//       setEditingColumn(null);
//       setShowColumnModal(false);
//       await loadTableColumns();
//       setSuccess('Column updated successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to update column');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteColumn = async (column) => {
//     if (window.confirm(`Are you sure you want to delete column "${column.column_name}"? This will delete all data in this column.`)) {
//       try {
//         setIsLoading(true);
//         await deleteTableColumn(selectedTable.id, column.id);
//         await loadTableColumns();
//         setSuccess('Column deleted successfully!');
//         setTimeout(() => setSuccess(''), 3000);
//       } catch (error) {
//         setError(error.response?.data?.error || 'Failed to delete column');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const handleCreateRecord = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       await createTableRecord(selectedTable.id, newRecord);
//       setNewRecord({});
//       setShowDataModal(false);
//       await loadTableData();
//       setSuccess('Record created successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to create record');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleUpdateRecord = async (e) => {
//     e.preventDefault();
//     try {
//       setIsLoading(true);
//       await updateTableRecord(selectedTable.id, editingRecord.id, newRecord);
//       setEditingRecord(null);
//       setShowDataModal(false);
//       await loadTableData();
//       setSuccess('Record updated successfully!');
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       setError(error.response?.data?.error || 'Failed to update record');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDeleteRecord = async (record) => {
//     if (window.confirm('Are you sure you want to delete this record?')) {
//       try {
//         setIsLoading(true);
//         await deleteTableRecord(selectedTable.id, record.id);
//         await loadTableData();
//         setSuccess('Record deleted successfully!');
//         setTimeout(() => setSuccess(''), 3000);
//       } catch (error) {
//         setError(error.response?.data?.error || 'Failed to delete record');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//   };

//   const openTableModal = (table = null) => {
//     if (table) {
//       setEditingTable(table);
//       setNewTable({ table_name: table.table_name, description: table.description || '' });
//     } else {
//       setEditingTable(null);
//       setNewTable({ table_name: '', description: '' });
//     }
//     setShowTableModal(true);
//   };

//   const openColumnModal = (column = null) => {
//     if (column) {
//       setEditingColumn(column);
//       setNewColumn({
//         column_name: column.column_name,
//         column_type: column.column_type,
//         is_required: column.is_required,
//         default_value: column.default_value || ''
//       });
//     } else {
//       setEditingColumn(null);
//       setNewColumn({ column_name: '', column_type: 'text', is_required: false, default_value: '' });
//     }
//     setShowColumnModal(true);
//   };

//   const openDataModal = (record = null) => {
//     if (record) {
//       setEditingRecord(record);
//       setNewRecord(record.data_json);
//     } else {
//       setEditingRecord(null);
//       const defaultRecord = {};
//       tableColumns.forEach(col => {
//         defaultRecord[col.column_name] = col.default_value || '';
//       });
//       setNewRecord(defaultRecord);
//     }
//     setShowDataModal(true);
//   };

//   const renderFieldInput = (column, value, onChange) => {
//     const commonProps = {
//       value: value || '',
//       onChange: (e) => onChange(column.column_name, e.target.value),
//       required: column.is_required
//     };

//     switch (column.column_type) {
//       case 'textarea':
//         return <Form.Control as="textarea" rows={3} {...commonProps} />;
//       case 'number':
//         return <Form.Control type="number" {...commonProps} />;
//       case 'email':
//         return <Form.Control type="email" {...commonProps} />;
//       case 'phone':
//         return <Form.Control type="tel" {...commonProps} />;
//       case 'url':
//         return <Form.Control type="url" {...commonProps} />;
//       case 'date':
//         return <Form.Control type="date" {...commonProps} />;
//       case 'rating':
//         return (
//           <Form.Select {...commonProps}>
//             <option value="">Select Rating</option>
//             {[1,2,3,4,5].map(rating => (
//               <option key={rating} value={rating}>{rating} Star{rating > 1 ? 's' : ''}</option>
//             ))}
//           </Form.Select>
//         );
//       default:
//         return <Form.Control type="text" {...commonProps} />;
//     }
//   };

//   const renderPagination = () => {
//     if (totalPages <= 1) return null;

//     return (
//       <div className="d-flex justify-content-center mt-4">
//         <Pagination>
//           <Pagination.Prev 
//             onClick={() => setCurrentPage(currentPage - 1)}
//             disabled={currentPage === 1}
//           />
          
//           {[...Array(totalPages)].map((_, index) => {
//             const pageNumber = index + 1;
//             const isActive = pageNumber === currentPage;
            
//             if (
//               pageNumber === 1 || 
//               pageNumber === totalPages || 
//               (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
//             ) {
//               return (
//                 <Pagination.Item
//                   key={pageNumber}
//                   active={isActive}
//                   onClick={() => setCurrentPage(pageNumber)}
//                 >
//                   {pageNumber}
//                 </Pagination.Item>
//               );
//             }
            
//             if (
//               (pageNumber === currentPage - 2 && currentPage > 3) || 
//               (pageNumber === currentPage + 2 && currentPage < totalPages - 2)
//             ) {
//               return <Pagination.Ellipsis key={pageNumber} />;
//             }
            
//             return null;
//           })}
          
//           <Pagination.Next 
//             onClick={() => setCurrentPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//           />
//         </Pagination>
//       </div>
//     );
//   };

//   return (
//     <div className="dynamic-tables-component">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h4 className="mb-1">Dynamic Tables Management</h4>
//           <p className="text-muted mb-0">Create and manage custom data tables for your business needs</p>
//         </div>
//         <Badge bg="info" className="py-2 px-3">
//           <FontAwesomeIcon icon={faDatabase} className="me-1" />
//           {tables.length} Table{tables.length !== 1 ? 's' : ''}
//         </Badge>
//       </div>

//       {error && (
//         <Alert variant="danger" dismissible onClose={() => setError('')}>
//           <FontAwesomeIcon icon={faTimes} className="me-2" />
//           {error}
//         </Alert>
//       )}

//       {success && (
//         <Alert variant="success" dismissible onClose={() => setSuccess('')}>
//           <FontAwesomeIcon icon={faCheck} className="me-2" />
//           {success}
//         </Alert>
//       )}

//       {/* Navigation Tabs */}
//       <Tab.Container activeKey={activeView} onSelect={setActiveView}>
//         <Card className="shadow-sm border-0">
//           <Card.Header className="bg-light">
//             <Nav variant="pills" className="flex-row">
//               <Nav.Item>
//                 <Nav.Link eventKey="tables" className="text-decoration-none">
//                   <FontAwesomeIcon icon={faTable} className="me-2" />
//                   Tables
//                   <Badge bg="secondary" className="ms-2">{tables.length}</Badge>
//                 </Nav.Link>
//               </Nav.Item>
//               {selectedTable && (
//                 <>
//                   <Nav.Item>
//                     <Nav.Link eventKey="columns" className="text-decoration-none">
//                       <FontAwesomeIcon icon={faColumns} className="me-2" />
//                       Columns ({selectedTable.table_name})
//                       <Badge bg="secondary" className="ms-2">{tableColumns.length}</Badge>
//                     </Nav.Link>
//                   </Nav.Item>
//                   <Nav.Item>
//                     <Nav.Link eventKey="data" className="text-decoration-none">
//                       <FontAwesomeIcon icon={faDatabase} className="me-2" />
//                       Data ({selectedTable.table_name})
//                       <Badge bg="secondary" className="ms-2">{selectedTable.record_count || 0}</Badge>
//                     </Nav.Link>
//                   </Nav.Item>
//                 </>
//               )}
//             </Nav>
//           </Card.Header>

//           <Card.Body>
//             <Tab.Content>
//               {/* Tables Tab */}
//               <Tab.Pane eventKey="tables">
//                 <div className="d-flex justify-content-between align-items-center mb-3">
//                   <h5 className="mb-0">Tables</h5>
//                   <Button variant="success" onClick={() => openTableModal()}>
//                     <FontAwesomeIcon icon={faPlus} className="me-2" />
//                     Create Table
//                   </Button>
//                 </div>

//                 {isLoading && !tables.length ? (
//                   <div className="text-center py-5">
//                     <Spinner animation="border" variant="primary" />
//                     <p className="mt-3">Loading tables...</p>
//                   </div>
//                 ) : tables.length > 0 ? (
//                   <div className="table-responsive">
//                     <Table hover>
//                       <thead className="bg-light">
//                         <tr>
//                           <th>Table Name</th>
//                           <th>Description</th>
//                           <th>Columns</th>
//                           <th>Records</th>
//                           <th>Created</th>
//                           <th>Actions</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         {tables.map(table => (
//                           <tr key={table.id} className={selectedTable?.id === table.id ? 'table-active' : ''}>
//                             <td>
//                               <strong 
//                                 className="text-primary" 
//                                 style={{ cursor: 'pointer' }}
//                                 onClick={() => setSelectedTable(table)}
//                               >
//                                 {table.table_name}
//                               </strong>
//                             </td>
//                             <td>{table.description || '-'}</td>
//                             <td><Badge bg="info">{table.column_count || 0}</Badge></td>
//                             <td><Badge bg="success">{table.record_count || 0}</Badge></td>
//                             <td>{new Date(table.created_at).toLocaleDateString()}</td>
//                             <td>
//                               <div className="d-flex gap-2">
//                                 <Button 
//                                   variant="outline-primary" 
//                                   size="sm"
//                                   onClick={() => openTableModal(table)}
//                                 >
//                                   <FontAwesomeIcon icon={faPencilAlt} />
//                                 </Button>
//                                 <Button 
//                                   variant="outline-danger" 
//                                   size="sm"
//                                   onClick={() => handleDeleteTable(table)}
//                                 >
//                                   <FontAwesomeIcon icon={faTrash} />
//                                 </Button>
//                               </div>
//                             </td>
//                           </tr>
//                         ))}
//                       </tbody>
//                     </Table>
//                   </div>
//                 ) : (
//                   <div className="text-center py-5">
//                     <FontAwesomeIcon icon={faTable} size="3x" className="text-muted mb-3" />
//                     <p>No tables created yet.</p>
//                     <Button variant="primary" onClick={() => openTableModal()}>
//                       Create Your First Table
//                     </Button>
//                   </div>
//                 )}
//               </Tab.Pane>

//               {/* Columns Tab */}
//               <Tab.Pane eventKey="columns">
//                 {selectedTable ? (
//                   <>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <h5 className="mb-0">Columns for {selectedTable.table_name}</h5>
//                       <Button variant="success" onClick={() => openColumnModal()}>
//                         <FontAwesomeIcon icon={faPlus} className="me-2" />
//                         Add Column
//                       </Button>
//                     </div>

//                     {isLoading ? (
//                       <div className="text-center py-3">
//                         <Spinner animation="border" variant="primary" />
//                       </div>
//                     ) : tableColumns.length > 0 ? (
//                       <div className="table-responsive">
//                         <Table hover>
//                           <thead className="bg-light">
//                             <tr>
//                               <th>Column Name</th>
//                               <th>Type</th>
//                               <th>Required</th>
//                               <th>Default Value</th>
//                               <th>Order</th>
//                               <th>Actions</th>
//                             </tr>
//                           </thead>
//                           <tbody>
//                             {tableColumns.map(column => (
//                               <tr key={column.id}>
//                                 <td>
//                                   <FontAwesomeIcon 
//                                     icon={COLUMN_TYPES[column.column_type]?.icon || faAlignLeft} 
//                                     className="me-2 text-muted" 
//                                   />
//                                   <strong>{column.column_name}</strong>
//                                 </td>
//                                 <td>
//                                   <Badge bg="secondary">
//                                     {COLUMN_TYPES[column.column_type]?.label || column.column_type}
//                                   </Badge>
//                                 </td>
//                                 <td>
//                                   {column.is_required ? (
//                                     <Badge bg="danger">Required</Badge>
//                                   ) : (
//                                     <Badge bg="light" text="dark">Optional</Badge>
//                                   )}
//                                 </td>
//                                 <td>{column.default_value || '-'}</td>
//                                 <td><Badge bg="info">{column.column_order}</Badge></td>
//                                 <td>
//                                   <div className="d-flex gap-2">
//                                     <Button 
//                                       variant="outline-primary" 
//                                       size="sm"
//                                       onClick={() => openColumnModal(column)}
//                                     >
//                                       <FontAwesomeIcon icon={faPencilAlt} />
//                                     </Button>
//                                     <Button 
//                                       variant="outline-danger" 
//                                       size="sm"
//                                       onClick={() => handleDeleteColumn(column)}
//                                     >
//                                       <FontAwesomeIcon icon={faTrash} />
//                                     </Button>
//                                   </div>
//                                 </td>
//                               </tr>
//                             ))}
//                           </tbody>
//                         </Table>
//                       </div>
//                     ) : (
//                       <div className="text-center py-5">
//                         <FontAwesomeIcon icon={faColumns} size="3x" className="text-muted mb-3" />
//                         <p>No columns defined for this table.</p>
//                         <Button variant="primary" onClick={() => openColumnModal()}>
//                           Add First Column
//                         </Button>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <div className="text-center py-5">
//                     <p>Please select a table to manage its columns.</p>
//                   </div>
//                 )}
//               </Tab.Pane>

//               {/* Data Tab */}
//               <Tab.Pane eventKey="data">
//                 {selectedTable ? (
//                   <>
//                     <div className="d-flex justify-content-between align-items-center mb-3">
//                       <div>
//                         <h5 className="mb-0">Data for {selectedTable.table_name}</h5>
//                         {tableColumns.length === 0 && (
//                           <small className="text-muted">Define columns first to add data</small>
//                         )}
//                       </div>
//                       <div className="d-flex gap-2">
//                         <Form.Control
//                           type="text"
//                           placeholder="Search records..."
//                           value={searchTerm}
//                           onChange={(e) => setSearchTerm(e.target.value)}
//                           style={{ maxWidth: '200px' }}
//                         />
//                         {tableColumns.length > 0 && (
//                           <Button variant="success" onClick={() => openDataModal()}>
//                             <FontAwesomeIcon icon={faPlus} className="me-2" />
//                             Add Record
//                           </Button>
//                         )}
//                       </div>
//                     </div>

//                     {tableColumns.length === 0 ? (
//                       <div className="text-center py-5">
//                         <FontAwesomeIcon icon={faColumns} size="3x" className="text-muted mb-3" />
//                         <p>No columns defined for this table.</p>
//                         <Button 
//                           variant="primary" 
//                           onClick={() => setActiveView('columns')}
//                         >
//                           Define Columns First
//                         </Button>
//                       </div>
//                     ) : isLoadingData ? (
//                       <div className="text-center py-3">
//                         <Spinner animation="border" variant="primary" />
//                       </div>
//                     ) : tableData.length > 0 ? (
//                       <>
//                         <div className="table-responsive">
//                           <Table hover>
//                             <thead className="bg-light">
//                               <tr>
//                                 {tableColumns.map(column => (
//                                   <th key={column.id}>
//                                     <FontAwesomeIcon 
//                                       icon={COLUMN_TYPES[column.column_type]?.icon || faAlignLeft} 
//                                       className="me-2" 
//                                     />
//                                     {column.column_name}
//                                     {column.is_required && <span className="text-danger">*</span>}
//                                   </th>
//                                 ))}
//                                 <th>Actions</th>
//                               </tr>
//                             </thead>
//                             <tbody>
//                               {tableData.map(record => (
//                                 <tr key={record.id}>
//                                   {tableColumns.map(column => (
//                                     <td key={column.id}>
//                                       {column.column_type === 'url' && record.data_json[column.column_name] ? (
//                                         <a 
//                                           href={record.data_json[column.column_name]} 
//                                           target="_blank" 
//                                           rel="noopener noreferrer"
//                                           className="text-decoration-none"
//                                         >
//                                           <FontAwesomeIcon icon={faLink} className="me-1" />
//                                           Link
//                                         </a>
//                                       ) : column.column_type === 'rating' ? (
//                                         <div>
//                                           {[...Array(5)].map((_, i) => (
//                                             <FontAwesomeIcon 
//                                               key={i}
//                                               icon={faStar} 
//                                               className={i < (record.data_json[column.column_name] || 0) ? 'text-warning' : 'text-light'}
//                                             />
//                                           ))}
//                                         </div>
//                                       ) : (
//                                         record.data_json[column.column_name] || '-'
//                                       )}
//                                     </td>
//                                   ))}
//                                   <td>
//                                     <div className="d-flex gap-2">
//                                       <Button 
//                                         variant="outline-primary" 
//                                         size="sm"
//                                         onClick={() => openDataModal(record)}
//                                       >
//                                         <FontAwesomeIcon icon={faPencilAlt} />
//                                       </Button>
//                                       <Button 
//                                         variant="outline-danger" 
//                                         size="sm"
//                                         onClick={() => handleDeleteRecord(record)}
//                                       >
//                                         <FontAwesomeIcon icon={faTrash} />
//                                       </Button>
//                                     </div>
//                                   </td>
//                                 </tr>
//                               ))}
//                             </tbody>
//                           </Table>
//                         </div>
//                         {renderPagination()}
//                       </>
//                     ) : (
//                       <div className="text-center py-5">
//                         <FontAwesomeIcon icon={faDatabase} size="3x" className="text-muted mb-3" />
//                         <p>No records found for this table.</p>
//                         <Button variant="primary" onClick={() => openDataModal()}>
//                           Add First Record
//                         </Button>
//                       </div>
//                     )}
//                   </>
//                 ) : (
//                   <div className="text-center py-5">
//                     <p>Please select a table to manage its data.</p>
//                   </div>
//                 )}
//               </Tab.Pane>
//             </Tab.Content>
//           </Card.Body>
//         </Card>
//       </Tab.Container>

//       {/* Table Modal */}
//       <Modal show={showTableModal} onHide={() => setShowTableModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editingTable ? 'Edit Table' : 'Create New Table'}
//           </Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={editingTable ? handleUpdateTable : handleCreateTable}>
//           <Modal.Body>
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Table Name *</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={newTable.table_name}
//                     onChange={(e) => setNewTable({...newTable, table_name: e.target.value})}
//                     placeholder="e.g., Directors, Cinematographers"
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Description</Form.Label>
//                   <Form.Control
//                     as="textarea"
//                     rows={3}
//                     value={newTable.description}
//                     onChange={(e) => setNewTable({...newTable, description: e.target.value})}
//                     placeholder="Optional description for this table"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowTableModal(false)}>
//               Cancel
//             </Button>
//             <Button type="submit" variant="primary" disabled={isLoading}>
//               {isLoading ? <Spinner size="sm" className="me-2" /> : null}
//               {editingTable ? 'Update Table' : 'Create Table'}
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>

//       {/* Column Modal */}
//       <Modal show={showColumnModal} onHide={() => setShowColumnModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editingColumn ? 'Edit Column' : 'Add New Column'}
//           </Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={editingColumn ? handleUpdateColumn : handleCreateColumn}>
//           <Modal.Body>
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Column Name *</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={newColumn.column_name}
//                     onChange={(e) => setNewColumn({...newColumn, column_name: e.target.value})}
//                     placeholder="e.g., Name, Contact Number"
//                     required
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Column Type</Form.Label>
//                   <Form.Select
//                     value={newColumn.column_type}
//                     onChange={(e) => setNewColumn({...newColumn, column_type: e.target.value})}
//                   >
//                     {Object.entries(COLUMN_TYPES).map(([key, type]) => (
//                       <option key={key} value={key}>{type.label}</option>
//                     ))}
//                   </Form.Select>
//                 </Form.Group>
//               </Col>
//             </Row>
//             <Row>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Label>Default Value</Form.Label>
//                   <Form.Control
//                     type="text"
//                     value={newColumn.default_value}
//                     onChange={(e) => setNewColumn({...newColumn, default_value: e.target.value})}
//                     placeholder="Optional default value"
//                   />
//                 </Form.Group>
//               </Col>
//               <Col md={6}>
//                 <Form.Group className="mb-3">
//                   <Form.Check
//                     type="checkbox"
//                     label="Required field"
//                     checked={newColumn.is_required}
//                     onChange={(e) => setNewColumn({...newColumn, is_required: e.target.checked})}
//                     className="mt-4"
//                   />
//                 </Form.Group>
//               </Col>
//             </Row>
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowColumnModal(false)}>
//               Cancel
//             </Button>
//             <Button type="submit" variant="primary" disabled={isLoading}>
//               {isLoading ? <Spinner size="sm" className="me-2" /> : null}
//               {editingColumn ? 'Update Column' : 'Add Column'}
//             </Button>
//           </Modal.Footer>
//         </Form>
//       </Modal>

//       {/* Data Modal */}
//       <Modal show={showDataModal} onHide={() => setShowDataModal(false)} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {editingRecord ? 'Edit Record' : 'Add New Record'}
//           </Modal.Title>
//         </Modal.Header>
//         <Form onSubmit={editingRecord ? handleUpdateRecord : handleCreateRecord}>
//           <Modal.Body>
//             {tableColumns.length > 0 ? (
//               <Row>
//                 {tableColumns.map((column, index) => (
//                   <Col md={6} key={column.id}>
//                     <Form.Group className="mb-3">
//                       <Form.Label>
//                         <FontAwesomeIcon 
//                           icon={COLUMN_TYPES[column.column_type]?.icon || faAlignLeft} 
//                           className="me-2" 
//                         />
//                         {column.column_name}
//                         {column.is_required && <span className="text-danger">*</span>}
//                       </Form.Label>
//                       {renderFieldInput(
//                         column, 
//                         newRecord[column.column_name], 
//                         (fieldName, value) => setNewRecord({...newRecord, [fieldName]: value})
//                       )}
//                       {column.default_value && (
//                         <Form.Text className="text-muted">
//                           Default: {column.default_value}
//                         </Form.Text>
//                       )}
//                     </Form.Group>
//                   </Col>
//                 ))}
//               </Row>
//             ) : (
//               <div className="text-center py-3">
//                 <p>No columns defined for this table. Please add columns first.</p>
//               </div>
//             )}
//           </Modal.Body>
//           <Modal.Footer>
//             <Button variant="secondary" onClick={() => setShowDataModal(false)}>
//               Cancel
//             </Button>
//             {tableColumns.length > 0 && (
//               <Button type="submit" variant="primary" disabled={isLoading}>
//                 {isLoading ? <Spinner size="sm" className="me-2" /> : null}
//                 {editingRecord ? 'Update Record' : 'Add Record'}
//               </Button>
//             )}
//           </Modal.Footer>
//         </Form>
//       </Modal>

//       <style jsx>{`
//         .dynamic-tables-component .nav-pills .nav-link {
//           color: #6c757d;
//           border-radius: 0.375rem;
//           margin-right: 0.5rem;
//           transition: all 0.2s ease;
//         }
        
//         .dynamic-tables-component .nav-pills .nav-link:hover {
//           background-color: rgba(13, 110, 253, 0.1);
//           color: #0d6efd;
//         }
        
//         .dynamic-tables-component .nav-pills .nav-link.active {
//           background-color: #0d6efd;
//           color: white;
//         }
        
//         .table tbody tr {
//           transition: all 0.2s ease;
//         }
        
//         .table tbody tr:hover {
//           background-color: rgba(13, 110, 253, 0.05) !important;
//         }
        
//         .table-active {
//           background-color: rgba(13, 110, 253, 0.1) !important;
//         }
        
//         .dynamic-tables-component .card {
//           transition: box-shadow 0.3s ease;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default DynamicTables;
import React, { useState, useEffect, useRef } from 'react';
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
  Tab,
  ProgressBar,
  Accordion
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
  faAlignLeft,
  faUpload,
  faFileImport,
  faArrowRight,
  faChevronRight,
  faClipboardList,
  faMagic
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
  getTableSchema,
  bulkCreateRecords
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
  const [activeView, setActiveView] = useState('tables');
  
  // Setup wizard states
  const [showSetupWizard, setShowSetupWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    table: { table_name: '', description: '' },
    columns: [],
    importData: false
  });
  
  // Loading states
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  
  // Form states
  const [showTableModal, setShowTableModal] = useState(false);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showDataModal, setShowDataModal] = useState(false);
  const [showBulkUploadModal, setShowBulkUploadModal] = useState(false);
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
  
  // Bulk upload states
  const [csvFile, setCsvFile] = useState(null);
  const [csvData, setCsvData] = useState([]);
  const [csvHeaders, setCsvHeaders] = useState([]);
  const [columnMapping, setColumnMapping] = useState({});
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);
  
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
      setIsLoading(true);
      setError('');
      
      const response = await fetchTables();
      
      if (response.data && response.data.success && Array.isArray(response.data.data)) {
        setTables(response.data.data);
      } else {
        setTables([]);
        setError('Invalid response format from server');
      }
      
    } catch (error) {
      console.error('Error loading tables:', error);
      setTables([]);
      setError(error.response?.data?.error || error.message || 'Failed to load tables');
    } finally {
      setIsLoading(false);
    }
  };

  const loadTableColumns = async () => {
    if (!selectedTable) return;
    try {
      setIsLoading(true);
      const response = await fetchTableColumns(selectedTable.id);
      const columns = response.data?.data || [];
      setTableColumns(columns);
    } catch (error) {
      console.error('Error loading columns:', error);
      setError('Failed to load columns');
      setTableColumns([]);
    } finally {
      setIsLoading(false);
    }
  };

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

  // Quick Setup Wizard Functions
  const startQuickSetup = () => {
    setWizardData({
      table: { table_name: '', description: '' },
      columns: [],
      importData: false
    });
    setWizardStep(1);
    setShowSetupWizard(true);
  };

  const addWizardColumn = () => {
    setWizardData(prev => ({
      ...prev,
      columns: [...prev.columns, { 
        column_name: '', 
        column_type: 'text', 
        is_required: false, 
        default_value: '' 
      }]
    }));
  };

  const updateWizardColumn = (index, field, value) => {
    setWizardData(prev => ({
      ...prev,
      columns: prev.columns.map((col, i) => 
        i === index ? { ...col, [field]: value } : col
      )
    }));
  };

  const removeWizardColumn = (index) => {
    setWizardData(prev => ({
      ...prev,
      columns: prev.columns.filter((_, i) => i !== index)
    }));
  };

  const completeWizardSetup = async () => {
    try {
      setIsLoading(true);
      
      // Step 1: Create the table
      const tableResponse = await createTable(wizardData.table);
      const newTableId = tableResponse.data.id;
      
      // Step 2: Create columns
      for (const column of wizardData.columns) {
        if (column.column_name.trim()) {
          await createTableColumn(newTableId, column);
        }
      }
      
      // Step 3: Refresh tables and select the new one
      await loadTables();
      const createdTable = tables.find(t => t.id === newTableId) || 
                          { id: newTableId, ...wizardData.table };
      setSelectedTable(createdTable);
      
      // Step 4: Navigate based on user choice
      if (wizardData.importData) {
        setActiveView('data');
        setShowBulkUploadModal(true);
      } else {
        setActiveView('data');
      }
      
      setShowSetupWizard(false);
      setSuccess('Table created successfully! Ready to add data.');
      setTimeout(() => setSuccess(''), 3000);
      
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to complete setup');
    } finally {
      setIsLoading(false);
    }
  };

  // CSV Upload Functions
  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'text/csv') {
      setCsvFile(file);
      parseCsvFile(file);
    } else {
      setError('Please select a valid CSV file');
    }
  };

  const parseCsvFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target.result;
      const lines = text.split('\n').filter(line => line.trim());
      
      if (lines.length > 0) {
        const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));
        const data = lines.slice(1).map(line => {
          const values = line.split(',').map(v => v.trim().replace(/"/g, ''));
          const row = {};
          headers.forEach((header, index) => {
            row[header] = values[index] || '';
          });
          return row;
        });
        
        setCsvHeaders(headers);
        setCsvData(data);
        
        // Auto-map columns with same names
        const autoMapping = {};
        headers.forEach(header => {
          const matchingColumn = tableColumns.find(col => 
            col.column_name.toLowerCase() === header.toLowerCase()
          );
          if (matchingColumn) {
            autoMapping[header] = matchingColumn.column_name;
          }
        });
        setColumnMapping(autoMapping);
      }
    };
    reader.readAsText(file);
  };

  const handleBulkUpload = async () => {
    try {
      setIsUploading(true);
      setUploadProgress(0);
      
      // Transform CSV data according to column mapping
      const transformedData = csvData.map(row => {
        const newRow = {};
        Object.entries(columnMapping).forEach(([csvColumn, tableColumn]) => {
          if (tableColumn && row[csvColumn] !== undefined) {
            newRow[tableColumn] = row[csvColumn];
          }
        });
        return newRow;
      });
      
      // Upload in batches to show progress
      const batchSize = 50;
      const batches = [];
      for (let i = 0; i < transformedData.length; i += batchSize) {
        batches.push(transformedData.slice(i, i + batchSize));
      }
      
      for (let i = 0; i < batches.length; i++) {
        await bulkCreateRecords(selectedTable.id, batches[i]);
        setUploadProgress(Math.round(((i + 1) / batches.length) * 100));
      }
      
      setShowBulkUploadModal(false);
      await loadTableData();
      await loadTables(); // Refresh to update record counts
      setSuccess(`Successfully uploaded ${transformedData.length} records!`);
      setTimeout(() => setSuccess(''), 3000);
      
      // Reset upload state
      setCsvFile(null);
      setCsvData([]);
      setCsvHeaders([]);
      setColumnMapping({});
      
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to upload data');
    } finally {
      setIsUploading(false);
      setUploadProgress(0);
    }
  };

  // Existing CRUD functions (keeping the same as before)
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

  // UI Helper Functions
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

  const selectTableAndNavigate = (table, view = 'columns') => {
    setSelectedTable(table);
    setActiveView(view);
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
        {/* <div className="d-flex gap-2 align-items-center">
          <Badge bg="info" className="py-2 px-3">
            <FontAwesomeIcon icon={faDatabase} className="me-1" />
            {tables.length} Table{tables.length !== 1 ? 's' : ''}
          </Badge>
          <Button variant="success" onClick={startQuickSetup}>
            <FontAwesomeIcon icon={faMagic} className="me-2" />
            Quick Setup
          </Button>
        </div> */}
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
                  <Button variant="outline-primary" onClick={() => openTableModal()}>
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
                              <div className="d-flex align-items-center">
                                <strong 
                                  className="text-primary me-2" 
                                  style={{ cursor: 'pointer' }}
                                  onClick={() => selectTableAndNavigate(table)}
                                >
                                  {table.table_name}
                                </strong>
                                {table.column_count > 0 && (
                                  <OverlayTrigger
                                    placement="top"
                                    overlay={<Tooltip>Click to view Column</Tooltip>}
                                  >
                                    <Button
                                      variant="link"
                                      size="sm"
                                      className="p-0 text-success"
                                      onClick={() => selectTableAndNavigate(table)}
                                    >
                                      <FontAwesomeIcon icon={faArrowRight} />
                                    </Button>
                                  </OverlayTrigger>
                                )}
                              </div>
                            </td>
                            <td>{table.description || '-'}</td>
                            <td>
                              <Badge 
                                bg={table.column_count > 0 ? "info" : "light"} 
                                text={table.column_count > 0 ? "white" : "dark"}
                                style={{ cursor: table.column_count > 0 ? 'pointer' : 'default' }}
                                onClick={() => table.column_count > 0 && selectTableAndNavigate(table, 'columns')}
                              >
                                {table.column_count || 0}
                              </Badge>
                            </td>
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
                    <div className="d-flex justify-content-center gap-2">
                      <Button variant="success" onClick={startQuickSetup}>
                        <FontAwesomeIcon icon={faMagic} className="me-2" />
                        Quick Setup
                      </Button>
                      <Button variant="outline-primary" onClick={() => openTableModal()}>
                        <FontAwesomeIcon icon={faPlus} className="me-2" />
                        Create Table
                      </Button>
                    </div>
                  </div>
                )}
              </Tab.Pane>

              {/* Columns Tab */}
              <Tab.Pane eventKey="columns">
                {selectedTable ? (
                  <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h5 className="mb-0">Columns for {selectedTable.table_name}</h5>
                      <div className="d-flex gap-2">
                        {tableColumns.length > 0 && (
                          <Button 
                            variant="outline-success" 
                            onClick={() => setActiveView('data')}
                          >
                            <FontAwesomeIcon icon={faDatabase} className="me-2" />
                            Go to Data
                          </Button>
                        )}
                        <Button variant="success" onClick={() => openColumnModal()}>
                          <FontAwesomeIcon icon={faPlus} className="me-2" />
                          Add Column
                        </Button>
                      </div>
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
                        <div className="text-center mt-3">
                          <Button 
                            variant="success" 
                            onClick={() => setActiveView('data')}
                          >
                            <FontAwesomeIcon icon={faChevronRight} className="me-2" />
                            Ready to Add Data
                          </Button>
                        </div>
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
                          <>
                            <Button 
                              variant="outline-info" 
                              onClick={() => setShowBulkUploadModal(true)}
                            >
                              <FontAwesomeIcon icon={faUpload} className="me-2" />
                              Bulk Upload
                            </Button>
                            <Button variant="success" onClick={() => openDataModal()}>
                              <FontAwesomeIcon icon={faPlus} className="me-2" />
                              Add Record
                            </Button>
                          </>
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
                        <div className="d-flex justify-content-center gap-2">
                          <Button variant="primary" onClick={() => openDataModal()}>
                            <FontAwesomeIcon icon={faPlus} className="me-2" />
                            Add First Record
                          </Button>
                          <Button 
                            variant="outline-info" 
                            onClick={() => setShowBulkUploadModal(true)}
                          >
                            <FontAwesomeIcon icon={faUpload} className="me-2" />
                            Bulk Upload
                          </Button>
                        </div>
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

      {/* Quick Setup Wizard Modal */}
      <Modal show={showSetupWizard} onHide={() => setShowSetupWizard(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faMagic} className="me-2" />
            Quick Table Setup - Step {wizardStep} of 3
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProgressBar 
            now={(wizardStep / 3) * 100} 
            variant="success" 
            className="mb-4"
            style={{ height: '8px' }}
          />

          {wizardStep === 1 && (
            <div>
              <h5 className="mb-3">
                <FontAwesomeIcon icon={faTable} className="me-2" />
                Step 1: Table Information
              </h5>
              <Row>
                <Col md={8}>
                  <Form.Group className="mb-3">
                    <Form.Label>Table Name *</Form.Label>
                    <Form.Control
                      type="text"
                      value={wizardData.table.table_name}
                      onChange={(e) => setWizardData(prev => ({
                        ...prev,
                        table: { ...prev.table, table_name: e.target.value }
                      }))}
                      placeholder="e.g., Directors, Cinematographers, Customers"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={2}
                      value={wizardData.table.description}
                      onChange={(e) => setWizardData(prev => ({
                        ...prev,
                        table: { ...prev.table, description: e.target.value }
                      }))}
                      placeholder="Optional description"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
          )}

          {wizardStep === 2 && (
            <div>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">
                  <FontAwesomeIcon icon={faColumns} className="me-2" />
                  Step 2: Define Columns
                </h5>
                <Button variant="outline-success" onClick={addWizardColumn}>
                  <FontAwesomeIcon icon={faPlus} className="me-2" />
                  Add Column
                </Button>
              </div>

              {wizardData.columns.length === 0 ? (
                <div className="text-center py-4 border rounded bg-light">
                  <FontAwesomeIcon icon={faColumns} size="2x" className="text-muted mb-2" />
                  <p className="text-muted mb-2">No columns added yet</p>
                  <Button variant="primary" onClick={addWizardColumn}>
                    Add Your First Column
                  </Button>
                </div>
              ) : (
                <div className="border rounded p-3">
                  {wizardData.columns.map((column, index) => (
                    <Card key={index} className="mb-3">
                      <Card.Body className="py-3">
                        <Row className="align-items-center">
                          <Col md={3}>
                            <Form.Group>
                              <Form.Label className="small">Column Name</Form.Label>
                              <Form.Control
                                type="text"
                                value={column.column_name}
                                onChange={(e) => updateWizardColumn(index, 'column_name', e.target.value)}
                                placeholder="Column name"
                                size="sm"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={2}>
                            <Form.Group>
                              <Form.Label className="small">Type</Form.Label>
                              <Form.Select
                                value={column.column_type}
                                onChange={(e) => updateWizardColumn(index, 'column_type', e.target.value)}
                                size="sm"
                              >
                                {Object.entries(COLUMN_TYPES).map(([key, type]) => (
                                  <option key={key} value={key}>{type.label}</option>
                                ))}
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col md={3}>
                            <Form.Group>
                              <Form.Label className="small">Default Value</Form.Label>
                              <Form.Control
                                type="text"
                                value={column.default_value}
                                onChange={(e) => updateWizardColumn(index, 'default_value', e.target.value)}
                                placeholder="Optional"
                                size="sm"
                              />
                            </Form.Group>
                          </Col>
                          <Col md={2}>
                            <Form.Group>
                              <Form.Label className="small">Settings</Form.Label>
                              <div>
                                <Form.Check
                                  type="checkbox"
                                  label="Required"
                                  checked={column.is_required}
                                  onChange={(e) => updateWizardColumn(index, 'is_required', e.target.checked)}
                                  size="sm"
                                />
                              </div>
                            </Form.Group>
                          </Col>
                          <Col md={2} className="text-end">
                            <Button
                              variant="outline-danger"
                              size="sm"
                              onClick={() => removeWizardColumn(index)}
                            >
                              <FontAwesomeIcon icon={faTrash} />
                            </Button>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          )}

          {wizardStep === 3 && (
            <div>
              <h5 className="mb-3">
                <FontAwesomeIcon icon={faClipboardList} className="me-2" />
                Step 3: Ready to Create!
              </h5>
              
              <Card className="mb-3">
                <Card.Body>
                  <h6>Table Summary:</h6>
                  <p><strong>Name:</strong> {wizardData.table.table_name}</p>
                  <p><strong>Description:</strong> {wizardData.table.description || 'None'}</p>
                  <p><strong>Columns:</strong> {wizardData.columns.length}</p>
                  
                  {wizardData.columns.length > 0 && (
                    <div>
                      <h6 className="mt-3">Columns:</h6>
                      <ul className="list-unstyled">
                        {wizardData.columns.map((col, index) => (
                          <li key={index} className="mb-1">
                            <FontAwesomeIcon 
                              icon={COLUMN_TYPES[col.column_type]?.icon || faAlignLeft} 
                              className="me-2 text-muted" 
                            />
                            <strong>{col.column_name}</strong> 
                            <Badge bg="secondary" className="ms-2">
                              {COLUMN_TYPES[col.column_type]?.label}
                            </Badge>
                            {col.is_required && (
                              <Badge bg="danger" className="ms-1">Required</Badge>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </Card.Body>
              </Card>

              <Card>
                <Card.Body>
                  <h6>What's next?</h6>
                  <Form.Check
                    type="radio"
                    name="nextStep"
                    label="I'll add data manually"
                    checked={!wizardData.importData}
                    onChange={() => setWizardData(prev => ({ ...prev, importData: false }))}
                    className="mb-2"
                  />
                  <Form.Check
                    type="radio"
                    name="nextStep"
                    label="I want to upload data from a CSV file"
                    checked={wizardData.importData}
                    onChange={() => setWizardData(prev => ({ ...prev, importData: true }))}
                  />
                  {wizardData.importData && (
                    <small className="text-muted d-block mt-1">
                      You'll be taken to the bulk upload screen after table creation.
                    </small>
                  )}
                </Card.Body>
              </Card>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button 
            variant="secondary" 
            onClick={() => wizardStep > 1 ? setWizardStep(wizardStep - 1) : setShowSetupWizard(false)}
          >
            {wizardStep > 1 ? 'Previous' : 'Cancel'}
          </Button>
          
          {wizardStep < 3 ? (
            <Button 
              variant="primary" 
              onClick={() => setWizardStep(wizardStep + 1)}
              disabled={
                (wizardStep === 1 && !wizardData.table.table_name.trim()) ||
                (wizardStep === 2 && wizardData.columns.length === 0)
              }
            >
              Next <FontAwesomeIcon icon={faChevronRight} className="ms-1" />
            </Button>
          ) : (
            <Button 
              variant="success" 
              onClick={completeWizardSetup}
              disabled={isLoading}
            >
              {isLoading ? <Spinner size="sm" className="me-2" /> : null}
              Create Table & Columns
            </Button>
          )}
        </Modal.Footer>
      </Modal>

      {/* Bulk Upload Modal */}
      <Modal show={showBulkUploadModal} onHide={() => setShowBulkUploadModal(false)} size="xl">
        <Modal.Header closeButton>
          <Modal.Title>
            <FontAwesomeIcon icon={faUpload} className="me-2" />
            Bulk Upload Data to {selectedTable?.table_name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!csvFile ? (
            <div>
              <div className="text-center py-4 border-2 border-dashed rounded mb-4" 
                   style={{ borderColor: '#dee2e6', cursor: 'pointer' }}
                   onClick={() => fileInputRef.current?.click()}>
                <FontAwesomeIcon icon={faFileImport} size="3x" className="text-muted mb-3" />
                <h5>Upload CSV File</h5>
                <p className="text-muted">Click to select or drag and drop your CSV file here</p>
                <Button variant="primary">
                  <FontAwesomeIcon icon={faUpload} className="me-2" />
                  Choose File
                </Button>
              </div>
              
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv"
                onChange={handleFileSelect}
                style={{ display: 'none' }}
              />
              
              <Alert variant="info">
                <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                <strong>CSV Format Requirements:</strong>
                <ul className="mb-0 mt-2">
                  <li>First row should contain column headers</li>
                  <li>Columns should be separated by commas</li>
                  <li>Text containing commas should be enclosed in quotes</li>
                  <li>Empty values are allowed</li>
                </ul>
              </Alert>
            </div>
          ) : (
            <div>
              <Alert variant="success">
                <FontAwesomeIcon icon={faCheck} className="me-2" />
                File loaded: <strong>{csvFile.name}</strong> ({csvData.length} records)
              </Alert>

              <h6>Column Mapping</h6>
              <p className="text-muted small">
                Map your CSV columns to table columns. Only mapped columns will be imported.
              </p>
              
              <Row>
                {csvHeaders.map((header, index) => (
                  <Col md={6} key={index} className="mb-3">
                    <Card>
                      <Card.Body className="py-2">
                        <Form.Group>
                          <Form.Label className="small">
                            CSV Column: <strong>{header}</strong>
                          </Form.Label>
                          <Form.Select
                            value={columnMapping[header] || ''}
                            onChange={(e) => setColumnMapping(prev => ({
                              ...prev,
                              [header]: e.target.value
                            }))}
                            size="sm"
                          >
                            <option value="">Don't import</option>
                            {tableColumns.map(col => (
                              <option key={col.id} value={col.column_name}>
                                {col.column_name} ({COLUMN_TYPES[col.column_type]?.label})
                              </option>
                            ))}
                          </Form.Select>
                          {csvData.length > 0 && (
                            <Form.Text className="text-muted">
                              Sample: {csvData[0][header] || 'Empty'}
                            </Form.Text>
                          )}
                        </Form.Group>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>

              {Object.values(columnMapping).filter(Boolean).length > 0 && (
                <Alert variant="info">
                  <FontAwesomeIcon icon={faInfoCircle} className="me-2" />
                  Ready to import {csvData.length} records with {Object.values(columnMapping).filter(Boolean).length} mapped columns.
                </Alert>
              )}

              {isUploading && (
                <div className="mt-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span>Uploading data...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <ProgressBar now={uploadProgress} variant="success" />
                </div>
              )}
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => {
            setShowBulkUploadModal(false);
            setCsvFile(null);
            setCsvData([]);
            setCsvHeaders([]);
            setColumnMapping({});
          }}>
            Cancel
          </Button>
          
          {csvFile && (
            <Button 
              variant="success" 
              onClick={handleBulkUpload}
              disabled={isUploading || Object.values(columnMapping).filter(Boolean).length === 0}
            >
              {isUploading ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  Uploading...
                </>
              ) : (
                <>
                  <FontAwesomeIcon icon={faUpload} className="me-2" />
                  Import {csvData.length} Records
                </>
              )}
            </Button>
          )}
        </Modal.Footer>
      </Modal>

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
        
        .border-dashed {
          border-style: dashed !important;
        }
        
        .cursor-pointer {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default DynamicTables;