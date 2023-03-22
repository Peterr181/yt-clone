import React from "react";
import "./MobileSidebar.css";

const MobileSidebar = () => {
  return (
    <div className="mobile__sidebar__container">
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
  );
};

export default MobileSidebar;
