import React from "react";

const DropDownGenre = ({ movieGenre }) => {
  return (
    <div data-testid="genreMovie" className="genre-filters">
      {movieGenre.map((genre, idx) => {
        return (
          <span onClick={() => handleGenre(genre.id)} key={idx}>
            {genre.name}
          </span>
        );
      })}
    </div>
  );
};

export default DropDownGenre;
