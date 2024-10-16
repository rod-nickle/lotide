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

const without = function(source, itemsToRemove) {
  let output = [];
  let removeElement = false;

  // Loop through each element in the source.
  for (let i = 0; i < source.length; i++) {
    // Initialize before entering inner loop.
    removeElement = false;

    // Loop through each elemment in the Items to Remove
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        removeElement = true;
        break;
      }
    }
    if (!removeElement) {
      // Add the element to the new array for output.
      output.push(source[i]);
    }
  }

  return output;
};

let arr = [1, 2, 3];
without([1, 2, 3], [1]);
assertArraysEqual(arr, [1, 2, 3]); // Test to make sure original array is not modified

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // pass
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // pass

assertArraysEqual(without([1, 2, 3], [1]), [3]); // fail
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]); // fail
