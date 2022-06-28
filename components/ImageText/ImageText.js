import React from "react";
import Image from "next/image";
import tmdb from "../../public/tmdb.png";
import FallBackImage from "../FallBack/FallBackImage";

const ImageText = ({ image, title, year }) => {
  return (
    <div className="poster ">
      <div className="poster-image">
        <FallBackImage
          src={`https://image.tmdb.org/t/p/w1280${image}`}
          priority
          layout="fill"
        />
      </div>

      <div className="image-block-text">
        <span>{title}</span>
        <span>{year.split("-").slice(0, 1).join()}</span>
      </div>
    </div>
  );
};

export default ImageText;
