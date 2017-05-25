import React, {Component} from "react";

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event){
    this.setState({
      term: event.target.value
    });
  }
  onFormSubmit(event){
    event.preventDefault();
    //Fetch data from API
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Berlin&appid=50d4cca3f04503d95851ca414e203a0e')
      .then(function(response) {
        const weather = response.json();
        return weather;
      }).then(function(json){
        console.log(json)
      }).catch(function(err) {
      	// Error :(
        alert("An error occurred");
        console.log(err);
      });
  }
  render(){
    return(
      <form
        onSubmit={this.onFormSubmit}
        className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button
            type="submit"
            className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }
}
