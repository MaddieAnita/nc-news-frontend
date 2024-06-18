import { Fragment, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { getArticles } from "../../api";
import ArticleList from "./ArticleList";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import Loading from "./Loading";

const Home = ({
  articles,
  setArticles,
  articlesDisplaying,
  setArticlesDisplaying,
  page,
  setPage,
}) => {
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page).then(({ articles, total_count }) => {
      setTotalCount(total_count);
      setArticles(articles);
      setIsLoading(false);
    });
  }, [page]);

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
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
        </Fragment>
      )}
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
