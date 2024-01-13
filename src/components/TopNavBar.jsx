import Dropdown from "./Buttons/Dropdown";

const TopNavBar = ({ setIsSortedByPressed, isSortByPressed }) => {
  return (
    <>
      <ul className="top-nav">
        <li className="page-name">Trending</li>
        <li className="page-name"> Latest </li>
        <li className="page-name">
          <Dropdown dropdownName="Topics" />
        </li>
        <li
          className="page-name"
          onClick={() => {
            setIsSortedByPressed(!isSortByPressed);
          }}
        >
          <span className="material-symbols-outlined sort">sort</span>
        </li>
      </ul>
    </>
  );
};

export default TopNavBar;
