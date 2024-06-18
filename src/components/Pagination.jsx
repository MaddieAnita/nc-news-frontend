import PropTypes from "prop-types";

const Pagination = ({ page, setPage, totalCount, setDisplaying, limit }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => {
          setPage((currentPage) => currentPage - 1);
          setDisplaying((currentlyDisplaying) => {
            return {
              ...currentlyDisplaying,
              start: currentlyDisplaying.start - limit,
              end:
                totalCount === currentlyDisplaying.end
                  ? totalCount - (totalCount - limit)
                  : currentlyDisplaying.end - limit,
            };
          });
        }}
        disabled={page === 1}
      >
        Previous Page
      </button>
      <button
        onClick={() => {
          setPage((currentPage) => currentPage + 1);
          setDisplaying((currentlyDisplaying) => {
            return {
              ...currentlyDisplaying,
              start: currentlyDisplaying.start + limit,
              end:
                totalCount < currentlyDisplaying.end + limit
                  ? totalCount
                  : currentlyDisplaying.end + limit,
            };
          });
        }}
        disabled={limit * page >= totalCount}
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
  setDisplaying: PropTypes.func,
  limit: PropTypes.number,
};

export default Pagination;
