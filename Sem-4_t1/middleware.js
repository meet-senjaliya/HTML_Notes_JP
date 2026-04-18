/*
1. Create a middleware that logs a message indicating that a student has entered the campus whenever the request  is mid.
2. create another middleware that checks whether the student has ID card. If valid, store the student name in request object and continue the process. else stop the process and with a message "Access Denied !!!"
3. Create get route "/student" that send a welcome msg to the student. using the name stored in request object.

*/

const express = require("express");
const app = express();

const entrylog = (req,res,next)=>{
    console.log("student eneterd in campus")
    next();
}

const checkID =  (req,res,next)=>{
    hasID = true;

    if(hasID){
        req.name = "JP_P@NCHAl"
        console.log("ID Verified")
        next();
    }
    else{
        res.send("Access Denied!!!")
    }
}

app.use("/student",entrylog,checkID)

app.get("/student",(req,res)=>{
    res.send("Welcome"+req.name)
});
app.listen(8088, () => {
    console.log("Server running on http://localhost:8088");
});
