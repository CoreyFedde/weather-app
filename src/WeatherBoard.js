import React, { Component } from 'react';
import './App.css';

class WeatherBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: "",
      city: 'Boston',
      newCity: '',
      date: '',
      newDate: ''
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
    // dateChange (e) {
    //   this.setState({
    //     newDate: e.target.value
    //   })
    //   console.log(this.state.newDate)
    //   console.log(this.state.date)
    // }
    // addDate (e) {
    //   e.preventDefault()
    //   this.setState({
    //     date: this.state.newDate,
    //   })
    // }
    // let cityLocation = ''
    // let date = ''
  componentDidMount() {
    let today = new Date()
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    this.setState({
      date: dateTime,
    })
  // save a reference to `this` because the value of `this` will change
  // inside the different callback functions.
  var base = this

  // fetch weather
  let weatherApi = 'http://api.openweathermap.org/data/2.5/weather?q=boston&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98';
  // let weatherApi = 'http://api.openweathermap.org/data/2.5/forecast?q=London,us&units=imperial&appid=052f26926ae9784c2d677ca7bc5dec98'
  // let weatherApi = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22nome%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  fetch(weatherApi)
    .then((response) => {
      console.log('date', this.state.date)
      return response.json()
    }).then((response) => console.log(response))
    // }).then((json) => {
    //     base.setState({ weather: json.main.temp });
    // }).catch((ex) => {
    //   console.log('An error occured while parsing!', ex)
    // })
}
  render() {
    return (
      // Below is the code for a date selection box that is no longer needed
      // <form>
      //   <label className="date">
      //     Date:
      //     <input
      //     type="datetime-local"
      //     onChange={(e) => this.dateChange(e)}
      //     value={this.state.newDate}
      //     />
      //   </label>
      //   <input onClick={(e) => this.addDate(e)} type="submit" value="Submit" />
      // </form>
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
        <h1>Weather in Boston: {this.state.weather} Degrees</h1>
        <div className="clothes">Clothes</div>
      </div>
    );
  }
}

export default WeatherBoard;
