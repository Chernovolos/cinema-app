import * as ACTION from "../actions/types";
import moment from "moment";
import CinemaDay from "../models/cinemaDay";

const initialState = {
    cinemaDays: []
};

export default (state = initialState, action) => {
    let {type, payload} = action;

    switch (type) {

        case ACTION.GET_CURRENT_FILMS_SUCCESS:
        case ACTION.GET_CINEMA_DAYS:
            let cinemaDays = [];

            for (let i = 0; i < 30; i++) {
                let cinemaDayDate = moment("2019-03-14T21:00:00.000Z").add(i, "days").toDate();
                let cinemaDayFilms = [];

                for (let film of payload.films) {
                    let rentStartDate = moment(film.rentStart, "YYYY-MM-DD[T]HH:mm:ss").toDate();
                    let rentEndDate = moment(film.rentEnd, "YYYY-MM-DD[T]HH:mm:ss").toDate();

                    if ( (rentStartDate <= cinemaDayDate) && (rentEndDate >= cinemaDayDate)) {
                        cinemaDayFilms.push(film);
                    }
                }
                cinemaDays.push(new CinemaDay(cinemaDayDate, cinemaDayFilms));
            }
            return {...state, cinemaDays};

        default: return state;
    }
}