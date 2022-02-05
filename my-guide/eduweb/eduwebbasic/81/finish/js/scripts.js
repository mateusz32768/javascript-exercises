function getValues() {

    var obj = {
        firstName: "Anna",
        lastName: "Kowalska"
    };

    var id = 12331;

    return [obj, id];

}

var values = getValues(),
    data = values[0],
    id = values[1];

console.log(data);
console.log(id);