module.exports = function make(...args) {
  const index = args.findIndex(x => x instanceof Function);

  if (index !== -1) {
    const fn = args.splice(index, 1)[0];
    args.length = index + 1;
    return args.reduce(fn);
  }

  return make.bind(null, ...args);
};
