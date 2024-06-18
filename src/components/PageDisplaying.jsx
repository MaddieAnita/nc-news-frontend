import PropTypes from "prop-types";
const PageDisplaying = ({ displaying, totalCount }) => {
  return (
    <p>
      Currently Displaying: {displaying.start} to {displaying.end} out of{" "}
      {totalCount}
    </p>
  );
};

PageDisplaying.propTypes = {
  displaying: PropTypes.object,
  totalCount: PropTypes.string,
};

export default PageDisplaying;
