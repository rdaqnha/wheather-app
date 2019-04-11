import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationList from "./components/WeatherLocation/LocationList";
import "./App.css";
import { Paper, AppBar, Typography, Toolbar } from "@material-ui/core";

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

        <Grid fluid>
          <Row>
            <AppBar position='sticky'>
              <Toolbar>
                <Typography variant='title' color='inherit'>
                  Weather App
                </Typography>
              </Toolbar>
            </AppBar>
          </Row>
          <Row>
            <Col xs={12} md={6}>
              <LocationList 
                cities={cities} 
                onSelectedLocation={this.handleSelectedLocation} 
              />
            </Col>
            <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details"></div>
            </Paper>
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default App; 