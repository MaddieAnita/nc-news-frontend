import PropTypes from "prop-types";

const ErrorSmallComponent = ({ error, message }) => {
  return (
    <section className="error-small">
      <p>{message}</p>
    </section>
  );
};

ErrorSmallComponent.propTypes = {
  error: PropTypes.object,
  message: PropTypes.string,
};

export default ErrorSmallComponent;
