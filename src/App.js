import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.jsx";

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
      allInputs: false
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
    if(this.state.title.length > 0 && this.state.director.length > 0 && this.state.year > 0 && this.state.poster_url.length > 0){
      this.setState({allInputs: true})
    }
  }

  addMovie = (e) => {
    if (this.state.allInputs === false) {
       alert("Please fill out all fields")
    } else {
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
          .then(
            this.setState({
              title: "",
              director: "",
              year: 0,
              rating: 0,
              poster_url: "",
              allInputs: false
            })
          )
      }
   }

   deleteMovie =(e)=> {
    fetch(`https://crud-movie-database.herokuapp.com/${e.target.id}`, {
            method: "DELETE",
          })
          .then(()=>this.reload())
          
   }


  async componentDidMount() {
    const response = await fetch("https://crud-movie-database.herokuapp.com/")
    const json = await response.json()
    this.setState({movies: json})
  }

  reload = () => {
    fetch("https://crud-movie-database.herokuapp.com/")
      .then(res => res.json())
      .then(res => 
        this.setState({
          movies: res
        })
      )
  }

  render() {
    return (
        <div className="body">
          <Navbar movies={this.state.movies} add={this.handleAdd} addForm={this.state.add} handleInput={this.handleInput} addMovie={this.addMovie} deleteMovie={this.deleteMovie}></Navbar>
        </div>
    );
  }
}

export default App;
