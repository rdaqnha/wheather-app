import React, { Component } from "react";
import { Grid, Row, Col } from "react-flexbox-grid";
import { Paper, AppBar, Typography, Toolbar, MuiThemeProvider } from "@material-ui/core";
import LocationListContainer from "./containers/LocationListContainer";
import ForecastExtendedContainer from "./containers/ForecastExtendedContainer";
import "./App.css";

const cities = [
  "Toledo,es",
  "Buenos Aires,ar",
  "Bogota,col",
  "Mexico,mex",
  "Washington,us"
];
class App extends Component {

  render() {
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
              <LocationListContainer cities={cities} />
            </Col>
            <Col xs={12} md={6}>
            <Paper zDepth={4}>
              <div className="detail">
                <ForecastExtendedContainer/> 
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