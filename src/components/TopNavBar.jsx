import Dropdown from "./Buttons/Dropdown";

const TopNavBar = () => {
  return (
    <>
      <ul className="top-nav">
        <li className="page-name">Trending</li>
        <li className="page-name"> Latest </li>

        <li className="page-name">
          <Dropdown dropdownName="Topics" />
        </li>
        <li className="page-name">
          <span className="material-symbols-outlined">sort</span>
        </li>
      </ul>
    </>
  );
};

export default TopNavBar;
