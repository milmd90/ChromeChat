import React, { Component } from 'react';

import Menu from './Menu';
import Message from './Message';
import Compose from './Compose';

class App extends Component {
    constructor(props) {
        super(props);

        this.viewMenu       = this._viewMenu.bind(this);
        this.viewMessage    = this._viewMessage.bind(this);
        this.viewCompose    = this._viewCompose.bind(this);

        this.state = {view:"menu"};
    }

    _viewMenu() {
        console.log('viewMenu');
        this.setState({view: "menu"});
    }

    _viewMessage(msg_id) {
        console.log('viewMessage');
        this.setState({
            view: "message",
            msg_id: msg_id
        });
    }

    _viewCompose(msg_id) {
        console.log('viewCompose');
        this.setState({
            view: "compose"
        });
    }

    render() {
        switch(this.state.view) {
            case "menu":
                return <Menu
                            viewMessage = {this.viewMessage}
                            viewCompose = {this.viewCompose}
                        />;
                break;
            case "message":
                return <Message
                            msg_id = {this.state.msg_id}
                            viewMenu = {this.viewMenu}
                        />;
                break;
            case "compose":
                return <Compose
                            viewMenu = {this.viewMenu}
                        />;
                break;
            default:
                return <div>Error</div>;
        }
    }
}

export default App;
