import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setCity } from './../actions';
import LocationList from "./../components/LocationList";


class LocationListContainer extends Component {

    handleSelectedLocation = city => {
        this.props.setCity(city);
    }

    render() {
        const {cities} = this.props;
        return (
            <LocationList 
                cities={cities} 
                onSelectedLocation={this.handleSelectedLocation} 
            />
        );
    }
}

LocationListContainer.propTypes = {
    setCity: PropTypes.func.isRequired,
    cities: PropTypes.array.isRequired,
};

const mapDispactchToProps = dispatch => ({
    setCity: value => dispatch(setCity(value))
});

export default connect(
    null, 
    mapDispactchToProps
)(LocationListContainer);