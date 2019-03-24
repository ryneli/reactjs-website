import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    render() {
        return (
        <div>
            <input type='text' placeholder='eg: John3:16'></input>
            <button onClick={() => this.props.onClick('test')}>Search</button>
        </div>);
    }
}

export default SearchBar;