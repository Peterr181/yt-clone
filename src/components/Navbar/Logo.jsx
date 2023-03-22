import React from "react";
import logo from "./YouTube_Logo_2017.svg";
import "./Logo.css";
const Logo = ({ setIsBtnMobileClicked, isBtnMobileClicked }) => {
  const handleMobileBtnClick = () => {
    setIsBtnMobileClicked(!isBtnMobileClicked);
  };

  return (
    <>
      <p className="youtube__button" onClick={handleMobileBtnClick}>
        <ion-icon className="dropdown__menu" name="menu-outline"></ion-icon>
      </p>
      <h2 className="youtube__logo">HeyTube</h2>
    </>
  );
};

export default Logo;
