(function() {

    var arr = [1, 45, 22, 31, 3];

    arr.sort(function(a, b) {

        return a - b;

    });

    function sayHello(text, getName) {

        var result = text + getName();

        return result;

    }

    console.log( sayHello("Witaj, ", function() {
        return "Piotr";
    }) );

})();