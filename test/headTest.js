const assertEqual = require("../assertEqual");
const head = require("../head")

// These should pass
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// These should fail
assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");

// Testing with one element in the array
assertEqual(head([5]), 5);
assertEqual(head([5]), 6);
assertEqual(head(["Hello"]), "Hello");
assertEqual(head(["Hello"]), "Lighthouse");

// Testing with an empty array
assertEqual(head([]), 5);
assertEqual(head([]), "Hello");
