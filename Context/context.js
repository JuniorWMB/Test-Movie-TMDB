import React, { createContext, useState } from "react";

export const ContextStore = createContext();

export const ContextGlobal = ({ children }) => {
  const [isGenre, setIsGenre] = useState(12);
  const [year, setYear] = useState(2022);
  const [pageMovie, setPageMovie] = useState(1);
  const [change, setChange] = useState(false);
  const [changeMovie, setChangeMovie] = useState(false);
  const [sortByOrder, setSortByOrder] = useState("popularity.desc");
  const [moviesContext, setMoviesContext] = useState([]);
  return (
    <ContextStore.Provider
      value={{
        isGenre,
        setIsGenre,
        year,
        setYear,
        sortByOrder,
        setSortByOrder,
        moviesContext,
        setMoviesContext,
        change,
        setChange,
        changeMovie,
        setChangeMovie,
        pageMovie,
        setPageMovie,
      }}
    >
      {children}
    </ContextStore.Provider>
  );
};
