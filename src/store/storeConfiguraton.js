import {applyMiddleware, createStore} from "redux";
import {weatherReducer} from "../reducers/weatherReducer";
import {logger} from "redux-logger";
import thunk from "redux-thunk";

export const store = createStore(weatherReducer, applyMiddleware(logger,thunk));