import React, { Component } from "react";
import LocationList from "./components/WeatherLocation/LocationList";
import "./App.css";

const cities = [
  "Toledo,es",
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us"
];

class App extends Component {

  handleSelectedLocation = city => {
    console.log(`handleSelectedLocation ${city}`);

    
  }

  render() {
    return (
      <div className="App" >
        <LocationList 
          cities={cities} 
          onSelectedLocation={this.handleSelectedLocation} 
        />
      </div>
    );
  }
}

export default App; 