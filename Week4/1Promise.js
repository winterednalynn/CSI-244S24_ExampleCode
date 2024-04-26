//Callback
//A callback is a way to pass a function to another function
//as a parameter
function GetText(callback) {
  callback("Hello World");
}

function consoleDisplay(text) {
  console.log(text);
}

function displayArray() {
  let array = [1, 2, 3];
  array.forEach((number) => {
    console.log(number);
  });
}

GetText(consoleDisplay);
displayArray();

//A Promise is just an alternative to using a callback function
//A Promise is going to have a result, it is either successful
//(resolve) or unsuccessful (reject)
//All resolve and reject are is just callback functions

//Create a new promise
const promise1 = new Promise((resolve, reject) => {
  //some processing occurs
  //if check to see if processing was successful
  const number = Math.random();
  if (number > 0.5) {
    resolve("Success");
  }
  //if whatever you were trying to do failed
  reject("Failed");
});
//I cannot call promise1()
//promise1();
//The way you call a promise is with .then(callback for resolve).catch(callback for reject)
promise1
  .then((success) => {
    //you update the html
    console.log(success);
  })
  .catch((error) => {
    //update a log file
    console.log(error);
  });
