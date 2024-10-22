const assert = require('chai').assert;
const tail = require("../tail")

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns [] for ["Hello"]', () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns undefined when no parameters are passed', () => {
    assert.deepEqual(tail(), undefined);
  });
});

// // Test Case 1: Check the returned array elements of strings
// const result1 = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result1.length, 2); // ensure we get back two elements
// assertEqual(result1[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result1[1], "Labs"); // ensure second element is "Labs"

// // Test Case 2: Check the returned array elements of numbers
// const result2 = tail([1, 2, 3]);
// assertEqual(result2.length, 2); // ensure we get back two elements
// assertEqual(result2[0], 2); // ensure first element is 2
// assertEqual(result2[1], 3); // ensure second element is 3

// // Test Case 3: An array with only one element should yield an empty array for its tail
// const result3 = tail(["Hello"]);
// assertEqual(result3.length, 0); // ensure we get back no elements

// // Test Case 4: An empty array should yield an empty array for its tail
// const result4 = tail([]);
// assertEqual(result4.length, 0); // ensure we get back no elements

// // Test Case: Check the original array
// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
