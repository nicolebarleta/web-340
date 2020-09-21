/*
============================================
; Title:  barleta-exercise-7.3.js
; Author: Professor Krasso
; Date:   21 September 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrates how to create a Chai test.
;===========================================
*/

var fruits = require("../barleta-fruits")

var chai = require("chai")
var assert = chai.assert;

describe("fruits", function(){
  it("should return an array of fruits", function(){
    var f = fruits("Apple,Orange,Mango");
    assert(Array.isArray(f));
  })
})
