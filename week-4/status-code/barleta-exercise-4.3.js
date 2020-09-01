/*
============================================
; Title:  barleta-exercise-4.3.js
; Author: Professor Krasso
; Date:   31 August 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrates how to programmatically set
;              Node.js status codes.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();

app.get("/not-found", function(request, response){
  response.status(404);
  response.json({
    error: "EROR 404!! (Resource not found!)"
  });
});

app.get("/ok", function(request, response){
  response.status(200);
  response.json({
    message: "Page loaded correctly!"
  });
});

app.get("/not-implemented", function(request, response){
  response.status(501);
  response.json({
    error: "ERROR 501!! (Page not implemented!)"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
});
