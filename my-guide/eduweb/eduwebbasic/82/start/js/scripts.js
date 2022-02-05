var people = [
    {
        firstName: "Maciej",
        lastName: "Kowalski",
        numbers: [44, 38, 48, 29, 8, 41]
    },
    {
        firstName: "Maria",
        lastName: "Antonik",
        numbers: [45, 18, 43, 27, 5, 38]
    },
    {
        firstName: "Andrzej",
        lastName: "Nowak",
        numbers: [31, 19, 17, 42, 14, 12]
    },
    {
        firstName: "Karolina",
        lastName: "Długopolska",
        numbers: [12, 41, 19, 5, 22, 11]
    },
    {
        firstName: "Krzysztof",
        lastName: "Mariańczyk",
        numbers: [31, 29, 12, 7, 16, 41]
    },
    {
        firstName: "Katarzyna",
        lastName: "Nowobylska",
        numbers: [46, 7, 42, 16, 31, 3]
    }
];

var has5 = false;

for(var i = 0; i < people.length; i++) {

    var numbers = people[i].numbers;

    for(var j = 0; j < numbers.length; j++) {

        if(numbers[j] === 5) {
            has5 = true;
            console.log(5);
            break;
        }

    }

}

console.log(has5);