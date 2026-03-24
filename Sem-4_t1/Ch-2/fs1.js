var ps = require('fs');

/* to make directory*/
// ps.mkdirSync("node");


// ps.writeFileSync("node/write.js","hello");

//ps.appendFileSync("node/write.js","Byee")

data = ps.readFileSync("node/write.js", "utf-8");
//console.log(data.toString());
console.log(data);

//ps.renameSync("node/write.js","node/resd.js")
ps.unlinkSync("node/read.js")
ps.rmdirSync("node");