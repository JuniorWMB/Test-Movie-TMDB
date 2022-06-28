import React, { useState, useContext } from "react";
import FilterButton from "../Filter/FilterButton";
import SortBy from "../Filter/SortBy";
import { ContextStore } from "../../Context/context";
import DropDownGenre from "../DropDown/DropDownGenre";

const FilterMovies = ({ movieGenre }) => {
  const [isShow, setIsShow] = useState(false);

  const { setIsGenre } = useContext(ContextStore);

  // Fonction to retrieve ID Genre and pass to setIsGenreId and toggle isShow state
  const handleGenre = (genreID) => {
    setIsGenre(genreID);
    setIsShow(!isShow);
  };

  return (
    <section className="section-allmovie-search">
      <SortBy />
      <div className="section-filterby">
        <label htmlFor="name" className="mb-2 italic">
          Filtrer par :
        </label>
        <div className="button-filter">
          <FilterButton
            textPlaceholder="Genre"
            setIsShow={setIsShow}
            isShow={isShow}
          />
          {isShow && (
            //map to see all genre in dropdown
            <DropDownGenre movieGenre={movieGenre} />
          )}
        </div>
        <FilterButton textPlaceholder="Année" />
      </div>
    </section>
  );
};

export default FilterMovies;
