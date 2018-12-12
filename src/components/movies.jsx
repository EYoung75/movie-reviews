import React from "react";

class Movies extends React.Component {
    render() {
        const props = this.props.movies
        const movies = props.map(movie => {
            return (
                <div id={movie.id} className="movieList">
                    <div className="movieTitle">
                        <h2>{movie.title}</h2>
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
                        <button className="upDel" id={movie.id}onClick={this.props.deleteMovie}>Delete Movie</button>
                        <button className="upDel" id={movie.id}>Edit</button>
                    </div>
                </div>
            )
        })
        return (
            <div className="moviesContainer">
                <h2 className="moviesTitle">All Movies</h2>
                {this.props.addForm === false ?
                    <div>
                        <div className="tableHeader">
                            <h2>Title</h2>
                            <h2>Director</h2>
                            <h2>Year</h2>
                            <h2>My Rating</h2>
                        </div>
                        <button className="addButton" onClick={this.props.add}>Add Movie</button>
                        {movies}
                    </div> :
                    <div className="addMovie">
                        <h1 className="addTitle">Add A Movie</h1>
                        <button onClick={this.props.add} className="backButton">X</button>
                        <form className="newMovie">
                            <label>Title</label>
                            <input name="title" onChange={this.props.handleInput} type="text"></input>
                            <label>Director</label>
                            <input name="director" onChange={this.props.handleInput} type="text"></input>
                            <label>Year</label>
                            <input name="year" onChange={this.props.handleInput} type="number"></input>
                            <label>Rating</label>
                            <input name="rating" onChange={this.props.handleInput} type="number" min="1" max="5" placeholder="1-5"></input>
                            <label>Poster URL</label>
                            <input name="poster_url" onChange={this.props.handleInput} type="text"></input>
                            <button id="submit" type="button" onClick={this.props.addMovie}>Add Movie</button>
                        </form>
                    </div>
                }
            </div>
        )
    }
}

export default Movies;