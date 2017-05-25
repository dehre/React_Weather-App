import React, { Component } from 'react';

//Components
import SearchBar from "../containers/search_bar";
import ForecastList from "../containers/forecast_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ForecastList />
      </div>
    );
  }
}

// API KEY OpenWeatherMap
// 50d4cca3f04503d95851ca414e203a0e

// example
// api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=50d4cca3f04503d95851ca414e203a0e
