import { Fragment, useEffect, useState } from "react";
import { getSingleArticle } from "../../api";
import { useParams } from "react-router-dom";
import { IoCalendarClearSharp, IoHeartSharp, IoPerson } from "react-icons/io5";
import "../styles/single-article.css";
import Loading from "./Loading";
import { useNavigate } from "react-router-dom";
import CommentList from "./CommentList";
import ErrorComponent from "./ErrorComponent";
import UpdateVotes from "./UpdateVotes";
import CommentAdder from "./CommentAdder";

const SingleArticle = () => {
  const [singleArticle, setSingleArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [articleVotes, setArticleVotes] = useState(0);
  const [commentsList, setCommentsList] = useState();
  const { article_id } = useParams();
  const [error, setError] = useState(null);
  let navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    getSingleArticle(article_id)
      .then(({ article }) => {
        setSingleArticle(article);
        setArticleVotes(article.votes);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id]);

  const formatDate = (date) => {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US");
  };

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
              <p>
                <IoPerson /> {singleArticle.author}
              </p>
              <p>
                <IoCalendarClearSharp />
                {formatDate(singleArticle.created_at)}
              </p>
              <p>
                <IoHeartSharp />
                {articleVotes}
              </p>
            </div>
            <img src={singleArticle.article_img_url} />
            <div className="article-body">
              <p>{singleArticle.body}</p>
            </div>
          </article>
          <UpdateVotes
            votes={articleVotes}
            setVotes={setArticleVotes}
            article_id={article_id}
          />
          <CommentList
            article_id={article_id}
            commentsList={commentsList}
            setCommentsList={setCommentsList}
          />
          <CommentAdder
            article_id={article_id}
            setCommentsList={setCommentsList}
          />
        </Fragment>
      )}
    </main>
  );
};

export default SingleArticle;
