import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastaItem from './ForecastItem';
import './styles.css';
import ForecastItem from './ForecastItem';


const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];

const data = {
    temperature: 10, 
    weatherState: 'normal', 
    humidity: 15, 
    wind: 'alto'
}

class ForecastExtended extends Component {

    renderForecastItemDays() {
        return days.map( day => <ForecastItem key={day} data={data} weekDay={day} hour={12}></ForecastItem>)
    }

    render() {
        const{city} = this.props;
        return (
            <div>
                <h2 className='forecast-title'>Pronóstico extendido para {city}</h2>
                {this.renderForecastItemDays()}
            </div>);
    }

}

ForecastExtended.protoTypes = {
    city: PropTypes.string.isRequired
}

export default ForecastExtended;