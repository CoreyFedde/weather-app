import React, { Component } from 'react';

class Outfit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp: '',
      weather: ''
    }
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props !== nextProps || this.state !== nextState) {
  //     return true
  //   } else {return false}
  // }
  componentWillReceiveProps(nextProps) {
    let base = this
    if (nextProps.temp > 50 && nextProps.temp < 80) {
      base.setState({
        temp: "https://i.imgur.com/lVlPvCB.gif"
      })
    } else {
      base.setState({
        temp: ""
      })
    }
    }
  render() {
    return (
      <div>
        <img src={this.state.temp} />
      </div>
    );
  }
}

export default Outfit;
