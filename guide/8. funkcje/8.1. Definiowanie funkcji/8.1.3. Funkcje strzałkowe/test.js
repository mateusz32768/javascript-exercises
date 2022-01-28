function testThis() {
  console.log(this);
  return {
    testThisInternally: () => {
      console.log(this);
    }
  }
}
// Funkcje strzałkowe w swoim ciele odwołują się do this z zakresu leksykalnego
// tzn. z zakresu w którym zawarta jest funkcja
testThis().testThisInternally();

function myFunction() {
  console.log(this);

  return {
    myFunctionInternal() {
      console.log(this);
    }
  }
}

// Funkcje w JS w swoim ciele odwołują się do this jako do obiektu, który ją wywołał
// Jeśli zostanie wywołana w zakresie globalnym to znaczy, że wywołał ja obiekt globalny
// wobec tego odwołuje się do obiektu globalnego.
myFunction().myFunctionInternal();
