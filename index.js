
const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    let path = './views/';

    switch (req.url) {
        case '/':
            path += 'index.html';
            break;
        case '/about':
            path += 'about.html';
            break;
        default:
            path += '404.html';
            break;
    }
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.end(data);
        }
    })

})
server.listen(8080, 'localhost', () => {
    console.log('Listening on 8080')
});
