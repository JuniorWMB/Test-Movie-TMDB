import React from "react";
import ImageText from "../ImageText/ImageText";

const Carousel = ({ movieTopTen, movieRef }) => (
  <section className="carousel" ref={movieRef}>
    {movieTopTen.map((slide, idx) => {
      return (
        <ImageText
          image={slide.poster_path}
          title={slide.title}
          year={slide.release_date}
          key={idx}
        />
      );
    })}
  </section>
);

export default Carousel;
