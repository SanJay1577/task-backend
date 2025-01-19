// const os = require("os");
const fs = require("fs");

// console.log("os version :", os.version());
// console.log("total memory :", os.totalmem());
// console.log("free memory :", os.freemem());
// console.log("cpu :", os.cpus());

// console.log("arguments", process.argv);
// const [, , firstValue, secondValue] = process.argv;
// console.log(firstValue);
// console.log(secondValue);

fs.readFile("./config.txt", "utf-8", (err, data) => {
  if (err) {
    console.log("Error Occured :", err);
    return;
  }
  console.log(data);
});

const data = "new config file2";
fs.writeFile("./newConfig.txt", data, (err) => {
  if (err) {
    console.log("Error Occured :", err);
    return;
  }
  console.log("file written sucessfuy");
});

const appendData = "\nadding new line";

//append to an existing file
fs.appendFile("./newConfig.txt", appendData, (err) => {
  if (err) {
    console.log("Error Occured :", err);
    return;
  }
  console.log("file updated sucessfuy");
});

//delete
fs.unlink("./unwanted.txt", (err) => {
  if (err) {
    console.log("Error Occured :", err);
    return;
  }
  console.log("file deleted sucessfully");
});

//process .argv
//file read the file
//print the port number
const [, , filename] = process.argv;
const fs = require("fs");
console.log(filename);
function getConfig(filename) {
  if (!filename) return "no file provided please provide filename";
  fs.readFile(`./${filename}`, (err, data) => {
    if (err) {
      console.log("cannot read the file");
      return;
    }
    const value = JSON.parse(data);
    console.log(value[0].port);
  });
}
getConfig(filename);
