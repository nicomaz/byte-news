const TopNavBar = () => {
  return (
    <>
      <ul className="top-nav">
        <li className="page-name">Trending</li>
        <li className="page-name"> Latest </li>
        <li className="page-name">
          Topics
          <span className="material-symbols-outlined">expand_more</span>
        </li>
        <li className="page-name">
          <span class="material-symbols-outlined">sort</span>
        </li>
      </ul>
    </>
  );
};

export default TopNavBar;
