import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const {user} = useContext(UserContext)

  return (
    <nav>
      <ul className="header-menu">
        <li className="header-container">
          <h1>
            INTER<span className="header-accent">BYTE</span>
          </h1>
        </li>
        <li>
        <img src={user.avater_url} alt={`${user.username} icon`} className="icon" />
        </li>
      </ul>
    </nav>
  );
};
export default Header;
