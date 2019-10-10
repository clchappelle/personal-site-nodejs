//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path');


const app = express();
const port = process.env.PORT || 4000;

app.set('view engine', 'ejs');

const viewPath = path.join(__dirname, 'views');

app.use(bodyParser.urlencoded({extended: true})); // Tell app to use bodyparser
app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
});

app.get("/foundation-funds", function(req, res) {
  res.render("case_studies/foundation_funds");
});

app.get("/increasing-awareness-and-engagement", function(req, res) {
  res.render("case_studies/engagement");
});

app.get("/experience", function(req, res) {
  res.render("experience");
});

const server = app.listen(port, function() {
  console.log("Server started on port " + port);
});
