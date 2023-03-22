import React, { useState } from "react";
import "./Navbar.css";
import SearchInput from "./SearchInput";
import ProfileInfo from "./ProfileInfo";
import Logo from "./Logo";

const Navbar = ({
  setInputValue,
  inputValue,
  setIsBtnClick,
  setIsBtnMobileClicked,
  isBtnMobileClicked,
}) => {
  return (
    <div className="navbar__wrapper">
      <div className="navbar__container">
        <div className="navbar__container__logo__box">
          <Logo
            setIsBtnMobileClicked={setIsBtnMobileClicked}
            isBtnMobileClicked={isBtnMobileClicked}
          />
        </div>
        <div className="navbar__container__search__box">
          <SearchInput
            setInputValue={setInputValue}
            inputValue={inputValue}
            setIsBtnClick={setIsBtnClick}
          />
        </div>
        <div className="navbar__container__profile__box">
          <ProfileInfo />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
