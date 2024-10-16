const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(input) {
  const output = {};

  for (let letter of input) {
    if (letter === " ") {
      continue;
    }
    if (output[letter]) {
      output[letter] += 1;
    } else {
      output[letter] = 1;
    }
  }
  return output;
};


const result1 = countLetters('LHL');
assertEqual(result1["L"], 2);
assertEqual(result1["H"], 1);
assertEqual(result1["h"], undefined);
assertEqual(result1["J"], undefined);

const result2 = countLetters("lighthouse in the house");
assertEqual(result2["l"], 1);
assertEqual(result2["h"], 4);
assertEqual(result2["H"], undefined);
assertEqual(result2["z"], undefined);