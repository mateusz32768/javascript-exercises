var numbers = [2, 3, 17, 32, 28, 9],
    text = "Wylosowane liczby to: ";

var arrLength = numbers.length;

// for(var i = 0; i < arrLength; i++) {

//     text += numbers[i];

//     if(i !== arrLength - 1) {
//         text += ", ";
//     }

// }

console.log(text);

var arr = [["Tomasz", "Kowalski", 23], ["Maria", "Nowak", 30], ["Jacek", "Zieliński", 38]];

for(var i = 0; i < arr.length; i++) {

    console.log("DANE");

    for(var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
    }

    console.log("-------------");

}