import React, { Component } from 'react';
import request from 'request';

class Compose extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <button className="compose" onClick={this.props.handleClick}></button>
        )
    }
}

export default Compose;
