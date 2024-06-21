import { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getArticles } from "../../api";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import PropTypes from "prop-types";
import SearchBar from "./SearchBar";
import ErrorSmallComponent from "./ErrorSmallComponent";

const SingleTopic = ({
  articles,
  setArticles,
  articlesDisplaying,
  setArticlesDisplaying,
  page,
  setPage,
}) => {
  const [searchParams, setSearchParams] = useSearchParams([]);
  const [totalCount, setTotalCount] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const getTopicArticles = searchParams.get("topic");
  const sortByQuery = searchParams.get("sort_by");
  const orderByQuery = searchParams.get("order");
  const featuredQuery = searchParams.get("featured");

  useEffect(() => {
    setIsLoading(true);
    const props = {
      page,
      getTopicArticles,
      sortByQuery,
      orderByQuery,
      featuredQuery,
      limit: 9,
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
  }, [page, sortByQuery, orderByQuery, featuredQuery, getTopicArticles]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <main>
      <section className="container">
        <h1>{getTopicArticles}</h1>
        <SearchBar
          setSearchParams={setSearchParams}
          searchParams={searchParams}
        />
        {isLoading ? (
          <Loading />
        ) : (
          <Fragment>
            <PageDisplaying
              displaying={articlesDisplaying}
              totalCount={totalCount}
            />

            {!articles.length ? (
              <ErrorSmallComponent message="Not Articles Found" />
            ) : (
              <div className="articles-list">
                {articles.map((article) => {
                  return (
                    <ArticleCard key={article.article_id} article={article} />
                  );
                })}
              </div>
            )}
          </Fragment>
        )}
        <Pagination
          page={page}
          setPage={setPage}
          totalCount={totalCount}
          setDisplaying={setArticlesDisplaying}
          limit={9}
        />
      </section>
    </main>
  );
};

SingleTopic.propTypes = {
  articles: PropTypes.array,
  setArticles: PropTypes.func,
  articlesDisplaying: PropTypes.object,
  setArticlesDisplaying: PropTypes.func,
  page: PropTypes.number,
  setPage: PropTypes.func,
};

export default SingleTopic;
