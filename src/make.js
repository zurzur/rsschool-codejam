module.exports = function make(...args) {
  const index = args.findIndex(x => x instanceof Function);

  if (index === 0) return 'The function is first argument';

  if (index !== -1) {
    const fn = args[index];
    args.splice(index);
    return args.reduce(fn);
  }

  return make.bind(null, ...args);
};
