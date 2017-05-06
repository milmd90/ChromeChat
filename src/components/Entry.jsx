import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    handleClick() {
        this.props.viewChat(this.props.source);
    }

    render() {
        return (
            <div className="entry"
                    onClick={this.handleClick}>
                {this.props.message}
            </div>
        )
    }
}

export default Entry;
