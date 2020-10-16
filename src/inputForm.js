import React, { useState } from "react";

export default function InputForm(props) {
  //update movie name searched with react state hook
  const [query, setQuery] = useState(""); //set and change state of input value
  //update movie with react state hook
  const [movies, setMovie] = useState([]); //

  const { searchMovie } = props;
  return (
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
  );
}
