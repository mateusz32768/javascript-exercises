function getData() {

    return {
        firstName: "Jan",
        lastName: "Kowalski"
    };

}

function searchDb() {

    console.log("Otwieram połączenie.");

    console.log("Pobieram dane.");

    var data = getData();

    console.log("Zamykam połączenie.");

}

try {
    searchDb();
} catch(e) {
    console.log("Wystąpił błąd: " + e.message);
} finally {
    console.log("Zamykam połączenie.");
}