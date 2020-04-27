import { combineReducers } from "redux";
import mainPageReducer from "./mainPageReducer";
import filmPageReducer from "./filmPageReducer";
import ticketPageReducer from "./ticketPageReducer";
import appReducer from "./appReducer";
import schedulePageReducer from "./schedulePageReducer";


export default combineReducers({
    app: appReducer,
    mainPage: mainPageReducer,
    filmPage: filmPageReducer,
    ticketPage: ticketPageReducer,
    schedulePage: schedulePageReducer,
});