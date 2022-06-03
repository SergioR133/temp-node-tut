const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event');
    res.end('Hello World')
})

server.listen(3300, () => {
    console.log('Server listeing on port: 3300...');
})