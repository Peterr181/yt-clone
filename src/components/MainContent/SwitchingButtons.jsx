import React, { useState } from "react";
import "./SwitchingButtons.css";

const SwitchingButtons = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    "New",
    "Music",
    "Gaming",
    "Live",
    "Coding",
    "Education",
    "Podcast",
    "Movie",
    "Algorithms",
    "Sport",
    "Beauty",
    "Poland",
    "csgo",
  ];

  return (
    <div className="switching-buttons__container">
      <div className="main__content__container__items">
        {categories.map((category, index) => (
          <p
            key={index}
            className={selectedCategory === category ? "active__content" : ""}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </p>
        ))}
      </div>
    </div>
  );
};

export default SwitchingButtons;
