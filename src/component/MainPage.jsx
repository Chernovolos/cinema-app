import React from "react";
import { getCurrentFilms, filterFilms , setFilm} from "../actions/filmActions";
import FilmCard from "./FilmCard";
import { connect } from "react-redux";
import { Col, Row, FormControl, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Preloader from "./Preloader";


class MainPage extends React.Component {

    state = {
        search: "",
        genre: "",
    };

    componentDidMount() {
        this.props.initialize();
    }

    handleGenreChange = (event) => {
        console.log("GENRE SELECTED: ", event.target.value);
        this.setState({...this.state, genre: event.target.value});
    };

    handleSearchChange = (event) => {
        this.setState({...this.state, search: event.target.value});
    };

    handleSearch = () => {
        this.props.filterFilms({genre: this.state.genre, search: this.state.search});
    };

    handleFilmClick = (film) => {
        console.log(film);
        this.props.setFilm(film);
        this.props.history.push({pathname: `/films/${film.id}`});
    };

    handleGenreClick = (genre) => {
        this.setState({...this.state, genre, search: ""}, this.handleSearch);
    };

    render() {
        let {error, genres, films, preloader} = this.props;
        let {genre} = this.state;
        return(
            <div className="container">
                <section className="section">
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl as="select" value={genre} onChange={this.handleGenreChange}>
                                    <option key={-1} value="">Выберите жанр</option>
                                    {
                                        genres.map((genre, i) => {
                                            return <option key={i} value={genre}>{genre}</option>
                                        })
                                    }
                                </FormControl>
                                <FormControl placeholder="Введите название фильма" onChange={this.handleSearchChange}/>
                                <InputGroup.Append>
                                    <Button onClick={this.handleSearch}>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                    </Row>
                </section>
                <section className="section">
                    <div className="row">
                        <h1 className="text-danger">{error}</h1>
                        <Preloader show={preloader}/>
                        {
                            films.map(film => {
                                return <FilmCard key={film.id}
                                                 {...film}
                                                 onFilmClick={() => this.handleFilmClick(film)}
                                                 onGenreClick={this.handleGenreClick}/>
                            })
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default connect(
    state => ({
        films: state.mainPage.shownFilms,
        preloader: state.mainPage.preloader,
        error: state.mainPage.error,
        genres: state.mainPage.genres
    }),
    (dispatch) => ({
        initialize: () => dispatch(getCurrentFilms()),
        filterFilms: (filter) => dispatch(filterFilms(filter)),
        setFilm: (film) => dispatch(setFilm(film))
    })
)(MainPage);
