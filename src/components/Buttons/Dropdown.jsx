import React, { useEffect, useState } from "react";
import { getTopics } from "../../utils/api";
import { Link } from "react-router-dom";

export default function Dropdown({ dropdownName, dropdownItems }) {
    // refactor for reusability 
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
    <div className="dropdown">
      <button className="page-name" onClick={handleOpen}>
        {dropdownName}
        <span className="material-symbols-outlined">expand_more</span>
      </button>
      {open ? (
        <ul className="menu">
          {topics.map((topic) => {
            return (
              <Link to={`/article/topics/${topic.slug}`}>
                <li key={topic.slug}>{topic.slug}</li>
              </Link>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}
