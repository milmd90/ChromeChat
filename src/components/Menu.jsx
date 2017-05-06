import React, { Component } from 'react';
import request from 'request';

import Entry from './Entry'
import Compose from './Compose'

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    getMessages() {
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
            this.setState({
                messages: JSON.parse(body)
            })
        });
    }

    render() {
        this.getMessages();

        var entries = [];
        var messages = this.state.messages || [];

        messages.forEach((item) => {
            entries.push(
                <Entry
                    msg_id  = {item.index}
                    source  = {item.source}
                    dest    = {item.dest}
                    message = {item.message}
                />
            )
        })
        this.entries = entries;

        return (
            <div className="menu">
                {this.entries}
                <Compose
                    handleClick={this.props.viewCompose}
                />
            </div>
        )
    }
}

export default Menu;
