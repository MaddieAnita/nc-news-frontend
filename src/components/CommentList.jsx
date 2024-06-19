import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getArticleComments } from "../../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import ErrorComponent from "./ErrorComponent";

const CommentList = ({ article_id, commentsList, setCommentsList }) => {
  const [totalCount, setTotalCount] = useState("");
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [commentPage, setCommentPage] = useState(1);
  const [error, setError] = useState(null);
  const [commentsDisplaying, setCommentsDisplaying] = useState({
    start: 1,
    end: 5,
  });

  useEffect(() => {
    setIsCommentsLoading(true);
    getArticleComments(article_id, commentPage)
      .then(({ articleComments, total_count }) => {
        setTotalCount(total_count);
        setCommentsList(articleComments);
        setIsCommentsLoading(false);
      })
      .catch((err) => {
        setError(err);
      });
  }, [article_id, commentPage]);

  if (error) {
    return <ErrorComponent error={error} />;
  }

  return (
    <section className="comment-list">
      <h2>Comments</h2>
      {isCommentsLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <PageDisplaying
            displaying={commentsDisplaying}
            totalCount={totalCount}
          />
          {commentsList.map((comment) => {
            return <CommentCard key={comment.comment_id} comment={comment} />;
          })}
          <Pagination
            page={commentPage}
            setPage={setCommentPage}
            totalCount={totalCount}
            setDisplaying={setCommentsDisplaying}
            limit={5}
          />
        </Fragment>
      )}
    </section>
  );
};

CommentList.propTypes = {
  article_id: PropTypes.string,
  commentsList: PropTypes.array,
  setCommentsList: PropTypes.func,
};

export default CommentList;
