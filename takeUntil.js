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

// takeUntil which will keep collecting items from a provided array until the callback provided returns a truthy value.
const takeUntil = function(array, callback) {
  const results = [];

  // Loop through the array
  for (let item of array) {
    if (callback(item)) {
      // If callback returns true, exit the loop
      break;
    } else {
      // If callback returns false, add the item to the results array.
      results.push(item);
    }
  }
  return results;
};

module.exports = takeUntil;

// Test < 0
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [1, 2, 5, 7, 2]); // => pass

// test === ","
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, ["I've", 'been', 'to', 'Hollywood']); // => pass

