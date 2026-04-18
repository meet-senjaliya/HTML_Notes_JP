// Write express js script to perform the tasks as asked below:
// 1. add one from  which conatains userID, passwordand submit button data shoulod be submitted by HTTP post method.
// on home page formshould be displayed and while submitting the form , on next page
// "/login", if usernameis admin then it will displayed Welcome Admin else displayed "Please    login with ADMIN name" in red color

const express = require("express");
const app = express();

// Middleware to parse form data it is recommend for the post method 
//app.use(express.urlencoded({ extended: true }));

// Home page with form
app.get("/", (req, res) => {
    res.send(`
        <form action="/login" method="post">
            <input type="text" name="uname" placeholder="User ID" required>
            <input type="password" name="pswd" placeholder="Password" required>
            <input type="submit" value="Submit">
        </form>
    `);
});

// Login route
app.post("/login", (req, res) => {
    if (req.body.uname === "admin") {
        res.send(`<h2>Welcome ${req.body.uname}</h2>`);
    } else {
        res.send(`<h2 style="color:red">Please login with ADMIN name</h2>`);
    }
});

// Start server
app.listen(8002, () => {
    console.log("Server running on http://localhost:8002");
});

// for using get method replace post = get , body = query
