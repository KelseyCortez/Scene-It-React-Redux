import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/Add_Movie';
import { Card, Button, Col, Container } from 'react-bootstrap';

function MovieCard(props) {
    return (
        // <div className="movie">
        //     <div className="card">
        //         <h2 className="movie-title">{props.movie.Title}</h2>
        //         <h3>{props.movie.Year}</h3>
        //         <img className="card-img" src={props.movie.Poster} alt="" />
        //         <div className="card-body">
        //             <button onClick={() => { props.addMovie(props.movie) }}>Add to Watch list </button>

        <Container>
            <Col>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={props.movie.Poster} alt="" />
                    <Card.Body>
                        <Card.Title className="movie-title">{props.movie.Title}</Card.Title>
                        <Card.Text>
                            {props.movie.Year}
                        </Card.Text>
                        <Button variant="primary" onClick={() => { props.addMovie(props.movie) }}>Add to Watch list </Button>
                    </Card.Body>
                </Card>
            </Col>
        </Container>

        //         </div>
        //     </div>
        // </div>
    )
}



const mapDispatchToProps = {
    addMovie
}

export default connect(
    null,
    mapDispatchToProps,
)(MovieCard)