import "../styles/header.css";
import NavBar from "./NavBar";
import PropTypes from "prop-types";

const Header = ({ categoriesList }) => {
  return (
    <header>
      <div className="container">
        <p>LOGO</p>
        <div className="nav-details">
          <NavBar categoriesList={categoriesList} />
          <p>USER</p>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  categoriesList: PropTypes.array,
};

export default Header;
