import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { getArticles } from "../../api";
import ArticleList from "./ArticleList";
import Pagination from "./Pagination";

const Home = ({ articles, setArticles }) => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();

  useEffect(() => {
    getArticles(page).then(({ articles, total_count }) => {
      setTotalCount(total_count);
      setArticles(articles);
    });
  }, [page]);

  return (
    <main>
      <section className="container categories-list">
        <p>CATEGORIES</p>
      </section>
      <section className="container featured">
        <p>FEATURED</p>
      </section>
      <SearchBar />
      <section className="container articles-container">
        <ArticleList articles={articles} />
        <Pagination page={page} setPage={setPage} totalCount={totalCount} />
      </section>
    </main>
  );
};

Home.propTypes = {
  articles: PropTypes.array,
  setArticles: PropTypes.func,
};

export default Home;
