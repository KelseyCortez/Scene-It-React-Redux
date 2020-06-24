import React from 'react';

export default function MovieCard(props) {
    
        return (
                <div className="movie">
                    <div className="card">
                        <h2 className="movie-title">{props.movie.Title}</h2>
                        <h3>{props.movie.Year}</h3>
                    <img className ="card-img" src= {props.movie.Poster} alt="" />
                    <div className="card-body">
                        <button type="submit">Add to Watch list </button>
                    </div>
                </div>
            </div>
        )
    }
