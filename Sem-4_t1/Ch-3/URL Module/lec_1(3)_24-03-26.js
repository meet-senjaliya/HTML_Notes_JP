/* Write a Node JS script to print Query String of URL in file fsd.txt using ES6 callback function (using ES6 callback function = ASYNC function) */

var u = require('url')
var ps = require('fs');
var addr = "-----------"

var q = u.parse(addr, true)
var qdata = q.query
ps.writeFile('fsd.txt', qdata, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('File created')
    }
})