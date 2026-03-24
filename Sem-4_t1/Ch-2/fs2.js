// Read data from file and short that data in ascending order using .sort()

var ps = require('fs')

ps.writeFileSync("s1.txt", "50 -1 99 100 20 0 56 78 59");

data = ps.readFileSync("s1.txt", "utf-8");
console.log(data);

data1 = data.split(" ");
console.log(data1);

d = data1.sort((a, b) => a - b);
console.log(d);

//Write node js program using fs module (Syncrons method). to manage Student data. The program should perform following task.
// 1. Create a directory named student data.
// 2.inside the directory,create json file named students.json containig students records with name & marks(Array of 3 objects).
// 3. Read the JSON file,convert it into JS object &display all the students in console.
// 4. Dispklatystudent whose scored >75 using loops & condition.
// 5.finally remove the filea and the directory.


const fs = require('fs');
fs.mkdirSync("studentData");
console.log("Directly Created")

let students = [{
        'name': "Rahul",
        "Marks": 80
    },
    {
        'name': "Mohan",
        "Marks": 70
    },
    {
        'name': "Dev",
        "Marks": 0
    }
]

fs.writeFileSync("studentData/students.json",
    JSON.stringify(students)
);
console.log("file created");
let data = JSON.parse(fs.readFileSync("studentData/students.json", 'utf-8'));
console.log("student List:");
console.log(data);

for (s of data) {
    if (s.Marks > 75) {

        console.log(s.name)
    }
}