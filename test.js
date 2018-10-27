const assert = require('assert');
Object.freeze(assert);

const sumOfOther = require('./sumOfOther.js');
const make = require('./make.js');


describe('sumOfOther', () => {
  it('[2, 3, 4, 1]', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.equal(result[0], 8);
    assert.equal(result[1], 7);
    assert.equal(result[2], 6);
    assert.equal(result[3], 9);
  });

  describe('make', () => {
    it('[2, 3, 4, 1]', () => {
      function sum(a, b) {
        return a + b;
    };
      const result = make(15)(34, 21, 666)(41)(sum);
      assert.equal(result, 777);

    });



});