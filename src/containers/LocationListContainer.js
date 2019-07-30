import React, { Component } from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setSelectedCity, setWeather } from './../actions';
// import * as actions from './../actions';
import { getWeatherCities, getCity } from './../reducers';
import LocationList from "./../components/LocationList";


class LocationListContainer extends Component {

    componentDidMount() {
        const { setWeather, cities, setSelectedCity, city } = this.props;
        setWeather(cities)
        setSelectedCity(city);
    }

    handleSelectedLocation = city => {
        this.props.setSelectedCity(city);
    }

    render() {
        const {citiesWeather} = this.props;
        return (
            <LocationList 
                cities={citiesWeather} 
                onSelectedLocation={this.handleSelectedLocation} 
            />
        );
    }
}

LocationListContainer.propTypes = {
    setSelectedCity: PropTypes.func.isRequired,
    setWeather: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
    citiesWeather: PropTypes.array,
    city: PropTypes.string.isRequired,
};

// const mapDispactchToProps = dispatch => bindActionCreators(actions, dispatch);
const mapDispactchToProps = dispatch => ({
    setSelectedCity: value => dispatch(setSelectedCity(value)),
    setWeather: cities => dispatch(setWeather(cities)),
});

const mapStateToProps = state => ({
    citiesWeather: getWeatherCities(state),
    city: getCity(state)
});

export default connect(
    mapStateToProps, 
    mapDispactchToProps
)(LocationListContainer);