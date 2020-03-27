import { createStore } from "redux";
import mainPageReducers from "./reducers/mainPageReducers"

export const store = createStore(mainPageReducers);
