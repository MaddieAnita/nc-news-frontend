import PropTypes from "prop-types";
const PageDisplaying = ({ displaying, totalCount }) => {
  return (
    <p className="currently-displaying">
      Currently Displaying:{" "}
      {totalCount < displaying.start ? totalCount : displaying.start} to{" "}
      {totalCount < displaying.end ? totalCount : displaying.end} out of{" "}
      {totalCount}
    </p>
  );
};

PageDisplaying.propTypes = {
  displaying: PropTypes.object,
  totalCount: PropTypes.string,
};

export default PageDisplaying;
