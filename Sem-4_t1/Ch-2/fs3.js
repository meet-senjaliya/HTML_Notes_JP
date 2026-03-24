// var fs = require("fs")

// fs.writeFileSync('test.txt', 'Hello')
// console.log('Sync write Operation Completed')
// console.log("outside");

// fs.writeFile('abc/test2.txt', 'Hello', function(err) {

//     if (err) {
//         console.log('Error', err);
//     } else
//         console.log('Async operations Completed')
// })
// console.log("outside");

//write node js scriptto copy content of 1 file to another file. data should be fetched from source.txt and inserted to destination.txt and read data form destination file at the end.
// perform all this task as a asychronus programming

var fs = require("fs")
fs.writeFile("source.txt", "Raw Data", (err) => {
    if (err) {
        throw err;
    }
    console.log("sourceFile Loaded");


    fs.copyFile('source.txt', 'destination.txt', (err) => {
        if (err) {
            throw err;
        }
        console.log("File copied");

        fs.readFile('destination.txt', 'utf-8', (err, data) => {

            if (err) {
                throw err;
            }
            console.log("Destination File Content");
            console.log(data)
        });
    });
});