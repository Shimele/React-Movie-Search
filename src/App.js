import React from "react";
import "./App.css";
import "./Animation.js";
import MovieSearch from "./MovieSearch";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>
        <MovieSearch />
      </div>
    );
  }
}

export default App;
