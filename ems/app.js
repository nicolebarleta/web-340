/*
============================================
; Title:  barleta-assignment-5.4.js
; Author: Professor Krasso
; Date:   08 September 2020
; Description: Server file for the ems application
;===========================================
*/

//require statements.

var express = require('express');
var http = require('http');
var path = require('path');
var logger = require('morgan');
var app = express();
var mongoose = require('mongoose');
var employee = require('./models/employee');



// database connection string to MongoDB Atlas
var mongoDB = "mongodb+srv://admin:1234@buwebdev-cluster-1.gexte.mongodb.net/ems";

mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});


//connect ito index
app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");
app.use(logger("short"));
app.get("/", function(request, response){
  response.render("index",{
    title: "Home page"
  });
});

http.createServer(app).listen(8080, function(){
  console.log("Application started on port 8080!");
});
