import React from "react";

const ImageCard = ({ slider }) => {
  return (
    <div className="slider-item">
      <div className="item">
        <div
          className="slider-bg"
          style={{
            backgroundImage: `url(${slider.sliderimg})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            width: "100%",
            height: "600px",
          }}
        ></div>
        <div className="slider-content">
          <h2 className="fade-up">{slider.heading || "Default Heading"}</h2>
          <h4 className="fade-up delay">
            {slider.description || "Default Description"}
          </h4>
          {slider.button && (
            <a href={slider.btn_url} target="_blank">
              <button className="zoom-in">{slider.button}</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
