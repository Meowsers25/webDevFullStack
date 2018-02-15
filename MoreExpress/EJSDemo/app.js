var express = require("express");
var app = express();

//this tells express to look in the 'public' folder
app.use(express.static("public"));

//this line tells express that it will expect .ejs files to be rendered
app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("home");
});

app.get("/fallinlovewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love", {thingVar: thing});
    //res.send("You fell in love with " + thing); 
});

app.get("/posts", function(req, res) {
   var posts = [
       {title: "Bed and Breakfasts", author: "Luna"}, 
       {title: "Dogs Suck", author: "Sully"},
       {title: "Holy Crap I'm Scared", author: "Beatrice"}
    ]; 
    res.render("posts", {posts: posts});
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("LISTENING ON PORT " + process.env.PORT); 
});