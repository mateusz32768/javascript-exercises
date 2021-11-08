(function (string) {
  console.log(string);
})('Welcome');

(function (modeObject, expo) {
  modeObject.expo = expo;
  return modeObject.expo;
})((mode = {}), 'message');

console.log(mode.expo);

(function (exports, require, module, filename, dirname) {
  function add(a, b) {
    return a + b;
  }
})(require.add);
