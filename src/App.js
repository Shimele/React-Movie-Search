import React from "react";
import "./App.css";
import "./Animation.js";
import MovieSearch from "./MovieSearch";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">Your Movie Searcher</h1>
        <MovieSearch />
      </div>
    );
  }
}

export default App;