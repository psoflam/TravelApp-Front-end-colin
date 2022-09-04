import React, { useState } from "react";
import "./slider.css";

import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

export default function SliderCard() {
  const [current, setCurrent] = useState(0);
  const SliderData = [
    {
      id: 1,
      img: "../Assets/Images/photo-1518684079-3c830dcef090.avif",
    },
    {
      id: 2,
      img: "../Assets/Images/photo-1476514525535-07fb3b4ae5f1.avif",
    },
    {
      id: 3,
      img: "../Assets/Images/photo-1500530855697-b586d89ba3ee.avif",
    },
    {
      id: 4,
      img: "../Assets/Images/photo-1502791451862-7bd8c1df43a7.avif",
    },
    {
      id: 5,
      img: "../Assets/Images/photo-1523906834658-6e24ef2386f9.avif",
    },
    {
      id: 6,
      img: "../Assets/Images/photo-1527631746610-bca00a040d60.avif",
    },
    {
      id: 7,
      img: "../Assets/Images/photo-1533105079780-92b9be482077.avif",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrent(current > 0 ? current - 1 : 2)
      : setCurrent(current < SliderData.length - 1 ? current + 1 : 0);
  };

  return (
    <div className="slider--container">
      <div
        className="slider--body"
        style={{ transform: `translateX(-${current * 30}vw)` }}
      >
        {SliderData.map((d) => (
          <div className="img--container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <img className="imgContainer" src={d.img} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <FaArrowAltCircleLeft
        className="left-arrow"
        onClick={() => handleClick("left")}
      />
      <FaArrowAltCircleRight
        className="right-arrow"
        onClick={() => handleClick("right")}
      />
    </div>
  );
}
//  className={index === current ? "slide active" : "slide"}
