import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./Residencies.css";
import data from "../../utils/slider.json";
import { sliderSettings } from "../../utils/common";
import SwipperButton from "./SwipperButton";

const Residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="innerWidth paddings r-container">
        <div className="flexColStart r-head">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Popular Residencies</span>
        </div>
        <Swiper {...sliderSettings}>
            <SwipperButton />
          {data.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="flexColStart r-card">

                <img src={card.image} alt="home" />

                <span className="secondaryText r-price">
                  <span id="dollar">$</span>
                  <span>{card.price}</span>
                </span>

                <span className="primaryText">{card.name}</span>

                <span className="secondaryText">{card.detail}</span>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
