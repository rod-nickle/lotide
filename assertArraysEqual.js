const eqArrays = require("./eqArrays")

// This function compares two arrays for equality and logs a message to the console.
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

module.exports = assertArraysEqual;
