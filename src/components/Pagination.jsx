import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [...Array(totalPages).keys()].map(n => n + 1);

  return (
    <div className="flex justify-center space-x-2 mt-6">
      {pages.map(page => (
        <button
          key={page}
          className={`p-2 rounded-lg ${page === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
