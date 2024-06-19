import PropTypes from "prop-types";
import { useState } from "react";
import { postComment } from "../../api.js";
import ErrorSmallComponent from "./ErrorSmallComponent.jsx";
import SuccessSmallComponent from "./SuccessSmallComponent.jsx";

const CommentAdder = ({ article_id, setCommentsList, user }) => {
  const [commentInput, setCommentInput] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [isPosting, setIsPosting] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosting(true);
    const commentBody = {
      username: user.username,
      body: commentInput,
    };
    postComment(article_id, commentBody)
      .then(({ newComment }) => {
        setCommentsList((comments) => {
          return [newComment, ...comments];
        });
        setSuccess(true);
        setIsPosting(false);
      })
      .catch((error) => {
        setError(error);
        setIsPosting(false);
      });

    setCommentInput("");
  };

  return (
    <section>
      {error ? (
        <ErrorSmallComponent message="Oops, that didn't work. Please try again." />
      ) : null}
      {success ? (
        <SuccessSmallComponent message="Comment successfully added" />
      ) : null}
      <form className="comment-adder" onSubmit={handleSubmit}>
        <h2>Post a Comment</h2>
        <p>Posting as {user.username}</p>
        <textarea
          rows={4}
          placeholder="Type your message here..."
          value={commentInput}
          onChange={(event) => {
            setCommentInput(event.target.value);
          }}
          required
        />
        <button type="submit" disabled={isPosting ? true : false}>
          Post Comment
        </button>
      </form>
    </section>
  );
};

CommentAdder.propTypes = {
  article_id: PropTypes.string,
  setCommentsList: PropTypes.func,
  user: PropTypes.object,
};

export default CommentAdder;
