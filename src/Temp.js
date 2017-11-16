import React, { Component } from 'react';
import Outfit from './Outfit.js'

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      weather: ''
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps || this.state !== nextState) {
      return true
    } else {return false}
  }
  componentWillReceiveProps(nextProps) {
    let base = this
    console.log('nextProps', nextProps)
    // Function to get weather
     const getWeather = function() {
        // fetch weather
        // FOr some reason the URL is failing, but nextProps.city is right - I think I  need my own API key
        let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?lat=' + nextProps.lat + '&lon=' + nextProps.lon + '&units=imperial&appid=e75a632e6a44da19f8d88c906dea7834';
        // let weatherApi = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98'
        // let weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
        fetch(weatherApi)
          .then((response) => {
            return response.json()
          // }).then((response) => console.log(response))
          }).then((json) => {
              base.setState({
                temp: json.main.temp,
                weather: json.weather[0].description
              })
              console.log(base.state.weather)
          }).catch((ex) => {
            console.log('An error occured while parsing!', ex)
          })
        }
      if (nextProps.city !== '') {
        getWeather()
      }
    }
  render() {
    return (
      <div>
        <h3>Weather {this.state.weather}</h3>
        <Outfit weather={this.state.weather} temp={this.state.temp} />
        <h3>Temp {this.state.temp}</h3>
      </div>
    );
  }
}

export default Temp;
