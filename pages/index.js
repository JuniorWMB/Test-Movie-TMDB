import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/headerBlock/Header";
import AllMovieImageInfo from "../components/MainAllMovie/AllMovieImageInfo";
import Carousel from "../components/MainTopMovie/CarouselImage";
import FilterMovies from "../components/MainTopMovie/FilterMovies";
import TitleBlock from "../components/Text/Title";
import axios from "axios";

import { ContextStore } from "../Context/context";

export default function Home({ movieTopTen, movieGenre }) {
  const { isGenre, year, sortByOrder, moviesContext, setMoviesContext } =
    useContext(ContextStore);

  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    const handleFetch = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API}&language=fr-FR&page=${pagination}&with_genres=${isGenre}&primary_release_year=${year}&sort_by=${sortByOrder}`
      );
      setMoviesContext(data);
    };
    handleFetch();
  }, [isGenre, sortByOrder, year, pagination]);

  return (
    <div>
      <Head>
        <title>Movie TMDB Test Junior</title>
        <meta name="description" content=" Movie TMDB Test Junior" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="bg-image" />
        <Header />

        <main className="first-main">
          <TitleBlock title="Les 10 meilleurs films" />
          <Carousel movieTopTen={movieTopTen.results.slice(0, 10)} />
          <div className="block-line">
            <div className="line" />
          </div>
          <TitleBlock title="Tous les films" />
          <FilterMovies movieGenre={movieGenre.genres} />
        </main>
      </header>
      <main className="second-main">
        <AllMovieImageInfo
          movieDataAll={moviesContext}
          pagination={pagination}
          setPagination={setPagination}
        />
      </main>
    </div>
  );
}

export const getServerSideProps = async ({ query }) => {
  // Fetch the first page as default
  const page = query.page || 1;
  let movieData = null;
  let movieTopTen = null;
  let movieGenre = null;

  // Fetch data from external API
  try {
    //Fetch All movie
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr-FR&page=${page}`
    );

    //Fetch top Movie
    const resTop = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr-FR`
    );
    const responeGenre = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=fr-FR`
    );

    if (res.status !== 200) {
      throw new Error("Failed to fetch");
    }

    movieData = await res.json();
    movieTopTen = await resTop.json();
    movieGenre = await responeGenre.json();
  } catch (err) {
    movieData = { error: { message: err.message } };
    movieTopTen = { error: { message: err.message } };
    movieGenre = { error: { message: err.message } };
  }

  // Pass data to the page via props
  return { props: { movieData, movieTopTen, movieGenre } };
};
