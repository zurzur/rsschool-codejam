const assert = require('assert');

Object.freeze(assert);

const sumOfOther = require('./src/sumOfOther.js');
const make = require('./src/make.js');
const recursion = require('./src/recursion.js');


describe('sumOfOther', () => {
  it('[2, 3, 4, 1]', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.equal(result[0], 8);
    assert.equal(result[1], 7);
    assert.equal(result[2], 6);
    assert.equal(result[3], 9);
  });

  it('[5, 2, 7, 0, 9]', () => {
    const result = sumOfOther([5, 2, 7, 0, 9]);
    assert.deepEqual(result, [18, 21, 16, 23, 14]);
  });

  it('[0,0,0,0,0]', () => {
    const result = sumOfOther([0, 0, 0, 0, 0]);
    assert.deepEqual(result, [0, 0, 0, 0, 0]);
  });

  it('[1]', () => {
    const result = sumOfOther([1]);
    assert.deepEqual(result, [0]);
  });
});

describe('make', () => {
  function sum(a, b) {
    return a + b;
  }

  it('sum function only in last brackets', () => {
    const result = make(15)(34, 21, 666)(41)(sum);
    assert.equal(result, 777);
  });

  it('sum function not alone in last brackets', () => {
    const result = make(15)(34, 21, 666)(41, sum);
    assert.equal(result, 777);
  });

  it('sum function is not last argument within brackets', () => {
    const result = make(15)(34, 21, sum, 666);
    assert.equal(result, 70);
  });

  it('sum function is first argument in second brackets', () => {
    const result = make(15)(sum, 34, 21, 666);
    assert.equal(result, 15);
  });

  it('sum function is first argument at all', () => {
    const result = make(sum, 15);
    assert.equal(result, 'The function is first argument');
  });
});

describe('recursion', () => {
  it('tree1', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130 } },
    };
    const result = recursion(tree);
    const array = [[100], [90, 120], [70, 99, 110, 130]];
    assert.deepEqual(result, array);
  });
  it('tree2', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70 }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 125 } } },
    };
    const result = recursion(tree);
    const array = [[100], [90, 120], [70, 99, 110, 130], [125]];
    assert.deepEqual(result, array);
  });

  it('tree3', () => {
    const tree = {
      value: 100,
      left: { value: 90, left: { value: 70, left: { value: 60 } }, right: { value: 99 } },
      right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 125 } } },
    };
    const result = recursion(tree);
    const array = [[100], [90, 120], [70, 99, 110, 130], [60, 125]];
    assert.deepEqual(result, array);
  });

  it('tree3', () => {
    const tree = {
      value: 100,
      left: {
        value: 90,
        left: { value: 70, left: { value: 60, left: { value: 50 } } },
        right: { value: 99 },
      },
      right: { value: 120, left: { value: 110 }, right: { value: 130, left: { value: 125 } } },
    };
    const result = recursion(tree);
    const array = [[100], [90, 120], [70, 99, 110, 130], [60, 125], [50]];
    assert.deepEqual(result, array);
  });
});
