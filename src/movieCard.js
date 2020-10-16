import React from "react";

export default function MovieCard(props) {
  const movie = props.movie;
  return (
    <div className="card">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--details">
        <div className="card--title">
          <h3>{movie.title}</h3>
        </div>
        <p>
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p>
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p className="card--description">{movie.overview}</p>
      </div>
    </div>
  );
}
