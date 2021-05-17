var person = {
    firstName: "Jan",
    lastName: "Kowalski",
    sayHello: function() {
        console.log("Cześć! Mam na imię " + this.firstName);
    },
    setFirstName: function(firstName) {
        this.firstName = firstName;
    }
};