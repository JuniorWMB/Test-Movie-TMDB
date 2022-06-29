import React, { useContext, useState } from "react";
import Image from "next/image";
import dropdownarrow from "../../public/dropdownarrow.svg";
import { ContextStore } from "../../Context/context";

const FilterButton = ({ textPlaceholder, setIsShow, isShow }) => {
  const { setSortByOrder } = useContext(ContextStore);
  const [changeOrder, setChangeOrder] = useState(false);

  const handleFilter = () => {
    if (textPlaceholder === "Genre") {
      //show the genre of movie
      setIsShow(!isShow);
    } else if (textPlaceholder === "Ordre alphabétique") {
      //if changeOrder is true so my sort is by title asc else if popularity desc
      setChangeOrder(!changeOrder);
      if (changeOrder) {
        setSortByOrder("original_title.asc");
      } else {
        setSortByOrder("original_title.desc");
      }
    } else {
      console.log("year");
    }
  };

  /* create text to placeholder send in props from filterMovie and Sortby components */
  return (
    <button
      data-testid="button-all"
      onClick={handleFilter}
      className={
        textPlaceholder === "Genre"
          ? "filter-button"
          : textPlaceholder === "Ordre alphabétique"
          ? "sortby-button"
          : "filter-button-years"
      }
    >
      {textPlaceholder}
      {textPlaceholder === "Genre" ||
      textPlaceholder === "Ordre alphabétique" ? (
        <Image
          src={dropdownarrow}
          width={10}
          height={6}
          alt="dorpdown"
          priority
        />
      ) : null}
    </button>
  );
};

export default FilterButton;
