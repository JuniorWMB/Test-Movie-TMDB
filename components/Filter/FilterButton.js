import React, { useContext } from "react";
import Image from "next/image";
import dropdownarrow from "../../public/dropdownarrow.svg";
import { ContextStore } from "../../Context/context";

const FilterButton = ({ textPlaceholder, setIsShow, isShow }) => {
  const { setSortByOrder } = useContext(ContextStore);

  const handleFilter = () => {
    if (textPlaceholder === "Genre") {
      setIsShow(!isShow);
    } else if (textPlaceholder === "Ordre alphabétique") {
      setSortByOrder("original_title.asc");
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
