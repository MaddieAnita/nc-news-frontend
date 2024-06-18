import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ErrorComponent = ({ error }) => {
  return (
    <section className="error">
      <h1>{error.response.status}</h1>
      <p>{error.response.data.msg}</p>
      <p>Ooops... that does not seem work, shall we head home?</p>
      <Link to="/">Home</Link>
    </section>
  );
};

ErrorComponent.propTypes = {
  error: PropTypes.object,
};

export default ErrorComponent;
