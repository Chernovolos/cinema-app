import React from "react";
import {Col, Row} from "react-bootstrap";
import FilmCard from "./FilmCard";

let CinemaDay = ({dateTitle, films, onFilmClick}) => {

    return (
        <>
            <Row>
                <Col sm={12} md={12} xl={12}>
                    <h4 className="cinema-day-title">{dateTitle}</h4>
                </Col>
            </Row>
            <Row className="justify-content-sm-start justify-content-md-between">
                {
                    films.map(film => {
                        return <FilmCard key={film.id}
                                         {...film}
                                         onFilmClick={() => onFilmClick(film)}/>
                    })
                }
            </Row>
        </>
    );
};

export default CinemaDay;