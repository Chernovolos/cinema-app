import React from "react";
import { useSelector } from "react-redux";
import { Row, Carousel, Container } from "react-bootstrap";
import FilmCard from "./FilmCard";
import Preloader from "./Preloader";

const MainPage = () => {
    const filmsUpcoming = useSelector(state => state.filmsUpcoming.filmsUpcoming);
    const films = useSelector(state => state.films.films);
    const preloader = useSelector(state => state.films.preloader);
    const error = useSelector(state => state.films.error);
    const itemsPerSlide = 4;

    return (
        <>
            <Container className="d-flex align-items-center my-4">
                <div className="orange-line"></div>
                <h2 className="text-uppercase header-text ms-3">Now in the cinema</h2>
            </Container>
            <div className="container">
                <section className="section">
                    <div>
                        {error && <h1 className="text-danger">{error}</h1>}
                        <Preloader show={preloader} />
                        <Carousel fade>
                            {Array.from({ length: Math.ceil(films.length / itemsPerSlide) }).map((_, slideIndex) => (
                                <Carousel.Item key={slideIndex}>
                                    <Row>
                                        {films.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map(film => (
                                            <FilmCard
                                                key={film.id}
                                                {...film}
                                                isNowInCinema={true}
                                            />
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </section>
            </div>
            <Container className="d-flex align-items-center my-4">
                <div className="orange-line"></div>
                <h2 className="text-uppercase header-text ms-3">Soon to the cinema</h2>
            </Container>
            <div className="container">
                <section className="section">
                    <div>
                        {error && <h1 className="text-danger">{error}</h1>}
                        <Preloader show={preloader} />
                        <Carousel fade>
                            {Array.from({ length: Math.ceil(filmsUpcoming.length / itemsPerSlide) }).map((_, slideIndex) => (
                                <Carousel.Item key={slideIndex}>
                                    <Row>
                                        {filmsUpcoming.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map(film => (
                                            <FilmCard
                                                key={film.id}
                                                {...film}
                                                isNowInCinema={false}
                                            />
                                        ))}
                                    </Row>
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </div>
                </section>
            </div>
        </>
    );
};

export default MainPage;
