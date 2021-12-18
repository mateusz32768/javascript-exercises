const ar = ['idzie', 'rak', 'nieborak'];

ar.forEach(element => {
  console.log(element);
});

ar.forEach(function (el) {
  console.log(`Używam funkcji anonimowej\n ${el}`)
});