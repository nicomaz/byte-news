import planet from "../assets/planet.png";

const Header = ({ heading }) => {
  return (
      <h1>
        <span id="right-heading" className="material-symbols-outlined">
          {heading}
        </span>
        <img className="icon" src={planet} alt="image of earth" />
        <span className="heading-title">bytenews</span>
        <span id="left-heading" className="material-symbols-outlined">
          menu
        </span>
      </h1>
  );
};
export default Header;
