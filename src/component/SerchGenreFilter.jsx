import React, {useEffect, useState} from "react";
import { useDispatch } from "react-redux";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getMoviesByGenre, searchMovies } from "../actions/filmsPageActions";

const SearchGenreFilter = () => {
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            dispatch(searchMovies(query));
            setQuery(""); // Clear input after search
        }
    };

    const handleGenreChange = (e) => {
        const selectedGenre = e.target.value;
        setGenre(selectedGenre);
        if (selectedGenre) {
            dispatch(getMoviesByGenre(selectedGenre));
        }
    };

    useEffect(() => {
        dispatch(searchMovies());
    }, [dispatch]);

    return (
        <div>
            <Form onSubmit={handleSearch} className="mb-3">
                <Row>
                    <Col xs={8}>
                        <Form.Control
                            type="text"
                            placeholder="Search for a movie..."
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                    </Col>
                    <Col xs={2}>
                        <Button variant="secondary" type="submit" >
                            <FontAwesomeIcon icon={faSearch} className="main-search-icon"/>
                        </Button>
                    </Col>
                </Row>
            </Form>
            <Form.Group controlId="genre-select">
                <Form.Label>Filter by Genre:</Form.Label>
                <Form.Select value={genre} onChange={handleGenreChange}>
                    <option value="">Select a genre</option>
                    <option value="28">Action</option>
                    <option value="35">Comedy</option>
                    <option value="18">Drama</option>
                    <option value="27">Horror</option>
                </Form.Select>
            </Form.Group>
        </div>
    );
};

export default SearchGenreFilter;

