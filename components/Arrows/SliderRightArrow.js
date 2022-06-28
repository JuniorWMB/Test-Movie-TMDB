import React from "react";
import Image from "next/image";
import SliderRigthArrow from "../../public/slidernextarrow.svg";

const RightArrow = ({ nextSlide }) => {
  return (
    <div data-testid="arrowRight" className="block-arrow">
      <div className="right-arrow" onClick={nextSlide}>
        <Image
          src={SliderRigthArrow}
          alt="slider image suivant"
          width={25}
          height={15}
        />
      </div>
    </div>
  );
};

export default RightArrow;
