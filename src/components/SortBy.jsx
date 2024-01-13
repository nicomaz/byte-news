import React from "react";

export default function SortBy({ setSortBy }) {
  return (
    <div>
      <div className="bg">
        <ul className="sort-by">
          <li
            tabIndex="0"
            onClick={() => {
              setSortBy(["created_at", "DESC"]);
            }}
          >
            Newest
          </li>
          <li
            tabIndex="0"
            onClick={() => {
              setSortBy(["created_at", "ASC"]);
            }}
          >
            Oldest
          </li>
          <li
            tabIndex="0"
            onClick={() => {
              setSortBy(["comment_count", "DESC"]);
            }}
          >
            Most Comments
          </li>
          <li
            tabIndex="0"
            onClick={() => {
              setSortBy(["comment_count", "ASC"]);
            }}
          >
            Least Comments
          </li>
          <li
            tabIndex="0"
            onClick={() => {
              setSortBy(["votes", "DESC"]);
            }}
          >
            Most Votes
          </li>
          <li
            tabIndex="0"
            onClick={() => {
              setSortBy(["votes", "ASC"]);
            }}
          >
            Least Votes
          </li>
        </ul>
      </div>
    </div>
  );
}
