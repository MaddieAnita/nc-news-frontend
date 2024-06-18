import { Fragment, useEffect, useState } from "react";
import { getSingleArticle } from "../../api";
import { useParams } from "react-router-dom";
import "../styles/single-article.css";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id).then(({ article }) => {
      setSingleArticle(article);
      setIsLoading(false);
    });
  }, [article_id]);
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
        </Fragment>
      )}
    </main>
  );
};

export default SingleArticle;
