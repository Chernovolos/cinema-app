import * as ACTION from "../actions/types";
import {HALLS_DATA} from "../models/mocks";

const initialState = {
    preloader: false,
    hall: HALLS_DATA[0],
    error: null,
    isTicketBought: false,
    serverAnswer: null
};

export default (state = initialState, action) => {
    let {type, payload} = action;
    switch (type) {

        case ACTION.CLEAR_TICKET_PAGE:
            return initialState;

        case ACTION.BUY_TICKET_START:
            return {
                ...state,
                preloader: true
            };

        case ACTION.BUY_TICKET_SUCCESS:
            return {
                ...state,
                serverAnswer: payload,
                preloader: false,
                error: null,
                isTicketBought: true
            };

        case ACTION.BUY_TICKET_ERROR:
            return {
                ...state,
                preloader: true,
                error: payload,
            };
        }

    return state;
}


