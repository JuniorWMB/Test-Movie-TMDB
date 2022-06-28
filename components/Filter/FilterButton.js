import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import dropdownarrow from "../../public/dropdownarrow.svg";
import { ContextStore } from "../../Context/context";

const FilterButton = ({ textPlaceholder, movieGenre, setIsShow, isShow }) => {
  const {
    // moviesContext,
    // setMoviesContext,
    // setChange,
    // change,
    setSortByOrder,
    // sortByOrder,
  } = useContext(ContextStore);

  // useEffect(() => {
  //   const year = new Date().getFullYear();
  //   // return (
  //   const TEST = Array.from(new Array(50), (v, i) => (
  //     <option key={i} value={year + i}>
  //       {year + i}
  //     </option>
  //   ));
  // }, []);

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
    <>
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
    </>
  );
};

export default FilterButton;
