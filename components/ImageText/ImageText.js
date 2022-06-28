import React from "react";
import Image from "next/image";
import tmdb from "../../public/tmdb.png";

const ImageText = ({ image, title, year }) => {
  return (
    <div className="poster ">
      <div className="poster-image">
        <Image
          src={`https://image.tmdb.org/t/p/w1280${image}`}
          alt="image"
          // width="140px"
          // height="202px"
          priority
          layout="fill"
          quality={100}
          className="image-slider"
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
