const express = require("express");
const fs = require("fs");

const app = express();

app.get("/", (req, res) =>{
    fs.readFile("./public/index.html", "utf-8", function(err, data) {
        if(err) return res.status(503).send("Service unavailable.");

        res.send(data);
    })
})

app.get("*", (req, res) =>{
    res.send(404).send("Not found");
})

app.listen(8090, () =>{
    console.log("[INFO] Portfolio webserver started.")
})