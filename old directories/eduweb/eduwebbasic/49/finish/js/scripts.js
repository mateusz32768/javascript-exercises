// setTimeout(function() {
//     console.log("Witaj po dwóch sekundach!");
// }, 2000);

var timeout = setTimeout(function() {
    console.log("Witaj po pięciu sekundach!");
}, 5000);

clearTimeout(timeout);

var counter = 0,
    clock = null;

function tick() {

    if(counter <= 5) {
        console.log(counter++);
    } else {
        clearInterval(clock);
    }

}

// clock = setInterval(tick, 1000);

counter = 0;

function tock() {

    if(counter <= 5) {
        console.log(counter++);
        setTimeout(tock, 1000);
    }

}

tock();