import { combineReducers } from "redux";
import mainPageReducer from "./mainPageReducer";
import filmPageReducer from "./filmPageReducer";
import ticketPageReducer from "./ticketPageReducer";


export default combineReducers({
    mainPage: mainPageReducer,
    filmPage: filmPageReducer,
    ticketPage: ticketPageReducer
});