/*
write node js scriptto copy content of 1 file to another file. data should be fetched from source.txt and inserted to destination.txt and read data form destination file at the end.

Without use copyfile function
*/

var ps = require("fs");
ps.writeFile("source.txt", "without Copy file", (err) => {

    if (err) {
        console.log("error generate to writefile");
    }
    console.log("write in source");

    ps.readFile("source.txt", "utf-8", (err, data) => {
        if (err) {
            console.log("error generated at read to source");
        } else {
            ps.writeFile("document.txt", data, (err) => {
                if (err) {
                    console.log("Errpr to write in document");
                } else {
                    console.log("write in document");

                    ps.readFile("document.txt", "utf-8", (err) => {
                        if (err) {
                            console.log("Errpr to write in document");
                        }
                        console.log("copid & read succes");
                        console.log(data);
                    });
                }
            });
        }
    });
});