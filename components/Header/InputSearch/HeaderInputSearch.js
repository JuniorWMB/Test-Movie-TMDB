import Image from "next/image";
import React from "react";
import SearchIcon from "../../../public/searchicon.svg";

const HeaderInputSearch = () => (
  <div className="block-input-header">
    <input
      data-testid="input-search"
      className="inp-icon"
      placeholder="Rechercher un film"
    />
    <div className="search-icon-input">
      <Image src={SearchIcon} alt="icon search" width={20} height={20} />
    </div>
  </div>
);

export default HeaderInputSearch;
