import { useContext, useEffect, useState } from "react";
import Head from "next/head";
import Header from "../components/Header/headerBlock/Header";
import AllMovieImageInfo from "../components/MainAllMovie/AllMovieImageInfo";
import Carousel from "../components/MainTopMovie/CarouselImage";
import FilterMovies from "../components/MainTopMovie/FilterMovies";
import TitleBlock from "../components/Text/Title";
import axios from "axios";
import BgImage from "../public/backgroundimg.jpg";

import { ContextStore } from "../Context/context";
import Image from "next/image";

export default function Home({ movieTopTen, movieGenre }) {
  const { isGenre, year, sortByOrder, moviesContext, setMoviesContext } =
    useContext(ContextStore);

  const [pagination, setPagination] = useState(1);

  useEffect(() => {
    try {
      const handleFetch = async () => {
        // Fetch data from external API
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.NEXT_PUBLIC_API}&language=fr-FR&page=${pagination}&with_genres=${isGenre}&primary_release_year=${year}&sort_by=${sortByOrder}`
        );
        setMoviesContext(data);
      };
      handleFetch();
    } catch (error) {
      throw new Error("Failed to fetch");
    }
  }, [isGenre, sortByOrder, year, pagination]);

  return (
    <div>
      <Head>
        <title>Movie TMDB Junior</title>
        <meta name="description" content="Test Movie TMDB" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <div className="bg-image">
          <div className="bg-color" />
          <Image src={BgImage} alt="Background Image" layout="fill" priority />
        </div>
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
  let movieTopTen = null;
  let movieGenre = null;

  try {
    // Fetch data from external API

    const resTop = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=fr-FR`
    );
    const responeGenre = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.API_KEY}&language=fr-FR`
    );

    // Catch error in status
    if (resTop.status !== 200 || responeGenre.status !== 200) {
      throw new Error("Failed to fetch");
    }
    movieTopTen = await resTop.json();
    movieGenre = await responeGenre.json();
  } catch (error) {
    movieTopTen = { error: { message: error.message } };
    movieGenre = { error: { message: error.message } };
  }

  // Pass data to the page via props

  return { props: { movieTopTen, movieGenre } };
};
