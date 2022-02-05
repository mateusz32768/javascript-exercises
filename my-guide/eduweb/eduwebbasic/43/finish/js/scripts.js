function searchDb() {

    console.log("Otwieram połączenie");

    db.search();

    console.log("Zamykam połączenie");

}

try {
    searchDb();
} catch(e) {
    console.log("Wystąpił błąd: " + e.message);
} finally {
    console.log("Zamykam połącznie");
}