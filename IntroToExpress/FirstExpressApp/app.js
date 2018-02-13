//console.log("EXPRESS APP GOES HERE");

var express = require("express"); //imports module express
var app = express(); //save express to a variable because there are many different methods to use

//Three routes:
// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res) {
   res.send("Goodbye!"); 
});
// "/dog" => "MEOW!"
app.get("/dog", function(req, res) {
    console.log("Someone made a request to /dog ");
    res.send("MEOW!");
});
//route params
app.get("/r/:subredditName", function(req, res){
    var sub = req.params.subredditName;
    res.send("Welcome to the " + sub.toUpperCase() + " subreddit"); 
});
app.get("/r/:subredditName/comments/:id/:title", function(req, res) {
   res.send("COMMENT SECTION"); 
});
//use the splat(*) catch all if a route is undefined
//route order is key! The splat needs to come at the end
app.get("*", function(req, res) {
   res.send("You are now in the Matrix"); 
});

//Tell Express to listen for requests(start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER HAS STARTED");
});