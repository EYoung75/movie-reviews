import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.jsx";
import Movie from "./components/movie.jsx";
import Movies from "./components/movies.jsx";
import Home from "./components/home.jsx";
import { Route } from "react-router-dom";
import EditMovie from './components/editMovie';

class App extends Component {
  constructor(){
    super()
    this.state = {
      movies: [],
      add: false,
      title: "",
      director: "",
      year: 0,
      rating: 0,
      poster_url: "",
      allInputs: false,
      selected: 0
    }
  }

  handleAdd = () => {
    this.setState({add: !this.state.add})
  }

  handleInput = (e) => {
    const { name, value } = e.target
    this.setState({
      [name]: value
    })
    if(this.state.title.length > 0 && this.state.director.length > 0 && this.state.year > 0){
      this.setState({allInputs: true})
    }
  }

  editMovie = (e) => {
    if(this.state.allInputs === false) {
      e.preventDefault()
      alert("Please fill out all fields")
    } else {
      e.preventDefault()
      const updatedMovie = {
        title: this.state.title,
        director: this.state.director,
        year: this.state.year,
        rating: this.state.rating,
        poster_url: this.state.poster_url
      }
      fetch(`https://crud-movie-database.herokuapp.com/${e.target.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedMovie)
      })
      .then(res => res.json())
      .then(() => this.reload())
      .then(() => window.location="http://localhost:3000/movies")
    }
  }


  addMovie = (e) => {
    if (this.state.allInputs === false) {
      e.preventDefault()
      alert("Please fill out all fields")
    } else {
        e.preventDefault()
        const newMovie = {
          title: this.state.title,
          director: this.state.director,
          year: this.state.year,
          rating: this.state.rating,
          poster_url: this.state.poster_url
        }
          fetch("https://crud-movie-database.herokuapp.com/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newMovie)
          })
          .then(res => res.json())
          .then(alert(`Thank you, your movie review has been added`))
          .then(()=> this.reload())
      }
   }

   deleteMovie =(e)=> {
    fetch(`https://crud-movie-database.herokuapp.com/${e.target.id}`, {
            method: "DELETE",
          })
          .then(()=> this.reload())
          
   }


  async componentDidMount() {
    this.reload()
  }

  reload = () => {
    fetch("https://crud-movie-database.herokuapp.com/")
      .then(res => res.json())
      .then(res => 
        this.setState({
          movies: res,
          add: false,
          title: "",
          director: "",
          year: 0,
          rating: 0,
          poster_url: "",
          allInputs: false,
          selected: 0
        })
      )
  }

  selectMovie = (e) =>{
    this.setState({selected: e.target.id})
  }

  resetSelected = () => {
    this.setState({selected: 0})
  }

  render() {
    return (
        <div className="body">
          <Navbar reset={this.resetSelected}></Navbar>
          <Route path="/editMovie" render={() => <EditMovie edit={this.editMovie} selected={this.state.selected} movies={this.state.movies} handleInput={this.handleInput}></EditMovie>}></Route>
          <Route path="/movie" render={() => <Movie selected={this.state.selected} movies={this.state.movies} />}></Route>
          <Route path="/movies" render={() => <Movies select={this.selectMovie} movies={this.state.movies} addForm={this.state.add} handleAdd={this.handleAdd} handleInput={this.handleInput} addMovie={this.addMovie} deleteMovie={this.deleteMovie} />}></Route>
          <Route path="/" exact component={Home}></Route>
        </div>
    );
  }
}

export default App;
