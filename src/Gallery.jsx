import React from "react";
import "./gallery.css";
import Slider from "./Slider";
import img2 from "./assets/bottom-left.png";
import img1 from "./assets/top-left.png";

const Gallery = () => {
  return (
    <>
      <div className="gallery-wrapper">
        <div className="hero-container">
          <div className="background">
            <img src={img1} className="top-left" />
            <img src={img2} className="bottom-left" />
          </div>
          <div className="gallery-header">
            <div className="header">
              <h2>GLIMPSES OF E-CELL</h2>
            </div>
          </div>
          <div className="gallery-content">
            <p className="gallery-para">
              "Step back in time and reminisce with our cherished alumni through
              captivating glimpses of the past. Explore our exclusive past
              images section, a treasure trove of unforgettable moments and
              milestones. From heartwarming reunions to triumphant achievements,
              witness the legacy of our beloved alumni come to life in vivid
              detail. Join us on a nostalgic journey as we celebrate the
              enduring bonds and remarkable accomplishments that define our
              community."
            </p>
          </div>
        </div>
        <div className="slider-wrapper">
          <h2 className="slider-head">MEMORIES TO CHERISH</h2>

          <Slider />
        </div>
      </div>
    </>
  );
};

export default Gallery;
