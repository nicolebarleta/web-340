/*
============================================
; Title:  barleta-exercise-4.2.js
; Author: Professor Krasso
; Date:   31 August 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrates how to return JSON from
;              a Node.js server.
;===========================================
*/

var express = require("express");
var http = require("http");

var app = express();


app.get('/employee/:id', function(req, res) {

  var id = parseInt(req.params.id, 10);

  res.json({
      jobTitle: 'Crew',
      hourlyRate: '14/hr',
      empId: id
  });
});

http.createServer(app).listen(8080, function() {
  console.log("Application started on port 8080");
});
