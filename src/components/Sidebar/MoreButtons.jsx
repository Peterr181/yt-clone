import React from "react";

const MoreButtons = () => {
  return (
    <>
      <div className="sidebar__container__first">
        <div className="sidebar__subheading__container">
          <span className="sidebar__subheading">MORE FROM YOUTUBE</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="logo-youtube"></ion-icon>
          </p>
          <span>HeyTube Premium</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="game-controller-outline"></ion-icon>
          </p>
          <span>Gaming</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="pulse-outline"></ion-icon>
          </p>
          <span>Live</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="basketball-outline"></ion-icon>
          </p>
          <span>Sport</span>
        </div>
      </div>
    </>
  );
};

export default MoreButtons;
