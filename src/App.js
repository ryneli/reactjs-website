import React, { Component } from 'react';
import './App.css';
var ESV = require('./assets/ESV.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ESV: ESV,
    };
    console.log('%o', this.state.ESV.books[0].chapters[0].verses[0].text);
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            In progress.
            {this.state.ESV.version}
          </p>
        </header>
      </div>
    );
  }
}

export default App;
