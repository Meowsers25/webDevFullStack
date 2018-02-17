var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res) {
   var campgrounds = [
       {name: "Salmon Creek", img: "http://www.destination360.com/north-america/us/kentucky/images/s/kentucky-camping.jpg"},
       {name: "Sick Ravine", img: "https://ridb.recreation.gov/images/80357.jpg"},
       {name: "Tall Peak", img: "https://ridb.recreation.gov/images/83164.jpg"}
       ]; 
       res.render("campgrounds", {campgrounds: campgrounds});
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YELP STARTED ON " + process.env.PORT); 
});