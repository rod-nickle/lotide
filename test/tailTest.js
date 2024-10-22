const assert = require('chai').assert;
const tail = require("../tail")

describe("#tail", () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('returns [2, 3] for [1, 2, 3]', () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });

  it('returns [] for ["Hello"]', () => {
    assert.deepEqual(tail(["Hello"]), []);
  });

  it('returns [] for []', () => {
    assert.deepEqual(tail([]), []);
  });

  it('returns undefined when no parameters are passed', () => {
    assert.deepEqual(tail(), undefined);
  });

  it('does not alter the original array', () => {
    const words = ["Hello", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(words.length, 3);
  });
});

