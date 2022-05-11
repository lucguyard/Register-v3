const express = require("express");
const app = express();
const fs = require("fs").promises;

PORT = process.env.PORT || 4000 ;

//Index 
let path = "/hard-page/index.html" ;
app.get("/index", async (req,res) => {
    fs.readFile(__dirname + path)
    .then(data => 
        res.setHeader("Content-Type", "text/html").writeHead(200).end(data))   
    .catch(err => 
        res.setHeader("Content-Type", "text/html").writeHead(200).end("error")
        )
})

// Create the first path
app.use("/index", require("./path/route.js"));


//Listen the server
app.listen(PORT , () => {
    try
    {
        console.log(" Your server is running to port " + PORT , ", Welcome");
    }
    catch(err)
    {
        res.err;
    }
});