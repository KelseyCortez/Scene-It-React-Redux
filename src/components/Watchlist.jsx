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
                    deleteMovie={()=>{
                        console.log('yoooo');
                        this.props.deleteMovie(index);
                    }}

                    />
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
const mapDispatchToProps = {
    deleteMovie,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Watchlist);