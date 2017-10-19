import React, { Component } from 'react';

class Temp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props !== nextProps || this.state !== nextState) {
      return true
    } else {return false}
  }
  componentWillReceiveProps(nextProps) {
    let base = this
    // Function to get weather
     const getWeather = function() {
        // fetch weather
        // FOr some reason the URL is failing, but nextProps.city is right - I think I  need my own API key
        let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=' + nextProps.city + '&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98';
        // let weatherApi = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98'
        // let weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
        fetch(weatherApi)
          .then((response) => {
            return response.json()
          // }).then((response) => console.log(response))
          // May not be able to do setState in WillUpdate
          }).then((json) => {
              base.setState({ weather: json.main.temp })
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
        <div>
        <p>Clothes</p>
        </div>
      </div>
    );
  }
}

export default Temp;
