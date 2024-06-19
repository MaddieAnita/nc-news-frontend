import { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getArticleComments } from "../../api";
import Loading from "./Loading";
import CommentCard from "./CommentCard";
import Pagination from "./Pagination";
import PageDisplaying from "./PageDisplaying";
import ErrorComponent from "./ErrorComponent";
import ErrorSmallComponent from "./ErrorSmallComponent.jsx";
import SuccessSmallComponent from "./SuccessSmallComponent.jsx";

const CommentList = ({ article_id, commentsList, setCommentsList, user }) => {
  const [totalCount, setTotalCount] = useState("");
  const [isCommentsLoading, setIsCommentsLoading] = useState(true);
  const [commentPage, setCommentPage] = useState(1);
  const [error, setError] = useState(null);
  const [deleteError, setDeleteError] = useState(null);
  const [deleteSuccess, setDeleteSucess] = useState(false);
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
      {deleteError ? (
        <ErrorSmallComponent message="Oops, that didn't work. Please try again." />
      ) : null}
      {deleteSuccess ? (
        <SuccessSmallComponent message="Comment successfully deleted" />
      ) : null}
      {isCommentsLoading ? (
        <Loading />
      ) : (
        <Fragment>
          <PageDisplaying
            displaying={commentsDisplaying}
            totalCount={totalCount}
          />
          {commentsList.map((comment) => {
            return (
              <CommentCard
                key={comment.comment_id}
                comment={comment}
                user={user}
                setDeleteError={setDeleteError}
                setDeleteSucess={setDeleteSucess}
                setCommentsList={setCommentsList}
              />
            );
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
  user: PropTypes.object,
};

export default CommentList;
