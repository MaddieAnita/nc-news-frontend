import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";

const NavBar = ({ categoriesList }) => {
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
        <p>Topics</p>
        {hidden ? null : (
          <section className="sub-menu">
            {categoriesList.map((topic, index) => {
              return (
                <Link to={`/articles?topic=${topic.slug}`} key={index}>
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
};

export default NavBar;
