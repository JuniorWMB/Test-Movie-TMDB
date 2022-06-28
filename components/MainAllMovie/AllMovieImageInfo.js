import React, { useEffect, useState, useContext } from "react";
import ImageText from "../ImageText/ImageText";
import { useRouter } from "next/router";

const AllMovieImageInfo = ({ movieDataAll, pagination, setPagination }) => {
  const [allMovie, setAllMovie] = useState([]);
  const router = useRouter();

  //Set the allMovie from movieDataAll
  useEffect(() => {
    setAllMovie(movieDataAll);
    // console.log(allMovie);
  }, [movieDataAll, allMovie]);

  // Listen to scroll positions for loading more data on scroll
  useEffect(() => {
    window.addEventListener("scroll", handlePlus);
    return () => {
      window.removeEventListener("scroll", handlePlus);
    };
  });

  const handlePlus = () => {
    const lastMovieLoaded = document.querySelector(
      ".allmovie-main-block:last-child "
    );
    if (lastMovieLoaded) {
      const lastMovieLoadedOffset =
        lastMovieLoaded.offsetTop + lastMovieLoaded.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      // Detects when user scrolls down till the last movie
      if (pageOffset > lastMovieLoadedOffset) {
        // Stops loading
        if (allMovie.page < allMovie.total_pages) {
          setPagination(pagination + 1);
          router.push({ scroll }); // Trigger fetch
          // const query = router.query;
          // query.page = parseInt(allMovie.page) + 1;
          // router.push({
          //   pathname: router.pathname,
          //   query: query,
          // });
        }
      }
    }
  };

  const handleScroll = (e) => {
    // console.log("TOP", e.target.documentElement.scrollTop);
    // console.log("HEIGHT", e.target.documentElement.scrollHeight);
    // if (
    //   window.innerHeight + e.target.documentElement.scrollTop + 1 >=
    //   e.target.documentElement.scrollHeight
    // ) {
    //   setPagination(pagination + 1);
    // console.log("at the bottom of the page");
    // Trigger fetch
    // const query = router.query;
    // console.log("QUERY", query);
    // query.page = movieDataAll.page + 1;
    // console.log("QUERY pageeee", query.page);
    // console.log("QUERY pageeee", query.page);
    // console.log("PATHHH", router.pathname);
    // router.push({
    //   pathname: router.pathname,
    //   query: (query.page = parseInt(movieDataAll.page) + 1),
    // });
    // console.log("here", pagination);
    // }
    // To get page offset of last movie
    // const lastMovieLoaded = document.querySelector(
    //   ".allmovie-main-block > .allmovie-image:last-child"
    // );
    // console.log("=>>>", lastMovieLoaded);
    // if (lastMovieLoaded) {
    //   const lastMovieLoadedOffset =
    //     lastMovieLoaded.offsetTop + lastMovieLoaded.clientHeight;
    //   console.log("OFFSET", lastMovieLoadedOffset);
    //   const pageOffset = window.pageYOffset + window.innerHeight;
    //   console.log("PAGEOFFSET", pageOffset);
    //   // Detects when user scrolls down till the last user
    //   if (pageOffset > lastMovieLoadedOffset) {
    //     // Stops loading
    //     if (movieDataAll.page < movieDataAll.total_pages) {
    //       // Trigger fetch
    //       const query = router.query;
    //       query.page = parseInt(movieDataAll.page) + 1;
    //       router.push({
    //         pathname: router.pathname,
    //         query: query,
    //       });
    //     }
    //   }
    // }
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
