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
    image: String,
    description: String
});

//Creates schema so we can use the different methods available
var Campground = mongoose.model("Campground", campgroundSchema);

//Create campground in DB
// Campground.create({
//     name: "Tall Peak", 
//     image: "https://ridb.recreation.gov/images/83164.jpg",
//     description: "This is a tall peak. No bathrooms/water. Beautiful views."
// }, function(err, campground) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("NEWLY CREATED CAMPGROUND");
//         console.log(campground);
//     }
// });

// app.get("/", function(req, res) {
//   res.render("landing"); 
// });


//INDEX - DISPLAYS LIST
app.get("/campgrounds", function(req, res) {
    //Get all campgrounds from DB
    Campground.find({}, function(err, allCampgrounds) {
        if(err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds: allCampgrounds});
        }
    });
   //res.render("campgrounds", {campgrounds: campgrounds});
});

//CREATE - ADDS NEW DOG TO DB
app.post("/campgrounds", function(req, res) {
   var name = req.body.name;
   var image = req.body.image;
   var desc = req.body.description;
   var newCampground = {name: name, image: image, description: desc};
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


//NEW - SHOW FORM TO CREATE NEW CAMPGROUND
app.get("/campgrounds/new", function(req, res) {
    res.render("new");
});

//route order matters here!
//SHOW - Shows more info about one campground
app.get("/campgrounds/:id", function(req, res) {
    //find the campground with the provided ID
    //render show template with that campground
   //res.send("THIS WILL BE THE SHOWPAGE SOME DAY"); 
   Campground.findById(req.params.id, function(err, foundCampground) {
      if(err) {
          console.log(err);
      } else {
          res.render("show", {campground: foundCampground});
      }
   });
});

app.listen(process.env.PORT, process.env.IP, function() {
   console.log("YELP STARTED ON " + process.env.PORT); 
});