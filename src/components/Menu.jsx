import React, { Component } from 'react';
import request from 'request';

import Entry from './Entry'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {}

        this.handleChat = this._handleChat.bind(this);
    }

    componentWillMount() {
        this.getMessages();
    }

    _handleChat() {
        this.props.viewChat();
    }

    getMessages() {

        //Add where dest is user
        var options = {
            method: 'GET',
            url: 'https://chromechat-3fe8.restdb.io/rest/messages',
            headers: {
                'cache-control': 'no-cache',
                'x-apikey': '590d2e342040bc250c45d89e',
                'content-type': 'application/json'
            },
            qs: {
                dest: this.props.user
            }
        };

        request(options, (error, response, body) => {
            if (error) throw new Error(error);
            this.setState({
                messages: JSON.parse(body)
            });
        });
    }

    render() {
        var messages = this.state.messages || [];
        var entries = [];

        messages.forEach((item) => {
            entries.push(
                <Entry
                    viewChat = {this.props.viewChat}
                    source  = {item.source}
                    message = {item.message}
                />
            )
        })
        this.entries = entries;

        return (
            <div className="menu">
                {this.entries}
                <button
                    className="compose"
                    onClick={this.handleChat}>
                </button>
            </div>
        )
    }
}

export default Menu;
