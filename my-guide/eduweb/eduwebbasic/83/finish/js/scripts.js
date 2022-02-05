var arr = [1, 44, 53, 523, 0, 10, 33, 87, 52, 33];

console.log(arr);

arr.sort(function(a, b) {

    var random1 = Math.round( Math.random() * (10 - 1) + 1 ),
        random2 = Math.round( Math.random() * (10 - 1) + 1 );

    return random1 - random2;

});

console.log(arr);