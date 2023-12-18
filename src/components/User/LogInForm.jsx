import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";
import { getUser } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");
  let navigate = useNavigate();

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    getUser(input)
      .then((res) => {
        setUser((currUser) => ({
          ...currUser,
          ["username"]: res.username,
          ["name"]: res.name,
          ["avater_url"]: res.avatar_url,
        }));
      })
      .then(() => {
        navigate(`/users/${user.username}`);
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
    </main>
  );
};

export default LoginForm;
