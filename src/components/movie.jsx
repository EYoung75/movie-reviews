import React from "react"
import "../App.css"

const Movie = (props) => {
    const selected = props.selected
    const selectedMovie = props.movies.map(movie => {
        if (movie.id == selected) {
            return (
                <div>
                    <img className="moviePoster" src={movie.poster_url} alt={`Movie Poster for ${movie.title}`}></img>
                    <h1>Title: {movie.title}</h1>
                    <h2>Director: {movie.director}</h2>
                    <h2>Year: {movie.year}</h2>  
                    <h2>My Rating: {movie.rating}</h2>              
                </div>
            )
        }
    })
    return (
        <div className="movieContainer">
            <div className="movieBorder">
                {selectedMovie}
            </div>
        </div>
    )
}

export default Movie