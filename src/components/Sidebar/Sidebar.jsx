import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import HelperButtons from "./HelperButtons";
import MoreButtons from "./MoreButtons";
import Subscriptions from "./Subscriptions";
import SecondButtons from "./SecondButtons";
import MainButtons from "./MainButtons";
import MobileSidebar from "./MobileSidebar";

const Sidebar = ({ isBtnMobileClicked }) => {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    function handleScroll() {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos;

      setVisible(visible);
      setPrevScrollPos(currentScrollPos);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <>
      {!isBtnMobileClicked ? (
        <>
          <div className="sidebar__container">
            <MainButtons />
            <SecondButtons />
            <Subscriptions />
            <MoreButtons />
            <HelperButtons />
          </div>
          <div
            className="mobile__sidebar__container2"
            style={{
              position: "fixed",
              bottom: 0,
              transform: visible ? "translateY(0)" : "translateY(100%)",
              transition: "transform 0.3s ease-out",
            }}
          >
            <div className="mobile__item">
              <p>
                <ion-icon name="home"></ion-icon>
              </p>
              <span>Home</span>
            </div>
            <div className="mobile__item">
              <p>
                <ion-icon name="earth-outline"></ion-icon>
              </p>
              <span>Explore</span>
            </div>
            <div className="mobile__item">
              <p>
                <ion-icon name="person-outline"></ion-icon>
              </p>
              <span>Subscriptions</span>
            </div>
            <div className="mobile__item">
              <p>
                <ion-icon name="library-outline"></ion-icon>
              </p>
              <span>Liblary</span>
            </div>
          </div>
        </>
      ) : (
        <MobileSidebar />
      )}
    </>
  );
};

export default Sidebar;
