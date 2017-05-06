import React, { Component } from 'react';

import Menu from './Menu';
import Message from './Message';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {view:"menu"};
    }

    viewMenu() {
        this.setState({view: "menu"});
    }

    viewMessage(msg_id) {
        this.setState({
            view: "message",
            msg_id: msg_id
        });
    }

    render() {
        switch(this.state.view) {
            case "menu":
                return <Menu />;
                break;
            case "message":
                return <Message msg_id={this.state.msg_id} />;
                break;
            default:
                return <div>Error</div>;
        }
    }
}

export default App;
