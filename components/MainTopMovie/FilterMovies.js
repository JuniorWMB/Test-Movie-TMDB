import React, { useState, useContext } from "react";
import FilterButton from "../Filter/FilterButton";
import SortBy from "../Filter/SortBy";
import { ContextStore } from "../../Context/context";

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
            <div data-testid="genreMovie" className="genre-filters">
              {movieGenre?.map((genre, idx) => {
                return (
                  <span onClick={() => handleGenre(genre.id)} key={idx}>
                    {genre.name}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        <FilterButton textPlaceholder="Année" />
      </div>
    </section>
  );
};

export default FilterMovies;
