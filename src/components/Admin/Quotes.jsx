// // import React, { useState, useEffect } from 'react';
// // import { Table, Form, Button, Pagination } from 'react-bootstrap';
// // import { fetchProposals, downloadProposal } from '../../services/api';

// // function Quotes() {
// //   const [proposals, setProposals] = useState([]);
// //   const [search, setSearch] = useState('');
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);

// //   useEffect(() => {
// //     const loadProposals = async () => {
// //       try {
// //         const response = await fetchProposals(search, currentPage);
// //         setProposals(response.data.data);
// //         setTotalPages(response.data.totalPages);
// //       } catch (error) {
// //         console.error('Error loading proposals:', error);
// //       }
// //     };
// //     loadProposals();
// //   }, [search, currentPage]);

// //   const handleSearch = (e) => {
// //     e.preventDefault();
// //     setCurrentPage(1); // Reset to first page on new search
// //   };

// //   const handleDownload = async (quoteId) => {
// //     try {
// //       const response = await downloadProposal(quoteId);
// //       const url = window.URL.createObjectURL(new Blob([response.data]));
// //       const link = document.createElement('a');
// //       link.href = url;
// //       link.setAttribute('download', `${quoteId}.pdf`);
// //       document.body.appendChild(link);
// //       link.click();
// //     } catch (error) {
// //       console.error('Error downloading proposal:', error);
// //     }
// //   };

// //   return (
// //     <div>
// //       <Form onSubmit={handleSearch} className="form-inline mb-3">
// //         <Form.Control
// //           type="text"
// //           value={search}
// //           onChange={(e) => setSearch(e.target.value)}
// //           placeholder="Search Quote ID, Client, Project, Email"
// //           className="mr-2"
// //         />
// //         <Button type="submit" variant="primary">
// //           Search
// //         </Button>
// //       </Form>

// //       <Table bordered striped>
// //         <thead>
// //           <tr>
// //             <th>Quote ID</th>
// //             <th>Client</th>
// //             <th>Email</th>
// //             <th>Project</th>
// //             <th>Shoot Dates</th>
// //             <th>Total</th>
// //             <th>Download</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {proposals.length > 0 ? (
// //             proposals.map(proposal => (
// //               <tr key={proposal.quote_id}>
// //                 <td>{proposal.quote_id}</td>
// //                 <td>{proposal.client_name}</td>
// //                 <td>{proposal.your_email}</td>
// //                 <td>{proposal.project_title}</td>
// //                 <td>{proposal.shoot_dates}</td>
// //                 <td>₹{proposal.total.toLocaleString()}</td>
// //                 <td>
// //                   <Button 
// //                     variant="primary" 
// //                     size="sm"
// //                     onClick={() => handleDownload(proposal.quote_id)}
// //                   >
// //                     Download
// //                   </Button>
// //                 </td>
// //               </tr>
// //             ))
// //           ) : (
// //             <tr>
// //               <td colSpan="7" className="text-center text-muted">
// //                 No results found.
// //               </td>
// //             </tr>
// //           )}
// //         </tbody>
// //       </Table>

// //       {totalPages > 1 && (
// //         <Pagination className="justify-content-center">
// //           {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
// //             <Pagination.Item
// //               key={page}
// //               active={page === currentPage}
// //               onClick={() => setCurrentPage(page)}
// //             >
// //               {page}
// //             </Pagination.Item>
// //           ))}
// //         </Pagination>
// //       )}
// //     </div>
// //   );
// // }

// // export default Quotes;
// import React, { useState, useEffect } from 'react';
// import { 
//   Table, 
//   Form, 
//   Button, 
//   Pagination, 
//   Spinner, 
//   Badge, 
//   Card, 
//   InputGroup, 
//   Alert,
//   OverlayTrigger,
//   Tooltip 
// } from 'react-bootstrap';
// import { fetchProposals, downloadProposal } from '../../services/api';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { 
//   faSearch, 
//   faFileDownload, 
//   faSortUp, 
//   faSortDown, 
//   faSort,
//   faInfoCircle,
//   faFileInvoiceDollar,
//   faCheck,
//   faTimes
// } from '@fortawesome/free-solid-svg-icons';

