import axios from 'axios';
import * as ACTION from "../actions/types";
import Film  from "../models/film";

export const getCurrentFilmsStart = () => ({type: ACTION.GET_CURRENT_FILMS_START});
export const getCurrentFilmsSuccess = (films) => ({type: ACTION.GET_CURRENT_FILMS_SUCCESS, payload: films});
export const getCurrentFilmsError = (error) => ({type: ACTION.GET_CURRENT_FILMS_ERROR, payload: error});
export const filterFilms = (filter) => ({type: ACTION.FILTER_CURRENT_FILMS, payload: filter});
export const setFilm = (film) => ({type: ACTION.SET_FILM, payload: film});

export const getCurrentFilms = () => (dispatch) => {
    dispatch(getCurrentFilmsStart());
    axios("http://cinema-app-1.herokuapp.com/api/movie")
        .then(({data}) => {
            let films = data.movie.map(movie => (new Film(movie)));
            dispatch(getCurrentFilmsSuccess(films))
        })
        .catch(error => dispatch(getCurrentFilmsError(error)))
};
