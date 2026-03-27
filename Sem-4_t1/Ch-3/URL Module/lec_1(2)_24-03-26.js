/* write node js script to fetch the query string from thr static url and check if year is leap year or not
url = 
 */

var u = require("url");

var addr = "https://localhost:8080/default.html?year=2025&month=feb";
var q = u.parse(addr, true);
console.log(q);

qdata = q.query;
console.log(q);
qdata = q.query;
console.log(qdata.year);

if (qdata.year % 4 == 0) {
    console.log("Its a leap Year");
} else {
    console.log("Its not a leap Year");
}