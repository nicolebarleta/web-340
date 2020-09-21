/*
============================================
; Title:  barleta-exercise-7.2.js
; Author: Professor Krasso
; Date:   21 September 2020
; Modified by: Marie Nicole Barleta
; Description: Demonstrations how to create a TDD unit test.
;===========================================
*/

var assert = require("assert");

describe("String#split", function() {
 it("should return an array of fruits", function(){
    assert(Array.isArray("Apple,Orange,Mango".split(",")));
 });
});
