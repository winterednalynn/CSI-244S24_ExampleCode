const API_BASE_URL = "http://localhost:3001";

function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
}

// Fetch all students
function fetchAllStudents() {
  return fetch(`${API_BASE_URL}/students`)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching all students:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}

// Fetch a single student by ID
function fetchStudentById(studentId) {
  return fetch(`${API_BASE_URL}/students/${studentId}`)
    .then(handleResponse)
    .catch((error) => {
      console.error("Error fetching student by ID:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}

// Create a new student
function createStudent(studentData) {
  return fetch(`${API_BASE_URL}/students`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Error creating new student:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}

// Update an existing student
function updateStudent(studentId, studentData) {
  return fetch(`${API_BASE_URL}/students/${studentId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(studentData),
  })
    .then(handleResponse)
    .catch((error) => {
      console.error("Error updating student:", error);
      throw error; // Re-throw to allow caller to handle or display error message
    });
}

export { fetchAllStudents, fetchStudentById, createStudent, updateStudent };
