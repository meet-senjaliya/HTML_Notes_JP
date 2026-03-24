/*
write node js script that a async. writes a data to a file Test.js.
if no error occurs during the writing process , the script should then append additional data to the same file. finally it should read the content from the file and display in the console. 
*/

// var fs = require("fs");
// fs.writeFile("test.js", "Jp_P@nchal Come Here!", (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         fs.appendFile("test.js", "Jp-0506", err);
//     }
// });

/* Write node js script to write an array of objects with properties name and age in file named student.txt. than read the file and disklay the object on console.*/

const student = [{
        name: "ABC",
        age: 20,
    },
    {
        name: "ABC",
        age: 20,
    }
];

var fs = require("fs");

/* Create a json object which contains array of objects .
calculate perimeter of Sqare and circle by using side value and diameter value respectivily 
write obj as well as perimetervalues of square and circle in shape.txt file */

const shape = [{
        name: "Circle",
        diameter: 8
    },
    {
        name: "Sqaure",
        side: 10
    }
]

var fs = require("fs");
ps.writeFile('shape.txt', JSON.stringify(shape));
data = ps.readFileSync("shape.txt", 'UTF-8');
b = JSON.parse(data);

var parimeter = [b[0].diameter] * 3.14;
console.log(perimeter)
var peri = (b[1].side) * 4;
console.log(peri)
fs.appendFileSync()

/* Write node js script and json to perform below task.
write below object in s2.txt file.
read data from the same file and perform below task.
subtract 2nd element of c & b (must be +ve)
add the o/p of addition and subtraction below the object in the file.
*/

var ps = require('fs')
const data = {
    d: {
        a: 10,
        b: 20,
        c: [30, 10]
    }
}

ps.writeFile("s2.txt", json.stringify(data));
data1 = ps.readFileSync('s2.txt', 'utf-8')
data2 = JSON.parse(data1)
add = data2.d.a + data2.d.b;
sub = Math.abs(data.d.c[1] - data.d.b);