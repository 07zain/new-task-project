
import React from 'react';
import './Pagination.css';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa6';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <div className="pagination">
      <div className="pagination-left">
        <span>Showing {currentPage} from {totalPages}</span>
      </div>
      <div className="pagination-right">
        <button 
          className="page-button" 
          disabled={currentPage === 1} 
          onClick={() => onPageChange(currentPage - 1)}
        >
          <FaLessThan />

        </button>
        {pages.map(page => (
          <button 
            key={page} 
            className={`page-number ${page === currentPage ? 'active' : ''}`} 
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
        <button 
          className="page-button" 
          disabled={currentPage === totalPages} 
          onClick={() => onPageChange(currentPage + 1)}
        >
          <FaGreaterThan />

        </button>
      </div>
    </div>
  );
};

export default Pagination;
