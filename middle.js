// The middle function takes an array as input and returns a new array containing the middle element(s) of the input array.
// If the input array has an even number of elements, the function returns the middle two elements.
// If the input array has an odd number of elements, the function returns the single middle element.
// If the input array has two or fewer elements, the function returns an empty array.
const middle = function(arr) {
  if (!arr) {
    return;
  }
  
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
