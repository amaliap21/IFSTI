import React from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  return (
    <div className="flex justify-center items-center space-x-4">
      {Array.from({ length: totalPages }, (_, index) => index).map(
        (pageNumber) => (
          <button
            key={pageNumber}
            className={`w-8 h-8 rounded-full ${
              currentPage === pageNumber ? "bg-black" : "bg-gray-200"
            }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber + 1}
          </button>
        )
      )}
    </div>
  );
};

export default Pagination;
