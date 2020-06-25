import React, { Component } from 'react'
import { connect } from 'react-redux'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'
import { deleteMovie } from '../redux/actions/Add_Movie'

class Watchlist extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

// getMovies = (id) => {
//     const movie = this.state;
//     fetch(`https://www.omdbapi.com/?s=${id}&apikey=e83ecd95`, {
//         method: 'POST'
//     })
//         .then(res => res.json())
//         .then(data => {
//             if (data.Search) {
//                 movie(data.Search)
//             }
//         })
// }


render() {
    return (
        <div>
            <h2>Watch List</h2>
            <Link to='/'>Back to Home Page</Link>
            {this.props.movies.map((movie, index) => {
                return (
                    <MovieCard 
                    movie={movie} 
                    key={index} 
                    />
                    )
                    // <button onClick={() => { props.deleteMovie(props.index) }}>Delete From Watch list</button>
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