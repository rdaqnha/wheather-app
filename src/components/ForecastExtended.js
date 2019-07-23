import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import ForecastItem from './ForecastItem';
import { api_key, url_base_forecast } from './../constans/api_url';
import transformForecast from '../services/tansformForecast';


// const days = [
//     'Lunes',
//     'Martes',
//     'Miercoles',
//     'Jueves',
//     'Viernes',
// ];

// const data = {
//     temperature: 10, 
//     weatherState: 'normal', 
//     humidity: 15, 
//     wind: 'alto'
// }

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount(){
        this.updateCity(this.props.city);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.city !== this.props.city){
            this.setState({forecastData: null});
            this.updateCity(this.props.city);
        }
    }

    updateCity = city => {
        const url_forecast = `${url_base_forecast}?q=${city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }


    renderForecastItemDays(forecastData) {
        return forecastData.map( forecast => 
            <ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`} 
                data={forecast.data} 
                weekDay={forecast.weekDay} 
                hour={forecast.hour}>
            </ForecastItem>)
    }

    renderProgress = () => {
        return <h3>Cargando...</h3>;
    }

    render() {
        const{ city } = this.props;
        const{ forecastData } = this.state;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {forecastData ? 
                    this.renderForecastItemDays(forecastData) : 
                    this.renderProgress()
                }
            </div>);
    }

}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;