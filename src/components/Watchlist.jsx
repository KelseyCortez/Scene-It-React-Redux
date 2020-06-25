import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

class Watchlist extends Component {
    render() {
        return (
            <div>
                <h2>Watch List</h2>
                <Link to='/'>Back to Home Page</Link>
                {this.props.movies.map((movie, index) => {
                    return (
                        <MovieCard movie={movie} key={index} />
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movies: state.movies
    }
}

export default connect(
    mapStateToProps,
    null,
)(Watchlist);