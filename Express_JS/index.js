import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>hello to this bekar duniya </h1>")
});
// app.get("/about", (req,res) => {
//     res.send("<h1>i want to try to send about page </h1>");
// });
// app.get("/contact", (req, res) => {
//     res.send("but i can't send any html page till now ")
// });

app.post("/register", (req,res) => {
    res.sendStatus(201);
})
// app.listen(port, () => {
//     console.log(`Server is Running at ${port} and logged by Bonobo`);
// })

