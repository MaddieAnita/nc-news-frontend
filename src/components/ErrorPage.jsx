import { Link } from "react-router-dom";
import "../styles/error.css";

const ErrorPage = () => {
  return (
    <main className="container error">
      <h1>404: Page Not Found</h1>
      <p>Ooops... this is awkward, shall we head home?</p>
      <Link to="/">Home</Link>
    </main>
  );
};

export default ErrorPage;
