/*
============================================
; Title:  barleta-exercise-5.2.js
; Author: Professor Krasso
; Date:   07 September 2020
; Description: Demonstrates EJS 'if-else-render' operations.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");

app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

var n = ["Chase", "Marie", "Matthew", "Jerry"];

app.get("/", function(request, response){
  response.render("index",{
    names: n
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Applicaiton started on port 8080!");
});

