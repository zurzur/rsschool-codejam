module.exports = function sumOfOther(arr) {
  const sum = arr.reduce((p, c) => p + c);
  return arr.map(v => sum - v);
};
