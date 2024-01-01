import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { commentOnArticle } from "../../utils/api";
import { Link, useParams } from "react-router-dom";
import ErrorModal from "../Buttons/ErrorModal";
import { getCommentsByArticleId } from "../../utils/api.js";

const PostCommentForm = (props) => {
  const [error, setError] = useState(null);
  const { user } = useContext(UserContext);

  const [formData, setFormData] = useState({
    username: "",
    body: "",
    votes: 0,
  });

  const [commentData, setCommentData] = useState({
    author: "",
    body: "",
    votes: 0,
  });

  const { articleId } = useParams();
  const { setComments } = props;

  if (user.username === "guest") {
    return (
      <div className="container  msg">
        <Link to="/sign-in"> Please log in to comment</Link>
      </div>
    );
  }

  function handleChange(event) {
    setFormData((currFormData) => ({
      ...currFormData,
      body: event.target.value,
      username: user.username,
      votes: 0,
    }));
    setCommentData((currData) => ({
      ...currData,
      body: event.target.value,
      author: user.username,
      votes: 0,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setComments((currComments) => [commentData, ...currComments]);
    commentOnArticle(articleId, formData).catch((err) => {
      setError({
        title: err.response.data.msg,
        message: "Please refresh the page or try again at another time",
      });
      getCommentsByArticleId(articleId).then((commentData) => {
        setComments(commentData);
      });
    });
    setFormData({ username: "", body: "", votes: 0 });
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <input
          type="text"
          id="comment"
          className="comment"
          name="comment"
          value={formData.body}
          onChange={handleChange}
          required
        />
      </label>
      <button> Post Comment</button>
      {error && <ErrorModal error={error} setError={setError} />}
    </form>
  );
};

export default PostCommentForm;
