import React from "react";
import "./ProfileInfo.css";

const ProfileInfo = () => {
  return (
    <div className="profile__info__container">
      <div className="search__media ">
        <p>
          <ion-icon className="search__icon" name="search-outline"></ion-icon>
        </p>
      </div>
      <p className="profile__icon">
        <div className="addvideo__container mobile__display">
          <ion-icon
            onClick={() => {
              document.getElementById("popup-menu2").classList.toggle("show2");
            }}
            name="videocam-outline"
          ></ion-icon>
        </div>
        <div className="popup-menu2" id="popup-menu2">
          <div className="addvideo__item ">
            <ion-icon
              className="addvideo__icon"
              name="caret-forward-outline"
            ></ion-icon>
            <span>Upload video</span>
          </div>
          <div className="addvideo__item">
            <ion-icon
              className="addvideo__icon"
              name="accessibility-outline"
            ></ion-icon>
            <span>Go live</span>
          </div>
        </div>
      </p>

      <p className="profile__icon">
        <div className="noti__container mobile__display">
          <ion-icon
            onClick={() => {
              document.getElementById("popup-menu").classList.toggle("show");
            }}
            name="notifications-outline"
          ></ion-icon>
        </div>
        <div className="popup-menu" id="popup-menu">
          <div className="popup__info">
            <span>Notifications</span>
            <span>
              <ion-icon name="settings-outline"></ion-icon>
            </span>
          </div>
          <div className="popup__info__detail">
            <span className="noti__icon">
              <ion-icon name="notifications-outline"></ion-icon>
            </span>
            <h2>Your notifications live here</h2>
            <p>
              Subscribe to your favourite channels to receive notifications
              about their latest videos.
            </p>
          </div>
        </div>
      </p>
      <div
        className="user__profile "
        onClick={() => {
          document.getElementById("popup-menu3").classList.toggle("show3");
        }}
      >
        <span>P</span>
      </div>
      <div className="popup-menu3" id="popup-menu3">
        <div className="main__info__wrapper">
          <div className="user__profile2">
            <span>P</span>
          </div>
          <div className="user__profile__details">
            <span className="user__name">Peterr181</span>
            <span className="email">peterr181@gmail.com</span>
            <p>Manage your Google Account</p>
          </div>
        </div>
        <div className="main__info__icons__wrapper">
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="person-outline"></ion-icon>
            </p>
            <span>Your channel</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="cash-outline"></ion-icon>
            </p>
            <span>Purchase and memberships</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="settings-outline"></ion-icon>
            </p>
            <span>YouTube Studio</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="people-outline"></ion-icon>
            </p>
            <span>Switch account</span>
          </div>
        </div>
        <div className="main__info__icons__wrapper">
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="log-in-outline"></ion-icon>
            </p>
            <span>Sign out</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="moon-outline"></ion-icon>
            </p>
            <span>Appearance: Device theme</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="language-outline"></ion-icon>
            </p>
            <span>Language</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="location-outline"></ion-icon>
            </p>
            <span>Location</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="settings-outline"></ion-icon>
            </p>
            <span>Settings</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="analytics-outline"></ion-icon>
            </p>
            <span>Your data in YouTube</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="help-circle-outline"></ion-icon>
            </p>
            <span>Help</span>
          </div>
          <div className="main__info__icons__item">
            <p>
              <ion-icon name="send-outline"></ion-icon>
            </p>
            <span>Send feedback</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
