import React from "react";
import "./Header.css";

const Header = ({ headTitle, headerExpanded }) => {
  return (
    <div className="head-container">
      <img
        src="https://github.com/GTron-1729/Image-storage/blob/main/undraw_having_fun_iais-removebg-preview.png?raw=true"
        className={`head-image ${
          headerExpanded ? `head-image-expanded` : `head-image-contracted`
        } `}
      />

      <h1
        className={`head-text ${
          headerExpanded ? `head-text-expanded` : `head-text-contracted`
        } `}
      >
        {" "}
        {headTitle}{" "}
      </h1>
    </div>
  );
};

export default Header;
