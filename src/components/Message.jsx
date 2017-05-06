import React, { Component } from 'react';

import request from 'request';

class Message extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getMessage();
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

        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            body.forEach((message) => {
                if (this.msg_id = message.index) {
                    this.message = message.message;
                }
            });
        });
    }

    render() {
        return (
            <div>
                {this.message}
            </div>
        )
    }
}

export default Message;
