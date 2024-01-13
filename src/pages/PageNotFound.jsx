import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="page-center">
      There's nothing here...
      <span className="page-text">
        <span className="clickable">
          <Link to="/"> Click to go back HOME</Link>
        </span>
      </span>
    </div>
  );
}
