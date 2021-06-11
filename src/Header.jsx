import React from "react";
import logo from "./Images/logo.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <img className="logo_img" src={logo} alt="quickie app logo" />
      </div>
    </>
  );
};

export default Header;
