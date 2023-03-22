import React from "react";

const HelperButtons = () => {
  return (
    <>
      <div className="sidebar__container__first">
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="settings-outline"></ion-icon>
          </p>
          <span>Settings</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="flag-outline"></ion-icon>
          </p>
          <span>Report history</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="help-circle-outline"></ion-icon>
          </p>
          <span>Help</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="alert-circle-outline"></ion-icon>
          </p>
          <span>Send feedback</span>
        </div>
      </div>
    </>
  );
};

export default HelperButtons;
