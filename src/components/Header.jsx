import "../styles/header.css";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <p>LOGO</p>
        <div className="nav-details">
          <NavBar />
          <p>USER</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
