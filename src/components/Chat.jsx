import React, { Component } from 'react';
import request from 'request';
import $ from 'jquery';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.handleSend = this._handleSend.bind(this);
        this.handleViewMenu = this._handleViewMenu.bind(this);
    }

    componentWillMount() {
        this.getMessage();
    }

    _handleSend() {
        this.sendMessage($('.newMessage').val());
        this.props.viewMenu();
    }

    _handleViewMenu() {
        this.props.viewMenu();
    }

    getMessage() {
        var options = {
            method: 'GET',
            url: 'https://chromechat-3fe8.restdb.io/rest/messages',
            headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '590d2e342040bc250c45d89e'
            }
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            var entries = JSON.parse(body) || [];
            var messages = entries.map((entry) => {
                return entry.message;
            });
            this.setState({
                messages: messages
            });
        });
    }

    sendMessage(msg) {
        var dest = this.props.source || $('.msgDest').val();

        var options = {
            method: 'POST',
            url: 'https://chromechat-3fe8.restdb.io/rest/messages',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '2ebf5439e711ee17881011210c90e0846856a',
                'content-type': 'application/json'
            },
            body: {
              source: this.props.user,
              dest: dest,
              message: msg
            }
        };

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
        });
    }

    render() {
        console.log("Chat Render");

        return (
            <div className="chat">
                <div className="chatHeader">
                    <span className="chatSource">
                        {this.props.source || <input className="msgDest" placeholder="To User"></input>}
                    </span>
                    <button
                        className="exit"
                        onClick={this.handleViewMenu}>
                        X
                    </button>
                </div>
                <div className="messages">
                    {this.messages}
                </div>
                <div className="chatFooter">
                    <textarea className="newMessage" placeholder="New message...">

                    </textarea>
                    <button
                        className="sendMessage"
                        onClick={this.handleSend}>
                        Send
                    </button>
                </div>
            </div>
        )
    }
}

export default Chat;
