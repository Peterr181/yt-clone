import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import MainContent from "./components/MainContent/MainContent";
import "./index.css";
function App() {
  const [inputValue, setInputValue] = useState("");
  const [isBtnClick, setIsBtnClick] = useState(false);
  const [isBtnMobileClicked, setIsBtnMobileClicked] = useState(false);

  return (
    <>
      <Navbar
        setInputValue={setInputValue}
        inputValue={inputValue}
        setIsBtnClick={setIsBtnClick}
        setIsBtnMobileClicked={setIsBtnMobileClicked}
        isBtnMobileClicked={isBtnMobileClicked}
      />
      <Sidebar isBtnMobileClicked={isBtnMobileClicked} />
      <MainContent
        inputValue={inputValue}
        isBtnClick={isBtnClick}
        isBtnMobileClicked={isBtnMobileClicked}
      />
    </>
  );
}

export default App;
