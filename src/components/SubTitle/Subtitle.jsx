import React from "react";
import "./Subtitle.scss";

function Subtitle({ name }) {
  return (
    <React.Fragment>
      <div className="subtitle">
        <h1>{name}</h1>
      </div>
    </React.Fragment>
  );
}

export default Subtitle;
