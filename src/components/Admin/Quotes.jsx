

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
                    {/* <td>{proposal.shoot_dates}</td> */}
                    <td>
  {proposal.shoot_dates
    ? new Date(proposal.shoot_dates).toLocaleDateString('en-GB')  // dd/mm/yyyy
    : '-'}
</td>
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