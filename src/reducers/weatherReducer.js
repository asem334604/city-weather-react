import {PUT_WEATHER_ERROR, PUT_WEATHER_SUCCESS, PUT_WEATHER_WAITING} from "../actions/getWeatherAction";

const initialState = {
    waiting: '',
    weather:{},
    error: {}
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUT_WEATHER_SUCCESS:
            return {...state, weather: action.payload};
        case PUT_WEATHER_ERROR:
            return {...state, error: action.payload};
        case PUT_WEATHER_WAITING:
            return {...state, waiting: action.payload};
        default:
            return state;
    }
}