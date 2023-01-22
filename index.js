// // const add = require("./utils");
// // console.log(add.add(2, 3));
// // add.log.error();
// const express = require("express");
// const app = express();
// app.use(express.json());
// app.get("/user", (req, res) => {
//     console.log("user was called");
//     // res.send({
//     //     name: "prathamesh",
//     //     surname: "dixit",
//     // });
//     res.sendFile(__dirname + "/index.html");
// });
// app.post("/user", (req, res) => {
//     console.log(req.body);
//     res.send({
//         name: "ritesh",
//         total: req.body.marks + req.body.age,
//     });
// });
// app.get("/", (req, res) => {
//     res.sendFile(__dirname + "/index.html");
//     // res.json({
//     //     name: "prahamesh",
//     // });
// });
// app.listen("4000", () => {
//     console.log("server running on port:4000");
// });
const express = require("express");
const app = express();
app.use(express.json());
const user = require("./models/User");
const dbConnect = require("./dbConnect");
const dotenv = require("dotenv");
const mainRouter = require("./routes/");
dotenv.config({ path: "./.env" });
app.get("/", (req, res) => {
    res.send({
        name: "pnd",
    });
});
app.use((req, res, next) => {
    console.log(req.url, new Date().toLocaleTimeString());
    next();
});
app.use("/api", mainRouter);
const PORT = process.env.PORT;
dbConnect();
app.listen(PORT, () => {
    console.log("server running on port:" + PORT);
});
