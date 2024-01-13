import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound({ error }) {
  console.log(error);
  return (
    <div className="page-center">
      {error.title}
      <span className="page-text">
        <span className="clickable">
          <Link to="/"> {error.message}</Link>
        </span>
      </span>
    </div>
  );
}
