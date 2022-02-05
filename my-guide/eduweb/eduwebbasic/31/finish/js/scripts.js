function init() {

    var firstName = "Maciej";

    function sayHello(text) {

        var lastName = "Kowalski";

        console.log("Cześć, " + firstName + " " + lastName);

    }

    window.hello = sayHello;

}

init();