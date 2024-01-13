import React, { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";

export default function Dropdown({ dropdownName, dropdownItems }) {
  const [topics, setTopics] = useState();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button className="page-name" onClick={handleOpen}>
        {dropdownName}
        <span className="material-symbols-outlined">expand_more</span>
      </button>
      {open ? (
        <ul>
          {topics.map((topic) => {
            return <li key={topic.slug}>{topic.slug}</li>;
          })}
        </ul>
      ) : null}
    </>
  );
}
