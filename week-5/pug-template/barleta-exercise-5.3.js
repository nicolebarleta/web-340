/*
============================================
; Title:  barleta-exercise-5.3.js
; Author: Professor Krasso
; Date:   7 September 2020
; Description: Demonstrates the Pug view engine.
;===========================================
*/

var express = require("express");
var http = require("http");
var path = require("path");
var pug = require("pug");

var app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "pug");

app.get("/", function(request, response){
  response.render("index", {
    message: "Welcome to my Pug based homepage!"
    });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
})
