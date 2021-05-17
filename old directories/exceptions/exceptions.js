function searchDb() {
  console.log('Otwieram połączenie');
  db.search();
  console.log('Zamykam połączenie');
}

try {
  searchDb();
} catch (error) {
  console.log(`Wystąpił błąd: ${error.message}`);
} finally {
  console.log('Zamykam połączenie');
}