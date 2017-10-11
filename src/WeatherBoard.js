import React, { Component } from 'react';
import './App.css';

class WeatherBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "",
      city: 'Boston',
      newCity: ''
    }
  }
  cityChange (e) {
      this.setState({
        newCity: e.target.value
      })
      console.log(this.state.newCity)
      console.log(this.state.city)
    }
    addCity (e) {
      e.preventDefault()
      this.setState({
        city: this.state.newCity,
      })
    }
    // let cityLocation = ''
    // let date = ''
  componentDidMount() {
  // save a reference to `this` because the value of `this` will change
  // inside the different callback functions.
  var base = this

  // fetch weather
  let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98';
  fetch(weatherApi)
    .then((response) => {
      return response.json()
    }).then((json) => {
        base.setState({ weather: json.main.temp });
    }).catch((ex) => {
      console.log('An error occured while parsing!', ex)
    })
}
  render() {
    return (
      <div>
        <form>
          <label className="location">
            Location:
            <input
            type="text"
            placeholder="Type an item here"
            onChange={(e) => this.cityChange(e)}
            value={this.state.newCity}
            />
          </label>
          <input onClick={(e) => this.addCity(e)} type="submit" value="Submit" />
        </form>
        <div >Location</div>
        <div className="date">Date</div>
        <div className="time">Time</div>
        <h1>Weather in Boston: {this.state.weather} Degrees</h1>
        <div className="clothes">Clothes</div>
      </div>
    );
  }
}

export default WeatherBoard;
