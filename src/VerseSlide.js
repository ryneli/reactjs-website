import React, { Component } from 'react';

class VerseSlide extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div style={{fontSize: '40px'}}>
            {this.props.value.getVerseNumber()} {this.props.value.getVerseCn()}
            <br/>
            {this.props.value.getVerseNumber()} {this.props.value.getVerseEn()}
        </div>);
    }
}

export default VerseSlide;
