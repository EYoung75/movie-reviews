import React from "react"
import "../App.css"
import { Link } from "react-router-dom"

const Movies = (props) => {

    const movies = props.movies.map(movie => {
        return (
            <div className="movieList" id={movie.id}>
                <div className="movieTitle">
                    <Link to="/movie"><h2 onClick={props.select} id={movie.id}>{movie.title}</h2></Link>
                </div>
                <div className="director">
                    <h3>{movie.director}</h3>
                </div>
                <div className="year">
                    <h3>{movie.year}</h3>
                </div>
                <div className="rating">
                    <h3>{movie.rating}</h3>
                </div>
                <div className="buttons">
                    <button className="upDel" id={movie.id} onClick={props.deleteMovie}>Delete Movie</button>
                    <Link to="/EditMovie"><button className="upDel" id={movie.id} onClick={props.select}>Edit</button></Link>
                </div>
            </div>
        )
    })
    return (
        <div className="moviesContainer">
            <h2 className="moviesTitle">All Movies</h2>
            {props.addForm === false ?
                <div>
                    <div className="tableHeader">
                        <h2>Title</h2>
                        <h2>Director</h2>
                        <h2>Year</h2>
                        <h2>My Rating</h2>
                    </div>
                    <button className="addButton" onClick={props.handleAdd}>Add Movie</button>
                    {movies}
                </div> :
                <div className="addMovie">
                    <h1 className="addTitle">Add A Movie</h1>
                    <button onClick={props.handleAdd} className="backButton">X</button>
                    <form className="newMovie" onSubmit={props.addMovie}>
                        <label>Title</label>
                        <input name="title" onChange={props.handleInput} type="text"></input>
                        <label>Director</label>
                        <input name="director" onChange={props.handleInput} type="text"></input>
                        <label>Year</label>
                        <input name="year" onChange={props.handleInput} type="number"></input>
                        <label>Rating</label>
                        <input name="rating" onChange={props.handleInput} type="number" min="1" max="5" placeholder="1-5"></input>
                        <label>Poster URL</label>
                        <input name="poster_url" onChange={props.handleInput} type="text"></input>
                        <button id="submit" type="submit">Add Movie</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Movies;