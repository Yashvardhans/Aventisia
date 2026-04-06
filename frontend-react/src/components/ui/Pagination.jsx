import React from "react";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  totalRows = 0,
  onPageChange,
}) {
  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    onPageChange?.(page);
  };

  return (
    <div className="flex items-center justify-between text-xs text-gray-500 px-2 py-2">
      <div className="font-bold text-black">{totalRows} rows</div>

      <div className="flex items-center gap-8">
        

        <div className="flex items-center gap-2">
          <span  className="font-bold text-black">Rows per page</span>
          <select className="border border-gray-200 rounded-md px-2 py-1 text-xs bg-white outline-none">
            <option>10</option>
            <option>20</option>
          </select>
        </div>

        {/* Page info */}
        <div className="font-bold text-black">
          page {currentPage} of {totalPages}
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-1">
          
          <button
            onClick={() => goToPage(1)}
            disabled={currentPage === 1}
            className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-40"
          >
            «
          </button>

          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-40"
          >
            ‹
          </button>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-40"
          >
            ›
          </button>

          <button
            onClick={() => goToPage(totalPages)}
            disabled={currentPage === totalPages}
            className="w-6 h-6 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-100 disabled:opacity-40"
          >
            »
          </button>

        </div>
      </div>
    </div>
  );
}