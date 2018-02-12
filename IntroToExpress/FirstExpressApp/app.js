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

//Tell Express to listen for requests(start server)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("SERVER HAS STARTED");
});