const assertEqual = function(actual, expected) {
  let msg = "";

  if (actual === expected) {
    msg = `✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    msg = `❌ Assertion Failed: ${actual} !== ${expected}`;
  }
  console.log(msg);
  return;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual("Rod Nickle", "Rod Nickle");
assertEqual("Rod Nickle", "Rod");
assertEqual(1000, 1000);
assertEqual(1000, 100);
