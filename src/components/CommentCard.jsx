import PropTypes from "prop-types";
import CommentDeleter from "./CommentDeleter";

const CommentCard = ({
  comment,
  user,
  setDeleteError,
  setDeleteSucess,
  setCommentsList,
}) => {
  const formatDate = (date) => {
    const newDate = new Date(date);
    const options = {
      hour: "numeric",
      minute: "numeric",
    };
    return newDate.toLocaleDateString("en-US", options);
  };
  return (
    <article>
      <div className="comment-content">
        <p>{comment.body}</p>
        {user.username === comment.author ? (
          <CommentDeleter
            comment_id={comment.comment_id}
            setDeleteSucess={setDeleteSucess}
            setDeleteError={setDeleteError}
            setCommentsList={setCommentsList}
          />
        ) : null}
      </div>
      <div className="comment-details">
        <p>{comment.author}</p>
        <p>{formatDate(comment.created_at)}</p>
        <p>{comment.votes}</p>
      </div>
    </article>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object,
  user: PropTypes.object,
  setDeleteError: PropTypes.func,
  setDeleteSucess: PropTypes.func,
  setCommentsList: PropTypes.func,
};

export default CommentCard;
