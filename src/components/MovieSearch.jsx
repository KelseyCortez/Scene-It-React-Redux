import React, { Component } from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';


export default class MovieSearch extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movieName: '',
            movies: [],

        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        let name = this.state.movieName
        fetch(`https://www.omdbapi.com/?s=${name}&apikey=e83ecd95`)
            .then(res => res.json())
            .then(data => {
                if (data.Search) {
                    this.setState({
                        movies: data.Search
                    })
                }
            })
    }

    handleChange = (e) => {
        this.setState({
            movieName: e.target.value
        })
    }

    render() {
        return (

            <div className="movie-container">
                <header>
                    <h1>Scene It?</h1>
                </header>
                <h2>Add Movies to your Watch List</h2>
                <Link to='/watchlist'>Go to Watch List</Link>
                <div className="movie-form">
                    <form onSubmit={this.handleFormSubmit}>
                        <input type="text" id="search" value={this.state.movieName} onChange={this.handleChange} />
                        <button type="submit">Search</button>
                    </form>
                </div>
                <div className="movie-card">
                    {this.state.movies.map((movie, index) => {
                        return (
                            <MovieCard movie={movie} key={index}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}