import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import LocationList from "./components/LocationList";
import ForecastExtended from "./components/ForecastExtended";
import "./App.css";
import { Paper, AppBar, Typography, Toolbar, MuiThemeProvider } from "@material-ui/core";

const cities = [
  "Toledo,es",
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us"
];

class App extends Component {

  constructor() {
    super();
    this.state = {city: null};
  }

  handleSelectedLocation = city => {
    this.setState({ city });
  }

  render() {
    const {city} = this.state;
    return (
      <MuiThemeProvider>
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
            <Paper zDepth={4}>
              <div className="detail">
                {
                  city &&
                    <ForecastExtended city={city}/> 
                }
              </div>
            </Paper>
            </Col>
          </Row>
        </Grid>
      </MuiThemeProvider>
    );
  }
}

export default App; 