function getData(type) {

  if (!type) {
    throw new Error('Nieprawidłowy typ');
  }

  return {
    name: 'Jan',
    surname: 'Kowalski',
  };
}

function searchDb() {
  console.log('Otwieram połączenie.');
  console.log('Pobieram dane.');

  const data = getData();

  if (data === null) {
    throw new Error('Brak danych');
  }

  console.log('Zamykan połączenie');
}

try {
  searchDb();

} catch (error) {
  console.log(`Wystąpił błąd: ${error.message}`);
} finally {
  console.log('Zamykam połączenie');
}