// function Quotes() {
//   const [proposals, setProposals] = useState([]);
//   const [search, setSearch] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [sortField, setSortField] = useState('quote_id');
//   const [sortDirection, setSortDirection] = useState('asc');
//   const [downloading, setDownloading] = useState(null);
  
//   useEffect(() => {
//     loadProposals();
//   }, [currentPage, sortField, sortDirection]);
  
//   const loadProposals = async () => {
//     setIsLoading(true);
//     setError('');
//     try {
//       const response = await fetchProposals(search, currentPage, sortField, sortDirection);
//       setProposals(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.error('Error loading proposals:', error);
//       setError('Failed to load quotes. Please try again later.');
//     } finally {
//       setIsLoading(false);
//     }
//   };
  
//   const handleSearch = (e) => {
//     e.preventDefault();
//     setCurrentPage(1); // Reset to first page on new search
//     loadProposals();
//   };
  
//   const handleSort = (field) => {
//     if (sortField === field) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortField(field);
//       setSortDirection('asc');
//     }
//   };
  
//   const handleDownload = async (quoteId) => {
//     setDownloading(quoteId);
//     try {
//       const response = await downloadProposal(quoteId);
//       const url = window.URL.createObjectURL(new Blob([response.data]));
//       const link = document.createElement('a');
//       link.href = url;
//       link.setAttribute('download', `${quoteId}.pdf`);
//       document.body.appendChild(link);
//       link.click();
      
//       setSuccess(`Quote #${quoteId} downloaded successfully!`);
//       // Auto-hide success message after 3 seconds
//       setTimeout(() => setSuccess(''), 3000);
//     } catch (error) {
//       console.error('Error downloading proposal:', error);
//       setError(`Failed to download quote #${quoteId}. Please try again.`);
//     } finally {
//       setDownloading(null);
//     }
//   };
  
//   const SortIcon = ({ field }) => {
//     if (sortField !== field) {
//       return <FontAwesomeIcon icon={faSort} className="ms-1 text-muted" size="sm" />;
//     }
//     return sortDirection === 'asc' 
//       ? <FontAwesomeIcon icon={faSortUp} className="ms-1 text-primary" size="sm" /> 
//       : <FontAwesomeIcon icon={faSortDown} className="ms-1 text-primary" size="sm" />;
//   };

//   // Filter for when searching client immediately without backend filtering
//   const filteredProposals = search 
//     ? proposals.filter(proposal => 
//         proposal.quote_id.toLowerCase().includes(search.toLowerCase()) ||
//         proposal.client_name.toLowerCase().includes(search.toLowerCase()) ||
//         proposal.your_email.toLowerCase().includes(search.toLowerCase()) ||
//         proposal.project_title.toLowerCase().includes(search.toLowerCase())
//       )
//     : proposals;

//   return (
//     <div className="quotes-component">
//       <div className="d-flex justify-content-between align-items-center mb-4">
//         <div>
//           <h4 className="mb-1">Quote Management</h4>
//           <p className="text-muted mb-0">View and download client quotes and proposals</p>
//         </div>
//         <Badge bg="info" className="py-2 px-3">
//           <FontAwesomeIcon icon={faInfoCircle} className="me-1" />
//           {proposals.length} Quote{proposals.length !== 1 ? 's' : ''}
//         </Badge>
//       </div>

//       {error && (
//         <Alert 
//           variant="danger" 
//           dismissible 
//           onClose={() => setError('')}
//           className="border-0 shadow-sm"
//         >
//           <FontAwesomeIcon icon={faTimes} className="me-2" />
//           {error}
//         </Alert>
//       )}

//       {success && (
//         <Alert 
//           variant="success" 
//           dismissible 
//           onClose={() => setSuccess('')}
//           className="border-0 shadow-sm"
//         >
//           <FontAwesomeIcon icon={faCheck} className="me-2" />
//           {success}
//         </Alert>
//       )}
      
//       <Card className="shadow-sm border-0 mb-4">
//         <Card.Body>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <Card.Title className="mb-0">Search Quotes</Card.Title>
//           </div>
          
