import React from "react";
import "../App.scss";

const Movie = props => {
  const selected = props.selected;
  const selectedMovie = props.movies.map(movie => {
    if (movie.id == selected) {
      return (
        <div className="viewMovie__container">
          <img
            className="viewMovie__poster"
            src={movie.poster_url}
            alt={`Movie Poster for ${movie.title}`}
          ></img>
          <div>
            <h1>{movie.title}</h1>
            <h2>Directed by {movie.director}</h2>
            <h2>{movie.year}</h2>
            <h2>My Rating: {movie.rating}</h2>
          </div>
        </div>
      );
    }
  });
  return <div className="viewMovie">{selectedMovie}</div>;
};

export default Movie;
