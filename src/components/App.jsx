import React, { Component } from 'react';

import Menu from './Menu';
import Chat from './Chat';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            view: "menu",
            source: null
        };
    }

    viewMenu() {
        this.setState({
            view: "menu"
        });
    }

    viewChat(source) {
        this.setState({
            view: "chat",
            source: source
        });
    }

    render() {
        switch(this.state.view) {
            case "menu":
                return <Menu
                            viewChat    = {this.viewChat.bind(this)}
                            user        = {"mattdeanmiller@gmail.com"}
                        />;
                break;
            case "chat":
                return <Chat
                            viewMenu    = {this.viewMenu.bind(this)}
                            user        = {"mattdeanmiller@gmail.com"}
                            source      = {this.state.source}
                        />;
                break;
            default:
                return <div>Error</div>;
        }
    }
}

export default App;
