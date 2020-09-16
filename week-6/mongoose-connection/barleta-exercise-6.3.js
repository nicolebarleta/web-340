/*
============================================
; Title:  barleta-exercise-6.3.js
; Author: Professor Krasso
; Date:   15 Sep 2020
; Description: Demonstrates how to setup a MongoDB
;              connection.
;===========================================
*/

var express = require("express");
var http = require("http");
var logger = require("morgan");
var mongoose = require("mongoose");

// mLab connection
var mongoDB = "mongodb+srv://admin:1234@buwebdev-cluster-1.gexte.mongodb.net/ems";
mongoose.connect(mongoDB, {
  useMongoClient: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connected error: "));
db.once("open", function() {
  console.log("Application connected to mLab MongoDB instance");
});

// application
var app = express();
app.use(logger("dev"));

// create server
http.createServer(app).listen(8080, function() {
  console.log("Application connected to port 8080!");
});
