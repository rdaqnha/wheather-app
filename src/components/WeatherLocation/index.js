import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { constWeather } from '../../constans/weather';

const data = {
  temperature: 5,
  weatherState: constWeather.SUN,
  humidity: 10,
  wind: '10 m/s'
}

class WeatherLocation extends Component {
  render() {
    return (
      <div className="weatherLocationCont">
        <Location
          city={"Toledo"}>
        </Location>
        <WeatherData
          data={data}>
        </WeatherData>
      </div >
    );
  }
};

export default WeatherLocation;