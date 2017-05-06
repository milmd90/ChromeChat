import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div className="entry">
                {this.props.message}
            </div>
        )
    }
}

export default Entry;
