import React, { Component } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { api_weather } from './../../constans/api_url';

class WeatherLocation extends Component {

  constructor() {
    super();
    this.state = {
      city: 'Toledo',
      data: null,
    };
    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.handleUpdateClick();
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
  }

  handleUpdateClick = () => {
    fetch(api_weather).then(resolve => {
      return resolve.json();
    }).then(data => {
      console.log("Resultado del handleUpdateClick");
      const newWeather = transformWeather(data);
      console.log(newWeather);
      this.setState({
        data: newWeather
      });
    });
  }

  render() {
    console.log("render");
    const { city, data } = this.state;
    return (
      <div className="weatherLocationCont" >
        <Location
          city={city}>
        </Location>
        {data ?
          <WeatherData data={data}></WeatherData> :
          <CircularProgress size={50} />
        }
      </div >
    );
  }
};

export default WeatherLocation;