import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);
  const [link, setLink] = useState("/sign-in");


  return (
    <nav>
      <ul className="header-menu">
        <li className="header-container">
          <Link to="/">
            <h1>
              INTER<span className="header-accent">BYTE</span>
            </h1>
          </Link>
        </li>
        <Link to={link}>
          <li>
            <img
              src={user.avater_url}
              alt={`${user.username} icon`}
              className="icon"
            />
          </li>
        </Link>
      </ul>
    </nav>
  );
};
export default Header;
