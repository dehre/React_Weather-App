import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";

class WeatherList extends Component {
  constructor(props){
    super(props);
    this.renderWeather = this.renderWeather.bind(this);
  }
  renderWeather(cityData){
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    return(
      <tr key={name}>
        <th scope="row">
          {name}
        </th>
        <td>
          <Chart data={temps} color="orange"/>
        </td>
      </tr>
    );
  }
  render(){
    console.log(this.props);
    return(
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">New York</th>
            <td>13.4</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state){
  return {weather: state.weather}
}

export default connect(mapStateToProps)(WeatherList);
