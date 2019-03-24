import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
    onSearchClicked() {
        var searchTextBox = document.getElementById('search-textbox');
        this.props.onClick(searchTextBox.value);
    }
    render() {
        return (
        <div>
            <input id='search-textbox' type='text' placeholder='eg: John3:16'></input>
            <button onClick={() => this.onSearchClicked()}>Search</button>
        </div>);
    }
}

export default SearchBar;