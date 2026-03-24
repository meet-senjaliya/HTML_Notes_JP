var pm = require('path');
path = pm.dirname("D:/LJ/abc.html");
console.log(path);
path1 = pm.basename("D:/LJ/abc.html");
console.log(path1);
ext = pm.extname("D:/LJ/abc.html");
console.log(ext)
path2 = pm.parse("D:/LJ/abc.html");
console.log(path2);

if (path2.ext == ".html") {
    console.log('Allow');
} else {
    console.log("Don't Allow")
}