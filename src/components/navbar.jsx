import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Movies from "./movies.jsx";
import Home from "./home.jsx";



class Navbar extends React.Component {
    render() {
        return (
            <Router>
                <div className="nav">
                        <Link to="/"><p className="navLinks">Home</p></Link>
                        <Link to="/movies"><p className="navLinks">Reviewed Movies</p></Link>
                    <Route path="/movies" render={() => <Movies movies={this.props.movies} add={this.props.add} addForm={this.props.addForm} handleInput={this.props.handleInput} addMovie={this.props.addMovie} deleteMovie={this.props.deleteMovie}/>}></Route>
                    <Route path="/" exact component={Home}></Route>
                </div>
            </Router>

        )
    }
}

export default Navbar;