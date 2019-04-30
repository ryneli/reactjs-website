import React, { Component } from 'react';

class VerseList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div>
            Verse list.
            <ul>
                {this.props.value.map((verse) => 
                <li key={verse.getVerseNumber()}>{verse.getVerse()}</li>)}
            </ul>
        </div>);
    }
}

export default VerseList;
