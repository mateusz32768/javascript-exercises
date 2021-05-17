var number = 1,
    word = "";

// if(number === 1) {
//     word = "jeden";
// } else if(number === 2) {
//     word = "dwa";
// } else if(number === 3) {
//     word = "trzy";
// } else {
//     word = "wartość nieznana";
// }

switch(number) {
    case 1:
        word = "jeden";
        break;
    case 2:
        word = "dwa";
        break;
    case 3:
        word = "trzy";
        break;
    default:
        word = "wartość nieznana";
}

console.log("Wartość to " + word + ".");