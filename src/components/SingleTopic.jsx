import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getArticles } from "../../api";
import ErrorComponent from "./ErrorComponent";
import Loading from "./Loading";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import PropTypes from "prop-types";

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

  useEffect(() => {
    setIsLoading(true);
    getArticles(page, getTopicArticles)
      .then(({ articles, total_count }) => {
        setTotalCount(total_count);
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [page, getTopicArticles]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <main>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="container">
          <h1>{getTopicArticles}</h1>
          <PageDisplaying
            displaying={articlesDisplaying}
            totalCount={totalCount}
          />
          <div className="articles-list">
            {articles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </div>
        </section>
      )}
      <Pagination
        page={page}
        setPage={setPage}
        totalCount={totalCount}
        setDisplaying={setArticlesDisplaying}
        limit={9}
      />
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
