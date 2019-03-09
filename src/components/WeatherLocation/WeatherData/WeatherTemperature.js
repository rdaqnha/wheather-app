import React from 'react';
import WeatherIcons from 'react-weathericons';
import { constWeather } from '../../../constans/weather';
import PropTypes from 'prop-types';
import './styles.css';

const stateToIconName = weatherState => {
  switch (weatherState) {
    case constWeather.CLOUD:
      return "cloud";
    case constWeather.DRIZZLE:
      return "day-showers";
    case constWeather.SUN:
      return "day-sunny";
    case constWeather.RAIN:
      return "rain";
    case constWeather.SNOW:
      return "snow";
    case constWeather.THUNDER:
      return "day-thunderstore";
    default:
      return "day-sunny";
  }

};

const getWeatherIcon = weatherState => {
  return (<WeatherIcons className="wicon" name={stateToIconName(weatherState)} size="4x" />);
};

const WeatherTemperature = ({ temperature, weatherState }) => (
  <div className="weatherTemperatureCont">
    {getWeatherIcon(weatherState)}
    <span className="temperature">{`${temperature}`}</span>
    <span className="temperatureType">Cº</span>
  </div>
);

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string,
};

export default WeatherTemperature;