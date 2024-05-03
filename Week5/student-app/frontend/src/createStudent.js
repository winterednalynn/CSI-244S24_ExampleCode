import { createStudent } from "./Data/studentRepository.js";

document
  .getElementById("create-student-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const studentData = {
      name: document.getElementById("name").value,
      age: parseInt(document.getElementById("age").value, 10),
      course: document.getElementById("course").value,
    };
    console.log(studentData);

    createStudent(studentData)
      .then((data) => {
        alert("Student created successfully!");
        window.location.href = "studentlist.html"; // Redirect to the student list
      })
      .catch((error) => {
        console.error("Error creating student:", error);
        alert("Failed to create student. Please try again.");
      });
  });