//           <Form onSubmit={handleSearch}>
//             <InputGroup>
//               <Form.Control
//                 type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder="Search by Quote ID, Client, Project, or Email"
//                 aria-label="Search quotes"
//               />
//               <Button type="submit" variant="primary">
//                 <FontAwesomeIcon icon={faSearch} className="me-2" />
//                 Search
//               </Button>
//             </InputGroup>
//             <Form.Text className="text-muted">
//               Press Enter or click Search to find quotes
//             </Form.Text>
//           </Form>
//         </Card.Body>
//       </Card>
      
//       <Card className="shadow-sm border-0">
//         <Card.Body>
//           <div className="d-flex justify-content-between align-items-center mb-3">
//             <Card.Title className="mb-0">Quotes List</Card.Title>
//             {currentPage > 0 && totalPages > 0 && (
//               <div className="text-muted">
//                 Page {currentPage} of {totalPages}
//               </div>
//             )}
//           </div>
          
//           {isLoading && !proposals.length ? (
//             <div className="text-center py-5">
//               <Spinner animation="border" variant="primary" />
//               <p className="mt-3">Loading quotes...</p>
//             </div>
//           ) : filteredProposals.length > 0 ? (
//             <div className="table-responsive">
//               <Table hover bordered className="mb-0 bg-white">
//                 <thead className="bg-light">
//                   <tr>
//                     <th 
//                       className="cursor-pointer" 
//                       onClick={() => handleSort('quote_id')}
//                       style={{ whiteSpace: 'nowrap' }}
//                     >
//                       Quote ID <SortIcon field="quote_id" />
//                     </th>
//                     <th 
//                       className="cursor-pointer" 
//                       onClick={() => handleSort('client_name')}
//                     >
//                       Client <SortIcon field="client_name" />
//                     </th>
//                     <th 
//                       className="cursor-pointer" 
//                       onClick={() => handleSort('your_email')}
//                     >
//                       Email <SortIcon field="your_email" />
//                     </th>
//                     <th 
//                       className="cursor-pointer" 
//                       onClick={() => handleSort('project_title')}
//                     >
//                       Project <SortIcon field="project_title" />
//                     </th>
//                     <th 
//                       className="cursor-pointer" 
//                       onClick={() => handleSort('shoot_dates')}
//                     >
//                       Shoot Dates <SortIcon field="shoot_dates" />
//                     </th>
//                     <th 
//                       className="cursor-pointer text-end" 
//                       onClick={() => handleSort('total')}
//                     >
//                       Total <SortIcon field="total" />
//                     </th>
//                     <th style={{ width: '130px' }}>Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {filteredProposals.map(proposal => (
//                     <tr key={proposal.quote_id}>
//                       <td><Badge bg="light" text="dark" className="py-2">{proposal.quote_id}</Badge></td>
//                       <td className="fw-bold">{proposal.client_name}</td>
//                       <td>{proposal.your_email}</td>
//                       <td>{proposal.project_title}</td>
//                       <td>{proposal.shoot_dates}</td>
//                       <td className="fw-bold text-end rate-display">₹{proposal.total.toLocaleString()}</td>
//                       <td>
//                         <OverlayTrigger
//                           placement="top"
//                           overlay={<Tooltip>Download Quote PDF</Tooltip>}
//                         >
//                           <Button
//                             variant="outline-primary"
//                             size="sm"
//                             onClick={() => handleDownload(proposal.quote_id)}
//                             disabled={downloading === proposal.quote_id}
//                           >
//                             {downloading === proposal.quote_id ? (
//                               <>
//                                 <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true" />
//                                 <span className="ms-1">Downloading...</span>
//                               </>
//                             ) : (
//                               <>
//                                 <FontAwesomeIcon icon={faFileDownload} />
//                                 <span className="ms-1">Download</span>
//                               </>
//                             )}
//                           </Button>
//                         </OverlayTrigger>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </Table>
//             </div>
//           ) : (
//             <div className="text-center py-5">
//               <FontAwesomeIcon icon={faFileInvoiceDollar} size="3x" className="text-muted mb-3" />
//               {search ? (
//                 <>
//                   <p>No quotes found matching "{search}"</p>
//                   <Button 
//                     variant="link" 
//                     onClick={() => {
//                       setSearch('');
//                       loadProposals();
//                     }}
//                   >
//                     Clear search and show all quotes
//                   </Button>
//                 </>
//               ) : (
//                 <p>No quotes available yet.</p>
//               )}
//             </div>
//           )}
//         </Card.Body>
//       </Card>
      
