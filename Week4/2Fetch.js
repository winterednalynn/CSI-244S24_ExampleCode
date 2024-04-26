//fetch(location of the data)
//inside of the first .then() you have
//the response.
fetch("https://catfact.ninja/fact")
  .then((res) => res.json())
  .then((fact) => console.log(fact));

// fetch("text.txt")
//   .then((res) => res.text())
//   .then((text) => console.log(text));

//create a new instance of the FetchLibrary
const fetchLibrary = new FetchLibrary();

fetchLibrary
  .get("https://jsonplaceholder.typicode.com/users")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//lets make some data
let data = {
  userid: "10",
  title: "This is the title",
  body: "This is the body",
};

//now we can use our library to send the request
fetchLibrary
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
