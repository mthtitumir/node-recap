const http = require('http');
const fs = require('fs');
const PORT = 4000;
const hostName = '127.0.0.1';

const server = http.createServer((req, res) => {
    const handleReadFile = (statusCode, fileLocation) => {
        fs.readFile(fileLocation, (err, data) => {
            res.writeHead(statusCode, { "Content-Type": "text/html" })
            res.write(data);
            res.end();
        })
    }
    // console.log(req.url);
    // res.end("Welcome to the server, okay!")
    if (req.url === '/') {
        handleReadFile(200, "./views/index.html")
    }
    if (req.url === '/about') {
        handleReadFile(200, "./views/about.html")
    }
    if (req.url === '/contact') {
        handleReadFile(200, "./views/contact.html")
    }
})

server.listen(PORT, hostName, () => {
    console.log(`Server is running at http://${hostName}:${PORT}`);
})