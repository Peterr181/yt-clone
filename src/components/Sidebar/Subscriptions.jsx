import React from "react";

const Subscriptions = () => {
  return (
    <>
      <div className="sidebar__container__first">
        <div className="sidebar__subheading__container">
          <span className="sidebar__subheading">SUBSCRIPTIONS</span>
        </div>
        <div className="sidebar__icon__container">
          <div className="sidebar__icon__profile">P</div>
          <span>Peterr181</span>
        </div>
        <div className="sidebar__icon__container">
          <p>
            <ion-icon name="chevron-down-outline"></ion-icon>
          </p>
          <span className="fixpadding">Show more</span>
        </div>
      </div>
    </>
  );
};

export default Subscriptions;
