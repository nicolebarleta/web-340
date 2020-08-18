/*
============================================
; Title:  barleta-assignment-2.4.js
; Author: Professor Krasso
; Date:   17 August 2020
; Modified by: Marie Nicole Barleta
; Description: Ejs View
;===========================================
*/

var http = require("http");
var express = require("express");
var path = require("path");
var app = express();

app.set("views",path.resolve(__dirname,"views"));
//Tell Express the views are the 'views' directory

app.set("view engine", "ejs"); //Tell Express to use the EJS view engine

app.get("/", function(req,res){
    res.render("index",{
      firstName:"Marie Nicole",
      lastName: "Barleta",
      address: "Champaign, IL"
    });
  });
http.createServer(app).listen(8080, function(){
  console.log("EJS-Views app started on port 8080.");
});


