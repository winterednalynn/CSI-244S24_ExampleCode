import { fetchStudentById } from "./Data/studentRepository.js";

function getStudentIdFromUrl() {
  const queryParams = new URLSearchParams(window.location.search);
  return queryParams.get("id");
}

document.addEventListener("DOMContentLoaded", () => {
  const studentId = getStudentIdFromUrl();
  if (studentId) {
    fetchStudentById(studentId)
      .then((student) => {
        document.getElementById("student-name").textContent = student.name;
        document.getElementById("student-age").textContent = student.age;
        document.getElementById("student-course").textContent = student.course;
      })
      .catch((error) => {
        console.error("Failed to fetch student details:", error);
        document.getElementById("app").innerHTML =
          "Failed to load student details.";
      });
  } else {
    console.error("No student ID provided in the URL.");
  }
});
