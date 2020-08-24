/*
============================================
; Title:  barleta-exercise-3.2.js
; Author: Professor Krasso
; Date:   23 August 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrates how to configure the
;              Morgan logger
;===========================================
*/

var express = require("express");
var http = require("http");
var path =  require("path");
var logger = require("morgan");

var app = express();

app.set("views", path.resolve(__dirname, "views")); // Tell Express the views are in the 'views' directory
app.set("view engine", "ejs");

app.use(logger("short"));

app.get("/", function(request, response){
  response.render("index",{
    message: "Rest well Emman!"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080");
});
