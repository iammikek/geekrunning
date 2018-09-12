import React, { Component } from 'react';
import '../css/App.css';

import Strava from './Strava';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Geek Running</h1>
        </header>
          <div className="container">
          <Strava></Strava>
          </div>
          <footer>
              an <a href="https://automica.io">automica.io</a> product
          </footer>
      </div>
    );
  }
}

export default App;
