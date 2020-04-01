import { combineReducers } from "redux";
import mainPageReducer from "./mainPageReducer";
import filmPageReducer from "./filmPageReducer";

export default combineReducers({
    mainPage: mainPageReducer,
    filmPage: filmPageReducer
});