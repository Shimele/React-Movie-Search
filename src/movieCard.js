import React from "react";

export default function MovieCard(props) {
  const movie = props.movie;
  return (
    <div className="card" data-aos="fade-up" data-aos-duration="500">
      <img
        className="card--image"
        src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
        alt={movie.title + " poster"}
      />
      <div className="card--details">
        <div
          className="card--title"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <h3>{movie.title}</h3>
        </div>
        <p data-aos="fade-right" data-aos-duration="2000">
          <small>RELEASE DATE: {movie.release_date}</small>
        </p>
        <p data-aos="fade-left" data-aos-duration="2000">
          <small>RATING: {movie.vote_average}</small>
        </p>
        <p
          className="card--description"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {movie.overview}
        </p>
      </div>
    </div>
  );
}
