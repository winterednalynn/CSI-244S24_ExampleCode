console.log("Hello");
//import express
const express = require("express");
//create an instance of express
const app = express();
//lets bring in the os library
const os = require("os");
const path = require("path");

//define some routes 
app.get("/", (req, res) => {
    //send();
    res.send("Hello Everyone");
});
//lets try to send some json
app.get("/system", (req, res) => {
    //json()
    res.json({
        platform: os.platform(),
        freemem: os.freemem(),
        release: os.release(),
    });
});
//lets make an enpoint that sends a file
app.get("/index", (req, res) => {
    //sendfile()
    console.log(path.join(__dirname, "public", "index.html"));
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

//listen on a port
app.listen(5001, () => {
    console.log("Server running on port 5001");
})