const ExtraButton = ({ extra }) => {
  return (
    <span className={"btns"}>
      {extra}
      <span className="material-symbols-outlined">chevron_right</span>
    </span>
  );
};

export default ExtraButton;
