import React from 'react';
import { connect } from 'react-redux';
import { addMovie } from '../redux/actions/Add_Movie';
import { Card, Button, Col } from 'react-bootstrap';

function MovieCard(props) {
    return (
        <Col xs sm="6" md="4" lg="3">
            <Card >
                <Card.Img variant="top" src={props.movie.Poster} alt="" />
                <Card.Body>
                    <Card.Title className="movie-title">{props.movie.Title}</Card.Title>
                    <Card.Text>
                        {props.movie.Year}
                    </Card.Text>
                    <Button variant="primary" onClick={() => { props.addMovie(props.movie) }}>Add to Watch list </Button>
                    <Button onClick= {props.deleteMovie}>Delete From Watch list</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}



const mapDispatchToProps = {
    addMovie
}

export default connect(
    null,
    mapDispatchToProps,
)(MovieCard)