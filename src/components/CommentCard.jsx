import PropTypes from "prop-types";
const CommentCard = ({ comment }) => {
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
};

export default CommentCard;
