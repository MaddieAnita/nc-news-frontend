import PropTypes from "prop-types";

const Pagination = ({ page, setPage, totalCount }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => {
          setPage((currentPage) => currentPage - 1);
        }}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
        }}
        disabled={10 * page >= totalCount}
      >
        Next Page
      </button>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number,
  setPage: PropTypes.func,
  totalCount: PropTypes.string,
};

export default Pagination;
