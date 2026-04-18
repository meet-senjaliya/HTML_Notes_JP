// Create a web server that : 1. aceept a getrequest with a dynamic user id.
// in the url,
// 2. also accept additional data(Name,age) using query parmeters.
// 3. extract id form route parameters adndname,age from Query string.
// 4. return a JSON response conataing all recieved data.

const express = require("express");
const app = express();

app.get("/user/:id", (req, res) => {

    const userId = req.params.id;

    const name = req.query.name;
    const age = req.query.age;

    // Send JSON response
    // res.json({
    //     message: "Data Received",
    //     params: { id: userId },
    //     query: { name, age }
    // });
    res.send(JSON.stringify(responseData));
});

app.listen(8002 , () => {
    console.log("Server running on http://localhost:8001");
});



