import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { getArticles } from "../../api";
import ArticleList from "./ArticleList";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";

const Home = ({
  articles,
  setArticles,
  articlesDisplaying,
  setArticlesDisplaying,
  page,
  setPage,
}) => {
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
        <PageDisplaying
          articlesDisplaying={articlesDisplaying}
          totalCount={totalCount}
        />
        <ArticleList articles={articles} />
        <Pagination
          page={page}
          setPage={setPage}
          totalCount={totalCount}
          setArticlesDisplaying={setArticlesDisplaying}
        />
      </section>
    </main>
  );
};

Home.propTypes = {
  articles: PropTypes.array,
  setArticles: PropTypes.func,
  articlesDisplaying: PropTypes.object,
  setArticlesDisplaying: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default Home;
