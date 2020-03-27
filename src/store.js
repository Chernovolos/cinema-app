import { createStore } from "redux";
import mainPageReducers from "./reducers/mainPageReducer"

export const store = createStore(mainPageReducers);
