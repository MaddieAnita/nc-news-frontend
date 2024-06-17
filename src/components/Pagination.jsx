import PropTypes from "prop-types";

const Pagination = ({ page, setPage, totalCount, setArticlesDisplaying }) => {
  return (
    <div className="pagination">
      <button
        onClick={() => {
          setPage((currentPage) => currentPage - 1);
          setArticlesDisplaying((currentlyDisplaying) => {
            return {
              ...currentlyDisplaying,
              start: currentlyDisplaying.start - 9,
              end:
                totalCount === currentlyDisplaying.end
                  ? totalCount - 1
                  : currentlyDisplaying.end - 9,
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
          setArticlesDisplaying((currentlyDisplaying) => {
            return {
              ...currentlyDisplaying,
              start: currentlyDisplaying.start + 9,
              end:
                totalCount < currentlyDisplaying.end + 9
                  ? totalCount
                  : currentlyDisplaying.end + 9,
            };
          });
        }}
        disabled={9 * page >= totalCount}
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
  setArticlesDisplaying: PropTypes.func,
};

export default Pagination;
