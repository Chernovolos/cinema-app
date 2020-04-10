import React from "react";
import { connect } from "react-redux";
import {Col, Row} from "react-bootstrap";
import Preloader from "./Preloader";
import Image from "./Image";
import {clearTicketPage} from "../actions/ticketActions";

class FilmPage extends React.Component {

    state = {
        search: ""
    };

    handleBuyTicket = () => {
        this.props.history.push({
            pathname: "/buy-tickets",
            search: new URLSearchParams({film: this.props.film.id}).toString()
        });
        this.props.clearTicketPage();
    };

    render() {
        let {film, preloader} = this.props;
        let loading = preloader || !film;
        return(
            <section className="section section-film-page">
                <div className="container">
                    {
                        loading?
                            <Row>
                                <Preloader show={loading}/>
                            </Row> :
                            <>
                                <Row>
                                    <Col sm={12} md={4} xl={3}>
                                        <div className="film-page-img">
                                            <Image src={film.poster}/>
                                        </div>
                                    </Col>
                                    <Col sm={12} md={8} xl={9}>
                                        <div>
                                            <h5 className="film-page-title">{film.title}</h5>
                                            <p className="film-page-description">{film.description}</p>
                                            <p className={`film-page-description ${film.genres.length ? "": "d-none"}`}><span className="film-page-subtitle">Жанр: </span>
                                                {
                                                    film.genres.map((genre, i) => (
                                                        i === 0 ?
                                                            genre :
                                                            "," + genre
                                                    ))
                                                }
                                            </p>
                                            <p className={`film-page-description ${film.actors.length ? "": "d-none"}`}><span className="film-page-subtitle">В ролях: </span>
                                                {
                                                    film.actors.map((actor, i) => (
                                                        i === 0 ?
                                                            actor :
                                                            ", " + actor
                                                    ))
                                                }
                                            </p>
                                            <p className={`film-page-description ${film.countries.length ? "": "d-none"}`}><span className="film-page-subtitle">Страна: </span>
                                                {
                                                  film.countries.map((country, i) => (
                                                      i === 0 ?
                                                          country :
                                                          ", " + country
                                                  ))
                                                }
                                            </p>
                                            <p className={`film-page-description ${film.language.length ? "": "d-none"}`}><span className="film-page-subtitle">Язык:</span> {film.language}</p>
                                            <p className={`film-page-description ${film.length.length ? "": "d-none"}`}><span className="film-page-subtitle">Длительность:</span> {film.length}</p>
                                            <p className={`film-page-description ${film.age.length ? "": "d-none"}`}><span className="film-page-subtitle">Возраст:</span> {film.age}</p>
                                        </div>
                                        <div>
                                            <button onClick={this.handleBuyTicket} className=" my-btn film-page-btn">Buy Ticket</button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={8} className="mt-3">
                                        <div className="film-page-video">
                                            <iframe width="560" height="315"
                                                    src={film.trailer} frameBorder="0"
                                                    allowFullScreen/>
                                        </div>
                                    </Col>
                                </Row>
                            </>
                    }
                </div>
            </section>
        )
    }

}

export default connect(
    state => ({
        film: state.filmPage.film,
        preloader: state.filmPage.preloader,
    }),
    (dispatch) => ({
        clearTicketPage: () => dispatch(clearTicketPage())
    })
)(FilmPage);