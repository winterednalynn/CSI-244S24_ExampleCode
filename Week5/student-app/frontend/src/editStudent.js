import { fetchStudentById, updateStudent } from "./Data/studentRepository";

function getStudentIdFromUrl() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("id");
}

document.addEventListener("DOMContentLoaded", () => {
  const studentId = getStudentIdFromUrl();
  if (studentId) {
    fetchStudentById(studentId)
      .then((student) => {
        document.getElementById("name").value = student.name;
        document.getElementById("age").value = student.age;
        document.getElementById("course").value = student.course;
      })
      .catch((error) => {
        console.error("Failed to fetch student for editing:", error);
        alert("Failed to load student data.");
      });

    document
      .getElementById("edit-student-form")
      .addEventListener("submit", function (event) {
        event.preventDefault();
        const updatedStudentData = {
          name: document.getElementById("name").value,
          age: parseInt(document.getElementById("age").value, 10),
          course: document.getElementById("course").value,
        };

        updateStudent(studentId, updatedStudentData)
          .then((data) => {
            alert("Student updated successfully!");
            window.location.href = "studentlist.html"; // Redirect to the student list
          })
          .catch((error) => {
            console.error("Error updating student:", error);
            alert("Failed to update student. Please try again.");
          });
      });
  } else {
    console.error("No student ID provided in the URL for editing.");
  }
});
