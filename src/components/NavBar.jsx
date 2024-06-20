import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const NavBar = ({ categoriesList, setPage }) => {
  const [hidden, setHidden] = useState(true);

  const handleMouseLeave = () => {
    setTimeout(() => {
      setHidden(true);
    }, 1500);
  };
  return (
    <nav>
      <Link to="/">Home</Link>

      <div
        className="sub-menu-button"
        onMouseEnter={() => setHidden(false)}
        onMouseLeave={handleMouseLeave}
        onClick={() => setHidden(!hidden)}
      >
        <p>
          Topics <IoIosArrowDown />
        </p>
        {hidden ? null : (
          <section className="sub-menu">
            {categoriesList.map((topic, index) => {
              return (
                <Link
                  to={`/articles?topic=${topic.slug}`}
                  key={index}
                  onClick={() => setPage(1)}
                >
                  {topic.slug}
                </Link>
              );
            })}
          </section>
        )}
      </div>

      <Link to="/about">About</Link>
      <Link to="/users">Users</Link>
    </nav>
  );
};

NavBar.propTypes = {
  categoriesList: PropTypes.array,
  setPage: PropTypes.func,
};

export default NavBar;
