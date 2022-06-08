const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    console.log(req.body);
    res.send("calculation is : " + (parseInt(req.body.num1) + parseInt(req.body.num2)));
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});

