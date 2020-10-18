import React from "react";
import "./App.css";
import "./Animation.js";
import MovieSearch from "./MovieSearch";
import popcorn from "./popcorn.png";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Your Movie Searcher</h1>
        <MovieSearch />
        <img className="popcorn" src={popcorn} alt="movie popcorn" />
      </div>
    );
  }
}

export default App;
