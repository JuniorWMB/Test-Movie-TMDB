import React from "react";
import Image from "next/image";
import SliderLeftArrow from "../../public/sliderpreviousarrow.svg";

const LeftArrow = ({ prevSlide }) => {
  return (
    <div data-testid="arrowLeft" className="block-arrow">
      <div className="left-arrow" onClick={prevSlide}>
        <Image
          src={SliderLeftArrow}
          alt="slider image précédent"
          width={25}
          height={15}
        />
      </div>
    </div>
  );
};

export default LeftArrow;
