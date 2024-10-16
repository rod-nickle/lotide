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
    console.log(`❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const middle = function(arr) {
  let output = [];
  let middleElement = 0;

  if (arr.length > 2) {
    middleElement = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
      // Even number of elements. Use the middle two.
      output.push(arr[(middleElement - 1)]);
      output.push(arr[middleElement]);
    } else {
      // Odd Number of elements.  Use the middle one.
      output.push(arr[middleElement]);
    }
  }

  return output;
};

assertArraysEqual(middle([]), []); // => []
assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]
