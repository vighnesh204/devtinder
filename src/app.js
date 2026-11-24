const express = require('express');
const app = express();


app.use("/", (err, req, res, next) => {
   
    res.status(500).send("Something went wrong!");
});

app.get("/user",(req, res) => {
    // try {
        throw new Error("Simulated error");
        res.send("Namaste from server, user");
    // } catch (error) {
    //     res.status(500).send("Internal server error");
    // }
});

app.use("/", (err, req, res, next) => {
   
    res.status(500).send("Something went wrong!");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});