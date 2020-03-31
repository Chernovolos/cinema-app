import axios from 'axios';
import * as ACTION from "../actions/types";

export const getCurrentFilmsStart = () => ({type: ACTION.GET_CURRENT_FILMS_START});
export const getCurrentFilmsSuccess = (films) => ({type: ACTION.GET_CURRENT_FILMS_SUCCESS, payload: films});
export const getCurrentFilmsError = (error) => ({type: ACTION.GET_CURRENT_FILMS_ERROR, payload: error});
export const filterFilms = (filter) => ({type: ACTION.FILTER_CURRENT_FILMS, payload: filter});

export const getCurrentFilms = () => (dispatch) => {
    dispatch(getCurrentFilmsStart());
    axios("http://cinema-app-1.herokuapp.com/api/movie")
        .then(result => {
            console.log(result);
            dispatch(getCurrentFilmsSuccess(result.data.movie))
        })
        .catch(error => dispatch(getCurrentFilmsError(error)))
};
