//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


const app = express();
const port = 4000;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true})); // Tell app to use bodyparser
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("Home");
});

app.listen(port, function() {
  console.log("Server started on port " + port);
});
