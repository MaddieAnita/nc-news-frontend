import "../styles/header.css";
import NavBar from "./NavBar";
import PropTypes from "prop-types";
import { UserContext } from "../context/User.jsx";
import { useContext } from "react";
import logo from "/NC-News-Logo.png";

const Header = ({ categoriesList, setPage }) => {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="container">
        <img src={logo} className="logo" />
        <div className="nav-details">
          <NavBar categoriesList={categoriesList} setPage={setPage} />
          <div className="logged-in-user">
            <div
              className="profile-img"
              style={{ background: `url(${user.avatar_url})` }}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  categoriesList: PropTypes.array,
  setPage: PropTypes.func,
};

export default Header;
