//import express
const express = require("express");
//create the app
const app = express();
//import the path and fs modules
const path = require("path");
const fs = require("fs");

//middleware - code that fires on each request
//these allow us to parse json from the body of a request
app.use(express.json());
app.use(express.urlencoded());

//endpoint that send the index.html file
app.get("/", (req, res) => {
  //Content-Type header that just tells the browser what to expres
  res.contentType("text/html");
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

//endpoint sends the registration form for the user to fill out
app.get("/registration-form", (req, res) => {
  res.contentType("text/html");
  res.sendFile(path.join(__dirname, "public", "registration-form.html"));
});

//this endpoint takes in get requests from the html file.
//just used for testing.
app.get("/register", (req, res) => {
  //information that comes in via a get request is location in query
  console.log(req.query);
  res.send(req.query);
});

//this endpoint takes in data from the registration-form.html and
//saves it in the json file.
app.post("/register", (req, res) => {
  //information that comes in via a post request is located in the body
  console.log(req.body);
  //lets save the data to a file named registrations.json
  const filePath = path.join(__dirname, "registrations.json");
  if (fs.existsSync(filePath)) {
    //read the existing data from the file
    const registrations = JSON.parse(fs.readFileSync(filePath));
    //add the new registration to the json file
    registrations.push(req.body);
    //update the registrations
    fs.writeFileSync(filePath, JSON.stringify(registrations));
  } else {
    //create a new array with the object that came into the body
    const registrations = [req.body];
    //write the registrations
    fs.writeFileSync(filePath, JSON.stringify(registrations));
  }
  res.sendFile(path.join(__dirname, "public", "registrations.html"));
});

//this endpoint sends the registrations.html file
app.get("/view-registrations", (req, res) => {
  res.contentType("text/html");
  res.sendFile(path.join(__dirname, "public", "registrations.html"));
});

//this endpoint sends the data contained in the .json file
app.get("/registrations", (req, res) => {
  res.contentType("application/json");
  res.sendFile(path.join(__dirname, "registrations.json"));
});

//listen on a port
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
