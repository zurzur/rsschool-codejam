module.exports = function recursion(...tree) {
  const res = [];
  let children = [];

  function BFS(input) {
    const arr = input.filter(x => x !== undefined);
    if (arr.length === 0) return;
    res.push(arr.map(x => x.value));
    children = arr.reduce((prev, curr) => { prev.push(curr.left, curr.right); return prev; }, []);
    BFS(children);
  }

  BFS(tree);
  return res;
};
