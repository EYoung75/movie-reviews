import React from "react";
import "../App.scss";
import { Link } from "react-router-dom";
import { FaPlusCircle, FaTrash, FaEdit } from "react-icons/fa";

const Movies = props => {
  const movies = props.movies.map(movie => {
    return (
      <div className="movie" id={movie.id}>
        <Link to="/movie">
          <h2 onClick={props.select} id={movie.id} className="movie__title">
            {movie.title}
          </h2>
        </Link>
        <p>{movie.director}</p>
        <p>{movie.year}</p>
        <p className="movie__rating">{movie.rating}</p>
        <div className="movie__buttons">
          <button className="delete" id={movie.id} onClick={props.deleteMovie}>
            Delete Movie <FaTrash />
          </button>
          <Link
            to="/EditMovie"
            className="edit"
            id={movie.id}
            onClick={props.select}
          >
            Edit <FaEdit />
          </Link>
        </div>
      </div>
    );
  });
  return props.addForm === false ? (
    <div className="movies">
      <h2 className="movies__title">All Movies</h2>
      <div className="movies__labels">
        <h2>Title</h2>
        <h2>Director</h2>
        <h2>Year</h2>
        <h2>My Rating</h2>
        <button onClick={props.handleAdd}>
          Add <FaPlusCircle />
        </button>
      </div>
      <div className="movies__list">{movies}</div>
    </div>
  ) : (
    <div className="addModal">
      <div className="addModal__header test">
        <h2>Add A Movie</h2>
        <button onClick={props.handleAdd}>Cancel</button>
      </div>
      <form className="addModal__form" onSubmit={props.addMovie}>
        <label>Title</label>
        <input name="title" onChange={props.handleInput} type="text"></input>
        <label>Director</label>
        <input name="director" onChange={props.handleInput} type="text"></input>
        <label>Year</label>
        <input name="year" onChange={props.handleInput} type="number"></input>
        <label>Rating</label>
        <input
          name="rating"
          onChange={props.handleInput}
          type="number"
          min="1"
          max="5"
          placeholder="1-5"
        ></input>
        <label>Poster URL</label>
        <input
          name="poster_url"
          onChange={props.handleInput}
          type="text"
        ></input>
        <button id="submit" type="submit">
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default Movies;
