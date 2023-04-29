import React from 'react';

const Result = ({data}) => {
    //getting needed fields from json data object
    const {
        weather, main,
         wind, sys,
         name, cod, message
    } = data;

    function showCurrTime(timestamp) {
        return new Date(timestamp).toLocaleTimeString();
    }

    if (cod === 200) {
        return (
                <div className="card m-4 p-4 rounded-3">
                    <h1>{name}</h1>
                    <p>
                        <small>Weather now: </small>
                        <span className="big_txt">{weather[0].description}</span>
                    </p>
                    <p>
                        <small>Country: </small>
                        <span className="big_txt">{sys.country}</span>
                        <small>Sunrise: </small>
                        <span className="big_txt">{showCurrTime(sys.sunrise)}</span>
                        <small>Sunset: </small>
                        <span className="big_txt">{showCurrTime(sys.sunset)}</span>
                    </p>
                    <h2><small>Temperature: </small>{Math.round(main.temp)} &#8451;</h2>
                    <p>
                        <small>Feels like:</small>
                        <span className="big_txt">{Math.round(main.feels_like)} &#8451;</span>
                        <small>Min: </small>
                        <span className="big_txt">{Math.round(main.temp_min)} &#8451;</span>
                        <small>Max: </small>
                        <span className="big_txt">{Math.round(main.temp_max)} &#8451;</span>
                    </p>
                    <p>
                        <small>Humidity: </small>
                        <span className="big_txt">{main.humidity}g/m<sup>3</sup></span>
                        <small>Pressure: </small>
                        <span className="big_txt">{main.pressure} hPa</span>
                    </p>
                    <p>
                        <small>Wind speed: </small>
                        <span className="big_txt">{wind.speed} m/s</span>
                    </p>
                </div>

        );
    } else {
        return (
            <div className="card m-4 p-4 rounded-3">
                <h1>{message}</h1>
            </div>
            )
    }


};

export default Result;