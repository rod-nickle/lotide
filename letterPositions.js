const eqArrays = function(arr1, arr2) {
  // Check array lengths first
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Check that each element in each array are equal.
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
 
  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === " ") {
      // Skip spaces
      continue;
    }
    if (!results[letter]) {
      // Create the key for the letter
      results[letter] = [];
    }
    // Add the location in the string to the array for the letter
    results[letter].push(i);
  }
  return results;
};

const result1 = letterPositions("lighthouse in the house");


assertArraysEqual(result1["l"], [0]); // => pass
assertArraysEqual(result1["i"], [1, 11]); // => pass
assertArraysEqual(result1["g"], [2]); // => pass
assertArraysEqual(result1["h"], [3, 5, 15, 18]); // => pass
assertArraysEqual(result1["t"], [4, 14]); // => pass
assertArraysEqual(result1["o"], [6, 19]); // => pass
assertArraysEqual(result1["u"], [7, 20]); // => pass
assertArraysEqual(result1["s"], [8, 21]); // => pass
assertArraysEqual(result1["e"], [9, 16, 22]); // => pass
assertArraysEqual(result1["n"], [12]); // => pass



