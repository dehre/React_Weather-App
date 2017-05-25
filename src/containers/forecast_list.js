import React, {Component} from "react";

export default class ForecastList extends Component {
  render(){
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
          <tr>
            <th scope="row">Berlin</th>
            <td>58</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
        </tbody>
      </table>    );
  }
}
