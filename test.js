const assert = require('assert');
Object.freeze(assert);

const sumOfOther = require('./sumOfOther.js');


describe('sumOfOther', () => {
  it('[2, 3, 4, 1]', () => {
    const result = sumOfOther([2, 3, 4, 1]);
    assert.equal(result[0], 8);
    assert.equal(result[1], 7);
    assert.equal(result[2], 6);
    assert.equal(result[3], 9);
  });



});