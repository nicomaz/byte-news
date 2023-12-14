import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(UserContext);

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
        <li>
          <img
            src={user.avater_url}
            alt={`${user.username} icon`}
            className="icon"
          />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
