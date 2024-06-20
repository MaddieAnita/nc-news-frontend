import { useEffect, useState } from "react";
import "../styles/searchbar.css";
import PropTypes from "prop-types";

const SearchBar = ({ setSearchParams, searchParams }) => {
  const [sortBy, setSortBy] = useState("DEFAULT");
  const [orderBy, setOrderBy] = useState("DEFAULT");
  const [featured, setFeatured] = useState("");

  useEffect(() => {
    const newParams = new URLSearchParams(searchParams);
    if (sortBy !== "DEFAULT") newParams.set("sort_by", sortBy);
    if (orderBy !== "DEFAULT") newParams.set("order", orderBy);
    if (featured !== "") newParams.set("featured", featured);
    setSearchParams(newParams);
  }, [sortBy, orderBy, featured]);

  return (
    <section className="container search-bar">
      <select
        id="sort-by"
        value={sortBy}
        onChange={(event) => {
          event.preventDefault();
          setSortBy(event.target.value);
        }}
      >
        <option value="DEFAULT" disabled>
          {" "}
          Sort By
        </option>
        <option value="created_at">Date</option>
        <option value="votes">Votes</option>
        <option value="comment_count">Comment Count</option>
      </select>

      <select
        id="order"
        value={orderBy}
        onChange={(event) => {
          event.preventDefault();
          setOrderBy(event.target.value);
        }}
      >
        <option value="DEFAULT" disabled>
          {" "}
          Order By
        </option>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </select>

      <label htmlFor="featured" className="checkbox-container">
        Show only featured?
        <input
          type="checkbox"
          id="featured"
          name="featured"
          value={featured}
          onChange={(event) => {
            setFeatured(event.target.checked);
          }}
        />
        <span className="checkmark"></span>
      </label>
    </section>
  );
};

SearchBar.propTypes = {
  setSearchParams: PropTypes.func,
  searchParams: PropTypes.object,
};

export default SearchBar;
