import React, { Component } from "react";
import WeatherLocation from "./components/WeatherLocation";
import "./App.css";

class App extends Component {
  render() {
    return (<div className="App" >
      <WeatherLocation city="Toledo,es" />
    </div>);
  }
}

export default App;