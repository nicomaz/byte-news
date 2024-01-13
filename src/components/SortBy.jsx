import React from "react";

export default function SortBy() {
  return (
    <div className="contianer">
      <div className="sort-by">
        <ul className="sort-by">
          <li>
            <button className="page-name">ASC</button>
          </li>
          <li>Recent</li>
          <li>Comments</li>
          <li>Votes</li>
        </ul>
      </div>
    </div>
  );
}
