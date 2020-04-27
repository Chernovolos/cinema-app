import * as ACTION from "../actions/types";

const initialState = {
    films: [],
    preloader: false,
    error: null,
};

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case ACTION.GET_CURRENT_FILMS_START:
            console.log("%c APP | GET_CURRENT_FILMS_START", "font-size:18px;color:blue");
            return {
                ...state,
                preloader: true
            };

        case ACTION.GET_CURRENT_FILMS_SUCCESS:
            console.log('%c APP | GET_CURRENT_FILMS_SUCCESS', 'font-size:18px;color:green', payload);
            return {
                ...state,
                preloader: false,
                films: payload.films,
                error: null
            };

        // TODO 29.03.2020 add error handling
        case ACTION.GET_CURRENT_FILMS_ERROR:
            console.log('%c APP | GET_CURRENT_FILMS_ERROR', 'font-size:18px;color:red', payload);
            return {
                ...state,
                preloader: false,
                error: payload,
                films: [],
            };

        default: return state;

    }
}