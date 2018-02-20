//Can remove the var from each and use commas
var express    = require('express'),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose');
 
 //connect to mongoose and create new DB  
mongoose.connect("mongodb://localhost/yelp_camp");

app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");

//SCHEMA SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String
});

//Creates schema so we can use the different methods available
var Campground = mongoose.model("Campground", campgroundSchema);

//Create campground in DB
// Campground.create({
//     name: "Tall Peak", 
//     image: "https://ridb.recreation.gov/images/83164.jpg"
// }, function(err, campground) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND");
//         console.log(campground);
//     }
// });

app.get("/", function(req, res) {
   res.render("landing"); 
});

app.get("/campgrounds", function(req, res) {
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("campgrounds", {campgrounds: allCampgrounds});
        }
    });
   //res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res) {
   var name = req.body.name;
   var image = req.body.img;
   var newCampground = {name: name, image: image};
   //campgrounds.push(newCampground); we arent usig this anymore
   //We now want to create a new campground and save to DB
   Campground.create(newCampground, function(err, newlyCreated) {
        if(err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }   
   });
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YELP STARTED ON " + process.env.PORT); 
});