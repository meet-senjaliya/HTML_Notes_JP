/*
Write a node js script to write the text "You are Creadting File" To help.txt file after
that append text "YOu are appending data" after that read the file and print contain
after finished read operation , print the line "thanks For Using My Program".
Write Append and read using asyc method
*/

var fs = require("fs");

fs.writeFile("help.txt", "You are Creadting File", (err) => {
  if (err) {
    throw err;
  }
  console.log("Write in Help File Loaded");

  fs.appendFile("help.txt", "YOu are appending data", (err) => {
    if (err) {
      throw err;
    }
    console.log("Data Append in help.txt");

    fs.readFile("help.txt", "utf-8", (err, data) => {
      if (err) {
        throw err;
      }
      console.log("Destination File Content");
      console.log(data);
      console.log("thanks For Using My Program");
    });
  });
});
