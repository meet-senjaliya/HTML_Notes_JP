var url = require("url")

var a = 'https://user123@video.co:8080/video?doc=-01&hl=en#hello'


var b = url.parse(a); // var b = url.parse(a, true); it returns object as a query
console.log(b);
process.noDeprecation = true;
