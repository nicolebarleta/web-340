/*
============================================
; Title:  hello-world.js
; Author: Professor Krasso
; Date:   9 August 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrates how to create a Node.js server
;===========================================
*/

var http = require('http');
var header = require('../barleta-header.js');


console.log(header.display("Marie", "Barleta", "Assignment 1.5"));

function processRequest(req, res) {
  var body = ('Welcome to barleta\'s world port 8080');

  const contentLength = body.length;

  res.writeHead(200, {
    'Content-Length': contentLength,
    'Content-Type': 'text/plain'
  });

  res.end(body);
}

const s = http.createServer(processRequest);

s.listen(8080);
