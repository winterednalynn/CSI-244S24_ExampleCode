const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 3001;

// function to load student data from JSON file
function loadStudents() {
  return JSON.parse(fs.readFileSync("./students.json", "utf8"));
}

// function that saves student data to JSON file
function saveStudents(students) {
  //validate the data before saving
  fs.writeFileSync("./students.json", JSON.stringify(students), "utf8");
}

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//Cors is a node.js package for providing a Connect/Express middleware that
//can be used to enable CORS with various options.
//It allows us to handle request from different origins.
//It is a way to relax the security restrictions on the browser.
//Our client side code will not be able to access the api if we do not enable CORS.
app.use(cors()); // Enable CORS

// Get all students
app.get("/students", (req, res) => {
  const students = loadStudents();
  res.json(students);
});

// Get a single student by ID
app.get("/students/:id", (req, res) => {
  const students = loadStudents();
  //get requests pass data in req.params
  const student = students.find((s) => s.id === parseInt(req.params.id));
  if (student) {
    res.json(student);
  } else {
    res.status(404).send("Student not found");
  }
});

// Create a new student
app.post("/students", (req, res) => {
  const students = loadStudents();
  //post requests pass data in req.body
  const student = req.body;
  console.log("Received student:", student);
  //Assign a unique ID to the student (This is usually handled by the database)
  student.id = students.length + 1;
  students.push(student);
  saveStudents(students);
  //201 status code is used to indicate that a new resource has been created.
  res.status(201).send(student);
});

// Update an existing student
app.put("/students/:id", (req, res) => {
  let students = loadStudents();
  //put requests passes the id in params and the data in body
  //find the index of the student we want to update
  const index = students.findIndex((s) => s.id === parseInt(req.params.id));
  //if the student is found, update the student with the new data
  if (index !== -1) {
    //update the student at index with the data from the request body
    students[index] = { ...students[index], ...req.body };
    saveStudents(students);
    res.send(students[index]);
  } else {
    res.status(404).send("Student not found");
  }
});

// Delete a student
app.delete("/students/:id", (req, res) => {
  let students = loadStudents();
  //the filter method creates a new array with all elements that match the condition
  //create a new array of all students except the one with the id passed in the request
  const filteredStudents = students.filter(
    (s) => s.id !== parseInt(req.params.id)
  );
  //if the lengths do not match, it means a student was deleted
  if (students.length !== filteredStudents.length) {
    saveStudents(filteredStudents);
    res.status(200).send({ message: "Student deleted successfully" });
  } else {
    res.status(404).send("Student not found");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
