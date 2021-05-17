function getData(type) {

    if(!type) {
        throw new Error("Nieprawidłowy typ.");
    }

    return {
        firstName: "Jan",
        lastName: "Kowalski"
    };

}

function searchDb() {

    console.log("Otwieram połączenie.");

    console.log("Pobieram dane.");

    var data = getData();

    if(data === null) {
        throw new Error("Brak danych");
    }

    console.log("Zamykam połączenie.");

}

try {
    searchDb();
} catch(e) {
    console.log("Wystąpił błąd: " + e.message);
} finally {
    console.log("Zamykam połączenie.");
}