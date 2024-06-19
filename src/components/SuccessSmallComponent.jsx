import PropTypes from "prop-types";
import "../styles/success.css";

const SuccessSmallComponent = ({ message }) => {
  return (
    <section className="success-small">
      <p>{message}</p>
    </section>
  );
};

SuccessSmallComponent.propTypes = {
  message: PropTypes.string,
};

export default SuccessSmallComponent;
