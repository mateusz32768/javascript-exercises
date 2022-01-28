// for(var i = 0; i <= 20; i++) {

//     if( (i % 2) === 0 ) {
//         console.log(i);
//     }
// }

// for(var i = 0; i <= 20; i++) {

//     if( (i % 2) === 0 ) {
//         continue;
//     }

//     console.log(i);
// }

var numbers = [2, 3, 6, 20, 0, 52, 11],
    containsZero = false;

for(var i = 0; i < numbers.length; i++) {

    console.log(numbers[i]);

    if(numbers[i] === 0) {
        containsZero = true;
        break;
    }

}