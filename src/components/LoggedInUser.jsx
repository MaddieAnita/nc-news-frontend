import { Fragment, useEffect, useState } from "react";
import coverPhoto from "/cover-placeholder.png";
import "../styles/single-user.css";
import { getArticles } from "../../api";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import { UserContext } from "../context/User.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

const LoggedInUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userArticles, setUserAticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const [articlesDisplaying, setArticlesDisplaying] = useState({
    start: 1,
    end: 9,
  });
  const { user } = useContext(UserContext);

  useEffect(() => {
    setIsLoading(true);
    const props = {
      page,
      username: user.username,
      limit: 9,
    };
    getArticles(props)
      .then(({ articles, total_count }) => {
        setTotalCount(total_count);
        setUserAticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [user.username, page]);

  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <section className="user-profile">
      <div
        className="cover-photo"
        style={{ background: `url(${coverPhoto})` }}
      ></div>
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <section className="container user-container">
            <div className="profile-photo">
              <img src={user.avatar_url} />
            </div>
            <section className="profile-details">
              <h1>{user.name}</h1>
              <section className="profile-buttons">
                <Link
                  to="/profile/switch-users"
                  className="button gradient hover-grow"
                >
                  Switch User
                </Link>
              </section>
            </section>
          </section>

          <section className="container article-by-user">
            <h2>Your Posts</h2>
            <PageDisplaying
              displaying={articlesDisplaying}
              totalCount={totalCount}
            />
            <div className="articles-list">
              {userArticles.map((article) => {
                return (
                  <ArticleCard key={article.article_id} article={article} />
                );
              })}
            </div>
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
    </section>
  );
};

export default LoggedInUser;
