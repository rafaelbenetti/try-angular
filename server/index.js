{
    'use strict';

    const http = require('http');
    const app = require('./express');

    const host = {
        port: 9000
    };

    http.createServer(app)
        .listen(host.port, () => {
            console.log(`Server is running at :${host.port}`);
        }); 
}