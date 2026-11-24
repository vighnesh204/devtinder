const express = require('express');
const app = express();

const {adminAuth, userAuth} = require('./middlewares/auth');

app.use("/admin", adminAuth);


app.get("/user", userAuth, (req, res) => {
    res.send("Namaste from server, user");
});
app.get("/admin/getAllData", (req, res) => {
    res.send("All data sent from server");
});

app.get("/admin/deleteUser", (req, res) => {
    res.send("User deleted from server");
});
// app.get("/user/:userId", (req, res) => {
//     console.log(req.params); // { userId: '123' }
//     const { userId } = req.params;
//     res.send(`Hello from server, user: ${userId}`);
// });

// app.get("/user/:userId/:postId", (req, res) => {
//     console.log(req.params);
//     const { userId, postId } = req.params;
//     res.send(`Hello from server, user: ${userId}, post: ${postId}`);
// });

// app.get("/ab?c", (req, res) => { // /ab?c matches /ac and /abc
//     res.send("Practicing optional character in route");
// });
// app.use("/test", (req, res) => {
//     res.send("Hello from server");
// } );

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});