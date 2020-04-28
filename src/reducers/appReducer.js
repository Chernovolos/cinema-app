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
            return {
                ...state,
                preloader: true
            };

        case ACTION.GET_CURRENT_FILMS_SUCCESS:
            return {
                ...state,
                preloader: false,
                films: payload.films,
                error: null
            };

        case ACTION.GET_CURRENT_FILMS_ERROR:
            return {
                ...state,
                preloader: false,
                error: payload,
                films: [],
            };

        default: return state;

    }
}