import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { commentOnArticle } from "../../utils/api";
import { Link, useParams } from "react-router-dom";

const PostCommentForm = (props) => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: "", body: "" });
  const { articleId } = useParams();

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
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    commentOnArticle(articleId, formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="comment">
        <input
          type="text"
          id="comment"
          name="comment"
          value={formData.body}
          onChange={handleChange}
        />
      </label>
      <button> Post comment </button>
    </form>
  );
};

export default PostCommentForm;
