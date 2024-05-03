import { fetchAllStudents } from "./src/Data/studentRepository.js";
import "./node_modules/bootstrap/dist/css/bootstrap.min.css";

// Simple function to show initial data or set up components
function initializeApp() {
  fetchAllStudents()
    .then((students) => {
      const app = document.querySelector("#app");
      const studentList = students
        .map((student) => `<li>${student.name}</li>`)
        .join("");
      app.innerHTML += `<ul>${studentList}</ul>`;
    })
    .catch((error) => {
      console.error("Failed to fetch students:", error);
    });
}

initializeApp();
