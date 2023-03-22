import React, { useState, useEffect } from "react";
import "./MainContent.css";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import SwitchingButtons from "./SwitchingButtons";
import DummyVideos from "./DummyVideos";

const MainContent = ({ inputValue, isBtnMobileClicked }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   let query = `search?part=snippet&q=${selectedCategory}`;
  //   if (isBtnClick) query = `search?part=snippet&q=${inputValue}`;
  //   fetchFromAPI(query).then((data) => {
  //     setVideos(data.items);
  //   });
  // }, [selectedCategory, isBtnClick, inputValue]);

  return (
    <>
      {!isBtnMobileClicked ? (
        <div className="main__content__container">
          <SwitchingButtons
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="main__content__container__videos__wrapper">
            {/* {videos.map((video) => (
          <div key={video.id.videoId} className="video__item">
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
            />
            <h3>{video.snippet.title}</h3>
            <p>{video.snippet.description}</p>
          </div>
        ))} */}
            <DummyVideos />
          </div>
        </div>
      ) : (
        <div className="main__content__container2">
          <SwitchingButtons
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <div className="main__content__container__videos__wrapper2">
            {/* {videos.map((video) => (
        <div key={video.id.videoId} className="video__item">
          <img
            src={video.snippet.thumbnails.medium.url}
            alt={video.snippet.title}
          />
          <h3>{video.snippet.title}</h3>
          <p>{video.snippet.description}</p>
        </div>
      ))} */}
            <DummyVideos isBtnMobileClicked={isBtnMobileClicked} />
          </div>
        </div>
      )}
    </>
  );
};

export default MainContent;
