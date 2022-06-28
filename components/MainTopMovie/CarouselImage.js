import React, { useRef } from "react";
import SliderLeftArrow from "../Arrows/SliderLeftArrow";
import SliderRightArrow from "../Arrows/SliderRightArrow";
import Carousel from "../Carousel/Carousel";

const CarouselImage = ({ movieTopTen }) => {
  //Create my ref to catch my carousel element
  const movieRef = useRef(null);

  // Function to move my carousel to the left
  const nextSlide = () => {
    movieRef.current.scrollLeft += movieRef.current.offsetWidth;
  };

  // Function to move my carousel to the right
  const prevSlide = () => {
    movieRef.current.scrollLeft -= movieRef.current.offsetWidth;
  };

  return (
    <div className="top-movie-carousel">
      <SliderLeftArrow prevSlide={prevSlide} />
      <div className="movie-carousel">
        <Carousel movieTopTen={movieTopTen} movieRef={movieRef} />
      </div>
      <SliderRightArrow nextSlide={nextSlide} />
    </div>
  );
};

export default CarouselImage;
