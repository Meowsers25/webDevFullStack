var express = require("express");
var app = express();

app.get("/", function(req, res) {
   res.render("home.ejs");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
    //res.send("You fell in love with " + thing); 
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("LISTENING ON PORT " + process.env.PORT); 
});