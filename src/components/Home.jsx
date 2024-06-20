import { Fragment, useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import PropTypes from "prop-types";
import { getArticles } from "../../api";
import ArticleList from "./ArticleList";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import TopicsList from "./TopicsList";
import "../styles/home.css";

const Home = ({
  articles,
  setArticles,
  articlesDisplaying,
  setArticlesDisplaying,
  categoriesList,
  page,
  setPage,
}) => {
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getArticles(page)
      .then(({ articles, total_count }) => {
        setTotalCount(total_count);
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <section className="container categories-list">
            <TopicsList categoriesList={categoriesList} />
          </section>
          <section className="container featured">
            <p>FEATURED</p>
          </section>
          <SearchBar />
          <section className="container articles-container">
            <PageDisplaying
              displaying={articlesDisplaying}
              totalCount={totalCount}
            />
            <ArticleList articles={articles} />
            <Pagination
              page={page}
              setPage={setPage}
              totalCount={totalCount}
              setDisplaying={setArticlesDisplaying}
              limit={9}
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
  categoriesList: PropTypes.array,
  setCategoriesList: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default Home;
