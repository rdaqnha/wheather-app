import React from 'react';
import Proptypes from 'prop-types';
import './styles.css';

const WeatherExtraInfo = ({ humidity, wind }) => (
  <div className="weatherExtraInfoCont">
    <span className="extraInfoText">{`Humedad: ${humidity} %`}</span>
    <span className="extraInfoText">{`Viento: ${wind}`}</span>
  </div>
);

WeatherExtraInfo.propTypes = {
  humidity: Proptypes.number.isRequired,
  wind: Proptypes.string.isRequired,
};

export default WeatherExtraInfo;