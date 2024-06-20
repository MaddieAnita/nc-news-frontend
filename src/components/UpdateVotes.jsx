import PropTypes from "prop-types";
import { useState } from "react";
import {
  IoHeartOutline,
  IoHeart,
  IoHeartDislike,
  IoHeartDislikeOutline,
} from "react-icons/io5";
import { decreaseArticleVotes, increaseArticleVotes } from "../../api";
import ErrorSmallComponent from "./ErrorSmallComponent";

const UpdateVotes = ({ votes, setVotes, article_id }) => {
  const [loveToggle, setLoveToggle] = useState(false);
  const [hateToggle, setHateToggle] = useState(false);
  const [error, setError] = useState(null);

  const handleLoveClick = () => {
    setLoveToggle(true);
    setVotes((votes) => votes + 1);
    increaseArticleVotes(article_id).catch((err) => {
      setError(err);
    });
    setHateToggle(false);
  };

  const handleHateClick = () => {
    setHateToggle(true);
    setVotes((votes) => votes - 1);
    decreaseArticleVotes(article_id).catch((err) => {
      setError(err);
    });
    setLoveToggle(false);
  };

  return (
    <section className="update-votes">
      {error ? (
        <ErrorSmallComponent
          error={error}
          message="Something went wrong please try again"
        />
      ) : null}
      <p>Current Votes: {votes}</p>
      <div className="controls">
        <button className="votes-box" onClick={handleLoveClick}>
          <span>{loveToggle ? <p>Loved It!</p> : <p>Loved it?</p>}</span>
          <p className="heart">
            {loveToggle ? <IoHeart /> : <IoHeartOutline />}
          </p>
        </button>
        <button className="votes-box" onClick={handleHateClick}>
          <span>
            {hateToggle ? <p>Not So Much...</p> : <p>Didnt Love it?</p>}
          </span>
          <p className="heart">
            {hateToggle ? <IoHeartDislike /> : <IoHeartDislikeOutline />}
          </p>
        </button>
      </div>
    </section>
  );
};

UpdateVotes.propTypes = {
  votes: PropTypes.number,
  setVotes: PropTypes.func,
  article_id: PropTypes.string,
};

export default UpdateVotes;
