import { useEffect, useState } from "react";
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
import { useSearchParams } from "react-router-dom";

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
  const [searchParams, setSearchParams] = useSearchParams();
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");
  const featuredQuery = searchParams.get("featured");

  useEffect(() => {
    setIsLoading(true);
    const props = {
      page,
      sortByQuery,
      orderByQuery,
      featuredQuery,
    };
    getArticles(props)
      .then(({ articles, total_count }) => {
        setTotalCount(total_count);
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page, sortByQuery, orderByQuery, featuredQuery]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="container categories-list">
          <TopicsList categoriesList={categoriesList} />
        </section>
      )}
      <section className="container featured">
        <p>FEATURED</p>
      </section>
      <SearchBar
        setSearchParams={setSearchParams}
        searchParams={searchParams}
      />
      {isLoading ? (
        <Loading />
      ) : (
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
