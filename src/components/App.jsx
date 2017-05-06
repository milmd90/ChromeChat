import React, { Component } from 'react';
import request from 'request';

class App extends Component {
    create() {
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
            console.log(body);
        });
    }
    render() {
        return (
            <div>Hello Chrome!</div>
        );
    }
}

export default App;
