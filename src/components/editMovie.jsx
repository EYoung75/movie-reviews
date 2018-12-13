import React from "react"
import "../App.css"

const EditMovie = (props) => {
    const selected = props.selected
    const selectedMovie = props.movies.map(movie => {
        if (movie.id == selected) {
            return (
                <div>
                    <img className="moviePoster" src={movie.poster_url}></img>
                    <form className="single">
                        <label>Title:</label>
                        <input name="title" placeholder={movie.title}></input>
                        <label>Director:</label>
                        <input name="director" placeholder={movie.director}></input>
                        <label>Year:</label>
                        <input name="year" placeholder={movie.year}></input>
                        <label>Rating:</label>
                        <input name="rating" placeholder={movie.rating}></input>
                        <label>Poster URL:</label>
                        <input name="poster_url"></input>
                        <button className="updateButton">Update</button>
                    </form>
                </div>
            )
        }
    })
    return (
        <div className="movieContainer">
            {selectedMovie}
        </div>

    )
}

export default EditMovie