import PropTypes from "prop-types";
const PageDisplaying = ({ articlesDisplaying, totalCount }) => {
  return (
    <p>
      Currently Displaying: {articlesDisplaying.start} to{" "}
      {articlesDisplaying.end} out of {totalCount}
    </p>
  );
};

PageDisplaying.propTypes = {
  articlesDisplaying: PropTypes.object,
  totalCount: PropTypes.string,
};

export default PageDisplaying;
