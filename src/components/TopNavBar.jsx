import Dropdown from "./Buttons/Dropdown";

const TopNavBar = ({ setIsSortedByPressed, isSortByPressed, setSortBy }) => {
  //TO DO : look into useSearchParams ?
  
  return (
    <>
      <ul className="top-nav">
        <li
          className="page-name"
          tabIndex="0"
          onClick={() => {
            setSortBy(["created_at", "DESC"]);
          }}
        >
          Latest
        </li>
        <li
          className="page-name"
          tabIndex="0"
          onClick={() => {
            setSortBy(["votes", "DESC"]);
          }}
        >
          Trending
        </li>
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
