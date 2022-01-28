let counter = 0;

function tick() {
  if (counter <= 7) {
    console.log(counter++);
    setTimeout(tick, 1000);
  }
}

tick();
