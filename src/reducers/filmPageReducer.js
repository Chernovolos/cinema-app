import * as ACTION from "../actions/types";

const initialState = {
    film: null,
    preloader: false
};

export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case ACTION.SET_FILM:
            return {
                ...state,
                film: payload
            };

        default: return state;
    }
}