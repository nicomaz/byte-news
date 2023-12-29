import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";
import Modal from "../Buttons/ErrorModal";
import { LoadingContext } from "../../contexts/Loading";

const LoginForm = () => {
  const { isLoading, setIsLoading } = useContext(LoadingContext);
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
    setIsLoading(true);
    getUser(input)
      .then((res) => {
        setUser((currUser) => ({
          ...currUser,
          ["username"]: res.username,
          ["name"]: res.name,
          ["avater_url"]: res.avatar_url,
        }));
        setIsLoggedIn(true);
        setIsLoading(false);
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

  if (isLoading) {
    return <div className="loading">Logging in...</div>;
  }

  return (
    <main className="container">
      <h2 className="title"> LOGIN </h2>
      <form className="login-form" autoComplete="off" onSubmit={handleSubmit}>
        <input
          className="login-input"
          type="text"
          id="username"
          name="username"
          value={input}
          placeholder="username"
          onChange={handleChange}
          required
        />
        <label htmlFor="username" className="label">
          Username
        </label>
        <button className="btns">Sign in</button>
      </form>
      {error && <Modal error={error} setError={setError} />}
    </main>
  );
};

export default LoginForm;
