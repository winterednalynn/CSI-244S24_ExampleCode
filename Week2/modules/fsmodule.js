//bring in the fs
const fs = require("fs");

//read file and write file
//writefile takes 3 arguments
//first is filename to be written
//second is data to write
//third is a callback to handle errors
fs.writeFile("test.txt", "Hello Node!", (error) => {
    if(error){
        console.log(error);
    }
    console.log("Success");
});

//readfile is similar
fs.readFile("example.txt", "utf8", (error, data) => {
    if(error){
        console.log(error);
    }
    console.log(data);
});