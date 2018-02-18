var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

var campgrounds = [
       {name: "Salmon Creek", image: "http://www.destination360.com/north-america/us/kentucky/images/s/kentucky-camping.jpg"},
       {name: "Sick Ravine", image: "https://ridb.recreation.gov/images/80357.jpg"},
       {name: "Tall Peak", image: "https://ridb.recreation.gov/images/83164.jpg"}
]; 

app.get("/", function(req, res) {
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res) {
   res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
   var name = req.body.name;
   var image = req.body.img;
   var newCampground = {name: name, image: image};
   campgrounds.push(newCampground);
   res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YELP STARTED ON " + process.env.PORT); 
});