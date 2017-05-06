import React, { Component } from 'react';
import request from 'request';
import $ from 'jquery';

class Chat extends Component {
    constructor(props) {
        super(props);
            console.log("Chat Constr");

        this.handleSend = this._handleSend.bind(this);
        this.handleViewMenu = this._handleViewMenu.bind(this);
    }

    componentWillMount() {
        this.getMessage();
    }

    _handleSend() {
        this.sendMessage($('.newMessage').value());
        this.props.viewMenu();
    }

    _handleViewMenu() {
        console.log(this);
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
        var options = {
            method: 'PUT',
            url: 'https://chromechat-3fe8.restdb.io/rest/messages',
            headers:
            {   'cache-control': 'no-cache',
                'x-apikey': '590d2e342040bc250c45d89e'
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
                    <div className="chatSource">
                        {this.props.source || "New Message"}
                    </div>
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
                    <textarea className="newMessage">

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
