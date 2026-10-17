export default function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages === 0) return null;
  return (
    <nav className="pagination" aria-label="Pagination">
      <button disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>Trước</button>
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(pageNumber => (
        <button key={pageNumber} disabled={pageNumber === currentPage}
          aria-current={pageNumber === currentPage ? 'page' : undefined}
          onClick={() => onPageChange(pageNumber)}>{pageNumber}</button>
      ))}
      <button disabled={currentPage === totalPages} onClick={() => onPageChange(currentPage + 1)}>Sau</button>
      <span>Trang {currentPage}/{totalPages}</span>
    </nav>
  );
}
