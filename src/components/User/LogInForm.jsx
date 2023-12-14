import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const LoginForm = () => {
  const { user, setUser } = useContext(UserContext);
  const [input, setInput] = useState("");
};

export default LoginForm;
