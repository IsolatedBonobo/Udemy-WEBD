import express from "express";

const app = express();
const port = 3000 ;

app.get("/", (req, res) => {
    const data = {
        title: "EJS Tags", 
        second: new Date().getSeconds(),
        items: ["apple", "banana", "orange"], 
        htmlcontent: "<em>this is some em text </em>",
    };
    res.render("index.ejs", data);
})
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})