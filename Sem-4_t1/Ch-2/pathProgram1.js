/*
// write a node js script that perform the following operation using the path module and async file system module
1. From the Given Existing File Path(LJ/sample.txt) Extract the dir name using path module 
2. creat the extracted directory inside an existing folder using FS module.
3. Extract the File name From the Given Path.
4. Create that file inside the newly created directory and write some data into it.
5. Copu the content of this file to another file (tempo.txt)
6. Delete the original file after copying the content
 */

var pm = require("path");
var fs = require("fs");

dir = pm.dirname("LJ/sample.txt");
console.log(dir);

fname = pm.basename("LJ/sample.txt");
console.log(fname);

newpath = dir + "/" + fname;

fs.mkdir(dir, (err) => {
    if (err) { console.log(err) };
});

fs.writeFile(newpath, "abcd", (err) => {
    if (err) throw err;
    console.log("original file created");
});
fs.copyFile();