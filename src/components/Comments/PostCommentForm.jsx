import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const PostCommentForm = () => {
  const { user } = useContext(UserContext);
  const [formData, setFormData] = useState({ username: "", body: "" });

  if (user.username === "guest") {
    return <div className="container  msg"> Please log in to comment</div>;
  }

  function handleChange(event) {
    setFormData((currFormData) => ({
      ...currFormData,
      body: event.target.value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
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
