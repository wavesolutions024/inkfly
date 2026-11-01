import React from "react";
import "./PageTop.scss";

const PageTop = ({ title, details }) => {
  return (
    <>
      <div className="parent parent_pagetop">
        <div className="cont cont_pagetop">
          <p>{title}</p>
          <h3>{details}</h3>
        </div>
      </div>
    </>
  );
};

export default PageTop;
