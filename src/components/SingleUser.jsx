import { Fragment, useEffect, useState } from "react";
import coverPhoto from "/cover-placeholder.png";
import "../styles/single-user.css";
import { useParams } from "react-router-dom";
import { getArticles, getUserByUsername } from "../../api";
import Loading from "./Loading";
import ErrorComponent from "./ErrorComponent";
import ArticleCard from "./ArticleCard";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";

const SingleUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [thisUser, setThisUser] = useState(null);
  const [userArticles, setUserAticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState();
  const [articlesDisplaying, setArticlesDisplaying] = useState({
    start: 1,
    end: 9,
  });
  const { username } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getUserByUsername(username)
      .then(({ user }) => {
        setThisUser(user);
        const props = {
          page,
          username,
        };
        getArticles(props).then(({ articles, total_count }) => {
          setTotalCount(total_count);
          setUserAticles(articles);
          setIsLoading(false);
        });
      })
      .catch((err) => {
        setError(err);
      });
  }, [username, page]);

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
              <img src={thisUser.avatar_url} />
            </div>
            <section className="profile-details">
              <h1>{thisUser.name}</h1>
            </section>
          </section>

          <section className="container article-by-user">
            <h2>Posts By {thisUser.name}</h2>
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

export default SingleUser;
