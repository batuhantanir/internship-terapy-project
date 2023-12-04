"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselCard from "./CarouselCard";
import { NextArrowComponent, PrevArrowComponent } from "./carouselButton";

const responsive = [
  // superLargeDesktop
  {
    // the naming can be any, depends on you.
    breakpoint: 3000,
    settings: {
      slidesToShow: 3,
    },
  },
  // desktop
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
    },
  },
  // tablet
  {
    breakpoint: 1023,
    settings: {
      slidesToShow: 2,
    },
  },
  // mobile
  {
    breakpoint: 708,
    settings: {
      slidesToShow: 1,
    },
  },
];

export const Carousel = ({ items }) => {
  const settings = {
    nextArrow: <NextArrowComponent items={items}/>,
    prevArrow: <PrevArrowComponent items={items}/>,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    touchMove: true,
    responsive,
  };

  return (
    <div className="w-[75%] lg:w-[%75] xl:w-[85%] mx-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {items.map((item, idx) => (
            <CarouselCard item={item} key={idx} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Carousel;
