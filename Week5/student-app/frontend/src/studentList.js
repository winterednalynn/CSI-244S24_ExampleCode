import { fetchAllStudents } from "./Data/studentRepository.js";

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document
    .getElementById("students-table")
    .getElementsByTagName("tbody")[0];

  fetchAllStudents()
    .then((students) => {
      students.forEach((student) => {
        let row = tableBody.insertRow();
        row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.age}</td>
                <td>${student.course}</td>
                <td>
                    <a href="studentdetails.html?id=${student.id}">Details</a> |
                    <a href="editstudent.html?id=${student.id}">Edit</a>
                </td>
            `;
      });
    })
    .catch((error) => {
      console.error("Failed to fetch students:", error);
      tableBody.innerHTML = `<tr><td colspan="5">Error loading students. Please try again later.</td></tr>`;
    });
});
