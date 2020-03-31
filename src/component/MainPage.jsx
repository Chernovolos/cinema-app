import React from "react";
import { getCurrentFilms, filterFilms } from "../actions/filmActions";
import FilmCard from "./FilmCard";
import { connect } from "react-redux";
import { Col, Row, FormControl, InputGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'



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

    handleSearchChange =(event) => {
        this.setState({...this.state, search: event.target.value});
    };

    handleSearch = () => {
        this.props.filterFilms({genre: this.state.genre, search: this.state.search});
    };

    render() {
        let {error, genres, films} = this.props;
        return(
            <div className="container">
                <section className="section">
                    <Row>
                        <Col>
                            <InputGroup className="mb-3">
                                <FormControl as="select" onChange={this.handleGenreChange}>
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
                        {/*<Col>*/}
                        {/*    <FontAwesomeIcon icon={faSearch}/>*/}
                        {/*</Col>*/}
                    </Row>
                </section>
                <section className="section">
                    <div className="row">
                        <h1 color="red">{error}</h1>
                        {
                            films.map(film => {
                                return <FilmCard key={film._id} {...film}/>
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
        filterFilms: (filter) => dispatch(filterFilms(filter))
    })
)(MainPage);
