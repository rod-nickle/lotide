// Find the middle element of an array.
// If an even number of elements, return the the middle two.
const middle = function(arr) {
  let output = [];

  if (arr.length > 2) {
    let middleElement = Math.floor(arr.length / 2);
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

module.exports = middle
