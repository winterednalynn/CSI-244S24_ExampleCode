//I want to make a re-useable library that makes requests
//using fetch
class FetchLibrary {
  //get()
  //get is going to take in a url and return a promise
  get(url) {
    //returns a promise
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  //post - creating a record
  //has to have some data passed in the body of the request
  //It need an options object - fetch can take an optional
  //2nd parameter that sets the options for the request
  //we define the request type as well as the Content-Type
  //body : that is where the data is sent
  post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  //A put also passes data in the body, but we also need the primary
  //key of the record we want to update.
  put(url, data, id) {
    return new Promise((resolve, reject) => {
      fetch(`${url}/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
  //Delete, we dont have to pass any data in the body
  //We do need to pass an id in the url
  delete(url, id) {
    return new Promise((resolve, reject) => {
      fetch(`${url}/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    });
  }
}
