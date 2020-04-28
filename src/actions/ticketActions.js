import * as ACTION from "../actions/types";

export const clearTicketPage = () => ({type: ACTION.CLEAR_TICKET_PAGE});
export const buyTicketStart = () => ({type: ACTION.BUY_TICKET_START});
export const buTicketSuccess = (ticket) => ({type: ACTION.BUY_TICKET_SUCCESS, payload: ticket});
export const buyTicketError = (error) => ({type: ACTION.BUY_TICKET_ERROR, payload: error});

export const buyTicket = (ticket) => (dispatch) => {
    dispatch(buyTicketStart());
        new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: "OK",
                data: {
                    film: ticket.film,
                    places: ticket.places,
                    firstName: ticket.firstName,
                    lastName: ticket.lastName,
                    email: ticket.email,
                    orderNumber:  Math.floor(Math.random() * "100000000")
                }
            })
        },5000);
    })
        .then(response => dispatch(buTicketSuccess(response.data)))
        .catch(error => dispatch(buyTicketError(error)));
};


