import React, { Component } from 'react';

class Entry extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        return (
            <div>
                {this.props.msg_id}
            </div>
        )
    }
}

export default Entry;
