import { IoTrashOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { deleteCommentById } from "../../api";
import { useState } from "react";

const CommentDeleter = ({
  comment_id,
  setDeleteSucess,
  setDeleteError,
  setCommentsList,
}) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const handleClick = () => {
    setIsDeleting(true);
    deleteCommentById(comment_id)
      .then(() => {
        setDeleteSucess(true);
        setCommentsList((commentList) => {
          return [...commentList].filter(
            (comment) => comment.comment_id !== comment_id
          );
        });
        setIsDeleting(false);
      })
      .catch((err) => {
        setDeleteError(err);
      });
  };

  return (
    <div className="delete-comment">
      <button onClick={handleClick} disabled={isDeleting ? true : false}>
        <IoTrashOutline />
      </button>
    </div>
  );
};

CommentDeleter.propTypes = {
  comment_id: PropTypes.number,
  setDeleteError: PropTypes.func,
  setDeleteSucess: PropTypes.func,
  setCommentsList: PropTypes.func,
};

export default CommentDeleter;
