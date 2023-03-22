import React from "react";

const MainButtons = () => {
  return (
    <>
      <div className="sidebar__container__first">
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="home"></ion-icon>
          </p>
          <span>Home</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="earth-outline"></ion-icon>
          </p>
          <span>Explore</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="person-outline"></ion-icon>
          </p>
          <span>Subscriptions</span>
        </div>
      </div>
    </>
  );
};

export default MainButtons;
