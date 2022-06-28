import React from "react";
import HeaderInputSearch from "../InputSearch/HeaderInputSearch";
import Logo from "../Logo/Logo";

const Header = () => {
  return (
    <div className="header-block-element">
      <Logo />
      <HeaderInputSearch />
    </div>
  );
};

export default Header;
