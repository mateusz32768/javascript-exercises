let counter = 0;

let clock = setInterval(() => {
  if (counter < 10) {
    console.log(counter++);
  } else {
    clearInterval(clock);
  }
}, 1000);
