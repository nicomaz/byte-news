import React from "react";

export default function SortBy({ setSortBy }) {
  return (
    <div>
      <div className="bg">
        <ul className="sort-by">
          <li
            onClick={() => {
              setSortBy("Newest");
            }}
          >
            Newest
          </li>
          <li
            onClick={() => {
              setSortBy("Oldest");
            }}
          >
            Oldest
          </li>
          <li
            onClick={() => {
              setSortBy("Most Comments");
            }}
          >
            Most Comments
          </li>
          <li
            onClick={() => {
              setSortBy("Least Comments");
            }}
          >
            Least Comments
          </li>
          <li
            onClick={() => {
              setSortBy("Most Votes");
            }}
          >
            Most Votes
          </li>
          <li
            onClick={() => {
              setSortBy("Least Votes");
            }}
          >
            Least Votes
          </li>
        </ul>
      </div>
    </div>
  );
}
