var arr = [5, 8, 1, 2, 1, 33, 23, 18, 4],
    arr2 = ["anita", "Tomek", "Ania", "Andrzej", "Mateusz", "Kasia"];

console.log(arr);

arr.sort(function(a, b) {

    return a - b;

    // if(a < b) {
    //     return -1;
    // } else if(a > b) {
    //     return 1;
    // } else {
    //     return 0;
    // }

});

console.log(arr);

console.log(arr2);

arr2.sort(function(a, b) {

    console.log(a - b);

    if(a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }

});