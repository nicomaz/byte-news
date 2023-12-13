const VoteOnButton = () => {
  return (
    <>
      <div className="article-information-2">
        <button className="btns one" onClick={()=>{console.log(+1)}}>
          <span className="material-symbols-outlined">thumb_up</span>
        </button>
        <button className="btns" onClick={()=>{console.log(-1)}}>
          <span className="material-symbols-outlined">thumb_down</span>
        </button>
      </div>
    </>
  );
};

export default VoteOnButton;
