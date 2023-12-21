import express from "express"

const app = express();
const port = 3000 ;



app.get("/", (req, res) => {
    const d = new Date();
    const day = d.getDay();

    let type = "weekday";
    let adv = "its time to work hard";

    if(day === 0 || day === 6){
        type = "weekend";
        adv = "its time to have fun";
    }

    res.render("index.ejs", {
        
        daytype: type,
        advice: adv,
    });
})
app.listen(port, () => {
    console.log(`Server is Listening on Port ${port}`);
})