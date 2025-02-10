import React, { useEffect, useState, useCallback } from "react";
import ImageCard from "./ImageCard";
import "./Slider.css";

const HeroSlider = ({ slides = [], autoSlide = true, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = slides.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    if (autoSlide && totalSlides > 1) {
      const slideInterval = setInterval(nextSlide, interval);
      return () => clearInterval(slideInterval);
    }
  }, [autoSlide, interval, nextSlide, totalSlides]);

  return (
    <div className="slider-container">
      <h2>React Hero Image Slider</h2>
      <div className="slider-area">
        {totalSlides > 0 ? (
          <ImageCard
          key={slides[currentIndex].id || currentIndex} 
          slider={slides[currentIndex]}
          />
        ) : (
          <p>Loading Slider...</p>
        )}

        <div className="slider-control-btn">
          <button onClick={prevSlide} disabled={totalSlides <= 1}>
            Prev
          </button>
          <button onClick={nextSlide} disabled={totalSlides <= 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
