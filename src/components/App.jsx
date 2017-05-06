import React, { Component } from 'react';

import Menu from './Menu';
import Chat from './Chat';

class App extends Component {
    constructor(props) {
        super(props);
            console.log("App constr");

        this.state = {
            view: "menu",
            source: null
        };
    }

    viewMenu() {
        console.log('viewMenu');
        this.setState({
            view: "menu"
        });
    }

    viewChat(source) {
        console.log('viewChat');
        this.setState({
            view: "chat",
            source: source
        });
    }

    render() {
        console.log("App Render");
        switch(this.state.view) {
            case "menu":
                return <Menu
                            viewChat    = {this.viewChat.bind(this)}
                        />;
                break;
            case "chat":
                return <Chat
                            viewMenu    = {this.viewMenu.bind(this)}
                            source      = {this.state.source}
                        />;
                break;
            default:
                return <div>Error</div>;
        }
    }
}

export default App;
