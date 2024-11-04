import React, { useEffect } from 'react';
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {Col, Row, Image, Figure, Badge, ListGroup, Button, Card } from "react-bootstrap";

import { getDetailsFilm } from '../actions/filmDetailsActions';
import { clearTicketPage } from "../reducers/ticketPageReducer.js";
import poster from '../assets/images/fallback-film-poster.jpg';

const FilmDetails = () => {
    const dispatch = useDispatch();
    const params = useParams();

    const { film, loading, error, filmType } = useSelector((state) => state.filmDetails);
    const navigate = useNavigate();

    useEffect(() => {
        if (params.id) {
            dispatch(getDetailsFilm(params.id));
        }
    }, [params.id, dispatch]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const handleBuyTicket = () => {
        navigate(`/buy-tickets?${new URLSearchParams({ film: film.id }).toString()}`);
        clearTicketPage();
    };

    return (
        <div className="container">
            {film ? (
                <>
                    <section className="section">
                        <Card className="card-img-details card-details">
                            <Card.Img
                                className="card-img"
                                src={film.backdrop_path ? `https://image.tmdb.org/t/p/w500${film.backdrop_path}`: poster}
                                alt="Card image"
                            />
                            <Card.ImgOverlay>
                                <Card.Title>{film.title}</Card.Title>
                            </Card.ImgOverlay>
                        </Card>
                    </section>
                    <section className="section">
                        <Row xs={1} md={3} className="g-4">
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Figure className="card-details-img-figure">
                                    <Figure.Image
                                        alt="171x180"
                                        src={film.poster_path ? `https://image.tmdb.org/t/p/w500${film.poster_path}`: poster}
                                    />
                                    <Figure.Caption></Figure.Caption>
                                </Figure>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Card className="card-details">
                                    <Card.Body>
                                        <Card.Title>{film.title}</Card.Title>
                                        <h6 className="card-details-caption">
                                            Genres:
                                            {film.genres.map(genre => (
                                                <Badge key={genre.id} bg="light" text="dark">
                                                    { genre.name }
                                                </Badge>
                                            ))}
                                        </h6>
                                        <Card.Text>{film.overview}</Card.Text>
                                    </Card.Body>
                                </Card>
                                <ListGroup className="card-details">
                                    {film.production_countries.map(origin_country => (
                                        <ListGroup.Item className="card-details">
                                            Country: { origin_country.name }
                                        </ListGroup.Item>
                                    ))}
                                    <ListGroup.Item className="card-details">Release date: {film.release_date}</ListGroup.Item>
                                    <ListGroup.Item className="card-details">Production companies:
                                        {film.production_companies.map(production_companies => (
                                            <ListGroup.Item key={production_companies.id} className="card-details card-details-logo">
                                                Country: { production_companies.name }
                                                <Image
                                                    src={`https://image.tmdb.org/t/p/w500${production_companies.logo_path}`}
                                                />
                                            </ListGroup.Item>
                                        ))}
                                    </ListGroup.Item>
                                    <ListGroup.Item className="card-details">
                                        {filmType ?
                                            (
                                                <Button
                                                    onClick={handleBuyTicket}
                                                    variant="primary" className="my-btn ticket-form-btn">Buy Ticket
                                                </Button>
                                            )
                                            : <ListGroup.Item className="card-details">Coming soon</ListGroup.Item>
                                        }

                                    </ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </section>

                </>
            ) : (
                <p>No film details available.</p>
            )}
        </div>
    );
};

export default FilmDetails;
