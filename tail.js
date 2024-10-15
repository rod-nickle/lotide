const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  return arr.slice(1);
};


// Test Case 1: Check the returned array elements of strings
const result1 = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result1.length, 2); // ensure we get back two elements
assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// Test Case 2: Check the returned array elements of numbers
const result2 = tail([1, 2, 3]);
assertEqual(result2.length, 2); // ensure we get back two elements
assertEqual(result2[0], 2); // ensure first element is "Lighthouse"
assertEqual(result2[1], 3); // ensure second element is "Labs"

// Test Case 3: An array with only one element should yield an empty array for its tail
const result3 = tail(["Hello"]);
assertEqual(result3.length, 0); // ensure we get back no elements

// Test Case 4: An empty array should yield an empty array for its tail
const result4 = tail([]);
assertEqual(result4.length, 0); // ensure we get back no elements

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
