/*
============================================
; Title:  barleta-exercise 1.3
; Author: Professor Krasso
; Date:   9 August 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrates how to parse a Node.js URL
;===========================================
*/

const url = require("url");

const parsedURL = url.parse("https://www.barleta.com/profile?name=barleta");

console.log(parsedURL.protocol);
console.log(parsedURL.host);
console.log(parsedURL.query);