//       {totalPages > 1 && (
//         <div className="d-flex justify-content-center mt-4">
//           <Pagination>
//             <Pagination.First 
//               onClick={() => setCurrentPage(1)} 
//               disabled={currentPage === 1 || isLoading}
//             />
//             <Pagination.Prev 
//               onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
//               disabled={currentPage === 1 || isLoading}
//             />
            
//             {[...Array(totalPages)].map((_, index) => {
//               const pageNumber = index + 1;
//               // Show current page, first and last pages, and one page before/after current
//               if (
//                 pageNumber === 1 || 
//                 pageNumber === totalPages || 
//                 (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
//               ) {
//                 return (
//                   <Pagination.Item
//                     key={pageNumber}
//                     active={pageNumber === currentPage}
//                     onClick={() => setCurrentPage(pageNumber)}
//                     disabled={isLoading}
//                   >
//                     {pageNumber}
//                   </Pagination.Item>
//                 );
//               } else if (
//                 (pageNumber === 2 && currentPage > 3) || 
//                 (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
//               ) {
//                 return <Pagination.Ellipsis key={pageNumber} />;
//               }
//               return null;
//             })}
            
//             <Pagination.Next 
//               onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
//               disabled={currentPage === totalPages || isLoading}
//             />
//             <Pagination.Last 
//               onClick={() => setCurrentPage(totalPages)} 
//               disabled={currentPage === totalPages || isLoading}
//             />
//           </Pagination>
//         </div>
//       )}

//       {/* CSS for animation, hover effects, and rate display */}
//       <style jsx>{`
//         .cursor-pointer {
//           cursor: pointer;
//         }
        
//         .table-responsive {
//           overflow-x: auto;
//           -webkit-overflow-scrolling: touch;
//         }
        
//         .table tbody tr {
//           transition: all 0.2s ease;
//         }
        
//         .table tbody tr:hover {
//           background-color: rgba(13, 110, 253, 0.05) !important;
//         }
        
//         .quotes-component .card {
//           transition: box-shadow 0.3s ease;
//         }
        
//         .quotes-component .card:hover {
//           box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.08) !important;
//         }
        
//         .rate-display {
//           font-family: monospace;
//           white-space: nowrap;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Quotes;
import React, { useState, useEffect } from 'react';
import { Table, Form, Button, Pagination, Spinner, Badge, Card, InputGroup, Alert } from 'react-bootstrap';
import { fetchProposals, downloadProposal } from '../../services/api';
import { Search, Download, ArrowDown, ArrowUp } from 'react-bootstrap-icons';

