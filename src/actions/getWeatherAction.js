export const PUT_WEATHER_SUCCESS = 'PUT_WEATHER_SUCCESS';
export const PUT_WEATHER_ERROR = 'PUT_WEATHER_ERROR';
export const PUT_WEATHER_WAITING = 'PUT_WEATHER_WAITING';

export const putWeatherSuccessAction = (weatherJSON) => ({
    type: PUT_WEATHER_SUCCESS,
    payload: weatherJSON
});

export const putWeatherErrorAction = (errJSON) => ({
    type: PUT_WEATHER_ERROR,
    payload: errJSON
});

export const putWeatherWaitingAction = () => ({
    type: PUT_WEATHER_WAITING,
    payload: 'Getting data...'
});

export const getWeatherAction = (city) => {
    const requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=71fdef9bdd87cc41615717c692885330&units=metric`;
    if (city) {
        return (dispatch) => {
            dispatch(putWeatherWaitingAction());
            fetch(url, requestOptions)
                .then(response => response.json())
                .then(data => dispatch(putWeatherSuccessAction(data)))
                .catch(error => dispatch(putWeatherErrorAction(error)));
        }
    }
}
