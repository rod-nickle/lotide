# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @rod-nickle/lotide`

**Require it:**

`const _ = require('@rod-nickle/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual(...):` compares two arrays for equality and logs a message to the console.
- `assertEqual(...):` compares two values for equality and logs a message to the console
- `assertObjectsEqual(...):` compares two objects for equality and logs a message to the console
- `countLetters(...):` counts the number of letters in a string
- `countOnly(...):` returns the number of times an object appears in a array
- `eqArrays(...):` Returns true if each element in each array are equal.
- `eqObjects(...):` Returns true if both objects have identical keys with identical values.
- `findKey(...):` findKey takes in an object and a callback. It returns the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.
- `findKeyByValue(...):` Returns the key of an object where the value passed in equals the value in the object.
- `head(...):` Returns the first element in an array.
- `letterPositions(...):` Returns an array with the positions the letter is found in the string
- `map(...):` Our version of the built-in Map function
- `middle(...):` The middle function takes an array as input and returns a new array containing the middle element(s) of the input array. If the input array has an even number of elements, the function returns the middle two elements. If the input array has an odd number of elements, the function returns the single middle element. If the input array has two or fewer elements, the function returns an empty array.
- `tail(...):` Retuns the end of the array
- `takeUntil(...):` Keeps collecting items from a provided array until the callback provided returns a truthy value.
- `without(...):` Removes the elements in array2 from array1