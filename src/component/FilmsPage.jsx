import React from "react";
import { useSelector } from "react-redux";
import Container from 'react-bootstrap/Container';

import FilmCard from "./FilmCard";
import Preloader from "./Preloader";
import SearchGenreFilter from "./SerchGenreFilter.jsx";



const FilmsPage = () => {
    const films = useSelector((state) => state.filmsPageSlice.list);
    const error = useSelector((state) => state.filmsPageSlice.error);
    const preloader = useSelector((state) => state.filmsPageSlice.preloader);

    return (
        <>
            <div className="container">
                <section className="section">
                    <SearchGenreFilter />
                </section>
            </div>
            <Container className="d-flex align-items-center my-4">
                <div className="orange-line"></div>
                <h2 className="text-uppercase header-text ms-3">Films Page</h2>
            </Container>
            <div className="container">
                <section className="section">
                    <div className="row">
                        {error && <h1 className="text-danger">{error}</h1>}
                        <Preloader show={preloader} />
                        {films.map(film => (
                            <FilmCard
                                key={film.id}
                                {...film}
                                isNowInCinema={true}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
};

export default FilmsPage;
