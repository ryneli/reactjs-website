import React, { Component } from 'react';
import './App.css';
import './SearchBar';
import './VerseList';
import SearchBar from './SearchBar';
import VerseList from './VerseList';
var ESV = require('./assets/ESV.json');
var ChiUns = require('./assets/ChiUns.json');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ESV: ESV,
      ChiUns: ChiUns,
    };
    console.log('%o', this.state.ChiUns.books[0].chapters[0].verses[0].text);
  }

  onSearchBarClicked(q) {
    console.log('onSearchBarClicked %o', q);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar onClick={(q) => this.onSearchBarClicked(q)}></SearchBar>
          <VerseList></VerseList>
        </header>
      </div>
    );
  }
}

export default App;
