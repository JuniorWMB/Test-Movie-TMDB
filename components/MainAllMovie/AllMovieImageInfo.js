import React, { useEffect, useState } from "react";
import ImageText from "../ImageText/ImageText";
import { useRouter } from "next/router";

const AllMovieImageInfo = ({ movieDataAll, pagination, setPagination }) => {
  const [allMovie, setAllMovie] = useState([]);
  const router = useRouter();

  //Set the allMovie from movieDataAll
  useEffect(() => {
    setAllMovie(movieDataAll);
  }, [movieDataAll, allMovie]);

  // Listen to scroll positions for loading more data on scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollEnd);
    return () => {
      window.removeEventListener("scroll", handleScrollEnd);
    };
  });

  //detect when user scroll to the last element, if is it load next page movie
  const handleScrollEnd = () => {
    const lastMovieLoaded = document.querySelector(
      ".allmovie-main-block:last-child "
    );
    if (lastMovieLoaded) {
      const lastMovieLoadedOffset =
        lastMovieLoaded.offsetTop + lastMovieLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastMovieLoadedOffset) {
        if (allMovie.page < allMovie.total_pages) {
          setPagination(pagination + 1);

          //if user scroll to the end so scroll to top
          router.push({ scroll });
        }
      }
    }
  };

  return (
    <div className="allmovie-main-block">
      {allMovie.results?.map((movie, idx) => {
        return (
          <div key={idx} className="allmovie-image">
            <ImageText
              image={movie.poster_path}
              title={movie.title}
              year={movie.release_date}
              className="testpp"
            />
          </div>
        );
      })}
    </div>
  );
};

export default AllMovieImageInfo;
