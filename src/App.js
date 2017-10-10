import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class WeatherBoard extends Component {
  render() {
    return (
      <div className="WeatherBoard">
        <header className="App-header">
          <h1 className="App-title">{this.props.name}</h1>
        </header>
      </div>
    );
  }
}

export default WeatherBoard;