function Quotes() {
  const [proposals, setProposals] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [sortField, setSortField] = useState('quote_id');
  const [sortDirection, setSortDirection] = useState('asc');
  const [downloading, setDownloading] = useState(null);
  
  useEffect(() => {
    const loadProposals = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetchProposals(search, currentPage, sortField, sortDirection);
        setProposals(response.data.data);
        setTotalPages(response.data.totalPages);
      } catch (error) {
        console.error('Error loading proposals:', error);
        setError('Failed to load quotes. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProposals();
  }, [search, currentPage, sortField, sortDirection]);
  
  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page on new search
  };
  
  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };
  
  const handleDownload = async (quoteId) => {
    setDownloading(quoteId);
    try {
      const response = await downloadProposal(quoteId);
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${quoteId}.pdf`);
      document.body.appendChild(link);
      link.click();
    } catch (error) {
      console.error('Error downloading proposal:', error);
      setError(`Failed to download quote #${quoteId}. Please try again.`);
    } finally {
      setDownloading(null);
    }
  };
  
  const SortIcon = ({ field }) => {
    if (sortField !== field) return null;
    return sortDirection === 'asc' ? <ArrowUp className="ms-1" size={12} /> : <ArrowDown className="ms-1" size={12} />;
  };

  return (
    <Card className="shadow-sm">
      <Card.Header className="bg-white">
        <h4 className="mb-0">Quote Management</h4>
      </Card.Header>
      <Card.Body>
        {error && (
          <Alert variant="danger" dismissible onClose={() => setError(null)}>
            {error}
          </Alert>
        )}
        
        <Form onSubmit={handleSearch} className="mb-4">
          <InputGroup>
            <Form.Control
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by Quote ID, Client, Project, or Email"
              aria-label="Search quotes"
            />
            <Button type="submit" variant="primary">
              <Search className="me-1" /> Search
            </Button>
          </InputGroup>
          <Form.Text className="text-muted">
            Press Enter or click Search to find quotes
          </Form.Text>
        </Form>
        
        <div className="table-responsive">
          <Table hover bordered className="align-middle">
            <thead className="bg-light">
              <tr>
                <th className="cursor-pointer" onClick={() => handleSort('quote_id')}>
                  Quote ID <SortIcon field="quote_id" />
                </th>
                <th className="cursor-pointer" onClick={() => handleSort('client_name')}>
                  Client <SortIcon field="client_name" />
                </th>
                <th className="cursor-pointer" onClick={() => handleSort('your_email')}>
                  Email <SortIcon field="your_email" />
                </th>
                <th className="cursor-pointer" onClick={() => handleSort('project_title')}>
                  Project <SortIcon field="project_title" />
                </th>
                <th className="cursor-pointer" onClick={() => handleSort('shoot_dates')}>
                  Shoot Dates <SortIcon field="shoot_dates" />
                </th>
                <th className="cursor-pointer" onClick={() => handleSort('total')}>
                  Total <SortIcon field="total" />
                </th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <Spinner animation="border" role="status" variant="primary">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    <p className="mt-2 text-muted">Loading quotes...</p>
                  </td>
                </tr>
              ) : proposals.length > 0 ? (
                proposals.map(proposal => (
                  <tr key={proposal.quote_id}>
                    <td><Badge bg="light" text="dark">{proposal.quote_id}</Badge></td>
                    <td className="fw-bold">{proposal.client_name}</td>
                    <td>{proposal.your_email}</td>
                    <td>{proposal.project_title}</td>
                    <td>{proposal.shoot_dates}</td>
                    <td className="fw-bold text-end">₹{proposal.total.toLocaleString()}</td>
                    <td>
                      <Button
                        variant="outline-primary"
                        size="sm"
                        onClick={() => handleDownload(proposal.quote_id)}
                        disabled={downloading === proposal.quote_id}
                      >
                        {downloading === proposal.quote_id ? (
                          <>
                            <Spinner animation="border" size="sm" role="status" className="me-1" />
                            Downloading...
                          </>
                        ) : (
                          <>
                            <Download className="me-1" /> Download
                          </>
                        )}
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" className="text-center py-4">
                    <p className="text-muted mb-0">No quotes found matching your search criteria.</p>
                    {search && (
                      <Button 
                        variant="link" 
                        onClick={() => setSearch('')}
                        className="mt-2"
                      >
                        Clear search and show all quotes
                      </Button>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
        
        {totalPages > 1 && (
          <div className="d-flex justify-content-between align-items-center mt-3">
            <p className="text-muted mb-0">
              Page {currentPage} of {totalPages}
            </p>
            <Pagination className="mb-0">
              <Pagination.First 
                onClick={() => setCurrentPage(1)} 
                disabled={currentPage === 1 || isLoading}
              />
              <Pagination.Prev 
                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} 
                disabled={currentPage === 1 || isLoading}
              />
              
              {[...Array(totalPages)].map((_, index) => {
                const pageNumber = index + 1;
                // Show current page, first and last pages, and one page before/after current
                if (
                  pageNumber === 1 || 
                  pageNumber === totalPages || 
                  (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                ) {
                  return (
                    <Pagination.Item
                      key={pageNumber}
                      active={pageNumber === currentPage}
                      onClick={() => setCurrentPage(pageNumber)}
                      disabled={isLoading}
                    >
                      {pageNumber}
                    </Pagination.Item>
                  );
                } else if (
                  (pageNumber === 2 && currentPage > 3) || 
                  (pageNumber === totalPages - 1 && currentPage < totalPages - 2)
                ) {
                  return <Pagination.Ellipsis key={pageNumber} />;
                }
                return null;
              })}
              
              <Pagination.Next 
                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} 
                disabled={currentPage === totalPages || isLoading}
              />
              <Pagination.Last 
                onClick={() => setCurrentPage(totalPages)} 
                disabled={currentPage === totalPages || isLoading}
              />
            </Pagination>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default Quotes;