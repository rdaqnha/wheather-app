
import { api_key, url_base_forecast } from '../constans/api_url';
import getUrlWeatherByCity from './../services/getUrlWeatherByCity'
import transformForecast from './../services/tansformForecast';
import transformWeather from './../services/transformWeather';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';
export const GET_WHEATHER_CITY = 'GET_WEATHER_CITY';
export const SET_WHEATHER_CITY = 'SET_WEATHER_CITY';


const setCity = payload => ({type: SET_CITY, payload});
const setForecastData = payload => ({ type: SET_FORECAST_DATA, payload });
const getWeatherCity = payload => ({ type: GET_WHEATHER_CITY, payload });
const setWeatherCity = payload => ({ type: SET_WHEATHER_CITY, payload });

export const setSelectedCity = payload => {

    return (dispatch, getState) => {
        const url_forecast = `${url_base_forecast}?q=${payload}&appid=${api_key}`;

        dispatch(setCity(payload));

        const state = getState();
        const date = state.cities[payload] && state.cities[payload].forecastDataDate;

        const now = new Date();

        if(date && (now - date) < 1 * 60 * 1000) {
            return;
        }

        return fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);

                dispatch(setForecastData({city: payload, forecastData}));
            }
        );

    };
};

export const setWeather = payload => {

    return dispatch => {
        payload.forEach(city => {
            const api_weather = getUrlWeatherByCity(city);

            dispatch(getWeatherCity(city));

            return fetch(api_weather).then( 
                data => (data.json())
            ).then( 
                weather_data => {
                    const weather = transformWeather(weather_data);

                    dispatch(setWeatherCity({city, weather}));
                }
            );
        });
    };

};

