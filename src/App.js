import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Player from './components/player';

class App extends Component {

  constructor() {
    super();
    this.state = { position: { x: 0, y: 0 } };
    this._movePlayer = this._movePlayer.bind(this);
  }

  componentDidMount() {
    window.addEventListener("keydown", this._movePlayer);
  }

  _movePlayer(e) {
    let { position } = this.state;

    const amt = 4;

    let xValue = position.x;
    let yValue = position.y;

    if (e.keyCode === 37) {
      xValue -= amt;
    } else if (e.keyCode === 39) {
      xValue += amt;
    }
    if (e.keyCode === 38) {
      yValue -= amt;
    } else if (e.keyCode === 40) {
      yValue += amt;
    }

    console.log(`(${xValue}, ${yValue})`);

    this.setState({ position: { x: xValue, y: yValue } });
  }

  render() {
    let { position } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
        <Player x={position.x} y={position.y}/>
        </div>
      </div>
    );
  }
}

export default App;
