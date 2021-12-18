const CustomModule = (function () {
  const privateMethod = () => console.log('funkcja prywatna');

  return {
    publicFirstMethod: function () {
      privateMethod();
      console.log('Pierwsza metoda publiczna');
    },
    publicSecondMethod: function () {
      console.log('Druga metoda publiczna');
    }
  }

})();

CustomModule.publicFirstMethod();
CustomModule.publicSecondMethod();
// CustomModule.privateMethod();
