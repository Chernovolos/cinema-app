import React from "react";
import { connect } from "react-redux";
import { filterFilms , setFilm} from "../actions/filmActions";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import {Col, Row, FormControl, InputGroup, Button} from "react-bootstrap";
import FilmCard from "./FilmCard";
import Preloader from "./Preloader";


class MainPage extends React.Component {

    state = {
        search: "",
        genre: "",
    };

    componentDidMount() {
        // query params
        let queryParams = new URLSearchParams(this.props.location.search);
        let genre = queryParams.get("genre") || "";
        let search = queryParams.get("search") || "";
        this.setState({...this.state, genre, search}, () => this.props.filterFilms({genre: this.state.genre, search: this.state.search}));
    }

    handleGenreChange = (event) => {
        console.log("GENRE SELECTED: ", event.target.value);
        this.setState({...this.state, genre: event.target.value});
    };

    handleSearchChange = (event) => {
        this.setState({...this.state, search: event.target.value});
    };

    handleSearch = () => {
        let queryParams = {};
        if (this.state.search.length) {
            queryParams.search = this.state.search;
        }
        if (this.state.genre.length) {
            queryParams.genre = this.state.genre;
        }
        this.props.history.push({
            pathname: this.props.location.pathname,
            search: new URLSearchParams(queryParams).toString()
        });
        this.props.filterFilms({genre: this.state.genre, search: this.state.search});
    };

    handleFilmClick = (film) => {
        this.props.setFilm(film);
        this.props.history.push({pathname: `/films/${film.id}`});
    };

    handleGenreClick = (genre) => {
        this.setState({...this.state, genre, search: ""}, this.handleSearch);
    };

    render() {
        let {error, genres, films, preloader} = this.props;
        let {genre, search} = this.state;
        return(
            <div className="container">
                <section className="section">
                    <Row>
                        <Col>
                            <InputGroup sm={3}>
                                <FormControl className="main-search-input-group bg-transparent outline-secondary"  as="select" value={genre} onChange={this.handleGenreChange}>
                                    <option key={-1} value=""  className="main-search-options">Выберите жанр</option>
                                    {
                                        genres.map((genre, i) => {
                                            return <option key={i} value={genre}  className="main-search-options">{genre}</option>
                                        })
                                    }
                                </FormControl>
                                <FormControl  className="main-search-input-group bg-transparent outline-secondary" placeholder="Введите название фильма" value={search} onChange={this.handleSearchChange}/>
                                <InputGroup.Append>
                                    <Button onClick={this.handleSearch} variant={"secondary"}>
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
        filterFilms: (filter) => dispatch(filterFilms(filter)),
        setFilm: (film) => dispatch(setFilm(film))
    })
)(MainPage);
