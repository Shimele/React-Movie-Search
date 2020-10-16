import React, { useState } from "react";
import MovieCard from "./movieCard";

export default function MovieSearch() {
  //update movie name searched with react state hook
  const [query, setQuery] = useState(""); //set and change state of input value
  //update movie with react state hook
  const [movies, setMovie] = useState([]); //

  const searchMovie = async (e) => {
    e.preventDefault();

    const url = `https://api.themoviedb.org/3/search/movie?api_key=b2c2debf96aa714bc4dcc508ed334fc1&query=${query}`;

    const response = await fetch(url);
    const data = await response.json();
    setMovie(data.results); //put results data object inside the setMovie function (array)
  };
  return (
    <>
      <form className="form" onSubmit={searchMovie}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="type a movie"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="movie-display">
        {movies
          .filter((movie) => movie.poster_path) //filter out movies with no poster
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  );
}
