import { useState } from "react";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const TopicsList = ({ categoriesList }) => {
  return (
    <section className="topics-container">
      <h2>Categories:</h2>
      <section className="topics-list">
        {categoriesList.map((topic, index) => {
          return (
            <Link
              className="button"
              key={index}
              to={`/articles?topic=${topic.slug}`}
            >
              {topic.slug}
            </Link>
          );
        })}
      </section>
    </section>
  );
};

TopicsList.propTypes = {
  categoriesList: PropTypes.array,
};

export default TopicsList;
