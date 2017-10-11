import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherBoard from './WeatherBoard';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WeatherBoard name="whatever"/>, document.getElementById('root'));
registerServiceWorker();
