const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('./sumOfOther.js');
const make = require('./make.js');
const recursion = require('./recursion.js');


describe('sumOfOther', () => {
  it('[2, 3, 4, 1]', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.equal(result[0], 8);
    assert.equal(result[1], 7);
    assert.equal(result[2], 6);
    assert.equal(result[3], 9);
  });
});

describe('make', () => {
  it('[2, 3, 4, 1]', () => {
    function sum(a, b) {
      return a + b;
    }
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });
});

describe('recursion', () => {
  it('tree', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const result = recursion(tree);
    const array = [[100], [90, 120], [70, 99, 110, 130]];
    assert.deepEqual(result, array);
  });
});
