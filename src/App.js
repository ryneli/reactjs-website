import React, { Component } from 'react';
import './App.css';
import './SearchBar';
import './VerseList';
import {VerseCursor} from './VerseCursor';
import {AppStateStore} from './store';

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
      verseList: [],
    };

    AppStateStore.observeOsisText().subscribe((osisText) =>
        {
            if (osisText) {
                this.getVerses(osisText);
            }
        }
        );
  }

  getVerses(osisText) {
    const [start, end] = osisText.split('-');
    const startVerseCursor = VerseCursor.fromOsis(start);
    let endVerseCursor = startVerseCursor.next();
    if (end) {
      endVerseCursor = VerseCursor.fromOsis(end).next();
    }
    const verseList = [];
    let currentVerseCursor = startVerseCursor;
    while(currentVerseCursor && !currentVerseCursor.equals(endVerseCursor)) {
      verseList.push(currentVerseCursor);
      currentVerseCursor = currentVerseCursor.next();
    }
    this.setState({verseList});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SearchBar ></SearchBar>
          <VerseList value={this.state.verseList}></VerseList>
        </header>
      </div>
    );
  }
}

export default App;
