//http module is used to setup a webserver
const http = require("http");
//#1 create a variable using http.createServer()
const server = http.createServer((req, res) => {
    console.log("Processing Request");
    res.end("Hello");
});
//start the server
//localhost = 127.0.0.1
server.listen(5001, () => {
    console.log("Server started on port 5001");
});

