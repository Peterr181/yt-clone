import React from "react";

const SecondButtons = () => {
  return (
    <>
      <div className="sidebar__container__second">
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="library-outline"></ion-icon>
          </p>
          <span>Liblary</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="receipt-outline"></ion-icon>
          </p>
          <span>History</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="play-circle-outline"></ion-icon>
          </p>
          <span>Your videos</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="time-outline"></ion-icon>
          </p>
          <span>Watch later</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="musical-notes-outline"></ion-icon>
          </p>
          <span>Music</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </p>
          <span>Show more</span>
        </div>
      </div>
    </>
  );
};

export default SecondButtons;
