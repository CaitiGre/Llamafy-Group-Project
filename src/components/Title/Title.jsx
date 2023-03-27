import React from "react";
import "./Title.scss";

function Title({ name }) {
  return (
    <React.Fragment>
      <div className="title">
        <h1>{name}</h1>
      </div>
    </React.Fragment>
  );
}

export default Title;
