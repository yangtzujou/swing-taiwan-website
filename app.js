const express = require("express");
const ejs = require("ejs");
// const swal = require("sweetalert");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", function(req, res) {
  res.render("home");
  // swal("Good job!", "You clicked the button!", "info");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.get("/about", function(req, res) {
  res.render("about");
})

app.get("/taste", function(req, res) {
  res.render("taste");
})

app.get("/course", function(req, res) {
  res.render("course");
})

app.get("/collaboration", function(req, res) {
  res.render("collaboration");
})

app.get("/signin", function(req, res) {
  res.render("signin");
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function () {
  console.log("Server is running on port 3000.");
});