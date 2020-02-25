import React from "react"
import "../App.scss"

const EditMovie = (props) => {
    const selected = props.selected
    const selectedMovie = props.movies.map(movie => {
        if (movie.id == selected) {
            return (
                <div className="editMovie__container">
                    <h2>Edit Review</h2>
                    <img className="editMovie__poster" src={movie.poster_url}></img>
                    <form className="editMovie__form" onSubmit={props.edit} id={movie.id}>
                        <label>Title:</label>
                        <input onChange={props.handleInput} name="title" placeholder={movie.title}></input>
                        <label>Director:</label>
                        <input onChange={props.handleInput} name="director" placeholder={movie.director}></input>
                        <label>Year:</label>
                        <input onChange={props.handleInput} name="year" placeholder={movie.year}></input>
                        <label>Rating:</label>
                        <input onChange={props.handleInput} name="rating" placeholder={movie.rating}></input>
                        <label>Poster URL:</label>
                        <input onChange={props.handleInput} name="poster_url"></input>
                        <button type="submit">Update</button>
                    </form>
                </div>
            )
        }
    })
    return (
        <div className="editMovie">
            {selectedMovie}
        </div>
    )
}

export default EditMovie