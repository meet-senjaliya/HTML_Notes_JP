/* Design a node js application using a express JS to satisfy following requirements:
 1. The 1st middleware should display "1st fun Executed"
 2. The 2nd middleware should display "2nd fun Executed"
 3. The 3rd middleware should perform a simple arithmatic operation & storeresult in requestobject,
    then displayed it in console.

apply all 3 middleware in sequence to a single route "/class".
Final Respond should be Thank You.
 */

const express = require("express");
const app = express();

const addone = (req,res,next)=>{
    res.write("1st Fun Executed")
    next();
}

const addtwo = (req,res,next)=>{
    res.write("2nd Fun Executed")
    next();
}

const addthree = (req,res,next)=>{
    req.total = 50+40;
    console.log(req.total)
    next();
}

app.get("/class",addone, addtwo,addthree, (req,res)=>{
    res.write("Thank You")
    res.end()
})
app.listen(5006, () => {
    console.log("Server running on http://localhost:5006");
});