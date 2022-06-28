import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

const Title = () => {
  return (
    <div data-testid="logo" className="logo">
      <Image src={Logo} alt="Logo" layout="fill" />
    </div>
  );
};

export default Title;
