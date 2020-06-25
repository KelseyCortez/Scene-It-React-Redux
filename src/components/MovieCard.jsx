import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/Add_Movie';

function MovieCard(props) {
    // function getMovies(id) {
    //     fetch(`https://www.omdbapi.com/?s=${id}&apikey=e83ecd95`)
    //     .then(res => res.json())
    //     .then(data => {
    //         if (data.Search) {
    //             saveMovies(data.Search)
    //         }
    //     })
    // }

    return (
        <div className="movie">
            <div className="card">
                <h2 className="movie-title">{props.movie.Title}</h2>
                <h3>{props.movie.Year}</h3>
                <img className="card-img" src={props.movie.Poster} alt="" />
                <div className="card-body">
                    <button onClick={() => { props.addMovie(props.movie) }}>Add to Watch list </button>
                </div>
            </div>
        </div>
    )
}
const mapDispatchToProps = {
    addMovie
}

export default connect(
    null,
    mapDispatchToProps,
)(MovieCard)