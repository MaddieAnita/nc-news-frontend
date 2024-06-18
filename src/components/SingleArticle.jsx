import { Fragment, useEffect, useState } from "react";
import { getSingleArticle } from "../../api";
import { useParams } from "react-router-dom";
import "../styles/single-article.css";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import CommentList from "./CommentList";
import ErrorComponent from "./ErrorComponent";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then(({ article }) => {
        setSingleArticle(article);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  if (error) {
    return <ErrorComponent error={error} />;
  }
  return (
    <main className="container single-article">
      {isLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <div className="article-top">
            <button onClick={() => navigate(-1)}>Back</button>
            <p className="topic">Topic: {singleArticle.topic}</p>
          </div>
          <article>
            <h1>{singleArticle.title}</h1>
            <div className="article-details">
              <p>{singleArticle.author}</p>
              <p>{singleArticle.created_at}</p>
              <p>{singleArticle.votes}</p>
            </div>
            <img src={singleArticle.article_img_url} />
            <div className="article-body">
              <p>{singleArticle.body}</p>
            </div>
          </article>
          <CommentList article_id={article_id} />
        </Fragment>
      )}
    </main>
  );
};

export default SingleArticle;
