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

module.exports = without;

// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // pass
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // pass

// assertArraysEqual(without([1, 2, 3], [1]), [3]); // fail
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2", "3"]); // fail
