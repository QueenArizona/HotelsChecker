import React from "react";
import slide1 from "../img/slider/slide1.jpg";
import slide2 from "../img/slider/slide2.jpg";
import slide3 from "../img/slider/slide3.jpg";
import "../styles/Slider.css";

function Slider(props) {
  return (
    <div className="slider">
      {[slide1, slide2, slide3, slide1, slide2, slide3].map((el, index) => (
        <div className="slider__item" key={index}>
          <img className="slider__icon" src={el} alt="slide-img" />
        </div>
      ))}
    </div>
  );
}

export default Slider;
