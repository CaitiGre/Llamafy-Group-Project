import React from "react";
import "./SubHeading.scss";

function SubHeading({ subtitle }) {
  // This component takes a prop called "subtitle" that will be used as the subtitle of all pages needing one

  return (
    <React.Fragment>
      <div className="subheading">
        <h1>{subtitle}</h1>
      </div>
    </React.Fragment>
  );
}

export default SubHeading;
