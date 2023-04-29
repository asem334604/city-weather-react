import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getWeatherAction} from "../actions/getWeatherAction";
import Result from "./Result";

const MainPage = () => {

    const dispatch = useDispatch();
    const [inputVal, setInputVal] = useState('');
    const res = useSelector(state => state.weather);

    // if search parameter included in url,
    // make request and display result
    useEffect(()=> {
        getSearchParamsResult();
    },[]);

    function handleFormSubmit(e) {
        e.preventDefault();
        if (inputVal) {
            dispatch(getWeatherAction(inputVal));
            setSearchParams(inputVal);
        }
    }

    // create history of city requests
    function setSearchParams(enteredVal) {
        if (enteredVal) {
            const url = new URL(window.location.href);
            url.searchParams.set('city', enteredVal);
            //create a browser history entry
            window.history.pushState({}, '', url.toString());
        }
    }


    function getSearchParamsResult() {
        const url = new URL(window.location.href);
        const cityName = url.searchParams.get('city');
        if (cityName)
            dispatch(getWeatherAction(cityName));
    }


    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h1 className="m-5">Check weather in this city:</h1>
                <input className="mx-4" id="city_input"
                       name="city" placeholder="enter city" type="text"
                       onChange={(e) => setInputVal(e.target.value)}
                />
                <button type={'submit'} className="btn btn-success m-4"

                >Current weather
                </button>
            </form>
            {res && <Result data={res}/>}
        </>
    );
};

export default MainPage;