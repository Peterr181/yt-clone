import React, { useState } from "react";
import "./SearchInput.css";

const SearchInput = ({ setInputValue, inputValue, setIsBtnClick }) => {
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setInputValue("");
    setIsBtnClick(true);
  };

  return (
    <div className="search__input__container">
      <form className="search__input__form">
        <input
          placeholder="Search"
          type="text"
          className="main__input"
          value={inputValue}
          onChange={handleInputChange}
        />
        <div className="search__button__container" onClick={handleButtonClick}>
          <button className="search__button">
            <p>
              <ion-icon
                className="search__icon"
                name="search-outline"
              ></ion-icon>
            </p>
          </button>
        </div>
      </form>
      <div className="microphone__container">
        <p>
          <ion-icon name="mic"></ion-icon>
        </p>
      </div>
    </div>
  );
};

export default SearchInput;
