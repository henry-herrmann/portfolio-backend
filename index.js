const express = require("express");

const app = express();

app.use(express.static("public"));

app.listen(8090, () =>{
    console.log("[INFO] Portfolio webserver started.")
})