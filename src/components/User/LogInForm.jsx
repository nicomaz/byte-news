import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Modal from "../Buttons/Modal";

const LoginForm = () => {
  const [error, setError] = useState(null);
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUser(input)
      .then((res) => {
        setUser((currUser) => ({
          ...currUser,
          ["username"]: res.username,
          ["name"]: res.name,
          ["avater_url"]: res.avatar_url,
        }));
        setIsLoggedIn(true);
      })
      .then(() => {
        navigate(`/`);
      })
      .catch(() => {
        setError({
          title: "Sorry we don't recognise that username",
          message: "Please try again",
        });
        setInput("");
      });
  };

  return (
    <main className="container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="username" className="accent">
          Username
          <input
            type="text"
            id="username"
            name="username"
            value={input}
            onChange={handleChange}
            placeholder="type here"
            required
          />
        </label>
        <button className="btns">Sign in</button>
      </form>
      {error && <Modal error={error} setError={setError} />}
    </main>
  );
};

export default LoginForm;
