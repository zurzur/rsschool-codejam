module.exports = function recursion(...tree) {
  const res = [];
  let children = [];
  function BFS(arr) {
    if (arr.length === 0 || arr.some(x => x === undefined)) return;
    res.push(arr.map(x => x.value));
    children = arr.reduce((p, c) => { p.push(c.left, c.right); return p; }, []);
    BFS(children);
  }
  BFS(tree);
  return res;
};
